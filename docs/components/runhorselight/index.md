# Runhorselight 跑马灯组件

Runhorselight 是一个无限循环滚动的跑马灯组件，支持文本、图片、卡片等多种内容类型。它可以用于展示公告、广告、合作伙伴 Logo、图片轮播等场景，并提供多种自定义选项和流畅的动画效果。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/components-runhorselight--basic"/>

## 引入

```typescript
import { Runhorselight } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名        | 类型                                     | 默认值         | 说明                                           |
| ------------- | ---------------------------------------- | -------------- | ---------------------------------------------- |
| items        | `RunhorselightItem[]`                    | `[]`           | 跑马灯数据项，当传入默认插槽时可传入空数组      |
| prefix        | `RunhorselightAffix`                     | -              | 每一轮内容前展示的前缀，支持文字或图片等格式     |
| suffix        | `RunhorselightAffix`                     | -              | 每一轮内容后展示的后缀，支持文字或图片等格式     |
| direction     | `'left' \| 'right'`                      | `'left'`       | 滚动方向，left 为向左滚动，right 为向右滚动      |
| duration      | `number \| string`                       | `20`           | 完成一次滚动循环的时长（秒）                    |
| height        | `string`                                 | `'3rem'`       | 组件高度                                       |
| backgroundColor | `string`                               | `'transparent'` | 背景色                                         |
| textColor     | `string`                                 | `'#111827'`    | 默认文本色                                     |
| borderRadius  | `string`                                 | `'0.75rem'`    | 圆角大小                                       |
| gap           | `string`                                 | `'1rem'`       | 项间距                                         |
| pauseOnHover  | `boolean`                                | `true`         | 鼠标悬停时暂停滚动                             |
| loop          | `boolean`                                | `true`         | 是否无缝循环滚动                               |
| autofill      | `boolean`                                | `false`        | 图片模式下自动补充内容，避免首屏过空            |
| unstyled      | `boolean`                                | `false`        | 是否使用无样式模式                             |
| pt            | `RunhorselightPT`                        | -              | 自定义样式传递                                 |

### 事件

| 事件名         | 参数                                       | 说明                       |
| -------------- | ------------------------------------------ | -------------------------- |
| prefix-click   | `(payload: RunhorselightAffixClickPayload) => void` | 前缀点击事件               |
| suffix-click   | `(payload: RunhorselightAffixClickPayload) => void` | 后缀点击事件               |

### 插槽

| 插槽名   | 参数                                                | 说明                                   |
| -------- | --------------------------------------------------- | -------------------------------------- |
| default  | -                                                   | 默认内容插槽，用于自定义跑马灯内容      |
| item     | `(item: RunhorselightNormalizedItem) => void`       | 单个数据项的内容插槽                   |
| prefix   | `(item: RunhorselightNormalizedItem) => void`      | 前缀内容插槽                           |
| suffix   | `(item: RunhorselightNormalizedItem) => void`      | 后缀内容插槽                           |

### 类型定义

```typescript
// 跑马灯数据项类型
type RunhorselightItem = 
  | string  // 纯文本
  | {
      type?: 'text' | 'image' | 'card'  // 内容类型
      content?: string                    // 文本内容
      src?: string                         // 图片地址
      alt?: string                         // 图片描述
      title?: string                       // 卡片标题
      description?: string                 // 卡片描述
      backgroundColor?: string            // 背景色
      textColor?: string                   // 文本颜色
      borderRadius?: string                // 圆角大小
    }

// 样式传递类型
type RunhorselightPT = {
  root?: string              // 根元素样式类
  viewport?: string          // 视口容器样式类
  track?: string             // 轨道样式类
  group?: string             // 组样式类
  item?: string              // 单个项样式类
  image?: string             // 图片样式类
  card?: string              // 卡片样式类
  cardTitle?: string         // 卡片标题样式类
  cardDescription?: string    // 卡片描述样式类
  text?: string              // 文本样式类
}
```

## 使用场景

### 文本跑马灯
适用于公告、通知等纯文本内容的滚动展示。

### 图片跑马灯
适用于合作伙伴 Logo、产品图片等图片内容的循环展示。

### 卡片跑马灯
适用于新闻卡片、产品卡片等包含标题和描述的复合内容展示。

### 自定义内容
通过默认插槽可以完全自定义跑马灯的内容，支持任意 Vue 组件。

## 无障碍访问

Runhorselight 组件遵循 WCAG 2.1 标准，支持以下无障碍特性：

- 键盘可访问：所有交互元素都支持键盘导航
- ARIA 属性：正确使用 `aria-hidden` 属性来标识重复内容
- 焦点管理：支持合理的焦点顺序和可见的焦点状态
- 动画控制：提供 `pauseOnHover` 属性，允许用户暂停动画

## 性能优化

- 使用 `transform` 和 `will-change` 属性优化动画性能
- 通过 `requestAnimationFrame` 实现流畅的 60fps 动画
- 自动计算内容重复次数，确保无缝滚动的同时最小化 DOM 节点
- 支持 `ResizeObserver` 自动响应容器尺寸变化

## 暗黑模式

组件完全支持暗黑模式，会自动根据系统主题或手动设置的暗黑模式调整样式。通过 Tailwind CSS 的 `dark:` 前缀可以实现自定义的暗黑模式样式。