<template>
  <div
    :class="[
      'flex w-full gap-4',
      direction === 'vertical' ? 'flex-col' : 'flex-row items-center',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, toRef } from 'vue'
import type { StepsDirection, StepStatus, StepsContext } from './type'

const props = withDefaults(
  defineProps<{
    current?: number
    direction?: StepsDirection
    status?: StepStatus
  }>(),
  {
    current: 0,
    direction: 'horizontal',
    status: 'process',
  },
)

const emit = defineEmits<{
  (e: 'update:current', value: number): void
  (e: 'change', value: number): void
}>()

const steps = ref<symbol[]>([])

const registerStep = (id: symbol) => {
  steps.value.push(id)
}

const unregisterStep = (id: symbol) => {
  const index = steps.value.indexOf(id)
  if (index !== -1) {
    steps.value.splice(index, 1)
  }
}

const handleChange = (index: number) => {
  if (index !== props.current) {
    emit('update:current', index)
    emit('change', index)
  }
}

provide<StepsContext>('steps-context', {
  current: toRef(props, 'current'),
  direction: toRef(props, 'direction'),
  status: toRef(props, 'status'),
  steps,
  registerStep,
  unregisterStep,
  onChange: handleChange,
})
</script>
