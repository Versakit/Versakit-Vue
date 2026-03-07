import { tv } from 'tailwind-variants'

export const tableVariants = tv({
  slots: {
    root: 'w-full overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-900',
    table: 'w-full text-left text-sm',
    thead:
      'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-800 dark:text-gray-400',
    th: 'px-6 py-3 font-medium',
    tbody: 'divide-y divide-gray-200 dark:divide-gray-700',
    tr: 'bg-white transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800',
    td: 'whitespace-nowrap px-6 py-4 text-gray-900 dark:text-gray-100',
    empty:
      'flex flex-col items-center justify-center py-12 text-gray-500 dark:text-gray-400',
  },
  variants: {
    stripe: {
      true: {
        tr: 'even:bg-gray-50 dark:even:bg-gray-800',
      },
    },
    border: {
      true: {
        root: 'border border-gray-200 dark:border-gray-700',
        th: 'border-b border-gray-200 dark:border-gray-700',
        td: 'border-b border-gray-200 dark:border-gray-700',
      },
    },
    dense: {
      true: {
        th: 'px-4 py-2',
        td: 'px-4 py-2',
      },
    },
  },
  defaultVariants: {
    stripe: false,
    border: false,
    dense: false,
  },
})
