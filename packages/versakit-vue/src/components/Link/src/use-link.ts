import { computed, type SetupContext } from 'vue'
import type { LinkProps, LinkEmits } from './type'

export const useLink = (
  props: LinkProps,
  emit: SetupContext<LinkEmits>['emit'],
) => {
  // 处理点击事件
  const handleClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.preventDefault()
      return
    }

    emit('click', event)
  }

  // 计算链接的属性
  const linkAttributes = computed(() => {
    const attrs: Record<string, string | boolean | undefined> = {}

    if (props.href) {
      attrs.href = props.href
    }

    if (props.external) {
      attrs.target = '_blank'
      attrs.rel = 'noopener noreferrer'
    }

    return attrs
  })

  return {
    handleClick,
    linkAttributes,
  }
}
