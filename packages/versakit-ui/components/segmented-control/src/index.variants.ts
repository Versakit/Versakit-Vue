import { tv } from 'tailwind-variants'

export const segmentedControl = tv({
  base: 'inline-flex relative bg-gray-100 dark:bg-gray-800 p-1',
  variants: {
    size: {
      sm: 'text-xs h-8',
      md: 'text-sm h-10',
      lg: 'text-base h-12',
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: false,
    rounded: false,
  },
})

export const segmentedControlItem = tv({
  base: 'flex items-center justify-center relative flex-1 z-10 transition-colors duration-200 cursor-pointer',
  variants: {
    size: {
      sm: 'px-3 py-1',
      md: 'px-4 py-1.5',
      lg: 'px-5 py-2',
    },
    selected: {
      true: 'text-white',
      false:
        'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
    },
    variant: {
      primary: '',
      success: '',
      warning: '',
      info: '',
      error: '',
      default: '',
    },
  },
  compoundVariants: [
    {
      selected: true,
      variant: 'primary',
      class: 'text-white',
    },
    {
      selected: true,
      variant: 'success',
      class: 'text-white',
    },
    {
      selected: true,
      variant: 'warning',
      class: 'text-white',
    },
    {
      selected: true,
      variant: 'info',
      class: 'text-white',
    },
    {
      selected: true,
      variant: 'error',
      class: 'text-white',
    },
    {
      selected: true,
      variant: 'default',
      class: 'text-gray-900 dark:text-white',
    },
  ],
  defaultVariants: {
    size: 'md',
    selected: false,
    variant: 'primary',
  },
})

export const segmentedControlThumb = tv({
  base: 'absolute inset-0 z-0 rounded transition-all',
  variants: {
    variant: {
      primary: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      info: 'bg-cyan-500',
      error: 'bg-red-500',
      default: 'bg-white dark:bg-gray-700',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
  },
  defaultVariants: {
    variant: 'primary',
    rounded: false,
  },
})
