export interface DatetimepickerProps {
  modelValue: Date | string | null
  placeholder?: string
  disabled?: boolean
  format?: string
  clearable?: boolean
  hideSeconds?: boolean
  unstyled?: boolean
  pt?: DatetimepickerPtProps
}

export interface DatetimepickerPtProps {
  root?: string | Record<string, any>
  timeInput?: string | Record<string, any>
  calendarIcon?: string | Record<string, any>
  clearIcon?: string | Record<string, any>
  dateTimePanel?: string | Record<string, any>
  tabs?: string | Record<string, any>
  tab?: string | Record<string, any>
  dataPanel?: string | Record<string, any>
  calendarHeader?: string | Record<string, any>
  monthYear?: string | Record<string, any>
  weekdays?: string | Record<string, any>
  days?: string | Record<string, any>
  day?: string | Record<string, any>
  currentMonth?: string | Record<string, any>
  calendarFooter?: string | Record<string, any>
  timePanel?: string | Record<string, any>
  timeColumns?: string | Record<string, any>
  timeColumn?: string | Record<string, any>
  hours?: string | Record<string, any>
  minutes?: string | Record<string, any>
  seconds?: string | Record<string, any>
  timeColumnHeader?: string | Record<string, any>
  timeColumnContent?: string | Record<string, any>
  timeItem?: string | Record<string, any>
  panelFooter?: string | Record<string, any>
  cancelBtn?: string | Record<string, any>
  confirmBtn?: string | Record<string, any>
}
