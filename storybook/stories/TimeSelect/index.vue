<script setup lang="ts">
import { ref } from 'vue'
import { TimeSelect } from '@versakit/vue'

// 基础用法
const selectedTime = ref('12:30')

// 自定义时间范围和步长
const customRangeTime = ref('09:00')

// 12小时制
const time12h = ref('02:30 PM')

// 自定义选项
const customOptionsTime = ref('09:00')
const customOptions = ['09:00', '12:00', '15:00', '18:00']

// 禁用状态
const disabledTime = ref('12:30')
const readonlyTime = ref('12:30')

// 不可清空
const nonClearableTime = ref('12:30')

// 自定义占位文本
const placeholderTime = ref('')
</script>

<template>
  <div class="space-y-8 p-4">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="max-w-sm">
        <TimeSelect v-model="selectedTime" />
      </div>
      <div class="mt-2">当前选择的时间: {{ selectedTime || '未选择' }}</div>
    </section>

    <!-- 自定义时间范围和步长 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义时间范围和步长</h2>
      <div class="max-w-sm">
        <TimeSelect
          v-model="customRangeTime"
          start="09:00"
          end="18:00"
          :step="15"
        />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ customRangeTime || '未选择' }}</div>
        <div>时间范围: 09:00 至 18:00，步长: 15分钟</div>
      </div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h2 class="text-xl font-bold mb-4">12小时制</h2>
      <div class="max-w-sm">
        <TimeSelect v-model="time12h" format="12h" />
      </div>
      <div class="mt-2">当前选择的时间: {{ time12h || '未选择' }}</div>
    </section>

    <!-- 自定义选项 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义选项</h2>
      <div class="max-w-sm">
        <TimeSelect v-model="customOptionsTime" :options="customOptions" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ customOptionsTime || '未选择' }}</div>
        <div>自定义选项: {{ customOptions.join(', ') }}</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <TimeSelect v-model="disabledTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <TimeSelect v-model="readonlyTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h2 class="text-xl font-bold mb-4">不可清空</h2>
      <div class="max-w-sm">
        <TimeSelect v-model="nonClearableTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ nonClearableTime || '未选择' }}</div>
      </div>
    </section>

    <!-- 自定义占位文本 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义占位文本</h2>
      <div class="max-w-sm">
        <TimeSelect v-model="placeholderTime" placeholder="请选择预约时间" />
      </div>
      <div class="mt-2">
        <div>当前选择的时间: {{ placeholderTime || '未选择' }}</div>
      </div>
    </section>
  </div>
</template>
