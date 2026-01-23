#!/bin/bash

# 测试质量分析脚本
# 分析测试文件的质量指标

set -e

echo "🔍 测试质量分析"
echo "================================"
echo ""

# 1. 统计测试文件数量
echo "📊 测试文件统计："
TEST_FILES=$(find packages/versakit-vue/src/components -name "*.test.ts" | wc -l | tr -d ' ')
COMPONENT_DIRS=$(find packages/versakit-vue/src/components -maxdepth 1 -type d | tail -n +2 | wc -l | tr -d ' ')
echo "  - 组件目录数: $COMPONENT_DIRS"
echo "  - 测试文件数: $TEST_FILES"
echo "  - 测试覆盖率: $(echo "scale=1; $TEST_FILES * 100 / $COMPONENT_DIRS" | bc)%"
echo ""

# 2. 分析测试用例数量
echo "📝 测试用例统计："
TOTAL_TESTS=$(grep -r "it(" packages/versakit-vue/src/components/**/__tests__/*.test.ts 2>/dev/null | wc -l | tr -d ' ')
echo "  - 总测试用例数: $TOTAL_TESTS"
echo "  - 平均每个文件: $(echo "scale=1; $TOTAL_TESTS / $TEST_FILES" | bc) 个测试"
echo ""

# 3. 检查弱断言
echo "⚠️  弱断言检查："
WEAK_ASSERTIONS=$(grep -r "expect(wrapper.exists()).toBe(true)" packages/versakit-vue/src/components/**/__tests__/*.test.ts 2>/dev/null | wc -l | tr -d ' ')
echo "  - 发现 $WEAK_ASSERTIONS 个 'wrapper.exists()' 断言"
if [ "$WEAK_ASSERTIONS" -gt 0 ]; then
  echo "  💡 建议: 使用更具体的断言来验证实际行为"
fi
echo ""

# 4. 检查测试描述质量
echo "📖 测试描述质量："
GENERIC_NAMES=$(grep -r "it('test" packages/versakit-vue/src/components/**/__tests__/*.test.ts 2>/dev/null | wc -l | tr -d ' ')
if [ "$GENERIC_NAMES" -gt 0 ]; then
  echo "  ⚠️  发现 $GENERIC_NAMES 个通用测试名称 (如 'test 1')"
  echo "  💡 建议: 使用描述性的测试名称"
else
  echo "  ✅ 所有测试都有描述性名称"
fi
echo ""

# 5. 检查是否有 skip 或 only
echo "🔍 测试执行检查："
SKIPPED=$(grep -r "it.skip\|describe.skip" packages/versakit-vue/src/components/**/__tests__/*.test.ts 2>/dev/null | wc -l | tr -d ' ')
ONLY=$(grep -r "it.only\|describe.only" packages/versakit-vue/src/components/**/__tests__/*.test.ts 2>/dev/null | wc -l | tr -d ' ')

if [ "$SKIPPED" -gt 0 ]; then
  echo "  ⚠️  发现 $SKIPPED 个被跳过的测试"
  echo "  💡 建议: 修复或删除被跳过的测试"
else
  echo "  ✅ 没有被跳过的测试"
fi

if [ "$ONLY" -gt 0 ]; then
  echo "  ⚠️  发现 $ONLY 个 .only 测试"
  echo "  💡 建议: 移除 .only，运行所有测试"
else
  echo "  ✅ 没有 .only 测试"
fi
echo ""

# 6. 运行测试并生成覆盖率
echo "🧪 运行测试并生成覆盖率报告..."
echo ""
pnpm test:coverage --reporter=verbose

echo ""
echo "================================"
echo "✅ 分析完成！"
echo ""
echo "💡 下一步："
echo "  1. 查看详细覆盖率报告: open coverage/index.html"
echo "  2. 阅读测试质量指南: docs/guide/testing-quality/index.md"
echo "  3. 改进低质量的测试"
echo ""
