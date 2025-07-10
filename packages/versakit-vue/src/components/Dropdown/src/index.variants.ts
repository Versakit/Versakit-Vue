import { tv } from 'tailwind-variants'

export const dropdownStyle = tv({
  slots: {
    root: 'relative inline-block',
    trigger: 'inline-flex cursor-pointer',
    content:
      'absolute z-10 mt-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-gray-800 dark:ring-gray-600',
    arrow: 'absolute z-10 h-2 w-2 rotate-45 bg-white dark:bg-gray-800',
    menu: 'py-1',
    menuItem:
      'block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:bg-gray-100 focus-visible:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white dark:focus-visible:bg-gray-700 dark:focus-visible:text-white disabled:opacity-50 disabled:cursor-not-allowed',
    menuItemIcon: 'mr-2 h-4 w-4 inline-block',
    menuItemLabel: 'inline-block',
    menuDivider: 'my-1 h-px bg-gray-200 dark:bg-gray-700',
  },
  variants: {
    disabled: {
      true: {
        trigger: 'cursor-not-allowed opacity-50',
      },
    },
  },
})
