# 快速开始

本节将介绍如何在项目中使用 Versakit。

## 用法

```javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Versakit } from '@versakit/ui' // 引入组件库
import '@versakit/ui/dist/ui.css' // 引入样式

const app = createApp(App)

app.use(Versakit)
app.mount('#app')
```

## 按需导入

自动导入 <VK-tag>推荐</VK-tag>
​

<p>首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件</p>

```shell
npm install -D unplugin-vue-components unplugin-auto-import @versakit/resolvers
```

### Vite

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VersakitResolver } from '@versakit/resolvers'
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [VersakitResolver()],
		}),
		Components({
			resolvers: [VersakitResolver()],
		}),
	],
})
```
