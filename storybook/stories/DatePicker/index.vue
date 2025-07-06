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

// 禁用状态
const disabledDate = ref(new Date())
const readonlyDate = ref(new Date())

// 自定义格式
const formattedDate = ref(new Date())

// 周一为一周的第一天
const mondayFirstDate = ref(new Date())

// 不可清空
const nonClearableDate = ref(new Date())

// 本地化
const localeDate = ref(new Date())

// 使用字符串日期
const stringDate = ref('2023-12-25')
</script>

<template>
  <div class="space-y-8 p-4">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
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
      <h2 class="text-xl font-bold mb-4">日期范围限制</h2>
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

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
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

    <!-- 自定义格式 -->
    <section>
      <h2 class="text-xl font-bold mb-4">自定义格式</h2>
      <div class="max-w-sm">
        <DatePicker v-model="formattedDate" format="yyyy年MM月dd日" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期:
          {{ formattedDate ? formattedDate.toLocaleDateString() : '未选择' }}
        </div>
        <div>格式: yyyy年MM月dd日</div>
      </div>
    </section>

    <!-- 周一为一周的第一天 -->
    <section>
      <h2 class="text-xl font-bold mb-4">周一为一周的第一天</h2>
      <div class="max-w-sm">
        <DatePicker v-model="mondayFirstDate" :firstDayOfWeek="1" />
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

    <!-- 不可清空 -->
    <section>
      <h2 class="text-xl font-bold mb-4">不可清空</h2>
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
      <h2 class="text-xl font-bold mb-4">本地化</h2>
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

    <!-- 使用字符串日期 -->
    <section>
      <h2 class="text-xl font-bold mb-4">使用字符串日期</h2>
      <div class="max-w-sm">
        <DatePicker v-model="stringDate" />
      </div>
      <div class="mt-2">
        <div>当前选择的日期: {{ stringDate || '未选择' }}</div>
      </div>
    </section>
  </div>
</template>
