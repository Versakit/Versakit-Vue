import { tv } from 'tailwind-variants'

export const calendar = tv({
  base: 'w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm',
  variants: {},
  defaultVariants: {},
})

export const calendarHeader = tv({
  base: 'mb-4 flex items-center justify-between',
  variants: {},
  defaultVariants: {},
})

export const calendarTitle = tv({
  base: 'text-lg font-semibold text-gray-900',
  variants: {},
  defaultVariants: {},
})

export const calendarNavigation = tv({
  base: 'flex items-center space-x-1',
  variants: {},
  defaultVariants: {},
})

export const calendarNavigationButton = tv({
  base: 'inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:bg-white hover:text-gray-500',
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export const calendarWeekDays = tv({
  base: 'mb-2 grid grid-cols-7 gap-1',
  variants: {},
  defaultVariants: {},
})

export const calendarWeekDay = tv({
  base: 'text-center text-sm font-medium text-gray-500',
  variants: {},
  defaultVariants: {},
})

export const calendarDaysGrid = tv({
  base: 'grid grid-cols-7 gap-1',
  variants: {},
  defaultVariants: {},
})

export const calendarDay = tv({
  base: 'flex h-9 w-full items-center justify-center rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  variants: {
    type: {
      default: 'text-gray-900 hover:bg-gray-100',
      adjacent: 'text-gray-400 hover:bg-gray-50',
      today: 'bg-primary-50 text-primary-700 font-semibold',
      selected: 'bg-primary-500 text-white font-semibold hover:bg-primary-600',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50 hover:bg-transparent',
    },
    highlighted: {
      true: 'border border-primary-500',
    },
  },
  compoundVariants: [
    {
      type: 'selected',
      disabled: true,
      class: 'bg-primary-300 hover:bg-primary-300',
    },
  ],
  defaultVariants: {
    type: 'default',
    disabled: false,
    highlighted: false,
  },
})
