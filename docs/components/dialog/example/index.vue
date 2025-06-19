<script setup lang="ts">
import { Dialog } from '@versakit/vue'
import { ref } from 'vue'

const showDialog = ref(false)
</script>

<template>
  <button
    @click="showDialog = true"
    class="px-4 py-2 bg-blue-600 text-white rounded"
  >
    打开 Dialog
  </button>

  <Dialog v-model="showDialog" @close="console.log('关闭了')">
    <h2 class="text-lg font-semibold mb-2">这是 Dialog</h2>
    <p class="text-gray-600">你可以放任何内容。</p>
    <div class="mt-4 text-right">
      <button class="text-sm text-blue-500" @click="showDialog = false">
        关闭
      </button>
    </div>
  </Dialog>
</template>
