import { tv } from 'tailwind-variants'

export const panelStyle = tv({
  base: 'bg-white overflow-hidden',
  variants: {
    variant: {
      default: '',
      bordered: 'border border-gray-200',
      elevated: 'shadow-md',
    },
    padding: {
      none: '',
      sm: '',
      md: '',
      lg: '',
    },
    radius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-xl',
    },
    bordered: {
      true: 'border border-gray-200',
      false: '',
    },
  },
  compoundVariants: [
    {
      padding: 'none',
      class: '',
    },
    {
      padding: 'sm',
      class: '',
    },
    {
      padding: 'md',
      class: '',
    },
    {
      padding: 'lg',
      class: '',
    },
  ],
  defaultVariants: {
    variant: 'default',
    padding: 'md',
    radius: 'md',
    bordered: true,
  },
})

export const panelHeaderStyle = tv({
  base: 'flex items-center justify-between',
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-5',
    },
    collapsible: {
      true: 'cursor-pointer select-none',
      false: '',
    },
  },
  defaultVariants: {
    padding: 'md',
    collapsible: false,
  },
})

export const panelTitleStyle = tv({
  base: 'text-lg font-medium',
})

export const panelContentStyle = tv({
  base: 'transition-all',
  variants: {
    padding: {
      none: 'p-0',
      sm: 'px-3 pb-3',
      md: 'px-4 pb-4',
      lg: 'px-5 pb-5',
    },
    collapsed: {
      true: 'max-h-0 overflow-hidden opacity-0',
      false: 'max-h-[1000px] opacity-100',
    },
  },
  defaultVariants: {
    padding: 'md',
    collapsed: false,
  },
})

export const panelIconStyle = tv({
  base: 'transition-transform duration-200',
  variants: {
    collapsed: {
      true: 'transform rotate-180',
      false: '',
    },
  },
  defaultVariants: {
    collapsed: false,
  },
})
