# Carousel 轮播组件

Carousel 是一个内容轮播展示组件，支持自动轮播、手动切换、触摸滑动等交互方式。它可以用于展示一组图片、卡片或其他任何内容，并提供多种自定义选项。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/components-carousel--basic"/>

## 引入

```typescript
import { Carousel } from '@versakit/vue'
```

## 基本用法

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名             | 类型                                  | 默认值      | 说明                     |
| ------------------ | ------------------------------------- | ----------- | ------------------------ |
| variant            | `'default' \| 'dots' \| 'thumbnails'` | `'default'` | 轮播图变体类型           |
| size               | `'sm' \| 'md' \| 'lg'`                | `'md'`      | 轮播图尺寸               |
| autoplay           | `boolean`                             | `false`     | 是否自动播放             |
| interval           | `number`                              | `3000`      | 自动播放间隔时间（毫秒） |
| loop               | `boolean`                             | `true`      | 是否循环播放             |
| indicators         | `boolean`                             | `true`      | 是否显示指示器           |
| navigation         | `boolean`                             | `true`      | 是否显示导航按钮         |
| keyboardNavigation | `boolean`                             | `true`      | 是否启用键盘导航         |
| touchSwipe         | `boolean`                             | `true`      | 是否启用触摸滑动         |
| disabled           | `boolean`                             | `false`     | 是否禁用轮播图           |
| initialIndex       | `number`                              | `0`         | 初始激活的幻灯片索引     |
| unstyled           | `boolean`                             | `false`     | 是否使用无样式模式       |
| pt                 | `CarouselPT`                          | -           | 自定义样式传递           |

### 事件

| 事件名              | 参数                                                | 说明                           |
| ------------------- | --------------------------------------------------- | ------------------------------ |
| change              | `(currentIndex: number, prevIndex: number) => void` | 当前激活的幻灯片改变时触发     |
| update:active-index | `(index: number) => void`                           | 当前激活的幻灯片索引更新时触发 |

### 插槽

| 插槽名    | 参数 | 说明                                  |
| --------- | ---- | ------------------------------------- |
| item-{n}  | -    | 幻灯片内容，n 为幻灯片索引，从 0 开始 |
| prev-icon | -    | 自定义上一张按钮图标                  |
| next-icon | -    | 自定义下一张按钮图标                  |

### 方法

| 方法名    | 参数                      | 返回值 | 说明                   |
| --------- | ------------------------- | ------ | ---------------------- |
| next      | -                         | `void` | 切换到下一张幻灯片     |
| prev      | -                         | `void` | 切换到上一张幻灯片     |
| goToSlide | `(index: number) => void` | `void` | 切换到指定索引的幻灯片 |

### 样式传递

通过 `pt` 属性可以自定义组件各部分的样式：

```typescript
type CarouselPT = {
	root?: string
	container?: string
	item?: string
	navigation?: string
	prevButton?: string
	nextButton?: string
	indicators?: string
	indicator?: string
	activeIndicator?: string
}
```

## 无障碍访问

Carousel 组件遵循 WCAG 2.1 标准，支持以下无障碍特性：

- 键盘导航：通过左右箭头键切换幻灯片
- 适当的 ARIA 属性：导航按钮和指示器都包含适当的 aria-label 和 aria-current 属性
- 可聚焦元素：导航按钮和指示器都可以通过键盘聚焦
