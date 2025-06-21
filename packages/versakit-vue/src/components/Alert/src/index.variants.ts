// styles/alert.ts
import { tv } from 'tailwind-variants'

export const alertStyle = tv({
  base: 'w-full flex items-start gap-3 border rounded-md',
  variants: {
    variant: {
      info: 'bg-blue-50 text-blue-800 border-blue-200',
      success: 'bg-green-50 text-green-800 border-green-200',
      warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      error: 'bg-red-50 text-red-800 border-red-200',
    },
    size: {
      xs: 'text-xs px-2 py-1.5',
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-2.5',
      lg: 'text-base px-5 py-3',
    },
  },
  defaultVariants: {
    variant: 'info',
    size: 'md',
  },
})
