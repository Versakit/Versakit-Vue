import { DefaultTheme } from 'vitepress'

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Layout 布局组件',
      items: [
        { text: 'Layout 布局', link: '/components/layout/' },
        { text: 'Flex 弹性布局', link: '/components/flex/' },
        { text: 'Container 布局容器', link: '/components/container/' },
      ],
    },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Text 文本', link: '/components/text/' },
        { text: 'Divider 分割线', link: '/components/divider/' },
        { text: 'Icon 图标', link: '/components/icons/' },
        { text: 'Scrollbar 滚动条', link: '/components/scrollbar/' },
      ],
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'Input 输入框', link: '/components/input/' },
        { text: 'InputTag 标签输入框', link: '/components/inputtag/' },
        { text: 'InputOtp 个人识别码', link: '/components/inputotp/' },
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Radio 单选框', link: '/components/radio/' },
        { text: 'Textarea 文本域', link: '/components/textarea/' },
        { text: 'Slider 滑块', link: '/components/slider/' },
        { text: 'CheckBox 复选框', link: '/components/checkBox/' },
        { text: 'Rate 评分', link: '/components/rate/' },
      ],
    },
    {
      text: 'Data 数据展示组件',
      items: [
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Carousel 走马灯', link: '/components/carousel/' },
        { text: 'Card 卡片', link: '/components/card/' },
        { text: 'Image 图片', link: '/components/image/' },
        { text: 'Tag 标签', link: '/components/tag/' },
        { text: 'Badge 徽标', link: '/components/badge/' },
        { text: 'Panel 面板', link: '/components/panel/' },
        { text: 'Segmented 分段控制器', link: '/components/segmented/' },
        { text: 'Collapse 折叠面板', link: '/components/collapse/' },
        { text: 'Progress 进度条', link: '/components/progress/' },
        { text: 'GradientText 渐变文字', link: '/components/gradienttext/' },
        { text: 'Timeline 时间线', link: '/components/timeline/' },
        { text: 'Table 表格', link: '/components/table/' },
        { text: 'Calendar 日历', link: '/components/calendar/' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton/' },
        { text: 'Pagination 分页', link: '/components/pagination/' },
        { text: 'Splitter 分配器', link: '/components/splitter/' },
        { text: 'NoticeBar 通知栏', link: '/components/noticebar/' },
        { text: 'ColorPicker 颜色选择器', link: '/components/colorpicker/' },
      ],
    },
    {
      text: 'Navigation 导航',
      items: [
        { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' },
        { text: 'Steps 步骤条', link: '/components/steps/' },
        { text: 'Backtop 回到顶部', link: '/components/backtop/' },
        {
          text: 'Tab 标签页',
          link: '/components/tab/',
        },
      ],
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        {
          text: 'Dialog 对话框',
          link: '/components/dialog/',
        },
        {
          text: 'Drawer 抽屉',
          link: '/components/drawer/',
        },
        {
          text: 'Message 消息提示',
          link: '/components/message/',
        },
        {
          text: 'Notification 通知',
          link: '/components/notification/',
        },
        {
          text: 'Tooltip 文字提示',
          link: '/components/tooltip/',
        },
        {
          text: 'Result 结果页',
          link: '/components/result/',
        },
        {
          text: 'Empty 无内容',
          link: '/components/empty/',
        },
      ],
    },
  ]
}
