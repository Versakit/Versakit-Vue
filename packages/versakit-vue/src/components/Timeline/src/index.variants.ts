import { tv } from 'tailwind-variants'

export const timelineStyle = tv({
  base: 'relative',
  variants: {
    orientation: {
      vertical: 'flex flex-col',
      horizontal: 'flex flex-row',
    },
    align: {
      left: '',
      right: '',
      alternate: '',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    align: 'left',
  },
})
