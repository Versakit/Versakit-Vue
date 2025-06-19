/**
 * Switch 组件的属性定义
 */
export interface SwitchProps {
  /**
   * 开关状态值，必须通过v-model双向绑定
   */
  modelValue: boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 是否锁定状态（不允许切换）
   * @default true
   */
  locked?: boolean

  /**
   * 开关大小
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * 开关颜色主题
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'

  /**
   * 表单元素名称
   */
  name?: string

  /**
   * 元素ID
   */
  id?: string

  /**
   * 是否必填
   */
  required?: boolean

  /**
   * 无障碍访问标签
   */
  ariaLabel?: string
}

/**
 * Switch 事件类型
 */
export interface SwitchEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}
