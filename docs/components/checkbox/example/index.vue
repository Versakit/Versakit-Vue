<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex space-x-4 items-center">
        <Checkbox v-model="checked1">默认复选框</Checkbox>
        <div class="text-sm text-gray-500">
          当前状态: {{ checked1 ? '选中' : '未选中' }}
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex space-x-6 items-center">
        <Checkbox v-model="checkedSize" size="small">小型</Checkbox>
        <Checkbox v-model="checkedSize" size="default">默认</Checkbox>
        <Checkbox v-model="checkedSize" size="large">大型</Checkbox>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="grid grid-cols-3 gap-4">
        <Checkbox v-model="checkedColor" color="blue">蓝色 (默认)</Checkbox>
        <Checkbox v-model="checkedColor" color="green">绿色</Checkbox>
        <Checkbox v-model="checkedColor" color="red">红色</Checkbox>
        <Checkbox v-model="checkedColor" color="yellow">黄色</Checkbox>
        <Checkbox v-model="checkedColor" color="purple">紫色</Checkbox>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex space-x-6 items-center">
        <Checkbox v-model="checkedDisabled" disabled>禁用未选中</Checkbox>
        <Checkbox v-model="checkedDisabledChecked" disabled>
          禁用已选中
        </Checkbox>
      </div>
    </section>

    <!-- 使用标签 -->
    <section>
      <h2 class="text-lg font-medium mb-4">使用标签属性</h2>
      <Checkbox v-model="checkedLabel" label="使用label属性的复选框"></Checkbox>
    </section>

    <!-- 使用插槽 -->
    <section>
      <h2 class="text-lg font-medium mb-4">使用插槽自定义内容</h2>
      <Checkbox v-model="checkedSlot">
        <span class="font-medium text-purple-600">自定义插槽内容</span>
        <span class="text-xs ml-1 text-gray-500">(支持任意内容)</span>
      </Checkbox>
    </section>

    <!-- 复选框组 -->
    <section>
      <h2 class="text-lg font-medium mb-4">复选框组</h2>
      <div class="space-y-2">
        <Checkbox v-model="checkedGroup.option1">选项 1</Checkbox>
        <Checkbox v-model="checkedGroup.option2">选项 2</Checkbox>
        <Checkbox v-model="checkedGroup.option3">选项 3</Checkbox>
        <div class="text-sm text-gray-500 mt-2">
          已选中:
          {{
            Object.keys(checkedGroup)
              .filter((key) => checkedGroup[key])
              .join(', ')
              .replaceAll('option', '选项 ')
          }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Checkbox } from '@versakit/vue'
// 基础用法
const checked1 = ref(true)

// 尺寸
const checkedSize = ref(true)

// 颜色
const checkedColor = ref(true)

// 禁用状态
const checkedDisabled = ref(false)
const checkedDisabledChecked = ref(true)

// 标签
const checkedLabel = ref(false)

// 插槽
const checkedSlot = ref(false)

// 复选框组
const checkedGroup = reactive({
  option1: true,
  option2: false,
  option3: false,
})
</script>
