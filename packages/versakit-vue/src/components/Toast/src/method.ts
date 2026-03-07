import { createVNode, render } from 'vue'
import ToastContainer from './ToastContainer.vue'
import { add, remove, removeAll } from './state'
import type { ToastOptions } from './type'

let container: HTMLElement | null = null

const init = () => {
  if (typeof document === 'undefined') return
  if (container) return

  container = document.createElement('div')
  container.id = 'versakit-toast-container'
  document.body.appendChild(container)

  const vnode = createVNode(ToastContainer)
  render(vnode, container)
}

const show = (options: ToastOptions) => {
  init()
  return add(options)
}

export const Toast = {
  success: (
    message: string,
    options?: Omit<ToastOptions, 'message' | 'type'>,
  ) => show({ ...options, message, type: 'success' }),
  error: (message: string, options?: Omit<ToastOptions, 'message' | 'type'>) =>
    show({ ...options, message, type: 'error' }),
  warning: (
    message: string,
    options?: Omit<ToastOptions, 'message' | 'type'>,
  ) => show({ ...options, message, type: 'warning' }),
  info: (message: string, options?: Omit<ToastOptions, 'message' | 'type'>) =>
    show({ ...options, message, type: 'info' }),
  show: (options: ToastOptions) => show(options),
  remove: (id: string) => remove(id),
  removeAll: () => removeAll(),
}
