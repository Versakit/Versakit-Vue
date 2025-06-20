import { tv } from 'tailwind-variants'

export const kbdStyle = tv({
  base: 'inline-flex items-center justify-center font-mono font-medium rounded-md border shadow-sm min-w-[20px] text-center transition-all',
  variants: {
    variant: {
      solid:
        'bg-slate-50 border-slate-200 text-slate-700 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-slate-100',
      outline:
        'bg-white/80 border-slate-300 text-slate-800 shadow-[inset_0_-1px_0_0_rgba(0,0,0,0.05),0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-white hover:border-slate-400',
      dark: 'bg-slate-900 border-slate-700 text-white shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.1),0_1px_2px_0_rgba(0,0,0,0.2)] hover:bg-slate-800',
    },
    size: {
      xs: 'text-xs px-1.5 py-0.5 rounded-sm',
      sm: 'text-sm px-2 py-0.5 rounded-sm',
      md: 'text-base px-2.5 py-1',
      lg: 'text-base px-3 py-1.5',
    },
  },
  defaultVariants: {
    variant: 'dark',
    size: 'md',
  },
})
