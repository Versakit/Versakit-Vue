<template>
  <div :class="classes" ref="rootRef">
    <div :class="containerClasses">
      <template v-for="(_, index) in itemCount">
        <div v-if="index === activeIndex" :key="index" :class="itemClasses">
          <slot :name="`item-${index}`"></slot>
        </div>
      </template>
    </div>

    <!-- Navigation buttons -->
    <template v-if="navigation && !disabled">
      <button
        v-if="navigation && (loop || activeIndex > 0)"
        :class="prevButtonClasses"
        @click="prev"
        :aria-label="'Previous slide'"
        :tabindex="disabled ? -1 : 0"
      >
        <slot name="prev-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </slot>
      </button>
      <button
        v-if="navigation && (loop || activeIndex < itemCount - 1)"
        :class="nextButtonClasses"
        @click="next"
        :aria-label="'Next slide'"
        :tabindex="disabled ? -1 : 0"
      >
        <slot name="next-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </slot>
      </button>
    </template>

    <!-- Indicators -->
    <div v-if="indicators && !disabled" :class="indicatorsClasses">
      <button
        v-for="(_, index) in itemCount"
        :key="index"
        :class="[
          index === activeIndex ? activeIndicatorClasses : indicatorClasses,
        ]"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="index === activeIndex"
        :tabindex="disabled ? -1 : 0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted, useSlots } from 'vue'
import { carouselStyle } from './index.variants'
import type { CarouselProps } from './type'
import { CarouselEmits } from './type'

const props = withDefaults(defineProps<CarouselProps>(), {
  variant: 'default',
  size: 'md',
  autoplay: false,
  interval: 3000,
  loop: true,
  indicators: true,
  navigation: true,
  keyboardNavigation: true,
  touchSwipe: true,
  disabled: false,
  initialIndex: 0,
  unstyled: false,
})

const emit = defineEmits(CarouselEmits)

const slots = useSlots()
const rootRef = ref<HTMLElement | null>(null)
const activeIndex = ref(props.initialIndex)
let autoplayTimer: ReturnType<typeof setInterval> | null = null

// Count items from slots
const itemCount = computed(() => {
  if (!slots) return 0
  let count = 0
  // Count slots named item-0, item-1, item-2, etc.
  while (slots[`item-${count}`]) {
    count++
  }
  return count || 1 // At least 1 item
})

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : carouselStyle({
        variant: props.variant,
        size: props.size,
        class: props.pt?.root,
      })
})

const containerClasses = computed(() => {
  return props.unstyled
    ? props.pt?.container || ''
    : `relative w-full h-full ${props.pt?.container || ''}`
})

const itemClasses = computed(() => {
  return props.unstyled
    ? props.pt?.item || ''
    : `w-full h-full ${props.pt?.item || ''}`
})

const prevButtonClasses = computed(() => {
  return props.unstyled
    ? props.pt?.prevButton || ''
    : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${props.pt?.prevButton || ''}`
})

const nextButtonClasses = computed(() => {
  return props.unstyled
    ? props.pt?.nextButton || ''
    : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${props.pt?.nextButton || ''}`
})

const indicatorsClasses = computed(() => {
  return props.unstyled
    ? props.pt?.indicators || ''
    : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${props.pt?.indicators || ''}`
})

const indicatorClasses = computed(() => {
  return props.unstyled
    ? props.pt?.indicator || ''
    : `w-2 h-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${props.pt?.indicator || ''}`
})

const activeIndicatorClasses = computed(() => {
  return props.unstyled
    ? props.pt?.activeIndicator || ''
    : `w-6 h-2 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${props.pt?.activeIndicator || ''}`
})

const next = () => {
  if (props.disabled) return
  const prevIndex = activeIndex.value
  if (activeIndex.value < itemCount.value - 1) {
    activeIndex.value++
  } else if (props.loop) {
    activeIndex.value = 0
  }
  if (activeIndex.value !== prevIndex) {
    emit('change', activeIndex.value, prevIndex)
    emit('update:active-index', activeIndex.value)
  }
}

const prev = () => {
  if (props.disabled) return
  const prevIndex = activeIndex.value
  if (activeIndex.value > 0) {
    activeIndex.value--
  } else if (props.loop) {
    activeIndex.value = itemCount.value - 1
  }
  if (activeIndex.value !== prevIndex) {
    emit('change', activeIndex.value, prevIndex)
    emit('update:active-index', activeIndex.value)
  }
}

const goToSlide = (index: number) => {
  if (props.disabled) return
  if (index >= 0 && index < itemCount.value) {
    const prevIndex = activeIndex.value
    activeIndex.value = index
    emit('change', activeIndex.value, prevIndex)
    emit('update:active-index', activeIndex.value)
  }
}

const startAutoplay = () => {
  if (props.autoplay && !props.disabled) {
    autoplayTimer = setInterval(() => {
      next()
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.keyboardNavigation || props.disabled) return
  if (e.key === 'ArrowLeft') {
    prev()
  } else if (e.key === 'ArrowRight') {
    next()
  }
}

watch(
  () => props.autoplay,
  (newVal) => {
    if (newVal) {
      startAutoplay()
    } else {
      stopAutoplay()
    }
  },
)

watch(
  () => props.disabled,
  (newVal) => {
    if (newVal) {
      stopAutoplay()
    } else if (props.autoplay) {
      startAutoplay()
    }
  },
)

onMounted(() => {
  if (props.autoplay) {
    startAutoplay()
  }
  if (props.keyboardNavigation && rootRef.value) {
    rootRef.value.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  stopAutoplay()
  if (rootRef.value) {
    rootRef.value.removeEventListener('keydown', handleKeydown)
  }
})

defineExpose({
  next,
  prev,
  goToSlide,
})
</script>
