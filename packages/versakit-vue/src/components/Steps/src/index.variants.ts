import { tv } from 'tailwind-variants'

export const stepsVariants = tv({
  slots: {
    root: 'flex w-full',
    step: 'flex flex-1',
    container: 'flex items-center',
    icon: 'relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-200',
    content: 'flex flex-col',
    title: 'text-sm font-medium transition-colors duration-200',
    description:
      'text-xs text-gray-500 transition-colors duration-200 dark:text-gray-400',
    line: 'flex-1 transition-colors duration-200',
  },
  variants: {
    direction: {
      horizontal: {
        root: 'flex-row',
        step: 'flex-row items-center last:flex-none',
        container: 'flex-row',
        content: 'ml-3',
        line: 'mx-4 h-[2px] w-full',
      },
      vertical: {
        root: 'flex-col',
        step: 'flex-col items-start last:flex-none pb-8 last:pb-0',
        container: 'flex-row',
        content: 'ml-3 mt-1',
        line: 'absolute left-4 top-8 -ml-[1px] h-[calc(100%-2rem)] w-[2px]',
      },
    },
    status: {
      wait: {
        icon: 'border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500',
        title: 'text-gray-500 dark:text-gray-400',
        line: 'bg-gray-200 dark:bg-gray-700',
      },
      process: {
        icon: 'border-blue-500 bg-blue-500 text-white dark:border-blue-500 dark:bg-blue-500',
        title: 'text-blue-500 dark:text-blue-400',
        line: 'bg-gray-200 dark:bg-gray-700',
      },
      finish: {
        icon: 'border-blue-500 bg-white text-blue-500 dark:border-blue-500 dark:bg-gray-900 dark:text-blue-400',
        title: 'text-gray-900 dark:text-gray-100',
        line: 'bg-blue-500 dark:bg-blue-500',
      },
      error: {
        icon: 'border-red-500 bg-white text-red-500 dark:border-red-500 dark:bg-gray-900 dark:text-red-400',
        title: 'text-red-500 dark:text-red-400',
        line: 'bg-gray-200 dark:bg-gray-700',
      },
    },
    clickable: {
      true: {
        step: 'cursor-pointer',
      },
      false: {
        step: 'cursor-default',
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    status: 'wait',
    clickable: false,
  },
})
