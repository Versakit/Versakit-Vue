<template>
  <div
    :class="rootClasses"
    ref="_ref"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @touchcancel="handleTouchCancel"
  >
    <!-- 轮播图容器 -->
    <div class="overflow-hidden w-full">
      <div
        :class="containerClasses"
        :style="containerStyle"
        :aria-live="props.autoplay ? 'off' : 'polite'"
        role="region"
        aria-roledescription="carousel"
      >
        <slot
          v-for="(_, index) in slidesCount"
          :key="index"
          :name="`item-${index}`"
          :active="activeIndex === index"
          :index="index"
        >
          <div
            :class="itemClasses"
            v-if="$slots[`item-${index}`]"
            role="group"
            aria-roledescription="slide"
            :aria-label="`幻灯片 ${index + 1} / ${slidesCount}`"
            :aria-hidden="activeIndex !== index"
          >
            <slot :name="`item-${index}`" />
          </div>
        </slot>
      </div>
    </div>

    <div
      v-if="navigation && !disabled && slidesCount > 1"
      :class="navigationClasses"
    >
      <button
        :class="prevButtonClasses"
        @click="prev"
        aria-label="上一张"
        type="button"
        :disabled="!loop && activeIndex === 0"
      >
        <slot name="prev-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </slot>
      </button>
      <button
        :class="nextButtonClasses"
        @click="next"
        aria-label="下一张"
        type="button"
        :disabled="!loop && activeIndex === slidesCount - 1"
      >
        <slot name="next-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </slot>
      </button>
    </div>

    <div
      v-if="indicators && !disabled && slidesCount > 1"
      :class="indicatorsClasses"
    >
      <button
        v-for="index in slidesCount"
        :key="index"
        :class="getIndicatorClasses(index - 1)"
        @click="goToSlide(index - 1)"
        :aria-label="`转到幻灯片 ${index}`"
        :aria-current="activeIndex === index - 1"
        type="button"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, useSlots, ref, watch } from 'vue'
import {
  carouselStyle,
  carouselContainerStyle,
  carouselItemStyle,
  carouselNavigationStyle,
  carouselButtonStyle,
  carouselIndicatorsStyle,
  carouselIndicatorStyle,
} from './index.variants'
import type { CarouselProps } from './type'
import { CarouselEmits } from './type'
import { useCarousel } from './use-carousel'

const emit = defineEmits(CarouselEmits)
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

const slots = useSlots()
const slidesCount = ref(0)

const {
  _ref,
  activeIndex,
  isTransitioning,
  setSlideCount,
  goToSlide,
  next,
  prev,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleTouchCancel,
} = useCarousel(props, emit)

// 计算轮播图中的幻灯片数量
onMounted(() => {
  // 计算幻灯片数量（查找以item-开头的插槽）
  let count = 0
  for (const key in slots) {
    if (key.startsWith('item-')) {
      count++
    }
  }
  slidesCount.value = count
  setSlideCount(count)
})

// 监听插槽变化
watch(
  () => slots,
  () => {
    // 重新计算幻灯片数量
    let count = 0
    for (const key in slots) {
      if (key.startsWith('item-')) {
        count++
      }
    }
    slidesCount.value = count
    setSlideCount(count)
  },
  { deep: true },
)

// 样式计算
const rootClasses = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : carouselStyle({
        variant: props.variant,
        size: props.size,
        disabled: props.disabled,
        class: props.pt?.root,
      })
})

const containerClasses = computed(() => {
  return props.unstyled
    ? props.pt?.container || ''
    : carouselContainerStyle({
        class: props.pt?.container,
      })
})

const containerStyle = computed(() => {
  return {
    transform: `translateX(-${activeIndex.value * 100}%)`,
    width: `${slidesCount.value * 100}%`, // 确保容器宽度正确
    transition: isTransitioning.value ? 'transform 300ms ease-in-out' : 'none',
  }
})

const itemClasses = computed(() => {
  return props.unstyled
    ? props.pt?.item || ''
    : carouselItemStyle({
        class: props.pt?.item,
      })
})

const navigationClasses = computed(() => {
  return props.unstyled
    ? props.pt?.navigation || ''
    : carouselNavigationStyle({
        class: props.pt?.navigation,
      })
})

const prevButtonClasses = computed(() => {
  return props.unstyled
    ? props.pt?.prevButton || ''
    : carouselButtonStyle({
        direction: 'prev',
        class: props.pt?.prevButton,
      })
})

const nextButtonClasses = computed(() => {
  return props.unstyled
    ? props.pt?.nextButton || ''
    : carouselButtonStyle({
        direction: 'next',
        class: props.pt?.nextButton,
      })
})

const indicatorsClasses = computed(() => {
  return props.unstyled
    ? props.pt?.indicators || ''
    : carouselIndicatorsStyle({
        class: props.pt?.indicators,
      })
})

const getIndicatorClasses = (index: number) => {
  return props.unstyled
    ? index === activeIndex.value
      ? props.pt?.activeIndicator || ''
      : props.pt?.indicator || ''
    : carouselIndicatorStyle({
        active: index === activeIndex.value,
        class:
          index === activeIndex.value
            ? props.pt?.activeIndicator
            : props.pt?.indicator,
      })
}

defineExpose({
  _ref,
  activeIndex,
  slidesCount,
  goToSlide,
  next,
  prev,
})
</script>
