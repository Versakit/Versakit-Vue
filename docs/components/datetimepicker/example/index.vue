<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h3 class="text-lg font-medium mb-4">基础用法</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="selectedDateTime" />
      </div>
      <div class="mt-2">
        当前选择的日期时间:
        {{ selectedDateTime ? selectedDateTime.toLocaleString() : '未选择' }}
      </div>
    </section>

    <!-- 日期范围限制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">日期范围限制</h3>
      <div class="max-w-sm">
        <DateTimePicker
          v-model="rangeDateTime"
          :min="minDateTime"
          :max="maxDateTime"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ rangeDateTime ? rangeDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>
          可选范围: {{ minDateTime.toLocaleString() }} 至
          {{ maxDateTime.toLocaleString() }}
        </div>
      </div>
    </section>

    <!-- 12小时制 -->
    <section>
      <h3 class="text-lg font-medium mb-4">12小时制</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="time12hDateTime" timeFormat="12h" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ time12hDateTime ? time12hDateTime.toLocaleString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 显示秒选择器 -->
    <section>
      <h3 class="text-lg font-medium mb-4">显示秒选择器</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="secondsDateTime" :showSeconds="true" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ secondsDateTime ? secondsDateTime.toLocaleString() : '未选择' }}
        </div>
      </div>
    </section>

    <!-- 自定义步长 -->
    <section>
      <h3 class="text-lg font-medium mb-4">自定义步长</h3>
      <div class="max-w-sm">
        <DateTimePicker
          v-model="stepsDateTime"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
          :showSeconds="true"
        />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ stepsDateTime ? stepsDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>小时步长: 2, 分钟步长: 15, 秒步长: 30</div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h3 class="text-lg font-medium mb-4">禁用状态</h3>
      <div class="flex flex-wrap gap-8">
        <div>
          <div class="max-w-sm">
            <DateTimePicker v-model="disabledDateTime" disabled />
          </div>
          <div class="mt-2">禁用状态</div>
        </div>
        <div>
          <div class="max-w-sm">
            <DateTimePicker v-model="readonlyDateTime" readonly />
          </div>
          <div class="mt-2">只读状态</div>
        </div>
      </div>
    </section>

    <!-- 不可清空 -->
    <section>
      <h3 class="text-lg font-medium mb-4">不可清空</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="nonClearableDateTime" :clearable="false" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{
            nonClearableDateTime
              ? nonClearableDateTime.toLocaleString()
              : '未选择'
          }}
        </div>
      </div>
    </section>

    <!-- 本地化 -->
    <section>
      <h3 class="text-lg font-medium mb-4">本地化</h3>
      <div class="max-w-sm">
        <DateTimePicker v-model="localeDateTime" locale="zh-CN" />
      </div>
      <div class="mt-2">
        <div>
          当前选择的日期时间:
          {{ localeDateTime ? localeDateTime.toLocaleString() : '未选择' }}
        </div>
        <div>本地化: 中文</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateTimePicker } from '@versakit/vue'

// 基础用法
const selectedDateTime = ref(new Date())

// 日期范围限制
const rangeDateTime = ref(new Date())
const today = new Date()
const minDateTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
)
const maxDateTime = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 7,
)

// 12小时制
const time12hDateTime = ref(new Date())

// 显示秒选择器
const secondsDateTime = ref(new Date())

// 自定义步长
const stepsDateTime = ref(new Date())

// 禁用状态
const disabledDateTime = ref(new Date())
const readonlyDateTime = ref(new Date())

// 不可清空
const nonClearableDateTime = ref(new Date())

// 本地化
const localeDateTime = ref(new Date())
</script>
