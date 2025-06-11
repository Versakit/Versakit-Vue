import { tv } from 'tailwind-variants'

export const collapsible = tv({
  slots: {
    root: 'w-full',
    trigger:
      'flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-colors',
    content: 'overflow-hidden',
    contentInner: 'px-4 py-2',
    icon: 'h-5 w-5 transition-transform duration-200',
  },
  variants: {
    disabled: {
      true: {
        root: 'opacity-60 cursor-not-allowed',
        trigger: 'pointer-events-none',
      },
    },
    open: {
      true: {
        icon: 'transform rotate-180',
      },
    },
  },
  defaultVariants: {
    disabled: false,
    open: false,
  },
})
