import { tv } from 'tailwind-variants'

export const radio = tv({
  slots: {
    root: 'inline-flex items-center',
    input:
      'peer h-4 w-4 appearance-none rounded-full border border-primary text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    label:
      'ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
  variants: {
    variant: {
      default: {
        input:
          'border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-100',
      },
      primary: {
        input: 'border-blue-500 text-blue-500',
      },
      success: {
        input: 'border-green-500 text-green-500',
      },
      warning: {
        input: 'border-yellow-500 text-yellow-500',
      },
      error: {
        input: 'border-red-500 text-red-500',
      },
      info: {
        input: 'border-cyan-500 text-cyan-500',
      },
    },
    size: {
      xs: {
        root: 'gap-1.5',
        input: 'h-3 w-3',
        label: 'text-xs',
      },
      sm: {
        root: 'gap-1.5',
        input: 'h-3.5 w-3.5',
        label: 'text-sm',
      },
      md: {
        root: 'gap-2',
        input: 'h-4 w-4',
        label: 'text-sm',
      },
      lg: {
        root: 'gap-2',
        input: 'h-5 w-5',
        label: 'text-base',
      },
      xl: {
        root: 'gap-3',
        input: 'h-6 w-6',
        label: 'text-lg',
      },
    },
    disabled: {
      true: {
        root: 'cursor-not-allowed',
        input: 'cursor-not-allowed opacity-50',
        label: 'cursor-not-allowed opacity-50',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export const radioGroup = tv({
  base: 'space-y-2',
  variants: {
    direction: {
      horizontal: 'flex flex-row items-center space-x-4 space-y-0',
      vertical: 'flex flex-col space-y-2',
    },
  },
  defaultVariants: {
    direction: 'vertical',
  },
})
