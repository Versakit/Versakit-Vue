<template>
  <div>
    <VKButton @click="topleft">top-left</VKButton>
    <VKButton @click="topright">top-right</VKButton>
    <VKButton @click="bottomleft">bottom-left</VKButton>
    <VKButton @click="bottomright">bottom-right</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const topleft = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'topLeft',
    icon: 'ep:info-filled',
  })
}

const topright = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'topRight',
    icon: 'ep:info-filled',
  })
}

const bottomleft = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'bottomLeft',
    icon: 'ep:info-filled',
  })
}

const bottomright = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'bottomRight',
    icon: 'ep:info-filled',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
