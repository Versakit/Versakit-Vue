import { tv } from 'tailwind-variants'

export const avatarGroup = tv({
  base: 'relative inline-flex',
  variants: {
    stack: {
      true: 'flex-row-reverse',
      false: 'flex-row',
    },
  },
  defaultVariants: {
    stack: false,
  },
})

export const avatarOverflow = tv({
  base: 'flex items-center justify-center text-white bg-gray-400 dark:bg-gray-600',
})
