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
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const timePickerClearButtonStyle = tv({
  base: 'absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer',
})

export const timePickerDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4',
})

export const timePickerSelectorStyle = tv({
  base: 'flex space-x-2 h-52 overflow-hidden',
})

export const timePickerColumnStyle = tv({
  base: 'flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100',
})

export const timePickerItemStyle = tv({
  base: 'py-2 px-3 text-center cursor-pointer hover:bg-gray-100 rounded-md',
  variants: {
    selected: {
      true: 'bg-blue-100 text-blue-700 font-medium',
    },
  },
})
