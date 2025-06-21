import { tv } from 'tailwind-variants'

export const textareaStyle = tv({
  base: 'w-full rounded-md border border-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    size: {
      sm: 'text-xs p-1.5',
      md: 'text-sm p-2',
      lg: 'text-base p-2.5',
    },
    status: {
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      warning:
        'border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
    },
    resize: {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y',
    },
  },
  defaultVariants: {
    size: 'md',
    resize: 'vertical',
  },
})
