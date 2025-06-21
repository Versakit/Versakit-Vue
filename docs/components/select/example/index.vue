<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <Select
            v-model="selected1"
            :options="options"
            placeholder="请选择一个选项"
            class="w-full"
          ></Select>
          <div class="text-sm text-gray-500 mt-2">
            当前选中: {{ selected1 ? getOptionLabel(selected1) : '未选择' }}
          </div>
        </div>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="grid grid-cols-3 gap-4">
        <Select
          v-model="selectedSize"
          :options="options"
          size="small"
          placeholder="小型选择器"
        ></Select>
        <Select
          v-model="selectedSize"
          :options="options"
          size="default"
          placeholder="默认选择器"
        ></Select>
        <Select
          v-model="selectedSize"
          :options="options"
          size="large"
          placeholder="大型选择器"
        ></Select>
      </div>
    </section>

    <!-- 多选模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">多选模式</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <Select
            v-model="multiSelected"
            :options="options"
            multiple
            placeholder="请选择多个选项"
            class="w-full"
          ></Select>
          <div class="text-sm text-gray-500 mt-2">
            已选中:
            {{
              multiSelected.length
                ? multiSelected.map((id) => getOptionLabel(id)).join(', ')
                : '未选择'
            }}
          </div>
        </div>
      </div>
    </section>

    <!-- 可搜索 -->
    <section>
      <h2 class="text-lg font-medium mb-4">可搜索</h2>
      <div class="grid grid-cols-2 gap-4">
        <Select
          v-model="filteredSelected"
          :options="moreOptions"
          filterable
          placeholder="输入关键词搜索"
          class="w-full"
        ></Select>
        <Select
          v-model="filteredMultiSelected"
          :options="moreOptions"
          multiple
          filterable
          placeholder="多选并可搜索"
          class="w-full"
        ></Select>
      </div>
    </section>

    <!-- 可清空 -->
    <section>
      <h2 class="text-lg font-medium mb-4">可清空</h2>
      <div class="grid grid-cols-2 gap-4">
        <Select
          v-model="clearableSelected"
          :options="options"
          clearable
          placeholder="单选可清空"
          class="w-full"
        ></Select>
        <Select
          v-model="clearableMultiSelected"
          :options="options"
          multiple
          clearable
          placeholder="多选可清空"
          class="w-full"
        ></Select>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="grid grid-cols-3 gap-4">
        <Select
          v-model="disabledSelected"
          :options="options"
          disabled
          placeholder="禁用的选择器"
        ></Select>
        <Select
          v-model="disabledSelectedWithValue"
          :options="options"
          disabled
          placeholder="禁用但有默认值"
        ></Select>
        <Select
          v-model="disabledMultiSelected"
          :options="options"
          multiple
          disabled
          placeholder="禁用的多选"
        ></Select>
      </div>
    </section>

    <!-- 只读状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">只读状态</h2>
      <div class="grid grid-cols-2 gap-4">
        <Select
          v-model="readonlySelected"
          :options="options"
          readonly
          placeholder="只读选择器"
        ></Select>
      </div>
    </section>

    <!-- 带禁用选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用部分选项</h2>
      <Select
        v-model="selectedWithDisabledOptions"
        :options="optionsWithDisabled"
        placeholder="包含禁用选项"
        class="w-full max-w-md"
      ></Select>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同状态</h2>
      <div class="grid grid-cols-3 gap-4">
        <Select
          v-model="statusSelected"
          :options="options"
          status="success"
          placeholder="成功状态"
        ></Select>
        <Select
          v-model="statusSelected"
          :options="options"
          status="warning"
          placeholder="警告状态"
        ></Select>
        <Select
          v-model="statusSelected"
          :options="options"
          status="error"
          placeholder="错误状态"
        ></Select>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@versakit/vue'
// 选项数据
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' },
  { label: '选项四', value: '4' },
  { label: '选项五', value: '5' },
]

// 更多选项（用于搜索示例）
const moreOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '南京', value: 'nanjing' },
  { label: '武汉', value: 'wuhan' },
  { label: '成都', value: 'chengdu' },
  { label: '西安', value: 'xian' },
  { label: '重庆', value: 'chongqing' },
]

// 包含禁用选项
const optionsWithDisabled = [
  { label: '可选选项 A', value: 'a' },
  { label: '禁用选项 B', value: 'b', disabled: true },
  { label: '可选选项 C', value: 'c' },
  { label: '禁用选项 D', value: 'd', disabled: true },
  { label: '可选选项 E', value: 'e' },
]

// 获取选项标签
const getOptionLabel = (value) => {
  const allOptions = [...options, ...moreOptions, ...optionsWithDisabled]
  const option = allOptions.find((opt) => opt.value === value)
  return option ? option.label : value
}

// 基础用法
const selected1 = ref('')

// 尺寸
const selectedSize = ref('')

// 多选
const multiSelected = ref([])

// 可搜索
const filteredSelected = ref('')
const filteredMultiSelected = ref([])

// 可清空
const clearableSelected = ref('')
const clearableMultiSelected = ref([])

// 禁用状态
const disabledSelected = ref('')
const disabledSelectedWithValue = ref('1') // 预设一个值
const disabledMultiSelected = ref(['1', '2']) // 预设多选值

// 只读状态
const readonlySelected = ref('3') // 预设一个值

// 禁用选项
const selectedWithDisabledOptions = ref('')

// 状态
const statusSelected = ref('')
</script>
