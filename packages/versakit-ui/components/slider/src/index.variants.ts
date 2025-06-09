import { tv } from 'tailwind-variants'

export const slider = tv({
  base: 'relative cursor-pointer touch-none',
  variants: {
    vertical: {
      true: 'h-full w-2',
      false: 'w-full h-2',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    vertical: false,
  },
})

export const sliderTrack = tv({
  base: 'absolute rounded-full bg-gray-200 dark:bg-gray-700',
  variants: {
    vertical: {
      true: 'w-1 h-full left-1/2 -translate-x-1/2',
      false: 'h-1 w-full top-1/2 -translate-y-1/2',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
  },
  compoundVariants: [
    {
      vertical: false,
      size: 'xs',
      class: 'h-0.5',
    },
    {
      vertical: false,
      size: 'sm',
      class: 'h-1',
    },
    {
      vertical: false,
      size: 'md',
      class: 'h-1.5',
    },
    {
      vertical: false,
      size: 'lg',
      class: 'h-2',
    },
    {
      vertical: false,
      size: 'xl',
      class: 'h-3',
    },
    {
      vertical: true,
      size: 'xs',
      class: 'w-0.5',
    },
    {
      vertical: true,
      size: 'sm',
      class: 'w-1',
    },
    {
      vertical: true,
      size: 'md',
      class: 'w-1.5',
    },
    {
      vertical: true,
      size: 'lg',
      class: 'w-2',
    },
    {
      vertical: true,
      size: 'xl',
      class: 'w-3',
    },
  ],
  defaultVariants: {
    vertical: false,
    size: 'md',
  },
})

export const sliderProgress = tv({
  base: 'absolute rounded-full',
  variants: {
    variant: {
      primary: 'bg-blue-500 dark:bg-blue-600',
      success: 'bg-green-500 dark:bg-green-600',
      warning: 'bg-yellow-500 dark:bg-yellow-600',
      info: 'bg-cyan-500 dark:bg-cyan-600',
      error: 'bg-red-500 dark:bg-red-600',
      default: 'bg-gray-500 dark:bg-gray-600',
    },
    vertical: {
      true: 'w-full',
      false: 'h-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    vertical: false,
  },
})

export const sliderHandle = tv({
  base: 'absolute rounded-full bg-white border-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2',
  variants: {
    variant: {
      primary: 'border-blue-500 dark:border-blue-600 focus:ring-blue-500',
      success: 'border-green-500 dark:border-green-600 focus:ring-green-500',
      warning: 'border-yellow-500 dark:border-yellow-600 focus:ring-yellow-500',
      info: 'border-cyan-500 dark:border-cyan-600 focus:ring-cyan-500',
      error: 'border-red-500 dark:border-red-600 focus:ring-red-500',
      default: 'border-gray-500 dark:border-gray-600 focus:ring-gray-500',
    },
    size: {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-7 h-7',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const sliderTooltip = tv({
  base: 'absolute px-2 py-1 text-xs bg-gray-800 text-white rounded-md whitespace-nowrap',
  variants: {
    vertical: {
      true: '-left-8',
      false: '-top-8',
    },
  },
  defaultVariants: {
    vertical: false,
  },
})

export const sliderMark = tv({
  base: 'absolute w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full',
  variants: {
    vertical: {
      true: 'left-1/2 -translate-x-1/2',
      false: 'top-1/2 -translate-y-1/2',
    },
    active: {
      true: 'bg-current',
    },
  },
  defaultVariants: {
    vertical: false,
    active: false,
  },
})

export const sliderMarkLabel = tv({
  base: 'absolute text-xs text-gray-500 dark:text-gray-400',
  variants: {
    vertical: {
      true: 'left-4',
      false: 'top-4',
    },
  },
  defaultVariants: {
    vertical: false,
  },
})

export const sliderInput = tv({
  base: 'w-16 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md ml-2',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
})
