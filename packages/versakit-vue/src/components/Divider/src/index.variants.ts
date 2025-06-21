import { tv } from 'tailwind-variants'

export const dividerStyle = tv({
  base: 'flex items-center',
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full flex-col',
    },
    variant: {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
    size: {
      thin: 'border-[0.5px]',
      medium: 'border-[1px]',
      thick: 'border-[2px]',
    },
    labelPosition: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      class: 'border-t',
    },
    {
      orientation: 'vertical',
      class: 'border-l',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'medium',
    labelPosition: 'center',
  },
})
