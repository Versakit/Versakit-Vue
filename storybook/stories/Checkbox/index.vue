<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@versakit/vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
const checked4 = ref(true)
const checked5 = ref(true)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Checkbox v-model="checked1" label="同意服务条款" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">选中状态</h2>
      <Checkbox v-model="checked2" label="已选中状态" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="space-y-2">
        <Checkbox disabled label="禁用状态（未选中）" />
        <Checkbox disabled :model-value="true" label="禁用状态（已选中）" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-2">
        <Checkbox size="small" label="小尺寸" />
        <Checkbox size="default" label="默认尺寸" />
        <Checkbox size="large" label="大尺寸" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="space-y-2">
        <Checkbox :model-value="true" color="blue" label="蓝色（默认）" />
        <Checkbox :model-value="true" color="green" label="绿色" />
        <Checkbox :model-value="true" color="red" label="红色" />
        <Checkbox :model-value="true" color="yellow" label="黄色" />
        <Checkbox :model-value="true" color="purple" label="紫色" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Checkbox
        v-model="checked3"
        label="自定义样式"
        :pt="{
          root: 'border p-2 rounded-md bg-gray-50',
          checkbox: 'border-purple-500',
          icon: 'text-purple-500',
          label: 'text-purple-700 ml-2',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <Checkbox
          v-model="checked4"
          label="圆形复选框"
          unstyled
          :pt="{
            root: 'flex items-center cursor-pointer',
            checkbox:
              'w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center bg-white',
            icon: 'text-white',
            label: 'ml-2 text-purple-700',
          }"
        />
        <Checkbox
          v-model="checked5"
          label="渐变背景复选框"
          unstyled
          :pt="{
            root: 'flex items-center cursor-pointer',
            checkbox:
              'w-5 h-5 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center',
            icon: 'text-white',
            label: 'ml-2 font-medium',
          }"
        />
      </div>
    </section>
  </div>
</template>
