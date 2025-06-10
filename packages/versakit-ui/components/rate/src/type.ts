import type { CSSProperties } from 'vue'

export interface RateProps {
  /** 当前评分值 */
  modelValue?: number
  /** 最大评分值 */
  max?: number
  /** 是否允许半选 */
  allowHalf?: boolean
  /** 是否只读 */
  readonly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 评分图标尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否显示辅助文字 */
  showText?: boolean
  /** 评分提示文字数组 */
  texts?: string[]
  /** 自定义评分图标类名 */
  iconClass?: string
  /** 自定义评分图标样式 */
  iconStyle?: CSSProperties
  /** 未选中时的颜色 */
  voidColor?: string
  /** 选中时的颜色 */
  activeColor?: string
  /** 未选中图标 */
  voidIcon?: string
  /** 选中图标 */
  activeIcon?: string
  /** 半选图标 */
  halfIcon?: string
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: RatePassThroughAttributes
}

export interface RateEmits {
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}

export type RatePassThroughAttributes = {
  root?: Record<string, unknown>
  item?: Record<string, unknown>
  icon?: Record<string, unknown>
  text?: Record<string, unknown>
}
