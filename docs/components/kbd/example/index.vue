<script setup lang="ts">
import { Kbd } from '@versakit/vue'
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- 基本用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基本用法</h2>
      <div class="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>C</Kbd>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex items-center gap-4">
        <Kbd size="xs">A</Kbd>
        <Kbd size="sm">B</Kbd>
        <Kbd size="md">C</Kbd>
        <Kbd size="lg">D</Kbd>
      </div>
    </section>

    <!-- 常用组合 -->
    <section>
      <h2 class="text-lg font-medium mb-4">常用组合</h2>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>F</Kbd>
        </div>
        <div class="flex items-center gap-2">
          <Kbd size="sm">Alt</Kbd>
          <span>+</span>
          <Kbd size="sm">Tab</Kbd>
        </div>
        <div class="flex items-center gap-2">
          <Kbd>Esc</Kbd>
          <span class="text-sm text-gray-500">退出</span>
        </div>
      </div>
    </section>
  </div>
</template>
