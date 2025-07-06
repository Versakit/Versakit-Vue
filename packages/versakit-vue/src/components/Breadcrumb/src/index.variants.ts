import { tv } from 'tailwind-variants'

export const breadcrumbStyle = tv({
  base: 'flex',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbListStyle = tv({
  base: 'flex flex-wrap items-center space-x-1 md:space-x-2',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbSeparatorStyle = tv({
  base: 'mx-1 text-gray-400',
  variants: {},
  defaultVariants: {},
})

export const breadcrumbItemStyle = tv({
  base: 'inline-flex items-center text-sm font-medium',
  variants: {
    disabled: {
      true: 'text-gray-400 pointer-events-none cursor-not-allowed',
      false: 'cursor-pointer',
    },
    active: {
      true: 'text-gray-800 font-semibold',
      false: 'text-gray-500 hover:text-gray-700',
    },
  },
  defaultVariants: {
    disabled: false,
    active: false,
  },
})

export const breadcrumbItemLinkStyle = tv({
  base: 'inline-flex items-center',
  variants: {},
  defaultVariants: {},
})
