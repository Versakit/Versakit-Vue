<template>
  <div class="p-4">
    <Switch v-model="enabled" />
    <p class="mt-2">开关状态: {{ enabled ? '开启' : '关闭' }}</p>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

const enabled = ref(false)
</script>
