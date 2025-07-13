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
        <!-- 具名插槽渲染 -->
        <template v-if="hasNamedSlots">
          <div
            v-for="index in slidesCount"
            :key="index"
            :class="itemClasses"
            role="group"
            aria-roledescription="slide"
            :aria-label="`幻灯片 ${index} / ${slidesCount}`"
            :aria-hidden="activeIndex !== index - 1"
          >
            <slot
              :name="`item-${index - 1}`"
              :active="activeIndex === index - 1"
              :index="index - 1"
            />
          </div>
        </template>

        <!-- 默认插槽子元素渲染 -->
        <template v-else>
          <div
            v-for="(child, index) in defaultSlotChildren"
            :key="index"
            :class="itemClasses"
            role="group"
            aria-roledescription="slide"
            :aria-label="`幻灯片 ${index + 1} / ${slidesCount}`"
            :aria-hidden="activeIndex !== index"
          >
            <component :is="child" />
          </div>
        </template>
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
import {
  computed,
  onMounted,
  useSlots,
  ref,
  watch,
  nextTick,
  Comment,
  type VNode,
  type Slots,
} from 'vue'
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

const slots = useSlots() as Slots & { default?: () => VNode[] }
const slidesCount = ref(0)
const defaultSlotChildren = ref<VNode[]>([])

const {
  _ref,
  activeIndex,
  setSlideCount,
  goToSlide,
  next,
  prev,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleTouchCancel,
} = useCarousel(props, emit)

// 判断是否有具名插槽
const hasNamedSlots = computed(() => {
  for (const key in slots) {
    if (key.startsWith('item-')) {
      return true
    }
  }
  return false
})

// 计算轮播图中的幻灯片数量
const calculateSlidesCount = () => {
  // 优先检查具名插槽（item-开头的插槽）
  const namedSlotKeys = Object.keys(slots).filter((key) =>
    key.startsWith('item-'),
  )

  if (namedSlotKeys.length > 0) {
    // 按索引排序，确保正确的顺序
    const sortedKeys = namedSlotKeys.sort((a, b) => {
      const indexA = parseInt(a.replace('item-', ''), 10)
      const indexB = parseInt(b.replace('item-', ''), 10)
      return indexA - indexB
    })

    // 找到最大索引，确定幻灯片数量
    const maxIndex = Math.max(
      ...sortedKeys.map((key) => parseInt(key.replace('item-', ''), 10)),
    )
    slidesCount.value = maxIndex + 1
    defaultSlotChildren.value = []
  } else {
    // 否则检查默认插槽的子元素
    const defaultSlot = slots.default?.()
    if (defaultSlot && Array.isArray(defaultSlot)) {
      // 过滤掉注释节点和空白文本节点
      const validChildren = defaultSlot.filter(
        (vnode) =>
          vnode.type !== Comment &&
          !(
            typeof vnode.type === 'symbol' &&
            typeof vnode.children === 'string' &&
            vnode.children.trim() === ''
          ),
      )
      defaultSlotChildren.value = validChildren
      slidesCount.value = validChildren.length
    } else {
      slidesCount.value = 0
      defaultSlotChildren.value = []
    }
  }

  setSlideCount(slidesCount.value)
}

onMounted(() => {
  nextTick(() => {
    calculateSlidesCount()
  })
})

// 监听插槽变化
watch(
  () => [slots, slots.default?.()],
  () => {
    nextTick(() => {
      calculateSlidesCount()
    })
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
    width: '100%',
  }
})

const itemClasses = computed(() => {
  return props.unstyled
    ? props.pt?.item || ''
    : carouselItemStyle({
        class: props.pt?.item,
      })
})

// 移除itemStyle，现在通过CSS类设置宽度

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
