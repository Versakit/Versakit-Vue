# Slider

是一种交互式控件，允许用户通过拖动滑块在指定范围内选择一个连续值，通常以线性进度条的形式呈现。它广泛应用于需要调节数值（如音量、亮度、进度、范围选择等）的场景，提供直观的可视化操作方式。

```typeScript
import { useSlider } from '@versakit/composables'

const { value, percent, trackRef,  onTrackClick,  onThumbKeyDown,  onThumbMouseDown,} = useSlider()
```

## 使用

<demo vue="./example/index.vue" />
