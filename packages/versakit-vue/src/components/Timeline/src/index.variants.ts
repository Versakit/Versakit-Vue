import { tv } from 'tailwind-variants'

export const timelineStyle = tv({
  base: 'relative',
  variants: {
    align: {
      left: 'ml-6',
      right: 'mr-6',
      alternate: '',
    },
  },
  defaultVariants: {
    align: 'left',
  },
})

export const timelineItemStyle = tv({
  base: 'relative mb-6 last:mb-0',
  variants: {
    position: {
      left: '',
      right: '',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})

export const timelineDotStyle = tv({
  base: 'absolute z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500',
  variants: {
    position: {
      left: '-left-3',
      right: '-right-3',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})

export const timelineContentStyle = tv({
  base: 'p-4 bg-white rounded-md border border-gray-200 shadow-sm',
  variants: {
    position: {
      left: 'ml-6',
      right: 'mr-6 text-right',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})

export const timelineOppositeStyle = tv({
  base: 'mb-2 text-sm text-gray-500',
  variants: {
    position: {
      left: 'ml-6',
      right: 'mr-6 text-right',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})

export const timelineLineStyle = tv({
  base: 'absolute top-6 bottom-0 w-0.5 bg-gray-200',
  variants: {
    position: {
      left: 'left-0',
      right: 'right-0',
    },
  },
  defaultVariants: {
    position: 'left',
  },
})
