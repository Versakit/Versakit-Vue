import { ref, watch } from 'vue'

export function useRate(props: {
  modelValue?: number
  max?: number
  allowHalf?: boolean
  readonly?: boolean
  disabled?: boolean
  onChange?: (val: number) => void
  onHoverChange?: (val: number) => void
}) {
  const currentValue = ref(props.modelValue ?? 0)
  const hoverValue = ref(-1)
  const isHovering = ref(false)

  // 同步外部v-model
  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined) {
        currentValue.value = val
      }
    },
  )

  // 计算每个星星的状态
  const getStarValue = (index: number) => {
    const value = isHovering.value ? hoverValue.value : currentValue.value

    // 如果允许半选
    if (props.allowHalf) {
      if (value >= index + 1) {
        return 1 // 全星
      } else if (value >= index + 0.5) {
        return 0.5 // 半星
      }
      return 0 // 空星
    } else {
      // 不允许半选
      return value >= index + 1 ? 1 : 0
    }
  }

  // 处理点击事件
  const handleClick = (index: number, isHalf: boolean) => {
    if (props.disabled || props.readonly) return

    let value: number

    if (props.allowHalf && isHalf) {
      value = index + 0.5
    } else {
      value = index + 1
    }

    // 如果点击的是当前值，则清除评分
    if (value === currentValue.value) {
      value = 0
    }

    currentValue.value = value
    props.onChange?.(value)
  }

  // 处理鼠标移入事件
  const handleMouseMove = (event: MouseEvent, index: number) => {
    if (props.disabled || props.readonly) return

    isHovering.value = true

    if (props.allowHalf) {
      const target = event.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const isHalf = event.clientX - rect.left < rect.width / 2
      hoverValue.value = isHalf ? index + 0.5 : index + 1
    } else {
      hoverValue.value = index + 1
    }

    props.onHoverChange?.(hoverValue.value)
  }

  // 处理鼠标离开事件
  const handleMouseLeave = () => {
    if (props.disabled || props.readonly) return

    isHovering.value = false
    hoverValue.value = -1
    props.onHoverChange?.(currentValue.value)
  }

  return {
    currentValue,
    hoverValue,
    isHovering,
    getStarValue,
    handleClick,
    handleMouseMove,
    handleMouseLeave,
  }
}
