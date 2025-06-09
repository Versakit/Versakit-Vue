import { tv } from 'tailwind-variants'

export const switchVariants = tv({
  base: 'relative inline-flex cursor-pointer items-center',
  variants: {
    size: {
      sm: 'h-4 w-7',
      md: 'h-5 w-10',
      lg: 'h-6 w-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const switchTrackVariants = tv({
  base: 'absolute inset-0 rounded-full transition-colors peer-focus:ring-2 peer-focus:ring-offset-2',
  variants: {
    variant: {
      primary:
        'bg-gray-200 peer-checked:bg-blue-500 dark:bg-gray-600 dark:peer-checked:bg-blue-500',
      success:
        'bg-gray-200 peer-checked:bg-green-500 dark:bg-gray-600 dark:peer-checked:bg-green-500',
      warning:
        'bg-gray-200 peer-checked:bg-yellow-500 dark:bg-gray-600 dark:peer-checked:bg-yellow-500',
      info: 'bg-gray-200 peer-checked:bg-cyan-500 dark:bg-gray-600 dark:peer-checked:bg-cyan-500',
      error:
        'bg-gray-200 peer-checked:bg-red-500 dark:bg-gray-600 dark:peer-checked:bg-red-500',
      default:
        'bg-gray-200 peer-checked:bg-gray-700 dark:bg-gray-600 dark:peer-checked:bg-gray-400',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const switchThumbVariants = tv({
  base: 'absolute rounded-full bg-white transition-transform left-0.5 top-1/2 -translate-y-1/2 peer-checked:translate-x-full',
  variants: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    disabled: {
      true: 'opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
