import { tv } from 'tailwind-variants'

export const splitterStyle = tv({
  slots: {
    root: 'relative w-full h-full flex',
    wrapper: 'flex flex-grow',
    panel: 'flex flex-grow overflow-auto',
    gutter: [
      'flex items-center justify-center',
      'bg-gray-100 dark:bg-gray-700',
      'transition-colors duration-200',
      'hover:bg-gray-200 dark:hover:bg-gray-600',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus-visible:z-10',
    ],
    gutterHandle: [
      'flex items-center justify-center',
      'w-full h-full',
      'cursor-col-resize',
    ],
    gutterIcon: ['flex-shrink-0', 'text-gray-400 dark:text-gray-500'],
  },
  variants: {
    direction: {
      horizontal: {
        root: 'flex-row',
        gutter: 'w-1 cursor-col-resize',
      },
      vertical: {
        root: 'flex-col',
        gutter: 'h-1 cursor-row-resize',
      },
    },
    size: {
      sm: {
        gutter: 'horizontal:w-0.5 vertical:h-0.5',
      },
      md: {
        gutter: 'horizontal:w-1 vertical:h-1',
      },
      lg: {
        gutter: 'horizontal:w-2 vertical:h-2',
      },
    },
    solid: {
      true: {
        gutter:
          'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500',
      },
    },
    dotted: {
      true: {
        gutter:
          'border-dotted border-gray-300 dark:border-gray-600 bg-transparent',
      },
    },
    dashed: {
      true: {
        gutter:
          'border-dashed border-gray-300 dark:border-gray-600 bg-transparent',
      },
    },
    disabled: {
      true: {
        gutter: 'cursor-default opacity-50',
        gutterHandle: 'cursor-default',
      },
    },
  },
  compoundVariants: [
    {
      direction: 'horizontal',
      dotted: true,
      class: {
        gutter: 'border-l border-r',
      },
    },
    {
      direction: 'vertical',
      dotted: true,
      class: {
        gutter: 'border-t border-b',
      },
    },
    {
      direction: 'horizontal',
      dashed: true,
      class: {
        gutter: 'border-l border-r',
      },
    },
    {
      direction: 'vertical',
      dashed: true,
      class: {
        gutter: 'border-t border-b',
      },
    },
  ],
  defaultVariants: {
    direction: 'horizontal',
    size: 'md',
    solid: false,
    dotted: false,
    dashed: false,
    disabled: false,
  },
})
