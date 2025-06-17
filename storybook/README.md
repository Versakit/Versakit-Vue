# Versakit UI 组件文档

这是使用 Storybook 构建的 Versakit UI 组件文档系统。

## 开始使用

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
# 或
pnpm storybook
```

### 构建静态站点

```bash
pnpm docs:build
# 或
pnpm build-storybook
```

## 添加新组件文档

1. 在 `stories/components/` 目录下创建新的 `.stories.ts` 文件
2. 可选：为组件创建对应的 `.mdx` 文档文件
3. 在 `.storybook/registerComponents.ts` 中注册组件

### 组件故事示例

```typescript
// MyComponent.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import { MyComponent } from '@versakit/composables'

const meta: Meta<typeof MyComponent> = {
	title: 'Components/MyComponent',
	component: MyComponent,
	tags: ['autodocs'],
	// 组件参数配置
}

export default meta
type Story = StoryObj<typeof MyComponent>

// 导出不同的组件变体
export const Default: Story = {
	args: {
		// 组件属性
	},
}
```

## 文件结构

```
docs/
├── .storybook/       # Storybook 配置
│   ├── main.ts       # 主配置
│   ├── preview.ts    # 预览配置
│   └── registerComponents.ts  # 组件注册
├── stories/          # 组件故事
│   └── components/   # 按组件分类
│       ├── Button.stories.ts
│       └── Button.mdx
└── package.json      # 项目配置和依赖
```
