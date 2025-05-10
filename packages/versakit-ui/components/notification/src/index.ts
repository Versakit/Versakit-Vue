import { render, h, shallowReactive } from 'vue'
import VKNotification from './index.vue'
import type { NotifivationProps } from '../type'

// 使用shallowReactive优化性能，减少不必要的深度响应
const instances = shallowReactive<
  Array<{
    id: string
    vm: any
    vnode: any
  }>
>([])
let seed = 1

const formatPosition = (position: string): string => {
  // Convert camelCase to kebab-case (e.g., topRight -> top-right)
  return position.replace(/([A-Z])/g, '-$1').toLowerCase()
}

const getContainer = (position: string) => {
  const formattedPosition = formatPosition(position)
  const containerId = `vk-notification-container-${formattedPosition}`
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.id = containerId
    container.className = 'vk-notification-container'
    container.dataset.position = formattedPosition
    document.body.appendChild(container)
  }

  return container
}

export const Notification = ({
  type,
  title,
  content,
  plain,
  position = 'top-right',
  icon,
  duration = 3000,
}: NotifivationProps) => {
  const id = `message_${seed++}`
  const container = getContainer(position)
  const wrapper = document.createElement('div')

  const onDestroy = () => {
    const idx = instances.findIndex((instance: any) => instance.id === id)
    if (idx === -1) return
    instances.splice(idx, 1)
    render(null, wrapper)
    wrapper.remove()
    // Remove container if empty
    if (container.children.length === 0) {
      container.remove()
    }
  }

  const newProps = {
    type,
    title,
    plain,
    content,
    position,
    duration,
    icon,
    destroy: onDestroy,
    id,
  }

  const vnode = h(VKNotification, newProps)
  render(vnode, wrapper)
  // Insert at the beginning to maintain stacking order
  if (container.firstChild) {
    container.insertBefore(wrapper.firstElementChild!, container.firstChild)
  } else {
    container.appendChild(wrapper.firstElementChild!)
  }

  const vm = vnode.component!
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
  }
  instances.push(instance)

  return instance
}

export const getLastBottomOffset = () => {
  return 0 // No longer needed with new stacking approach
}
