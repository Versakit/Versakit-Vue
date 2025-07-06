<script setup lang="ts">
import { ref } from 'vue'
import { Avatar } from '@versakit/vue'
import '@versakit/vue/style'

const imageError = ref(false)
const toggleError = () => {
  imageError.value = !imageError.value
}
</script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="用户头像"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="用户头像"
        />
        <Avatar alt="张三" />
        <Avatar />
      </div>
    </section>

    <!-- 不同大小 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同大小</h2>
      <div class="flex gap-6 items-end">
        <Avatar
          src="https://randomuser.me/api/portraits/men/2.jpg"
          alt="用户头像"
          size="xs"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="用户头像"
          size="sm"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/4.jpg"
          alt="用户头像"
          size="md"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/5.jpg"
          alt="用户头像"
          size="lg"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/6.jpg"
          alt="用户头像"
          size="xl"
        />
      </div>
    </section>

    <!-- 不同形状 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同形状</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/7.jpg"
          alt="用户头像"
          shape="circle"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/8.jpg"
          alt="用户头像"
          shape="square"
        />
      </div>
    </section>

    <!-- 状态指示器 -->
    <section>
      <h2 class="text-lg font-medium mb-4">状态指示器</h2>
      <div class="flex gap-6 items-center">
        <Avatar
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="用户头像"
          status="online"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="用户头像"
          status="offline"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/4.jpg"
          alt="用户头像"
          status="away"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/women/5.jpg"
          alt="用户头像"
          status="busy"
        />
      </div>
    </section>

    <!-- 回退显示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">回退显示</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex items-center gap-4">
          <button
            @click="toggleError"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {{ imageError ? '加载正确图片' : '模拟加载失败' }}
          </button>
          <span class="text-sm text-gray-500">点击按钮切换图片加载状态</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p class="mb-2 text-sm">图片加载失败时显示文字缩写：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/9.jpg'
              "
              alt="李四"
            />
          </div>

          <div>
            <p class="mb-2 text-sm">图片加载失败时显示备用图片：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/10.jpg'
              "
              alt="王五"
              fallback="https://via.placeholder.com/150/CCCCCC/808080?text=Fallback"
            />
          </div>

          <div>
            <p class="mb-2 text-sm">图片加载失败时显示默认图标：</p>
            <Avatar
              :src="
                imageError
                  ? 'invalid-url.jpg'
                  : 'https://randomuser.me/api/portraits/men/11.jpg'
              "
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
