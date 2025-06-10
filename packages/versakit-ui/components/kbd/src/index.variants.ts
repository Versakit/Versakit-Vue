import { tv } from 'tailwind-variants'

export const kbd = tv({
  base: 'inline-flex items-center justify-center rounded-md px-2 font-mono font-medium shadow',
  variants: {
    variant: {
      default:
        'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700',
      outline:
        'border border-gray-300 dark:border-gray-600 bg-transparent text-gray-800 dark:text-gray-100',
      ghost: 'bg-transparent text-gray-800 dark:text-gray-100',
    },
    size: {
      xs: 'h-5 text-xs',
      sm: 'h-6 text-xs',
      md: 'h-7 text-sm',
      lg: 'h-8 text-base',
      xl: 'h-9 text-lg',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
