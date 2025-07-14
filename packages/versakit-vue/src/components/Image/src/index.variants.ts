import { tv } from 'tailwind-variants'

export const imageStyle = tv({
  base: 'relative overflow-hidden',
  variants: {
    fit: {
      fill: 'object-fill',
      contain: 'object-contain',
      cover: 'object-cover',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full',
    },
    isZoomable: {
      true: 'cursor-zoom-in',
      false: '',
    },
    isZoomed: {
      true: 'cursor-zoom-out',
      false: '',
    },
  },
  defaultVariants: {
    fit: 'cover',
    radius: 'md',
    isZoomable: false,
    isZoomed: false,
  },
})

export const imageSkeletonStyle = tv({
  base: 'absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse',
})

export const imageOverlayStyle = tv({
  base: 'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity',
  variants: {
    visible: {
      true: 'opacity-100',
      false: 'opacity-0 pointer-events-none',
    },
  },
  defaultVariants: {
    visible: false,
  },
})
