import { tv } from 'tailwind-variants'

export const textareaVariants = tv({
  base: 'relative',
  variants: {},
  defaultVariants: {},
})

export const textareaFieldVariants = tv({
  base: 'flex w-full resize-none rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-400 dark:focus:ring-blue-400',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    status: {
      default: '',
      error:
        'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:border-red-500 dark:focus:ring-red-500',
      success:
        'border-green-500 focus:border-green-500 focus:ring-green-500 dark:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'default',
  },
})

export const textareaCounterVariants = tv({
  base: 'mt-1 text-right text-xs text-gray-500 dark:text-gray-400',
  variants: {},
  defaultVariants: {},
})
