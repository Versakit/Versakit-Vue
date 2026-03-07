<template>
  <div
    :class="[
      'relative flex flex-1',
      context?.direction.value === 'vertical'
        ? 'flex-col pb-8 last:pb-0'
        : 'flex-row items-center last:flex-none',
      isClickable ? 'cursor-pointer' : 'cursor-default',
    ]"
    @click="handleClick"
  >
    <!-- Line (Connector) -->
    <div
      v-if="!isLast"
      :class="[
        'absolute transition-colors duration-300',
        context?.direction.value === 'vertical'
          ? 'left-[15px] top-[30px] h-[calc(100%-10px)] w-[2px]'
          : 'left-[50%] right-[-50%] top-[15px] h-[2px] w-full',
        isFinished ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700',
      ]"
    ></div>

    <!-- Icon Container -->
    <div class="relative z-10 flex flex-col items-center">
      <div
        :class="[
          'flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300',
          statusClasses,
        ]"
      >
        <slot name="icon">
          <svg
            v-if="computedStatus === 'finish'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else-if="computedStatus === 'error'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
          <span v-else>{{ index + 1 }}</span>
        </slot>
      </div>
    </div>

    <!-- Content -->
    <div
      :class="[
        'flex flex-col',
        context?.direction.value === 'vertical'
          ? 'ml-4 mt-0.5'
          : 'absolute top-8 left-1/2 -translate-x-1/2 w-max max-w-[120px] text-center mt-2',
      ]"
    >
      <div
        :class="[
          'text-sm font-medium transition-colors duration-300',
          isProcess || isFinished
            ? 'text-gray-900 dark:text-white'
            : 'text-gray-500 dark:text-gray-400',
          computedStatus === 'error' ? 'text-red-500' : '',
        ]"
      >
        <slot name="title">{{ title }}</slot>
      </div>
      <div
        v-if="description || $slots.description"
        class="mt-1 text-xs text-gray-500 dark:text-gray-400"
      >
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from 'vue'
import type { StepsContext, StepStatus } from './type'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    status?: StepStatus
    disabled?: boolean
  }>(),
  {
    disabled: false,
  },
)

const context = inject<StepsContext>('steps-context')
const id = Symbol('step-item')

onMounted(() => {
  context?.registerStep(id)
})

onUnmounted(() => {
  context?.unregisterStep(id)
})

const index = computed(() => {
  return context?.steps.value.indexOf(id) ?? -1
})

const isLast = computed(() => {
  return index.value === (context?.steps.value.length ?? 0) - 1
})

const computedStatus = computed(() => {
  if (props.status) return props.status
  if (!context) return 'wait'

  const currentIndex = context.current.value

  if (index.value < currentIndex) return 'finish'
  if (index.value === currentIndex) return context.status.value
  return 'wait'
})

const isFinished = computed(() => computedStatus.value === 'finish')
const isProcess = computed(() => computedStatus.value === 'process')
const isClickable = computed(() => !props.disabled && context)

const statusClasses = computed(() => {
  switch (computedStatus.value) {
    case 'finish':
      return 'border-blue-500 bg-white text-blue-500 dark:border-blue-500 dark:bg-gray-900'
    case 'process':
      return 'border-blue-500 bg-blue-500 text-white dark:border-blue-500 dark:bg-blue-500'
    case 'error':
      return 'border-red-500 bg-white text-red-500 dark:border-red-500 dark:bg-gray-900'
    default:
      return 'border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900'
  }
})

const handleClick = () => {
  if (isClickable.value && context) {
    context.onChange(index.value)
  }
}
</script>
