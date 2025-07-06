export type PanelVariant = 'default' | 'bordered' | 'elevated'
export type PanelPadding = 'none' | 'sm' | 'md' | 'lg'
export type PanelRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export interface PanelProps {
  /**
   * 面板标题
   */
  title?: string

  /**
   * 面板样式变体
   * @default 'default'
   */
  variant?: PanelVariant

  /**
   * 内边距大小
   * @default 'md'
   */
  padding?: PanelPadding

  /**
   * 圆角大小
   * @default 'md'
   */
  radius?: PanelRadius

  /**
   * 是否可折叠
   * @default false
   */
  collapsible?: boolean

  /**
   * 是否默认折叠
   * @default false
   */
  defaultCollapsed?: boolean

  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: PanelPT
}

/**
 * Panel组件模板样式类型
 */
export type PanelPT = {
  root?: string
  header?: string
  title?: string
  content?: string
  icon?: string
}

export const PanelEmits = {
  'update:collapsed': (value: boolean) => typeof value === 'boolean',
  collapse: (value: boolean) => typeof value === 'boolean',
}

export type IPanelEmits = typeof PanelEmits
