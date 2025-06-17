import { tv } from 'tailwind-variants'

export const pinInput = tv({
  base: 'w-10 h-10 text-center border rounded outline-none transition-colors',
  variants: {
    state: {
      default: 'border-gray-300 focus:border-blue-500',
      error: 'border-red-500 focus:border-red-600',
      success: 'border-green-500 focus:border-green-600',
    },
    size: {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
    },
  },
  defaultVariants: {
    state: 'default',
    size: 'md',
  },
})
