import { tv } from 'tailwind-variants'

export const chipStyle = tv({
  base: 'inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm border cursor-pointer transition-colors duration-200',
  variants: {
    selected: {
      true: 'bg-blue-100 text-blue-800 border-blue-300',
      false: 'bg-gray-100 text-gray-800 border-gray-200',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
})
