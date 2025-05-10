import { h, render, shallowReactive } from 'vue'
import VKMessage from './index.vue'
import type { MessageProps } from '../type/index'

const instances: any = shallowReactive([])
let seed = 1

const getContainer = () => {
  const containerId = 'vk-message-container'
  let container = document.getElementById(containerId)

  if (!container) {
    container = document.createElement('div')
    container.id = containerId
    container.className = 'vk-message-container'
    document.body.appendChild(container)
  }

  return container
}

export const Message = ({
  type,
  content,
  plain,
  icon,
  duration = 3000,
}: MessageProps) => {
  const id = `message_${seed++}`
  const wrapper = document.createElement('div')
  const container = getContainer()

  // 删除数组中的实例 | 销毁
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
    content,
    plain,
    duration,
    id,
    icon,
    destroy: onDestroy,
  }

  const vnode = h(VKMessage, newProps)
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
