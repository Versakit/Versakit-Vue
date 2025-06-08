import { tv } from 'tailwind-variants'

export const alert = tv({
  base: 'relative rounded-md p-4 text-sm transition-all',
  variants: {
    variant: {
      primary: 'bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200',
      success:
        'bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200',
      warning:
        'bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200',
      info: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200',
      error: 'bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200',
      default: 'bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    },
    bordered: {
      true: 'border',
    },
    shadow: {
      true: 'shadow-md',
    },
    fullWidth: {
      true: 'w-full',
      false: 'inline-block',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      bordered: true,
      class: 'border-blue-200 dark:border-blue-800',
    },
    {
      variant: 'success',
      bordered: true,
      class: 'border-green-200 dark:border-green-800',
    },
    {
      variant: 'warning',
      bordered: true,
      class: 'border-yellow-200 dark:border-yellow-800',
    },
    {
      variant: 'info',
      bordered: true,
      class: 'border-cyan-200 dark:border-cyan-800',
    },
    {
      variant: 'error',
      bordered: true,
      class: 'border-red-200 dark:border-red-800',
    },
    {
      variant: 'default',
      bordered: true,
      class: 'border-gray-200 dark:border-gray-700',
    },
  ],
  defaultVariants: {
    variant: 'default',
    bordered: false,
    shadow: false,
    fullWidth: true,
  },
})

export const alertTitle = tv({
  base: 'mb-1 font-medium',
})

export const alertIcon = tv({
  base: 'mr-3 inline-flex h-5 w-5',
  variants: {
    variant: {
      primary: 'text-blue-500 dark:text-blue-400',
      success: 'text-green-500 dark:text-green-400',
      warning: 'text-yellow-500 dark:text-yellow-400',
      info: 'text-cyan-500 dark:text-cyan-400',
      error: 'text-red-500 dark:text-red-400',
      default: 'text-gray-500 dark:text-gray-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export const alertClose = tv({
  base: 'absolute top-4 right-4 inline-flex h-4 w-4 items-center justify-center rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-1 focus-visible:ring-2',
  variants: {
    variant: {
      primary: 'text-blue-500 focus:ring-blue-500',
      success: 'text-green-500 focus:ring-green-500',
      warning: 'text-yellow-500 focus:ring-yellow-500',
      info: 'text-cyan-500 focus:ring-cyan-500',
      error: 'text-red-500 focus:ring-red-500',
      default: 'text-gray-500 focus:ring-gray-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
