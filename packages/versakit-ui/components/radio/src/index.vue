<script setup lang="ts">
import { computed, inject } from 'vue'
import { radio } from './index.variants'
import type {
  RadioProps,
  RadioPassThroughAttributes,
  RadioSize,
  RadioVariant,
} from './type'

// 定义注入的单选组上下文类型
interface RadioGroupContext {
  name?: string
  modelValue?: string | number | boolean
  size?: RadioSize
  variant?: RadioVariant
  disabled?: boolean
  readonly?: boolean
  updateModelValue?: (value: string | number | boolean) => void
}

// 注入单选组上下文
const radioGroup = inject<RadioGroupContext | null>('vk-radio-group', null)

const props = withDefaults(
  defineProps<RadioProps & { pt?: RadioPassThroughAttributes }>(),
  {
    variant: 'default',
    size: 'md',
    disabled: false,
    readonly: false,
    unstyled: false,
  },
)

const emit = defineEmits(['update:checked', 'change'])

// 合并单选组上下文和单选框自身的属性
const finalName = computed(() => radioGroup?.name ?? props.name)
const finalVariant = computed(() => radioGroup?.variant ?? props.variant)
const finalSize = computed(() => radioGroup?.size ?? props.size)
const finalDisabled = computed(() => radioGroup?.disabled || props.disabled)
const finalReadonly = computed(() => radioGroup?.readonly || props.readonly)

// 计算是否选中
const isChecked = computed(() => {
  if (radioGroup) {
    return radioGroup.modelValue === props.value
  }
  return props.checked
})

// 样式计算
const { root, input, label } = computed(() => {
  if (props.unstyled) {
    return {
      root: {},
      input: {},
      label: {},
    }
  }

  return radio({
    variant: finalVariant.value,
    size: finalSize.value,
    disabled: finalDisabled.value,
  })
}).value

// 处理点击
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if (finalDisabled.value || finalReadonly.value) {
    return
  }

  if (radioGroup?.updateModelValue && props.value !== undefined) {
    radioGroup.updateModelValue(props.value)
  } else {
    emit('update:checked', target.checked)
    emit('change', target.checked)
  }
}
</script>

<template>
  <label
    :class="root"
    :data-disabled="finalDisabled"
    :data-readonly="finalReadonly"
    :data-checked="isChecked"
    v-bind="props.pt?.root"
  >
    <input
      type="radio"
      :class="input"
      :name="finalName"
      :value="value"
      :checked="isChecked"
      :disabled="finalDisabled || finalReadonly"
      :aria-disabled="finalDisabled"
      :aria-readonly="finalReadonly"
      :aria-label="ariaLabel"
      @change="handleChange"
      v-bind="props.pt?.input"
    />
    <span :class="label" v-if="$slots.default" v-bind="props.pt?.label">
      <slot />
    </span>
  </label>
</template>
