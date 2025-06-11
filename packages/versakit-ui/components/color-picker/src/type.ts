export type ColorFormat = 'hex' | 'rgb' | 'hsl'

export interface ColorPickerProps {
  /** 颜色值 */
  modelValue?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 默认打开的面板模式 */
  defaultMode?: 'picker' | 'palette'
  /** 颜色格式 */
  format?: ColorFormat
  /** 是否显示颜色值输入框 */
  showInput?: boolean
  /** 预设的颜色选项 */
  presets?: string[]
  /** 是否显示透明度滑块 */
  showAlpha?: boolean
  /** 是否使用弹出模式 */
  popover?: boolean
  /** 是否使用无样式模式 */
  unstyled?: boolean
}

// PT (Pass Through) 类型定义
export type ColorPickerPassThroughAttributes = {
  root?: Record<string, unknown>
  trigger?: Record<string, unknown>
  panel?: Record<string, unknown>
  saturation?: Record<string, unknown>
  hue?: Record<string, unknown>
  alpha?: Record<string, unknown>
  presets?: Record<string, unknown>
  input?: Record<string, unknown>
}

export interface ColorPickerSlots {
  trigger?: (props: { color: string; open: boolean }) => unknown
  footer?: () => unknown
}

// 内部使用的颜色状态
export interface ColorState {
  h: number // 色相 (0-360)
  s: number // 饱和度 (0-100)
  v: number // 亮度 (0-100)
  a: number // 透明度 (0-1)
}
