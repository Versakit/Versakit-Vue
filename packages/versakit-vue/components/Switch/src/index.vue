<template>
  <button
    type="button"
    role="switch"
    :aria-checked="checked"
    :disabled="props.disabled"
    @click="toggle"
    @keydown="onKeyDown"
    :class="classes.root()"
  >
    <span :class="classes.thumb()">
      <span
        v-if="checked"
        class="opacity-0 scale-0 absolute inset-0 bg-blue-400/20 rounded-full transition-all duration-300"
        :class="{ 'opacity-100 scale-100': checked }"
      ></span>
    </span>
    <span
      class="absolute inset-0 transition-opacity duration-300"
      :class="{ 'opacity-0': !checked, 'opacity-100': checked }"
    >
      <span
        class="absolute inset-0 bg-blue-400/10 rounded-full transform scale-0 transition-transform duration-500"
        :class="{ 'scale-100': animateRipple }"
      ></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSwitch } from '@versakit/composables'
import { switchStyle } from './index.variants'
import type { SwitchProps } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Switch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
})

const emit = defineEmits(['update:modelValue'])

const { checked, toggle, onKeyDown } = useSwitch({
  modelValue: props.modelValue,
  disabled: props.disabled,
  onChange: (val) => emit('update:modelValue', val),
})

const animateRipple = ref(false)

watch(checked, (newVal) => {
  if (newVal) {
    animateRipple.value = true
    setTimeout(() => {
      animateRipple.value = false
    }, 500)
  }
})

const classes = computed(() =>
  switchStyle({
    checked: checked.value,
    disabled: props.disabled,
  }),
).value
</script>
