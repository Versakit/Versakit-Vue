import { tv } from 'tailwind-variants'

export const inputTagStyle = tv({
  slots: {
    root: 'relative inline-flex w-full',
    wrapper:
      'relative flex flex-wrap items-center gap-1 w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800',
    input:
      'flex-grow border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400',
    prefix: 'flex items-center pl-3 text-gray-500 dark:text-gray-400',
    suffix: 'flex items-center pr-3 text-gray-500 dark:text-gray-400',
    tag: 'inline-flex items-center gap-1 bg-gray-100 rounded py-1 px-2 m-1 text-sm dark:bg-gray-700',
    tagClose: 'cursor-pointer hover:text-blue-500 dark:hover:text-blue-400',
    count:
      'absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400',
  },
  variants: {
    size: {
      small: {
        wrapper: 'min-h-8 py-1 text-sm',
        input: 'text-sm py-1',
        tag: 'py-0.5 px-1.5 text-xs',
        prefix: 'text-sm',
        suffix: 'text-sm',
      },
      default: {
        wrapper: 'min-h-10',
        input: 'text-base py-2',
        tag: 'py-1 px-2 text-sm',
      },
      large: {
        wrapper: 'min-h-12 py-2 text-lg',
        input: 'text-lg py-2',
        tag: 'py-1.5 px-2.5 text-base',
        prefix: 'text-lg',
        suffix: 'text-lg',
      },
    },
    status: {
      error: {
        wrapper:
          '!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30',
      },
      warning: {
        wrapper:
          '!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30',
      },
      success: {
        wrapper:
          '!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30',
      },
    },
    disabled: {
      true: {
        wrapper: 'bg-gray-100 dark:bg-gray-700',
        input: 'cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
