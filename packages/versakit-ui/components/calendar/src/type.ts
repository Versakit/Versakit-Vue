import type { CSSProperties } from 'vue'

export interface CalendarProps {
  /** 当前选中的日期 */
  modelValue?: Date
  /** 日历的最小可选日期 */
  minDate?: Date
  /** 日历的最大可选日期 */
  maxDate?: Date
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 初始显示的月份和年份 */
  initialView?: Date
  /** 是否显示相邻月份的日期 */
  showAdjacentDays?: boolean
  /** 星期起始日 (0-6, 0 = 星期日) */
  weekStart?: number
  /** 自定义日期单元格类名 */
  dayClass?: string | ((date: Date) => string)
  /** 自定义日期单元格样式 */
  dayStyle?: CSSProperties | ((date: Date) => CSSProperties)
  /** 禁用特定日期 */
  disabledDate?: (date: Date) => boolean
  /** 高亮特定日期 */
  highlightDate?: (date: Date) => boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: CalendarPassThroughAttributes
}

export interface CalendarEmits {
  (e: 'update:modelValue', value: Date): void
  (e: 'change', value: Date): void
  (e: 'month-change', year: number, month: number): void
}

export type CalendarPassThroughAttributes = {
  root?: Record<string, unknown>
  header?: Record<string, unknown>
  title?: Record<string, unknown>
  navigation?: Record<string, unknown>
  prevButton?: Record<string, unknown>
  nextButton?: Record<string, unknown>
  weekDays?: Record<string, unknown>
  weekDay?: Record<string, unknown>
  daysGrid?: Record<string, unknown>
  day?: Record<string, unknown>
}
