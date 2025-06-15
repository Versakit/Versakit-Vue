# 主题

## 主题包

> 我们受我的世界的材质包的启发
> 您可以使用主题生成器工具生成您自己的主题包，并将其导入到您的项目中。

```ts
// main.ts
import { XXX } from '您的包'
import { createApp } from 'vue'
import { versakit } from '@versakit/ui'
import App from './App.vue'

const app = createApp(App)
app.use(versakit, {
	theme: {
		preset: xxx,
	},
})
app.mount('#app')
```
