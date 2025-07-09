import { tv } from 'tailwind-variants'

export const swapStyle = tv({
  base: 'inline-grid grid-cols-1 grid-rows-1 place-items-center',
  variants: {
    variant: {
      fade: '',
      flip: '',
      rotate: '',
      slide: '',
    },
    size: {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    },
  },
  defaultVariants: {
    variant: 'fade',
    size: 'md',
  },
})

export const swapOnStyle = tv({
  base: 'col-start-1 row-start-1 transition-all duration-300',
  variants: {
    active: {
      true: 'opacity-100 transform-none',
      false: 'opacity-0 pointer-events-none',
    },
    variant: {
      fade: 'transition-opacity',
      flip: 'backface-visibility-hidden',
      rotate: 'transition-transform',
      slide: 'transition-transform',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  compoundVariants: [
    {
      active: false,
      variant: 'flip',
      class: 'rotate-y-180',
    },
    {
      active: false,
      variant: 'rotate',
      class: 'rotate-180',
    },
    {
      active: false,
      variant: 'slide',
      class: '-translate-y-full',
    },
  ],
})

export const swapOffStyle = tv({
  base: 'col-start-1 row-start-1 transition-all duration-300',
  variants: {
    active: {
      true: 'opacity-0 pointer-events-none',
      false: 'opacity-100 transform-none',
    },
    variant: {
      fade: 'transition-opacity',
      flip: 'backface-visibility-hidden',
      rotate: 'transition-transform',
      slide: 'transition-transform',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
      false: '',
    },
  },
  compoundVariants: [
    {
      active: true,
      variant: 'flip',
      class: 'rotate-y-180',
    },
    {
      active: true,
      variant: 'rotate',
      class: 'rotate-180',
    },
    {
      active: true,
      variant: 'slide',
      class: 'translate-y-full',
    },
  ],
})
