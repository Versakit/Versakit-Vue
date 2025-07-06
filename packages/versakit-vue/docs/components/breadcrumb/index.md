# Breadcrumb 面包屑导航

面包屑导航用于显示当前页面在网站层级结构中的位置，并提供返回各级的导航能力。

## 基础用法

基础的面包屑导航组件，使用 `separator` 属性设置分隔符。

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
<template>
	<v-breadcrumb :separator-icon="ChevronRight">
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'
</script>
```

## 禁用状态

通过 `disabled` 属性设置禁用状态。

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

通过 `active` 属性设置激活状态。

```vue
<template>
	<v-breadcrumb>
		<v-breadcrumb-item href="/">首页</v-breadcrumb-item>
		<v-breadcrumb-item href="/components">组件</v-breadcrumb-item>
		<v-breadcrumb-item active>面包屑</v-breadcrumb-item>
	</v-breadcrumb>
</template>
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

```

```
