import { tv } from 'tailwind-variants'

export const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-600/90',
      success: 'bg-green-600 text-white hover:bg-green-600/90',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-600/90',
      info: 'bg-cyan-600 text-white hover:bg-cyan-600/90',
      error: 'bg-red-600 text-white hover:bg-red-600/90',
    },
    size: {
      xs: 'h-6 px-2',
      sm: 'h-8 px-3',
      md: 'h-10 px-4',
      lg: 'h-12 px-6',
      xl: 'h-14 px-8',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
