import { tv } from 'tailwind-variants'

export const rate = tv({
  base: 'inline-flex items-center',
})

export const rateItem = tv({
  base: 'relative cursor-pointer inline-flex items-center justify-center',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
    readonly: {
      true: 'cursor-default',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const rateIcon = tv({
  base: 'transition-colors duration-200',
  variants: {
    active: {
      true: 'text-yellow-400',
      false: 'text-gray-300',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
    half: {
      true: 'absolute left-0 top-0 overflow-hidden',
    },
  },
  defaultVariants: {
    active: false,
    size: 'md',
  },
})

export const rateText = tv({
  base: 'ml-2 text-sm text-gray-600',
})
