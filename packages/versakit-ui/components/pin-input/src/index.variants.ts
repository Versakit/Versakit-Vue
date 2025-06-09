import { tv } from 'tailwind-variants'

export const pinInput = tv({
  base: 'flex items-center gap-2',
})

export const pinInputWrapper = tv({
  base: 'flex-grow',
})

export const pinInputField = tv({
  base: 'w-full text-center focus:outline-none transition-colors duration-200 ease-in-out',
  variants: {
    variant: {
      outline: 'border border-gray-300 dark:border-gray-600 rounded-md',
      filled: 'border-b-2 bg-gray-100 dark:bg-gray-800 rounded-t-md',
      underlined: 'border-b-2 border-gray-300 dark:border-gray-600',
    },
    size: {
      xs: 'h-6 w-6 text-xs',
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-14 w-14 text-xl',
    },
    status: {
      default: 'focus:border-blue-500 dark:focus:border-blue-400',
      success:
        'border-green-500 dark:border-green-400 focus:border-green-500 dark:focus:border-green-400',
      warning:
        'border-yellow-500 dark:border-yellow-400 focus:border-yellow-500 dark:focus:border-yellow-400',
      error:
        'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    status: 'default',
  },
})

export const pinInputSeparator = tv({
  base: 'flex items-center text-gray-400 dark:text-gray-500',
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
