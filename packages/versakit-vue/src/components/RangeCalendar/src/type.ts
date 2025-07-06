export type RangeCalendarProps = {
  modelValue?: [Date | null, Date | null]
  min?: Date
  max?: Date
  disabled?: boolean
  readonly?: boolean
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  locale?: string
  unstyled?: boolean
  pt?: RangeCalendarPT
}

export type RangeCalendarPT = {
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
  inRange?: string
  rangeStart?: string
  rangeEnd?: string
  disabled?: string
  adjacent?: string
}

export const RangeCalendarEmits = {
  'update:modelValue': (dates: [Date | null, Date | null]) =>
    Array.isArray(dates) &&
    (dates[0] === null || dates[0] instanceof Date) &&
    (dates[1] === null || dates[1] instanceof Date),
  change: (dates: [Date | null, Date | null]) =>
    Array.isArray(dates) &&
    (dates[0] === null || dates[0] instanceof Date) &&
    (dates[1] === null || dates[1] instanceof Date),
}

export type IRangeCalendarEmits = typeof RangeCalendarEmits
