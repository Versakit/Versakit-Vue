# CI/CD 自动化测试快速指南

## 🎯 概述

Versakit-Vue 已配置完整的 CI/CD 自动化测试系统，确保代码质量和项目稳定性。

## ✅ 已完成的配置

### 1. GitHub Actions 工作流

**文件**: `.github/workflows/test.yml`

**触发条件**:
- ✅ 推送到 `main` 分支
- ✅ 创建或更新 Pull Request
- ✅ 手动触发

**执行内容**:
- ✅ 运行所有测试（291 个测试用例）
- ✅ 生成覆盖率报告
- ✅ 上传到 Codecov（可选）
- ✅ 保存构建产物（30 天）

### 2. 测试覆盖率要求

| 指标 | 阈值 |
|------|------|
| 代码行 | ≥ 80% |
| 函数 | ≥ 80% |
| 分支 | ≥ 80% |
| 语句 | ≥ 80% |

### 3. 项目徽章

已在 README 中添加测试状态徽章：

```markdown
![tests](https://github.com/Versakit/Versakit-Vue/actions/workflows/test.yml/badge.svg)
```

## 🚀 快速开始

### 本地运行测试

```bash
# 运行所有测试
pnpm test

# 生成覆盖率报告
pnpm test:coverage

# 监视模式（开发时使用）
pnpm test:watch

# UI 界面
pnpm test:ui

# 快速检查脚本
./scripts/check-tests.sh
```

### 查看测试结果

#### GitHub Actions
1. 访问仓库 → **Actions** 选项卡
2. 选择 **Test** 工作流
3. 查看运行记录和日志

#### 本地覆盖率报告
```bash
pnpm test:coverage
open coverage/index.html  # macOS
```

## 📁 相关文件

```
Versakit-Vue/
├── .github/
│   └── workflows/
│       ├── test.yml              # ✅ 测试工作流
│       ├── deploy.yml            # 部署工作流
│       ├── release.yml           # 发布工作流
│       └── README.md             # ✅ 工作流说明文档
├── docs/
│   └── guide/
│       └── ci-cd/
│           └── index.md          # ✅ CI/CD 详细文档
├── scripts/
│   └── check-tests.sh            # ✅ 本地测试检查脚本
├── vitest.config.ts              # Vitest 配置
├── vitest.setup.ts               # 测试环境设置
├── README.md                     # ✅ 已添加测试徽章
├── README.zh-CN.md               # ✅ 已添加测试徽章
└── CI-CD-GUIDE.md                # ✅ 本文档
```

## 🔧 配置说明

### 测试工作流配置

```yaml
# .github/workflows/test.yml
name: Test
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
      - uses: actions/setup-node@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm test
      - run: pnpm test:coverage
      - uses: codecov/codecov-action@v4  # 可选
      - uses: actions/upload-artifact@v4
```

### Vitest 配置

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
})
```

## 📊 当前测试状态

- ✅ **测试用例**: 291 个
- ✅ **测试文件**: 40 个
- ✅ **通过率**: 100%
- ✅ **覆盖率**: 已配置 ≥ 80% 阈值

## 🎓 最佳实践

### 1. 提交前检查

```bash
# 运行完整检查
./scripts/check-tests.sh

# 或手动运行
pnpm test && pnpm test:coverage
```

### 2. 为新功能添加测试

```typescript
// packages/versakit-vue/src/components/MyComponent/__tests__/MyComponent.test.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '../index.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

### 3. 监控测试状态

- 查看 GitHub Actions 运行记录
- 关注 PR 中的测试检查
- 定期查看覆盖率报告

### 4. 处理测试失败

1. 查看 CI 日志找出失败原因
2. 在本地复现问题：`pnpm test`
3. 修复问题并重新测试
4. 提交修复

## 🔗 相关资源

### 文档
- [CI/CD 详细文档](./docs/guide/ci-cd/index.md)
- [工作流说明](./.github/workflows/README.md)
- [Vitest 官方文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)

### 工具
- [GitHub Actions](https://github.com/Versakit/Versakit-Vue/actions)
- [Codecov](https://codecov.io) (可选配置)

## 🎉 成功指标

- [x] ✅ GitHub Actions 测试工作流已配置
- [x] ✅ 自动触发测试（push/PR）
- [x] ✅ 测试覆盖率报告生成
- [x] ✅ 覆盖率阈值设置（≥ 80%）
- [x] ✅ 构建产物上传
- [x] ✅ README 徽章添加
- [x] ✅ 文档完善
- [x] ✅ 本地测试脚本

## 💡 提示

1. **测试徽章**: 推送到 GitHub 后，徽章会自动显示测试状态
2. **Codecov**: 需要配置 `CODECOV_TOKEN` secret 才能使用
3. **本地优先**: 提交前在本地运行测试，避免 CI 失败
4. **持续改进**: 定期检查和提高测试覆盖率

## 🆘 故障排查

### 问题：测试在 CI 中失败但本地通过

**解决方案**:
```bash
# 清理并重新安装依赖
rm -rf node_modules
pnpm install --frozen-lockfile
pnpm test
```

### 问题：覆盖率不足

**解决方案**:
```bash
# 查看详细覆盖率报告
pnpm test:coverage
open coverage/index.html

# 为未覆盖的代码添加测试
```

### 问题：Vue 警告

**解决方案**:
```typescript
// 确保提供所有必需的 props
const wrapper = mount(Component, {
  props: {
    requiredProp: 'value'
  }
})
```

## 📞 获取帮助

- [提交 Issue](https://github.com/Versakit/Versakit-Vue/issues)
- [查看文档](https://versakit.github.io/Versakit-Vue/)
- [GitHub Discussions](https://github.com/Versakit/Versakit-Vue/discussions)

---

**最后更新**: 2025-01-23  
**状态**: ✅ 已完成并可用
