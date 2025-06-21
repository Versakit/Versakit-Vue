import { ref, watch } from 'vue'

export function useInput(props: {
  modelValue?: string | number
  type?: string
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  onChange?: (val: string) => void
}) {
  const inputValue = ref(props.modelValue?.toString() || '')
  const inputRef = ref<HTMLInputElement | null>(null)

  const updateValue = (val: string) => {
    if (props.disabled || props.readonly) return

    // 处理数字类型
    if (props.type === 'number' && val !== '') {
      const numberVal = parseFloat(val)
      inputValue.value = isNaN(numberVal) ? '' : val
    } else {
      inputValue.value = val
    }

    // 处理最大长度限制
    if (props.maxlength && val.length > props.maxlength) {
      inputValue.value = val.slice(0, props.maxlength)
    }

    props.onChange?.(inputValue.value)
  }

  // 监听外部传入的值变化
  watch(
    () => props.modelValue,
    (val) => {
      if (val !== undefined && val !== null) {
        inputValue.value = val.toString()
      } else {
        inputValue.value = ''
      }
    },
  )

  // 清空输入框
  const clearInput = () => {
    if (props.disabled || props.readonly) return
    inputValue.value = ''
    props.onChange?.('')
    // 清空后聚焦
    inputRef.value?.focus()
  }

  // 聚焦输入框
  const focus = () => {
    inputRef.value?.focus()
  }

  // 移除输入框焦点
  const blur = () => {
    inputRef.value?.blur()
  }

  return {
    inputValue,
    inputRef,
    updateValue,
    clearInput,
    focus,
    blur,
  }
}
