# Tooltip

Tooltip 是一种轻量级的信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短的说明文字。它通常以半透明气泡形式呈现，不干扰主界面，用于提供即时的上下文帮助或补充信息。

```TypeScript
import { useTooltip } from '@versakit/composables'

const {
  isOpen,
  triggerRef,
  tooltipRef,
  tooltipId,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
} = useTooltip()
```

## 使用

<demo vue="./example/index.vue" />
