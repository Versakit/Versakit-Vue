<script setup lang="ts">
import { computed } from 'vue'
import { useSwitch } from '@versakit/composables'
import { switchRoot, switchTrack, switchThumb } from './index.variants'
import type { SwitchProps, SwitchEmits } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Switch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  loading: false,
  locked: false, // 默认不锁定，允许切换
  size: 'md',
  color: 'primary',
})

const emit = defineEmits<SwitchEmits>()

// 使用useSwitch钩子处理所有逻辑
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { checked, toggle, onKeyDown } = useSwitch({
  modelValue: props.modelValue,
  disabled: props.disabled || props.loading,
  locked: props.locked, // 传递locked参数控制开关是否可切换
  onChange: (value: boolean) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
} as any) as any

// 计算是否禁用（组件禁用或加载中）
const isDisabledState = computed(() => props.disabled || props.loading)

// 样式计算
const rootClass = computed(() =>
  switchRoot({
    disabled: isDisabledState.value,
    size: props.size,
  }),
)

const trackClass = computed(() =>
  switchTrack({
    size: props.size,
    color: props.color,
    checked: checked.value,
    disabled: isDisabledState.value,
  }),
)

const thumbClass = computed(() =>
  switchThumb({
    size: props.size,
    checked: checked.value,
    loading: props.loading,
  }),
)

// 点击处理函数
const handleToggle = () => {
  if (isDisabledState.value) return
  toggle()
}

// 焦点状态类
const focusClass =
  'ring-2 ring-offset-2 ring-blue-500 dark:ring-offset-gray-900'
const handleFocus = (e: FocusEvent) => {
  if (isDisabledState.value || !e.currentTarget) return
  ;(e.currentTarget as HTMLElement).classList.add(focusClass)
}

const handleBlur = (e: FocusEvent) => {
  if (!e.currentTarget) return
  ;(e.currentTarget as HTMLElement).classList.remove(focusClass)
}
</script>

<template>
  <div class="vk-switch-wrapper">
    <label
      :class="rootClass"
      @click="handleToggle"
      @keydown="onKeyDown"
      @focus="handleFocus"
      @blur="handleBlur"
      :tabindex="isDisabledState.value ? -1 : 0"
      role="switch"
      :aria-checked="checked.value"
      :aria-disabled="isDisabledState.value"
      :aria-label="props.ariaLabel || undefined"
      :aria-required="props.required"
      :data-state="checked.value ? 'checked' : 'unchecked'"
      :data-disabled="isDisabledState.value ? 'true' : undefined"
    >
      <input
        type="checkbox"
        class="sr-only"
        :checked="checked.value"
        :disabled="isDisabledState.value"
        :name="props.name"
        :id="props.id"
        :required="props.required"
        :aria-hidden="true"
        tabindex="-1"
      />
      <div :class="trackClass" aria-hidden="true">
        <div :class="thumbClass">
          <svg
            v-if="props.loading"
            class="animate-spin h-3 w-3 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    </label>
    <span
      v-if="$slots.default"
      class="ml-2 text-sm text-gray-700 dark:text-gray-300"
      :class="{ 'opacity-50': isDisabledState.value }"
    >
      <slot></slot>
    </span>
  </div>
</template>
