// styles/switch.ts
import { tv } from 'tailwind-variants'

export const switchStyle = tv({
  slots: {
    root: [
      'relative inline-flex items-center w-10 h-6',
      'rounded-full transition-all duration-300 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
      'dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800',
      'cursor-pointer overflow-hidden',
      'before:content-[""] before:absolute before:inset-0 before:rounded-full before:opacity-0 before:bg-blue-400/30 before:transition-opacity before:duration-300',
    ],
    thumb: [
      'absolute top-1',
      'w-4 h-4 bg-white rounded-full shadow-md',
      'transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
      'dark:bg-gray-100',
      'will-change-transform',
      'flex items-center justify-center',
      'before:content-[""] before:absolute before:opacity-0 before:scale-0 before:transition-all before:duration-300',
    ],
  },
  variants: {
    checked: {
      true: {
        root: [
          'bg-blue-600 dark:bg-blue-500',
          'transition-all duration-300 ease-in-out',
          'before:opacity-100',
        ],
        thumb: [
          'left-5',
          'transition-all duration-300',
          'scale-110',
          'before:opacity-100 before:scale-100 before:w-2 before:h-2 before:bg-blue-600/30 before:rounded-full',
        ],
      },
      false: {
        root: [
          'bg-gray-300 dark:bg-gray-600',
          'transition-all duration-300 ease-in-out',
        ],
        thumb: [
          'left-1',
          'transition-all duration-300',
          'before:opacity-0 before:scale-0',
        ],
      },
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
  },
})
