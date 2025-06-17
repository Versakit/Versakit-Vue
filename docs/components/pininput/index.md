# PinInput

PinInput（密码输入框）组件是一种专为输入短序列密码（如 PIN 码、验证码）设计的交互组件，通过将输入框拆分为独立的字符单元，引导用户分步骤输入，提升安全性和输入效率。

```TypeScript
import { usePinInput } from '@versakit/composables'

const { values, setRef, onInput, onKeydown } = usePinInput(props.length)
```

## 使用

<demo vue="./example/index.vue" />
