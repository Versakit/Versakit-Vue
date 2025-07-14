<script setup lang="ts">
import { ref } from 'vue'
import { Image } from '@versakit/vue'
import '@versakit/vue/style'

const isZoomed = ref(false)
const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}
</script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">默认图片：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">不同填充模式：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            fit="contain"
          />
        </div>
      </div>
    </section>

    <!-- 模糊加载效果 -->
    <section>
      <h2 class="text-lg font-medium mb-4">模糊加载效果</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">启用模糊加载：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :blurred="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">自定义模糊度：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :blurred="true"
            :blurAmount="20"
          />
        </div>
      </div>
    </section>

    <!-- 缩放功能 -->
    <section>
      <h2 class="text-lg font-medium mb-4">缩放功能</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <button
            @click="toggleZoom"
            class="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {{ isZoomed ? '取消缩放' : '缩放图片' }}
          </button>
          <span class="text-sm text-gray-500">点击按钮或图片切换缩放状态</span>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="300px"
            :isZoomable="true"
            :isZoomed="isZoomed"
            :zoomScale="1.8"
            @zoom="isZoomed = $event"
          />
        </div>
      </div>
    </section>

    <!-- 骨架屏 -->
    <section>
      <h2 class="text-lg font-medium mb-4">骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="mb-2 text-sm">默认骨架屏：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :skeleton="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">自定义骨架屏颜色：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :skeleton="true"
            skeletonColor="#e0f2fe"
          />
        </div>
      </div>
    </section>

    <!-- 不同圆角 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同圆角</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <p class="mb-2 text-sm">无圆角：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="none"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">中等圆角（默认）：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="md"
          />
        </div>
        <div>
          <p class="mb-2 text-sm">大圆角：</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="xl"
          />
        </div>
      </div>
    </section>

    <!-- 错误状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">错误状态</h2>
      <div>
        <Image
          src="invalid-image-url.jpg"
          alt="无效图片"
          width="100%"
          height="200px"
        />
      </div>
    </section>
  </div>
</template>
