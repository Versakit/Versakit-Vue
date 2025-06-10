import { tv } from 'tailwind-variants'

export const popover = tv({
  base: 'relative inline-block',
  variants: {},
  defaultVariants: {},
})

export const popoverTrigger = tv({
  base: 'inline-flex',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const popoverContent = tv({
  base: 'absolute z-50 bg-white dark:bg-gray-800 shadow-md rounded-md border border-gray-200 dark:border-gray-700 p-4 min-w-[200px] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  variants: {},
  defaultVariants: {},
})

export const popoverTitle = tv({
  base: 'text-sm font-medium text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-2 mb-2',
  variants: {},
  defaultVariants: {},
})

export const popoverArrow = tv({
  base: 'fill-current text-white dark:text-gray-800',
  variants: {},
  defaultVariants: {},
})

export const popoverClose = tv({
  base: 'absolute top-2 right-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
  variants: {},
  defaultVariants: {},
})
