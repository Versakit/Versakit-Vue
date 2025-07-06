import { tv } from 'tailwind-variants'

export const skeletonStyle = tv({
  base: 'relative overflow-hidden bg-gray-200 dark:bg-gray-700',
  variants: {
    animation: {
      pulse: 'animate-pulse',
      wave: 'skeleton-wave',
      none: '',
    },
    rounded: {
      true: 'rounded-md',
      false: '',
    },
  },
  defaultVariants: {
    animation: 'pulse',
    rounded: false,
  },
})

export const skeletonTextStyle = tv({
  base: 'w-full',
  variants: {
    rounded: {
      true: 'rounded-md',
      false: '',
    },
  },
  defaultVariants: {
    rounded: false,
  },
})

export const skeletonTextLineStyle = tv({
  base: 'bg-gray-200 dark:bg-gray-700 h-4 mb-2 last:mb-0',
  variants: {
    animation: {
      pulse: 'animate-pulse',
      wave: 'skeleton-wave',
      none: '',
    },
    rounded: {
      true: 'rounded-md',
      false: '',
    },
  },
  defaultVariants: {
    animation: 'pulse',
    rounded: false,
  },
})

export const skeletonAvatarStyle = tv({
  base: 'bg-gray-200 dark:bg-gray-700 inline-block',
  variants: {
    size: {
      xs: 'h-6 w-6',
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    },
    circle: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    animation: {
      pulse: 'animate-pulse',
      wave: 'skeleton-wave',
      none: '',
    },
  },
  defaultVariants: {
    size: 'md',
    circle: true,
    animation: 'pulse',
  },
})
