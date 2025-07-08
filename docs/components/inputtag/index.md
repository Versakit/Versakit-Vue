# InputTag 标签输入框

InputTag 是一个用于输入和展示多个标签的组件，常用于关键词、标签、邮箱等需要多值输入的场景。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-inputtag-%E6%A0%87%E7%AD%BE%E8%BE%93%E5%85%A5%E6%A1%86--basic"/>

## 引入

```typescript
import { InputTag } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名      | 说明               | 类型                                | 默认值      |
| ----------- | ------------------ | ----------------------------------- | ----------- |
| modelValue  | 标签值数组         | `string[]`                          | `[]`        |
| placeholder | 占位符文本         | `string`                            | `''`        |
| disabled    | 是否禁用           | `boolean`                           | `false`     |
| readonly    | 是否只读           | `boolean`                           | `false`     |
| size        | 输入框尺寸         | `'small' \| 'default' \| 'large'`   | `'default'` |
| prefixIcon  | 前缀图标           | `string`                            | -           |
| suffixIcon  | 后缀图标           | `string`                            | -           |
| closable    | 是否可关闭标签     | `boolean`                           | `true`      |
| maxCount    | 最大标签数量       | `number`                            | -           |
| showCount   | 是否显示数量统计   | `boolean`                           | `false`     |
| autofocus   | 自动获取焦点       | `boolean`                           | `false`     |
| status      | 输入框状态         | `'error' \| 'warning' \| 'success'` | -           |
| unstyled    | 是否使用无样式模式 | `boolean`                           | `false`     |
| pt          | 传递模板样式       | `InputTagPT`                        | -           |

### 事件

| 事件名            | 说明             | 参数                             |
| ----------------- | ---------------- | -------------------------------- |
| update:modelValue | 更新标签值时触发 | `(value: string[])`              |
| change            | 标签值变化时触发 | `(value: string[])`              |
| add               | 添加标签时触发   | `(value: string)`                |
| remove            | 移除标签时触发   | `(value: string, index: number)` |
| focus             | 获得焦点时触发   | `(event: FocusEvent)`            |
| blur              | 失去焦点时触发   | `(event: FocusEvent)`            |

### 插槽

| 名称   | 说明     |
| ------ | -------- |
| prefix | 前缀内容 |
| suffix | 后缀内容 |

### 样式接口

```typescript
type InputTagPT = {
	root?: string
	wrapper?: string
	input?: string
	prefix?: string
	suffix?: string
	tag?: string
	tagClose?: string
	count?: string
}
```
