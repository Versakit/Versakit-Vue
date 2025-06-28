<script setup lang="ts">
import { Kbd } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-4">
        <Kbd>Ctrl</Kbd>
        <Kbd>Alt</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>Enter</Kbd>
        <Kbd>Tab</Kbd>
        <Kbd>Esc</Kbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex flex-wrap items-center gap-4">
        <div>
          <p class="mb-2">超小尺寸</p>
          <Kbd size="xs">Ctrl</Kbd>
        </div>
        <div>
          <p class="mb-2">小尺寸</p>
          <Kbd size="sm">Ctrl</Kbd>
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Kbd size="md">Ctrl</Kbd>
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Kbd size="lg">Ctrl</Kbd>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">组合键</h2>
      <div class="flex flex-wrap gap-8">
        <div class="flex items-center gap-2">
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>C</Kbd>
        </div>
        <div class="flex items-center gap-2">
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>R</Kbd>
        </div>
        <div class="flex items-center gap-2">
          <Kbd>Alt</Kbd>
          <span>+</span>
          <Kbd>Tab</Kbd>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-4">
        <Kbd
          :pt="{
            root: 'bg-purple-100 text-purple-700 border-purple-300 shadow-purple-200',
          }"
        >
          Alt
        </Kbd>
        <Kbd
          :pt="{
            root: 'bg-green-100 text-green-700 border-green-300 shadow-green-200',
          }"
        >
          Shift
        </Kbd>
        <Kbd
          :pt="{
            root: 'bg-blue-100 text-blue-700 border-blue-300 shadow-blue-200',
          }"
        >
          Enter
        </Kbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-4">
        <Kbd
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
          }"
        >
          Tab
        </Kbd>
        <Kbd
          unstyled
          :pt="{
            root: 'bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-mono shadow-lg border border-gray-700',
          }"
        >
          Esc
        </Kbd>
        <Kbd
          unstyled
          :pt="{
            root: 'bg-white text-gray-800 px-2 py-1 rounded-md text-sm font-mono shadow-md border-2 border-gray-300',
          }"
        >
          Space
        </Kbd>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">实际应用示例</h2>
      <div class="space-y-4">
        <p>
          按下
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>S</Kbd>
          保存文件
        </p>
        <p>
          按下
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>Shift</Kbd>
          <span>+</span>
          <Kbd>P</Kbd>
          打开命令面板
        </p>
        <p>
          按下
          <Kbd
            unstyled
            :pt="{
              root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
            }"
          >
            Alt
          </Kbd>
          <span>+</span>
          <Kbd
            unstyled
            :pt="{
              root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-sm font-mono shadow-md',
            }"
          >
            F4
          </Kbd>
          关闭窗口
        </p>
      </div>
    </section>
  </div>
</template>
