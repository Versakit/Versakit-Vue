import { tv } from 'tailwind-variants'

export const radioVariants = tv({
  slots: {
    root: 'group relative inline-flex items-center',
    input: 'peer sr-only',
    icon: 'relative flex items-center justify-center rounded-full border bg-white transition-all duration-200',
    dot: 'h-2 w-2 scale-0 rounded-full bg-white transition-transform duration-200 peer-checked:scale-100',
    label:
      'ml-2 select-none text-gray-700 transition-colors duration-200 dark:text-gray-300',
  },
  variants: {
    size: {
      sm: {
        root: 'text-sm',
        icon: 'h-4 w-4',
        dot: 'h-1.5 w-1.5',
      },
      md: {
        root: 'text-base',
        icon: 'h-5 w-5',
        dot: 'h-2.5 w-2.5',
      },
      lg: {
        root: 'text-lg',
        icon: 'h-6 w-6',
        dot: 'h-3 w-3',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        icon: 'bg-gray-100 dark:bg-gray-800',
      },
      false: {
        root: 'cursor-pointer',
        icon: 'border-gray-300 group-hover:border-blue-500 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2 peer-checked:border-blue-500 peer-checked:bg-blue-500 dark:border-gray-600 dark:peer-checked:border-blue-500 dark:peer-checked:bg-blue-500',
      },
    },
    checked: {
      true: {
        icon: 'border-blue-500 bg-blue-500 dark:border-blue-500 dark:bg-blue-500',
      },
      false: {},
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
    checked: false,
  },
})

export const radioGroupVariants = tv({
  base: 'flex',
  variants: {
    direction: {
      horizontal: 'flex-row gap-4',
      vertical: 'flex-col gap-2',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})
