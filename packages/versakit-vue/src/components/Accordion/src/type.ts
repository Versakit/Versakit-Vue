export type AccordionVariant = 'default' | 'bordered' | 'elevated'
export type AccordionRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export interface AccordionProps {
  /**
   * 是否允许同时展开多个面板
   * @default false
   */
  multiple?: boolean

  /**
   * 默认展开的面板（键值）
   */
  modelValue?: string | string[] | undefined

  /**
   * 手风琴样式变体
   * @default 'default'
   */
  variant?: AccordionVariant

  /**
   * 圆角大小
   * @default 'md'
   */
  radius?: AccordionRadius

  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean

  /**
   * 是否启用动画效果
   * @default true
   */
  animated?: boolean

  /**
   * 是否禁用全部面板
   * @default false
   */
  disabled?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: AccordionPT
}

/**
 * AccordionItem 组件属性
 */
export interface AccordionItemProps {
  /**
   * 面板唯一标识符
   */
  value: string

  /**
   * 面板标题
   */
  header?: string

  /**
   * 是否禁用该面板
   * @default false
   */
  disabled?: boolean

  /**
   * 是否使用无样式模式
   * @default false
   */
  unstyled?: boolean

  /**
   * 传递模板样式
   */
  pt?: AccordionItemPT
}

/**
 * Accordion组件模板样式类型
 */
export type AccordionPT = {
  root?: string
}

/**
 * AccordionItem组件模板样式类型
 */
export type AccordionItemPT = {
  root?: string
  header?: string
  trigger?: string
  title?: string
  icon?: string
  content?: string
  contentInner?: string
}

export const AccordionEmits = {
  'update:modelValue': () => true,
  change: () => true,
}

export const AccordionItemEmits = {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  click: (e: MouseEvent) => true,
  toggle: (expanded: boolean) => typeof expanded === 'boolean',
}
