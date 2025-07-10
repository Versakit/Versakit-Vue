import { tv } from 'tailwind-variants'

/**
 * Splitter组件样式
 */
export const splitterStyle = tv({
  base: 'flex relative',
  variants: {
    layout: {
      horizontal: 'flex-row',
      vertical: 'flex-col h-full',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

/**
 * Splitter分隔条样式
 */
export const splitterGutterStyle = tv({
  base: 'flex items-center justify-center shrink-0 transition-colors duration-200 touch-none',
  variants: {
    layout: {
      horizontal: 'cursor-col-resize',
      vertical: 'cursor-row-resize',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

/**
 * Splitter分隔条手柄样式
 */
export const splitterGutterHandlerStyle = tv({
  base: 'bg-gray-300 rounded transition-transform duration-200 dark:bg-gray-600',
  variants: {
    layout: {
      horizontal: 'h-8 w-1',
      vertical: 'w-8 h-1',
    },
  },
  defaultVariants: {
    layout: 'horizontal',
  },
})

/**
 * Splitter折叠按钮样式
 */
export const splitterCollapseButtonStyle = tv({
  base: 'absolute bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer z-10 text-gray-500 hover:text-gray-700 transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
  variants: {
    layout: {
      horizontal: 'w-5 h-5 top-2',
      vertical: 'h-5 w-5 left-2',
    },
    position: {
      before: '',
      after: '',
    },
  },
  compoundVariants: [
    {
      layout: 'horizontal',
      position: 'before',
      class: 'left-[-10px]',
    },
    {
      layout: 'horizontal',
      position: 'after',
      class: 'right-[-10px]',
    },
    {
      layout: 'vertical',
      position: 'before',
      class: 'top-[-10px]',
    },
    {
      layout: 'vertical',
      position: 'after',
      class: 'bottom-[-10px]',
    },
  ],
  defaultVariants: {
    layout: 'horizontal',
    position: 'before',
  },
})

/**
 * SplitterPane组件样式
 */
export const splitterPaneStyle = tv({
  base: 'overflow-hidden transition-all duration-300 ease-in-out',
  variants: {
    collapsed: {
      true: 'opacity-70',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})
