import { tv } from 'tailwind-variants'

export const carouselStyle = tv({
  base: 'relative w-full overflow-hidden',
  variants: {
    direction: {
      horizontal: 'h-full',
      vertical: 'h-96',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})

export const wrapperStyle = tv({
  base: 'relative flex transition-transform duration-500 ease-in-out h-full',
  variants: {
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    effect: {
      slide: '',
      fade: 'transition-opacity',
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    effect: 'slide',
  },
})

export const slideStyle = tv({
  base: 'flex-shrink-0 w-full h-full',
  variants: {
    effect: {
      slide: '',
      fade: 'absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out',
    },
    active: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      effect: 'fade',
      active: true,
      class: 'opacity-100 z-10',
    },
  ],
  defaultVariants: {
    effect: 'slide',
    active: false,
  },
})

export const controlsStyle = tv({
  base: 'absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4',
})

export const buttonStyle = tv({
  base: 'flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 z-10',
})

export const indicatorsStyle = tv({
  base: 'absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10',
})

export const indicatorStyle = tv({
  base: 'w-2 h-2 rounded-full bg-white/50 dark:bg-gray-500/50 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  variants: {
    active: {
      true: 'bg-white dark:bg-gray-200 w-4',
      false: '',
    },
  },
  defaultVariants: {
    active: false,
  },
})
