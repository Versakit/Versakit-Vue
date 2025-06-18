import { tv } from 'tailwind-variants'

export const pinInput = tv({
  base: 'w-10 h-10 text-center border rounded outline-none transition-colors',
  variants: {
    state: {
      default: 'border-gray-300 focus:border-gray-900 border-2 border-solid',
      error: 'border-gray-700 focus:border-black border-2 border-solid',
      success: 'border-black focus:border-gray-800 border-2 border-solid',
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
