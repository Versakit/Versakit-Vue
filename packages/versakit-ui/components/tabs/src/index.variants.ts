import { tv } from 'tailwind-variants'

export const tabs = tv({
  base: 'w-full',
  variants: {
    placement: {
      top: 'flex flex-col',
      bottom: 'flex flex-col-reverse',
      left: 'flex flex-row',
      right: 'flex flex-row-reverse',
    },
  },
  defaultVariants: {
    placement: 'top',
  },
})

export const tabList = tv({
  base: 'flex',
  variants: {
    placement: {
      top: 'flex-row border-b border-gray-200 dark:border-gray-700',
      bottom: 'flex-row border-t border-gray-200 dark:border-gray-700',
      left: 'flex-col border-r border-gray-200 dark:border-gray-700',
      right: 'flex-col border-l border-gray-200 dark:border-gray-700',
    },
    variant: {
      line: '',
      pill: 'gap-2 p-1',
      boxed: 'gap-1',
      soft: 'gap-1 p-1',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  compoundVariants: [
    {
      variant: 'pill',
      class: 'bg-gray-100 dark:bg-gray-800 rounded-lg',
    },
    {
      variant: 'boxed',
      placement: ['top', 'bottom'],
      class: 'border-b-0 border-t-0',
    },
  ],
  defaultVariants: {
    placement: 'top',
    variant: 'line',
    size: 'md',
  },
})

export const tab = tv({
  base: 'flex items-center justify-center outline-none transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      line: 'px-4 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
      pill: 'px-4 py-2 rounded-md',
      boxed: 'px-4 py-2 border border-transparent',
      soft: 'px-4 py-2 rounded-md',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg font-medium',
    },
    active: {
      true: '',
    },
    placement: {
      top: '',
      bottom: '',
      left: '',
      right: '',
    },
    disabled: {
      true: 'pointer-events-none',
    },
  },
  compoundVariants: [
    // Line variant active states
    {
      variant: 'line',
      active: true,
      placement: 'top',
      class: 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400',
    },
    {
      variant: 'line',
      active: true,
      placement: 'bottom',
      class: 'border-t-2 border-blue-500 text-blue-600 dark:text-blue-400',
    },
    {
      variant: 'line',
      active: true,
      placement: 'left',
      class: 'border-r-2 border-blue-500 text-blue-600 dark:text-blue-400',
    },
    {
      variant: 'line',
      active: true,
      placement: 'right',
      class: 'border-l-2 border-blue-500 text-blue-600 dark:text-blue-400',
    },

    // Pill variant active state
    {
      variant: 'pill',
      active: true,
      class:
        'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm',
    },

    // Boxed variant active states
    {
      variant: 'boxed',
      active: true,
      placement: 'top',
      class:
        'border border-gray-200 dark:border-gray-700 border-b-0 rounded-t-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800',
    },
    {
      variant: 'boxed',
      active: true,
      placement: 'bottom',
      class:
        'border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800',
    },
    {
      variant: 'boxed',
      active: true,
      placement: 'left',
      class:
        'border border-gray-200 dark:border-gray-700 border-r-0 rounded-l-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800',
    },
    {
      variant: 'boxed',
      active: true,
      placement: 'right',
      class:
        'border border-gray-200 dark:border-gray-700 border-l-0 rounded-r-md text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800',
    },

    // Soft variant active state
    {
      variant: 'soft',
      active: true,
      class: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
  ],
  defaultVariants: {
    variant: 'line',
    size: 'md',
    placement: 'top',
  },
})

export const tabPanels = tv({
  base: 'w-full',
  variants: {
    placement: {
      top: 'mt-2',
      bottom: 'mb-2',
      left: 'ml-4',
      right: 'mr-4',
    },
  },
  defaultVariants: {
    placement: 'top',
  },
})

export const tabPanel = tv({
  base: 'outline-none',
  variants: {
    active: {
      true: 'block',
      false: 'hidden',
    },
  },
  defaultVariants: {
    active: false,
  },
})
