import { tv } from 'tailwind-variants'

export const drawerOverlay = tv({
  base: 'fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 transition-opacity z-40',
  variants: {
    open: {
      true: 'opacity-100',
      false: 'opacity-0 pointer-events-none',
    },
  },
  defaultVariants: {
    open: false,
  },
})

export const drawerContainer = tv({
  base: 'fixed bg-white dark:bg-gray-800 shadow-xl transition-transform overflow-auto flex flex-col z-50',
  variants: {
    placement: {
      left: 'top-0 left-0 bottom-0 h-full',
      right: 'top-0 right-0 bottom-0 h-full',
      top: 'top-0 left-0 right-0 w-full',
      bottom: 'bottom-0 left-0 right-0 w-full',
    },
    open: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      placement: 'left',
      open: true,
      class: 'translate-x-0',
    },
    {
      placement: 'left',
      open: false,
      class: '-translate-x-full',
    },
    {
      placement: 'right',
      open: true,
      class: 'translate-x-0',
    },
    {
      placement: 'right',
      open: false,
      class: 'translate-x-full',
    },
    {
      placement: 'top',
      open: true,
      class: 'translate-y-0',
    },
    {
      placement: 'top',
      open: false,
      class: '-translate-y-full',
    },
    {
      placement: 'bottom',
      open: true,
      class: 'translate-y-0',
    },
    {
      placement: 'bottom',
      open: false,
      class: 'translate-y-full',
    },
  ],
  defaultVariants: {
    placement: 'right',
    open: false,
  },
})

export const drawerHeader = tv({
  base: 'flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700',
})

export const drawerTitle = tv({
  base: 'text-lg font-medium text-gray-900 dark:text-gray-100',
})

export const drawerCloseButton = tv({
  base: 'p-1 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800',
})

export const drawerBody = tv({
  base: 'flex-1 p-4 overflow-y-auto',
})

export const drawerFooter = tv({
  base: 'flex justify-end gap-2 p-4 border-t border-gray-200 dark:border-gray-700',
})
