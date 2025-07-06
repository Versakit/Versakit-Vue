<script setup lang="ts">
import { Card } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Card>
        <template #header>
          <h3 class="text-lg font-medium">卡片标题</h3>
        </template>
        <p>这是一个基础卡片的内容区域。</p>
        <template #footer>
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-blue-500 text-white rounded">
              确定
            </button>
          </div>
        </template>
      </Card>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2">默认</p>
          <Card variant="default">
            <template #header>
              <h3 class="text-lg font-medium">默认卡片</h3>
            </template>
            <p>默认卡片样式。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">带边框</p>
          <Card variant="bordered">
            <template #header>
              <h3 class="text-lg font-medium">带边框的卡片</h3>
            </template>
            <p>带有边框的卡片样式。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">阴影</p>
          <Card variant="elevated">
            <template #header>
              <h3 class="text-lg font-medium">阴影卡片</h3>
            </template>
            <p>带有阴影效果的卡片样式。</p>
          </Card>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同内边距</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <p class="mb-2">无内边距</p>
          <Card padding="none">
            <p>无内边距的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">小内边距</p>
          <Card padding="sm">
            <p>小内边距的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">中等内边距</p>
          <Card padding="md">
            <p>中等内边距的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">大内边距</p>
          <Card padding="lg">
            <p>大内边距的卡片。</p>
          </Card>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同圆角</h2>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <p class="mb-2">无圆角</p>
          <Card radius="none">
            <p>无圆角的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">小圆角</p>
          <Card radius="sm">
            <p>小圆角的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">中等圆角</p>
          <Card radius="md">
            <p>中等圆角的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">大圆角</p>
          <Card radius="lg">
            <p>大圆角的卡片。</p>
          </Card>
        </div>
        <div>
          <p class="mb-2">全圆角</p>
          <Card radius="full">
            <p>全圆角的卡片。</p>
          </Card>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">悬停效果</h2>
      <Card hover>
        <p>鼠标悬停在此卡片上会有效果。</p>
      </Card>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Card
        :pt="{
          root: 'bg-purple-50 border border-purple-200',
          header: 'border-b border-purple-200 bg-purple-100',
          body: 'text-purple-700',
          footer: 'border-t border-purple-200 bg-purple-100',
        }"
      >
        <template #header>
          <h3 class="text-lg font-medium">自定义样式卡片</h3>
        </template>
        <p>这是一个使用 pt 属性自定义样式的卡片。</p>
        <template #footer>
          <div class="text-right">卡片底部</div>
        </template>
      </Card>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden shadow-lg',
            header: 'p-4 text-white border-b border-white/20',
            body: 'p-4 text-white',
            footer: 'p-4 bg-white/10 text-white',
          }"
        >
          <template #header>
            <h3 class="text-lg font-medium">渐变背景卡片</h3>
          </template>
          <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义卡片。</p>
          <template #footer>
            <div class="flex justify-end">
              <button class="px-4 py-2 bg-white text-purple-500 rounded">
                确定
              </button>
            </div>
          </template>
        </Card>
        <Card
          unstyled
          :pt="{
            root: 'border-2 border-dashed border-gray-300 rounded-md overflow-hidden bg-gray-50',
            header: 'p-4 border-b border-dashed border-gray-300 bg-gray-100',
            body: 'p-4',
            footer: 'p-4 border-t border-dashed border-gray-300 bg-gray-100',
          }"
        >
          <template #header>
            <h3 class="text-lg font-medium">虚线边框卡片</h3>
          </template>
          <p>这是另一个使用 unstyled 属性和 pt 属性创建的自定义卡片。</p>
          <template #footer>
            <div class="flex justify-end">
              <button class="px-4 py-2 border border-gray-300 rounded">
                取消
              </button>
            </div>
          </template>
        </Card>
      </div>
    </section>
  </div>
</template>
