export type CalendarProps = {
  modelValue?: Date
  min?: Date
  max?: Date
  disabled?: boolean
  readonly?: boolean
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  locale?: string
  unstyled?: boolean
  pt?: CalendarPT
}

export type CalendarPT = {
  root?: string
  header?: string
  title?: string
  navigation?: string
  navButton?: string
  weekdays?: string
  weekday?: string
  days?: string
  day?: string
  today?: string
  selected?: string
  disabled?: string
  adjacent?: string
}

export const CalendarEmits = {
  'update:modelValue': (date: Date | null) =>
    date === null || date instanceof Date,
  change: (date: Date | null) => date === null || date instanceof Date,
}

export type ICalendarEmits = typeof CalendarEmits
