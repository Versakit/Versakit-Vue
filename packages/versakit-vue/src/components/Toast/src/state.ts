import { ref } from 'vue'
import type { ToastInstance, ToastOptions } from './type'

export const toasts = ref<ToastInstance[]>([])

let count = 0

export const add = (options: ToastOptions) => {
  const id = `toast-${count++}`
  const toast: ToastInstance = {
    id,
    visible: true,
    ...options,
  }
  toasts.value.push(toast)
  return id
}

export const remove = (id: string) => {
  const index = toasts.value.findIndex((t) => t.id === id)
  if (index !== -1) {
    toasts.value.splice(index, 1)
  }
}

export const removeAll = () => {
  toasts.value = []
}
