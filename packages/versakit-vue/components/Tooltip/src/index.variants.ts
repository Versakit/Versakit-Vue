import { tv } from 'tailwind-variants'

export const tooltipContainer = tv({
  base: 'inline-block',
})

export const tooltipContent = tv({
  base: 'absolute z-50 px-2 py-1 text-xs font-medium rounded shadow-md pointer-events-none max-w-xs',
  variants: {
    color: {
      default: 'bg-gray-800 text-white dark:bg-gray-700',
      primary: 'bg-blue-600 text-white',
      success: 'bg-green-600 text-white',
      warning: 'bg-yellow-600 text-white',
      danger: 'bg-red-600 text-white',
    },
    placement: {
      top: 'bottom-full mb-1',
      right: 'left-full ml-1',
      bottom: 'top-full mt-1',
      left: 'right-full mr-1',
    },
    visible: {
      true: 'opacity-100 scale-100',
      false: 'opacity-0 scale-95',
    },
  },
  defaultVariants: {
    color: 'default',
    placement: 'top',
    visible: false,
  },
})

export const tooltipArrow = tv({
  base: 'absolute w-2 h-2 rotate-45',
  variants: {
    color: {
      default: 'bg-gray-800 dark:bg-gray-700',
      primary: 'bg-blue-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      danger: 'bg-red-600',
    },
    placement: {
      top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
      right: 'left-[-4px] top-1/2 -translate-y-1/2',
      bottom: 'top-[-4px] left-1/2 -translate-x-1/2',
      left: 'right-[-4px] top-1/2 -translate-y-1/2',
    },
  },
  defaultVariants: {
    color: 'default',
    placement: 'top',
  },
})
