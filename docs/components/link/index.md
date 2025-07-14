# Link 链接

Link 组件用于创建可点击的文本链接，支持多种样式变体、尺寸和图标位置，可用于导航或触发操作。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-link-%E9%93%BE%E6%8E%A5--basic"/>

## 引入

```typescript
import { Link } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名       | 说明                     | 类型                                                                                    | 默认值      |
| ------------ | ------------------------ | --------------------------------------------------------------------------------------- | ----------- |
| href         | 链接的目标地址           | `string`                                                                                | -           |
| variant      | 链接的变体样式           | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'default'` |
| size         | 链接的尺寸               | `'sm' \| 'md' \| 'lg'`                                                                  | `'md'`      |
| external     | 是否在新标签页中打开链接 | `boolean`                                                                               | `false`     |
| underline    | 是否显示下划线           | `boolean`                                                                               | `false`     |
| disabled     | 是否禁用链接             | `boolean`                                                                               | `false`     |
| iconPosition | 链接的图标位置           | `'left' \| 'right'`                                                                     | -           |
| unstyled     | 是否禁用默认样式         | `boolean`                                                                               | `false`     |
| pt           | 自定义样式传递           | `LinkPT`                                                                                | -           |

### 事件

| 事件名 | 说明           | 回调参数                      |
| ------ | -------------- | ----------------------------- |
| click  | 点击链接时触发 | `(event: MouseEvent) => void` |

### 插槽

| 插槽名     | 说明           |
| ---------- | -------------- |
| default    | 链接的文本内容 |
| icon-left  | 链接左侧的图标 |
| icon-right | 链接右侧的图标 |

### 样式定制

可以通过 `pt` 属性传递自定义样式：

```vue
<Link
	href="https://example.com"
	:pt="{
		root: 'custom-root-class',
		icon: 'custom-icon-class',
	}"
>
  自定义样式链接
</Link>
```
