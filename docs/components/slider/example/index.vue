<script setup lang="ts">
import { ref } from 'vue'
import { VKSlider } from '@versakit/vue'
import '@versakit/vue/style'

// 基础用法示例
const basicValue = ref(50)

// 设置最小值最大值示例
const rangeValue = ref(30)

// 设置步长示例
const stepValue = ref(25)

// 垂直方向示例
const verticalValue = ref(60)

// 禁用状态示例
const disabledValue = ref(70)

// 显示提示示例
const tooltipValue = ref(40)

// 自定义提示示例
const customTooltipValue = ref(85)
const formatTooltip = (value: number) => `${value}%`

// 显示刻度示例
const marksValue = ref(20)

// 自定义刻度示例
const customMarksValue = ref(25)
const marks = {
  0: '0°C',
  25: '25°C',
  50: '50°C',
  75: '75°C',
  100: '100°C',
}
</script>

<template>
  <div class="space-y-12">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="basicValue" />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ basicValue }}</div>
      </div>
    </section>

    <!-- 设置最小值最大值 -->
    <section>
      <h2 class="text-lg font-medium mb-4">设置最小值最大值</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="rangeValue" :min="20" :max="80" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ rangeValue }} (范围: 20-80)
        </div>
      </div>
    </section>

    <!-- 设置步长 -->
    <section>
      <h2 class="text-lg font-medium mb-4">设置步长</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="stepValue" :step="25" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ stepValue }} (步长: 25)
        </div>
      </div>
    </section>

    <!-- 垂直方向 -->
    <section>
      <h2 class="text-lg font-medium mb-4">垂直方向</h2>
      <div class="h-64">
        <VKSlider v-model="verticalValue" orientation="vertical" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ verticalValue }}
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="disabledValue" disabled />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ disabledValue }}
        </div>
      </div>
    </section>

    <!-- 显示提示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">显示提示</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="tooltipValue" show-tooltip />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ tooltipValue }}</div>
      </div>
    </section>

    <!-- 自定义提示 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义提示</h2>
      <div class="w-full max-w-md">
        <VKSlider
          v-model="customTooltipValue"
          show-tooltip
          :format-tooltip="formatTooltip"
        />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ formatTooltip(customTooltipValue) }}
        </div>
      </div>
    </section>

    <!-- 显示刻度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">显示刻度</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="marksValue" show-marks />
        <div class="mt-2 text-sm text-gray-500">当前值: {{ marksValue }}</div>
      </div>
    </section>

    <!-- 自定义刻度 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义刻度</h2>
      <div class="w-full max-w-md">
        <VKSlider v-model="customMarksValue" show-marks :marks="marks" />
        <div class="mt-2 text-sm text-gray-500">
          当前值: {{ customMarksValue }}
        </div>
      </div>
    </section>
  </div>
</template>
