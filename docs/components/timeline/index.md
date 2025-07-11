# Timeline 时间轴

时间轴组件用于垂直展示时间流或事件流信息，帮助用户了解事件发生的时间顺序和进展过程。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeline-%E6%97%B6%E9%97%B4%E8%BD%B4--basic"/>

## 引入

```typescript
import { Timeline, TimelineItem } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## 基础用法

基础的时间轴组件，默认左侧对齐。

```vue
<template>
	<Timeline>
		<TimelineItem :position="0" :isLast="false">
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
			<div>项目初始化完成</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
			<div>完成核心功能开发</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="true">
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
			<div>完成所有测试用例</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 对齐方式

通过 `align` 属性设置时间轴的对齐方式，支持 `left`、`right` 和 `alternate` 三种方式。

```vue
<template>
	<!-- 左侧对齐 -->
	<Timeline align="left">
		<TimelineItem :position="0" :isLast="false">
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="true">
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
	</Timeline>

	<!-- 右侧对齐 -->
	<Timeline align="right">
		<TimelineItem :position="0" :isLast="false">
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="true">
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
	</Timeline>

	<!-- 交替对齐 -->
	<Timeline align="alternate">
		<TimelineItem :position="0" :isLast="false">
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="false">
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
		<TimelineItem :position="3" :isLast="true">
			<div class="font-medium">发布阶段</div>
			<div class="text-sm text-gray-500">2023-04-10</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 自定义点和线

通过 `dot-color` 和 `line-color` 属性自定义时间轴点和线的颜色，也可以使用 `dot` 插槽自定义点的内容。

```vue
<template>
	<Timeline>
		<TimelineItem :position="0" :isLast="false" dot-color="#10b981">
			<template #dot>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-green-500"
				>
					<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
					<polyline points="22 4 12 14.01 9 11.01"></polyline>
				</svg>
			</template>
			<div class="font-medium">任务完成</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem
			:position="1"
			:isLast="false"
			dot-color="#f59e0b"
			line-color="#f59e0b"
		>
			<template #dot>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-yellow-500"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="12" y1="8" x2="12" y2="12"></line>
					<line x1="12" y1="16" x2="12.01" y2="16"></line>
				</svg>
			</template>
			<div class="font-medium">进行中</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem
			:position="2"
			:isLast="true"
			dot-color="#ef4444"
			line-color="#ef4444"
		>
			<template #dot>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="text-red-500"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="15" y1="9" x2="9" y2="15"></line>
					<line x1="9" y1="9" x2="15" y2="15"></line>
				</svg>
			</template>
			<div class="font-medium">已取消</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 反向内容

在交替布局中，可以使用 `opposite` 插槽添加反向内容。

```vue
<template>
	<Timeline align="alternate">
		<TimelineItem :position="0" :isLast="false">
			<template #opposite>
				<div class="font-bold text-blue-500">阶段 1</div>
			</template>
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<template #opposite>
				<div class="font-bold text-green-500">阶段 2</div>
			</template>
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="true">
			<template #opposite>
				<div class="font-bold text-amber-500">阶段 3</div>
			</template>
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 自定义样式

使用 `pt` 属性自定义组件样式。

```vue
<template>
	<Timeline :pt="{ root: 'border-l-2 border-blue-500 pl-6 ml-6' }">
		<TimelineItem
			:position="0"
			:isLast="false"
			:pt="{ dot: 'bg-blue-500 border-white', connector: 'bg-blue-500' }"
		>
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem
			:position="1"
			:isLast="false"
			:pt="{ dot: 'bg-green-500 border-white', connector: 'bg-green-500' }"
		>
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem
			:position="2"
			:isLast="true"
			:pt="{ dot: 'bg-amber-500 border-white', connector: 'bg-amber-500' }"
		>
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 无样式模式

通过 `unstyled` 属性移除默认样式，完全自定义组件外观。

```vue
<template>
	<Timeline
		unstyled
		:pt="{
			root: 'relative border-l-2 border-gray-300 ml-4 pl-8 dark:border-gray-700',
		}"
	>
		<TimelineItem
			:position="0"
			:isLast="false"
			unstyled
			:pt="{
				root: 'mb-8 relative',
				dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500 dark:bg-gray-900 dark:border-blue-600',
				content:
					'bg-white p-4 rounded-md shadow-md border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
				connector:
					'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300 dark:bg-gray-700',
			}"
		>
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">2023-01-01</div>
		</TimelineItem>
		<TimelineItem
			:position="1"
			:isLast="false"
			unstyled
			:pt="{
				root: 'mb-8 relative',
				dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500 dark:bg-gray-900 dark:border-green-600',
				content:
					'bg-white p-4 rounded-md shadow-md border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
				connector:
					'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300 dark:bg-gray-700',
			}"
		>
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">2023-02-15</div>
		</TimelineItem>
		<TimelineItem
			:position="2"
			:isLast="true"
			unstyled
			:pt="{
				root: 'mb-8 relative',
				dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500 dark:bg-gray-900 dark:border-amber-600',
				content:
					'bg-white p-4 rounded-md shadow-md border border-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
			}"
		>
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500 dark:text-gray-400">2023-03-20</div>
		</TimelineItem>
	</Timeline>
</template>
```

## 水平方向

通过 `orientation` 属性设置时间轴的方向，支持 `vertical` 和 `horizontal` 两种方式。

```vue
<template>
	<Timeline orientation="horizontal">
		<TimelineItem :position="0" :isLast="false">
			<div class="font-medium">创建项目</div>
			<div class="text-sm text-gray-500">2023-01-01</div>
		</TimelineItem>
		<TimelineItem :position="1" :isLast="false">
			<div class="font-medium">开发阶段</div>
			<div class="text-sm text-gray-500">2023-02-15</div>
		</TimelineItem>
		<TimelineItem :position="2" :isLast="false">
			<div class="font-medium">测试阶段</div>
			<div class="text-sm text-gray-500">2023-03-20</div>
		</TimelineItem>
		<TimelineItem :position="3" :isLast="true">
			<div class="font-medium">发布阶段</div>
			<div class="text-sm text-gray-500">2023-04-10</div>
		</TimelineItem>
	</Timeline>
</template>
```

## API

### Timeline Props

| 名称        | 类型                             | 默认值     | 说明             |
| ----------- | -------------------------------- | ---------- | ---------------- |
| orientation | 'vertical' \| 'horizontal'       | 'vertical' | 时间轴的方向     |
| align       | 'left' \| 'right' \| 'alternate' | 'left'     | 时间轴的对齐方式 |
| reverse     | boolean                          | false      | 是否反向显示     |
| unstyled    | boolean                          | false      | 是否移除默认样式 |
| pt          | TimelinePT                       | -          | 传递样式类       |

### TimelineItem Props

| 名称      | 类型           | 默认值 | 说明                 |
| --------- | -------------- | ------ | -------------------- |
| position  | number         | -      | 在时间线中的位置索引 |
| isLast    | boolean        | -      | 是否为最后一个项目   |
| dotColor  | string         | -      | 点的颜色             |
| lineColor | string         | -      | 线的颜色             |
| unstyled  | boolean        | false  | 是否移除默认样式     |
| pt        | TimelineItemPT | -      | 传递样式类           |

### TimelineItem Slots

| 名称     | 参数 | 说明     |
| -------- | ---- | -------- |
| default  | -    | 默认内容 |
| dot      | -    | 自定义点 |
| opposite | -    | 反向内容 |
