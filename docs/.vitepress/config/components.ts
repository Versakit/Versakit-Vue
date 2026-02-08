import type { DefaultTheme } from 'vitepress'

/**
 * 组件状态
 */
export type ComponentStatus = 'stable' | 'beta' | 'deprecated' | 'wip'

/**
 * 组件分类
 */
export type ComponentCategory =
  | 'form'
  | 'feedback'
  | 'data'
  | 'navigation'
  | 'layout'
  | 'other'

/**
 * 组件元数据接口
 */
export interface ComponentMetadata {
  /** 组件显示名称（格式：英文 中文） */
  text: string
  /** 组件文档链接 */
  link: string
  /** 组件分类 */
  category: ComponentCategory
  /** 组件状态 */
  status?: ComponentStatus
  /** 组件描述 */
  description?: string
  /** 自定义排序权重（数字越小越靠前） */
  order?: number
}

/**
 * 分类标签映射
 */
export const categoryLabels: Record<ComponentCategory, string> = {
  form: '表单组件',
  feedback: '反馈组件',
  data: '数据展示',
  navigation: '导航组件',
  layout: '布局组件',
  other: '其他组件',
}

/**
 * 分类显示顺序
 */
export const categoryOrder: ComponentCategory[] = [
  'form',
  'feedback',
  'data',
  'navigation',
  'layout',
  'other',
]

/**
 * 所有组件元数据配置
 * 这是组件信息的单一数据源
 */
export const componentsMetadata: ComponentMetadata[] = [
  // 表单组件
  { text: 'Button 按钮', link: '/components/button/', category: 'form' },
  {
    text: 'Checkbox 多选框',
    link: '/components/checkbox/',
    category: 'form',
  },
  { text: 'Input 输入框', link: '/components/input/', category: 'form' },
  {
    text: 'InputOtp 验证码输入',
    link: '/components/inputopt/',
    category: 'form',
  },
  {
    text: 'InputTag 输入标签',
    link: '/components/inputtag/',
    category: 'form',
  },
  { text: 'Select 选择器', link: '/components/select/', category: 'form' },
  { text: 'Slider 滑块', link: '/components/slider/', category: 'form' },
  { text: 'Switch 开关', link: '/components/switch/', category: 'form' },
  {
    text: 'Textarea 文本域',
    link: '/components/textarea/',
    category: 'form',
  },
  { text: 'Rate 评分', link: '/components/rate/', category: 'form' },
  {
    text: 'DatePicker 日期选择器',
    link: '/components/datepicker/',
    category: 'form',
  },
  {
    text: 'DateTimePicker 日期时间选择器',
    link: '/components/datetimepicker/',
    category: 'form',
  },
  {
    text: 'TimePicker 时间选择器',
    link: '/components/timepicker/',
    category: 'form',
  },
  {
    text: 'TimeSelect 时间选择器',
    link: '/components/timeselect/',
    category: 'form',
  },

  // 反馈组件
  { text: 'Alert 提示', link: '/components/alert/', category: 'feedback' },
  { text: 'Drawer 抽屉', link: '/components/drawer/', category: 'feedback' },
  { text: 'Modal 模态框', link: '/components/modal/', category: 'feedback' },
  {
    text: 'Popover 气泡框',
    link: '/components/popover/',
    category: 'feedback',
  },
  {
    text: 'Progress 进度条',
    link: '/components/progress/',
    category: 'feedback',
  },
  {
    text: 'Skeleton 骨架屏',
    link: '/components/skeleton/',
    category: 'feedback',
  },
  {
    text: 'Tooltip 提示',
    link: '/components/tooltip/',
    category: 'feedback',
  },

  // 数据展示
  { text: 'Avatar 头像', link: '/components/avatar/', category: 'data' },
  { text: 'Badge 徽章', link: '/components/badge/', category: 'data' },
  { text: 'Chip 芯片', link: '/components/chip/', category: 'data' },
  { text: 'Calendar 日历', link: '/components/calendar/', category: 'data' },
  {
    text: 'RangeCalendar 范围日历',
    link: '/components/rangecalendar/',
    category: 'data',
  },
  { text: 'Image 图片', link: '/components/image/', category: 'data' },
  {
    text: 'Timeline 时间线',
    link: '/components/timeline/',
    category: 'data',
  },

  // 导航组件
  {
    text: 'Link 链接',
    link: '/components/link/',
    category: 'navigation',
  },
  {
    text: 'Segmented 分段器',
    link: '/components/segmented/',
    category: 'navigation',
  },
  { text: 'Tabs 标签页', link: '/components/tabs/', category: 'navigation' },
  {
    text: 'Paginator 分页器',
    link: '/components/paginator/',
    category: 'navigation',
  },
  {
    text: 'Breadcrumb 面包屑',
    link: '/components/breadcrumb/',
    category: 'navigation',
  },
  {
    text: 'Dropdown 下拉菜单',
    link: '/components/dropdown/',
    category: 'navigation',
  },

  // 布局组件
  { text: 'Card 卡片', link: '/components/card/', category: 'layout' },
  {
    text: 'Divider 分割线',
    link: '/components/divider/',
    category: 'layout',
  },
  { text: 'Panel 面板', link: '/components/panel/', category: 'layout' },
  {
    text: 'Accordion 手风琴',
    link: '/components/accordion/',
    category: 'layout',
  },
  { text: 'Swap 调换', link: '/components/swap/', category: 'layout' },
  {
    text: 'Splitter 分割器',
    link: '/components/splitter/',
    category: 'layout',
  },

  // 其他组件
  { text: 'Kbd 键盘', link: '/components/kbd/', category: 'other' },
  { text: 'Carousel 轮播', link: '/components/carousel/', category: 'other' },
]

/**
 * 按照组件英文名称的字母顺序排序
 * @param items 组件项数组
 * @returns 排序后的数组
 */
export function sortComponentsByAlphabet(
  items: ComponentMetadata[],
): ComponentMetadata[] {
  return [...items].sort((a, b) => {
    // 提取英文名称（假设格式为"English 中文"）
    const getEnglishName = (text: string) => text.split(' ')[0]
    return getEnglishName(a.text).localeCompare(getEnglishName(b.text))
  })
}

/**
 * 将组件元数据转换为侧边栏项
 */
export function componentToSidebarItem(
  component: ComponentMetadata,
): DefaultTheme.SidebarItem {
  return {
    text: component.text,
    link: component.link,
  }
}
