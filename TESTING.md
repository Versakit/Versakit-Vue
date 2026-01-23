# 测试指南

## 快速开始

### 运行测试

```bash
# 运行所有测试
pnpm test

# 运行测试并生成覆盖率报告
pnpm test:coverage

# 监视模式（开发时使用）
pnpm test:watch

# UI 界面
pnpm test:ui
```

### 使用测试检查脚本

```bash
# 运行完整的测试检查（推荐在提交前使用）
./scripts/check-tests.sh
```

## CI/CD 自动化

### 自动触发

测试会在以下情况自动运行：

- ✅ 推送代码到 `main` 分支
- ✅ 创建或更新 Pull Request
- ✅ 手动触发（从 GitHub Actions）

### 查看结果

1. 访问 [GitHub Actions](https://github.com/Versakit/Versakit-Vue/actions)
2. 选择 **Test** 工作流
3. 查看运行记录和日志

## 测试覆盖率

项目要求测试覆盖率 ≥ 80%：

- 代码行覆盖率: ≥ 80%
- 函数覆盖率: ≥ 80%
- 分支覆盖率: ≥ 80%
- 语句覆盖率: ≥ 80%

### 查看覆盖率报告

```bash
# 生成报告
pnpm test:coverage

# 打开 HTML 报告
open coverage/index.html  # macOS
xdg-open coverage/index.html  # Linux
start coverage/index.html  # Windows
```

## 编写测试

### 测试文件位置

```
packages/versakit-vue/src/components/
└── MyComponent/
    ├── index.vue
    └── __tests__/
        └── MyComponent.test.ts
```

### 基本测试模板

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '../index.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.exists()).toBe(true)
  })

  it('displays correct text', () => {
    const wrapper = mount(MyComponent, {
      props: { text: 'Hello' }
    })
    expect(wrapper.text()).toContain('Hello')
  })

  it('emits events', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
```

## 最佳实践

### 1. 提交前测试

```bash
# 快速检查
pnpm test

# 完整检查（包括覆盖率）
./scripts/check-tests.sh
```

### 2. 测试命名

使用描述性的测试名称：

```typescript
// ✅ 好
it('displays error message when input is invalid', () => {})

// ❌ 不好
it('test 1', () => {})
```

### 3. 测试行为而非实现

```typescript
// ✅ 好 - 测试行为
it('displays count when button is clicked', async () => {
  const wrapper = mount(Counter)
  await wrapper.find('button').trigger('click')
  expect(wrapper.text()).toContain('Count: 1')
})

// ❌ 不好 - 测试实现细节
it('increments count variable', () => {
  const wrapper = mount(Counter)
  expect(wrapper.vm.count).toBe(0)
})
```

### 4. 提供必需的 Props

```typescript
// ✅ 好
const wrapper = mount(MyComponent, {
  props: {
    requiredProp: 'value'
  }
})

// ❌ 不好 - 会产生 Vue 警告
const wrapper = mount(MyComponent)
```

## 故障排查

### 测试失败

```bash
# 查看详细错误信息
pnpm test

# 运行特定测试文件
pnpm test MyComponent.test.ts

# 使用 UI 界面调试
pnpm test:ui
```

### 覆盖率不足

```bash
# 查看哪些代码未被覆盖
pnpm test:coverage
open coverage/index.html
```

### CI 失败但本地通过

```bash
# 清理并重新安装
rm -rf node_modules
pnpm install --frozen-lockfile
pnpm test
```

## 相关文档

- [CI/CD 详细指南](./docs/guide/ci-cd/index.md)
- [快速参考](./CI-CD-GUIDE.md)
- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)

## 获取帮助

- [提交 Issue](https://github.com/Versakit/Versakit-Vue/issues)
- [GitHub Discussions](https://github.com/Versakit/Versakit-Vue/discussions)
