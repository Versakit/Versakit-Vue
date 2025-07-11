import { tv } from 'tailwind-variants'

export const carouselStyle = tv({
  base: 'relative w-full',
  variants: {
    variant: {
      default: '',
      dots: '',
      thumbnails: '',
    },
    size: {
      sm: 'max-h-48',
      md: 'max-h-64',
      lg: 'max-h-96',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none cursor-not-allowed',
      false: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    disabled: false,
  },
})

export const carouselContainerStyle = tv({
  base: 'flex will-change-transform',
})

export const carouselItemStyle = tv({
  base: 'flex-none w-full h-full relative',
})

export const carouselNavigationStyle = tv({
  base: 'absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4 z-10',
})

export const carouselButtonStyle = tv({
  base: 'flex items-center justify-center w-8 h-8 rounded-full bg-white/80 text-gray-800 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/80 dark:disabled:hover:bg-gray-800/80 transition-opacity duration-200',
  variants: {
    direction: {
      prev: 'left-2',
      next: 'right-2',
    },
  },
})

export const carouselIndicatorsStyle = tv({
  base: 'absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10',
})

export const carouselIndicatorStyle = tv({
  base: 'w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-200 ease-in-out dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500',
  variants: {
    active: {
      true: 'bg-white scale-125 dark:bg-gray-300',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
  },
})
