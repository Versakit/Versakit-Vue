import { tv } from 'tailwind-variants'

export const dateTimePickerStyle = tv({
  base: 'relative w-full',
  variants: {
    unstyled: {
      false: '',
    },
  },
  defaultVariants: {
    unstyled: false,
  },
})

export const dateTimePickerInputWrapperStyle = tv({
  base: 'relative flex items-center',
})

export const dateTimePickerInputStyle = tv({
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const dateTimePickerClearButtonStyle = tv({
  base: 'absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
})

export const dateTimePickerDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800',
})

export const dateTimePickerTabsStyle = tv({
  base: 'mb-4 flex border-b border-gray-200 dark:border-gray-700',
})

export const dateTimePickerTabStyle = tv({
  base: 'cursor-pointer px-4 py-2 text-sm font-medium',
  variants: {
    active: {
      true: 'border-b-2 border-blue-500 text-blue-700 dark:border-blue-400 dark:text-blue-300',
      false:
        'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const dateTimePickerTabContentStyle = tv({
  base: 'mt-2',
})
