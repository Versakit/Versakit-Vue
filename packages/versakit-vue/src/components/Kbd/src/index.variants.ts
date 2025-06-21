import { tv } from 'tailwind-variants'

export const kbdStyle = tv({
  base: 'inline-flex items-center justify-center font-mono font-medium rounded-md border shadow-sm min-w-[20px] text-center transition-all',
  variants: {
    variant: {
      default: 'bg-slate-900 dark:bg-zinc-900  text-white ',
    },
    size: {
      xs: 'text-xs px-1.5 py-0.5 rounded-sm',
      sm: 'text-sm px-2 py-0.5 rounded-sm',
      md: 'text-base px-2.5 py-1',
      lg: 'text-base px-3 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})
