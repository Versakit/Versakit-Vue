import { tv } from 'tailwind-variants'

export const select = tv({
  base: 'relative w-full min-w-[180px] flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-background border-input hover:border-gray-400 dark:hover:border-gray-500',
      filled: 'bg-gray-100 dark:bg-gray-800 border-transparent',
      outline: 'bg-transparent border-gray-300 dark:border-gray-600',
      ghost:
        'border-none shadow-none bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
    },
    size: {
      xs: 'h-6 text-xs px-2 py-1',
      sm: 'h-8 text-sm px-3 py-1',
      md: 'h-10 text-base px-4 py-2',
      lg: 'h-12 text-lg px-5 py-2',
      xl: 'h-14 text-xl px-6 py-3',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
    loading: {
      true: 'cursor-wait',
    },
    multiple: {
      true: 'flex-wrap',
    },
  },
  compoundVariants: [
    {
      loading: true,
      class: 'cursor-wait',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export const selectOption = tv({
  base: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
  variants: {
    active: {
      true: 'bg-accent text-accent-foreground',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
    },
  },
})

export const selectOptions = tv({
  base: 'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
})
