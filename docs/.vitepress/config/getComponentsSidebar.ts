import { DefaultTheme } from 'vitepress'

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Navigation 导航',
      items: [{ text: 'Tabs 标签页', link: '/components/tabs/' }],
    },
    {
      text: 'Feedback 反馈组件',
      items: [{ text: 'Dialog 对话框', link: '/components/dialog/' }],
    },
    {
      text: 'Form 表单组件',
      items: [{ text: 'PinInput 验证码输入', link: '/components/pininput/' }],
    },
  ]
}
