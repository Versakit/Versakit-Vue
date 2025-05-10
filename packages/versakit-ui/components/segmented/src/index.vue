<script setup lang="ts">
import { computed, ref, onMounted, nextTick } from 'vue'
import type { SegmentedProps } from '../type/index.ts'

defineOptions({ name: 'VKSegmented' })

const props = withDefaults(defineProps<SegmentedProps>(), {
  modelValue: '',
  options: [],
  unstyled: false,
  pt: () => ({}),
})

const componentId = `segmented-${Math.random().toString(36).slice(2, 11)}`
const labelRefs = ref<HTMLElement[]>([])

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const updateValue = (value: string | number) => {
  emit('update:modelValue', value)
}

const activeIndex = computed(() =>
  props.options.findIndex((option: any) => option.value === props.modelValue),
)

const highlightStyle = computed(() => {
  if (labelRefs.value.length === 0) return {}

  const activeLabel = labelRefs.value[activeIndex.value]
  if (!activeLabel) return {}

  let leftOffset = 0
  for (let i = 0; i < activeIndex.value; i++) {
    const label = labelRefs.value[i]
    if (label) {
      leftOffset += label.offsetWidth
    }
  }

  return {
    transform: `translateX(${leftOffset}px)`,
    width: `${activeLabel.offsetWidth}px`,
  }
})

onMounted(async () => {
  await nextTick()
  labelRefs.value = Array.from(
    document.querySelectorAll(`[data-segmented-id="${componentId}"]`),
  )
})

// 处理 unstyled 和 pt 选项
const { unstyled, pt = {} } = props as any
const rootClasses = computed(() => [
  'segmented-control',
  pt.root,
  unstyled ? '' : 'default-root-styles',
])
const containerClasses = computed(() => [
  'segmented-control-container',
  pt.container,
  unstyled ? '' : 'default-container-styles',
])
const highlightClasses = computed(() => [
  'segmented-control-highlight',
  pt.highlight,
  unstyled ? '' : 'default-highlight-styles',
])
const itemClasses = computed(() => [
  'segmented-control-item',
  pt.item,
  unstyled ? '' : 'default-item-styles',
])
</script>

<template>
  <div :class="rootClasses" role="group" aria-label="分段选择器">
    <div :class="containerClasses" role="radiogroup">
      <div :class="highlightClasses" :style="highlightStyle" />
      <div
        v-for="(option, index) in props.options"
        :key="option.value"
        :class="itemClasses"
      >
        <input
          type="radio"
          :id="`${componentId}-${index}`"
          :name="componentId"
          :value="option.value"
          :checked="props.modelValue === option.value"
          @change="updateValue(option.value)"
          aria-labelledby="`${componentId}-label-${index}`"
        />
        <label
          :for="`${componentId}-${index}`"
          :data-segmented-id="componentId"
          :id="`${componentId}-label-${index}`"
          ref="labelRefs"
          aria-describedby="segmented-description"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
    <div id="segmented-description" aria-hidden="true">
      请从以下选项中选择一个
    </div>
  </div>
</template>

<style scoped src="../style/index.css"></style>
