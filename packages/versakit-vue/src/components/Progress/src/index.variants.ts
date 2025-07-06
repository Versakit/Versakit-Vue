import { tv } from 'tailwind-variants'

export const progressStyle = tv({
  base: 'w-full',
  variants: {
    unstyled: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    unstyled: false,
  },
})

export const progressContainerStyle = tv({
  base: 'w-full overflow-hidden',
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    },
    shape: {
      flat: 'rounded-none',
      rounded: 'rounded',
      pill: 'rounded-full',
    },
    unstyled: {
      true: '',
      false: 'bg-gray-200 dark:bg-gray-700',
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'rounded',
    unstyled: false,
  },
})

export const progressBarStyle = tv({
  base: 'h-full transition-all',
  variants: {
    variant: {
      default: 'bg-blue-500',
      success: 'bg-green-500',
      warning: 'bg-yellow-500',
      danger: 'bg-red-500',
      info: 'bg-gray-500',
    },
    striped: {
      true: 'bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:1rem_1rem]',
      false: '',
    },
    animated: {
      true: 'animate-progress',
      false: '',
    },
    indeterminate: {
      true: 'animate-indeterminate w-1/3',
      false: '',
    },
    unstyled: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    striped: false,
    animated: false,
    indeterminate: false,
    unstyled: false,
  },
})

export const progressTextStyle = tv({
  base: 'text-right text-sm font-medium',
  variants: {
    variant: {
      default: 'text-blue-700 dark:text-blue-500',
      success: 'text-green-700 dark:text-green-500',
      warning: 'text-yellow-700 dark:text-yellow-500',
      danger: 'text-red-700 dark:text-red-500',
      info: 'text-gray-700 dark:text-gray-500',
    },
    unstyled: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    unstyled: false,
  },
})
