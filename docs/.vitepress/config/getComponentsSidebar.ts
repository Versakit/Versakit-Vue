import { DefaultTheme } from 'vitepress'

export const getComponentsSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: 'Layout 布局组件',
      items: [
        { text: 'Container 布局容器', link: '/components/container/' },
        { text: 'Flex 弹性布局', link: '/components/flex/' },
        { text: 'Layout 布局', link: '/components/layout/' },
      ],
    },
    {
      text: 'Basic 基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Divider 分割线', link: '/components/divider/' },
      ],
    },
    {
      text: 'Form 表单组件',
      items: [
        { text: 'CheckBox 复选框', link: '/components/checkbox/' },
        { text: 'Color Picker 取色器', link: '/components/colorpicker/' },
        { text: 'Input 输入框', link: '/components/input/' },
        { text: 'Input Number 数字输入框', link: '/components/inputnumber/' },
        { text: 'InputOtp 个人识别码', link: '/components/inputotp/' },
        { text: 'InputTag 标签输入框', link: '/components/inputtag/' },
        { text: 'Radio 单选框', link: '/components/radio/' },
        { text: 'Select 选择器', link: '/components/select/' },
        { text: 'Slider 滑块', link: '/components/slider/' },
        { text: 'Switch 开关', link: '/components/switch/' },
        { text: 'Textarea 文本域', link: '/components/textarea/' },
        { text: 'Upload 上传', link: '/components/upload/' },
        { text: 'Rate 评分', link: '/components/rate/' },
      ],
    },
    {
      text: 'Date 时间',
      items: [
        { text: 'Calendar 日历', link: '/components/calendar/' },
        { text: 'Date Picker 日期选择器', link: '/components/datepicker/' },
        {
          text: 'DateTime Picker 日期时间选择器',
          link: '/components/datetimepicker/',
        },
        { text: 'Time Picker 时间选择器', link: '/components/timepicker/' },
        { text: 'Time Select 时间选择器', link: '/components/timeselect/' },
      ],
    },
    {
      text: 'Data 数据展示组件',
      items: [
        { text: 'Avatar 头像', link: '/components/avatar/' },
        { text: 'Badge 徽标', link: '/components/badge/' },
        { text: 'Card 卡片', link: '/components/card/' },
        { text: 'Carousel 走马灯', link: '/components/carousel/' },
        { text: 'Collapse 折叠面板', link: '/components/collapse/' },
        { text: 'Descriptions 描述列表', link: '/components/descriptions/' },
        { text: 'Image 图片', link: '/components/image/' },
        { text: 'NoticeBar 通知栏', link: '/components/noticebar/' },
        { text: 'Pagination 分页', link: '/components/pagination/' },
        { text: 'Panel 面板', link: '/components/panel/' },
        { text: 'Progress 进度条', link: '/components/progress/' },
        { text: 'Segmented 分段控制器', link: '/components/segmented/' },
        { text: 'Skeleton 骨架屏', link: '/components/skeleton/' },
        { text: 'Splitter 分配器', link: '/components/splitter/' },
        { text: 'Table 表格', link: '/components/table/' },
        { text: 'Tag 标签', link: '/components/tag/' },
        { text: 'Timeline 时间线', link: '/components/timeline/' },
      ],
    },
    {
      text: 'Navigation 导航',
      items: [
        { text: 'Backtop 回到顶部', link: '/components/backtop/' },
        { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb/' },
        { text: 'Dropdown 下拉菜单', link: '/components/dropdown/' },
        { text: 'Steps 步骤条', link: '/components/steps/' },
        { text: 'Tabs 标签页', link: '/components/tab/' },
      ],
    },
    {
      text: 'Feedback 反馈组件',
      items: [
        { text: 'Dialog 对话框', link: '/components/dialog/' },
        { text: 'Drawer 抽屉', link: '/components/drawer/' },
        { text: 'Message 消息提示', link: '/components/message/' },
        { text: 'Notification 通知', link: '/components/notification/' },
        { text: 'Popover 弹出框', link: '/components/popover/' },
        { text: 'Tooltip 文字提示', link: '/components/tooltip/' },
      ],
    },
  ]
}
