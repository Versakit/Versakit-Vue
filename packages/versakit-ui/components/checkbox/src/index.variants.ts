import { tv } from 'tailwind-variants'

export const checkboxVariants = tv({
  base: 'inline-flex items-center',
  variants: {
    size: {
      sm: 'h-4 gap-1.5',
      md: 'h-5 gap-2',
      lg: 'h-6 gap-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const checkboxBoxVariants = tv({
  base: 'flex items-center justify-center rounded border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700',
  variants: {
    size: {
      sm: 'h-3.5 w-3.5',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    variant: {
      primary:
        'peer-checked:bg-blue-500 peer-checked:border-blue-500 dark:peer-checked:bg-blue-500 dark:peer-checked:border-blue-500',
      success:
        'peer-checked:bg-green-500 peer-checked:border-green-500 dark:peer-checked:bg-green-500 dark:peer-checked:border-green-500',
      warning:
        'peer-checked:bg-yellow-500 peer-checked:border-yellow-500 dark:peer-checked:bg-yellow-500 dark:peer-checked:border-yellow-500',
      info: 'peer-checked:bg-cyan-500 peer-checked:border-cyan-500 dark:peer-checked:bg-cyan-500 dark:peer-checked:border-cyan-500',
      error:
        'peer-checked:bg-red-500 peer-checked:border-red-500 dark:peer-checked:bg-red-500 dark:peer-checked:border-red-500',
      default:
        'peer-checked:bg-gray-700 peer-checked:border-gray-700 dark:peer-checked:bg-gray-500 dark:peer-checked:border-gray-500',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    indeterminate: {
      true: 'bg-blue-500 border-blue-500 dark:bg-blue-500 dark:border-blue-500',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      indeterminate: true,
      class:
        'bg-blue-500 border-blue-500 dark:bg-blue-500 dark:border-blue-500',
    },
    {
      variant: 'success',
      indeterminate: true,
      class:
        'bg-green-500 border-green-500 dark:bg-green-500 dark:border-green-500',
    },
    {
      variant: 'warning',
      indeterminate: true,
      class:
        'bg-yellow-500 border-yellow-500 dark:bg-yellow-500 dark:border-yellow-500',
    },
    {
      variant: 'info',
      indeterminate: true,
      class:
        'bg-cyan-500 border-cyan-500 dark:bg-cyan-500 dark:border-cyan-500',
    },
    {
      variant: 'error',
      indeterminate: true,
      class: 'bg-red-500 border-red-500 dark:bg-red-500 dark:border-red-500',
    },
    {
      variant: 'default',
      indeterminate: true,
      class:
        'bg-gray-700 border-gray-700 dark:bg-gray-500 dark:border-gray-500',
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export const checkboxLabelVariants = tv({
  base: 'text-gray-800 dark:text-gray-200',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    disabled: {
      true: 'text-gray-400 dark:text-gray-600',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const checkboxIconVariants = tv({
  base: 'text-white',
  variants: {
    size: {
      sm: 'w-2 h-2',
      md: 'w-2.5 h-2.5',
      lg: 'w-3 h-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
