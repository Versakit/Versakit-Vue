import { tv } from 'tailwind-variants'

export const input = tv({
  base: 'flex items-center w-full transition-colors duration-200 ease-in-out focus-within:outline-none',
  variants: {
    variant: {
      outline: 'border border-gray-300 dark:border-gray-600 rounded-md',
      filled: 'border-b-2 bg-gray-100 dark:bg-gray-800 rounded-t-md',
      underlined: 'border-b-2 border-gray-300 dark:border-gray-600',
    },
    size: {
      xs: 'h-6 text-xs',
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
      xl: 'h-14 text-xl',
    },
    status: {
      default: 'focus-within:border-blue-500 dark:focus-within:border-blue-400',
      success:
        'border-green-500 dark:border-green-400 focus-within:border-green-500 dark:focus-within:border-green-400',
      warning:
        'border-yellow-500 dark:border-yellow-400 focus-within:border-yellow-500 dark:focus-within:border-yellow-400',
      error:
        'border-red-500 dark:border-red-400 focus-within:border-red-500 dark:focus-within:border-red-400',
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

export const inputElement = tv({
  base: 'w-full bg-transparent border-none outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500',
  variants: {
    size: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-2 text-lg',
      xl: 'px-5 py-3 text-xl',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputPrefix = tv({
  base: 'flex items-center',
  variants: {
    size: {
      xs: 'pl-2',
      sm: 'pl-3',
      md: 'pl-3',
      lg: 'pl-4',
      xl: 'pl-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const inputSuffix = tv({
  base: 'flex items-center',
  variants: {
    size: {
      xs: 'pr-2',
      sm: 'pr-3',
      md: 'pr-3',
      lg: 'pr-4',
      xl: 'pr-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const clearButton = tv({
  base: 'cursor-pointer text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300',
})

export const counter = tv({
  base: 'text-gray-500 dark:text-gray-400 text-xs ml-2',
})
