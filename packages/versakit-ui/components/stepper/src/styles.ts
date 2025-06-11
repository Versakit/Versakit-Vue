import { tv } from 'tailwind-variants'

export const stepperStyles = tv({
  slots: {
    root: 'vk-stepper w-full',
    stepperContainer: 'flex',
    step: 'flex-1 relative',
    stepIndex:
      'flex items-center justify-center rounded-full text-sm font-medium',
    stepIcon: 'flex items-center justify-center rounded-full',
    stepLine: 'absolute top-1/2 h-px -translate-y-1/2',
    stepContent: 'mt-2',
    stepTitle: 'text-sm font-medium',
    stepDescription: 'text-xs mt-1 text-gray-500 dark:text-gray-400',
  },
  variants: {
    direction: {
      horizontal: {
        stepperContainer: 'flex-row items-center',
        step: 'flex flex-col',
        stepLine: 'right-0 w-full',
      },
      vertical: {
        stepperContainer: 'flex-col',
        step: 'flex flex-row pb-6',
        stepLine: 'left-[15px] top-[30px] w-px h-full -translate-y-0',
        stepContent: 'ml-4 mt-0',
      },
    },
    size: {
      sm: {
        stepIndex: 'w-6 h-6 text-xs',
        stepIcon: 'w-6 h-6',
        stepTitle: 'text-xs',
        stepDescription: 'text-xs',
      },
      md: {
        stepIndex: 'w-8 h-8',
        stepIcon: 'w-8 h-8',
        stepTitle: 'text-sm',
        stepDescription: 'text-xs',
      },
      lg: {
        stepIndex: 'w-10 h-10 text-base',
        stepIcon: 'w-10 h-10',
        stepTitle: 'text-base',
        stepDescription: 'text-sm',
      },
    },
    status: {
      wait: {
        stepIndex:
          'bg-gray-100 text-gray-500 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400',
        stepLine: 'bg-gray-300 dark:bg-gray-600',
      },
      process: {
        stepIndex: 'bg-primary-500 text-white',
        stepLine: 'bg-gray-300 dark:bg-gray-600',
      },
      finish: {
        stepIndex: 'bg-primary-500 text-white',
        stepLine: 'bg-primary-500',
      },
      error: {
        stepIndex: 'bg-danger-500 text-white',
        stepLine: 'bg-gray-300 dark:bg-gray-600',
      },
    },
    alignCenter: {
      true: {
        step: 'items-center text-center',
        stepContent: 'flex flex-col items-center',
      },
      false: {},
    },
    simple: {
      true: {
        step: 'min-h-0 p-0',
        stepIndex: 'bg-transparent border-none w-auto h-auto text-base',
        stepLine: 'top-1/2 h-px -translate-y-1/2 bg-gray-300 dark:bg-gray-600',
        stepContent: 'mt-0 ml-2',
      },
      false: {},
    },
    clickable: {
      true: {
        step: 'cursor-pointer hover:opacity-80',
      },
      false: {},
    },
    disabled: {
      true: {
        step: 'opacity-50 cursor-not-allowed',
      },
      false: {},
    },
  },
  defaultVariants: {
    direction: 'horizontal',
    size: 'md',
    status: 'wait',
    alignCenter: false,
    simple: false,
    clickable: false,
    disabled: false,
  },
})
