import { ref, computed, watch } from 'vue'

export interface UseSwitchOptions {
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
  /**
   * 是否锁定状态（不允许切换）
   */
  locked?: boolean
}

/**
 * useSwitch返回值类型
 */
export interface UseSwitchReturn {
  checked: ReturnType<typeof computed<boolean>>
  disabled: ReturnType<typeof ref<boolean>>
  isLocked: ReturnType<typeof ref<boolean>>
  toggle: () => void
  onKeyDown: (e: KeyboardEvent) => void
}

/**
 * Switch 组件逻辑钩子
 * 支持受控和非受控两种模式
 * 可以锁定状态，使开关无法切换
 */
export function useSwitch(options?: UseSwitchOptions): UseSwitchReturn {
  // 内部状态
  const internalChecked = ref(options?.modelValue ?? false)

  // 锁定状态，默认为 true，表示开关无法切换
  const isLocked = ref(options?.locked !== undefined ? options.locked : true)

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

  // 响应外部locked变化
  watch(
    () => options?.locked,
    (newVal) => {
      if (newVal !== undefined) {
        isLocked.value = newVal
      }
    },
  )

  // 计算属性，用于获取和设置状态
  const checked = computed({
    get: () =>
      isControlled.value ? options!.modelValue! : internalChecked.value,
    set: (val: boolean) => {
      // 如果锁定状态，则不允许改变
      if (isLocked.value) return

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
   * 如果锁定状态，则不允许切换
   */
  const toggle = () => {
    if (disabled.value || isLocked.value) return
    checked.value = !checked.value
  }

  /**
   * 键盘事件处理
   */
  const onKeyDown = (e: KeyboardEvent) => {
    if (disabled.value || isLocked.value) return

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      toggle()
    }
  }

  return {
    checked,
    disabled,
    isLocked,
    toggle,
    onKeyDown,
  }
}
