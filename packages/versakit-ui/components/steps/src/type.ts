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
}

export interface StepsProps {
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
  stepsClass?: string
  /** 自定义步骤条样式 */
  stepsStyle?: CSSProperties
  /** Pass Through 属性 */
  pt?: StepsPassThroughAttributes
}

export interface StepsEmits {
  (e: 'update:active', index: number): void
  (e: 'change', index: number): void
  (e: 'click', index: number): void
}

export type StepsPassThroughAttributes = {
  root?: Record<string, unknown>
  stepsContainer?: Record<string, unknown>
  step?: Record<string, unknown>
  stepIndex?: Record<string, unknown>
  stepIcon?: Record<string, unknown>
  stepLine?: Record<string, unknown>
  stepContent?: Record<string, unknown>
  stepTitle?: Record<string, unknown>
  stepDescription?: Record<string, unknown>
}
