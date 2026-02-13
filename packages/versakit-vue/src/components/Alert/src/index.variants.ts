import { tv } from 'tailwind-variants'

export const alertStyle = tv({
  base: 'w-full flex items-start gap-3 relative',
  variants: {
    variant: {
      info: 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800',
      success:
        'bg-green-50 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800',
      warning:
        'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-200 dark:border-amber-800',
      error:
        'bg-red-50 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800',
    },
    size: {
      xs: 'text-xs p-2',
      sm: 'text-sm p-3',
      md: 'text-base p-4',
      lg: 'text-base p-5',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-xl',
    },
    border: {
      true: 'border',
      false: 'border-0',
    },
    shadow: {
      true: 'shadow-sm',
      false: 'shadow-none',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'md',
    rounded: 'md',
    border: true,
    shadow: false,
  },
})

export const alertIconStyle = tv({
  base: 'shrink-0 flex items-center justify-center',
  variants: {
    variant: {
      info: 'text-blue-500 dark:text-blue-400',
      success: 'text-green-500 dark:text-green-400',
      warning: 'text-amber-500 dark:text-amber-400',
      error: 'text-red-500 dark:text-red-400',
    },
    size: {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: 'w-7 h-7',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'md',
  },
})

export const alertTitleStyle = tv({
  base: 'font-medium leading-tight',
  variants: {
    size: {
      xs: 'text-xs mb-0.5',
      sm: 'text-sm mb-1',
      md: 'text-base mb-1',
      lg: 'text-lg mb-1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const alertDescriptionStyle = tv({
  base: 'leading-normal',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const alertCloseButtonStyle = tv({
  base: 'absolute right-2 top-2 p-1 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors',
  variants: {
    size: {
      xs: 'w-5 h-5',
      sm: 'w-6 h-6',
      md: 'w-7 h-7',
      lg: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
