<script setup>
import { ref } from 'vue'

const basicValue = ref(3)
const halfValue = ref(3.5)
const readonlyValue = ref(4)
const disabledValue = ref(2)
const colorValue = ref(3)
const customValue = ref(4)
const maxValue = ref(6)
const scoreValue = ref(3.5)

const formatTooltip = (value) => {
  return `${value} 分`
}
</script>

<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <div>
      <h2 class="text-lg font-medium mb-2">基础用法</h2>
      <Rate v-model="basicValue" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ basicValue }}</div>
    </div>

    <!-- 半星 -->
    <div>
      <h2 class="text-lg font-medium mb-2">半星评分</h2>
      <Rate v-model="halfValue" :allow-half="true" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ halfValue }}</div>
    </div>

    <!-- 只读状态 -->
    <div>
      <h2 class="text-lg font-medium mb-2">只读状态</h2>
      <Rate v-model="readonlyValue" :readonly="true" />
    </div>

    <!-- 禁用状态 -->
    <div>
      <h2 class="text-lg font-medium mb-2">禁用状态</h2>
      <Rate v-model="disabledValue" :disabled="true" />
    </div>

    <!-- 自定义颜色 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义颜色</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-20">黄色（默认）:</span>
          <Rate v-model="colorValue" color="yellow" />
        </div>
        <div>
          <span class="inline-block w-20">蓝色:</span>
          <Rate v-model="colorValue" color="blue" />
        </div>
        <div>
          <span class="inline-block w-20">绿色:</span>
          <Rate v-model="colorValue" color="green" />
        </div>
        <div>
          <span class="inline-block w-20">红色:</span>
          <Rate v-model="colorValue" color="red" />
        </div>
        <div>
          <span class="inline-block w-20">紫色:</span>
          <Rate v-model="colorValue" color="purple" />
        </div>
      </div>
    </div>

    <!-- 自定义字符 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义字符</h2>
      <div class="space-y-2">
        <Rate v-model="customValue" character="好" />
      </div>
    </div>

    <!-- 自定义尺寸 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义尺寸</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-20">小:</span>
          <Rate v-model="colorValue" size="small" />
        </div>
        <div>
          <span class="inline-block w-20">默认:</span>
          <Rate v-model="colorValue" size="default" />
        </div>
        <div>
          <span class="inline-block w-20">大:</span>
          <Rate v-model="colorValue" size="large" />
        </div>
      </div>
    </div>

    <!-- 自定义最大值 -->
    <div>
      <h2 class="text-lg font-medium mb-2">自定义最大值</h2>
      <Rate v-model="maxValue" :max="10" />
      <div class="mt-2 text-sm text-gray-500">当前评分：{{ maxValue }}/10</div>
    </div>

    <!-- 显示分数 -->
    <div>
      <h2 class="text-lg font-medium mb-2">显示分数</h2>
      <div class="space-y-2">
        <div>
          <span class="inline-block w-32">默认格式:</span>
          <Rate v-model="scoreValue" :allow-half="true" :show-score="true" />
        </div>
        <div>
          <span class="inline-block w-32">自定义格式:</span>
          <Rate
            v-model="scoreValue"
            :allow-half="true"
            :show-score="true"
            :format-tooltip="formatTooltip"
          />
        </div>
      </div>
    </div>
  </div>
</template>
