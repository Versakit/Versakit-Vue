import { tv } from 'tailwind-variants'

export const avatar = tv({
  base: 'relative inline-flex items-center justify-center overflow-hidden text-center select-none',
  variants: {
    size: {
      xs: 'w-6 h-6 text-xs',
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
      xl: 'w-16 h-16 text-xl',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-none',
      rounded: 'rounded-md',
    },
    variant: {
      primary: 'bg-blue-500 text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      info: 'bg-cyan-500 text-white',
      error: 'bg-red-500 text-white',
      default: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
    },
    loading: {
      true: 'animate-pulse',
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'circle',
    variant: 'default',
  },
})

export const avatarStatus = tv({
  base: 'absolute border-2 border-white dark:border-gray-800 rounded-full',
  variants: {
    status: {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      busy: 'bg-red-500',
      away: 'bg-yellow-500',
      none: 'hidden',
    },
    size: {
      xs: 'w-1.5 h-1.5',
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
      xl: 'w-4 h-4',
    },
    position: {
      'top-right': 'top-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-left': 'bottom-0 left-0',
    },
  },
  defaultVariants: {
    status: 'none',
    size: 'md',
    position: 'bottom-right',
  },
})

export const avatarImage = tv({
  base: 'w-full h-full object-cover',
})

export const avatarFallback = tv({
  base: 'flex h-full w-full items-center justify-center',
})
