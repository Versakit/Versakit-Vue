<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <DatePicker v-model="selectedDate" />
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
        <DatePicker v-model="rangeDate" :min="minDate" :max="maxDate" />
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

    <!-- 自定义格式 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义格式</h3>
      <div class="max-w-sm">
        <DatePicker
          v-model="formatDate"
          format="yyyy年MM月dd日"
          placeholder="请选择日期"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ formatDate ? formatDate.toLocaleDateString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <DatePicker v-model="disabledDate" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <DatePicker v-model="readonlyDate" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <DatePicker v-model="nonClearableDate" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{
            nonClearableDate ? nonClearableDate.toLocaleDateString() : '未选择'
          }}
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
        <DatePicker v-model="localeDate" locale="zh-CN" />
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
import { DatePicker } from '@versakit/vue'

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

// 自定义格式
const formatDate = ref(new Date())

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 不可清空
const nonClearableDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())
</script>
