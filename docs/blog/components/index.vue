<script setup lang="ts">
import { ref } from 'vue'

const posts = ref([
  {
    title: '前端娱乐圈？又来一个组件库？我们做了组件库才明白这是有意义的！',
    description:
      '为什么要做「又一个组件库」？ 前端领域常被戏称为「娱乐圈」——每天都有新框架、新工具涌现。我们曾困惑：这真的是在推动技术进步吗？直到亲身开发组件库后我们才理解：每一次技术探索都是对工程本质的回归...',
    date: '2025-01-29',
    slug: '/Versakit-Vue/blog/docs/01.html',
    author: {
      name: 'JustHappy',
      avatar:
        'https://p26-passport.byteacctimg.com/img/user-avatar/42b96e76046ce17313b852401e5436bd~130x130.awebp',
    },
  },
])
</script>

<template>
  <div class="min-h-screen">
    <!-- 头部区域 -->
    <div class="relative overflow-hidden border-b border-neutral-800">
      <div class="relative container mx-auto px-6 py-20 text-center">
        <h1 class="text-5xl font-bold text-white mb-6">最新动态</h1>
        <p class="text-xl text-neutral-400">
          发现 Versakit 的最新动态、技术文章和使用教程
        </p>
      </div>
    </div>

    <!-- 博客列表 -->
    <div class="container mx-auto px-6 py-16">
      <div class="max-w-3xl mx-auto grid gap-16">
        <article v-for="post in posts" :key="post.title" class="group relative">
          <!-- 标题 -->
          <a :href="post.slug" class="block group">
            <h2
              class="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3"
            >
              {{ post.title }}
            </h2>
          </a>

          <!-- 作者信息和时间 -->
          <div class="flex items-center gap-3 mb-4">
            <img
              :src="post.author.avatar"
              :alt="post.author.name"
              class="w-8 h-8 rounded-full border border-neutral-800"
            />
            <span class="text-sm font-medium text-neutral-300">
              {{ post.author.name }}
            </span>
            <div class="h-1 w-1 rounded-full bg-neutral-700"></div>
            <time class="text-sm text-neutral-400">{{ post.date }}</time>
          </div>

          <!-- 描述 -->
          <p class="text-lg text-neutral-400 mb-6 line-clamp-2">
            {{ post.description }}
          </p>

          <!-- 阅读更多 -->
          <a
            class="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors"
          >
            阅读全文
            <svg
              class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.5 3.5L11 8L6.5 12.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>

          <!-- 分隔线 -->
          <div
            class="absolute -bottom-8 left-0 right-0 h-[1px] bg-neutral-800"
          ></div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
