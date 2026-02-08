import { tv } from 'tailwind-variants'

export const carouselStyle = tv({
  base: 'relative w-full overflow-hidden',
  variants: {
    variant: {
      default: '',
      dots: '',
      thumbnails: '',
    },
    size: {
      sm: '',
      md: '',
      lg: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
