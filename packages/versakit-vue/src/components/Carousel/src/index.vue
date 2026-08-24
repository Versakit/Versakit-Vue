<template>
  <div
    :class="rootClasses"
    ref="rootRef"
    role="region"
    aria-roledescription="carousel"
    :aria-label="'Carousel'"
    :tabindex="disabled ? -1 : 0"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @keydown="handleKeydown"
  >
    <div :class="containerClasses" ref="containerRef">
      <div
        :class="trackClasses"
        ref="trackRef"
        :style="trackStyle"
        @transitionend="handleTransitionEnd"
      >
        <div
          v-for="(item, index) in displayItems"
          :key="getItemKey(index)"
          :class="slideClasses"
          role="group"
          aria-roledescription="slide"
          :aria-hidden="getRealIndex(index) !== activeIndex"
        >
          <slot :name="getItemSlotName(index)"></slot>
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <template v-if="navigation && !disabled">
      <button
        v-if="canShowPrevButton"
        :class="prevButtonClasses"
        @click="prev"
        aria-label="Previous slide"
        :tabindex="disabled ? -1 : 0"
        type="button"
        :disabled="isTransitioning"
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
        v-if="canShowNextButton"
        :class="nextButtonClasses"
        @click="next"
        aria-label="Next slide"
        :tabindex="disabled ? -1 : 0"
        type="button"
        :disabled="isTransitioning"
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
        :aria-current="index === activeIndex ? 'true' : undefined"
        :tabindex="disabled ? -1 : 0"
        type="button"
        :disabled="isTransitioning"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  ref,
  watch,
  onMounted,
  onUnmounted,
  useSlots,
  nextTick,
} from 'vue'
import { carouselStyle } from './index.variants'
import type { CarouselProps } from './type'
import { CarouselEmits } from './type'

defineOptions({ name: 'Carousel' })

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
  pauseOnHover: true,
  transitionDuration: 500,
  unstyled: false,
})

const emit = defineEmits(CarouselEmits)

const slots = useSlots()
const rootRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)

const activeIndex = ref(props.initialIndex)
const currentTranslate = ref(props.initialIndex)
const isTransitioning = ref(false)
const isPaused = ref(false)
const autoplayTimer = ref<ReturnType<typeof setInterval> | null>(null)

const touchStartX = ref(0)
const touchStartY = ref(0)
const touchEndX = ref(0)
const touchEndY = ref(0)
const minSwipeDistance = 50

const itemCount = computed(() => {
  if (!slots) return 0
  let count = 0
  while (slots[`item-${count}`]) {
    count++
  }
  return count || 1
})

const isLoopEnabled = computed(() => props.loop && itemCount.value > 1)

/** Display track: [cloneLast, ...items, cloneFirst] when looping */
const displayItems = computed(() => {
  const items = Array.from({ length: itemCount.value }, (_, i) => i)
  if (!isLoopEnabled.value) return items
  return [items.length - 1, ...items, 0]
})

/** Offset of real slides in the track (1 when looping due to leading clone) */
const trackOffset = computed(() => (isLoopEnabled.value ? 1 : 0))

const trackStyle = computed(() => {
  // Track is width:100% of viewport; each slide is flex:0 0 100%.
  // translateX(%) is relative to the track (viewport), so -100% = one slide.
  const translateX = -(currentTranslate.value + trackOffset.value) * 100
  return {
    transform: `translateX(${translateX}%)`,
    transition: isTransitioning.value
      ? `transform ${props.transitionDuration}ms ease-in-out`
      : 'none',
  }
})

const canShowPrevButton = computed(() => props.loop || activeIndex.value > 0)

const canShowNextButton = computed(
  () => props.loop || activeIndex.value < itemCount.value - 1,
)

const getItemKey = (index: number) => `slide-${index}`

const getRealIndex = (displayIndex: number) => {
  const realIndex = displayItems.value[displayIndex]
  return realIndex >= 0 && realIndex < itemCount.value ? realIndex : 0
}

const getItemSlotName = (index: number) => `item-${getRealIndex(index)}`

const rootClasses = computed(() =>
  props.unstyled
    ? props.pt?.root || ''
    : carouselStyle({
        variant: props.variant,
        size: props.size,
        class: props.pt?.root,
      }),
)

const containerClasses = computed(() =>
  props.unstyled
    ? props.pt?.container || ''
    : `relative w-full h-full overflow-hidden ${props.pt?.container || ''}`,
)

const trackClasses = computed(() =>
  props.unstyled
    ? props.pt?.track || ''
    : `flex h-full w-full ${props.pt?.track || ''}`,
)

const slideClasses = computed(() =>
  props.unstyled
    ? props.pt?.item || ''
    : `h-full w-full flex-shrink-0 flex-grow-0 basis-full ${props.pt?.item || ''}`,
)

const prevButtonClasses = computed(() =>
  props.unstyled
    ? props.pt?.prevButton || ''
    : `absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${props.pt?.prevButton || ''}`,
)

const nextButtonClasses = computed(() =>
  props.unstyled
    ? props.pt?.nextButton || ''
    : `absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-black/60 dark:hover:bg-black/80 ${props.pt?.nextButton || ''}`,
)

const indicatorsClasses = computed(() =>
  props.unstyled
    ? props.pt?.indicators || ''
    : `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 ${props.pt?.indicators || ''}`,
)

const indicatorClasses = computed(() =>
  props.unstyled
    ? props.pt?.indicator || ''
    : `w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/50 hover:bg-white/75 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${props.pt?.indicator || ''}`,
)

