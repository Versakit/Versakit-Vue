import { tv } from 'tailwind-variants'

export const datePickerStyle = tv({
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

export const datePickerInputWrapperStyle = tv({
  base: 'relative flex items-center',
})

export const datePickerInputStyle = tv({
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const datePickerClearButtonStyle = tv({
  base: 'absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer',
})

export const datePickerDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 p-4',
})
