<template>
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 基础用法 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">基础用法</h3>
        <div class="flex flex-wrap gap-2">
          <Chip>默认芯片</Chip>
          <Chip color="primary">主色芯片</Chip>
          <Chip color="secondary">次要色芯片</Chip>
          <Chip color="success">成功芯片</Chip>
          <Chip color="warning">警告芯片</Chip>
          <Chip color="danger">危险芯片</Chip>
        </div>
      </div>

      <!-- 禁用状态 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">禁用状态</h3>
        <div class="flex flex-wrap gap-2">
          <Chip disabled>禁用芯片</Chip>
          <Chip color="primary" disabled>禁用主色</Chip>
          <Chip color="danger" disabled>禁用危险</Chip>
        </div>
      </div>

      <!-- 尺寸 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">尺寸</h3>
        <div class="flex items-center flex-wrap gap-3">
          <Chip size="sm" color="primary">小号</Chip>
          <Chip size="md" color="primary">中号</Chip>
          <Chip size="lg" color="primary">大号</Chip>
        </div>
      </div>

      <!-- 圆角 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">圆角</h3>
        <div class="flex flex-wrap gap-3">
          <Chip radius="none" color="primary">无圆角</Chip>
          <Chip radius="sm" color="primary">小圆角</Chip>
          <Chip radius="md" color="primary">中圆角</Chip>
          <Chip radius="lg" color="primary">大圆角</Chip>
          <Chip radius="full" color="primary">全圆角</Chip>
        </div>
      </div>

      <!-- 颜色 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">颜色</h3>
        <div class="flex flex-wrap gap-2">
          <Chip color="default">默认</Chip>
          <Chip color="primary">主色</Chip>
          <Chip color="secondary">次要色</Chip>
          <Chip color="success">成功</Chip>
          <Chip color="warning">警告</Chip>
          <Chip color="danger">危险</Chip>
        </div>
      </div>

      <!-- 自定义内容 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">自定义内容</h3>
        <div class="flex flex-wrap gap-3">
          <Chip color="primary">
            <template #startContent>
              <span class="text-primary-600">🔥</span>
            </template>
            热门话题
          </Chip>

          <Chip color="success">
            <template #startContent>
              <svg
                class="w-3.5 h-3.5 text-success-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            已完成
          </Chip>

          <Chip color="warning">
            需注意
            <template #endContent>
              <svg
                class="w-3.5 h-3.5 text-warning-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
          </Chip>
        </div>
      </div>

      <!-- 带头像 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">带头像</h3>
        <div class="flex flex-wrap gap-3">
          <Chip color="primary">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-primary-500 text-white text-xs font-medium"
              >
                U
              </div>
            </template>
            用户
          </Chip>

          <Chip color="success">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-success-500 text-white text-xs font-medium"
              >
                A
              </div>
            </template>
            管理员
          </Chip>

          <Chip color="secondary">
            <template #avatar>
              <div
                class="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500 text-white text-xs font-medium overflow-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </template>
            访客
          </Chip>
        </div>
      </div>

      <!-- 关闭按钮 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">关闭按钮</h3>
        <div class="flex flex-wrap gap-3">
          <Chip closable @close="handleClose">可关闭芯片</Chip>
          <Chip closable color="primary" @close="handleClose">主色</Chip>
          <Chip closable color="danger" @close="handleClose">危险</Chip>
        </div>
      </div>

      <!-- 可选择 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">可选择</h3>
        <div class="flex flex-wrap gap-3">
          <Chip v-model="selected1" selectable color="primary">选项1</Chip>
          <Chip v-model="selected2" selectable color="secondary">选项2</Chip>
          <Chip v-model="selected3" selectable color="success">选项3</Chip>
        </div>
        <div class="mt-3 text-sm text-gray-500">
          已选择:
          {{
            [
              selected1 ? '选项1' : '',
              selected2 ? '选项2' : '',
              selected3 ? '选项3' : '',
            ]
              .filter(Boolean)
              .join(', ') || '无'
          }}
        </div>
      </div>

      <!-- 芯片列表 -->
      <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 class="text-lg font-medium mb-4 border-b pb-2">芯片列表</h3>
        <div class="flex flex-wrap gap-2">
          <Chip
            v-for="(tag, index) in tags"
            :key="index"
            closable
            @close="removeTag(index)"
          >
            {{ tag }}
          </Chip>
          <button
            @click="addTag"
            class="inline-flex items-center border border-dashed border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition-colors"
          >
            <span class="mr-1">+</span>
            添加标签
          </button>
        </div>
      </div>
    </div>

    <!-- 变体 - 占据整行 -->
    <div class="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 class="text-lg font-medium mb-4 border-b pb-2">变体</h3>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">solid 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="solid" color="default">默认</Chip>
            <Chip variant="solid" color="primary">主色</Chip>
            <Chip variant="solid" color="secondary">次要色</Chip>
            <Chip variant="solid" color="success">成功</Chip>
            <Chip variant="solid" color="warning">警告</Chip>
            <Chip variant="solid" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">bordered 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="bordered" color="default">默认</Chip>
            <Chip variant="bordered" color="primary">主色</Chip>
            <Chip variant="bordered" color="secondary">次要色</Chip>
            <Chip variant="bordered" color="success">成功</Chip>
            <Chip variant="bordered" color="warning">警告</Chip>
            <Chip variant="bordered" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">light 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="light" color="default">默认</Chip>
            <Chip variant="light" color="primary">主色</Chip>
            <Chip variant="light" color="secondary">次要色</Chip>
            <Chip variant="light" color="success">成功</Chip>
            <Chip variant="light" color="warning">警告</Chip>
            <Chip variant="light" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">flat 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="flat" color="default">默认</Chip>
            <Chip variant="flat" color="primary">主色</Chip>
            <Chip variant="flat" color="secondary">次要色</Chip>
            <Chip variant="flat" color="success">成功</Chip>
            <Chip variant="flat" color="warning">警告</Chip>
            <Chip variant="flat" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">faded 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="faded" color="default">默认</Chip>
            <Chip variant="faded" color="primary">主色</Chip>
            <Chip variant="faded" color="secondary">次要色</Chip>
            <Chip variant="faded" color="success">成功</Chip>
            <Chip variant="faded" color="warning">警告</Chip>
            <Chip variant="faded" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">shadow 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="shadow" color="default">默认</Chip>
            <Chip variant="shadow" color="primary">主色</Chip>
            <Chip variant="shadow" color="secondary">次要色</Chip>
            <Chip variant="shadow" color="success">成功</Chip>
            <Chip variant="shadow" color="warning">警告</Chip>
            <Chip variant="shadow" color="danger">危险</Chip>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 mb-2 font-medium">dot 变体</p>
          <div class="flex flex-wrap gap-2">
            <Chip variant="dot" color="default">默认</Chip>
            <Chip variant="dot" color="primary">主色</Chip>
            <Chip variant="dot" color="secondary">次要色</Chip>
            <Chip variant="dot" color="success">成功</Chip>
            <Chip variant="dot" color="warning">警告</Chip>
            <Chip variant="dot" color="danger">危险</Chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Chip } from '@versakit/vue'

const selected1 = ref(false)
const selected2 = ref(true)
const selected3 = ref(false)

const tags = ref(['Vue', 'React', 'Angular', 'Svelte'])

const handleClose = (event: Event) => {
  console.log('芯片被关闭', event)
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const addTag = () => {
  const frameworks = ['Next.js', 'Nuxt', 'Vite', 'Astro', 'SolidJS', 'Preact']
  const randomIndex = Math.floor(Math.random() * frameworks.length)
  if (!tags.value.includes(frameworks[randomIndex])) {
    tags.value.push(frameworks[randomIndex])
  }
}
</script>
