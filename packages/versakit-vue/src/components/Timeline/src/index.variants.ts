import { tv } from 'tailwind-variants'

export const timelineStyle = tv({
  base: 'relative',
  variants: {
    orientation: {
      vertical: 'flex flex-col',
      horizontal: 'flex flex-row',
    },
    reverse: {
      true: 'flex-col-reverse',
      false: '',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
    reverse: false,
  },
})

export const timelineContainerStyle = tv({
  base: 'relative flex-1',
})

export const timelineItemStyle = tv({
  base: 'relative flex',
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    align: {
      left: 'items-start',
      right: 'items-end',
      alternate: '',
    },
    position: {
      odd: '',
      even: '',
    },
  },
  compoundVariants: [
    {
      align: 'alternate',
      position: 'odd',
      orientation: 'vertical',
      class: 'items-start',
    },
    {
      align: 'alternate',
      position: 'even',
      orientation: 'vertical',
      class: 'items-end',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    align: 'left',
  },
})

export const timelineItemDotStyle = tv({
  base: 'relative flex items-center justify-center z-10',
  variants: {
    orientation: {
      vertical: 'w-8 h-8',
      horizontal: 'w-8 h-8',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

export const timelineItemContentStyle = tv({
  base: 'p-4',
  variants: {
    orientation: {
      vertical: 'mt-2',
      horizontal: 'ml-2',
    },
    align: {
      left: 'ml-4',
      right: 'mr-4 order-first',
      alternate: '',
    },
    position: {
      odd: '',
      even: '',
    },
  },
  compoundVariants: [
    {
      align: 'alternate',
      position: 'odd',
      orientation: 'vertical',
      class: 'ml-4',
    },
    {
      align: 'alternate',
      position: 'even',
      orientation: 'vertical',
      class: 'mr-4 order-first',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    align: 'left',
  },
})

export const timelineItemOppositeStyle = tv({
  base: 'p-4',
  variants: {
    orientation: {
      vertical: '',
      horizontal: '',
    },
    align: {
      left: 'mr-4 text-right',
      right: 'ml-4',
      alternate: '',
    },
    position: {
      odd: '',
      even: '',
    },
  },
  compoundVariants: [
    {
      align: 'alternate',
      position: 'odd',
      orientation: 'vertical',
      class: 'mr-4 text-right',
    },
    {
      align: 'alternate',
      position: 'even',
      orientation: 'vertical',
      class: 'ml-4',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    align: 'left',
  },
})

export const timelineItemConnectorStyle = tv({
  base: 'absolute bg-gray-300 dark:bg-gray-600',
  variants: {
    orientation: {
      vertical: 'w-0.5 top-8 bottom-0 left-4',
      horizontal: 'h-0.5 left-8 right-0 top-4',
    },
    align: {
      left: '',
      right: 'left-auto right-4',
      alternate: '',
    },
    position: {
      odd: '',
      even: '',
    },
    isLast: {
      true: 'hidden',
      false: '',
    },
  },
  compoundVariants: [
    {
      align: 'alternate',
      position: 'odd',
      orientation: 'vertical',
      class: 'left-4',
    },
    {
      align: 'alternate',
      position: 'even',
      orientation: 'vertical',
      class: 'left-auto right-4',
    },
  ],
  defaultVariants: {
    orientation: 'vertical',
    align: 'left',
    isLast: false,
  },
})
