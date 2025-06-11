import type { CSSProperties } from 'vue'

export interface StepItem {
  /** 步骤标题 */
  title: string
  /** 步骤描述 */
  description?: string
  /** 步骤图标 */
  icon?: string
  /** 自定义步骤状态 */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义内容 */
  content?: string
}

export interface StepperProps {
  /** 当前激活步骤 */
  active: number
  /** 步骤数据 */
  steps: StepItem[]
  /** 步骤条方向 */
  direction?: 'horizontal' | 'vertical'
  /** 步骤条尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否可点击 */
  clickable?: boolean
  /** 是否显示步骤序号 */
  showIndex?: boolean
  /** 步骤条状态 */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /** 步骤条对齐方式 */
  alignCenter?: boolean
  /** 是否简洁模式 */
  simple?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** 自定义步骤条类名 */
  stepperClass?: string
  /** 自定义步骤条样式 */
  stepperStyle?: CSSProperties
  /** Pass Through 属性 */
  pt?: StepperPassThroughAttributes
}

export interface StepperEmits {
  (e: 'update:active', index: number): void
  (e: 'change', index: number): void
  (e: 'click', index: number): void
}

export type StepperPassThroughAttributes = {
  root?: Record<string, unknown>
  stepperContainer?: Record<string, unknown>
  step?: Record<string, unknown>
  stepIndex?: Record<string, unknown>
  stepIcon?: Record<string, unknown>
  stepLine?: Record<string, unknown>
  stepContent?: Record<string, unknown>
  stepTitle?: Record<string, unknown>
  stepDescription?: Record<string, unknown>
}
