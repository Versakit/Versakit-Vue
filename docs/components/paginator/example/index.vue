<template>
  <div class="space-y-8">
    <!-- 基础分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础分页器</h3>
      <Paginator :totalPages="10" />
    </section>

    <!-- 分页器大小 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器大小</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    </section>

    <!-- 分页器变体 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器变体</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    </section>

    <!-- 分页器形状 -->
    <section>
      <h3 class="text-lg font-medium mb-4">分页器形状</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    </section>

    <!-- 可见页码数量 -->
    <section>
      <h3 class="text-lg font-medium mb-4">可见页码数量</h3>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
      </div>
    </section>

    <!-- 带页码跳转 -->
    <section>
      <h3 class="text-lg font-medium mb-4">带页码跳转</h3>
      <Paginator :totalPages="100" showJumper />
    </section>

    <!-- 受控分页器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">受控分页器</h3>
      <div class="space-y-4">
        <p>当前页码: {{ currentPage }}</p>
        <Paginator :totalPages="10" v-model="currentPage" />
        <div class="flex gap-2">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            上一页
          </button>
          <button
            @click="currentPage = Math.min(10, currentPage + 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            下一页
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Paginator } from '@versakit/vue'

const currentPage = ref(1)
</script>
