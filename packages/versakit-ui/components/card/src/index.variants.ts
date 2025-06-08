import { tv } from 'tailwind-variants'

export const card = tv({
  base: 'bg-white dark:bg-gray-800 overflow-hidden transition-all',
  variants: {
    variant: {
      default: 'border-gray-200 dark:border-gray-700',
      primary: 'border-blue-500 dark:border-blue-700',
      success: 'border-green-500 dark:border-green-700',
      warning: 'border-yellow-500 dark:border-yellow-700',
      info: 'border-cyan-500 dark:border-cyan-700',
      error: 'border-red-500 dark:border-red-700',
    },
    bordered: {
      true: 'border',
      false: 'border-0',
    },
    shadow: {
      true: 'shadow-md',
      false: 'shadow-none',
    },
    hoverable: {
      true: 'hover:shadow-lg',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
    autoHeight: {
      true: 'h-auto',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    bordered: true,
    shadow: false,
    hoverable: false,
    radius: 'md',
    autoHeight: true,
  },
})

export const cardHeader = tv({
  base: 'px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center',
  variants: {
    variant: {
      default: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
      primary:
        'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
      success:
        'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300',
      warning:
        'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300',
      info: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300',
      error: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const cardTitle = tv({
  base: 'text-lg font-medium',
})

export const cardSubtitle = tv({
  base: 'text-sm text-gray-500 dark:text-gray-400 mt-1',
})

export const cardBody = tv({
  base: 'p-6',
})

export const cardFooter = tv({
  base: 'px-6 py-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30',
})

export const cardCollapse = tv({
  base: 'w-6 h-6 text-gray-500 dark:text-gray-400 transition-transform duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
  variants: {
    collapsed: {
      true: 'transform rotate-180',
      false: '',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})
