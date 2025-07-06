<script setup lang="ts">
import Basic from './basic.vue'
import Text from './text.vue'
import Avatar from './avatar.vue'
import Combined from './combined.vue'
</script>

<template>
  <div class="space-y-10">
    <div>
      <h2 class="text-xl font-medium mb-4">基础骨架屏</h2>
      <Basic />
    </div>

    <div>
      <h2 class="text-xl font-medium mb-4">文本骨架屏</h2>
      <Text />
    </div>

    <div>
      <h2 class="text-xl font-medium mb-4">头像骨架屏</h2>
      <Avatar />
    </div>

    <div>
      <h2 class="text-xl font-medium mb-4">组合示例</h2>
      <Combined />
    </div>
  </div>
</template>
