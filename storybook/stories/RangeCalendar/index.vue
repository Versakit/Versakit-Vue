<script setup lang="ts">
import { RangeCalendar } from '@versakit/vue'
import { ref } from 'vue'

const today = new Date()
const nextWeek = new Date()
nextWeek.setDate(today.getDate() + 7)

const dateRange = ref<[Date | null, Date | null]>([today, nextWeek])
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="w-full max-w-md">
        <RangeCalendar />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">默认选中日期</h2>
      <div class="w-full max-w-md">
        <RangeCalendar v-model="dateRange" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">日期范围限制</h2>
      <div class="w-full max-w-md">
        <RangeCalendar
          :min="today"
          :max="
            new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
          "
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="w-full max-w-md">
        <RangeCalendar disabled />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">只读状态</h2>
      <div class="w-full max-w-md">
        <RangeCalendar readonly :model-value="dateRange" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">周一作为一周的第一天</h2>
      <div class="w-full max-w-md">
        <RangeCalendar :first-day-of-week="1" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">本地化设置</h2>
      <div class="w-full max-w-md">
        <RangeCalendar locale="zh-CN" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式</h2>
      <div class="w-full max-w-md">
        <RangeCalendar
          :pt="{
            root: 'bg-gray-50 p-4 rounded-lg shadow',
            header: 'bg-blue-50 p-2 rounded mb-2',
            title: 'text-blue-700 font-bold',
            day: 'hover:bg-blue-50',
            inRange: 'bg-blue-50',
            rangeStart: 'bg-blue-600 text-white',
            rangeEnd: 'bg-blue-600 text-white',
          }"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="w-full max-w-md">
        <RangeCalendar
          unstyled
          :pt="{
            root: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg',
            header: 'flex items-center justify-between mb-6',
            title: 'text-xl text-indigo-700 font-bold',
            navigation: 'flex space-x-2',
            navButton: 'p-2 rounded-full hover:bg-indigo-100 text-indigo-600',
            weekdays: 'grid grid-cols-7 mb-2',
            weekday: 'text-center text-sm font-medium text-indigo-400 py-2',
            days: 'grid grid-cols-7 gap-1',
            day: 'flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors hover:bg-indigo-100',
            today: 'border border-indigo-300',
            inRange: 'bg-indigo-100',
            rangeStart: 'bg-indigo-600 text-white',
            rangeEnd: 'bg-indigo-600 text-white',
          }"
        />
      </div>
    </section>
  </div>
</template>
