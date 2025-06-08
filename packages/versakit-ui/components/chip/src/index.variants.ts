import { tv } from 'tailwind-variants'

export const chip = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900',
  variants: {
    variant: {
      primary:
        'bg-blue-100 text-blue-800 focus:ring-blue-500 dark:bg-blue-900 dark:text-blue-200',
      success:
        'bg-green-100 text-green-800 focus:ring-green-500 dark:bg-green-900 dark:text-green-200',
      warning:
        'bg-yellow-100 text-yellow-800 focus:ring-yellow-500 dark:bg-yellow-900 dark:text-yellow-200',
      info: 'bg-cyan-100 text-cyan-800 focus:ring-cyan-500 dark:bg-cyan-900 dark:text-cyan-200',
      error:
        'bg-red-100 text-red-800 focus:ring-red-500 dark:bg-red-900 dark:text-red-200',
      default:
        'bg-gray-100 text-gray-800 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-200',
    },
    size: {
      sm: 'text-xs h-6 px-2',
      md: 'text-sm h-8 px-3',
      lg: 'text-base h-10 px-4',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    outlined: {
      true: 'bg-transparent border',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      class:
        'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400',
    },
    {
      variant: 'success',
      outlined: true,
      class:
        'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400',
    },
    {
      variant: 'warning',
      outlined: true,
      class:
        'border-yellow-500 text-yellow-600 dark:border-yellow-400 dark:text-yellow-400',
    },
    {
      variant: 'info',
      outlined: true,
      class:
        'border-cyan-500 text-cyan-600 dark:border-cyan-400 dark:text-cyan-400',
    },
    {
      variant: 'error',
      outlined: true,
      class:
        'border-red-500 text-red-600 dark:border-red-400 dark:text-red-400',
    },
    {
      variant: 'default',
      outlined: true,
      class:
        'border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: false,
    outlined: false,
    disabled: false,
  },
})

export const chipIcon = tv({
  base: 'mr-1.5 inline-flex h-4 w-4 items-center justify-center',
})

export const chipClose = tv({
  base: 'ml-1.5 h-4 w-4 inline-flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none',
})
