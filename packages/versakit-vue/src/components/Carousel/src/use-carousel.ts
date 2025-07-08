import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import type { CarouselProps } from './type'

export const useCarousel = (props: CarouselProps, emit: any) => {
  const activeIndex = ref(props.activeIndex || 0)
  const slideCount = ref(0)
  const autoplayTimer = ref<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = ref(0)
  const touchStartY = ref(0)

  const setSlideCount = (count: number) => {
    slideCount.value = count
  }

  const goToSlide = (index: number) => {
    let newIndex = index

    if (props.loop) {
      if (index < 0) {
        newIndex = slideCount.value - 1
      } else if (index >= slideCount.value) {
        newIndex = 0
      }
    } else {
      if (index < 0) {
        newIndex = 0
      } else if (index >= slideCount.value) {
        newIndex = slideCount.value - 1
      }
    }

    if (newIndex !== activeIndex.value) {
      activeIndex.value = newIndex
      emit('change', newIndex)
      emit('update:activeIndex', newIndex)
    }
  }

  const next = () => {
    goToSlide(activeIndex.value + 1)
  }

  const prev = () => {
    goToSlide(activeIndex.value - 1)
  }

  const startAutoplay = () => {
    if (props.autoplay && props.interval && !autoplayTimer.value) {
      autoplayTimer.value = setInterval(() => {
        next()
      }, props.interval)
    }
  }

  const stopAutoplay = () => {
    if (autoplayTimer.value) {
      clearInterval(autoplayTimer.value)
      autoplayTimer.value = null
    }
  }

  const handleTouchStart = (e: TouchEvent) => {
    if (!props.touchable) return

    touchStartX.value = e.touches[0].clientX
    touchStartY.value = e.touches[0].clientY
    stopAutoplay()
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (!props.touchable) return

    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const diffX = touchEndX - touchStartX.value
    const diffY = touchEndY - touchStartY.value

    // 水平滑动
    if (props.direction === 'horizontal' && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 50) {
        prev()
      } else if (diffX < -50) {
        next()
      }
    }
    // 垂直滑动
    else if (
      props.direction === 'vertical' &&
      Math.abs(diffY) > Math.abs(diffX)
    ) {
      if (diffY > 50) {
        prev()
      } else if (diffY < -50) {
        next()
      }
    }

    startAutoplay()
  }

  const transformStyle = computed(() => {
    if (props.effect === 'fade') return {}

    if (props.direction === 'horizontal') {
      return { transform: `translateX(-${activeIndex.value * 100}%)` }
    } else {
      return { transform: `translateY(-${activeIndex.value * 100}%)` }
    }
  })

  watch(
    () => props.activeIndex,
    (newVal) => {
      if (newVal !== undefined && newVal !== activeIndex.value) {
        activeIndex.value = newVal
      }
    },
  )

  onMounted(() => {
    startAutoplay()
  })

  onUnmounted(() => {
    stopAutoplay()
  })

  return {
    activeIndex,
    setSlideCount,
    goToSlide,
    next,
    prev,
    handleTouchStart,
    handleTouchEnd,
    transformStyle,
    startAutoplay,
    stopAutoplay,
  }
}
