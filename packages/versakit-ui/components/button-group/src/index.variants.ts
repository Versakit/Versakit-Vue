import { tv } from 'tailwind-variants'

export const buttonGroup = tv({
  base: 'inline-flex',
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      default: 'gap-2',
      compact: 'gap-0.5',
      none: 'gap-0',
    },
  },
  compoundVariants: [
    {
      spacing: 'none',
      direction: 'horizontal',
      class:
        '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:last-child)]:rounded-r-none [&>*:not(:first-child)]:border-l-0',
    },
    {
      spacing: 'none',
      direction: 'vertical',
      class:
        '[&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>*:not(:first-child)]:border-t-0',
    },
  ],
  defaultVariants: {
    direction: 'horizontal',
    spacing: 'default',
  },
})
