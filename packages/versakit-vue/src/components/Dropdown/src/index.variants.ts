import { tv } from 'tailwind-variants'

export const dropdownStyle = tv({
  slots: {
    root: 'relative inline-block',
    trigger: 'inline-flex',
    content: [
      'absolute z-50',
      'bg-white dark:bg-gray-800',
      'border border-gray-200 dark:border-gray-700',
      'rounded-md shadow-lg',
      'min-w-[10rem]',
      'overflow-hidden',
      'animate-dropdown',
    ],
    arrow: [
      'absolute',
      'w-3 h-3',
      'bg-white dark:bg-gray-800',
      'border-t border-l border-gray-200 dark:border-gray-700',
      'transform rotate-45',
      '-z-10',
    ],
    menu: 'py-1',
    menuItem: [
      'flex items-center gap-2 w-full',
      'px-4 py-2',
      'text-sm text-gray-700 dark:text-gray-200',
      'hover:bg-gray-100 dark:hover:bg-gray-700',
      'focus:bg-gray-100 dark:focus:bg-gray-700',
      'focus:outline-none',
      'cursor-pointer',
      'transition-colors duration-150',
    ],
    menuItemSelected:
      'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    menuItemActive: 'bg-gray-100 dark:bg-gray-700 font-medium',
    menuItemDisabled: 'opacity-50 pointer-events-none cursor-not-allowed',
    menuItemIcon: 'mr-2 flex-shrink-0',
    menuDivider: 'h-px bg-gray-200 dark:bg-gray-700 my-1',
  },
  variants: {
    placement: {
      top: {
        content: 'bottom-full mb-1',
        arrow: 'bottom-[-6px] transform rotate-[-135deg]',
      },
      'top-start': {
        content: 'bottom-full left-0 mb-1',
        arrow: 'bottom-[-6px] left-4 transform rotate-[-135deg]',
      },
      'top-end': {
        content: 'bottom-full right-0 mb-1',
        arrow: 'bottom-[-6px] right-4 transform rotate-[-135deg]',
      },
      bottom: {
        content: 'top-full mt-1',
        arrow: 'top-[-6px]',
      },
      'bottom-start': {
        content: 'top-full left-0 mt-1',
        arrow: 'top-[-6px] left-4',
      },
      'bottom-end': {
        content: 'top-full right-0 mt-1',
        arrow: 'top-[-6px] right-4',
      },
      left: {
        content: 'right-full top-1/2 -translate-y-1/2 mr-1',
        arrow:
          'right-[-6px] top-1/2 -translate-y-1/2 transform rotate-[135deg]',
      },
      'left-start': {
        content: 'right-full top-0 mr-1',
        arrow: 'right-[-6px] top-4 transform rotate-[135deg]',
      },
      'left-end': {
        content: 'right-full bottom-0 mr-1',
        arrow: 'right-[-6px] bottom-4 transform rotate-[135deg]',
      },
      right: {
        content: 'left-full top-1/2 -translate-y-1/2 ml-1',
        arrow: 'left-[-6px] top-1/2 -translate-y-1/2 transform rotate-[-45deg]',
      },
      'right-start': {
        content: 'left-full top-0 ml-1',
        arrow: 'left-[-6px] top-4 transform rotate-[-45deg]',
      },
      'right-end': {
        content: 'left-full bottom-0 ml-1',
        arrow: 'left-[-6px] bottom-4 transform rotate-[-45deg]',
      },
    },
    size: {
      sm: {
        content: 'text-xs',
        menuItem: 'py-1',
      },
      md: {
        content: 'text-sm',
        menuItem: 'py-2',
      },
      lg: {
        content: 'text-base',
        menuItem: 'py-2.5',
      },
    },
    disabled: {
      true: {
        trigger: 'opacity-50 pointer-events-none cursor-not-allowed',
      },
    },
  },
  defaultVariants: {
    placement: 'bottom',
    size: 'md',
    disabled: false,
  },
})
