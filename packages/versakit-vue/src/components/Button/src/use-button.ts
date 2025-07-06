import { type SetupContext, ref } from 'vue'
import type { ButtonProps, IButtonEmits } from './type'

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<IButtonEmits>['emit'],
) => {
  const _ref = ref<HTMLButtonElement | null>(null)
  const handleClick = (e: MouseEvent) => {
    if (props.disabled || props.loading) {
      e.stopPropagation()
      return
    } else {
      emit('click', e)
    }
  }
  return {
    _ref,
    handleClick,
  }
}
