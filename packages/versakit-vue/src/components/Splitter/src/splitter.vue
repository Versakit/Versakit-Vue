<template>
  <div :class="classes" ref="_ref">
    <template
      v-for="(_, index) in Array.from({ length: panelCount })"
      :key="index"
    >
      <!-- 面板 -->
      <slot v-if="index === 0" :name="'panel-' + index"></slot>
      <template v-else>
        <!-- 分隔条 -->
        <div
          :class="gutterClasses"
          :style="{
            [props.layout === 'horizontal' ? 'width' : 'height']:
              props.gutterSize + 'px',
          }"
          @mousedown="onGutterMouseDown($event, index - 1)"
          @touchstart="onGutterMouseDown($event, index - 1)"
        >
          <div :class="gutterHandlerClasses"></div>
        </div>
        <!-- 面板 -->
        <slot :name="'panel-' + index"></slot>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  splitterStyle,
  splitterGutterStyle,
  splitterGutterHandlerStyle,
} from './index.variants'
import type { SplitterProps } from './type'
import { SplitterEmits } from './type'
import { useSplitter } from './use-splitter'

defineOptions({
  name: 'Splitter',
})

const props = withDefaults(defineProps<SplitterProps>(), {
  layout: 'horizontal',
  gutterSize: 4,
  minSize: 10,
  unstyled: false,
})

const emit = defineEmits(SplitterEmits)

const { _ref, panelSizes, panelCount, isDragging, onGutterMouseDown } =
  useSplitter(props, emit)

// 计算样式类
const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : splitterStyle({
        layout: props.layout,
        class: props.pt?.root,
      })
})

const gutterClasses = computed(() => {
  return props.unstyled
    ? props.pt?.gutter || ''
    : splitterGutterStyle({
        layout: props.layout,
        class: props.pt?.gutter,
      })
})

const gutterHandlerClasses = computed(() => {
  return props.unstyled
    ? props.pt?.gutterHandler || ''
    : splitterGutterHandlerStyle({
        layout: props.layout,
        class: props.pt?.gutterHandler,
      })
})

defineExpose({
  _ref,
  panelSizes,
  panelCount,
  isDragging,
})
</script>
