import { tv } from 'tailwind-variants'

export const tooltip = tv({
  slots: {
    root: 'relative inline-block',
    content: 'z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm shadow-md',
    arrow: 'absolute w-2 h-2 rotate-45',
  },
  variants: {
    theme: {
      light: {
        content: 'bg-white text-gray-900 border border-gray-200',
        arrow: 'bg-white border border-gray-200',
      },
      dark: {
        content: 'bg-gray-800 text-white',
        arrow: 'bg-gray-800',
      },
      auto: {
        content:
          'bg-white text-gray-900 border border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700',
        arrow:
          'bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700',
      },
    },
    variant: {
      primary: {},
      success: {},
      warning: {},
      info: {},
      error: {},
      default: {},
    },
    size: {
      xs: { content: 'text-xs px-2 py-1' },
      sm: { content: 'text-sm px-2.5 py-1' },
      md: { content: 'text-sm px-3 py-1.5' },
      lg: { content: 'text-base px-4 py-2' },
      xl: { content: 'text-lg px-5 py-2.5' },
    },
    placement: {
      top: { arrow: 'bottom-[-4px] border-t-0 border-l-0' },
      'top-start': { arrow: 'bottom-[-4px] border-t-0 border-l-0' },
      'top-end': { arrow: 'bottom-[-4px] border-t-0 border-l-0' },
      bottom: { arrow: 'top-[-4px] border-b-0 border-r-0' },
      'bottom-start': { arrow: 'top-[-4px] border-b-0 border-r-0' },
      'bottom-end': { arrow: 'top-[-4px] border-b-0 border-r-0' },
      left: { arrow: 'right-[-4px] border-l-0 border-b-0' },
      'left-start': { arrow: 'right-[-4px] border-l-0 border-b-0' },
      'left-end': { arrow: 'right-[-4px] border-l-0 border-b-0' },
      right: { arrow: 'left-[-4px] border-r-0 border-t-0' },
      'right-start': { arrow: 'left-[-4px] border-r-0 border-t-0' },
      'right-end': { arrow: 'left-[-4px] border-r-0 border-t-0' },
    },
    disabled: {
      true: { content: 'opacity-50 cursor-not-allowed' },
    },
  },
  compoundVariants: [
    // 主题和变体组合
    {
      theme: 'light',
      variant: 'primary',
      class: {
        content: 'border-blue-200 text-blue-700',
        arrow: 'border-blue-200',
      },
    },
    {
      theme: 'light',
      variant: 'success',
      class: {
        content: 'border-green-200 text-green-700',
        arrow: 'border-green-200',
      },
    },
    {
      theme: 'light',
      variant: 'warning',
      class: {
        content: 'border-yellow-200 text-yellow-700',
        arrow: 'border-yellow-200',
      },
    },
    {
      theme: 'light',
      variant: 'info',
      class: {
        content: 'border-cyan-200 text-cyan-700',
        arrow: 'border-cyan-200',
      },
    },
    {
      theme: 'light',
      variant: 'error',
      class: {
        content: 'border-red-200 text-red-700',
        arrow: 'border-red-200',
      },
    },
    // 深色主题和变体组合
    {
      theme: 'dark',
      variant: 'primary',
      class: { content: 'bg-blue-900 text-blue-100', arrow: 'bg-blue-900' },
    },
    {
      theme: 'dark',
      variant: 'success',
      class: { content: 'bg-green-900 text-green-100', arrow: 'bg-green-900' },
    },
    {
      theme: 'dark',
      variant: 'warning',
      class: {
        content: 'bg-yellow-900 text-yellow-100',
        arrow: 'bg-yellow-900',
      },
    },
    {
      theme: 'dark',
      variant: 'info',
      class: { content: 'bg-cyan-900 text-cyan-100', arrow: 'bg-cyan-900' },
    },
    {
      theme: 'dark',
      variant: 'error',
      class: { content: 'bg-red-900 text-red-100', arrow: 'bg-red-900' },
    },
    // 自动主题和变体组合
    {
      theme: 'auto',
      variant: 'primary',
      class: {
        content:
          'border-blue-200 text-blue-700 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-800',
        arrow: 'border-blue-200 dark:bg-blue-900 dark:border-blue-800',
      },
    },
    {
      theme: 'auto',
      variant: 'success',
      class: {
        content:
          'border-green-200 text-green-700 dark:bg-green-900 dark:text-green-100 dark:border-green-800',
        arrow: 'border-green-200 dark:bg-green-900 dark:border-green-800',
      },
    },
    {
      theme: 'auto',
      variant: 'warning',
      class: {
        content:
          'border-yellow-200 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-800',
        arrow: 'border-yellow-200 dark:bg-yellow-900 dark:border-yellow-800',
      },
    },
    {
      theme: 'auto',
      variant: 'info',
      class: {
        content:
          'border-cyan-200 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-100 dark:border-cyan-800',
        arrow: 'border-cyan-200 dark:bg-cyan-900 dark:border-cyan-800',
      },
    },
    {
      theme: 'auto',
      variant: 'error',
      class: {
        content:
          'border-red-200 text-red-700 dark:bg-red-900 dark:text-red-100 dark:border-red-800',
        arrow: 'border-red-200 dark:bg-red-900 dark:border-red-800',
      },
    },
  ],
  defaultVariants: {
    theme: 'auto',
    variant: 'primary',
    size: 'md',
    placement: 'top',
  },
})
