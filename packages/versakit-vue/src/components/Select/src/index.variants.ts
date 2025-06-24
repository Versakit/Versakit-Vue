import { tv } from 'tailwind-variants'

export const selectStyle = tv({
  slots: {
    root: 'relative w-full',
    trigger: [
      'flex items-center justify-between w-full px-3 py-2 border rounded-md',
      'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
      'transition-colors duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
      'hover:border-blue-400 dark:hover:border-blue-500',
    ],
    value: 'flex-1 flex items-center flex-wrap gap-1 min-w-0',
    placeholder: 'text-gray-400 dark:text-gray-500',
    dropdown: [
      'absolute z-50 w-full mt-1 py-1 overflow-auto',
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
      'rounded-md shadow-lg',
    ],
    option: [
      'flex items-center justify-between px-3 py-2 cursor-pointer',
      'text-gray-800 dark:text-gray-200',
      'hover:bg-gray-100 dark:hover:bg-gray-700',
      'transition-colors duration-200',
    ],
    optionSelected:
      'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    optionActive: 'bg-gray-100 dark:bg-gray-700',
    optionDisabled:
      'opacity-50 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent',
    icon: 'flex items-center text-gray-400',
    clearIcon: 'flex items-center mr-1 text-gray-400 hover:text-gray-600',
    checkIcon: 'w-4 h-4 text-blue-500',
    search: [
      'w-full px-3 py-2 border-b border-gray-200 dark:border-gray-700',
      'bg-transparent text-gray-800 dark:text-gray-200',
      'focus:outline-none',
    ],
    tag: [
      'inline-flex items-center px-2 py-1 mr-1 mb-1 text-sm',
      'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300',
      'rounded-md',
    ],
    tagRemove: ['ml-1 text-blue-500 hover:text-blue-700', 'focus:outline-none'],
    noMatch: 'px-3 py-2 text-center text-gray-500',
  },
  variants: {
    size: {
      small: {
        trigger: 'h-8 text-xs',
        option: 'py-1 text-xs',
        tag: 'text-xs py-0.5',
      },
      default: {
        trigger: 'h-10 text-sm',
        option: 'py-2 text-sm',
      },
      large: {
        trigger: 'h-12',
        option: 'py-2.5',
      },
    },
    status: {
      default: {},
      success: {
        trigger: 'border-green-500 focus:ring-green-500',
      },
      warning: {
        trigger: 'border-yellow-500 focus:ring-yellow-500',
      },
      error: {
        trigger: 'border-red-500 focus:ring-red-500',
      },
    },
    disabled: {
      true: {
        root: 'opacity-60',
        trigger:
          'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-not-allowed',
      },
    },
    multiple: {
      true: {
        value: 'flex-wrap',
      },
    },
    open: {
      true: {
        trigger: 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50',
      },
    },
  },
  defaultVariants: {
    size: 'default',
    status: 'default',
    disabled: false,
    multiple: false,
    open: false,
  },
})

export const selectItemStyles = tv({
  slots: {
    base: [
      'flex w-full items-center gap-2 p-2 data-[hover=true]:bg-default-100',
      'cursor-pointer rounded-md outline-none',
      'data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-focus data-[focus-visible=true]:ring-offset-2',
      'data-[pressed=true]:opacity-70',
      'data-[selected=true]:bg-primary-500/20',
      'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-disabled',
    ],
    wrapper: 'flex w-full flex-col',
    label: 'text-sm font-normal truncate',
    description: 'text-xs text-foreground-400 truncate',
    selectedIcon: 'text-primary',
  },
})
