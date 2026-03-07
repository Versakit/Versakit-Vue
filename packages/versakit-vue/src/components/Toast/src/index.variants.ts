import { tv } from 'tailwind-variants'

export const toastVariants = tv({
  slots: {
    base: 'pointer-events-auto flex w-full max-w-md items-center gap-3 rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out',
    title: 'text-sm font-semibold',
    description: 'text-sm opacity-90',
    icon: 'h-5 w-5 shrink-0',
    closeButton:
      'ml-auto -mr-2 -mt-2 inline-flex h-6 w-6 items-center justify-center rounded-md p-1 opacity-50 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2',
  },
  variants: {
    type: {
      success: {
        base: 'border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300',
        icon: 'text-green-500 dark:text-green-400',
        closeButton:
          'text-green-800 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-800',
      },
      error: {
        base: 'border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300',
        icon: 'text-red-500 dark:text-red-400',
        closeButton:
          'text-red-800 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-800',
      },
      warning: {
        base: 'border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        icon: 'text-yellow-500 dark:text-yellow-400',
        closeButton:
          'text-yellow-800 hover:bg-yellow-100 dark:text-yellow-300 dark:hover:bg-yellow-800',
      },
      info: {
        base: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        icon: 'text-blue-500 dark:text-blue-400',
        closeButton:
          'text-blue-800 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800',
      },
    },
  },
  defaultVariants: {
    type: 'info',
  },
})
