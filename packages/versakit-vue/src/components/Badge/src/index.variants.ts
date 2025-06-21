import { tv } from 'tailwind-variants'

export const badge = tv({
  base: 'absolute inline-flex items-center justify-center font-medium rounded-full z-10',
  variants: {
    color: {
      primary: 'bg-blue-500 text-white dark:bg-blue-600',
      secondary: 'bg-gray-500 text-white dark:bg-gray-600',
      success: 'bg-green-500 text-white dark:bg-green-600',
      warning: 'bg-yellow-500 text-white dark:bg-yellow-600',
      danger: 'bg-red-500 text-white dark:bg-red-600',
      info: 'bg-sky-500 text-white dark:bg-sky-600',
    },
    size: {
      sm: 'min-w-4 h-4 text-xs px-1',
      md: 'min-w-5 h-5 text-xs px-1.5',
      lg: 'min-w-6 h-6 text-sm px-2',
    },
    dot: {
      true: 'w-2 h-2 min-w-0 p-0',
      false: '',
    },
  },
  compoundVariants: [
    {
      dot: true,
      size: 'sm',
      class: 'w-1.5 h-1.5',
    },
    {
      dot: true,
      size: 'lg',
      class: 'w-2.5 h-2.5',
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    dot: false,
  },
})
