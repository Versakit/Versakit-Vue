# Versakit-Vue Agent Instructions

本文件是 Versakit-Vue 项目的统一 AI 协作规范，适用于 Cursor、Copilot、Cline 等所有编程助手。

## 1. 项目定位

**Versakit-Vue** 是一个面向 Vue 3 的现代组件库，技术栈为 TypeScript + Vite + Tailwind CSS，采用 Monorepo（`pnpm` + `turbo`）管理。

### Tech Stack

- **Framework**: Vue 3（Composition API + `<script setup>`）
- **Language**: TypeScript（严格类型）
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 + `tailwind-variants`
- **Monorepo**: Turbo Repo + pnpm workspaces
- **Documentation**: VitePress
- **Testing**: Vitest + Vue Test Utils
- **Playground**: Monaco Editor Sandbox

## 2. 设计系统最高优先级原则（强制）

以下原则优先级高于通用组件习惯，所有新组件、重构组件都必须遵守。

### 2.1 双色默认变体（对齐 shadcn/ui 风格）

- 所有组件默认只提供两种基础视觉变体：`black`、`white`。
- 禁止沿用 Element/UI 风格的大量语义外观类型（如 `primary`、`success`、`warning`、`danger` 等）作为默认体系。
- 若业务确实需要扩展，必须在不破坏 `black/white` 双基线的前提下进行，并在组件设计文档中说明用途。
- 组件的 API 设计应保证开箱即用时只有清晰、统一、可预测的双色体验。

### 2.2 语义化原子 Token（支持换肤）

- 样式必须优先使用**语义化 Token**，禁止在组件内长期保留硬编码视觉值。
- 禁止直接写死颜色、阴影、边框、间距等具体视觉值作为长期方案（例如 `text-[#111]`、`bg-white`、`px-[13px]` 这类不可主题化写法）。
- Tailwind 原子类应映射到语义层（如 `bg-background`、`text-foreground`、`border-border`、`ring-ring` 等），保证后续通过 Token 完成换肤。
- `tailwind-variants` 中的 slots / variants 必须基于语义 Token 组织，不可把硬编码值散落在各组件中。
- 新主题能力应通过 Token 扩展实现，而非批量改组件内部类名。

### 2.3 组件样式实现约束

- 组件的视觉差异优先由 `variant`、`size`、`state` 驱动，不通过临时 class 拼接硬编码值解决。
- 暗黑模式同样必须走语义 Token，不允许额外复制一套硬编码 dark 类作为长期策略。
- 任意视觉属性只允许有一个“设计系统真相源”：Token 定义层，而不是组件业务层。

## 3. 目录结构

```text
/
├── packages/
│   ├── versakit-vue/       # Core UI Library
│   │   ├── src/components/ # Component implementations
│   │   └── dist/           # Build output
│   └── versakit-shared/    # Shared utilities
├── docs/                   # VitePress Documentation
├── storybook/              # Component Storybook
├── monaco-editor/          # Online Sandbox (Monaco based)
├── play/                   # Local dev playground
└── .github/workflows/      # CI/CD pipelines
```

## 4. 开发规范

### 4.1 包管理

- 必须使用 `pnpm`，禁止 `npm`、`yarn`。
- 命令统一在项目根目录执行：`pnpm run <script>` 或 `turbo run <task>`。

### 4.2 编码规范

- Vue 统一使用 Composition API + `<script setup lang="ts">`。
- TypeScript 保持 strict，尽量避免 `any`。
- 样式实现优先 Tailwind + `tailwind-variants`。
- 非必要不写原始 CSS，复杂动画等特殊场景除外。

### 4.3 组件结构建议

```text
MyComponent/
├── src/
│   ├── my-component.vue
│   ├── type.ts
│   └── index.variants.ts
├── __tests__/
│   └── MyComponent.test.ts
└── index.ts
```

## 5. 工作流

### 开发调试

- 文档：`pnpm run docs:dev`
- 本地 playground：`pnpm run play:dev`
- Monaco sandbox：`pnpm --filter monaco-editor-sandbox dev`
- Storybook：`pnpm run storybook`

### 构建

- UI 库构建：`pnpm run ui:build`
- 文档构建：`pnpm run docs:build`
- 全站构建：`pnpm run site:build`

### 测试

- 全量测试：`pnpm run test`
- UI 测试：`pnpm run test:ui`

## 6. AI Agent 执行准则

- 先检索再修改：先理解上下文再动代码。
- 修改组件时优先检查是否违反“双色 + Token 语义化”原则。
- 如果发现硬编码样式，应优先重构为语义 Token。
- 变更后必须验证：UI 改动至少在 Playground 或 Storybook 检查，逻辑改动运行相关测试。
- 在 `monaco-editor` 或 `play` 联调时，若改动未生效，先执行 `pnpm run ui:build`。

## 7. 配置注意事项

- Tailwind 配置通常位于 `packages/versakit-vue/tailwind.config.js`（若存在）或由各包 `vite.config.ts` 中的 Tailwind 插件接管。
- `versakit-vue`、`docs`、`monaco-editor` 各自有独立 `vite.config.ts`，修改时注意作用域。
- CI/CD 在 `.github/workflows/` 中维护，sandbox 发布到 `gh-pages` 的 `/playground/`。

---

_This file is the single source of truth for agent instructions. Do not create `.clinerules` or `.cursor/rules` manually; link them to this file if needed._
