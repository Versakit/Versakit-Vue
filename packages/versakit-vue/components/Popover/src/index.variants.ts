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
  base: 'absolute z-10 rounded-md shadow-lg border p-4 max-w-sm box-border',
  variants: {
    placement: {
      top: 'mb-2',
      right: 'ml-2',
      bottom: 'mt-2',
      left: 'mr-2',
    },
    visible: {
      true: 'opacity-100 scale-100',
      false: 'opacity-0 scale-95 pointer-events-none',
    },
    color: {
      default: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
      primary: 'bg-blue-600 border-blue-700 text-white',
      success: 'bg-green-600 border-green-700 text-white',
      warning: 'bg-yellow-600 border-yellow-700 text-white',
      danger: 'bg-red-600 border-red-700 text-white',
    },
  },
  defaultVariants: {
    placement: 'bottom',
    visible: false,
    color: 'default',
  },
})

export const popoverArrow = tv({
  base: 'absolute w-3 h-3 transform rotate-45',
  variants: {
    placement: {
      top: 'bottom-[-6.5px] left-1/2 -translate-x-1/2',
      right: 'left-[-6.5px] top-1/2 -translate-y-1/2',
      bottom: 'top-[-6.5px] left-1/2 -translate-x-1/2',
      left: 'right-[-6.5px] top-1/2 -translate-y-1/2',
    },
    color: {
      default: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
      primary: 'bg-blue-600 border-blue-700',
      success: 'bg-green-600 border-green-700',
      warning: 'bg-yellow-600 border-yellow-700',
      danger: 'bg-red-600 border-red-700',
    },
  },
  defaultVariants: {
    placement: 'bottom',
    color: 'default',
  },
})

export const popoverTitle = tv({
  base: 'text-sm font-medium mb-2 pb-2 border-b',
  variants: {
    color: {
      default:
        'text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700',
      primary: 'text-white border-blue-700',
      success: 'text-white border-green-700',
      warning: 'text-white border-yellow-700',
      danger: 'text-white border-red-700',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

export const popoverBody = tv({
  base: 'text-sm',
  variants: {
    color: {
      default: 'text-gray-700 dark:text-gray-300',
      primary: 'text-white',
      success: 'text-white',
      warning: 'text-white',
      danger: 'text-white',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})
