<template>
  <div class="space-y-8 p-6">
    <!-- 基础文本跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础文本跑马灯</h3>
      <Runhorselight
        :items="['欢迎使用 Versakit 组件库', '这是一个功能强大的 Vue 3 组件库', '支持 TypeScript 和 Tailwind CSS']"
        :height="'4rem'"
      />
    </section>

    <!-- 图片跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">图片跑马灯</h3>
      <Runhorselight
        :items="logoItems"
        :height="'6rem'"
        :gap="'2rem'"
        :duration="25"
        :border-radius="'1rem'"
      />
    </section>

    <!-- 卡片跑马灯 -->
    <section>
      <h3 class="text-lg font-medium mb-4">卡片跑马灯</h3>
      <Runhorselight
        :items="cardItems"
        :height="'12rem'"
        :gap="'1.5rem'"
        :duration="30"
        :border-radius="'1rem'"
        background-color="#f3f4f6"
      />
    </section>

    <!-- 不同滚动方向 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同滚动方向</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">向左滚动 (默认)</p>
          <Runhorselight
            :items="['向左滚动的内容 1', '向左滚动的内容 2', '向左滚动的内容 3']"
            direction="left"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">向右滚动</p>
          <Runhorselight
            :items="['向右滚动的内容 1', '向右滚动的内容 2', '向右滚动的内容 3']"
            direction="right"
          />
        </div>
      </div>
    </section>

    <!-- 不同速度 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不同滚动速度</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">快速滚动 (10秒)</p>
          <Runhorselight
            :items="['快速滚动的内容 1', '快速滚动的内容 2', '快速滚动的内容 3']"
            :duration="10"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">中速滚动 (20秒，默认)</p>
          <Runhorselight
            :items="['中速滚动的内容 1', '中速滚动的内容 2', '中速滚动的内容 3']"
            :duration="20"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">慢速滚动 (40秒)</p>
          <Runhorselight
            :items="['慢速滚动的内容 1', '慢速滚动的内容 2', '慢速滚动的内容 3']"
            :duration="40"
          />
        </div>
      </div>
    </section>

    <!-- 带前缀和后缀 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带前缀和后缀</h3>
      <Runhorselight
        :items="['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布']"
        :prefix="{ type: 'text', content: '📢 最新消息：', textColor: '#ef4444' }"
        :suffix="{ type: 'text', content: '更多 »', textColor: '#3b82f6' }"
        :height="'3rem'"
        @prefix-click="handlePrefixClick"
        @suffix-click="handleSuffixClick"
      />
    </section>

    <!-- 悬停暂停 -->
    <section>
      <h3 class="text-lg font-medium mb-4">鼠标悬停暂停</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">启用悬停暂停 (默认)</p>
          <Runhorselight
            :items="['悬停时暂停滚动 1', '悬停时暂停滚动 2', '悬停时暂停滚动 3']"
            :pause-on-hover="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">禁用悬停暂停</p>
          <Runhorselight
            :items="['不暂停滚动 1', '不暂停滚动 2', '不暂停滚动 3']"
            :pause-on-hover="false"
          />
        </div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义样式</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">自定义背景色和文本色</p>
          <Runhorselight
            :items="['自定义样式内容 1', '自定义样式内容 2', '自定义样式内容 3']"
            :height="'3.5rem'"
            background-color="#1e293b"
            text-color="#ffffff"
            :border-radius="'0.5rem'"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">通过 PT 传递自定义样式</p>
          <Runhorselight
            :items="['PT 样式内容 1', 'PT 样式内容 2', 'PT 样式内容 3']"
            :height="'3.5rem'"
            :pt="{
              root: 'bg-gradient-to-r from-purple-500 to-pink-500',
              text: 'text-white font-bold text-lg',
              item: 'px-6'
            }"
          />
        </div>
      </div>
    </section>

    <!-- 混合内容类型 -->
    <section>
      <h3 class="text-lg font-medium mb-4">混合内容类型</h3>
      <Runhorselight
        :items="mixedItems"
        :height="'6rem'"
        :gap="'1.5rem'"
        :duration="35"
        :border-radius="'0.75rem'"
      />
    </section>

    <!-- 无缝循环 -->
    <section>
      <h3 class="text-lg font-medium mb-4">无缝循环</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">启用无缝循环 (默认)</p>
          <Runhorselight
            :items="['无缝循环内容 1', '无缝循环内容 2', '无缝循环内容 3']"
            :loop="true"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">禁用无缝循环</p>
          <Runhorselight
            :items="['不循环内容 1', '不循环内容 2', '不循环内容 3']"
            :loop="false"
          />
        </div>
      </div>
    </section>

    <!-- 自定义插槽 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义插槽</h3>
      <Runhorselight
        :items="[]"
        :height="'5rem'"
        :gap="'2rem'"
      >
        <template #default>
          <div class="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            <span>🚀</span>
            <span>自定义内容 1</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
            <span>⭐</span>
            <span>自定义内容 2</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
            <span>🎨</span>
            <span>自定义内容 3</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
            <span>🔥</span>
            <span>自定义内容 4</span>
          </div>
        </template>
      </Runhorselight>
    </section>

    <!-- 自动填充 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自动填充内容</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">启用自动填充</p>
          <Runhorselight
            :items="logoItems.slice(0, 2)"
            :height="'6rem'"
            :gap="'2rem'"
            :autofill="true"
            :border-radius="'0.5rem'"
          />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-600 dark:text-gray-400">禁用自动填充</p>
          <Runhorselight
            :items="logoItems.slice(0, 2)"
            :height="'6rem'"
            :gap="'2rem'"
            :autofill="false"
            :border-radius="'0.5rem'"
          />
        </div>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">无样式模式</h3>
      <Runhorselight
        :items="['无样式内容 1', '无样式内容 2', '无样式内容 3']"
        :height="'3rem'"
        :unstyled="true"
        :pt="{
          root: 'bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg',
          track: 'flex',
          text: 'text-white font-semibold text-base',
        }"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { Runhorselight } from '@versakit/vue'
