import { tv } from 'tailwind-variants'

export const paginatorStyle = tv({
  base: 'flex items-center justify-center',
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const paginatorListStyle = tv({
  base: 'flex items-center gap-1',
})

export const paginatorItemStyle = tv({
  base: '',
})

export const paginatorButtonStyle = tv({
  base: 'flex items-center justify-center transition-colors focus:outline-none',
  variants: {
    variant: {
      default:
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800',
      outline:
        'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800',
      text: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800',
    },
    size: {
      sm: 'h-7 w-7 text-xs',
      md: 'h-9 w-9 text-sm',
      lg: 'h-11 w-11 text-base',
    },
    shape: {
      square: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
    active: {
      true: 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600 dark:border-blue-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'rounded',
    active: false,
    disabled: false,
  },
})

export const paginatorEllipsisStyle = tv({
  base: 'flex items-center justify-center text-gray-500 dark:text-gray-400',
  variants: {
    size: {
      sm: 'h-7 w-7 text-xs',
      md: 'h-9 w-9 text-sm',
      lg: 'h-11 w-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const paginatorJumperStyle = tv({
  base: 'ml-4 flex items-center text-gray-700 dark:text-gray-300',
})

export const paginatorJumperInputStyle = tv({
  base: 'mx-1 h-full w-12 rounded-md border border-gray-300 bg-white text-center text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400',
  variants: {
    size: {
      sm: 'h-7 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const paginatorJumperButtonStyle = tv({
  base: 'ml-2 rounded-md bg-blue-500 px-3 text-white hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-500',
  variants: {
    size: {
      sm: 'h-7 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
