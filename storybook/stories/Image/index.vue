<script setup lang="ts">
import { Image } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
          alt="风景图片"
          width="100%"
          height="300px"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同填充模式</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2">fill</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            fit="fill"
          />
        </div>
        <div>
          <p class="mb-2">contain</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            fit="contain"
          />
        </div>
        <div>
          <p class="mb-2">cover (默认)</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            fit="cover"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">模糊加载效果</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2">默认模糊度 (10px)</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :blurred="true"
          />
        </div>
        <div>
          <p class="mb-2">高模糊度 (20px)</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">缩放功能</h2>
      <div class="grid grid-cols-1 gap-4">
        <p class="mb-2">点击图片可缩放</p>
        <Image
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
          alt="风景图片"
          width="100%"
          height="300px"
          :isZoomable="true"
          :zoomScale="1.8"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">骨架屏</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2">默认骨架屏</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :skeleton="true"
          />
        </div>
        <div>
          <p class="mb-2">自定义骨架屏颜色</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">不同圆角</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2">无圆角 (none)</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="none"
          />
        </div>
        <div>
          <p class="mb-2">中等圆角 (md, 默认)</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="150px"
            radius="md"
          />
        </div>
        <div>
          <p class="mb-2">大圆角 (xl)</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">错误状态</h2>
      <div class="grid grid-cols-1 gap-4">
        <Image
          src="invalid-image-url.jpg"
          alt="无效图片"
          width="100%"
          height="200px"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2">自定义边框和阴影</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :pt="{
              root: 'border-2 border-blue-500 shadow-lg',
            }"
          />
        </div>
        <div>
          <p class="mb-2">灰度效果</p>
          <Image
            src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
            alt="风景图片"
            width="100%"
            height="200px"
            :pt="{
              img: 'grayscale',
            }"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="grid grid-cols-1 gap-4">
        <Image
          src="https://images.unsplash.com/photo-1682687982501-1e58ab814714"
          alt="风景图片"
          unstyled
          :pt="{
            root: 'w-full h-[300px] rounded-xl overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500',
            img: 'w-full h-full object-cover',
          }"
        />
      </div>
    </section>
  </div>
</template>
