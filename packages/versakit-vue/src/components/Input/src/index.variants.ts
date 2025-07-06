import { tv } from 'tailwind-variants'

export const inputStyle = tv({
  slots: {
    root: 'relative inline-flex w-full',
    wrapper:
      'relative flex w-full rounded-md border border-gray-300 bg-white shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800',
    input:
      'block w-full border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:placeholder:text-gray-400',
    prefix: 'flex items-center pl-3 text-gray-500 dark:text-gray-400',
    suffix: 'flex items-center pr-3 text-gray-500 dark:text-gray-400',
    clear:
      'flex cursor-pointer items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
    count:
      'absolute right-2 -bottom-5 text-xs text-gray-500 dark:text-gray-400',
  },
  variants: {
    size: {
      small: {
        wrapper: 'h-8 text-sm',
        input: 'text-sm',
        prefix: 'text-sm',
        suffix: 'text-sm',
      },
      default: {
        wrapper: 'h-10',
        input: 'text-base',
      },
      large: {
        wrapper: 'h-12 text-lg',
        input: 'text-lg',
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
