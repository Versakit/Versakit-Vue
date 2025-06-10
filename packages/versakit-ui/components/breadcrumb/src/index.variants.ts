import { tv } from 'tailwind-variants'

export const breadcrumb = tv({
  base: 'flex items-center text-sm',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbList = tv({
  base: 'flex items-center space-x-1',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbSeparator = tv({
  base: 'mx-1 text-gray-400',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbItem = tv({
  base: 'inline-flex items-center',
  variants: {
    active: {
      true: 'font-semibold text-gray-900 dark:text-white',
      false:
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:underline dark:hover:text-white',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
})

export const breadcrumbLink = tv({
  base: 'inline-flex items-center',
  variants: {
    active: {
      true: 'font-semibold text-gray-900 dark:text-white cursor-default',
      false:
        'text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:underline dark:hover:text-white',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
  },
  defaultVariants: {
    active: false,
    disabled: false,
  },
})
