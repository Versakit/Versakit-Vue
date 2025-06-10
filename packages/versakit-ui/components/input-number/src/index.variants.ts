import { tv } from 'tailwind-variants'

export const inputNumber = tv({
  base: 'w-full',
})

export const inputNumberContainer = tv({
  base: 'relative flex items-center w-full rounded-md border border-gray-300 bg-white transition-colors focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500',
  variants: {
    size: {
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
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
  },
})

export const inputNumberPrefix = tv({
  base: 'flex items-center justify-center pl-3 text-gray-500',
})

export const inputNumberInput = tv({
  base: 'w-full border-0 bg-transparent px-3 py-2 outline-none focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-75',
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

export const inputNumberSuffix = tv({
  base: 'flex items-center justify-center pr-3 text-gray-500',
})

export const inputNumberControlsWrapper = tv({
  base: 'flex',
  variants: {
    position: {
      right: 'flex-col border-l border-gray-300',
      both: 'items-center',
    },
  },
  defaultVariants: {
    position: 'right',
  },
})

export const inputNumberButton = tv({
  base: 'flex h-full items-center justify-center bg-gray-100 px-2 text-gray-700 transition-colors hover:bg-gray-200 active:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    position: {
      top: 'rounded-tr-md border-b border-gray-300',
      bottom: 'rounded-br-md',
      left: 'rounded-l-md border-r border-gray-300',
      right: 'rounded-r-md',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
