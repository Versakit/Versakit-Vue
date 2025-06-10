import { tv } from 'tailwind-variants'

export const tooltip = tv({
  slots: {
    root: 'relative inline-block',
    content:
      'absolute z-50 rounded-md px-3 py-1.5 text-sm font-medium shadow-md box-border transition-all duration-200 ease-in-out pointer-events-none will-change-transform data-[state=closed]:opacity-0 data-[state=closed]:scale-95 data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left data-[interactive=true]:pointer-events-auto',
    arrow: 'absolute z-50 rotate-45 w-2 h-2 transition-all duration-200',
  },
  variants: {
    variant: {
      primary: {
        content:
          'bg-blue-500 text-white border border-blue-600 shadow-blue-500/20',
        arrow: 'bg-blue-500 border border-blue-600',
      },
      success: {
        content:
          'bg-green-500 text-white border border-green-600 shadow-green-500/20',
        arrow: 'bg-green-500 border border-green-600',
      },
      warning: {
        content:
          'bg-yellow-500 text-white border border-yellow-600 shadow-yellow-500/20',
        arrow: 'bg-yellow-500 border border-yellow-600',
      },
      error: {
        content:
          'bg-red-500 text-white border border-red-600 shadow-red-500/20',
        arrow: 'bg-red-500 border border-red-600',
      },
      info: {
        content:
          'bg-cyan-500 text-white border border-cyan-600 shadow-cyan-500/20',
        arrow: 'bg-cyan-500 border border-cyan-600',
      },
      default: {
        content:
          'bg-gray-700 text-white border border-gray-800 shadow-gray-700/20',
        arrow: 'bg-gray-700 border border-gray-800',
      },
    },
    theme: {
      light: {
        content: 'bg-white text-gray-900 border border-gray-200 shadow-lg',
        arrow: 'bg-white border border-gray-200',
      },
      dark: {
        content:
          'bg-gray-900 text-gray-100 border border-gray-700 shadow-gray-900/30',
        arrow: 'bg-gray-900 border border-gray-700',
      },
      auto: {
        content:
          'bg-white text-gray-900 border border-gray-200 shadow-lg dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:shadow-gray-900/30',
        arrow:
          'bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700',
      },
    },
    size: {
      xs: {
        content: 'text-xs py-1 px-2 max-w-[200px]',
        arrow: 'w-1.5 h-1.5',
      },
      sm: {
        content: 'text-xs py-1 px-2.5 max-w-[250px]',
        arrow: 'w-1.5 h-1.5',
      },
      md: {
        content: 'text-sm py-1.5 px-3 max-w-[300px]',
        arrow: 'w-2 h-2',
      },
      lg: {
        content: 'text-base py-2 px-4 max-w-[350px]',
        arrow: 'w-2.5 h-2.5',
      },
      xl: {
        content: 'text-lg py-2.5 px-5 max-w-[400px]',
        arrow: 'w-3 h-3',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed',
        content: 'opacity-50',
      },
    },
    trigger: {
      click: {
        content: 'ring-2 ring-offset-2 ring-opacity-50',
      },
      hover: {},
      focus: {},
      manual: {},
    },
  },
  compoundVariants: [
    {
      theme: ['light', 'auto'],
      variant: undefined,
      class: {
        content: 'drop-shadow-sm',
      },
    },
    {
      trigger: 'click',
      variant: 'primary',
      class: {
        content: 'ring-blue-300',
      },
    },
    {
      trigger: 'click',
      variant: 'success',
      class: {
        content: 'ring-green-300',
      },
    },
    {
      trigger: 'click',
      variant: 'warning',
      class: {
        content: 'ring-yellow-300',
      },
    },
    {
      trigger: 'click',
      variant: 'error',
      class: {
        content: 'ring-red-300',
      },
    },
    {
      trigger: 'click',
      variant: 'info',
      class: {
        content: 'ring-cyan-300',
      },
    },
    {
      trigger: 'click',
      variant: 'default',
      class: {
        content: 'ring-gray-300',
      },
    },
  ],
  defaultVariants: {
    theme: 'auto',
    size: 'md',
    variant: 'primary',
    trigger: 'hover',
  },
})
