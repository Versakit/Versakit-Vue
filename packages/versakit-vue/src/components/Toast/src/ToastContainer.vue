<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
    <template v-for="pos in positions" :key="pos">
      <div
        :class="[
          'absolute flex w-full flex-col gap-4 p-4 md:max-w-[420px]',
          getPositionClasses(pos),
        ]"
      >
        <TransitionGroup
          tag="div"
          :enter-active-class="getTransitionClasses(pos).enter"
          :leave-active-class="getTransitionClasses(pos).leave"
          :enter-from-class="getTransitionClasses(pos).enterFrom"
          :leave-to-class="getTransitionClasses(pos).leaveTo"
          move-class="transition-all duration-300 ease-in-out"
          class="flex flex-col gap-4 w-full"
        >
          <ToastItem
            v-for="toast in getToastsByPosition(pos)"
            :key="toast.id"
            v-bind="toast"
            @close="handleClose"
          />
        </TransitionGroup>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { toasts, remove } from './state'
import ToastItem from './ToastItem.vue'
import type { ToastPosition } from './type'

const positions: ToastPosition[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'top-center',
  'bottom-center',
]

const getToastsByPosition = (position: ToastPosition) => {
  return toasts.value.filter((t) => (t.position || 'top-right') === position)
}

const handleClose = (id: string) => {
  remove(id)
}

const getPositionClasses = (position: ToastPosition) => {
  switch (position) {
    case 'top-left':
      return 'top-0 left-0 items-start'
    case 'top-right':
      return 'top-0 right-0 items-end'
    case 'bottom-left':
      return 'bottom-0 left-0 items-start justify-end'
    case 'bottom-right':
      return 'bottom-0 right-0 items-end justify-end'
    case 'top-center':
      return 'top-0 left-1/2 -translate-x-1/2 items-center'
    case 'bottom-center':
      return 'bottom-0 left-1/2 -translate-x-1/2 items-center justify-end'
    default:
      return 'top-0 right-0 items-end'
  }
}

const getTransitionClasses = (position: ToastPosition) => {
  const isTop = position.includes('top')
  const isCenter = position.includes('center')
  const isRight = position.includes('right')

  let enterFrom = ''
  let leaveTo = ''

  if (isCenter) {
    enterFrom = isTop
      ? '-translate-y-full opacity-0'
      : 'translate-y-full opacity-0'
    leaveTo = isTop
      ? '-translate-y-full opacity-0'
      : 'translate-y-full opacity-0'
  } else if (!isTop) {
    // Bottom positions (left, center, right) should all slide from/to bottom
    enterFrom = 'translate-y-full opacity-0'
    leaveTo = 'translate-y-full opacity-0'
  } else if (isRight) {
    enterFrom = 'translate-x-full opacity-0'
    leaveTo = 'translate-x-full opacity-0'
  } else {
    enterFrom = '-translate-x-full opacity-0'
    leaveTo = '-translate-x-full opacity-0'
  }

  return {
    enter: 'transition-all duration-300 ease-out',
    leave: 'transition-all duration-200 ease-in absolute w-full',
    enterFrom,
    leaveTo,
  }
}
</script>
