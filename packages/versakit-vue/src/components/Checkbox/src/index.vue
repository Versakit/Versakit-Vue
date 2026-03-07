<template>
  <label
    :class="rootClass"
    @click.prevent="toggle"
    @keydown="onKeyDown"
    tabindex="0"
  >
    <input
      type="checkbox"
      class="sr-only"
      :checked="isChecked"
      :disabled="isDisabled"
    />
    <div :class="checkboxClass">
      <span :class="iconClass" v-if="isChecked">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-3/4"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
    </div>
    <span v-if="props.label" :class="labelClass">{{ props.label }}</span>
    <slot v-else></slot>
  </label>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { checkboxStyle } from './index.variants'
import type { CheckboxProps, CheckboxGroupContext } from './type'

defineOptions({
  name: 'Checkbox',
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  disabled: false,
  size: 'default',
  color: 'blue',
  unstyled: false,
})

const emit = defineEmits(['update:modelValue', 'change'])

const groupContext = inject<CheckboxGroupContext | null>('checkbox-group', null)

const isChecked = computed(() => {
  if (groupContext) {
    const value = props.value
    return groupContext.modelValue.value.includes(
      value as string | number | boolean,
    )
  }

  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value as any)
  }

  return !!props.modelValue
})

const isDisabled = computed(() => {
  return groupContext?.disabled.value || false || props.disabled
})

const currentSize = computed(() => {
  return groupContext?.size.value || props.size || 'default'
})

const currentColor = computed(() => {
  return groupContext?.color.value || props.color || 'blue'
})

const toggle = () => {
  if (isDisabled.value) return

  if (groupContext) {
    const value = props.value
    const currentModel = [...groupContext.modelValue.value]
    const index = currentModel.indexOf(value as string | number | boolean)

    if (index === -1) {
      // Add
      if (
        groupContext.max.value &&
        currentModel.length >= groupContext.max.value
      )
        return
      currentModel.push(value as string | number | boolean)
    } else {
      // Remove
      if (
        groupContext.min.value &&
        currentModel.length <= groupContext.min.value
      )
        return
      currentModel.splice(index, 1)
    }

    groupContext.changeEvent(currentModel)
  } else {
    // Standalone
    if (Array.isArray(props.modelValue)) {
      const value = props.value
      const currentModel = [...props.modelValue]
      const index = currentModel.indexOf(value as any)

      if (index === -1) {
        currentModel.push(value as any)
      } else {
        currentModel.splice(index, 1)
      }

      emit('update:modelValue', currentModel)
      emit('change', currentModel)
    } else {
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
      emit('change', newValue)
    }
  }
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggle()
  }
}

// Styles
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  const styles = checkboxStyle({
    checked: isChecked.value,
    disabled: isDisabled.value,
    size: currentSize.value,
    color: currentColor.value,
  })

  return styles.root({ class: props.pt?.root })
})

const checkboxClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.checkbox || ''
  }

  const styles = checkboxStyle({
    checked: isChecked.value,
    disabled: isDisabled.value,
    size: currentSize.value,
    color: currentColor.value,
  })

  return styles.checkbox({ class: props.pt?.checkbox })
})

const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || ''
  }

  const styles = checkboxStyle({
    checked: isChecked.value,
    disabled: isDisabled.value,
    size: currentSize.value,
    color: currentColor.value,
  })

  return styles.icon({ class: props.pt?.icon })
})

const labelClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.label || ''
  }

  const styles = checkboxStyle({
    checked: isChecked.value,
    disabled: isDisabled.value,
    size: currentSize.value,
    color: currentColor.value,
  })

  return styles.label({ class: props.pt?.label })
})
</script>
