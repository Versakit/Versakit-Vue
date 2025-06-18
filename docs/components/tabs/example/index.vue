<script setup lang="ts">
import { VKTabs } from '@versakit/vue'

const items = [
  { label: '首页', content: '这里是首页内容' },
  { label: '设置', content: '这里是设置内容' },
  { label: '关于', content: '这是关于内容' },
]
</script>

<template>
  <VKTabs :items="items" :initialIndex="0" />
</template>
