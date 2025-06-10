import { tv } from 'tailwind-variants'

export const timePicker = tv({
  base: 'relative w-full',
  variants: {},
  defaultVariants: {},
})

export const timePickerInputContainer = tv({
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

export const timePickerInput = tv({
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

export const timePickerClearButton = tv({
  base: 'absolute right-9 cursor-pointer text-gray-400 hover:text-gray-500',
  variants: {},
  defaultVariants: {},
})

export const timePickerClockIcon = tv({
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

export const timePickerPopover = tv({
  base: 'z-10 mt-1 rounded-md border border-gray-200 bg-white p-4 shadow-lg',
  variants: {},
  defaultVariants: {},
})

export const timePickerTimeContainer = tv({
  base: 'w-64',
  variants: {},
  defaultVariants: {},
})

export const timePickerTimeControls = tv({
  base: 'flex items-center justify-between space-x-2',
  variants: {},
  defaultVariants: {},
})

export const timePickerTimeSelector = tv({
  base: 'flex flex-col items-center',
  variants: {},
  defaultVariants: {},
})

export const timePickerTimeValue = tv({
  base: 'my-1 min-w-10 rounded-md bg-gray-100 px-2 py-1 text-center text-sm font-medium text-gray-800',
  variants: {},
  defaultVariants: {},
})

export const timePickerTimeButton = tv({
  base: 'inline-flex h-6 w-6 items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:bg-transparent',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})
