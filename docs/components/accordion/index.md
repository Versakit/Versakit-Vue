# Accordion 手风琴

手风琴组件是一种可折叠的内容面板，用于在有限的空间内组织和展示大量信息，提高用户体验和界面整洁度。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-accordion-%E6%89%8B%E9%A3%8E%E7%90%B4--basic"/>

## 引入

```typescript
import { Accordion, AccordionItem } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## 基础用法

基础的手风琴组件，点击面板头部可以展开或折叠内容。默认情况下，同一时间只能展开一个面板。

```vue
<template>
	<Accordion>
		<AccordionItem value="item-1" header="第一项">
			<p>这是第一项的内容区域。这里可以放置任何内容。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="第二项">
			<p>这是第二项的内容区域。这里可以放置任何内容。</p>
		</AccordionItem>
		<AccordionItem value="item-3" header="第三项">
			<p>这是第三项的内容区域。这里可以放置任何内容。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## 样式变体

通过 `variant` 属性设置手风琴的样式变体，支持 `default`、`bordered` 和 `elevated` 三种样式。

```vue
<template>
	<!-- 默认样式 -->
	<Accordion variant="default">
		<AccordionItem value="item-1" header="默认样式">
			<p>这是默认样式的手风琴项目。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="第二项">
			<p>这是第二个项目。</p>
		</AccordionItem>
	</Accordion>

	<!-- 带边框样式 -->
	<Accordion variant="bordered">
		<AccordionItem value="item-1" header="带边框样式">
			<p>这是带边框的手风琴项目。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="第二项">
			<p>这是第二个项目。</p>
		</AccordionItem>
	</Accordion>

	<!-- 阴影样式 -->
	<Accordion variant="elevated">
		<AccordionItem value="item-1" header="阴影样式">
			<p>这是带阴影的手风琴项目。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="第二项">
			<p>这是第二个项目。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## 多面板模式

通过 `multiple` 属性设置是否允许同时展开多个面板。

```vue
<template>
	<Accordion multiple>
		<AccordionItem value="item-1" header="第一项">
			<p>在多面板模式下，可以同时展开多个面板。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="第二项">
			<p>这对于需要同时查看多个内容区域的场景很有用。</p>
		</AccordionItem>
		<AccordionItem value="item-3" header="第三项">
			<p>用户可以自由组合需要展示的内容。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## 默认展开

通过 `modelValue` 属性设置默认展开的面板，在多面板模式下可以是数组。

```vue
<template>
	<!-- 单面板模式下默认展开 -->
	<Accordion v-model="singleExpanded">
		<AccordionItem value="item-1" header="默认关闭项">
			<p>这个面板默认是关闭的。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="默认展开项">
			<p>这个面板默认是展开的。</p>
		</AccordionItem>
		<AccordionItem value="item-3" header="默认关闭项">
			<p>这个面板默认是关闭的。</p>
		</AccordionItem>
	</Accordion>

	<!-- 多面板模式下默认展开 -->
	<Accordion multiple v-model="multiExpanded">
		<AccordionItem value="item-1" header="默认展开项">
			<p>这个面板默认是展开的。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="默认关闭项">
			<p>这个面板默认是关闭的。</p>
		</AccordionItem>
		<AccordionItem value="item-3" header="默认展开项">
			<p>这个面板默认是展开的。</p>
		</AccordionItem>
	</Accordion>
</template>

<script setup>
import { ref } from 'vue'

const singleExpanded = ref('item-2')
const multiExpanded = ref(['item-1', 'item-3'])
</script>
```

## 禁用状态

通过 `disabled` 属性设置是否禁用手风琴。

