<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex space-x-4 items-center">
        <Radio v-model="radio1" value="option1">选项一</Radio>
        <Radio v-model="radio1" value="option2">选项二</Radio>
        <Radio v-model="radio1" value="option3">选项三</Radio>
        <div class="text-sm text-gray-500">
          当前选中: {{ getSelectedLabel(radio1) }}
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="flex flex-col space-y-4">
        <div class="flex items-center space-x-4">
          <Radio v-model="radioSize" value="small" size="small">
            小型单选框
          </Radio>
          <Radio v-model="radioSize" value="default" size="default">
            默认单选框
          </Radio>
          <Radio v-model="radioSize" value="large" size="large">
            大型单选框
          </Radio>
        </div>
        <div class="text-sm text-gray-500">选中尺寸: {{ radioSize }}</div>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同颜色</h2>
      <div class="grid grid-cols-3 gap-4">
        <Radio v-model="radioColor" value="blue" color="blue">
          蓝色 (默认)
        </Radio>
        <Radio v-model="radioColor" value="green" color="green">绿色</Radio>
        <Radio v-model="radioColor" value="red" color="red">红色</Radio>
        <Radio v-model="radioColor" value="yellow" color="yellow">黄色</Radio>
        <Radio v-model="radioColor" value="purple" color="purple">紫色</Radio>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex space-x-6 items-center">
        <Radio v-model="radioDisabled" value="normal">正常状态</Radio>
        <Radio v-model="radioDisabled" value="disabled" disabled>
          禁用未选中
        </Radio>
        <Radio v-model="radioDisabledChecked" value="disabled" disabled>
          禁用已选中
        </Radio>
      </div>
    </section>

    <!-- 使用标签 -->
    <section>
      <h2 class="text-lg font-medium mb-4">使用标签属性</h2>
      <div class="flex space-x-4">
        <Radio
          v-model="radioLabel"
          value="label"
          label="使用label属性的单选框"
        ></Radio>
      </div>
    </section>

    <!-- 使用插槽 -->
    <section>
      <h2 class="text-lg font-medium mb-4">使用插槽自定义内容</h2>
      <Radio v-model="radioSlot" value="slot">
        <span class="font-medium text-purple-600">自定义插槽内容</span>
        <span class="text-xs ml-1 text-gray-500">(支持任意内容)</span>
      </Radio>
    </section>

    <!-- 单选框组 -->
    <section>
      <h2 class="text-lg font-medium mb-4">单选框组</h2>
      <div class="space-y-4">
        <h3 class="text-base font-medium">选择水果</h3>
        <div class="flex flex-col space-y-2">
          <Radio v-model="radioGroup" value="apple">苹果</Radio>
          <Radio v-model="radioGroup" value="banana">香蕉</Radio>
          <Radio v-model="radioGroup" value="orange">橙子</Radio>
          <Radio v-model="radioGroup" value="grape">葡萄</Radio>
        </div>
        <div class="text-sm text-gray-500">
          已选择: {{ getFruitName(radioGroup) }}
        </div>
      </div>
    </section>

    <!-- 布局展示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同布局展示</h2>
      <div class="space-y-4">
        <h3 class="text-base font-medium">横向布局</h3>
        <div class="flex space-x-6">
          <Radio v-model="radioLayout" value="horizontal">选项一</Radio>
          <Radio v-model="radioLayout" value="vertical">选项二</Radio>
          <Radio v-model="radioLayout" value="grid">选项三</Radio>
        </div>

        <h3 class="text-base font-medium mt-4">纵向布局</h3>
        <div class="flex flex-col space-y-2">
          <Radio v-model="radioLayout" value="horizontal">选项一</Radio>
          <Radio v-model="radioLayout" value="vertical">选项二</Radio>
          <Radio v-model="radioLayout" value="grid">选项三</Radio>
        </div>

        <h3 class="text-base font-medium mt-4">网格布局</h3>
        <div class="grid grid-cols-3 gap-4">
          <Radio v-model="radioLayout" value="horizontal">选项一</Radio>
          <Radio v-model="radioLayout" value="vertical">选项二</Radio>
          <Radio v-model="radioLayout" value="grid">选项三</Radio>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from '@versakit/vue'

// 基础用法
const radio1 = ref('option1')

// 尺寸
const radioSize = ref('default')

// 颜色
const radioColor = ref('blue')

// 禁用状态
const radioDisabled = ref('normal')
const radioDisabledChecked = ref('disabled')

// 标签
const radioLabel = ref('label')

// 插槽
const radioSlot = ref('slot')

// 单选框组
const radioGroup = ref('apple')

// 布局
const radioLayout = ref('horizontal')

// 获取选中项标签
const getSelectedLabel = (value) => {
  const options = {
    option1: '选项一',
    option2: '选项二',
    option3: '选项三',
  }
  return options[value] || value
}

// 获取水果名称
const getFruitName = (value) => {
  const fruits = {
    apple: '苹果',
    banana: '香蕉',
    orange: '橙子',
    grape: '葡萄',
  }
  return fruits[value] || value
}
</script>
