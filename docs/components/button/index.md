# Button 按钮

按钮是用户界面中最基本的交互元素，用于触发操作或事件。

## 引入

```js
import { VKButton } from 'versakit-ui'
```

## 基础用法

使用`variant`属性来定义按钮的样式。

:::preview 基础按钮

demo-preview=./example/basic.vue

:::

## 尺寸

使用`size`属性设置按钮的大小。

:::preview 按钮尺寸 || 按钮提供了三种不同的尺寸，适应不同的场景需求

demo-preview=./example/size.vue

:::

## 禁用状态

当`disabled`属性为`true`时，按钮将变为禁用状态。

:::preview 禁用状态

demo-preview=./example/disabled.vue

:::

## 事件

按钮支持点击事件。

:::preview 事件处理 || 点击按钮可以触发自定义事件

demo-preview=./example/event.vue

:::

## API

### 属性

| 属性名   | 说明         | 类型                                                 | 默认值      |
| -------- | ------------ | ---------------------------------------------------- | ----------- |
| variant  | 按钮样式变体 | `'default' \| 'outline' \| 'ghost' \| 'destructive'` | `'default'` |
| size     | 按钮尺寸     | `'sm' \| 'md' \| 'lg'`                               | `'md'`      |
| disabled | 是否禁用     | `boolean`                                            | `false`     |

### 事件

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击按钮时触发 | `event: MouseEvent` |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |
