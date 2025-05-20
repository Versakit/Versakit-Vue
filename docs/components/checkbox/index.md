# CheckBox 复选框

## 基本使用

<demo vue="./example/base.vue" />

## API

### Checkbox 属性

| 属性名           | 说明                                                                 | 类型                        | 默认值   |
|------------------|--------------------------------------------------------------------|---------------------------|----------|
| model-value / v-model | 绑定值，单独使用时为 boolean，组合使用时为 string[]                      | boolean \| string[]       | false    |
| label            | 显示标签（如果使用默认插槽则不需要）                                   | string                    | —        |
| value            | 复选框的值（在组合使用时有效）                                         | string                    | —        |
| name             | 原生 name 属性                                                        | string                    | —        |
| disabled         | 是否禁用                                                             | boolean                   | false    |
| indeterminate    | 是否显示不确定样式（不影响实际选中状态）                               | boolean                   | false    |

### Checkbox 事件

| 事件名   | 说明                     | 参数类型                         |
|----------|--------------------------|----------------------------------|
| change   | 当绑定值变化时触发       | (value: boolean \| string[])    |
| update:modelValue | 用于 v-model 双向绑定更新 | (value: boolean \| string[])    |

### Checkbox 插槽

| 插槽名    | 说明               |
|-----------|--------------------|
| default   | 自定义显示标签内容 |

---

### CheckboxGroup 属性

| 属性名           | 说明                         | 类型          | 默认值   |
|------------------|-----------------------------|---------------|----------|
| model-value / v-model | 绑定值（选中项的 value 数组） | string[]      | []       |
| disabled         | 是否禁用所有复选框           | boolean       | false    |

### CheckboxGroup 事件

| 事件名   | 说明                     | 参数类型          |
|----------|--------------------------|-------------------|
| change   | 当绑定值变化时触发       | (value: string[]) |
| update:modelValue | 用于 v-model 双向绑定更新 | (value: string[]) |

---









