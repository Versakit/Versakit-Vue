import { DefaultTheme } from 'vitepress'

interface ComponentItem {
  text: string
  link: string
  category?: string
}

/**
 * 按照组件英文名称的字母顺序排序
 * @param items 组件项数组
 * @returns 排序后的数组
 */
const sortComponentsByAlphabet = (items: ComponentItem[]): ComponentItem[] => {
  return [...items].sort((a, b) => {
    // 提取英文名称（假设格式为"English 中文"）
    const getEnglishName = (text: string) => text.split(' ')[0]
    return getEnglishName(a.text).localeCompare(getEnglishName(b.text))
  })
}

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  // 定义所有组件及其分类
  const componentItems: ComponentItem[] = [
    { text: 'Alert 提示', link: '/components/alert/', category: 'feedback' },
    { text: 'Avatar 头像', link: '/components/avatar/', category: 'data' },
    { text: 'Badge 徽章', link: '/components/badge/', category: 'data' },
    { text: 'Button 按钮', link: '/components/button/', category: 'form' },
    { text: 'Card 卡片', link: '/components/card/', category: 'layout' },
    {
      text: 'Checkbox 多选框',
      link: '/components/checkbox/',
      category: 'form',
    },
    { text: 'Chip 芯片', link: '/components/chip/', category: 'data' },
    {
      text: 'Divider 分割线',
      link: '/components/divider/',
      category: 'layout',
    },
    { text: 'Drawer 抽屉', link: '/components/drawer/', category: 'feedback' },
    { text: 'Input 输入框', link: '/components/input/', category: 'form' },
    { text: 'Kbd 键盘', link: '/components/kbd/', category: 'other' },
    { text: 'Modal 模态框', link: '/components/modal/', category: 'feedback' },
    {
      text: 'InputOtp 验证码输入',
      link: '/components/inputopt/',
      category: 'form',
    },
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
      text: 'Segmented 分段器',
      link: '/components/segmented/',
      category: 'navigation',
    },
    { text: 'Select 选择器', link: '/components/select/', category: 'form' },
    { text: 'Slider 滑块', link: '/components/slider/', category: 'form' },
    { text: 'Switch 开关', link: '/components/switch/', category: 'form' },
    { text: 'Tabs 标签页', link: '/components/tabs/', category: 'navigation' },
    {
      text: 'Textarea 文本域',
      link: '/components/textarea/',
      category: 'form',
    },
    {
      text: 'Tooltip 提示',
      link: '/components/tooltip/',
      category: 'feedback',
    },
    { text: 'Rate 评分', link: '/components/rate/', category: 'form' },
    { text: 'Calendar 日历', link: '/components/calendar/', category: 'data' },
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
    {
      text: 'Skeleton 骨架屏',
      link: '/components/skeleton/',
      category: 'feedback',
    },
    {
      text: 'Paginator 分页器',
      link: '/components/paginator/',
      category: 'navigation',
    },
    { text: 'Panel 面板', link: '/components/panel/', category: 'layout' },
    {
      text: 'Breadcrumb 面包屑',
      link: '/components/breadcrumb/',
      category: 'navigation',
    },
    {
      text: 'Accordion 手风琴',
      link: '/components/accordion/',
      category: 'layout',
    },
    {
      text: 'InputTag 输入标签',
      link: '/components/inputtag/',
      category: 'form',
    },
    {
      text: 'Dropdown 下拉菜单',
      link: '/components/dropdown/',
      category: 'navigation',
    },
    {
      text: 'Carousel 轮播图',
      link: '/components/carousel/',
      category: 'navigation',
    },
    {
      text: 'Swap 调换',
      link: '/components/swap/',
      category: 'layout',
    },
    {
      text: 'RangeCalendar 范围日历',
      link: '/components/rangecalendar/',
      category: 'data',
    },
    {
      text: 'Splitter 分割器',
      link: '/components/splitter/',
      category: 'layout',
    },
    {
      text: 'Timeline 时间轴',
      link: '/components/timeline/',
      category: 'layout',
    },
  ]

  // 分类标签
  const categoryLabels: Record<string, string> = {
    form: '表单组件',
    feedback: '反馈组件',
    data: '数据展示',
    navigation: '导航组件',
    layout: '布局组件',
    other: '其他组件',
  }

  // 按分类对组件进行分组
  const componentsByCategory: Record<string, ComponentItem[]> = {}

  componentItems.forEach((item) => {
    const category = item.category || 'other'
    if (!componentsByCategory[category]) {
      componentsByCategory[category] = []
    }
    componentsByCategory[category].push(item)
  })

  // 对每个分类内的组件按字母顺序排序
  Object.keys(componentsByCategory).forEach((category) => {
    componentsByCategory[category] = sortComponentsByAlphabet(
      componentsByCategory[category],
    )
  })

  // 构建侧边栏配置
  const sidebarItems: DefaultTheme.SidebarItem[] = [
    {
      text: 'Overview 组件总览',
      link: '/components/overview/',
    },
  ]

  // 按照指定顺序添加分类
  const categoryOrder = [
    'form',
    'feedback',
    'data',
    'navigation',
    'layout',
    'other',
  ]

  categoryOrder.forEach((category) => {
    if (
      componentsByCategory[category] &&
      componentsByCategory[category].length > 0
    ) {
      sidebarItems.push({
        text: categoryLabels[category],
        collapsed: false,
        items: componentsByCategory[category],
      })
    }
  })

  return sidebarItems
}
