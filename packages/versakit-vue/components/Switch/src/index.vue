<script setup lang="ts">
import { computed } from 'vue'
import { useSwitch } from '@versakit/composables'
import { switchRoot, switchTrack, switchThumb } from './index.variants'
import type { SwitchProps } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Switch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  loading: false,
  size: 'md',
  color: 'primary',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

// 使用useSwitch钩子处理所有逻辑
const { checked, toggle, onKeyDown } = useSwitch({
  modelValue: props.modelValue,
  disabled: props.disabled || props.loading,
  onChange: (value: boolean) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
})

// 样式计算
const rootClass = computed(() =>
  switchRoot({
    disabled: props.disabled,
    size: props.size,
  }),
)

const trackClass = computed(() =>
  switchTrack({
    size: props.size,
    color: props.color,
    checked: checked.value,
    disabled: props.disabled,
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
  if (props.disabled || props.loading) return
  toggle()
}
</script>

<template>
  <label
    :class="rootClass"
    @click="handleToggle"
    @keydown="onKeyDown"
    :tabindex="props.disabled ? -1 : 0"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="props.disabled"
    :aria-label="props.ariaLabel"
    :aria-required="props.required"
  >
    <input
      type="checkbox"
      class="sr-only"
      :checked="checked"
      :disabled="props.disabled"
      :name="props.name"
      :id="props.id"
      :required="props.required"
    />
    <div :class="trackClass">
      <div :class="thumbClass">
        <svg
          v-if="props.loading"
          class="animate-spin h-3 w-3 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
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
    <span v-if="$slots.default" class="ml-2">
      <slot></slot>
    </span>
  </label>
</template>
