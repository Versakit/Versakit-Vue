<template>
  <div class="demo-buttons">
    <VKButton disabled>禁用按钮</VKButton>
    <VKButton variant="outline" disabled>禁用线框</VKButton>
    <VKButton variant="ghost" disabled>禁用幽灵</VKButton>
    <VKButton variant="destructive" disabled>禁用危险</VKButton>
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
