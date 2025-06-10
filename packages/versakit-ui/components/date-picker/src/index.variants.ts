import { tv } from 'tailwind-variants'

export const datePicker = tv({
  base: 'relative w-full',
  variants: {},
  defaultVariants: {},
})

export const datePickerInputContainer = tv({
  base: 'relative flex w-full items-center overflow-hidden rounded-md border border-gray-300 transition-colors focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500',
  variants: {
    size: {
      sm: 'h-8 text-sm',
      md: 'h-10 text-base',
      lg: 'h-12 text-lg',
    },
    status: {
      default: 'border-gray-300',
      error:
        'border-red-500 focus-within:border-red-500 focus-within:ring-red-500',
      warning:
        'border-yellow-500 focus-within:border-yellow-500 focus-within:ring-yellow-500',
      success:
        'border-green-500 focus-within:border-green-500 focus-within:ring-green-500',
    },
    disabled: {
      true: 'cursor-not-allowed bg-gray-100 opacity-75',
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'default',
    disabled: false,
  },
})

export const datePickerInput = tv({
  base: 'w-full border-none bg-transparent px-3 py-2 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-75',
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const datePickerClearButton = tv({
  base: 'absolute right-9 cursor-pointer text-gray-400 hover:text-gray-500',
  variants: {},
  defaultVariants: {},
})

export const datePickerCalendarIcon = tv({
  base: 'absolute right-3 cursor-pointer text-gray-400 hover:text-gray-500',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:text-gray-400',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const datePickerPopover = tv({
  base: 'z-10 mt-1 w-full rounded-md border border-gray-200 bg-white p-1 shadow-lg',
  variants: {},
  defaultVariants: {},
})
