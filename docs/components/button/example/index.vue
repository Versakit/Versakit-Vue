<template>
  <div class="space-y-8">
    <!-- 变体样式示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">变体样式</h3>
      <div class="flex flex-wrap gap-4">
        <Button>默认按钮</Button>
        <Button variant="secondary">次要按钮</Button>
        <Button variant="success">成功按钮</Button>
        <Button variant="warning">警告按钮</Button>
        <Button variant="info">信息按钮</Button>
        <Button variant="danger">危险按钮</Button>
        <Button variant="outline">描边按钮</Button>
        <Button variant="ghost">幽灵按钮</Button>
        <Button variant="link">链接按钮</Button>
      </div>
    </section>

    <!-- 尺寸示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">尺寸</h3>
      <div class="flex items-center flex-wrap gap-4">
        <Button size="xs">超小按钮</Button>
        <Button size="sm">小按钮</Button>
        <Button size="md">中按钮</Button>
        <Button size="lg">大按钮</Button>
      </div>
    </section>

    <!-- 状态示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">状态</h3>
      <div class="flex flex-wrap gap-4">
        <Button disabled>禁用按钮</Button>
        <Button loading>加载中</Button>
        <Button variant="outline" disabled>禁用描边</Button>
        <Button variant="outline" loading>加载中</Button>
      </div>
    </section>

    <!-- 圆角示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">圆角</h3>
      <div class="flex flex-wrap gap-4">
        <Button rounded>圆角按钮</Button>
        <Button size="xs" rounded>超小圆角</Button>
        <Button size="lg" rounded>大圆角</Button>
      </div>
    </section>

    <!-- 全宽示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">全宽</h3>
      <div class="space-y-2">
        <Button fullWidth>全宽按钮</Button>
        <Button variant="outline" fullWidth>全宽描边按钮</Button>
      </div>
    </section>

    <!-- 组合示例 -->
    <section>
      <h3 class="text-lg font-medium mb-4">组合使用</h3>
      <div class="space-y-2">
        <div class="flex flex-wrap gap-4">
          <Button variant="primary" size="sm" rounded>圆角小按钮</Button>
          <Button variant="danger" loading>危险加载</Button>
          <Button variant="outline" disabled rounded>禁用圆角描边</Button>
        </div>
        <Button variant="secondary" fullWidth size="lg">
          大号全宽次要按钮
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@versakit/vue'
</script>
