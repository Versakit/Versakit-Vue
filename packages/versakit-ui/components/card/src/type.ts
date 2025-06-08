export type CardVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error'

export interface CardProps {
  /** 卡片标题 */
  title?: string
  /** 卡片副标题 */
  subtitle?: string
  /** 卡片变体样式 */
  variant?: CardVariant
  /** 是否有边框 */
  bordered?: boolean
  /** 是否有阴影 */
  shadow?: boolean
  /** 是否可折叠 */
  collapsible?: boolean
  /** 是否默认折叠 */
  defaultCollapsed?: boolean
  /** 圆角大小 */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  /** 是否自动调整内容高度 */
  autoHeight?: boolean
  /** 是否悬浮效果 */
  hoverable?: boolean
  /** 是否有脚注 */
  withFooter?: boolean
}
