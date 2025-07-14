# Image 图片

Image 组件是一个增强的图片显示组件，提供了模糊加载、缩放、骨架屏等功能，为用户提供更好的图片浏览体验。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-image-%E5%9B%BE%E7%89%87--basic"/>

## 引入

```typescript
import { Image } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名        | 说明                     | 类型                                                       | 默认值    |
| ------------- | ------------------------ | ---------------------------------------------------------- | --------- |
| src           | 图片源地址               | `string`                                                   | -         |
| alt           | 图片加载失败时的替代文本 | `string`                                                   | `''`      |
| width         | 图片宽度                 | `string \| number`                                         | `'auto'`  |
| height        | 图片高度                 | `string \| number`                                         | `'auto'`  |
| fit           | 图片填充模式             | `'fill' \| 'contain' \| 'cover' \| 'none' \| 'scale-down'` | `'cover'` |
| blurred       | 是否启用模糊加载效果     | `boolean`                                                  | `false`   |
| blurAmount    | 模糊加载的模糊度         | `number`                                                   | `10`      |
| loading       | 图片加载策略             | `'lazy' \| 'eager'`                                        | `'lazy'`  |
| isZoomable    | 是否启用缩放功能         | `boolean`                                                  | `false`   |
| isZoomed      | 是否当前处于缩放状态     | `boolean`                                                  | `false`   |
| zoomScale     | 缩放比例                 | `number`                                                   | `1.5`     |
| skeleton      | 是否显示骨架屏           | `boolean`                                                  | `true`    |
| skeletonColor | 骨架屏背景色             | `string`                                                   | -         |
| radius        | 图片圆角                 | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`         | `'md'`    |
| unstyled      | 是否禁用默认样式         | `boolean`                                                  | `false`   |
| pt            | 自定义样式传递           | `ImagePT`                                                  | -         |

### 事件

| 事件名 | 说明                   | 回调参数                    |
| ------ | ---------------------- | --------------------------- |
| load   | 图片加载成功时触发     | `(event: Event) => void`    |
| error  | 图片加载失败时触发     | `(event: Event) => void`    |
| zoom   | 图片缩放状态变化时触发 | `(zoomed: boolean) => void` |

### 插槽

| 插槽名    | 说明                     |
| --------- | ------------------------ |
| default   | 默认插槽，通常不需要使用 |
| error     | 图片加载失败时显示的内容 |
| zoom-icon | 缩放图标的自定义内容     |

### 样式定制

可以通过 `pt` 属性传递自定义样式：

```vue
<Image
	src="..."
	:pt="{
		root: 'custom-root-class',
		img: 'custom-img-class',
		skeleton: 'custom-skeleton-class',
		overlay: 'custom-overlay-class',
	}"
/>
```
