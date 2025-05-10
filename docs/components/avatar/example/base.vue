<template>
  <section class="demo-section">
    <div class="demo-row">
      <VKAvatar src="https://pic1.imgdb.cn/item/681c17a558cb8da5c8e43969.png" />
      <VKAvatar text="User" />
      <VKAvatar backgroundColor="#f56a00">U</VKAvatar>
    </div>
  </section>

  <section class="demo-section">
    <div class="demo-row">
      <VKAvatar shape="circle" text="C" />
      <VKAvatar shape="square" text="S" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VKAvatar } from '@versakit/ui'
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
