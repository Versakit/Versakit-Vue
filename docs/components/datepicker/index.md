# DatePicker 日期选择器

DatePicker 日期选择器用于让用户通过可视化界面选择日期，提供下拉式日历选择，支持日期范围限制和格式化显示。

<Link link="https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-datepicker-%E6%97%A5%E6%9C%9F%E9%80%89%E6%8B%A9%E5%99%A8--basic"/>

## 引入

```typescript
import { DatePicker } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名         | 说明                               | 类型                              | 默认值       |
| -------------- | ---------------------------------- | --------------------------------- | ------------ |
| modelValue     | 绑定值，选中的日期                 | `Date`                            | -            |
| min            | 可选择的最小日期                   | `Date`                            | -            |
| max            | 可选择的最大日期                   | `Date`                            | -            |
| disabled       | 是否禁用                           | `boolean`                         | `false`      |
| readonly       | 是否只读                           | `boolean`                         | `false`      |
| placeholder    | 占位文本                           | `string`                          | `'选择日期'` |
| format         | 日期格式，如 'yyyy-MM-dd'          | `string`                          | -            |
| firstDayOfWeek | 一周的第一天，0表示周日，1表示周一 | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `0`          |
| locale         | 本地化配置，影响月份和星期的显示   | `string`                          | 系统默认     |
| clearable      | 是否可清空                         | `boolean`                         | `true`       |
| unstyled       | 是否禁用默认样式                   | `boolean`                         | `false`      |
| pt             | 自定义样式配置                     | `DatePickerPT`                    | -            |

### 事件

| 事件名            | 说明                 | 回调参数                       |
| ----------------- | -------------------- | ------------------------------ |
| update:modelValue | 选中日期变化时触发   | `(date: Date \| null) => void` |
| change            | 选中日期变化时触发   | `(date: Date \| null) => void` |
| focus             | 输入框获得焦点时触发 | `(e: FocusEvent) => void`      |
| blur              | 输入框失去焦点时触发 | `(e: FocusEvent) => void`      |
| clear             | 点击清空按钮时触发   | `() => void`                   |

### 插槽

DatePicker 组件暂不提供插槽。
