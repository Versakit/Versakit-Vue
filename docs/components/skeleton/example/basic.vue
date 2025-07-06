<script setup lang="ts">
import { Skeleton } from '@versakit/vue'
import '@versakit/vue/style'
</script>

<template>
  <div class="space-y-6">
    <!-- 基础骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">基础骨架屏</h3>
      <Skeleton width="100%" height="100px" />
    </div>

    <!-- 带圆角的骨架屏 -->
    <div>
      <h3 class="text-sm font-medium mb-2">带圆角的骨架屏</h3>
      <Skeleton width="100%" height="100px" :rounded="true" />
    </div>

    <!-- 不同动画效果 -->
    <div>
      <h3 class="text-sm font-medium mb-2">脉冲动画 (pulse)</h3>
      <Skeleton width="100%" height="50px" animation="pulse" />

      <h3 class="text-sm font-medium mt-4 mb-2">波浪动画 (wave)</h3>
      <Skeleton width="100%" height="50px" animation="wave" />

      <h3 class="text-sm font-medium mt-4 mb-2">无动画 (none)</h3>
      <Skeleton width="100%" height="50px" animation="none" />
    </div>
  </div>
</template>
