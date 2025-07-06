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
  base: 'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    error: {
      true: 'border-red-500 focus:ring-red-500',
    },
  },
})

export const timeSelectClearButtonStyle = tv({
  base: 'absolute right-3 text-gray-400 hover:text-gray-500 cursor-pointer',
})

export const timeSelectDropdownStyle = tv({
  base: 'absolute z-50 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200',
})

export const timeSelectOptionsListStyle = tv({
  base: 'max-h-60 overflow-auto py-1',
})

export const timeSelectOptionStyle = tv({
  base: 'px-3 py-2 text-sm cursor-pointer hover:bg-gray-100',
  variants: {
    selected: {
      true: 'bg-blue-100 text-blue-700 font-medium',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed hover:bg-transparent',
    },
  },
})
