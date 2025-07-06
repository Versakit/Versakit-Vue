import { tv } from 'tailwind-variants'

export const checkboxStyle = tv({
  slots: {
    root: 'relative inline-flex items-center',
    checkbox: 'relative h-5 w-5 appearance-none rounded border transition-all',
    icon: 'absolute inset-0 flex items-center justify-center text-white',
    label: 'ml-2 text-gray-700 dark:text-gray-300',
  },
  variants: {
    checked: {
      true: {},
    },
    size: {
      small: {
        root: 'gap-1.5',
        checkbox: 'h-4 w-4',
        label: 'text-sm',
      },
      default: {
        root: 'gap-2',
        checkbox: 'h-5 w-5',
        label: 'text-base',
      },
      large: {
        root: 'gap-2.5',
        checkbox: 'h-6 w-6',
        label: 'text-lg',
      },
    },
    color: {
      blue: {},
      green: {},
      red: {},
      yellow: {},
      purple: {},
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed opacity-50',
        checkbox:
          'border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
        label: 'text-gray-500 dark:text-gray-400',
      },
      false: {
        root: 'cursor-pointer',
        checkbox:
          'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
      },
    },
  },
  compoundVariants: [
    {
      checked: true,
      color: 'blue',
      class: {
        checkbox:
          'border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500',
      },
    },
    {
      checked: true,
      color: 'green',
      class: {
        checkbox:
          'border-green-600 bg-green-600 dark:border-green-500 dark:bg-green-500',
      },
    },
    {
      checked: true,
      color: 'red',
      class: {
        checkbox:
          'border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500',
      },
    },
    {
      checked: true,
      color: 'yellow',
      class: {
        checkbox:
          'border-yellow-600 bg-yellow-600 dark:border-yellow-500 dark:bg-yellow-500',
      },
    },
    {
      checked: true,
      color: 'purple',
      class: {
        checkbox:
          'border-purple-600 bg-purple-600 dark:border-purple-500 dark:bg-purple-500',
      },
    },
    {
      checked: false,
      disabled: false,
      class: {
        checkbox:
          'hover:border-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-400/20 dark:hover:border-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-500/20',
      },
    },
  ],
  defaultVariants: {
    checked: false,
    size: 'default',
    color: 'blue',
    disabled: false,
  },
})
