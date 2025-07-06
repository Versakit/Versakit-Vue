import { tv } from 'tailwind-variants'

export const paginatorStyle = tv({
  base: 'flex items-center justify-center',
  variants: {
    disabled: {
      true: 'opacity-50 pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const paginatorListStyle = tv({
  base: 'flex items-center gap-1',
})

export const paginatorItemStyle = tv({
  base: '',
})

export const paginatorButtonStyle = tv({
  base: 'flex items-center justify-center transition-colors focus:outline-none',
  variants: {
    variant: {
      default: 'bg-white border border-gray-300 hover:bg-gray-100',
      outline: 'bg-transparent border border-gray-300 hover:bg-gray-100',
      text: 'bg-transparent hover:bg-gray-100',
    },
    size: {
      sm: 'h-7 w-7 text-xs',
      md: 'h-9 w-9 text-sm',
      lg: 'h-11 w-11 text-base',
    },
    shape: {
      square: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
    },
    active: {
      true: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    shape: 'rounded',
    active: false,
    disabled: false,
  },
})

export const paginatorEllipsisStyle = tv({
  base: 'flex items-center justify-center',
  variants: {
    size: {
      sm: 'h-7 w-7 text-xs',
      md: 'h-9 w-9 text-sm',
      lg: 'h-11 w-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const paginatorJumperStyle = tv({
  base: 'flex items-center ml-4',
})

export const paginatorJumperInputStyle = tv({
  base: 'w-12 h-full text-center border border-gray-300 rounded-md mx-1 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
  variants: {
    size: {
      sm: 'h-7 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const paginatorJumperButtonStyle = tv({
  base: 'ml-2 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none',
  variants: {
    size: {
      sm: 'h-7 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
