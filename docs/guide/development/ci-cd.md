# CI/CD 自动化测试

Versakit-Vue 使用 GitHub Actions 实现持续集成和持续部署（CI/CD），确保代码质量和项目稳定性。

## 概述

项目配置了自动化测试工作流，在以下情况下自动运行：

- 推送代码到 `main` 分支
- 创建或更新 Pull Request
- 手动触发（从 GitHub Actions 界面）

## 测试工作流

### 自动触发

每次推送代码或创建 PR 时，GitHub Actions 会自动：

1. ✅ 安装项目依赖
2. ✅ 运行所有单元测试（291 个测试用例）
3. ✅ 生成测试覆盖率报告
4. ✅ 上传覆盖率数据到 Codecov
5. ✅ 保存覆盖率报告为构建产物

### 查看测试结果

#### 在 GitHub 上查看

1. 访问项目的 GitHub 仓库
2. 点击顶部的 **Actions** 选项卡
3. 选择 **Test** 工作流
4. 查看最近的运行记录和详细日志

#### 下载覆盖率报告

1. 在 Actions 运行详情页面，滚动到底部
2. 找到 **Artifacts** 部分
3. 下载 `coverage-report` 压缩包
4. 解压后打开 `index.html` 查看详细报告

## 本地测试

### 运行所有测试

```bash
pnpm test
```

这会运行所有测试用例并显示结果。

### 生成覆盖率报告

```bash
pnpm test:coverage
```

运行后会在 `coverage/` 目录生成 HTML 报告：

```bash
# macOS
open coverage/index.html

# Linux
xdg-open coverage/index.html

# Windows
start coverage/index.html
```

### 监视模式

在开发时，可以使用监视模式自动重新运行测试：

```bash
pnpm test:watch
```

### UI 界面

使用 Vitest UI 界面查看测试：

```bash
pnpm test:ui
```

这会打开一个浏览器界面，提供更友好的测试查看和调试体验。

## 测试覆盖率要求

项目设置了严格的测试覆盖率阈值：

| 指标 | 要求 |
|------|------|
| 代码行覆盖率 | ≥ 80% |
| 函数覆盖率 | ≥ 80% |
| 分支覆盖率 | ≥ 80% |
| 语句覆盖率 | ≥ 80% |

如果覆盖率低于这些阈值，CI 测试将失败。

## 测试最佳实践

### 1. 提交前运行测试

在提交代码前，始终运行测试确保没有破坏现有功能：

```bash
# 快速检查
pnpm test

# 完整检查（包括覆盖率）
./scripts/check-tests.sh
```

### 2. 为新功能添加测试

每个新组件或功能都应该有对应的测试：

```typescript
// 组件位置
packages/versakit-vue/src/components/MyComponent/index.vue

// 测试位置
packages/versakit-vue/src/components/MyComponent/__tests__/MyComponent.test.ts
```

### 3. 测试命名规范

使用描述性的测试名称：

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '../index.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.exists()).toBe(true)
  })

  it('handles click events', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
```

### 4. 测试关键功能

重点测试以下方面：

- ✅ 组件渲染
- ✅ Props 传递和验证
- ✅ 事件触发和处理
- ✅ 插槽内容
- ✅ 条件渲染
- ✅ 用户交互
- ✅ 边界情况

### 5. 避免测试实现细节

测试应该关注组件的行为，而不是实现细节：

```typescript
// ❌ 不好 - 测试实现细节
it('has a data property called count', () => {
  expect(wrapper.vm.count).toBe(0)
})

// ✅ 好 - 测试行为
it('displays initial count of 0', () => {
  expect(wrapper.text()).toContain('Count: 0')
})
```

## 故障排查

### 测试在 CI 中失败但本地通过

可能的原因：

1. **依赖版本不一致**
   ```bash
   # 删除 node_modules 重新安装
   rm -rf node_modules
   pnpm install --frozen-lockfile
   ```

2. **环境差异**
   - CI 使用 Ubuntu，本地可能是 macOS/Windows
   - 检查路径分隔符、文件权限等

3. **时区或时间相关测试**
   - 使用固定的时间进行测试
   - 避免依赖系统时间

### 覆盖率不足

如果覆盖率低于 80%：

1. 运行覆盖率报告查看未覆盖的代码：
   ```bash
   pnpm test:coverage
   open coverage/index.html
   ```

2. 为未覆盖的代码添加测试

3. 如果某些代码确实不需要测试（如类型定义），在 `vitest.config.ts` 中排除：
   ```typescript
   coverage: {
     exclude: [
       'packages/versakit-vue/src/**/*.d.ts',
       'packages/versakit-vue/src/**/types.ts',
       // 添加其他排除项
     ]
   }
   ```

### Vue 警告

测试可能会显示 Vue 警告（如缺少必需的 props），但测试仍然通过。这些警告应该被修复：

```typescript
// ❌ 会产生警告
const wrapper = mount(MyComponent)

// ✅ 提供必需的 props
const wrapper = mount(MyComponent, {
  props: {
    requiredProp: 'value'
  }
})
```

## 配置 Codecov（可选）

如果想使用 Codecov 跟踪覆盖率趋势：

1. 访问 [codecov.io](https://codecov.io) 并登录
2. 添加你的 GitHub 仓库
3. 获取 Codecov Token
4. 在 GitHub 仓库设置中添加 Secret：
   - Name: `CODECOV_TOKEN`
   - Value: 你的 Codecov Token
5. 推送代码，覆盖率数据会自动上传

## 相关文件

- `.github/workflows/test.yml` - CI 测试工作流配置
- `vitest.config.ts` - Vitest 测试配置
- `vitest.setup.ts` - 测试环境设置
- `scripts/check-tests.sh` - 本地测试检查脚本

## 相关链接

- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Codecov 文档](https://docs.codecov.com/)

## 总结

通过 CI/CD 自动化测试，我们确保：

- ✅ 每次代码变更都经过测试验证
- ✅ 保持高测试覆盖率（≥ 80%）
- ✅ 及早发现和修复问题
- ✅ 提高代码质量和项目稳定性
- ✅ 增强团队协作信心

记住：**测试不是负担，而是保护网！** 🛡️

