# Progress

Progress 是一个进度条组件，用于展示操作的当前进度、状态和完成程度，帮助用户了解长时间任务的执行情况，常用于文件上传、数据加载、操作处理等场景。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-progress-%E8%BF%9B%E5%BA%A6%E6%9D%A1--basic"/>

## 引入

```typescript
import { Progress } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名        | 说明               | 类型                                                      | 默认值    |
| ------------- | ------------------ | --------------------------------------------------------- | --------- |
| value         | 进度值，范围0-100  | number                                                    | 0         |
| max           | 最大值             | number                                                    | 100       |
| showText      | 是否显示进度文本   | boolean                                                   | false     |
| variant       | 进度条样式变体     | 'default' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' |
| size          | 进度条大小         | 'sm' \| 'md' \| 'lg'                                      | 'md'      |
| shape         | 进度条形状         | 'flat' \| 'rounded' \| 'pill'                             | 'rounded' |
| striped       | 是否显示条纹效果   | boolean                                                   | false     |
| animated      | 是否显示动画效果   | boolean                                                   | false     |
| indeterminate | 是否为不确定状态   | boolean                                                   | false     |
| unstyled      | 是否使用无样式模式 | boolean                                                   | false     |
| pt            | 传递模板样式       | ProgressPT                                                | -         |

### 事件

| 事件名       | 说明           | 回调参数                |
| ------------ | -------------- | ----------------------- |
| update:value | 进度变化时触发 | (value: number) => void |

### 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| text   | 自定义进度文本 |

### 样式定制

当使用 `unstyled` 模式时，可以通过 `pt` 属性传递自定义样式：

```typescript
interface ProgressPT {
	root?: string
	container?: string
	bar?: string
	text?: string
}
```
