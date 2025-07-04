import { tv } from 'tailwind-variants'

export const tabsContainer = tv({
  base: 'w-full',
  variants: {
    placement: {
      top: 'flex flex-col',
      bottom: 'flex flex-col-reverse',
      left: 'flex flex-row',
      right: 'flex flex-row-reverse',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    placement: 'top',
    fullWidth: false,
    disabled: false,
  },
})

export const tabsNav = tv({
  base: 'flex',
  variants: {
    variant: {
      default: 'border-b border-gray-200 dark:border-gray-700',
      pills: 'gap-2',
      underline: 'border-b border-gray-200 dark:border-gray-700',
    },
    placement: {
      top: 'flex-row',
      bottom: 'flex-row',
      left: 'flex-col',
      right: 'flex-col',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    size: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    placement: 'top',
    fullWidth: false,
    size: 'md',
  },
})

export const tabsNavItem = tv({
  base: 'focus:outline-none transition-colors',
  variants: {
    variant: {
      default: 'px-4 py-2 border-b-2 -mb-px',
      pills: 'px-4 py-2 rounded-md',
      underline: 'px-4 py-2 border-b-2 -mb-px',
    },
    active: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: 'cursor-pointer',
    },
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    fullWidth: {
      true: 'flex-1 text-center',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: 'default',
      active: true,
      class:
        'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400',
    },
    {
      variant: 'default',
      active: false,
      class:
        'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200',
    },
    {
      variant: 'pills',
      active: true,
      class: 'bg-blue-500 text-white dark:bg-blue-600',
    },
    {
      variant: 'pills',
      active: false,
      class:
        'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700',
    },
    {
      variant: 'underline',
      active: true,
      class:
        'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400',
    },
    {
      variant: 'underline',
      active: false,
      class:
        'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200',
    },
  ],
  defaultVariants: {
    variant: 'default',
    active: false,
    disabled: false,
    size: 'md',
    fullWidth: false,
  },
})

export const tabsContent = tv({
  base: 'py-4',
  variants: {
    placement: {
      top: 'pt-4',
      bottom: 'pb-4',
      left: 'pl-4',
      right: 'pr-4',
    },
  },
  defaultVariants: {
    placement: 'top',
  },
})
