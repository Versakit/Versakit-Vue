import { tv } from 'tailwind-variants'

export const timeSelectStyle = tv({
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

export const timeSelectInputWrapperStyle = tv({
  base: 'relative flex items-center',
})

export const timeSelectInputStyle = tv({
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const timeSelectClearButtonStyle = tv({
  base: 'absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-300',
})

export const timeSelectDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800',
})

export const timeSelectOptionsListStyle = tv({
  base: 'max-h-60 overflow-auto py-1',
})

export const timeSelectOptionStyle = tv({
  base: 'cursor-pointer px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700',
  variants: {
    selected: {
      true: 'bg-blue-100 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:bg-transparent dark:hover:bg-transparent',
    },
  },
})
