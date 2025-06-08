import { tv } from 'tailwind-variants'

export const drawer = tv({
  base: 'fixed overflow-hidden flex flex-col bg-white shadow-lg dark:bg-gray-800 dark:text-white transition-transform duration-300 ease-in-out',
  variants: {
    placement: {
      left: 'top-0 left-0 bottom-0 h-full',
      right: 'top-0 right-0 bottom-0 h-full',
      top: 'top-0 left-0 right-0 w-full',
      bottom: 'bottom-0 left-0 right-0 w-full',
    },
    size: {
      xs: 'w-64 max-w-full h-auto',
      sm: 'w-80 max-w-full h-auto',
      md: 'w-96 max-w-full h-auto',
      lg: 'w-[32rem] max-w-full h-auto',
      xl: 'w-[40rem] max-w-full h-auto',
      full: 'w-full h-full',
    },
    rounded: {
      true: '',
    },
  },
  compoundVariants: [
    {
      placement: 'left',
      rounded: true,
      class: 'rounded-r-lg',
    },
    {
      placement: 'right',
      rounded: true,
      class: 'rounded-l-lg',
    },
    {
      placement: 'top',
      rounded: true,
      class: 'rounded-b-lg',
    },
    {
      placement: 'bottom',
      rounded: true,
      class: 'rounded-t-lg',
    },
    {
      placement: ['top', 'bottom'],
      size: 'xs',
      class: 'h-64',
    },
    {
      placement: ['top', 'bottom'],
      size: 'sm',
      class: 'h-80',
    },
    {
      placement: ['top', 'bottom'],
      size: 'md',
      class: 'h-96',
    },
    {
      placement: ['top', 'bottom'],
      size: 'lg',
      class: 'h-[32rem]',
    },
    {
      placement: ['top', 'bottom'],
      size: 'xl',
      class: 'h-[40rem]',
    },
  ],
  defaultVariants: {
    placement: 'right',
    size: 'md',
  },
})

export const drawerOverlay = tv({
  base: 'fixed inset-0 bg-black transition-opacity duration-300 ease-in-out',
})

export const drawerHeader = tv({
  base: 'flex items-center justify-between p-4 border-b dark:border-gray-700',
})

export const drawerTitle = tv({
  base: 'text-lg font-medium',
})

export const drawerClose = tv({
  base: 'rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
})

export const drawerBody = tv({
  base: 'flex-grow p-4 overflow-y-auto',
})

export const drawerFooter = tv({
  base: 'flex justify-end gap-2 p-4 border-t dark:border-gray-700',
})
