<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { rate, rateItem, rateIcon, rateText } from './index.variants'
import type { RateProps, RateEmits } from './type'

const props = withDefaults(defineProps<RateProps>(), {
  modelValue: 0,
  max: 5,
  allowHalf: false,
  readonly: false,
  disabled: false,
  size: 'md',
  showText: false,
  texts: () => ['极差', '失望', '一般', '满意', '惊喜'],
  iconClass: '',
  iconStyle: undefined,
  voidColor: '',
  activeColor: '',
  voidIcon: '',
  activeIcon: '',
  halfIcon: '',
  unstyled: false,
})

const emit = defineEmits<RateEmits>()

// 当前评分值
const currentValue = ref(props.modelValue)
// 鼠标悬停时的临时评分
const hoverValue = ref(-1)
// 是否正在悬停
const isHovering = ref(false)

// 监听值变化
watch(
  () => props.modelValue,
  (val) => {
    currentValue.value = val
  },
)

// 处理鼠标移入
const handleMouseMove = (event: MouseEvent, item: number) => {
  if (props.disabled || props.readonly) return

  isHovering.value = true
  if (props.allowHalf) {
    const target = event.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const position = (event.clientX - rect.left) / rect.width
    if (position <= 0.5) {
      hoverValue.value = item - 0.5
    } else {
      hoverValue.value = item
    }
  } else {
    hoverValue.value = item
  }
}

// 处理鼠标离开
const handleMouseLeave = () => {
  if (props.disabled || props.readonly) return

  isHovering.value = false
  hoverValue.value = -1
}

// 处理点击评分
const handleClick = (value: number) => {
  if (props.disabled || props.readonly) return

  currentValue.value = value
  emit('update:modelValue', value)
  emit('change', value)
}

// 计算当前值（考虑鼠标悬停状态）
const currentValueComputed = computed(() => {
  return isHovering.value ? hoverValue.value : currentValue.value
})

// 生成需要渲染的星星数组
const items = computed(() => {
  const result = []
  for (let i = 1; i <= props.max; i++) {
    result.push(i)
  }
  return result
})

// 评分文字
const ratingText = computed(() => {
  if (!props.showText || !props.texts || props.texts.length === 0) return ''

  const value = Math.round(currentValueComputed.value)
  const index = Math.min(value - 1, props.texts.length - 1)
  return index >= 0 ? props.texts[index] : ''
})

// 渲染星星图标
const renderStarIcon = (value: number, isFull: boolean = true) => {
  // 判断当前图标是否应该激活
  const isActive =
    currentValueComputed.value >= value ||
    (props.allowHalf &&
      !isFull &&
      Math.ceil(currentValueComputed.value) === value)

  // 根据状态使用不同的图标
  let iconContent
  if (isActive) {
    if (!isFull && props.halfIcon) {
      iconContent = props.halfIcon
    } else if (props.activeIcon) {
      iconContent = props.activeIcon
    } else {
      // 默认星星图标
      iconContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
      `
    }
  } else {
    if (props.voidIcon) {
      iconContent = props.voidIcon
    } else {
      // 默认空星图标
      iconContent = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      `
    }
  }

  return iconContent
}

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      item: '',
      icon: () => '',
      text: '',
    }
  }

  return {
    root: rate(),
    item: rateItem({
      disabled: props.disabled,
      readonly: props.readonly,
      size: props.size,
    }),
    icon: (active: boolean, half: boolean = false) =>
      rateIcon({
        active,
        size: props.size,
        half,
      }),
    text: rateText(),
  }
})

// 自定义样式
const getIconStyle = (isActive: boolean) => {
  if (!props.voidColor && !props.activeColor) return props.iconStyle

  return {
    color: isActive ? props.activeColor : props.voidColor,
    ...props.iconStyle,
  }
}
</script>

<template>
  <div :class="classes.root" v-bind="{ ...$attrs, ...props.pt?.root }">
    <div
      v-for="item in items"
      :key="item"
      :class="classes.item"
      @mousemove="handleMouseMove($event, item)"
      @mouseleave="handleMouseLeave"
      @click="
        handleClick(
          allowHalf &&
            Math.ceil(currentValueComputed) === item &&
            currentValueComputed !== item
            ? item - 0.5
            : item,
        )
      "
      v-bind="props.pt?.item"
    >
      <!-- 半星 -->
      <span
        v-if="allowHalf"
        :class="[
          typeof classes.icon === 'function'
            ? classes.icon(
                currentValueComputed >= item - 0.5 &&
                  currentValueComputed < item,
                true,
              )
            : classes.icon,
          iconClass,
        ]"
        :style="
          getIconStyle(
            currentValueComputed >= item - 0.5 && currentValueComputed < item,
          )
        "
        v-html="renderStarIcon(item, false)"
        v-bind="props.pt?.icon"
      ></span>

      <!-- 全星 -->
      <span
        :class="[
          typeof classes.icon === 'function'
            ? classes.icon(currentValueComputed >= item)
            : classes.icon,
          iconClass,
        ]"
        :style="getIconStyle(currentValueComputed >= item)"
        v-html="renderStarIcon(item)"
        v-bind="props.pt?.icon"
      ></span>
    </div>

    <!-- 评分文字 -->
    <span
      v-if="showText && ratingText"
      :class="classes.text"
      v-bind="props.pt?.text"
    >
      {{ ratingText }}
    </span>
  </div>
</template>
