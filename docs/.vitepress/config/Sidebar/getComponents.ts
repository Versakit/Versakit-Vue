import { DefaultTheme } from 'vitepress'

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Overview 组件总览',
      link: '/components/overview/',
    },
    {
      text: 'Components 组件',
      items: [
        { text: 'Alert 提示', link: '/components/alert/' },
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Badge 徽章', link: '/components/badge/' },
        { text: 'Card 卡片', link: '/components/card/' },
        { text: 'Chip 芯片', link: '/components/chip/' },
        { text: 'Divider 分割线', link: '/components/divider/' },
        { text: 'Dialog 对话框', link: '/components/dialog/' },
        { text: 'Drawer 抽屉', link: '/components/drawer/' },
        { text: 'PinInput 验证码输入', link: '/components/pininput/' },
        { text: 'Popover 气泡框', link: '/components/popover/' },
        { text: 'Segmented 分段器', link: '/components/segmented/' },
        { text: 'Slider 滑块', link: '/components/slider/' },
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Textarea 文本域', link: '/components/textarea/' },
        { text: 'Tabs 标签页', link: '/components/tabs/' },
        { text: 'Tooltip 提示', link: '/components/tooltip/' },
        { text: 'Kbd 键盘', link: '/components/kbd/' },
      ],
    },
  ]
}
