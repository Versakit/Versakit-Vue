// components/tabs/styles.ts
import { tv } from 'tailwind-variants'

export const tabList = tv({
  base: 'flex space-x-2 border-b',
})

export const tabTrigger = tv({
  base: 'px-4 py-2 text-sm transition-colors border-b-2',
  variants: {
    active: {
      true: 'text-blue-600 border-blue-600 font-medium',
      false: 'text-gray-500 border-transparent hover:text-gray-700',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: true,
      class: 'pointer-events-none text-gray-400',
    },
  ],
})

export const tabPanel = tv({
  base: 'p-4',
})
