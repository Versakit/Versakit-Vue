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
      :checked="checked"
      :disabled="props.disabled"
    />
    <div :class="checkboxClass">
      <span :class="iconClass" v-if="checked">
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
import { computed } from 'vue'
import { useCheckbox } from './composables/useCheckbox'
import { checkboxStyle } from './index.variants'
import type { CheckboxProps } from './type'

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

const emit = defineEmits(['update:modelValue'])

const { checked, toggle, onKeyDown } = useCheckbox({
  modelValue: props.modelValue,
  disabled: props.disabled,
  onChange: (val) => emit('update:modelValue', val),
})

const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  const styles = checkboxStyle({
    checked: checked.value,
    disabled: props.disabled,
    size: props.size,
    color: props.color,
  })

  return styles.root({ class: props.pt?.root })
})

const checkboxClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.checkbox || ''
  }

  const styles = checkboxStyle({
    checked: checked.value,
    disabled: props.disabled,
    size: props.size,
    color: props.color,
  })

  return styles.checkbox({ class: props.pt?.checkbox })
})

const iconClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.icon || ''
  }

  const styles = checkboxStyle({
    checked: checked.value,
    disabled: props.disabled,
    size: props.size,
    color: props.color,
  })

  return styles.icon({ class: props.pt?.icon })
})

const labelClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.label || ''
  }

  const styles = checkboxStyle({
    checked: checked.value,
    disabled: props.disabled,
    size: props.size,
    color: props.color,
  })

  return styles.label({ class: props.pt?.label })
})
</script>
