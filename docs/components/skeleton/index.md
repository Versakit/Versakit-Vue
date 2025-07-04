# Skeleton 骨架屏

在内容加载过程中显示的占位符组件，提供更好的用户体验。

## 引入

```typescript
// 引入组件
import { Skeleton, SkeletonText, SkeletonAvatar } from '@versakit/vue'
```

## 基本用法

Skeleton组件可以在数据加载时显示占位符，减少用户等待的焦虑感。

<demo vue="./example/index.vue" />

## 组件

Versakit提供了三个骨架屏相关组件：

1. `Skeleton` - 基础骨架屏组件
2. `SkeletonText` - 文本骨架屏组件
3. `SkeletonAvatar` - 头像骨架屏组件

## API

### Skeleton Props

| 属性      | 说明               | 类型                          | 默认值    |
| --------- | ------------------ | ----------------------------- | --------- |
| animation | 动画效果类型       | `'pulse' \| 'wave' \| 'none'` | `'pulse'` |
| loading   | 是否显示骨架屏     | `boolean`                     | `true`    |
| rounded   | 是否为圆角         | `boolean`                     | `false`   |
| width     | 自定义宽度         | `string \| number`            | -         |
| height    | 自定义高度         | `string \| number`            | -         |
| unstyled  | 是否使用无样式模式 | `boolean`                     | `false`   |
| pt        | 传递模板样式       | `SkeletonPT`                  | -         |

### SkeletonText Props

| 属性       | 说明                           | 类型                                       | 默认值                    |
| ---------- | ------------------------------ | ------------------------------------------ | ------------------------- |
| lines      | 显示的行数                     | `number`                                   | `3`                       |
| widths     | 每行宽度，可以是数组或者单个值 | `(string \| number)[] \| string \| number` | `['100%', '100%', '80%']` |
| lineHeight | 行高                           | `string \| number`                         | `'1rem'`                  |
| animation  | 动画效果类型                   | `'pulse' \| 'wave' \| 'none'`              | `'pulse'`                 |
| rounded    | 是否为圆角                     | `boolean`                                  | `false`                   |
| unstyled   | 是否使用无样式模式             | `boolean`                                  | `false`                   |
| pt         | 传递模板样式                   | `SkeletonTextPT`                           | -                         |

### SkeletonAvatar Props

| 属性      | 说明               | 类型                                   | 默认值    |
| --------- | ------------------ | -------------------------------------- | --------- |
| size      | 头像大小           | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'`    |
| circle    | 是否为圆形         | `boolean`                              | `true`    |
| animation | 动画效果类型       | `'pulse' \| 'wave' \| 'none'`          | `'pulse'` |
| unstyled  | 是否使用无样式模式 | `boolean`                              | `false`   |
| pt        | 传递模板样式       | `SkeletonAvatarPT`                     | -         |

### Skeleton 插槽

| 名称     | 说明                 |
| -------- | -------------------- |
| default  | 加载完成后显示的内容 |
| skeleton | 自定义骨架屏内容     |

## 最佳实践

1. **合理使用动画**：动画可以吸引用户注意力，但过多的动画可能会分散注意力。根据实际需要选择合适的动画效果。

2. **模拟真实内容**：骨架屏应尽可能模拟实际内容的结构和布局，这样在内容加载完成后，用户不会感到突兀。

3. **组合使用**：将`Skeleton`、`SkeletonText`和`SkeletonAvatar`组件组合使用，可以创建更复杂的加载占位符。

4. **控制加载状态**：通过`loading`属性控制骨架屏的显示和隐藏，当数据加载完成时，自动显示实际内容。

## 自定义样式

可以通过`pt`属性自定义组件样式，或者使用`unstyled`属性移除默认样式后自行添加样式。

```vue
<template>
	<Skeleton :pt="{ root: 'custom-skeleton-class' }" />
	<SkeletonText
		:pt="{ root: 'custom-text-class', line: 'custom-line-class' }"
	/>
	<SkeletonAvatar :pt="{ root: 'custom-avatar-class' }" />
</template>
```
