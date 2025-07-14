<script setup lang="ts">
import { Link } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex flex-wrap gap-6">
        <Link href="https://example.com">默认链接</Link>
        <Link href="https://example.com" variant="primary">主要链接</Link>
        <Link href="https://example.com" variant="secondary">次要链接</Link>
        <Link href="https://example.com" variant="success">成功链接</Link>
        <Link href="https://example.com" variant="danger">危险链接</Link>
        <Link href="https://example.com" variant="warning">警告链接</Link>
        <Link href="https://example.com" variant="info">信息链接</Link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex items-center gap-6">
        <Link href="https://example.com" size="sm">小尺寸链接</Link>
        <Link href="https://example.com" size="md">中等尺寸链接</Link>
        <Link href="https://example.com" size="lg">大尺寸链接</Link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带下划线</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" underline>默认下划线链接</Link>
        <Link href="https://example.com" variant="primary" underline>
          主要下划线链接
        </Link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">外部链接</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" external>
          外部链接（自动添加图标）
        </Link>
        <Link href="https://example.com" external variant="primary">
          外部主要链接
        </Link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex gap-6">
        <Link href="https://example.com" disabled>禁用链接</Link>
        <Link href="https://example.com" variant="primary" disabled>
          禁用主要链接
        </Link>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带图标</h2>
      <div class="flex flex-col gap-4">
        <div>
          <Link href="https://example.com" iconPosition="left">
            <template #icon-left>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </template>
            左侧图标
          </Link>
        </div>
        <div>
          <Link
            href="https://example.com"
            variant="primary"
            iconPosition="right"
          >
            右侧图标
            <template #icon-right>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </template>
          </Link>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式</h2>
      <div class="flex gap-6">
        <Link
          href="https://example.com"
          :pt="{
            root: 'text-purple-500 hover:text-purple-700 font-bold',
          }"
        >
          自定义颜色和字重
        </Link>
        <Link
          href="https://example.com"
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow',
          }"
        >
          完全自定义样式
        </Link>
      </div>
    </section>
  </div>
</template>
