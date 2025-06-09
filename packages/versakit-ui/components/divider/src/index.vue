<template>
  <div :class="rootClasses" :style="rootStyles" v-bind="pt?.root">
    <div
      v-if="!$slots.default || type === 'vertical'"
      :class="lineClasses"
      :style="lineStyles"
      v-bind="pt?.line"
    />
    <template v-else>
      <div :class="contentClasses" v-bind="pt?.content">
        <slot />
      </div>
      <div :class="lineClasses" :style="lineStyles" v-bind="pt?.line" />
    </template>
  </div>
</template>
<script lang="ts" setup>
import { computed, useSlots } from 'vue'
import type { DividerProps, DividerPassThroughAttributes } from './type'
import {
  dividerVariants,
  dividerLineVariants,
  dividerContentVariants,
} from './index.variants'
// 定义组件名称
defineOptions({
  name: 'VKDivider',
})
// 直接使用 defineProps 而不定义接口
const props = withDefaults(
  defineProps<
    DividerProps & {
      pt?: DividerPassThroughAttributes
    }
  >(),
  {
    type: 'horizontal',
    align: 'center',
    color: undefined,
    thickness: 1,
    lineStyle: 'solid',
    spacing: 0,
    unstyled: false,
    hasContent: false,
  },
)
const slots = useSlots()
// 为了模板中的简化访问
const { type, pt } = props
// 计算根元素的类名
const rootClasses = computed(() => {
  if (props.unstyled) return 'vk-divider'
  return dividerVariants({
    type: props.type,
    align: props.align,
    lineStyle: props.lineStyle,
    hasContent: !!slots.default && props.type === 'horizontal',
  })
})
// 计算根元素的样式
const rootStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.spacing && props.type === 'horizontal') {
    styles.margin = `${props.spacing}px 0`
  } else if (props.spacing && props.type === 'vertical') {
    styles.margin = `0 ${props.spacing}px`
  }
  return styles
})
// 计算分割线的类名
const lineClasses = computed(() => {
  if (props.unstyled) return 'vk-divider-line'
  return dividerLineVariants({
    type: props.type,
  })
})
// 计算分割线的样式
const lineStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.color) {
    styles.borderColor = props.color
  }
  if (props.thickness) {
    const thickness =
      typeof props.thickness === 'number'
        ? `${props.thickness}px`
        : props.thickness
    if (props.type === 'horizontal') {
      styles.borderTopWidth = thickness
    } else {
      styles.borderLeftWidth = thickness
    }
  }
  return styles
})
// 计算内容的类名
const contentClasses = computed(() => {
  if (props.unstyled) return 'vk-divider-content'
  return dividerContentVariants({
    type: props.type,
  })
})
</script>
