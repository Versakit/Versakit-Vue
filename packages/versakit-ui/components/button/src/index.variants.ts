import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden active:scale-95',
  variants: {
    variant: {
      primary:
        'bg-blue-500 text-white hover:bg-blue-500/90 dark:bg-blue-500 dark:hover:bg-blue-500',
      success:
        'bg-green-600 text-white hover:bg-green-600/90 dark:bg-green-700 dark:hover:bg-green-600',
      warning:
        'bg-yellow-600 text-white hover:bg-yellow-600/90 dark:bg-yellow-700 dark:hover:bg-yellow-600',
      info: 'bg-cyan-600 text-white hover:bg-cyan-600/90 dark:bg-cyan-700 dark:hover:bg-cyan-600',
      error:
        'bg-red-600 text-white hover:bg-red-600/90 dark:bg-red-700 dark:hover:bg-red-600',
      default:
        'bg-gray-100 text-gray-900 hover:bg-gray-200/90 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
      text: 'bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',
      outline:
        'border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800',
      ghost:
        'bg-transparent text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white',
    },
    size: {
      xs: 'h-6 px-2 text-xs',
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl',
    },
    shape: {
      default: 'rounded-md',
      circle: 'rounded-full aspect-square p-0',
      round: 'rounded-full',
    },
    loading: {
      true: 'relative text-transparent transition-none hover:text-transparent',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    block: {
      true: 'w-full',
    },
    iconPosition: {
      left: 'flex-row',
      right: 'flex-row-reverse',
    },
  },
  compoundVariants: [
    {
      size: ['xs', 'sm', 'md', 'lg', 'xl'],
      shape: 'circle',
      class: 'flex items-center justify-center',
    },
    {
      variant: 'primary',
      loading: true,
      class: 'bg-blue-600/90 dark:bg-blue-700/90',
    },
    {
      variant: 'success',
      loading: true,
      class: 'bg-green-600/90 dark:bg-green-700/90',
    },
    {
      variant: 'warning',
      loading: true,
      class: 'bg-yellow-600/90 dark:bg-yellow-700/90',
    },
    {
      variant: 'error',
      loading: true,
      class: 'bg-red-600/90 dark:bg-red-700/90',
    },
    {
      variant: 'info',
      loading: true,
      class: 'bg-cyan-600/90 dark:bg-cyan-700/90',
    },
    {
      variant: 'default',
      loading: true,
      class: 'bg-gray-100/90 dark:bg-gray-800/90',
    },
    {
      iconPosition: 'right',
      class: 'flex-row-reverse',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    shape: 'default',
    iconPosition: 'left',
  },
})
