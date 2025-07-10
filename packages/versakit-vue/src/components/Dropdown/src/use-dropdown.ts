import { type SetupContext, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import type { DropdownProps, DropdownOption } from './type'

export const useDropdown = (
  props: DropdownProps,
  emit: SetupContext<{
    'update:visible': [boolean]
    show: []
    hide: []
    select: [string | number, MouseEvent]
  }>['emit'],
) => {
  const isVisible = ref(props.visible || false)
  const triggerRef = ref<HTMLElement | null>(null)
  const contentRef = ref<HTMLElement | null>(null)
  const dropdownId = `dropdown-${Math.random().toString(36).slice(2, 11)}`

  // 计时器引用
  let showTimer: number | null = null
  let hideTimer: number | null = null

  // 监听visible属性变化
  watch(
    () => props.visible,
    (newValue) => {
      if (newValue !== undefined) {
        isVisible.value = newValue
      }
    },
  )

  // 监听isVisible变化，触发事件
  watch(
    () => isVisible.value,
    (newValue) => {
      emit('update:visible', newValue)
      if (newValue) {
        emit('show')
      } else {
        emit('hide')
      }
    },
  )

  // 显示下拉菜单
  const show = () => {
    if (props.disabled) return

    if (
      (props.trigger === 'hover' || props.trigger === 'focus') &&
      props.showDelay
    ) {
      clearTimeout(hideTimer as number)
      showTimer = window.setTimeout(() => {
        isVisible.value = true
      }, props.showDelay)
    } else {
      isVisible.value = true
    }
  }

  // 隐藏下拉菜单
  const hide = () => {
    if (props.trigger === 'manual') return

    if (
      (props.trigger === 'hover' || props.trigger === 'focus') &&
      props.hideDelay
    ) {
      clearTimeout(showTimer as number)
      hideTimer = window.setTimeout(() => {
        isVisible.value = false
      }, props.hideDelay)
    } else {
      isVisible.value = false
    }
  }

  // 切换下拉菜单显示状态
  const toggle = () => {
    if (props.disabled) return
    if (props.trigger === 'manual') return

    isVisible.value = !isVisible.value
  }

  // 处理点击外部
  const handleOutsideClick = (event: MouseEvent) => {
    if (!props.closeOnClickOutside) return
    if (!isVisible.value) return
    if (props.trigger === 'manual') return

    const target = event.target as Node
    if (
      contentRef.value &&
      !contentRef.value.contains(target) &&
      triggerRef.value &&
      !triggerRef.value.contains(target)
    ) {
      hide()
    }
  }

  // 处理点击选项
  const handleItemClick = (value: string | number, event: MouseEvent) => {
    if (props.closeOnSelect && props.trigger !== 'manual') {
      hide()
    }

    emit('select', value, event)
  }

  // 处理选项点击
  const handleOptionClick = (option: DropdownOption, event: MouseEvent) => {
    if (option.disabled || option.divider) return

    if (option.value !== undefined) {
      handleItemClick(option.value, event)
    }
  }

  // 设置事件监听
  onMounted(() => {
    if (props.closeOnClickOutside) {
      document.addEventListener('click', handleOutsideClick)
    }
  })

  // 清理事件监听
  onBeforeUnmount(() => {
    document.removeEventListener('click', handleOutsideClick)

    if (showTimer) {
      clearTimeout(showTimer)
    }

    if (hideTimer) {
      clearTimeout(hideTimer)
    }
  })

  return {
    isVisible,
    triggerRef,
    contentRef,
    dropdownId,
    show,
    hide,
    toggle,
    handleItemClick,
    handleOptionClick,
  }
}
