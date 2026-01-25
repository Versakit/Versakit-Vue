#!/bin/bash

# 测试状态检查脚本
# 用于在提交前快速验证测试状态

set -e

echo "🧪 开始运行测试..."
echo ""

# 运行测试
pnpm test

echo ""
echo "📊 生成覆盖率报告..."
echo ""

# 生成覆盖率报告
pnpm test:coverage

echo ""
echo "✅ 所有测试通过！"
echo ""
echo "💡 提示："
echo "  - 查看详细覆盖率报告: open coverage/index.html"
echo "  - 运行监视模式: pnpm test:watch"
echo "  - 使用 UI 界面: pnpm test:ui"
echo ""
