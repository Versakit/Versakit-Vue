# Breadcrumb 面包屑导航

面包屑导航用于显示当前页面在网站层级结构中的位置，并提供返回各级的导航能力。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/navigation-breadcrumb--default"/>

## 引入

```typescript
import { Breadcrumb, BreadcrumbItem } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## 基础用法

基础的面包屑导航组件，使用 `/` 作为默认分隔符。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 自定义分隔符

通过 `separator` 属性设置自定义分隔符。

```vue
<template>
	<v-breadcrumb separator=">">
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 图标分隔符

通过 `separator-icon` 属性设置图标分隔符。

```vue
<script setup>
import { h } from 'vue'

// 自定义图标组件
const ChevronRightIcon = {
	name: 'ChevronRightIcon',
	render() {
		return h(
			'svg',
			{
				xmlns: 'http://www.w3.org/2000/svg',
				width: '16',
				height: '16',
				viewBox: '0 0 24 24',
				fill: 'none',
				stroke: 'currentColor',
				strokeWidth: '2',
				strokeLinecap: 'round',
				strokeLinejoin: 'round',
			},
			[
				h('polyline', {
					points: '9 18 15 12 9 6',
				}),
			],
		)
	},
}
</script>

<template>
	<v-breadcrumb :separator-icon="ChevronRightIcon">
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 禁用状态

通过 `disabled` 属性设置禁用状态，禁用的项目将无法点击。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item disabled href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 激活状态

通过 `active` 属性设置激活状态，通常用于标识当前页面。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item active>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 自定义样式

使用 `pt` 属性自定义组件样式。

```vue
<template>
	<v-breadcrumb :pt="{ root: 'bg-gray-100 p-3 rounded' }">
		<v-breadcrumb-item href="/" :pt="{ root: 'text-blue-500' }">
			首页
		</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 无样式模式

通过 `unstyled` 属性移除默认样式，完全自定义组件外观。

```vue
<template>
	<v-breadcrumb
		unstyled
		:pt="{ root: 'flex p-2 bg-gray-50 rounded', list: 'flex items-center' }"
	>
		<v-breadcrumb-item
			href="/"
			unstyled
			:pt="{
				root: 'text-blue-600 hover:underline',
				separator: 'mx-2 text-gray-400',
			}"
		>
			首页
		</v-breadcrumb-item>
		<v-breadcrumb-item
			href="/components"
			unstyled
			:pt="{
				root: 'text-blue-600 hover:underline',
				separator: 'mx-2 text-gray-400',
			}"
		>
			组件
		</v-breadcrumb-item>
		<v-breadcrumb-item
			unstyled
			:pt="{ root: 'text-gray-800 font-medium', content: 'font-medium' }"
		>
			面包屑
		</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 自定义分隔符插槽

使用 `separator` 插槽自定义分隔符内容。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item href="/">
			首页
			<template #separator>
				<span class="text-red-500 mx-2">•</span>
			</template>
		</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">
			组件
			<template #separator>
				<span class="text-red-500 mx-2">•</span>
			</template>
		</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
```

## 与路由框架集成

与 Vue Router 集成使用。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item :href="{ path: '/' }">首页</v-breadcrumb-item>
		<v-breadcrumb-item :href="{ path: '/components' }">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
```

## API

### Breadcrumb Props

| 名称           | 类型         | 默认值 | 说明             |
| -------------- | ------------ | ------ | ---------------- |
| separator      | string       | /      | 分隔符           |
| separator-icon | Component    | -      | 图标分隔符       |
| unstyled       | boolean      | false  | 是否移除默认样式 |
| pt             | BreadcrumbPT | -      | 传递样式类       |

### BreadcrumbItem Props

| 名称     | 类型             | 默认值 | 说明             |
| -------- | ---------------- | ------ | ---------------- |
| href     | string           | -      | 链接地址         |
| disabled | boolean          | false  | 是否禁用         |
| active   | boolean          | false  | 是否激活         |
| unstyled | boolean          | false  | 是否移除默认样式 |
| pt       | BreadcrumbItemPT | -      | 传递样式类       |

### BreadcrumbItem Events

| 名称  | 参数            | 说明     |
| ----- | --------------- | -------- |
| click | (e: MouseEvent) | 点击事件 |

### BreadcrumbItem Slots

| 名称      | 参数 | 说明         |
| --------- | ---- | ------------ |
| default   | -    | 默认内容     |
| separator | -    | 自定义分隔符 |

### 类型定义

```ts
export type BreadcrumbProps = {
	separator?: string
	separatorIcon?: string
	unstyled?: boolean
	pt?: BreadcrumbPT
}

export type BreadcrumbPT = {
	root?: string
	list?: string
	separator?: string
	item?: string
}

export type BreadcrumbItemProps = {
	href?: string
	disabled?: boolean
	active?: boolean
	unstyled?: boolean
	pt?: BreadcrumbItemPT
}

export type BreadcrumbItemPT = {
	root?: string
	link?: string
	content?: string
	separator?: string
}
```

## 无障碍

- 面包屑导航使用 `<nav>` 元素作为容器，并添加了适当的 ARIA 标签
- 使用 `<ol>` 和 `<li>` 元素创建语义化的列表结构
- 当前页面的面包屑项应设置 `active` 属性，以便辅助技术识别
- 禁用的面包屑项应设置 `disabled` 属性，以防止用户交互
