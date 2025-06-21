import { tv } from 'tailwind-variants'

export const dividerStyle = tv({
  base: 'flex',
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
    withLabel: {
      true: 'items-center',
      false: '',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      class: 'border-t border-gray-200 dark:border-gray-700',
    },
    {
      orientation: 'vertical',
      class: 'border-l border-gray-200 dark:border-gray-700',
    },
    {
      orientation: 'horizontal',
      withLabel: true,
      class: 'border-0 items-center',
    },
    {
      orientation: 'horizontal',
      withLabel: true,
      labelPosition: 'start',
      class:
        'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-4',
    },
    {
      orientation: 'horizontal',
      withLabel: true,
      labelPosition: 'center',
      class:
        'before:content-[""] before:border-t before:border-inherit before:mr-2 before:w-full after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-full',
    },
    {
      orientation: 'horizontal',
      withLabel: true,
      labelPosition: 'end',
      class:
        'after:content-[""] after:border-t after:border-inherit after:ml-2 after:w-4',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'solid',
    size: 'medium',
    labelPosition: 'center',
    withLabel: false,
  },
})
