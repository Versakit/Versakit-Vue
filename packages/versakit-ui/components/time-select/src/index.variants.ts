import { tv } from 'tailwind-variants'

export const timeSelect = tv({
  base: 'relative w-full',
  variants: {},
  defaultVariants: {},
})

export const timeSelectInputContainer = tv({
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

export const timeSelectInput = tv({
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

export const timeSelectClearButton = tv({
  base: 'absolute right-9 cursor-pointer text-gray-400 hover:text-gray-500',
  variants: {},
  defaultVariants: {},
})

export const timeSelectClockIcon = tv({
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

export const timeSelectDropdown = tv({
  base: 'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg',
  variants: {},
  defaultVariants: {},
})

export const timeSelectOptionsList = tv({
  base: 'py-1',
  variants: {},
  defaultVariants: {},
})

export const timeSelectOption = tv({
  base: 'cursor-pointer rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100',
  variants: {
    selected: {
      true: 'bg-primary-50 text-primary-700 font-medium',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:bg-transparent',
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
  },
})

export const timeSelectEmptyMessage = tv({
  base: 'px-3 py-2 text-center text-sm text-gray-500',
  variants: {},
  defaultVariants: {},
})
