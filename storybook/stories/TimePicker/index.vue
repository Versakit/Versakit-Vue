<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@versakit/vue'

// 基础用法
const selectedTime = ref('12:30')

// 12小时制
const time12h = ref('02:30 PM')

// 显示秒选择器
const timeWithSeconds = ref('12:30:45')

// 自定义步长
const timeWithSteps = ref('12:30:00')

// 禁用状态
const disabledTime = ref('12:30')
const readonlyTime = ref('12:30')

// 不可清空
const nonClearableTime = ref('12:30')

// 使用Date对象
const dateTime = ref(new Date())
</script>

<template>
  <div class="space-y-8 p-4">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="max-w-sm">
        <TimePicker v-model="selectedTime" />
      </div>
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h2 class="text-xl font-bold mb-4">12小时制</h2>
      <div class="max-w-sm">
        <TimePicker v-model="time12h" format="12h" />
      </div>
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>
    </section>

    <!-- 显示秒选择器 -->
    <section>
      <h2 class="text-xl font-bold mb-4">显示秒选择器</h2>
      <div class="max-w-sm">
        <TimePicker v-model="timeWithSeconds" :showSeconds="true" />
      </div>
      <div class="mt-2">当前选择的时间: {{ timeWithSeconds || '未选择' }}</div>
    </section>

    <!-- 自定义步长 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义步长</h2>
      <div class="max-w-sm">
        <TimePicker
          v-model="timeWithSteps"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
          :showSeconds="true"
        />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ timeWithSteps || '未选择' }}</div>
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="disabledTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <TimePicker v-model="readonlyTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h2 class="text-xl font-bold mb-4">不可清空</h2>
      <div class="max-w-sm">
        <TimePicker v-model="nonClearableTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>
      </div>
    </section>

    <!-- 使用Date对象 -->
    <section>
      <h2 class="text-xl font-bold mb-4">使用Date对象</h2>
      <div class="max-w-sm">
        <TimePicker v-model="dateTime" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的时间:
          {{ dateTime ? dateTime.toLocaleTimeString() : '未选择' }}
        </div>
      </div>
    </section>
  </div>
</template>
