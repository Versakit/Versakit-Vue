<script setup lang="ts">
import { ref, h } from 'vue'
import { Chip } from '@versakit/vue'

const selected = ref(false)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-2">
        <Chip>基础标签</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同变体</h2>
      <div class="flex flex-wrap gap-2">
        <Chip variant="solid">实心</Chip>
        <Chip variant="bordered">边框</Chip>
        <Chip variant="light">轻量</Chip>
        <Chip variant="flat">扁平</Chip>
        <Chip variant="faded">淡化</Chip>
        <Chip variant="shadow">阴影</Chip>
        <Chip variant="dot">圆点</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex flex-wrap gap-2">
        <Chip color="default">默认</Chip>
        <Chip color="primary">主色</Chip>
        <Chip color="secondary">次要</Chip>
        <Chip color="success">成功</Chip>
        <Chip color="warning">警告</Chip>
        <Chip color="danger">危险</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex flex-wrap gap-2 items-center">
        <Chip size="sm">小尺寸</Chip>
        <Chip size="md">中等尺寸</Chip>
        <Chip size="lg">大尺寸</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同圆角</h2>
      <div class="flex flex-wrap gap-2">
        <Chip radius="none">无圆角</Chip>
        <Chip radius="sm">小圆角</Chip>
        <Chip radius="md">中等圆角</Chip>
        <Chip radius="lg">大圆角</Chip>
        <Chip radius="full">全圆角</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可选择的标签</h2>
      <div class="flex flex-wrap gap-2">
        <Chip selectable v-model="selected">
          {{ selected ? '已选中' : '点击选择' }}
        </Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可关闭的标签</h2>
      <div class="flex flex-wrap gap-2">
        <Chip closable>可关闭标签</Chip>
        <Chip closable variant="bordered" color="primary">可关闭主色标签</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-2">
        <Chip disabled>禁用标签</Chip>
        <Chip disabled selectable>禁用可选择</Chip>
        <Chip disabled closable>禁用可关闭</Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带内容的标签</h2>
      <div class="flex flex-wrap gap-2">
        <Chip
          :avatar="
            h(
              'div',
              {
                class:
                  'w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white',
              },
              'A',
            )
          "
        >
          带头像
        </Chip>
        <Chip :startContent="h('div', { class: 'text-blue-500' }, '🔍')">
          带起始内容
        </Chip>
        <Chip :endContent="h('div', { class: 'text-blue-500' }, '✓')">
          带结束内容
        </Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex flex-wrap gap-2">
        <Chip
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
          }"
        >
          渐变背景
        </Chip>
        <Chip
          closable
          :pt="{
            root: 'bg-green-100 text-green-800 border border-green-300',
            closeButton: 'text-green-700 hover:bg-green-200',
          }"
        >
          自定义关闭按钮
        </Chip>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="flex flex-wrap gap-2">
        <Chip
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full inline-flex items-center',
            content: 'mx-1',
          }"
        >
          无样式模式
        </Chip>
        <Chip
          unstyled
          closable
          :pt="{
            root: 'bg-yellow-100 text-yellow-800 border border-yellow-300 px-3 py-1 rounded-md inline-flex items-center',
            content: 'mx-1',
            closeButton:
              'ml-1 text-yellow-700 hover:bg-yellow-200 rounded-full p-1',
          }"
        >
          自定义关闭
        </Chip>
        <Chip
          unstyled
          :startContent="h('div', { class: 'mr-1 text-purple-700' }, '🔔')"
          :pt="{
            root: 'bg-purple-100 text-purple-800 px-3 py-1 rounded-md inline-flex items-center',
            content: 'mx-1',
          }"
        >
          带图标
        </Chip>
      </div>
    </section>
  </div>
</template>
