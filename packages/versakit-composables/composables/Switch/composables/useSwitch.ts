import { ref, computed, watch } from 'vue'

interface UseSwitchOptions {
  /**
   * 外部绑定的值，用于受控模式
   */
  modelValue?: boolean
  /**
   * 是否禁用
   */
  disabled?: boolean
  /**
   * 状态变化回调
   */
  onChange?: (val: boolean) => void
}

/**
 * Switch 组件逻辑钩子
 * 支持受控和非受控两种模式
 */
export function useSwitch(options?: UseSwitchOptions) {
  // 内部状态
  const internalChecked = ref(options?.modelValue ?? false)

  // 是否处于受控模式（由外部modelValue控制）
  const isControlled = computed(() => options?.modelValue !== undefined)

  // 响应外部modelValue变化
  watch(
    () => options?.modelValue,
    (newVal) => {
      if (newVal !== undefined) {
        internalChecked.value = newVal
      }
    },
    { immediate: true },
  )

  // 计算属性，用于获取和设置状态
  const checked = computed({
    get: () =>
      isControlled.value ? options!.modelValue! : internalChecked.value,
    set: (val: boolean) => {
      // 非受控模式下更新内部状态
      if (!isControlled.value) {
        internalChecked.value = val
      }
      // 触发onChange回调
      options?.onChange?.(val)
    },
  })

  // 禁用状态
  const disabled = ref(!!options?.disabled)

  // 响应外部disabled变化
  watch(
    () => options?.disabled,
    (newVal) => {
      if (newVal !== undefined) {
        disabled.value = newVal
      }
    },
    { immediate: true },
  )

  /**
   * 切换开关状态
   */
  const toggle = () => {
    if (disabled.value) return
    checked.value = !checked.value
  }

  /**
   * 键盘事件处理
   */
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  return {
    checked,
    disabled,
    toggle,
    onKeyDown,
  }
}
