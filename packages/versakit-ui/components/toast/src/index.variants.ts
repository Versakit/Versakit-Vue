import { tv } from 'tailwind-variants'

export const toast = tv({
  slots: {
    root: 'relative flex w-full items-center justify-between overflow-hidden rounded-md p-4 shadow-lg',
    container: 'fixed z-50 flex flex-col gap-2 p-4 w-full sm:max-w-sm',
    icon: 'flex-shrink-0 mr-3',
    content: 'flex-1 max-w-full',
    title: 'font-semibold leading-tight',
    message: 'text-sm opacity-90',
    progress: 'absolute bottom-0 left-0 h-1 bg-opacity-30',
    close:
      'ml-3 flex-shrink-0 rounded p-1 opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none',
  },
  variants: {
    variant: {
      default: {
        root: 'bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
        progress: 'bg-gray-500',
      },
      success: {
        root: 'bg-green-100 text-green-900 border border-green-200 dark:bg-green-900 dark:text-green-100 dark:border-green-800',
        progress: 'bg-green-500',
      },
      error: {
        root: 'bg-red-100 text-red-900 border border-red-200 dark:bg-red-900 dark:text-red-100 dark:border-red-800',
        progress: 'bg-red-500',
      },
      warning: {
        root: 'bg-yellow-100 text-yellow-900 border border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800',
        progress: 'bg-yellow-500',
      },
      info: {
        root: 'bg-blue-100 text-blue-900 border border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-800',
        progress: 'bg-blue-500',
      },
    },
    size: {
      xs: {
        root: 'p-2',
        title: 'text-xs',
        message: 'text-xs',
        progress: 'h-0.5',
      },
      sm: {
        root: 'p-3',
        title: 'text-sm',
        message: 'text-xs',
        progress: 'h-0.5',
      },
      md: {
        root: 'p-4',
        title: 'text-base',
        message: 'text-sm',
        progress: 'h-1',
      },
      lg: {
        root: 'p-5',
        title: 'text-lg',
        message: 'text-base',
        progress: 'h-1.5',
      },
      xl: {
        root: 'p-6',
        title: 'text-xl',
        message: 'text-lg',
        progress: 'h-2',
      },
    },
    position: {
      top: {
        container: 'top-0 inset-x-0 items-center',
      },
      'top-right': {
        container: 'top-0 right-0 items-end',
      },
      'top-left': {
        container: 'top-0 left-0 items-start',
      },
      bottom: {
        container: 'bottom-0 inset-x-0 items-center',
      },
      'bottom-right': {
        container: 'bottom-0 right-0 items-end',
      },
      'bottom-left': {
        container: 'bottom-0 left-0 items-start',
      },
    },
    disabled: {
      true: {
        root: 'opacity-50 cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    position: 'top-right',
  },
})
