// usePinInput.ts
import { ref, nextTick } from 'vue'

export function usePinInput(length = 4) {
  const values = ref<string[]>(Array(length).fill(''))
  const inputs = ref<HTMLInputElement[]>([])

  const setRef = (el: HTMLInputElement | null, idx: number) => {
    if (el) inputs.value[idx] = el
  }

  const onInput = (e: Event, idx: number) => {
    const target = e.target as HTMLInputElement
    const val = target.value.replace(/\D/g, '') // 只保留数字
    values.value[idx] = val.slice(0, 1)

    if (val && idx < length - 1) {
      nextTick(() => {
        inputs.value[idx + 1]?.focus()
      })
    }
  }

  const onKeydown = (e: KeyboardEvent, idx: number) => {
    if (e.key === 'Backspace' && !values.value[idx] && idx > 0) {
      nextTick(() => {
        inputs.value[idx - 1]?.focus()
      })
    }
  }

  return {
    values,
    setRef,
    onInput,
    onKeydown,
  }
}
