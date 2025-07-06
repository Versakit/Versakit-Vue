import { tv } from 'tailwind-variants'

export const modalOverlay = tv({
  base: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center',
})

export const modalContent = tv({
  base: `
    relative
    bg-white dark:bg-gray-800
    rounded-lg shadow-lg
    w-full max-w-lg
    transition-all duration-300
    flex flex-col
    overflow-hidden
  `,
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export const modalHeader = tv({
  base: 'px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between',
})

export const modalTitle = tv({
  base: 'text-lg font-medium text-gray-900 dark:text-white',
})

export const modalBody = tv({
  base: 'p-6 flex-1 overflow-y-auto',
})

export const modalFooter = tv({
  base: 'px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-2',
})

export const modalCloseButton = tv({
  base: 'absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400',
})
