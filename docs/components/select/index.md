# Select 选择器

Select 组件用于从一组预定义选项中选择一个或多个值。

## 引入

```typescript
import { Select, SelectItem } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### Select 属性

| 属性名                      | 说明                   | 类型                                                                          | 默认值         |
| --------------------------- | ---------------------- | ----------------------------------------------------------------------------- | -------------- |
| modelValue                  | 选择器的值             | `string \| number \| Array<string \| number>`                                 | -              |
| placeholder                 | 占位符                 | `string`                                                                      | `'请选择'`     |
| disabled                    | 是否禁用               | `boolean`                                                                     | `false`        |
| selectionMode               | 选择模式               | `'single' \| 'multiple'`                                                      | `'single'`     |
| size                        | 尺寸                   | `'sm' \| 'md' \| 'lg'`                                                        | `'md'`         |
| color                       | 颜色变体               | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'`    |
| variant                     | 外观变体               | `'flat' \| 'bordered' \| 'underlined'`                                        | `'bordered'`   |
| radius                      | 圆角大小               | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'`                                    | `'md'`         |
| label                       | 标签文本               | `string`                                                                      | -              |
| labelPlacement              | 标签位置               | `'inside' \| 'outside' \| 'outside-left'`                                     | `'inside'`     |
| description                 | 描述文本               | `string`                                                                      | -              |
| errorMessage                | 错误消息               | `string`                                                                      | -              |
| isInvalid                   | 是否无效               | `boolean`                                                                     | `false`        |
| isRequired                  | 是否必填               | `boolean`                                                                     | `false`        |
| isClearable                 | 是否可清除             | `boolean`                                                                     | `false`        |
| isFilterable                | 是否可搜索             | `boolean`                                                                     | `false`        |
| maxDropdownHeight           | 最大下拉框高度         | `number`                                                                      | `256`          |
| disabledKeys                | 禁用的选项键值         | `string[]`                                                                    | -              |
| disableSelectorIconRotation | 禁用选择器图标旋转     | `boolean`                                                                     | `false`        |
| startContent                | 左侧内容               | `string`                                                                      | -              |
| endContent                  | 右侧内容               | `string`                                                                      | -              |
| showScrollIndicators        | 是否显示滚动指示器     | `boolean`                                                                     | `true`         |
| noMatchText                 | 无匹配选项时显示的文本 | `string`                                                                      | `'无匹配选项'` |

### Select 事件

| 事件名            | 说明                       | 参数                                                   |
| ----------------- | -------------------------- | ------------------------------------------------------ |
| update:modelValue | 值变化时触发               | `(value: string \| number \| Array<string \| number>)` |
| change            | 值变化时触发               | `(value: string \| number \| Array<string \| number>)` |
| focus             | 获取焦点时触发             | -                                                      |
| blur              | 失去焦点时触发             | -                                                      |
| open-change       | 下拉菜单打开状态变化时触发 | `(isOpen: boolean)`                                    |

### Select 插槽

| 名称         | 说明                               | 参数                         |
| ------------ | ---------------------------------- | ---------------------------- |
| default      | 默认插槽，用于放置 SelectItem 组件 | -                            |
| startContent | 选择器左侧内容                     | -                            |
| endContent   | 选择器右侧内容                     | -                            |
| value        | 自定义选中值的渲染                 | `{ selected: SelectItem[] }` |
| selectorIcon | 自定义选择器图标                   | -                            |

### SelectItem 属性

| 属性名       | 说明     | 类型      | 默认值   |
| ------------ | -------- | --------- | -------- |
| key          | 选项键值 | `string`  | **必填** |
| label        | 选项标签 | `string`  | -        |
| description  | 选项描述 | `string`  | -        |
| disabled     | 是否禁用 | `boolean` | `false`  |
| startContent | 左侧内容 | `string`  | -        |
| endContent   | 右侧内容 | `string`  | -        |

### SelectItem 插槽

| 名称         | 说明                         | 参数 |
| ------------ | ---------------------------- | ---- |
| default      | 默认插槽，用于自定义选项内容 | -    |
| description  | 自定义描述内容               | -    |
| startContent | 选项左侧内容                 | -    |
| endContent   | 选项右侧内容                 | -    |
| selectedIcon | 自定义选中图标               | -    |

## 数据属性

Select 组件在根元素上添加以下数据属性：

- **data-open**: 下拉菜单是否打开
- **data-disabled**: 选择器是否禁用
- **data-focus**: 选择器是否聚焦
- **data-invalid**: 选择器是否无效

SelectItem 组件在根元素上添加以下数据属性：

- **data-key**: 选项的键值
- **data-selected**: 选项是否被选中
- **data-disabled**: 选项是否禁用
- **data-focus**: 选项是否聚焦
- **data-hover**: 选项是否悬停
- **data-pressed**: 选项是否按下
