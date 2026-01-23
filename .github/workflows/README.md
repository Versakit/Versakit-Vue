# GitHub Actions 工作流说明

本目录包含 Versakit-Vue 项目的 CI/CD 自动化工作流。

## 工作流列表

### 1. Test（测试）

**文件**: `test.yml`

**触发条件**:
- 推送到 `main` 分支
- 创建或更新 Pull Request 到 `main` 分支
- 手动触发（从 GitHub Actions 选项卡）

**功能**:
- 自动运行所有单元测试
- 生成测试覆盖率报告
- 上传覆盖率报告到 Codecov（需要配置 `CODECOV_TOKEN`）
- 保存覆盖率报告作为构建产物（保留 30 天）

**本地运行测试**:
```bash
# 运行所有测试
pnpm test

# 运行测试并生成覆盖率报告
pnpm test:coverage

# 以监视模式运行测试
pnpm test:watch

# 使用 UI 界面运行测试
pnpm test:ui
```

### 2. Deploy（部署）

**文件**: `deploy.yml`

**触发条件**:
- 推送到 `main` 分支
- 手动触发

**功能**:
- 构建 UI 组件库
- 构建文档站点
- 构建 Storybook
- 部署到 GitHub Pages

### 3. Release（发布）

**文件**: `release.yml`

**触发条件**:
- 推送到 `main` 分支

**功能**:
- 使用 Changesets 管理版本
- 创建发布 Pull Request
- 发布到 npm（当前已注释）

## 测试覆盖率要求

项目配置了以下测试覆盖率阈值（在 `vitest.config.ts` 中）：

- 代码行覆盖率: ≥ 80%
- 函数覆盖率: ≥ 80%
- 分支覆盖率: ≥ 80%
- 语句覆盖率: ≥ 80%

如果覆盖率低于这些阈值，测试将失败。

## 查看测试结果

### 在 GitHub 上查看

1. 进入项目的 GitHub 仓库
2. 点击 "Actions" 选项卡
3. 选择 "Test" 工作流
4. 查看最近的运行记录

### 查看覆盖率报告

1. 在 Actions 运行详情页面，找到 "Artifacts" 部分
2. 下载 `coverage-report` 文件
3. 解压后打开 `index.html` 查看详细的覆盖率报告

### 使用 Codecov（可选）

如果配置了 Codecov：

1. 在项目设置中添加 `CODECOV_TOKEN` secret
2. 访问 https://codecov.io 查看覆盖率趋势和报告

## 故障排查

### 测试失败

如果测试在 CI 中失败：

1. 查看失败的测试日志
2. 在本地运行相同的测试：`pnpm test`
3. 修复问题后重新提交

### 覆盖率不足

如果覆盖率低于阈值：

1. 运行 `pnpm test:coverage` 查看详细报告
2. 为未覆盖的代码添加测试
3. 或者调整 `vitest.config.ts` 中的阈值（不推荐）

### 依赖安装失败

如果依赖安装失败：

1. 检查 `pnpm-lock.yaml` 是否已提交
2. 确保 Node.js 和 pnpm 版本正确
3. 尝试删除 `node_modules` 并重新安装

## 最佳实践

1. **提交前运行测试**: 使用 `pnpm test` 确保所有测试通过
2. **保持高覆盖率**: 为新功能添加测试，保持覆盖率 ≥ 80%
3. **修复警告**: 虽然测试可能通过，但应修复 Vue 警告
4. **使用 Husky**: 项目已配置 pre-commit hook，会自动运行 lint
5. **查看 PR 检查**: 在合并 PR 前确保所有检查通过

## 配置文件

- `vitest.config.ts`: Vitest 测试配置
- `vitest.setup.ts`: 测试环境设置
- `.github/workflows/test.yml`: CI 测试工作流
- `package.json`: 测试脚本定义

## 相关文档

- [Vitest 文档](https://vitest.dev/)
- [Vue Test Utils 文档](https://test-utils.vuejs.org/)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Codecov 文档](https://docs.codecov.com/)
