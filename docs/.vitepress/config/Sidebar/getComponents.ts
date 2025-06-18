import { DefaultTheme } from 'vitepress'

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Data 数据展示',
      items: [
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Badge 徽章', link: '/components/badge/' },
        { text: 'Segmented 分段器', link: '/components/segmented/' },
      ],
    },
    {
      text: 'Navigation 导航',
      items: [{ text: 'Tabs 标签页', link: '/components/tabs/' }],
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        { text: 'Dialog 对话框', link: '/components/dialog/' },
        { text: 'Drawer 抽屉', link: '/components/drawer/' },
        { text: 'Popover 气泡框', link: '/components/popover/' },
        { text: 'Tooltip 提示', link: '/components/tooltip/' },
      ],
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'PinInput 验证码输入', link: '/components/pininput/' },
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Slider 滑块', link: '/components/slider/' },
      ],
    },
  ]
}
