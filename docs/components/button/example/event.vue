<script setup>
import { ref } from 'vue'

const clickCount = ref(0)
const handleClick = () => {
  clickCount.value++
}
</script>

<template>
  <div class="demo-buttons">
    <VKButton @click="handleClick">点击我 ({{ clickCount }})</VKButton>
    <div class="click-message" v-if="clickCount > 0">
      按钮被点击了 {{ clickCount }} 次
    </div>
  </div>
</template>

<style scoped>
.demo-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.click-message {
  font-size: 14px;
  color: #10b981;
}
</style>
