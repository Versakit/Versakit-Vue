# Paginator

Paginator 是一个分页导航组件，用于在大量数据中进行页面切换和导航。它提供了多种样式变体和自定义配置，支持不同的分页场景，如表格数据分页、内容列表分页等。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-paginator-%E5%88%86%E9%A1%B5%E5%99%A8--basic"/>

## 引入

```typescript
import { Paginator } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名              | 说明                       | 类型                              | 默认值    |
| ------------------- | -------------------------- | --------------------------------- | --------- |
| modelValue          | 当前页码                   | number                            | 1         |
| totalPages          | 总页数                     | number                            | -         |
| visiblePageCount    | 显示的页码按钮数量         | number                            | 5         |
| showEndButtons      | 是否显示首页和尾页按钮     | boolean                           | true      |
| showPrevNextButtons | 是否显示上一页和下一页按钮 | boolean                           | true      |
| showJumper          | 是否显示页码跳转输入框     | boolean                           | false     |
| size                | 分页器大小                 | 'sm' \| 'md' \| 'lg'              | 'md'      |
| variant             | 分页器样式变体             | 'default' \| 'outline' \| 'text'  | 'default' |
| shape               | 分页器形状                 | 'square' \| 'rounded' \| 'circle' | 'rounded' |
| disabled            | 是否禁用                   | boolean                           | false     |
| unstyled            | 是否使用无样式模式         | boolean                           | false     |
| pt                  | 传递模板样式               | PaginatorPT                       | -         |

### 事件

| 事件名            | 说明           | 回调参数               |
| ----------------- | -------------- | ---------------------- |
| update:modelValue | 页码变化时触发 | (page: number) => void |
| change            | 页码变化时触发 | (page: number) => void |

### 插槽

| 插槽名       | 说明             |
| ------------ | ---------------- |
| first-button | 自定义首页按钮   |
| prev-button  | 自定义上一页按钮 |
| next-button  | 自定义下一页按钮 |
| last-button  | 自定义尾页按钮   |

### 样式定制

当使用 `unstyled` 模式时，可以通过 `pt` 属性传递自定义样式：

```typescript
interface PaginatorPT {
	root?: string
	list?: string
	item?: string
	button?: string
	activeButton?: string
	prevButton?: string
	nextButton?: string
	firstButton?: string
	lastButton?: string
	ellipsis?: string
	jumper?: string
	jumperInput?: string
	jumperButton?: string
}
```
