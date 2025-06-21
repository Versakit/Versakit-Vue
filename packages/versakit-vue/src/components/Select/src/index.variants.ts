import { tv } from 'tailwind-variants'

export const selectStyle = tv({
  slots: {
    root: 'relative inline-flex w-full',
    trigger:
      'relative flex w-full cursor-pointer rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 dark:border-gray-600 dark:bg-gray-800',
    value: 'block flex-1 truncate text-left outline-none dark:text-white',
    placeholder: 'text-gray-500 dark:text-gray-400',
    icon: 'ml-2 flex flex-shrink-0 items-center self-center text-gray-500 dark:text-gray-400',
    clearIcon:
      'mr-1 flex cursor-pointer items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
    dropdown:
      'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-gray-700',
    search:
      'sticky top-0 z-10 block w-full border-0 border-b border-gray-300 bg-white px-3 py-1.5 dark:border-gray-600 dark:bg-gray-800',
    option:
      'relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-gray-100 dark:hover:bg-gray-700',
    optionSelected: 'font-medium text-blue-600 dark:text-blue-300',
    optionActive: 'bg-gray-100 dark:bg-gray-700',
    optionDisabled: 'cursor-not-allowed opacity-50',
    checkIcon:
      'absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600 dark:text-blue-300',
    noMatch: 'px-3 py-2 text-center text-sm text-gray-500 dark:text-gray-400',
    tag: 'mr-1 inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    tagRemove:
      'ml-1 cursor-pointer text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-100',
  },
  variants: {
    size: {
      small: {
        trigger: 'h-8 text-sm',
        dropdown: 'text-sm',
        option: 'py-1.5',
        tag: 'text-xs',
      },
      default: {
        trigger: 'h-10',
      },
      large: {
        trigger: 'h-12 text-lg',
        dropdown: 'text-lg',
        option: 'py-2.5',
      },
    },
    status: {
      error: {
        trigger:
          '!border-red-500 !ring-red-500/30 focus-within:!ring-red-500/30',
      },
      warning: {
        trigger:
          '!border-yellow-500 !ring-yellow-500/30 focus-within:!ring-yellow-500/30',
      },
      success: {
        trigger:
          '!border-green-500 !ring-green-500/30 focus-within:!ring-green-500/30',
      },
    },
    disabled: {
      true: {
        trigger: 'cursor-not-allowed bg-gray-100 opacity-50 dark:bg-gray-700',
      },
    },
    multiple: {
      true: {
        value: 'flex flex-wrap gap-1',
      },
    },
    open: {
      true: {
        trigger:
          'border-blue-500 ring-1 ring-blue-500 dark:border-blue-400 dark:ring-blue-400',
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
})
