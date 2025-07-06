<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@versakit/vue'

// 基础用法
const selectedDate = ref(new Date())

// 日期范围限制
const rangeDate = ref(new Date())
const today = new Date()
const minDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
)
const maxDate = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
)

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 周一为一周的第一天
const mondayFirstDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())

// 自定义样式
const customStyleDate = ref(new Date())
</script>

<template>
  <div class="space-y-8 p-4">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="max-w-md">
        <Calendar v-model="selectedDate" />
      </div>
      <div class="mt-2">
        当前选择的日期:
        {{ selectedDate ? selectedDate.toLocaleDateString() : '未选择' }}
      </div>
    </section>

    <!-- 日期范围限制 -->
    <section>
      <h2 class="text-xl font-bold mb-4">日期范围限制</h2>
      <div class="max-w-md">
        <Calendar v-model="rangeDate" :min="minDate" :max="maxDate" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ rangeDate ? rangeDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>
          可选范围: {{ minDate.toLocaleDateString() }} 至
          {{ maxDate.toLocaleDateString() }}
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-md">
            <Calendar v-model="disabledDate" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-md">
            <Calendar v-model="readonlyDate" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 周一为一周的第一天 -->
    <section>
      <h2 class="text-xl font-bold mb-4">周一为一周的第一天</h2>
      <div class="max-w-md">
        <Calendar v-model="mondayFirstDate" :firstDayOfWeek="1" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{
            mondayFirstDate ? mondayFirstDate.toLocaleDateString() : '未选择'
          }}
        </div>
        <div>一周的第一天: 周一</div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h2 class="text-xl font-bold mb-4">本地化</h2>
      <div class="max-w-md">
        <Calendar v-model="localeDate" locale="zh-CN" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ localeDate ? localeDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>本地化: 中文</div>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式</h2>
      <div class="max-w-md">
        <Calendar
          v-model="customStyleDate"
          :pt="{
            root: 'bg-gray-100 rounded-lg p-4',
            header: 'bg-blue-50 rounded-t-lg',
            weekdays: 'text-blue-600',
            day: 'hover:bg-blue-100',
            selectedDay: 'bg-blue-500 text-white',
            todayDay: 'border-2 border-blue-500',
          }"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{
            customStyleDate ? customStyleDate.toLocaleDateString() : '未选择'
          }}
        </div>
      </div>
    </section>
  </div>
</template>
