import { tv } from 'tailwind-variants'

export const dividerVariants = tv({
  base: ['vk-divider', 'box-border', 'flex', 'items-center', 'transition-all'],
  variants: {
    type: {
      horizontal: ['w-full', 'flex-row'],
      vertical: ['h-full', 'flex-col', 'min-h-4', 'self-stretch'],
    },
    align: {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    },
    lineStyle: {
      solid: 'border-solid',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
    hasContent: {
      true: 'gap-2',
      false: '',
    },
  },
  defaultVariants: {
    type: 'horizontal',
    align: 'center',
    lineStyle: 'solid',
    hasContent: false,
  },
})

export const dividerLineVariants = tv({
  base: ['vk-divider-line', 'flex-grow', 'transition-all'],
  variants: {
    type: {
      horizontal: ['border-t', 'w-full'],
      vertical: ['border-l', 'h-full'],
    },
  },
  defaultVariants: {
    type: 'horizontal',
  },
})

export const dividerContentVariants = tv({
  base: ['vk-divider-content', 'whitespace-nowrap', 'px-2'],
  variants: {
    type: {
      horizontal: 'text-center',
      vertical: 'py-2',
    },
  },
  defaultVariants: {
    type: 'horizontal',
  },
})
