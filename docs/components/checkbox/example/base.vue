<script setup lang="ts">
import { ref } from 'vue'
import { VKCheckbox, VKCheckboxGroup } from '@versakit/ui/components/checkbox'

const checked = ref(false)
const groupValue = ref<string[]>([])
</script>

<template>
  <div class="checkbox-demo">
    <div class="demo-section">
      <h3 class="demo-title">基础用法</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked">选项</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">禁用状态</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked" disabled>禁用</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">半选状态</h3>
      <div class="demo-content">
        <VKCheckbox v-model="checked" indeterminate>半选</VKCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="demo-title">复选框组</h3>
      <div class="demo-content">
        <VKCheckboxGroup v-model="groupValue">
          <VKCheckbox value="1">选项1</VKCheckbox>
          <VKCheckbox value="2">选项2</VKCheckbox>
          <VKCheckbox value="3" disabled>选项3</VKCheckbox>
          <VKCheckbox value="4">选项4</VKCheckbox>
        </VKCheckboxGroup>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-demo {
  padding: 20px;
}

.demo-section {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.demo-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
}

.demo-content {
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
</style>
