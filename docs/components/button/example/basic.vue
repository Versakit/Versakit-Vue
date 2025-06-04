<script lang="ts" setup>
import { VKButton } from '@versakit/vue'
</script>

<template>
  <div class="demo-buttons">
    <VKButton>默认按钮</VKButton>
    <VKButton variant="outline">线框按钮</VKButton>
    <VKButton variant="ghost">幽灵按钮</VKButton>
    <VKButton variant="destructive">危险按钮</VKButton>
  </div>
</template>

<style scoped>
.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
