import { tv } from 'tailwind-variants'

export const radioStyle = tv({
  slots: {
    root: 'relative inline-flex items-center',
    radio:
      'relative h-5 w-5 appearance-none rounded-full border transition-all',
    dot: 'absolute inset-0 flex items-center justify-center',
    inner: 'h-2 w-2 rounded-full bg-white transition-transform',
    label: 'ml-2 text-gray-700 dark:text-gray-300',
  },
  variants: {
    checked: {
      true: {},
    },
    size: {
      small: {
        root: 'gap-1.5',
        radio: 'h-4 w-4',
        inner: 'h-1.5 w-1.5',
        label: 'text-sm',
      },
      default: {
        root: 'gap-2',
        radio: 'h-5 w-5',
        inner: 'h-2 w-2',
        label: 'text-base',
      },
      large: {
        root: 'gap-2.5',
        radio: 'h-6 w-6',
        inner: 'h-2.5 w-2.5',
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
        radio:
          'border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-700',
        label: 'text-gray-500 dark:text-gray-400',
      },
      false: {
        root: 'cursor-pointer',
        radio: 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-700',
      },
    },
  },
  compoundVariants: [
    {
      checked: true,
      color: 'blue',
      class: {
        radio:
          'border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500',
      },
    },
    {
      checked: true,
      color: 'green',
      class: {
        radio:
          'border-green-600 bg-green-600 dark:border-green-500 dark:bg-green-500',
      },
    },
    {
      checked: true,
      color: 'red',
      class: {
        radio: 'border-red-600 bg-red-600 dark:border-red-500 dark:bg-red-500',
      },
    },
    {
      checked: true,
      color: 'yellow',
      class: {
        radio:
          'border-yellow-600 bg-yellow-600 dark:border-yellow-500 dark:bg-yellow-500',
      },
    },
    {
      checked: true,
      color: 'purple',
      class: {
        radio:
          'border-purple-600 bg-purple-600 dark:border-purple-500 dark:bg-purple-500',
      },
    },
    {
      checked: false,
      disabled: false,
      class: {
        radio:
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