const activeIndicatorClasses = computed(() =>
  props.unstyled
    ? props.pt?.activeIndicator || ''
    : `w-6 h-2 md:w-8 md:h-3 rounded-full bg-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer ${props.pt?.activeIndicator || ''}`,
)

const emitChange = (nextIndex: number, prevIndex: number) => {
  if (nextIndex === prevIndex) return
  emit('change', nextIndex, prevIndex)
  emit('update:active-index', nextIndex)
}

const next = () => {
  if (props.disabled || isTransitioning.value || itemCount.value <= 1) return

  const prevIndex = activeIndex.value

  if (activeIndex.value < itemCount.value - 1) {
    activeIndex.value++
    currentTranslate.value = activeIndex.value
    isTransitioning.value = true
    emitChange(activeIndex.value, prevIndex)
  } else if (isLoopEnabled.value) {
    // Animate to trailing clone (visually first slide)
    currentTranslate.value = itemCount.value
    isTransitioning.value = true
    activeIndex.value = 0
    emitChange(0, prevIndex)
  }
}

const prev = () => {
  if (props.disabled || isTransitioning.value || itemCount.value <= 1) return

  const prevIndex = activeIndex.value

  if (activeIndex.value > 0) {
    activeIndex.value--
    currentTranslate.value = activeIndex.value
    isTransitioning.value = true
    emitChange(activeIndex.value, prevIndex)
  } else if (isLoopEnabled.value) {
    // Animate to leading clone (visually last slide)
    currentTranslate.value = -1
    isTransitioning.value = true
    activeIndex.value = itemCount.value - 1
    emitChange(activeIndex.value, prevIndex)
  }
}

const goToSlide = (index: number) => {
  if (props.disabled || isTransitioning.value) return
  if (index < 0 || index >= itemCount.value || index === activeIndex.value) {
    return
  }

  const prevIndex = activeIndex.value
  activeIndex.value = index
  currentTranslate.value = index
  isTransitioning.value = true
  emitChange(activeIndex.value, prevIndex)
}

const handleTransitionEnd = (e: TransitionEvent) => {
  // Ignore transitions bubbled from children
  if (e.target !== trackRef.value) return

  if (!isLoopEnabled.value) {
    isTransitioning.value = false
    return
  }

  // After reaching a clone, jump to the real slide without animation
  if (currentTranslate.value === itemCount.value) {
    isTransitioning.value = false
    currentTranslate.value = 0
  } else if (currentTranslate.value === -1) {
    isTransitioning.value = false
    currentTranslate.value = itemCount.value - 1
  } else {
    isTransitioning.value = false
  }
}

const handleTouchStart = (e: TouchEvent) => {
  if (!props.touchSwipe || props.disabled) return
  touchStartX.value = e.changedTouches[0].screenX
  touchStartY.value = e.changedTouches[0].screenY
  touchEndX.value = touchStartX.value
  touchEndY.value = touchStartY.value
}

const handleTouchMove = (e: TouchEvent) => {
  if (!props.touchSwipe || props.disabled) return
  touchEndX.value = e.changedTouches[0].screenX
  touchEndY.value = e.changedTouches[0].screenY
}

const handleTouchEnd = () => {
  if (!props.touchSwipe || props.disabled) return

  const deltaX = touchEndX.value - touchStartX.value
  const deltaY = touchEndY.value - touchStartY.value

  if (
    Math.abs(deltaX) > Math.abs(deltaY) &&
    Math.abs(deltaX) > minSwipeDistance
  ) {
    if (deltaX > 0) {
      prev()
    } else {
      next()
    }
  }

  touchStartX.value = 0
  touchStartY.value = 0
  touchEndX.value = 0
  touchEndY.value = 0
}

const handleMouseEnter = () => {
  if (props.pauseOnHover && props.autoplay) {
    isPaused.value = true
  }
}

const handleMouseLeave = () => {
  if (props.pauseOnHover && props.autoplay) {
    isPaused.value = false
  }
}

const startAutoplay = () => {
  if (props.autoplay && !props.disabled && !autoplayTimer.value) {
    autoplayTimer.value = setInterval(() => {
      if (!isPaused.value) {
        next()
      }
    }, props.interval)
  }
}

const stopAutoplay = () => {
  if (autoplayTimer.value) {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
}

const resetAutoplay = () => {
  stopAutoplay()
  if (props.autoplay && !props.disabled) {
    startAutoplay()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.keyboardNavigation || props.disabled) return
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    prev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
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

watch(() => props.interval, resetAutoplay)

watch(activeIndex, () => {
  resetAutoplay()
})

watch(
  () => props.initialIndex,
  (index) => {
    if (index >= 0 && index < itemCount.value) {
      activeIndex.value = index
      currentTranslate.value = index
      isTransitioning.value = false
    }
  },
)

watch(isLoopEnabled, async () => {
  // Keep position consistent when loop mode toggles
  isTransitioning.value = false
  currentTranslate.value = activeIndex.value
  await nextTick()
})

onMounted(() => {
  if (props.autoplay) {
    startAutoplay()
  }
  if (props.touchSwipe && rootRef.value) {
    rootRef.value.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    rootRef.value.addEventListener('touchmove', handleTouchMove, {
      passive: true,
    })
    rootRef.value.addEventListener('touchend', handleTouchEnd, {
      passive: true,
    })
  }
})

onUnmounted(() => {
  stopAutoplay()
  if (rootRef.value) {
    rootRef.value.removeEventListener('touchstart', handleTouchStart)
    rootRef.value.removeEventListener('touchmove', handleTouchMove)
    rootRef.value.removeEventListener('touchend', handleTouchEnd)
  }
})

defineExpose({
  next,
  prev,
  goToSlide,
  startAutoplay,
  stopAutoplay,
})
</script>
