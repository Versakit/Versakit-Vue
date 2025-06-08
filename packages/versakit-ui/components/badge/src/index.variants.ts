import { tv } from 'tailwind-variants'

export const badge = tv({
  base: 'inline-flex items-center justify-center rounded-full font-medium transition-all z-10',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white dark:bg-blue-700',
      success: 'bg-green-600 text-white dark:bg-green-700',
      warning: 'bg-yellow-600 text-white dark:bg-yellow-700',
      info: 'bg-cyan-600 text-white dark:bg-cyan-700',
      error: 'bg-red-600 text-white dark:bg-red-700',
      default: 'bg-gray-600 text-white dark:bg-gray-700',
    },
    size: {
      xs: 'h-4 min-w-4 text-xs px-1',
      sm: 'h-5 min-w-5 text-xs px-1',
      md: 'h-6 min-w-6 text-sm px-1.5',
      lg: 'h-7 min-w-7 text-base px-2',
    },
    position: {
      'top-right': 'absolute -top-1 -right-1',
      'top-left': 'absolute -top-1 -left-1',
      'bottom-right': 'absolute -bottom-1 -right-1',
      'bottom-left': 'absolute -bottom-1 -left-1',
    },
    dot: {
      true: 'h-3 w-3 min-w-0 p-0',
    },
    standalone: {
      true: 'relative',
      false: '',
    },
  },
  compoundVariants: [
    {
      standalone: false,
      class: 'absolute',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    position: 'top-right',
    standalone: false,
  },
})
