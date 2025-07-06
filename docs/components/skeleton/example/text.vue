<script setup lang="ts">
import { SkeletonText } from '@versakit/vue'
import '@versakit/vue/style'
</script>

<template>
  <div class="space-y-6">
    <!-- 基础文本骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">基础文本骨架屏</h3>
      <SkeletonText :lines="3" />
    </div>

    <!-- 自定义行数 -->
    <div>
      <h3 class="text-sm font-medium mb-2">自定义行数 (5行)</h3>
      <SkeletonText :lines="5" />
    </div>

    <!-- 自定义宽度 -->
    <div>
      <h3 class="text-sm font-medium mb-2">自定义每行宽度</h3>
      <SkeletonText :lines="4" :widths="['100%', '80%', '60%', '40%']" />
    </div>

    <!-- 自定义行高 -->
    <div>
      <h3 class="text-sm font-medium mb-2">自定义行高 (2rem)</h3>
      <SkeletonText :lines="3" lineHeight="2rem" />
    </div>

    <!-- 带圆角 -->
    <div>
      <h3 class="text-sm font-medium mb-2">带圆角的文本骨架屏</h3>
      <SkeletonText :lines="3" :rounded="true" />
    </div>

    <!-- 波浪动画 -->
    <div>
      <h3 class="text-sm font-medium mb-2">波浪动画效果</h3>
      <SkeletonText :lines="3" animation="wave" />
    </div>
  </div>
</template>
