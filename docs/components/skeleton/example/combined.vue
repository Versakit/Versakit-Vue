<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, SkeletonText, SkeletonAvatar, Button } from '@versakit/vue'
import '@versakit/vue/style'

const loading = ref(true)

const toggleLoading = () => {
  loading.value = !loading.value
}
</script>

<template>
  <div class="space-y-6">
    <!-- 控制加载状态 -->
    <div class="mb-4">
      <Button @click="toggleLoading">
        {{ loading ? '显示内容' : '显示骨架屏' }}
      </Button>
    </div>

    <!-- 卡片骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">卡片骨架屏</h3>
      <Skeleton :loading="loading" class="rounded-lg overflow-hidden">
        <template #skeleton>
          <div class="p-4 bg-white dark:bg-gray-800">
            <div class="flex gap-4">
              <SkeletonAvatar size="lg" />
              <div class="flex-1">
                <SkeletonText :lines="2" />
              </div>
            </div>
            <div class="mt-4">
              <SkeletonText :lines="3" />
            </div>
          </div>
        </template>

        <!-- 实际内容 -->
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <div class="flex gap-4">
            <div
              class="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white"
            >
              VK
            </div>
            <div class="flex-1">
              <h3 class="font-medium">张三</h3>
              <p class="text-sm text-gray-500">产品经理</p>
            </div>
          </div>
          <div class="mt-4">
            <p>
              这是一个用户卡片示例，展示了如何使用Skeleton组件创建加载占位符。
            </p>
          </div>
        </div>
      </Skeleton>
    </div>

    <!-- 列表骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">列表骨架屏</h3>
      <Skeleton :loading="loading" class="rounded-lg overflow-hidden">
        <template #skeleton>
          <div class="p-4 bg-white dark:bg-gray-800">
            <div
              v-for="i in 3"
              :key="i"
              class="flex items-center gap-3 py-3"
              :class="{ 'border-t dark:border-gray-700': i > 1 }"
            >
              <SkeletonAvatar size="sm" />
              <div class="flex-1">
                <SkeletonText :lines="1" />
              </div>
              <div class="w-16">
                <Skeleton width="100%" height="24px" :rounded="true" />
              </div>
            </div>
          </div>
        </template>

        <!-- 实际内容 -->
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <div
            v-for="(item, i) in ['张三', '李四', '王五']"
            :key="i"
            class="flex items-center gap-3 py-3"
            :class="{ 'border-t dark:border-gray-700': i > 0 }"
          >
            <div
              class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"
            >
              {{ item.charAt(0) }}
            </div>
            <div class="flex-1">
              <p>{{ item }}</p>
            </div>
            <div class="w-16">
              <Button size="xs" variant="outline" fullWidth>查看</Button>
            </div>
          </div>
        </div>
      </Skeleton>
    </div>

    <!-- 文章骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">文章骨架屏</h3>
      <Skeleton :loading="loading" class="rounded-lg overflow-hidden">
        <template #skeleton>
          <div class="p-4 bg-white dark:bg-gray-800">
            <Skeleton width="60%" height="32px" class="mb-4" :rounded="true" />
            <div class="flex items-center gap-3 mb-6">
              <SkeletonAvatar size="sm" />
              <SkeletonText :lines="1" :widths="120" />
            </div>
            <Skeleton
              width="100%"
              height="200px"
              class="mb-4"
              :rounded="true"
            />
            <SkeletonText :lines="6" />
          </div>
        </template>

        <!-- 实际内容 -->
        <div class="p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">如何使用Skeleton组件</h2>
          <div class="flex items-center gap-3 mb-6">
            <div
              class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs"
            >
              VK
            </div>
            <p class="text-sm text-gray-500">张三 · 2023-10-25</p>
          </div>
          <div
            class="h-[200px] bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center"
          >
            [文章图片]
          </div>
          <p class="mb-3">
            Skeleton组件是一种在内容加载过程中显示的占位符，它能够提升用户体验。
          </p>
          <p class="mb-3">
            通过使用骨架屏，我们可以让用户在等待内容加载的过程中感知到页面的结构，减少用户的焦虑感。
          </p>
          <p>
            Versakit提供了三种骨架屏组件：Skeleton、SkeletonText和SkeletonAvatar，可以根据不同的场景进行组合使用。
          </p>
        </div>
      </Skeleton>
    </div>
  </div>
</template>
