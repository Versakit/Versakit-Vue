<template>
  <div class="flex flex-wrap gap-2">
    <Chip v-model="active1" selectable closable>Vue</Chip>
    <Chip closable @delete="onDelete">TypeScript</Chip>
    <Chip disabled>Disabled</Chip>
  </div>
</template>

<script setup lang="ts">
import { Chip } from '@versakit/vue'
import { ref } from 'vue'

const active1 = ref(true)

const onDelete = () => {
  alert('Chip deleted!')
}
</script>
