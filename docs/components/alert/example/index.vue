<template>
  <div class="space-y-4">
    <Alert variant="success" size="sm">
      <template #title>成功</template>
      <template #icon>✅</template>
      操作已成功完成。
    </Alert>

    <Alert variant="warning" size="md">
      <template #title>注意</template>
      <template #icon>⚠️</template>
      请输入完整的信息。
    </Alert>

    <Alert variant="error" size="lg">
      <template #title>错误</template>
      <template #icon>❌</template>
      请求失败，请稍后再试。
    </Alert>
  </div>
</template>

<script setup>
import { Alert } from '@versakit/vue'
import '@versakit/vue/style'
</script>
