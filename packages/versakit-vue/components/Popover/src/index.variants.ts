import { tv } from 'tailwind-variants'

export const popoverTrigger = tv({
  base: 'inline-block',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const popoverContent = tv({
  base: 'absolute z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm',
  variants: {
    placement: {
      top: 'bottom-full mb-2',
      right: 'left-full ml-2',
      bottom: 'top-full mt-2',
      left: 'right-full mr-2',
      'top-start': 'bottom-full mb-2 left-0',
      'top-end': 'bottom-full mb-2 right-0',
      'right-start': 'left-full ml-2 top-0',
      'right-end': 'left-full ml-2 bottom-0',
      'bottom-start': 'top-full mt-2 left-0',
      'bottom-end': 'top-full mt-2 right-0',
      'left-start': 'right-full mr-2 top-0',
      'left-end': 'right-full mr-2 bottom-0',
    },
    visible: {
      true: 'opacity-100 scale-100',
      false: 'opacity-0 scale-95 pointer-events-none',
    },
  },
  defaultVariants: {
    placement: 'bottom',
    visible: false,
  },
})

export const popoverArrow = tv({
  base: 'absolute w-3 h-3 bg-white dark:bg-gray-800 transform rotate-45 border border-gray-200 dark:border-gray-700',
  variants: {
    placement: {
      top: 'bottom-[-6px] left-1/2 -translate-x-1/2 border-t-0 border-l-0',
      right: 'left-[-6px] top-1/2 -translate-y-1/2 border-r-0 border-t-0',
      bottom: 'top-[-6px] left-1/2 -translate-x-1/2 border-b-0 border-r-0',
      left: 'right-[-6px] top-1/2 -translate-y-1/2 border-l-0 border-b-0',
      'top-start': 'bottom-[-6px] left-4 border-t-0 border-l-0',
      'top-end': 'bottom-[-6px] right-4 border-t-0 border-l-0',
      'right-start': 'left-[-6px] top-4 border-r-0 border-t-0',
      'right-end': 'left-[-6px] bottom-4 border-r-0 border-t-0',
      'bottom-start': 'top-[-6px] left-4 border-b-0 border-r-0',
      'bottom-end': 'top-[-6px] right-4 border-b-0 border-r-0',
      'left-start': 'right-[-6px] top-4 border-l-0 border-b-0',
      'left-end': 'right-[-6px] bottom-4 border-l-0 border-b-0',
    },
  },
  defaultVariants: {
    placement: 'bottom',
  },
})

export const popoverTitle = tv({
  base: 'text-sm font-medium text-gray-900 dark:text-gray-100 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700',
})

export const popoverBody = tv({
  base: 'text-sm text-gray-700 dark:text-gray-300',
})
