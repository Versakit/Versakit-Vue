<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  segmentedControl,
  segmentedControlItem,
  segmentedControlThumb,
} from './index.variants'
import type { SegmentedControlProps, SegmentedControlOption } from './type'

const props = withDefaults(defineProps<SegmentedControlProps>(), {
  modelValue: undefined,
  size: 'md',
  variant: 'primary',
  disabled: false,
  fullWidth: false,
  rounded: false,
  showIcon: false,
  customClass: '',
  animated: true,
  animationDuration: 200,
  allowDeselect: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | undefined): void
  (e: 'change', value: string | number | undefined): void
}>()

// 内部选中值
const selectedValue = ref(props.modelValue)

// 当外部modelValue变化时同步内部状态
watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue
  },
)

// 计算容器样式
const containerClasses = computed(() =>
  segmentedControl({
    size: props.size,
    fullWidth: props.fullWidth,
    rounded: props.rounded,
    disabled: props.disabled,
    class: props.customClass,
  }),
)

// 计算动画持续时间样式
const animationStyle = computed(() => ({
  transitionDuration: props.animated ? `${props.animationDuration}ms` : '0ms',
}))

// 获取选中项索引
const selectedIndex = computed(() => {
  if (selectedValue.value === undefined) return -1
  return props.options.findIndex(
    (option) => option.value === selectedValue.value,
  )
})

// 计算选中指示器的位置和尺寸
const thumbStyle = computed(() => {
  if (selectedIndex.value === -1) {
    return {
      width: '0',
      transform: 'translateX(0)',
      opacity: '0',
    }
  }

  const totalItems = props.options.length
  const itemWidth = `${100 / totalItems}%`
  const translateX = `translateX(${selectedIndex.value * 100}%)`

  return {
    width: itemWidth,
    transform: translateX,
    opacity: '1',
    ...animationStyle.value,
  }
})

// 计算thumb的样式类
const thumbClasses = computed(() =>
  segmentedControlThumb({
    variant: props.variant,
    rounded: props.rounded,
  }),
)

// 选择选项
const selectOption = (option: SegmentedControlOption) => {
  if (props.disabled || option.disabled) return

  // 如果允许取消选择且点击当前选中项，则取消选择
  if (props.allowDeselect && selectedValue.value === option.value) {
    selectedValue.value = undefined
  } else {
    selectedValue.value = option.value
  }

  emit('update:modelValue', selectedValue.value)
  emit('change', selectedValue.value)
}

// 计算选项样式
const getItemClasses = (option: SegmentedControlOption) => {
  return segmentedControlItem({
    size: props.size,
    selected: selectedValue.value === option.value,
    disabled: props.disabled || option.disabled,
    variant: props.variant,
  })
}
</script>

<template>
  <div :class="containerClasses">
    <!-- 选中指示器 -->
    <span
      v-if="selectedIndex !== -1"
      :class="thumbClasses"
      :style="thumbStyle"
      aria-hidden="true"
    ></span>

    <!-- 选项 -->
    <button
      v-for="(option, index) in options"
      :key="index"
      type="button"
      :class="getItemClasses(option)"
      :disabled="disabled || option.disabled"
      @click="selectOption(option)"
      :aria-pressed="selectedValue === option.value"
      :style="animationStyle"
    >
      <span v-if="showIcon && option.icon" class="mr-2">
        <slot name="icon" :icon="option.icon">
          {{ option.icon }}
        </slot>
      </span>
      {{ option.label }}
    </button>
  </div>
</template>
