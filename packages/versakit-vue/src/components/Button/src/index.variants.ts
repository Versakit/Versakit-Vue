import { tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  variants: {
    variant: {
      primary:
        'bg-blue-500 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
      secondary:
        'bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-400',
      success:
        'bg-green-500 text-white hover:bg-green-700 focus-visible:ring-green-500',
      warning:
        'bg-yellow-500 text-white hover:bg-yellow-700 focus-visible:ring-yellow-500',
      info: 'bg-zinc-500 text-white hover:bg-zinc-700 focus-visible:ring-zinc-500',
      danger:
        'bg-red-500 text-white hover:bg-red-700 focus-visible:ring-red-500',
      outline:
        'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400',
      ghost: 'bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400',
      link: 'bg-transparent underline-offset-4 hover:underline focus-visible:ring-primary-500',
    },
    size: {
      xs: 'text-xs px-2.5 py-1.5 rounded',
      sm: 'text-sm px-3 py-2 rounded-md',
      md: 'text-sm px-4 py-2 rounded-md',
      lg: 'text-base px-5 py-2.5 rounded-md',
    },
    fullWidth: {
      true: 'w-full',
    },
    rounded: {
      true: 'rounded-full',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      rounded: true,
      class: 'rounded-full',
    },
    {
      size: ['sm', 'md', 'lg'],
      rounded: true,
      class: 'rounded-full',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
})
