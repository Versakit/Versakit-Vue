<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-xl font-bold mb-4">基础骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认</p>
          <Skeleton width="100%" height="100px" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Skeleton width="100%" height="100px" rounded />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">动画效果</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">脉冲动画</p>
          <Skeleton width="100%" height="100px" animation="pulse" rounded />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">波浪动画</p>
          <Skeleton width="100%" height="100px" animation="wave" rounded />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">无动画</p>
          <Skeleton width="100%" height="100px" animation="none" rounded />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">文本骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认</p>
          <SkeletonText :lines="3" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">自定义宽度和行高</p>
          <SkeletonText
            :lines="3"
            :widths="['100%', '75%', '50%']"
            lineHeight="1.5rem"
            rounded
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">头像骨架屏</h2>
      <div>
        <p class="mb-2 text-sm text-gray-500">不同尺寸</p>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="xs" />
            <span class="text-xs mt-1">xs</span>
          </div>
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="sm" />
            <span class="text-xs mt-1">sm</span>
          </div>
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="md" />
            <span class="text-xs mt-1">md</span>
          </div>
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="lg" />
            <span class="text-xs mt-1">lg</span>
          </div>
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="xl" />
            <span class="text-xs mt-1">xl</span>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="mb-2 text-sm text-gray-500">圆形 vs 方形</p>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="lg" :circle="true" />
            <span class="text-xs mt-1">圆形</span>
          </div>
          <div class="flex flex-col items-center">
            <SkeletonAvatar size="lg" :circle="false" />
            <span class="text-xs mt-1">方形</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">组合使用</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="mb-2 text-sm text-gray-500">评论骨架屏</p>
          <div class="flex gap-4">
            <SkeletonAvatar size="md" />
            <div class="flex-1">
              <Skeleton width="40%" height="20px" rounded class="mb-2" />
              <SkeletonText :lines="2" :widths="['100%', '80%']" rounded />
            </div>
          </div>
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">列表项骨架屏</p>
          <div class="space-y-4">
            <div class="flex gap-4" v-for="i in 3" :key="i">
              <SkeletonAvatar size="sm" />
              <div class="flex-1">
                <SkeletonText :lines="1" rounded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">卡片骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="border rounded-lg p-4">
          <Skeleton width="100%" height="200px" rounded class="mb-4" />
          <Skeleton width="60%" height="24px" rounded class="mb-2" />
          <SkeletonText :lines="4" rounded />
          <div class="flex justify-between mt-4">
            <Skeleton width="100px" height="36px" rounded />
            <Skeleton width="100px" height="36px" rounded />
          </div>
        </div>
        <div class="border rounded-lg p-4">
          <div class="flex gap-4 mb-4">
            <SkeletonAvatar size="lg" />
            <div class="flex-1">
              <Skeleton width="70%" height="20px" rounded class="mb-2" />
              <Skeleton width="40%" height="16px" rounded />
            </div>
          </div>
          <Skeleton width="100%" height="200px" rounded class="mb-4" />
          <SkeletonText :lines="3" rounded />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">加载状态切换</h2>
      <div>
        <button
          class="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          @click="loading = !loading"
        >
          {{ loading ? '显示内容' : '显示骨架屏' }}
        </button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton :loading="loading" width="100%" height="100px" rounded>
            <div
              class="bg-green-100 p-4 rounded h-[100px] flex items-center justify-center"
            >
              内容已加载完成！
            </div>
          </Skeleton>
          <div>
            <Skeleton :loading="loading" class="mb-2">
              <div class="flex gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white"
                >
                  用户
                </div>
                <div>
                  <div class="font-bold">用户名称</div>
                  <div class="text-sm text-gray-500">用户描述</div>
                </div>
              </div>
            </Skeleton>
            <SkeletonText v-if="loading" :lines="3" rounded />
            <div v-else class="p-2 bg-gray-100 rounded">
              <p>这是加载完成后显示的真实内容。</p>
              <p>点击按钮可以切换显示状态。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, SkeletonText, SkeletonAvatar } from '@versakit/vue'

const loading = ref(true)
</script>
