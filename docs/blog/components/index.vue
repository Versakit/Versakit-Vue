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
  <div class="blog-container">
    <!-- 头部区域 -->
    <div class="blog-header">
      <div class="header-content">
        <h1>最新动态</h1>
        <br />
        <p>发现 Versakit 的最新动态、技术文章和使用教程</p>
      </div>
    </div>

    <!-- 博客列表 -->
    <div class="blog-list">
      <div class="post-grid">
        <article v-for="post in posts" :key="post.title" class="post-item">
          <!-- 标题 -->
          <a :href="post.slug" class="post-title">
            <h2>{{ post.title }}</h2>
          </a>

          <!-- 作者信息和时间 -->
          <div class="post-meta">
            <img
              :src="post.author.avatar"
              :alt="post.author.name"
              class="author-avatar"
            />
            <span class="author-name">{{ post.author.name }}</span>
            <div class="meta-dot"></div>
            <time class="post-date">{{ post.date }}</time>
          </div>

          <!-- 描述 -->
          <p class="post-description">{{ post.description }}</p>

          <!-- 阅读更多 -->
          <a class="read-more">
            阅读全文
            <svg class="arrow-icon" viewBox="0 0 16 16" fill="none">
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
          <div class="post-divider"></div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  min-height: 100vh;
}

.blog-header {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgb(38, 38, 38);
}

.header-content {
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  text-align: center;
}

.header-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

.header-content p {
  font-size: 1.25rem;
  color: rgb(163, 163, 163);
}

.blog-list {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.post-grid {
  max-width: 48rem;
  margin: 0 auto;
  display: grid;
  gap: 4rem;
}

.post-item {
  position: relative;
  group: hover;
}

.post-title h2 {
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.4;
  color: white;
  margin-bottom: 0.75rem;
  transition: color 0.2s;
}

.post-title:hover h2 {
  color: rgb(192, 132, 252);
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.author-avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: 1px solid rgb(38, 38, 38);
}

.author-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(212, 212, 212);
}

.meta-dot {
  height: 0.25rem;
  width: 0.25rem;
  border-radius: 9999px;
  background-color: rgb(64, 64, 64);
}

.post-date {
  font-size: 0.875rem;
  color: rgb(163, 163, 163);
}

.post-description {
  font-size: 1.125rem;
  color: rgb(163, 163, 163);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(192, 132, 252);
  transition: color 0.2s;
}

.post-item:hover .read-more {
  color: rgb(216, 180, 254);
}

.arrow-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
  transition: transform 0.2s;
}

.post-item:hover .arrow-icon {
  transform: translateX(0.25rem);
}

.post-divider {
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  height: 1px;
  background-color: rgb(38, 38, 38);
}
</style>
