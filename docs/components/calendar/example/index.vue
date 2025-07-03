<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <Calendar v-model="selectedDate" />
      </div>
      <div class="mt-2">
        当前选择的日期:
        {{ selectedDate ? selectedDate.toLocaleDateString() : '未选择' }}
      </div>
    </section>

    <!-- 日期范围限制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">日期范围限制</h3>
      <div class="max-w-sm">
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

    <!-- 周起始日 -->
    <section>
      <h3 class="text-lg font-medium mb-4">周起始日</h3>
      <div class="max-w-sm">
        <Calendar v-model="weekStartDate" :firstDayOfWeek="1" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ weekStartDate ? weekStartDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>周起始日: 周一</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <Calendar v-model="disabledDate" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <Calendar v-model="readonlyDate" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
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
  </div>
</template>

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

// 周起始日
const weekStartDate = ref(new Date())

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())
</script>
