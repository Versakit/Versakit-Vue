import { tv } from 'tailwind-variants'

export const kbdStyle = tv({
  base: 'inline-flex items-center justify-center font-mono font-medium rounded-md border shadow-[0_1px_0] min-w-[20px] text-center',
  variants: {
    variant: {
      solid: 'bg-gray-100 border-gray-200 shadow-gray-300',
      outline: 'bg-transparent border-gray-300 shadow-gray-400',
    },
    size: {
      xs: 'text-xs px-1 py-0.5',
      sm: 'text-sm px-1.5 py-0.5',
      md: 'text-base px-2 py-1',
      lg: 'text-lg px-2.5 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})
