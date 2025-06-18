# Segmented

Segmented 是一种水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。它将相关操作或视图分类展示，用户通过点击选项即可触发对应功能，界面简洁且交互效率高。

```TypeScript
import { useSegmented } from '@versakit/composables'

const { selected, isSelected, select, onKeydown } = useSegmented()
```

## 使用

<demo vue="./example/index.vue" />
