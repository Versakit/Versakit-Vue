import { ref, watch, onMounted, onBeforeUnmount, type SetupContext } from 'vue'
import type { CarouselProps, ICarouselEmits } from './type'

export const useCarousel = (
  props: CarouselProps,
  emit: SetupContext<ICarouselEmits>['emit'],
) => {
  const _ref = ref<HTMLDivElement | null>(null)
  const activeIndex = ref(props.initialIndex || 0)
  const slidesCount = ref(0)
  const autoplayInterval = ref<number | null>(null)
  const isTransitioning = ref(false)

  // 设置幻灯片数量
  const setSlideCount = (count: number) => {
    slidesCount.value = count
    // 确保初始索引在有效范围内
    if (activeIndex.value >= count) {
      activeIndex.value = count > 0 ? count - 1 : 0
    }
  }

  // 切换到指定索引的幻灯片
  const goToSlide = (index: number) => {
    if (props.disabled || isTransitioning.value || slidesCount.value <= 1)
      return

    const prevIndex = activeIndex.value

    // 处理循环逻辑
    if (index < 0) {
      activeIndex.value = props.loop ? slidesCount.value - 1 : 0
    } else if (index >= slidesCount.value) {
      activeIndex.value = props.loop ? 0 : slidesCount.value - 1
    } else {
      activeIndex.value = index
    }

    if (prevIndex !== activeIndex.value) {
      // 设置过渡状态，防止快速连续切换
      isTransitioning.value = true
      setTimeout(() => {
        isTransitioning.value = false
      }, 350) // 稍微长于CSS过渡时间，确保过渡完成

      emit('change', activeIndex.value, prevIndex)
      emit('update:activeIndex', activeIndex.value)

      // 重置自动播放计时器
      if (props.autoplay && !props.disabled) {
        restartAutoplay()
      }
    }
  }

  // 下一张幻灯片
  const next = () => {
    if (slidesCount.value <= 1 || isTransitioning.value) return
    goToSlide(activeIndex.value + 1)
  }

  // 上一张幻灯片
  const prev = () => {
    if (slidesCount.value <= 1 || isTransitioning.value) return
    goToSlide(activeIndex.value - 1)
  }

  // 处理键盘导航
  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      !props.keyboardNavigation ||
      props.disabled ||
      slidesCount.value <= 1 ||
      isTransitioning.value
    )
      return

    if (e.key === 'ArrowLeft') {
      prev()
    } else if (e.key === 'ArrowRight') {
      next()
    }
  }

  // 处理触摸滑动
  const touchStartX = ref(0)
  const touchEndX = ref(0)
  const isSwiping = ref(false)

  const handleTouchStart = (e: TouchEvent) => {
    if (
      !props.touchSwipe ||
      props.disabled ||
      slidesCount.value <= 1 ||
      isTransitioning.value
    )
      return
    touchStartX.value = e.touches[0].clientX
    isSwiping.value = true

    // 触摸开始时暂停自动播放
    if (props.autoplay) {
      stopAutoplay()
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (
      !props.touchSwipe ||
      props.disabled ||
      !isSwiping.value ||
      slidesCount.value <= 1
    )
      return
    touchEndX.value = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (
      !props.touchSwipe ||
      props.disabled ||
      !isSwiping.value ||
      slidesCount.value <= 1 ||
      isTransitioning.value
    )
      return

    const diff = touchStartX.value - touchEndX.value

    // 检测滑动方向
    if (Math.abs(diff) > 50) {
      // 最小滑动距离
      if (diff > 0) {
        next() // 向左滑，下一张
      } else {
        prev() // 向右滑，上一张
      }
    }

    isSwiping.value = false

    // 触摸结束后恢复自动播放
    if (props.autoplay && !props.disabled) {
      startAutoplay()
    }
  }

  // 处理触摸取消
  const handleTouchCancel = () => {
    // 触摸取消时重置触摸状态
    touchStartX.value = 0
    touchEndX.value = 0
    isSwiping.value = false

    // 触摸取消后恢复自动播放
    if (props.autoplay && !props.disabled) {
      startAutoplay()
    }
  }

  // 启动自动播放
  const startAutoplay = () => {
    if (!props.autoplay || props.disabled || slidesCount.value <= 1) return

    stopAutoplay()

    autoplayInterval.value = window.setInterval(() => {
      if (!isTransitioning.value) {
        next()
      }
    }, props.interval || 3000)
  }

  // 停止自动播放
  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value)
      autoplayInterval.value = null
    }
  }

  // 重新启动自动播放（用于手动切换后重置计时器）
  const restartAutoplay = () => {
    stopAutoplay()
    startAutoplay()
  }

  // 监听属性变化
  watch(
    () => props.autoplay,
    (newValue) => {
      if (newValue) {
        startAutoplay()
      } else {
        stopAutoplay()
      }
    },
  )

  // 监听禁用状态
  watch(
    () => props.disabled,
    (newValue) => {
      if (newValue) {
        stopAutoplay()
      } else if (props.autoplay) {
        startAutoplay()
      }
    },
  )

  // 监听幻灯片数量变化
  watch(
    () => slidesCount.value,
    (newValue) => {
      if (newValue <= 1) {
        stopAutoplay()
      } else if (props.autoplay && !props.disabled) {
        startAutoplay()
      }
    },
  )

  // 生命周期钩子
  onMounted(() => {
    if (props.autoplay && !props.disabled && slidesCount.value > 1) {
      startAutoplay()
    }

    if (props.keyboardNavigation) {
      document.addEventListener('keydown', handleKeyDown)
    }
  })

  onBeforeUnmount(() => {
    stopAutoplay()

    if (props.keyboardNavigation) {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return {
    _ref,
    activeIndex,
    slidesCount,
    isTransitioning,
    setSlideCount,
    goToSlide,
    next,
    prev,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
    startAutoplay,
    stopAutoplay,
  }
}