import type { RunhorselightAffixClickPayload } from '@versakit/vue'

// 图片跑马灯数据
const logoItems = [
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/200/80',
    alt: 'Logo 1',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1015/200/80',
    alt: 'Logo 2',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1019/200/80',
    alt: 'Logo 3',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1016/200/80',
    alt: 'Logo 4',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1021/200/80',
    alt: 'Logo 5',
  },
]

// 卡片跑马灯数据
const cardItems = [
  {
    type: 'card',
    title: 'Vue 3 发布',
    description: '新一代前端框架，更快的性能和更小的体积',
    backgroundColor: '#dbeafe',
    textColor: '#1e40af',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'TypeScript 5.0',
    description: '更强大的类型系统和更好的开发体验',
    backgroundColor: '#dcfce7',
    textColor: '#166534',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'Tailwind CSS 4.0',
    description: '实用优先的 CSS 框架，快速构建现代网站',
    backgroundColor: '#fef3c7',
    textColor: '#92400e',
    borderRadius: '0.5rem',
  },
  {
    type: 'card',
    title: 'Vite 6.0',
    description: '极速的开发服务器和构建工具',
    backgroundColor: '#fce7f3',
    textColor: '#9d174d',
    borderRadius: '0.5rem',
  },
]

// 混合内容类型数据
const mixedItems = [
  '纯文本内容',
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/100/60',
    alt: '混合图片',
  },
  {
    type: 'card',
    title: '重要通知',
    description: '系统维护时间：今晚 22:00-24:00',
    backgroundColor: '#fef2f2',
    textColor: '#991b1b',
  },
  '更多文本内容',
]

// 事件处理
const handlePrefixClick = (payload: RunhorselightAffixClickPayload) => {
  console.log('前缀点击:', payload)
  alert(`前缀点击事件: ${JSON.stringify(payload)}`)
}

const handleSuffixClick = (payload: RunhorselightAffixClickPayload) => {
  console.log('后缀点击:', payload)
  alert(`后缀点击事件: ${JSON.stringify(payload)}`)
}
</script>