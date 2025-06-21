import { tv } from 'tailwind-variants'

export const cardStyle = tv({
  base: 'bg-white',
  variants: {
    variant: {
      default: '',
      bordered: 'border border-gray-200',
      elevated: 'shadow-md',
    },
    padding: {
      none: '',
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-xl',
    },
    hover: {
      true: 'transition-all duration-200 hover:shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    radius: 'md',
    hover: false,
  },
})
