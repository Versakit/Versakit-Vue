<script setup lang="ts">
import { Slider } from '@versakit/vue'
import { ref } from 'vue'

const value1 = ref(50)
const value2 = ref(25)
const value3 = ref(20)
const value4 = ref(50)
const value5 = ref(50)
const value6 = ref(50)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Slider v-model="value1" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">设置最小值和最大值</h2>
      <div>
        <p class="mb-2">范围：0-50，当前值：{{ value2 }}</p>
        <Slider v-model="value2" :min="0" :max="50" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">设置步长</h2>
      <div>
        <p class="mb-2">步长：10，当前值：{{ value3 }}</p>
        <Slider v-model="value3" :step="10" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">垂直方向</h2>
      <div style="height: 200px">
        <Slider v-model="value4" orientation="vertical" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Slider v-model="value1" disabled />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">显示提示</h2>
      <Slider v-model="value1" :show-tooltip="true" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">显示刻度</h2>
      <Slider
        v-model="value5"
        :show-marks="true"
        :marks="{
          0: '0°C',
          25: '25°C',
          50: '50°C',
          75: '75°C',
          100: '100°C',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Slider
        v-model="value1"
        :show-tooltip="true"
        :pt="{
          track: 'bg-purple-200',
          fill: 'bg-purple-600',
          thumb: 'border-purple-600',
          tooltip: 'bg-purple-600',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-8">
        <div>
          <p class="mb-2">渐变样式</p>
          <Slider
            v-model="value6"
            :show-tooltip="true"
            :show-marks="true"
            :marks="{
              0: '0%',
              25: '25%',
              50: '50%',
              75: '75%',
              100: '100%',
            }"
            unstyled
            :pt="{
              container: 'relative py-6',
              track: 'h-2 bg-gray-200 rounded-full',
              fill: 'absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full',
              thumb:
                'absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
              tooltip:
                'absolute bottom-full mb-2 -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap',
              marks: 'absolute w-full',
              mark: 'absolute w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2',
              markLabel: 'absolute mt-2 text-xs text-gray-500 -translate-x-1/2',
            }"
          />
        </div>
        <div>
          <p class="mb-2">圆角样式</p>
          <Slider
            v-model="value6"
            :show-tooltip="true"
            unstyled
            :pt="{
              container: 'relative py-8',
              track: 'h-4 bg-gray-100 rounded-full',
              fill: 'absolute h-4 bg-green-500 rounded-full',
              thumb:
                'absolute w-6 h-6 bg-white border-4 border-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-green-300',
              tooltip:
                'absolute bottom-full mb-3 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap',
            }"
          />
        </div>
        <div>
          <p class="mb-2">方形样式</p>
          <Slider
            v-model="value6"
            :show-tooltip="true"
            unstyled
            :pt="{
              container: 'relative py-6',
              track: 'h-2 bg-gray-300',
              fill: 'absolute h-2 bg-blue-600',
              thumb:
                'absolute w-4 h-4 bg-blue-600 -translate-x-1/2 -translate-y-1/2 focus:outline-none',
              tooltip:
                'absolute bottom-full mb-2 -translate-x-1/2 bg-blue-600 text-white px-2 py-1 text-xs whitespace-nowrap',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
