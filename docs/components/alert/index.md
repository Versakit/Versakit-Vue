# Alert 警告提示

Alert 是一种用于展示重要信息或操作结果的通知组件，通常以醒目的样式出现在页面中。它不打断用户当前操作，但需用户主动关注，用于传达成功、错误、警告或信息类反馈。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-alert-%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA--basic"/>

## 引入

```typescript
import { Alert } from '@versakit/vue'
```

## 基础用法

<demo vue="./example/index.vue" />

## 属性

| 属性名   | 说明             | 类型                                                | 默认值   |
| -------- | ---------------- | --------------------------------------------------- | -------- |
| variant  | 警告框的变体样式 | `'success'` \| `'error'` \| `'warning'` \| `'info'` | `'info'` |
| closable | 是否可关闭       | `boolean`                                           | `false`  |
| rounded  | 圆角大小         | `'none'` \| `'sm'` \| `'md'` \| `'lg'` \| `'full'`  | `'md'`   |

## 事件

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| close  | 关闭按钮点击时触发 | -        |

## 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 警告框的内容 |
| title   | 警告框的标题 |
| icon    | 自定义图标   |
