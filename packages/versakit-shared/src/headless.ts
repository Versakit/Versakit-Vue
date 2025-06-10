export const getPtClasses = (pt: any, key: any) => {
  const ptValue = pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (Array.isArray(ptValue)) {
    return ptValue.join(' ')
  }

  if (typeof ptValue === 'object') {
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([className]) => className)
      .join(' ')
  }

  return ''
}

/**
 * 在元素外部点击时执行回调函数
 * @param elementRef 元素引用
 * @param callback 回调函数
 */
export const useClickOutside = (
  elementRef: { value: HTMLElement | null },
  callback: (event: MouseEvent) => void,
) => {
  const listener = (event: MouseEvent) => {
    // 确保元素存在且点击的目标不是元素内部
    if (
      elementRef.value &&
      event.target &&
      !elementRef.value.contains(event.target as Node)
    ) {
      callback(event)
    }
  }

  // 添加全局点击事件监听器
  document.addEventListener('click', listener)

  // 返回一个清理函数，用于在组件卸载时移除事件监听器
  return () => {
    document.removeEventListener('click', listener)
  }
}

/**
 * 添加事件监听器
 * @param target 目标元素
 * @param event 事件名称
 * @param handler 处理函数
 */
export const useEventListener = (
  target: EventTarget,
  event: string,
  handler: (event: Event) => void,
) => {
  // 添加事件监听器
  target.addEventListener(event, handler)

  // 返回一个清理函数，用于在组件卸载时移除事件监听器
  return () => {
    target.removeEventListener(event, handler)
  }
}
