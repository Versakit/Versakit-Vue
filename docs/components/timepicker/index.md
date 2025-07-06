# TimePicker 时间选择器

TimePicker 时间选择器用于让用户选择特定的时间点，支持12小时制和24小时制，可自定义时间步长，提供小时、分钟和秒的精确选择。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-timepicker-%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic"/>

## 引入

```typescript
import { TimePicker } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名      | 说明               | 类型             | 默认值       |
| ----------- | ------------------ | ---------------- | ------------ |
| modelValue  | 绑定值，选中的时间 | `string \| Date` | -            |
| disabled    | 是否禁用           | `boolean`        | `false`      |
| readonly    | 是否只读           | `boolean`        | `false`      |
| placeholder | 占位文本           | `string`         | `'选择时间'` |
| format      | 时间格式           | `'12h' \| '24h'` | `'24h'`      |
| hourStep    | 小时选择步长       | `number`         | `1`          |
| minuteStep  | 分钟选择步长       | `number`         | `1`          |
| secondStep  | 秒选择步长         | `number`         | `1`          |
| showSeconds | 是否显示秒选择器   | `boolean`        | `false`      |
| clearable   | 是否可清空         | `boolean`        | `true`       |
| unstyled    | 是否禁用默认样式   | `boolean`        | `false`      |
| pt          | 自定义样式配置     | `TimePickerPT`   | -            |

### 事件

| 事件名            | 说明                 | 回调参数                                  |
| ----------------- | -------------------- | ----------------------------------------- |
| update:modelValue | 选中时间变化时触发   | `(value: string \| Date \| null) => void` |
| change            | 选中时间变化时触发   | `(value: string \| Date \| null) => void` |
| focus             | 输入框获得焦点时触发 | `(e: FocusEvent) => void`                 |
| blur              | 输入框失去焦点时触发 | `(e: FocusEvent) => void`                 |
| clear             | 点击清空按钮时触发   | `() => void`                              |

### 插槽

TimePicker 组件暂不提供插槽。