```vue
<template>
	<!-- 全部禁用 -->
	<Accordion disabled>
		<AccordionItem value="item-1" header="禁用项目1">
			<p>这个手风琴的所有项目都被禁用，无法点击。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="禁用项目2">
			<p>这个项目也被禁用，无法点击。</p>
		</AccordionItem>
	</Accordion>

	<!-- 单项禁用 -->
	<Accordion>
		<AccordionItem value="item-1" header="正常项目">
			<p>这是一个可以正常点击的项目。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="禁用项目" disabled>
			<p>这个项目被禁用，无法点击。</p>
		</AccordionItem>
		<AccordionItem value="item-3" header="正常项目">
			<p>这是一个可以正常点击的项目。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## 自定义头部和图标

可以使用 `header` 和 `icon` 插槽自定义手风琴项的头部和图标。

```vue
<template>
	<Accordion>
		<AccordionItem value="item-1">
			<template #header>
				<div class="flex items-center gap-2">
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
					>
						<path
							d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
						></path>
						<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
						<line x1="12" y1="22.08" x2="12" y2="12"></line>
					</svg>
					<span class="text-blue-600 font-bold">自定义标题</span>
				</div>
			</template>
			<p>这是自定义标题的内容。</p>
		</AccordionItem>
		<AccordionItem value="item-2" header="自定义图标">
			<template #icon>
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
				>
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 16 16 12 12 8"></polyline>
					<line x1="8" y1="12" x2="16" y2="12"></line>
				</svg>
			</template>
			<p>这是自定义图标的内容。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## 无样式模式

通过 `unstyled` 属性移除默认样式，完全自定义组件外观。

```vue
<template>
	<Accordion unstyled :pt="{ root: 'bg-gray-100 rounded-lg p-4' }">
		<AccordionItem
			value="item-1"
			header="自定义样式项目"
			:pt="{
				root: 'mb-4',
				header: 'mb-1',
				trigger:
					'bg-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-gray-50 transition-colors',
				title: 'text-indigo-600 font-medium',
				icon: 'text-indigo-600',
				content: 'overflow-hidden transition-all duration-300',
				contentInner: 'bg-white rounded-lg mt-1 p-4 shadow-sm',
			}"
		>
			<p>这是无样式模式下，通过pt属性自定义的项目。</p>
			<p class="mt-2 text-gray-500">可以完全控制每个元素的样式。</p>
		</AccordionItem>
	</Accordion>
</template>
```

## API

### Accordion Props

| 名称       | 类型                                     | 默认值    | 说明                     |
| ---------- | ---------------------------------------- | --------- | ------------------------ |
| multiple   | boolean                                  | false     | 是否允许同时展开多个面板 |
| modelValue | string \| string[]                       | -         | 当前展开的面板键值       |
| variant    | 'default' \| 'bordered' \| 'elevated'    | 'default' | 手风琴样式变体           |
| radius     | 'none' \| 'sm' \| 'md' \| 'lg' \| 'full' | 'md'      | 圆角大小                 |
| bordered   | boolean                                  | true      | 是否显示边框             |
| animated   | boolean                                  | true      | 是否启用动画效果         |
| disabled   | boolean                                  | false     | 是否禁用全部面板         |
| unstyled   | boolean                                  | false     | 是否移除默认样式         |
| pt         | AccordionPT                              | -         | 传递样式类               |

### Accordion Events

| 名称              | 参数                        | 说明                   |
| ----------------- | --------------------------- | ---------------------- |
| update:modelValue | (value: string \| string[]) | 面板展开状态变化时触发 |
| change            | (value: string \| string[]) | 面板展开状态变化时触发 |

### AccordionItem Props

| 名称     | 类型            | 默认值 | 说明             |
| -------- | --------------- | ------ | ---------------- |
| value    | string          | -      | 面板唯一标识符   |
| header   | string          | -      | 面板标题         |
| disabled | boolean         | false  | 是否禁用该面板   |
| unstyled | boolean         | false  | 是否移除默认样式 |
| pt       | AccordionItemPT | -      | 传递样式类       |

### AccordionItem Events

| 名称   | 参数                | 说明                   |
| ------ | ------------------- | ---------------------- |
| click  | (e: MouseEvent)     | 点击事件               |
| toggle | (expanded: boolean) | 面板展开状态变化时触发 |

### AccordionItem Slots

| 名称    | 参数 | 说明       |
| ------- | ---- | ---------- |
| default | -    | 默认内容   |
| header  | -    | 自定义头部 |
| icon    | -    | 自定义图标 |
