// styles/switch.ts
import { tv } from 'tailwind-variants'

export const switchStyle = tv({
  slots: {
    root: [
      'relative inline-flex items-center rounded-full transition-all duration-300 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'dark:focus:ring-offset-gray-800',
      'cursor-pointer overflow-hidden',
    ],
    thumb: [
      'absolute bg-white rounded-full shadow-md',
      'transform transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
      'dark:bg-gray-100',
      'will-change-transform',
      'flex items-center justify-center',
    ],
  },
  variants: {
    checked: {
      true: {
        root: ['transition-all duration-300 ease-in-out'],
        thumb: ['transition-all duration-300', 'scale-110'],
      },
      false: {
        root: ['transition-all duration-300 ease-in-out'],
        thumb: ['transition-all duration-300'],
      },
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed',
      },
    },
    size: {
      small: {
        root: 'w-8 h-4',
        thumb: 'w-3 h-3 top-0.5',
      },
      default: {
        root: 'w-10 h-6',
        thumb: 'w-4 h-4 top-1',
      },
      large: {
        root: 'w-12 h-7',
        thumb: 'w-5 h-5 top-1',
      },
    },
    color: {
      blue: {
        root: [
          'focus:ring-blue-500 dark:focus:ring-blue-400',
          'before:bg-blue-400/30',
        ],
      },
      green: {
        root: [
          'focus:ring-green-500 dark:focus:ring-green-400',
          'before:bg-green-400/30',
        ],
      },
      red: {
        root: [
          'focus:ring-red-500 dark:focus:ring-red-400',
          'before:bg-red-400/30',
        ],
      },
      yellow: {
        root: [
          'focus:ring-yellow-500 dark:focus:ring-yellow-400',
          'before:bg-yellow-400/30',
        ],
      },
      purple: {
        root: [
          'focus:ring-purple-500 dark:focus:ring-purple-400',
          'before:bg-purple-400/30',
        ],
      },
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
    size: 'default',
    color: 'blue',
  },
})
