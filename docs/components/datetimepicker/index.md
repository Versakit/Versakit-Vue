# DateTimePicker 日期时间选择器

DateTimePicker 日期时间选择器用于让用户同时选择日期和时间，结合了日期选择和时间选择的功能，通过选项卡界面提供直观的操作体验。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-datetimepicker-%E6%97%A5%E6%9C%9F%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8--basic"/>

## 引入

```typescript
import { DateTimePicker } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名         | 说明                               | 类型                              | 默认值           |
| -------------- | ---------------------------------- | --------------------------------- | ---------------- |
| modelValue     | 绑定值，选中的日期时间             | `Date`                            | -                |
| min            | 可选择的最小日期时间               | `Date`                            | -                |
| max            | 可选择的最大日期时间               | `Date`                            | -                |
| disabled       | 是否禁用                           | `boolean`                         | `false`          |
| readonly       | 是否只读                           | `boolean`                         | `false`          |
| placeholder    | 占位文本                           | `string`                          | `'选择日期时间'` |
| dateFormat     | 日期格式                           | `string`                          | -                |
| timeFormat     | 时间格式                           | `'12h' \| '24h'`                  | `'24h'`          |
| firstDayOfWeek | 一周的第一天，0表示周日，1表示周一 | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `0`              |
| locale         | 本地化配置，影响月份和星期的显示   | `string`                          | 系统默认         |
| hourStep       | 小时选择步长                       | `number`                          | `1`              |
| minuteStep     | 分钟选择步长                       | `number`                          | `1`              |
| secondStep     | 秒选择步长                         | `number`                          | `1`              |
| showSeconds    | 是否显示秒选择器                   | `boolean`                         | `false`          |
| clearable      | 是否可清空                         | `boolean`                         | `true`           |
| unstyled       | 是否禁用默认样式                   | `boolean`                         | `false`          |
| pt             | 自定义样式配置                     | `DateTimePickerPT`                | -                |

### 事件

| 事件名            | 说明                   | 回调参数                       |
| ----------------- | ---------------------- | ------------------------------ |
| update:modelValue | 选中日期时间变化时触发 | `(date: Date \| null) => void` |
| change            | 选中日期时间变化时触发 | `(date: Date \| null) => void` |
| focus             | 输入框获得焦点时触发   | `(e: FocusEvent) => void`      |
| blur              | 输入框失去焦点时触发   | `(e: FocusEvent) => void`      |
| clear             | 点击清空按钮时触发     | `() => void`                   |

### 插槽

DateTimePicker 组件暂不提供插槽。
