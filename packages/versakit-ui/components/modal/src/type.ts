export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

// PT (Pass Through) 类型定义
export type ModalPassThroughAttributes = {
  root?: Record<string, unknown>
  wrapper?: Record<string, unknown>
  overlay?: Record<string, unknown>
  header?: Record<string, unknown>
  title?: Record<string, unknown>
  closeButton?: Record<string, unknown>
  body?: Record<string, unknown>
  footer?: Record<string, unknown>
  confirmButton?: Record<string, unknown>
  cancelButton?: Record<string, unknown>
}

export interface ModalProps {
  /** 是否显示模态框 */
  modelValue?: boolean
  /** 模态框标题 */
  title?: string
  /** 模态框尺寸 */
  size?: ModalSize
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 点击遮罩层是否关闭模态框 */
  closeOnClickOverlay?: boolean
  /** 是否添加遮罩层 */
  overlay?: boolean
  /** 是否显示模态框头部 */
  showHeader?: boolean
  /** 是否显示模态框底部 */
  showFooter?: boolean
  /** 是否允许按Esc关闭模态框 */
  closeOnEsc?: boolean
  /** 是否为圆角模态框 */
  rounded?: boolean
  /** 是否居中显示 */
  centered?: boolean
  /** 是否启用无障碍功能 */
  a11y?: boolean
  /** 是否固定高度 */
  fixedHeight?: boolean
  /** 最大高度 */
  maxHeight?: string
  /** 自定义宽度 */
  width?: string
  /** 模态框层级 */
  zIndex?: number
  /** 自定义类名 */
  customClass?: string
  /** 是否显示确认按钮 */
  showConfirmButton?: boolean
  /** 是否显示取消按钮 */
  showCancelButton?: boolean
  /** 确认按钮文本 */
  confirmButtonText?: string
  /** 取消按钮文本 */
  cancelButtonText?: string
  /** 确认按钮类型 */
  confirmButtonVariant?:
    | 'primary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'default'
  /** 取消按钮类型 */
  cancelButtonVariant?:
    | 'primary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'default'
  /** 是否全屏模态框 */
  fullscreen?: boolean
  /** 遮罩层透明度 */
  overlayOpacity?: number
  /** 是否使用无样式模式 */
  unstyled?: boolean
  /** Pass Through 属性 */
  pt?: ModalPassThroughAttributes
}

// PT (Pass Through) 类型定义

export interface ModalSlots {
  default?: () => unknown
  title?: () => unknown
  closeButton?: () => unknown
  footer?: () => unknown
  confirmButton?: () => unknown
  cancelButton?: () => unknown
}
