# DiaLog

Dialog（对话框）组件是一种模态窗口，用于在当前页面层级之上展示重要信息、请求用户确认或执行关键操作。对话框会暂时阻止用户与主界面的交互，确保注意力集中在当前任务上。

```Typescript
import { useDialog } from '@versakit/composables'

const { isOpen, open, close, dialogRef, overlayRef, onOverlayClick } =  useDialog()
```

## 使用

<demo vue="./example/index.vue" />
