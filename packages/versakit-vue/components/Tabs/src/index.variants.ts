// components/tabs/styles.ts
import { tv } from 'tailwind-variants'

export const tabList = tv({
  base: 'flex rounded-full bg-gray-100 dark:bg-zinc-600 p-1 shadow-sm',
})

export const tabTrigger = tv({
  base: 'px-4 py-2 text-sm transition-all rounded-full',
  variants: {
    active: {
      true: 'bg-black dark:text-white shadow-sm font-medium',
      false: 'text-gray-600 hover:text-gray-900',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: true,
      class: 'pointer-events-none text-gray-300',
    },
  ],
})

export const tabPanel = tv({
  base: 'p-4 mt-4',
})
