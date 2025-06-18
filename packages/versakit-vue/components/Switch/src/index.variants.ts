import { tv } from 'tailwind-variants'

export const switchRoot = tv({
  base: 'relative inline-flex items-center cursor-pointer',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
    size: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    disabled: false,
    size: 'md',
  },
})

export const switchTrack = tv({
  base: 'relative rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900',
  variants: {
    size: {
      sm: 'w-7 h-4',
      md: 'w-10 h-5',
      lg: 'w-14 h-7',
    },
    color: {
      primary: 'bg-gray-200 dark:bg-gray-700 focus:ring-blue-500',
      secondary: 'bg-gray-200 dark:bg-gray-700 focus:ring-gray-500',
      success: 'bg-gray-200 dark:bg-gray-700 focus:ring-green-500',
      warning: 'bg-gray-200 dark:bg-gray-700 focus:ring-yellow-500',
      danger: 'bg-gray-200 dark:bg-gray-700 focus:ring-red-500',
      info: 'bg-gray-200 dark:bg-gray-700 focus:ring-sky-500',
    },
    checked: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'bg-gray-200 dark:bg-gray-800',
      false: '',
    },
  },
  compoundVariants: [
    {
      checked: true,
      color: 'primary',
      disabled: false,
      class: 'bg-blue-500 dark:bg-blue-600',
    },
    {
      checked: true,
      color: 'secondary',
      disabled: false,
      class: 'bg-gray-500 dark:bg-gray-600',
    },
    {
      checked: true,
      color: 'success',
      disabled: false,
      class: 'bg-green-500 dark:bg-green-600',
    },
    {
      checked: true,
      color: 'warning',
      disabled: false,
      class: 'bg-yellow-500 dark:bg-yellow-600',
    },
    {
      checked: true,
      color: 'danger',
      disabled: false,
      class: 'bg-red-500 dark:bg-red-600',
    },
    {
      checked: true,
      color: 'info',
      disabled: false,
      class: 'bg-sky-500 dark:bg-sky-600',
    },
    {
      disabled: true,
      checked: true,
      class: 'bg-gray-400 dark:bg-gray-600',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    checked: false,
    disabled: false,
  },
})

export const switchThumb = tv({
  base: 'absolute transform transition-transform bg-white dark:bg-gray-200 rounded-full shadow-sm flex items-center justify-center',
  variants: {
    size: {
      sm: 'w-3 h-3 left-0.5 top-0.5',
      md: 'w-4 h-4 left-0.5 top-0.5',
      lg: 'w-6 h-6 left-0.5 top-0.5',
    },
    checked: {
      true: '',
      false: '',
    },
    loading: {
      true: 'animate-pulse',
      false: '',
    },
  },
  compoundVariants: [
    {
      checked: true,
      size: 'sm',
      class: 'translate-x-3',
    },
    {
      checked: true,
      size: 'md',
      class: 'translate-x-5',
    },
    {
      checked: true,
      size: 'lg',
      class: 'translate-x-7',
    },
  ],
  defaultVariants: {
    size: 'md',
    checked: false,
    loading: false,
  },
})
