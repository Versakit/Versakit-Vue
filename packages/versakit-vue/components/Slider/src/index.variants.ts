import { tv } from 'tailwind-variants'

export const sliderContainer = tv({
  base: 'relative',
  variants: {
    orientation: {
      horizontal: 'h-12 w-full',
      vertical: 'h-64 w-12',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    disabled: false,
  },
})

export const sliderTrack = tv({
  base: 'rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer',
  variants: {
    orientation: {
      horizontal: 'h-2 w-full absolute top-1/2 -translate-y-1/2',
      vertical: 'w-2 h-full absolute left-1/2 -translate-x-1/2',
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    disabled: false,
  },
})

export const sliderFill = tv({
  base: 'absolute rounded-full bg-blue-500 dark:bg-blue-600',
  variants: {
    orientation: {
      horizontal: 'h-full top-0 left-0',
      vertical: 'w-full bottom-0 left-0',
    },
    disabled: {
      true: 'bg-gray-400 dark:bg-gray-500',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    disabled: false,
  },
})

export const sliderThumb = tv({
  base: 'absolute bg-white dark:bg-gray-200 rounded-full shadow-md border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800',
  variants: {
    orientation: {
      horizontal: 'h-4 w-4 top-1/2 -translate-x-1/2 -translate-y-1/2',
      vertical: 'h-4 w-4 left-1/2 -translate-x-1/2 translate-y-1/2',
    },
    disabled: {
      true: 'cursor-not-allowed',
      false: 'cursor-grab active:cursor-grabbing',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    disabled: false,
  },
})

export const sliderTooltip = tv({
  base: 'absolute bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 text-xs rounded pointer-events-none transform -translate-x-1/2 whitespace-nowrap',
  variants: {
    orientation: {
      horizontal: 'bottom-full mb-2',
      vertical: 'left-full ml-2 -translate-y-1/2',
    },
    visible: {
      true: 'opacity-100',
      false: 'opacity-0',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    visible: false,
  },
})

export const sliderMarks = tv({
  base: 'absolute',
  variants: {
    orientation: {
      horizontal: 'top-1/2 -translate-y-1/2 h-2',
      vertical: 'left-1/2 -translate-x-1/2 w-2',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export const sliderMark = tv({
  base: 'absolute bg-gray-400 dark:bg-gray-500 rounded-full',
  variants: {
    orientation: {
      horizontal: 'h-2 w-1 -translate-x-1/2',
      vertical: 'w-2 h-1 -translate-y-1/2',
    },
    active: {
      true: 'bg-blue-500 dark:bg-blue-600',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    active: false,
  },
})

export const sliderMarkLabel = tv({
  base: 'absolute text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap',
  variants: {
    orientation: {
      horizontal: 'top-full mt-1 -translate-x-1/2',
      vertical: 'left-full ml-2 -translate-y-1/2',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
