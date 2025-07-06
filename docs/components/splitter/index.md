# Splitter 分割面板

Splitter 组件用于创建可调整大小的分割面板，允许用户通过拖动分隔条来重新分配面板空间，适用于需要灵活布局的界面，如代码编辑器、文件管理器等。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-splitter-%E5%88%86%E5%89%B2%E9%9D%A2%E6%9D%BF--basic"/>

## 引入

```typescript
import { Splitter } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## 基础用法

基础的水平分割面板，可通过拖动中间的分隔条调整两个面板的大小。

```vue
<template>
	<Splitter>
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2
			</div>
		</template>
	</Splitter>
</template>
```

## 垂直布局

通过 `layout` 属性设置垂直分割布局。

```vue
<template>
	<Splitter layout="vertical">
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2
			</div>
		</template>
	</Splitter>
</template>
```

## 多面板

支持创建多个可调整大小的面板。

```vue
<template>
	<Splitter>
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2
			</div>
		</template>
		<template #panel-2>
			<div class="h-40 flex items-center justify-center bg-gray-300">
				面板 3
			</div>
		</template>
	</Splitter>
</template>
```

## 嵌套面板

支持在面板内嵌套其他分割面板，创建复杂的布局。

```vue
<template>
	<Splitter>
		<template #panel-0>
			<div class="h-60 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<Splitter layout="vertical">
				<template #panel-0>
					<div class="h-30 flex items-center justify-center bg-gray-200">
						面板 2.1
					</div>
				</template>
				<template #panel-1>
					<div class="h-30 flex items-center justify-center bg-gray-300">
						面板 2.2
					</div>
				</template>
			</Splitter>
		</template>
	</Splitter>
</template>
```

## 自定义分隔条大小

通过 `gutter-size` 属性设置分隔条的大小。

```vue
<template>
	<Splitter :gutter-size="8">
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2
			</div>
		</template>
	</Splitter>
</template>
```

## 初始尺寸和最小尺寸

可以通过 `initial-sizes` 和 `min-size` 属性设置面板的初始尺寸和最小尺寸。

```vue
<template>
	<Splitter :initial-sizes="[70, 30]" :min-size="[20, 10]">
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1 (初始 70%, 最小 20%)
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2 (初始 30%, 最小 10%)
			</div>
		</template>
	</Splitter>
</template>
```

## 自定义样式

使用 `pt` 属性自定义组件样式。

```vue
<template>
	<Splitter
		:pt="{
			root: 'border border-gray-300 rounded-md overflow-hidden',
			gutter: 'bg-blue-500 hover:bg-blue-600',
			gutterHandler: 'bg-white',
		}"
	>
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 1
			</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-200">
				面板 2
			</div>
		</template>
	</Splitter>
</template>
```

## 无样式模式

通过 `unstyled` 属性移除默认样式，完全自定义组件外观。

```vue
<template>
	<Splitter
		unstyled
		:pt="{
			root: 'flex border border-gray-200 rounded-lg overflow-hidden',
			gutter:
				'w-2 bg-gray-100 hover:bg-gray-200 cursor-col-resize flex items-center justify-center',
			gutterHandler: 'h-8 w-1 bg-gray-400 rounded',
		}"
	>
		<template #panel-0>
			<div class="h-40 flex items-center justify-center bg-gray-50">面板 1</div>
		</template>
		<template #panel-1>
			<div class="h-40 flex items-center justify-center bg-gray-100">
				面板 2
			</div>
		</template>
	</Splitter>
</template>
```

## API

### Splitter Props

| 名称         | 类型                       | 默认值       | 说明                 |
| ------------ | -------------------------- | ------------ | -------------------- |
| layout       | 'horizontal' \| 'vertical' | 'horizontal' | 分割面板的布局方向   |
| gutterSize   | number                     | 4            | 分隔条的大小         |
| initialSizes | number[]                   | -            | 面板的初始尺寸百分比 |
| minSize      | number \| number[]         | 10           | 面板的最小尺寸百分比 |
| unstyled     | boolean                    | false        | 是否移除默认样式     |
| pt           | SplitterPT                 | -            | 传递样式类           |

### Splitter Events

| 名称        | 参数                              | 说明               |
| ----------- | --------------------------------- | ------------------ |
| resize      | (sizes: number[])                 | 调整大小时触发     |
| resizeStart | (event: MouseEvent \| TouchEvent) | 开始调整大小时触发 |
| resizeEnd   | (sizes: number[])                 | 结束调整大小时触发 |

### Splitter Slots

| 名称      | 参数 | 说明                                |
| --------- | ---- | ----------------------------------- |
| panel-{n} | -    | 面板内容，n 从 0 开始表示面板的索引 |

```

```
