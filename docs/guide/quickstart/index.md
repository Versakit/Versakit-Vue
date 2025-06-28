# 快速开始

本节将介绍如何在项目中快速集成和使用 Versakit组件库。

## 完整引入

在应用入口文件中导入 Versakit：

```javascript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Versakit } from '@versakit/vue' // 引入组件库
import '@versakit/ui/style' // 引入样式

const app = createApp(App)

app.use(Versakit)
app.mount('#app')
```

## 按需导入

### 自动导入 <VK-tag>推荐</VK-tag>

首先需要安装自动导入相关插件：

```shell
npm install -D unplugin-vue-components unplugin-auto-import @versakit/resolvers
```

### Vite 配置

在 Vite 配置文件中添加以下配置：

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
