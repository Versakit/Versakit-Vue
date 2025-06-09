import { tv } from 'tailwind-variants'

export const tagInput = tv({
  base: 'flex flex-wrap items-center gap-2 w-full transition-colors duration-200 ease-in-out focus-within:outline-none p-1',
  variants: {
    variant: {
      outline: 'border border-gray-300 dark:border-gray-600 rounded-md',
      filled: 'border-b-2 bg-gray-100 dark:bg-gray-800 rounded-t-md',
      underlined: 'border-b-2 border-gray-300 dark:border-gray-600',
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
    status: 'default',
  },
})

export const tagInputField = tv({
  base: 'flex-grow min-w-20 bg-transparent border-none outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500',
  variants: {
    size: {
      xs: 'text-xs h-5',
      sm: 'text-sm h-7',
      md: 'text-base h-8',
      lg: 'text-lg h-9',
      xl: 'text-xl h-10',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const tag = tv({
  base: 'inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm',
  variants: {
    size: {
      xs: 'text-xs px-1 py-0',
      sm: 'text-xs px-1.5 py-0.5',
      md: 'text-sm px-2 py-1',
      lg: 'text-base px-2.5 py-1',
      xl: 'text-lg px-3 py-1.5',
    },
    variant: {
      primary: 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100',
      success:
        'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
      warning:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
      error: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
      default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export const tagDeleteButton = tv({
  base: 'hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none cursor-pointer ml-1',
})
