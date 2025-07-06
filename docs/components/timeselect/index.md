# TimeSelect 时间选择

TimeSelect 时间选择器用于从预定义的时间列表中选择时间，适用于需要限制用户只能选择特定时间点的场景。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timeselect-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9--basic"/>

## 引入

```typescript
import { TimeSelect } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名      | 说明                   | 类型             | 默认值       |
| ----------- | ---------------------- | ---------------- | ------------ |
| modelValue  | 绑定值，选中的时间     | `string`         | -            |
| disabled    | 是否禁用               | `boolean`        | `false`      |
| readonly    | 是否只读               | `boolean`        | `false`      |
| placeholder | 占位文本               | `string`         | `'选择时间'` |
| options     | 可选时间选项列表       | `string[]`       | -            |
| start       | 开始时间，格式为 HH:mm | `string`         | `'00:00'`    |
| end         | 结束时间，格式为 HH:mm | `string`         | `'23:59'`    |
| step        | 时间间隔，单位为分钟   | `number`         | `30`         |
| format      | 时间格式               | `'12h' \| '24h'` | `'24h'`      |
| clearable   | 是否可清空             | `boolean`        | `true`       |
| unstyled    | 是否禁用默认样式       | `boolean`        | `false`      |
| pt          | 自定义样式配置         | `TimeSelectPT`   | -            |

### 事件

| 事件名            | 说明                 | 回调参数                          |
| ----------------- | -------------------- | --------------------------------- |
| update:modelValue | 选中时间变化时触发   | `(value: string \| null) => void` |
| change            | 选中时间变化时触发   | `(value: string \| null) => void` |
| focus             | 输入框获得焦点时触发 | `(e: FocusEvent) => void`         |
| blur              | 输入框失去焦点时触发 | `(e: FocusEvent) => void`         |
| clear             | 点击清空按钮时触发   | `() => void`                      |

### 插槽

TimeSelect 组件暂不提供插槽。
