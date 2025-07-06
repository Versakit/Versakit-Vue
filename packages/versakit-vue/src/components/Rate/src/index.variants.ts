import { tv } from 'tailwind-variants'

export const rateContainer = tv({
  base: 'inline-flex items-center',
  variants: {
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const rateItem = tv({
  base: 'relative inline-flex items-center justify-center cursor-pointer transition-all duration-200',
  variants: {
    size: {
      small: 'text-lg',
      default: 'text-2xl',
      large: 'text-3xl',
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
    readonly: {
      true: 'cursor-default',
      false: '',
    },
  },
  defaultVariants: {
    size: 'default',
    disabled: false,
    readonly: false,
  },
})

export const rateScore = tv({
  base: 'ml-2 text-gray-700 dark:text-gray-300',
  variants: {
    size: {
      small: 'text-sm',
      default: 'text-base',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export const rateStarFull = tv({
  base: 'absolute inset-0 overflow-hidden',
  variants: {
    color: {
      yellow: 'text-yellow-400 dark:text-yellow-500',
      blue: 'text-blue-500 dark:text-blue-400',
      green: 'text-green-500 dark:text-green-400',
      red: 'text-red-500 dark:text-red-400',
      purple: 'text-purple-500 dark:text-purple-400',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
})

export const rateStarVoid = tv({
  base: 'text-gray-300 dark:text-gray-600',
})

export const rateHalfStar = tv({
  base: 'absolute inset-0 overflow-hidden',
  variants: {
    color: {
      yellow: 'text-yellow-400 dark:text-yellow-500',
      blue: 'text-blue-500 dark:text-blue-400',
      green: 'text-green-500 dark:text-green-400',
      red: 'text-red-500 dark:text-red-400',
      purple: 'text-purple-500 dark:text-purple-400',
    },
  },
  defaultVariants: {
    color: 'yellow',
  },
})
