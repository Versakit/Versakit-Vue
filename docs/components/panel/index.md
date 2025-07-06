# Panel

Panel 是一个可折叠的内容容器组件，用于组织和展示信息，支持多种样式变体和自定义配置。它可以有效地节省页面空间，提高用户体验，常用于分组展示相关内容、FAQ、设置面板等场景。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-panel-%E9%9D%A2%E6%9D%BF--basic"/>

## 引入

```typescript
import { Panel } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名           | 说明               | 类型                                     | 默认值    |
| ---------------- | ------------------ | ---------------------------------------- | --------- |
| title            | 面板标题           | string                                   | -         |
| variant          | 面板样式变体       | 'default' \| 'bordered' \| 'elevated'    | 'default' |
| padding          | 内边距大小         | 'none' \| 'sm' \| 'md' \| 'lg'           | 'md'      |
| radius           | 圆角大小           | 'none' \| 'sm' \| 'md' \| 'lg' \| 'full' | 'md'      |
| collapsible      | 是否可折叠         | boolean                                  | false     |
| defaultCollapsed | 是否默认折叠       | boolean                                  | false     |
| bordered         | 是否显示边框       | boolean                                  | true      |
| unstyled         | 是否使用无样式模式 | boolean                                  | false     |
| pt               | 传递模板样式       | PanelPT                                  | -         |

### 事件

| 事件名           | 说明               | 回调参数                     |
| ---------------- | ------------------ | ---------------------------- |
| update:collapsed | 折叠状态变化时触发 | (collapsed: boolean) => void |
| collapse         | 折叠状态变化时触发 | (collapsed: boolean) => void |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 面板内容       |
| title   | 自定义标题     |
| icon    | 自定义折叠图标 |

### 样式定制

当使用 `unstyled` 模式时，可以通过 `pt` 属性传递自定义样式：

```typescript
interface PanelPT {
	root?: string
	header?: string
	title?: string
	content?: string
	icon?: string
}
```
