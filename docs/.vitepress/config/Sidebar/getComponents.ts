import { DefaultTheme } from 'vitepress'

interface ComponentItem {
  text: string
  link: string
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
  // 定义所有组件
  const componentItems: ComponentItem[] = [
    { text: 'Alert 提示', link: '/components/alert/' },
    { text: 'Avatar 头像', link: '/components/avatar/' },
    { text: 'Badge 徽章', link: '/components/badge/' },
    { text: 'Button 按钮', link: '/components/button/' },
    { text: 'Card 卡片', link: '/components/card/' },
    { text: 'Checkbox 多选框', link: '/components/checkbox/' },
    { text: 'Chip 芯片', link: '/components/chip/' },
    { text: 'Divider 分割线', link: '/components/divider/' },
    { text: 'Drawer 抽屉', link: '/components/drawer/' },
    { text: 'Input 输入框', link: '/components/input/' },
    { text: 'Kbd 键盘', link: '/components/kbd/' },
    { text: 'Modal 模态框', link: '/components/modal/' },
    { text: 'PinInput 验证码输入', link: '/components/pininput/' },
    { text: 'Popover 气泡框', link: '/components/popover/' },
    { text: 'Radio 单选框', link: '/components/radio/' },
    { text: 'Segmented 分段器', link: '/components/segmented/' },
    { text: 'Select 选择器', link: '/components/select/' },
    { text: 'Slider 滑块', link: '/components/slider/' },
    { text: 'Switch 开关', link: '/components/switch/' },
    { text: 'Tabs 标签页', link: '/components/tabs/' },
    { text: 'Textarea 文本域', link: '/components/textarea/' },
    { text: 'Tooltip 提示', link: '/components/tooltip/' },
    { text: 'Rate 评分', link: '/components/rate/' },
  ]

  // 对组件按字母顺序排序
  const sortedItems = sortComponentsByAlphabet(componentItems)

  return [
    {
      text: 'Overview 组件总览',
      link: '/components/overview/',
    },
    {
      text: 'Components 组件',
      items: sortedItems,
    },
  ]
}
