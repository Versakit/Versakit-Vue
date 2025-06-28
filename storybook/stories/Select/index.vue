<script setup lang="ts">
import { Select } from '@versakit/vue'
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('option1')
const multipleValue = ref([])

const defaultOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' },
  { value: 'option5', label: '选项五' },
]

const groupOptions = [
  { value: 'fruit1', label: '苹果', group: '水果' },
  { value: 'fruit2', label: '香蕉', group: '水果' },
  { value: 'fruit3', label: '橙子', group: '水果' },
  { value: 'vegetable1', label: '西红柿', group: '蔬菜' },
  { value: 'vegetable2', label: '黄瓜', group: '蔬菜' },
  { value: 'vegetable3', label: '茄子', group: '蔬菜' },
]
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Select v-model="value1" :options="defaultOptions" placeholder="请选择" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Select
        v-model="value1"
        :options="defaultOptions"
        placeholder="请选择"
        disabled
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">只读状态</h2>
      <Select
        v-model="value2"
        :options="defaultOptions"
        placeholder="请选择"
        readonly
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">多选模式</h2>
      <Select
        v-model="multipleValue"
        :options="defaultOptions"
        placeholder="请选择"
        multiple
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            size="small"
          />
        </div>
        <div>
          <p class="mb-2">默认尺寸</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            size="default"
          />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            size="large"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同状态</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">默认状态</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            status="default"
          />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Select
            v-model="value2"
            :options="defaultOptions"
            placeholder="请选择"
            status="success"
          />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            status="warning"
            help-text="请注意选择"
          />
        </div>
        <div>
          <p class="mb-2">错误状态</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            status="error"
            error-text="请选择一个选项"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可清除</h2>
      <Select
        v-model="value2"
        :options="defaultOptions"
        placeholder="请选择"
        clearable
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可搜索</h2>
      <Select
        v-model="value1"
        :options="defaultOptions"
        placeholder="请选择"
        filterable
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">分组选项</h2>
      <Select v-model="value1" :options="groupOptions" placeholder="请选择" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带标签</h2>
      <Select
        v-model="value1"
        :options="defaultOptions"
        placeholder="请选择"
        show-label
        label="选择项"
        required
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Select
        v-model="value1"
        :options="defaultOptions"
        placeholder="请选择"
        :pt="{
          trigger:
            'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
          dropdown: 'border-purple-200 shadow-lg',
          option: 'hover:bg-purple-50',
          optionSelected: 'bg-purple-100 text-purple-800',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">自定义边框样式</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            unstyled
            :pt="{
              root: 'relative',
              trigger:
                'w-full flex items-center justify-between bg-white border-2 border-blue-500 rounded-lg p-2 cursor-pointer',
              value: 'text-gray-800',
              placeholder: 'text-gray-400',
              dropdown:
                'absolute w-full mt-1 bg-white border border-blue-300 rounded-lg shadow-lg z-10',
              option: 'p-2 cursor-pointer hover:bg-blue-50',
              optionSelected: 'bg-blue-100 text-blue-800',
              icon: 'text-blue-500',
            }"
          />
        </div>
        <div>
          <p class="mb-2">圆角样式</p>
          <Select
            v-model="value1"
            :options="defaultOptions"
            placeholder="请选择"
            unstyled
            :pt="{
              root: 'relative',
              trigger:
                'w-full flex items-center justify-between bg-gray-100 rounded-full p-3 cursor-pointer',
              value: 'text-gray-800',
              placeholder: 'text-gray-500',
              dropdown:
                'absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden',
              option: 'p-3 cursor-pointer hover:bg-gray-50',
              optionSelected: 'bg-gray-100',
              icon: 'text-gray-600',
            }"
          />
        </div>
        <div>
          <p class="mb-2">多选标签样式</p>
          <Select
            v-model="multipleValue"
            :options="defaultOptions"
            placeholder="请选择"
            multiple
            unstyled
            :pt="{
              root: 'relative',
              trigger:
                'w-full flex flex-wrap items-center bg-white border-2 border-green-500 rounded-md p-1 cursor-pointer min-h-[42px]',
              dropdown:
                'absolute w-full mt-1 bg-white border border-green-300 rounded-md shadow-lg z-10',
              option: 'p-2 cursor-pointer hover:bg-green-50',
              optionSelected: 'bg-green-100 text-green-800',
              tag: 'inline-flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-sm m-1',
              tagRemove: 'ml-1 text-green-600 hover:text-green-800',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
