import { tv } from 'tailwind-variants'

export const segmentedContainer = tv({
  base: 'inline-flex rounded-md p-1 bg-gray-100 dark:bg-gray-800 outline-none border-none',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
    block: false,
  },
})

export const segmentedOption = tv({
  base: 'relative flex-1 flex items-center max-w-max justify-center px-3 py-1.5 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400',
  variants: {
    selected: {
      true: 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm',
      false:
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
    size: {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-10',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
    size: 'md',
  },
})
