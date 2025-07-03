import { tv } from 'tailwind-variants'

export const calendarStyle = tv({
  base: 'w-full',
  variants: {
    unstyled: {
      false: '',
    },
  },
  defaultVariants: {
    unstyled: false,
  },
})

export const calendarHeaderStyle = tv({
  base: 'flex items-center justify-between mb-4',
})

export const calendarTitleStyle = tv({
  base: 'text-lg font-medium',
})

export const calendarNavigationStyle = tv({
  base: 'flex items-center space-x-1',
})

export const calendarNavButtonStyle = tv({
  base: 'p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
})

export const calendarWeekdaysStyle = tv({
  base: 'grid grid-cols-7 mb-1',
})

export const calendarWeekdayStyle = tv({
  base: 'text-center text-sm font-medium text-gray-500 py-2',
})

export const calendarDaysStyle = tv({
  base: 'grid grid-cols-7 gap-1',
})

export const calendarDayStyle = tv({
  base: 'flex items-center justify-center h-9 w-9 rounded-md text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  variants: {
    isToday: {
      true: 'border border-blue-500',
    },
    isSelected: {
      true: 'bg-blue-500 text-white hover:bg-blue-600',
    },
    isDisabled: {
      true: 'text-gray-300 cursor-not-allowed',
    },
    isAdjacent: {
      true: 'text-gray-400',
    },
  },
  compoundVariants: [
    {
      isSelected: false,
      isDisabled: false,
      isAdjacent: false,
      class: 'hover:bg-gray-100 cursor-pointer',
    },
  ],
})
