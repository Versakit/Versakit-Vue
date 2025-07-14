import { tv } from 'tailwind-variants'

export const linkStyle = tv({
  base: 'inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
  variants: {
    variant: {
      default:
        'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
      primary:
        'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
      secondary:
        'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300',
      success:
        'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
      danger:
        'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300',
      warning:
        'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
      info: 'text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    underline: {
      true: 'underline underline-offset-4',
      false: 'no-underline',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    underline: false,
    disabled: false,
  },
})

export const linkIconStyle = tv({
  base: 'inline-flex',
  variants: {
    position: {
      left: 'mr-2',
      right: 'ml-2',
    },
    size: {
      sm: 'w-3.5 h-3.5',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    },
  },
  defaultVariants: {
    position: 'left',
    size: 'md',
  },
})
