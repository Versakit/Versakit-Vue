import { tv } from 'tailwind-variants'

export const splitterStyle = tv({
  base: 'flex relative',
  variants: {
    layout: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const splitterGutterStyle = tv({
  base: 'flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition-colors',
  variants: {
    layout: {
      horizontal: 'cursor-col-resize',
      vertical: 'cursor-row-resize',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const splitterGutterHandlerStyle = tv({
  base: 'bg-gray-300 rounded-full',
  variants: {
    layout: {
      horizontal: 'h-8 w-1',
      vertical: 'w-8 h-1',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

export const splitterItemStyle = tv({
  base: 'overflow-auto',
  variants: {},
  defaultVariants: {},
})
