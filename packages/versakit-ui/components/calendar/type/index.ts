export interface CalendarProps {
  modelValue?: Date // 选中的日期
  readonly?: boolean // 是否只读
  unstyled?: boolean
  pt?: CalendarPtProps
}

export interface CalendarPtProps {
  /*基础类*/
  root?: string | Record<string, any>
  header?: string | Record<string, any>
  title?: string | Record<string, any>
  body?: string | Record<string, any>
  weeks?: string | Record<string, any>
  dates?: string | Record<string, any>
  cell?: string | Record<string, any>
}

export interface CalendarEmits {
  (e: 'update:modelValue', value: Date): void
  (e: 'change', value: Date): void
}

export type DateCell = {
  text: number // 显示的日期
  type: 'prev' | 'current' | 'next' // 上月/当月/下月
  date: Date // 完整日期对象
}

// 添加单元格插槽的数据类型
export interface DateCellData {
  type: 'prev-month' | 'current-month' | 'next-month'
  isSelected: boolean
  day: string // YYYY-MM-DD 格式
  date: Date
}

// 添加头部插槽的类型
export interface CalendarHeader {
  date: Date
  prevMonth: () => void
  nextMonth: () => void
  prevYear: () => void
  nextYear: () => void
  today: () => void
}
