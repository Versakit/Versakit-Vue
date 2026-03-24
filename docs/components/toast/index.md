# Toast 轻提示

Toast 是一种轻量级的全局反馈组件，用于展示操作结果或状态信息，不会打断当前页面流程。

## 引入

```typescript
import { Toast } from '@versakit/vue'
```

## 使用

<demo vue="./example/index.vue" />

## API

### Toast 方法

| 方法名          | 说明               | 参数 |
| --------------- | ------------------ | ---- |
| `Toast.success` | 成功类型提示       | `(message: string, options?: Omit<ToastOptions, 'message' \| 'type'>)` |
| `Toast.error`   | 错误类型提示       | `(message: string, options?: Omit<ToastOptions, 'message' \| 'type'>)` |
| `Toast.warning` | 警告类型提示       | `(message: string, options?: Omit<ToastOptions, 'message' \| 'type'>)` |
| `Toast.info`    | 信息类型提示       | `(message: string, options?: Omit<ToastOptions, 'message' \| 'type'>)` |
| `Toast.show`    | 自定义类型与配置   | `(options: ToastOptions)` |
| `Toast.remove`  | 根据 id 移除提示   | `(id: string)` |
| `Toast.removeAll` | 移除全部提示     | `()` |

### ToastOptions

| 属性名   | 说明           | 类型 | 默认值 |
| -------- | -------------- | ---- | ------ |
| message  | 提示内容       | `string` | - |
| type     | 提示类型       | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| duration | 自动关闭时长（毫秒） | `number` | `3000` |
| position | 显示位置       | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'top-center' \| 'bottom-center'` | `'top-right'` |
| onClose  | 关闭回调       | `(id: string) => void` | - |
