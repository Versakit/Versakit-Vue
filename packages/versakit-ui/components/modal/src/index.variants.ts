import { tv } from 'tailwind-variants'

export const modal = tv({
  base: 'flex flex-col bg-white dark:bg-gray-800 shadow-xl dark:text-white transition-all overflow-hidden',
  variants: {
    size: {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full',
    },
    rounded: {
      true: 'rounded-lg',
    },
    centered: {
      true: '',
    },
    fullscreen: {
      true: 'w-screen h-screen max-w-none',
    },
    fixedHeight: {
      true: 'h-auto',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: true,
  },
})

export const modalWrapper = tv({
  base: 'fixed inset-0 z-50 flex justify-center items-start p-4 sm:p-6 md:p-20 overflow-y-auto',
  variants: {
    centered: {
      true: 'items-center',
    },
    fullscreen: {
      true: 'p-0',
    },
  },
})

export const modalOverlay = tv({
  base: 'fixed inset-0 bg-black transition-opacity duration-300 ease-in-out',
})

export const modalHeader = tv({
  base: 'flex items-center justify-between p-4 border-b dark:border-gray-700',
})

export const modalTitle = tv({
  base: 'text-lg font-medium',
})

export const modalClose = tv({
  base: 'rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
})

export const modalBody = tv({
  base: 'flex-grow p-4 overflow-auto',
})

export const modalFooter = tv({
  base: 'flex justify-end gap-2 p-4 border-t dark:border-gray-700',
})

export const modalButtonBase = tv({
  base: 'px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      success:
        'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      warning:
        'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
      info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
      error: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      default:
        'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})
