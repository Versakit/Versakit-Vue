export interface RateProps {
  /**
   * 评分值
   * @default 0
   */
  modelValue?: number

  /**
   * 最大评分值
   * @default 5
   */
  max?: number

  /**
   * 是否允许半选
   * @default false
   */
  allowHalf?: boolean

  /**
   * 是否为只读状态
   * @default false
   */
  readonly?: boolean

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean

  /**
   * 评分图标的颜色
   * @default 'yellow'
   */
  color?: 'yellow' | 'blue' | 'green' | 'red' | 'purple'

  /**
   * 未选中时的颜色
   * @default 'gray'
   */
  voidColor?: string

  /**
   * 评分图标的大小
   * @default 'default'
   */
  size?: 'small' | 'default' | 'large'

  /**
   * 自定义字符
   * @default undefined
   */
  character?: string

  /**
   * 是否显示当前分数
   * @default false
   */
  showScore?: boolean

  /**
   * 分数显示的格式化函数
   */
  formatTooltip?: (value: number) => string
}

export const RateEmits = {
  'update:modelValue': (value: number) => typeof value === 'number',
  change: (value: number) => typeof value === 'number',
  'hover-change': (value: number) => typeof value === 'number',
}

export type IRateEmits = typeof RateEmits
