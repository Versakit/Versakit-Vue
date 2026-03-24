import { tv } from 'tailwind-variants'

export const timePickerStyle = tv({
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

export const timePickerInputWrapperStyle = tv({
  base: 'relative flex items-center',
})

export const timePickerInputStyle = tv({
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const timePickerClearButtonStyle = tv({
  base: 'absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
})

export const timePickerDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800',
})

export const timePickerSelectorStyle = tv({
  base: 'flex space-x-2 h-52 overflow-hidden',
})

export const timePickerColumnStyle = tv({
  base: 'flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700',
})

export const timePickerItemStyle = tv({
  base: 'cursor-pointer rounded-md px-3 py-2 text-center text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',
  variants: {
    selected: {
      true: 'bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    },
  },
})
