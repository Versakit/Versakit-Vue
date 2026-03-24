# Table 表格

Table 用于结构化展示多行数据，支持列配置、单元格插槽渲染、空状态、斑马纹、边框和紧凑模式。

## 引入

```typescript
import { Table } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### 属性

| 属性名    | 说明             | 类型            | 默认值      |
| --------- | ---------------- | --------------- | ----------- |
| data      | 表格数据源       | `any[]`         | `[]`        |
| columns   | 列配置           | `TableColumn[]` | `[]`        |
| stripe    | 是否启用斑马纹   | `boolean`       | `false`     |
| border    | 是否显示边框     | `boolean`       | `false`     |
| dense     | 是否使用紧凑模式 | `boolean`       | `false`     |
| emptyText | 空数据文案       | `string`        | `'No Data'` |

### TableColumn

| 字段名 | 说明                               | 类型                            | 默认值   |
| ------ | ---------------------------------- | ------------------------------- | -------- |
| key    | 列字段名，对应数据键值和动态插槽名 | `string`                        | -        |
| title  | 表头标题                           | `string`                        | -        |
| width  | 列宽，支持字符串或数字             | `string \| number`              | -        |
| align  | 对齐方式                           | `'left' \| 'center' \| 'right'` | `'left'` |

### 插槽

| 插槽名          | 说明             | 作用域参数       |
| --------------- | ---------------- | ---------------- |
| empty           | 自定义空状态内容 | -                |
| `#<column.key>` | 按列渲染单元格   | `{ row, index }` |
