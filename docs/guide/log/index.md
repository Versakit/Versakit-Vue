# 更新日志

此页面记录了 Versakit 的版本迭代历史，包括新特性、重要更新和问题修复。

## v0.4.0 Latest 🎉

`2025-07-05`

### 🚀 核心升级

- **全面基于 Tailwind CSS 重构**

  - 整体组件系统基于 Tailwind CSS 重新设计
  - 提供更一致的设计语言和开发体验
  - 优化组件样式系统，减少冗余代码
  - 支持深色模式和主题定制

- **组件样式定制能力增强**

  - 引入 `unstyled` 模式，支持完全自定义组件样式
  - 新增 `PT` (Pass Through) 样式传递机制，精确控制组件各部分样式
  - 提供丰富的样式变体和预设配置
  - 支持组件级别的主题定制

- **文档官网全面重构**
  - 全新的文档网站设计和交互体验
  - 更丰富的示例和使用说明
  - 提供在线演示和代码编辑器

### ✨ 新特性

- **组件无头化改造**

  - 所有组件支持无头化设计，分离逻辑与样式
  - 提供更灵活的自定义能力和更好的性能
  - 支持自定义主题和样式覆盖

- **新增高质量组件**

  - **Panel 面板组件**：支持折叠、多种样式变体、自定义标题和内容
  - **Paginator 分页器**：支持多种大小、形状和样式变体，页码跳转等功能
  - 其他组件升级：Checkbox、Dropdown、DateTimePicker 等

- **组件 UI 全面优化**
  - 所有组件视觉设计升级，更加美观现代
  - 优化交互细节，提升用户体验
  - 增强组件动效和过渡效果
  - 提高组件可访问性和键盘导航支持

### 🔥 Breaking Changes

- 包名更改：从 `@versakit/ui` 变更为 `@versakit/vue`
- 样式引入方式变更：使用 `@versakit/vue/style` 替代 `@versakit/ui/dist/ui.css`
- 组件 API 优化调整，引入一致的属性命名规范
- 删除 `GradientText` 渐变文字组件
- 详见[迁移指南](#)

### 🐛 问题修复

- 修复组件相关 bugs
- 优化组件样式问题
- 提高组件渲染性能
- 解决SSR兼容性问题

## v0.3.x

### 0.3.10 (2024-03-15)

<br />

#### ✨ 新特性

- **消息通知优化**

  - Notification 和 Message 组件新增堆叠卡片效果
  - 提供更好的视觉体验

- **组件无头化**
  - Calendar、Tabs、Breadcrumb 等组件完成无头化
  - Avatar 组件新增兜底背景色
  - Icon 组件支持可旋转

### 0.3.9 (2024-03-10)

#### 🎯 核心更新

- **组件无头化**
  - Card、Panel、Badge 等组件完成无头化改造
  - 提供更灵活的自定义能力

#### 🔧 功能优化

- 新增数据脱敏指令
- 优化组件文档

#### 🔥 Breaking Changes

- 删除 Text、Result、Empty、Scrollbar 等组件
- 建议使用对应的替代方案

### 0.3.7 - 0.3.8 (2024-03-05)

#### 💫 重要更新

- 组件前缀统一更改为 `VK`
- 增强无障碍访问支持
- 新增指令包
- Tabs 组件重构

### 0.3.5 - 0.3.6 (2024-02-25)

#### ✨ 新特性

- **新增组件**
  - Upload 上传组件
  - Popover 弹出框
  - Select 选择器
  - Dropdown 下拉菜单
  - DateTime/Time Picker 时间选择器
  - Color Picker 取色器

#### 🔄 重构优化

- Steps 步骤条重构
- Checkbox 多选框重构

## v0.2.x

<br />

### 0.2.11 (2024-02-15)

#### 🛠️ 优化

- 优化打包配置
- 增加单元测试覆盖率

#### ✨ 新特性

- Image 图片组件
- Checkbox 复选框组件

### 0.2.7 - 0.2.10 (2024-02-01)

#### 🎯 核心更新

- 新增主题包支持
- 按钮新增无样式属性

#### ✨ 新组件

- Timeline 时间线
- Carousel 走马灯
- Skeleton 骨架屏
- Pagination 分页
- Calendar 日历
- InputOtp 验证码输入

### 0.2.5 (2024-01-20)

#### 🔥 重大更新

- Layout 布局组件重构
- Button 按钮组件重构
- 完善 TS 类型支持

#### ✨ 新特性

- Flex 弹性布局
- Slider 滑块
- Progress 进度条
- Table 表格
- Tooltip 文字提示
- Segmented 分段控制器

## v0.1.x

<br />

### 0.1.7 - 0.1.9 (2024-01-10)

#### 🌙 亮点更新

- 暗黑模式支持
- Input、Switch、Radio 等基础组件
- Avatar、Card 等展示组件

### 0.1.5 - 0.1.6 (2024-01-05)

#### ✨ 新特性

- Dialog 对话框
- Drawer 抽屉
- Message 消息提示
- Notification 通知
- Tag 标签
- Backtop 回到顶部
- Tabs 标签页

### 0.1.0 - 0.1.3 (2024-01-01)

#### 🎯 初始版本

- 基础组件：Button、Text、Link、Divider
- Icons 图标库
- Ripple 水波纹效果
- 引入 Vitest 测试框架
- 使用 Vitepress 构建文档

## 🔍 更新指南

- 查看完整的[组件文档](/components)
- 了解[版本升级指南](/guide/migration)
- 反馈[问题或建议](https://github.com/versakit/issues)
