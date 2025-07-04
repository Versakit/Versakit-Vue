# Tabs 标签页

Tabs（标签页）组件是一种常见的界面模式，用于在有限空间内组织和切换多个内容面板，使信息呈现更具条理且易于浏览。用户通过点击或滑动标签快速在不同内容区域间切换，提升交互效率。

## 引入

```typescript
// 引入组件
import { Tab, TabItem } from '@versakit/vue'
```

## 基础用法

使用`Tab`和`TabItem`组件可以灵活地自定义标签页内容。

<demo vue="./example/index.vue" />

## API

### Tab Props

| 属性         | 说明                     | 类型                   | 默认值  |
| ------------ | ------------------------ | ---------------------- | ------- |
| initialIndex | 初始选中的标签索引       | `number`               | `0`     |
| size         | 标签页尺寸               | `'sm' \| 'md' \| 'lg'` | `'md'`  |
| disabled     | 是否禁用所有标签         | `boolean`              | `false` |
| block        | 是否块级显示（宽度100%） | `boolean`              | `false` |
| unstyled     | 是否使用无样式模式       | `boolean`              | `false` |
| pt           | 自定义样式               | `TabsPT`               | -       |

### TabItem Props

| 属性     | 说明           | 类型      | 默认值  |
| -------- | -------------- | --------- | ------- |
| label    | 标签文本       | `string`  | -       |
| disabled | 是否禁用该标签 | `boolean` | `false` |
| icon     | 图标URL        | `string`  | -       |

### Events

| 事件名 | 说明                     | 回调参数                  |
| ------ | ------------------------ | ------------------------- |
| change | 当前激活的标签改变时触发 | `(index: number) => void` |

### TabsPT 类型定义

```typescript
type TabsPT = {
	container?: string
	trigger?: string
	panel?: string
	icon?: string
}
```
