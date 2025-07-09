<template>
  <div
    :class="classes.root"
    @mouseenter="autoplay && stopAutoplay()"
    @mouseleave="autoplay && startAutoplay()"
  >
    <div
      :class="classes.wrapper"
      :style="transformStyle"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <slot
        v-for="(_, index) in slides"
        :key="index"
        :index="index"
        :active="activeIndex === index"
        :class="classes.slide(index)"
      ></slot>
    </div>

    <div v-if="controls" :class="classes.controls">
      <button
        :class="classes.prevButton"
        @click="prev()"
        :disabled="!loop && activeIndex === 0"
        :aria-label="'上一项'"
      >
        <slot name="prev-icon">
          <span aria-hidden="true">←</span>
        </slot>
      </button>
      <button
        :class="classes.nextButton"
        @click="next()"
        :disabled="!loop && activeIndex === slides.length - 1"
        :aria-label="'下一项'"
      >
        <slot name="next-icon">
          <span aria-hidden="true">→</span>
        </slot>
      </button>
    </div>

    <div v-if="indicators" :class="classes.indicators">
      <button
        v-for="(_, index) in slides"
        :key="index"
        :class="classes.indicator(index)"
        @click="goToSlide(index)"
        :aria-label="`切换到幻灯片 ${index + 1}`"
        :aria-current="activeIndex === index"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots, onMounted } from 'vue'
import {
  carouselStyle,
  wrapperStyle,
  slideStyle,
  controlsStyle,
  buttonStyle,
  indicatorsStyle,
  indicatorStyle,
} from './index.variants'
import type { CarouselProps } from './type'
import { CarouselEmits } from './type'
import { useCarousel } from './use-carousel'

const props = withDefaults(defineProps<CarouselProps>(), {
  autoplay: false,
  interval: 3000,
  activeIndex: 0,
  direction: 'horizontal',
  loop: true,
  indicators: true,
  controls: true,
  effect: 'slide',
  touchable: true,
  unstyled: false,
  pt: () => ({}),
})

const emit = defineEmits(CarouselEmits)
const slots = useSlots()
const slides = ref<any[]>([])

const {
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
} = useCarousel(props, emit)

const classes = computed(() => ({
  root: props.unstyled
    ? props.pt?.root || ''
    : carouselStyle({ direction: props.direction, class: props.pt?.root }),

  wrapper: props.unstyled
    ? props.pt?.wrapper || ''
    : wrapperStyle({
        direction: props.direction,
        effect: props.effect,
        class: props.pt?.wrapper,
      }),

  slide: (index: number) =>
    props.unstyled
      ? props.pt?.slide || ''
      : slideStyle({
          effect: props.effect,
          active: activeIndex.value === index,
          class: props.pt?.slide,
        }),

  controls: props.unstyled
    ? props.pt?.controls || ''
    : controlsStyle({ class: props.pt?.controls }),

  prevButton: props.unstyled
    ? props.pt?.prevButton || ''
    : buttonStyle({ class: props.pt?.prevButton }),

  nextButton: props.unstyled
    ? props.pt?.nextButton || ''
    : buttonStyle({ class: props.pt?.nextButton }),

  indicators: props.unstyled
    ? props.pt?.indicators || ''
    : indicatorsStyle({ class: props.pt?.indicators }),

  indicator: (index: number) =>
    props.unstyled
      ? props.pt?.indicator || ''
      : indicatorStyle({
          active: activeIndex.value === index,
          class:
            index === activeIndex.value
              ? props.pt?.activeIndicator
              : props.pt?.indicator,
        }),
}))

onMounted(() => {
  if (slots.default) {
    let slotContent: any[] = []
    try {
      // 将默认槽内容解析为vnodes数组
      slotContent =
        slots.default({
          class: '',
          key: 0,
          index: 0,
          active: false,
        }) || []
    } catch (e) {
      console.warn('Failed to render carousel slots:', e)
    }

    slides.value = slotContent.filter((vnode: any) => vnode.type !== Comment)
    setSlideCount(slides.value.length)
  }
})

// 对外暴露方法
defineExpose({
  next,
  prev,
  goToSlide,
})
</script>
