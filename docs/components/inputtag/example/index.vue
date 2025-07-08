<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="max-w-md">
        <InputTag v-model="tagValue" placeholder="请输入标签后按回车" />
        <div class="text-sm text-gray-500 mt-2">
          当前标签值: {{ tagValue.join(', ') || '空' }}
        </div>
      </div>
    </section>

    <!-- 预设标签 -->
    <section>
      <h2 class="text-lg font-medium mb-4">预设标签</h2>
      <div class="max-w-md">
        <InputTag v-model="presetTags" placeholder="请输入更多标签" />
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同尺寸</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag
          v-model="sizeTags"
          size="small"
          placeholder="小型标签输入框"
        />
        <InputTag
          v-model="sizeTags"
          size="default"
          placeholder="默认尺寸标签输入框"
        />
        <InputTag
          v-model="sizeTags"
          size="large"
          placeholder="大型标签输入框"
        />
      </div>
    </section>

    <!-- 前缀和后缀 -->
    <section>
      <h2 class="text-lg font-medium mb-4">前缀和后缀</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="prefixTags" placeholder="带前缀">
          <template #prefix>标签:</template>
        </InputTag>
        <InputTag v-model="suffixTags" placeholder="带后缀">
          <template #suffix>+</template>
        </InputTag>
      </div>
    </section>

    <!-- 最大数量和计数 -->
    <section>
      <h2 class="text-lg font-medium mb-4">最大数量和计数</h2>
      <div class="max-w-md">
        <InputTag
          v-model="maxCountTags"
          :maxCount="5"
          showCount
          placeholder="最多添加5个标签"
        />
      </div>
    </section>

    <!-- 不可关闭 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不可关闭标签</h2>
      <div class="max-w-md">
        <InputTag
          v-model="fixedTags"
          :closable="false"
          placeholder="标签不可删除"
        />
      </div>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同状态</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="statusTags" status="error" placeholder="错误状态" />
        <InputTag
          v-model="statusTags"
          status="warning"
          placeholder="警告状态"
        />
        <InputTag
          v-model="statusTags"
          status="success"
          placeholder="成功状态"
        />
      </div>
    </section>

    <!-- 禁用和只读 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用和只读</h2>
      <div class="grid grid-cols-1 gap-4 max-w-md">
        <InputTag v-model="disabledTags" disabled placeholder="禁用状态" />
        <InputTag v-model="readonlyTags" readonly placeholder="只读状态" />
      </div>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式 (PT)</h2>
      <div class="max-w-md">
        <InputTag
          v-model="customTags"
          placeholder="自定义样式"
          :pt="{
            wrapper:
              'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
            tag: 'bg-purple-100 text-purple-800 border border-purple-300',
            tagClose: 'text-purple-800 hover:text-purple-950',
          }"
        />
      </div>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>
      <div class="max-w-md">
        <InputTag
          v-model="unstyledTags"
          placeholder="自定义所有样式"
          unstyled
          :pt="{
            root: 'w-full',
            wrapper:
              'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md flex flex-wrap items-center',
            input: 'px-3 py-1 bg-white flex-grow outline-none rounded-sm',
            tag: 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1 flex items-center',
            tagClose: 'ml-1 text-blue-500 hover:text-blue-700 font-bold',
          }"
        />
      </div>
    </section>

    <!-- 实际应用案例 -->
    <section>
      <h2 class="text-lg font-medium mb-4">实际应用案例: 文章标签</h2>
      <div class="max-w-lg border p-4 rounded-md shadow-sm bg-white">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            文章标题
          </label>
          <input
            type="text"
            v-model="article.title"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="请输入文章标题"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            文章标签
            <span class="text-xs text-gray-500">(最多5个)</span>
          </label>
          <InputTag
            v-model="article.tags"
            :maxCount="5"
            showCount
            placeholder="输入标签后按回车"
          />
        </div>

        <div>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            :disabled="!article.title || article.tags.length === 0"
          >
            发布文章
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputTag } from '@versakit/vue'

// 基础用法
const tagValue = ref<string[]>([])

// 预设标签
const presetTags = ref<string[]>(['JavaScript', 'Vue', 'React'])

// 不同尺寸
const sizeTags = ref<string[]>(['小', '中', '大'])

// 前缀和后缀
const prefixTags = ref<string[]>(['前缀示例'])
const suffixTags = ref<string[]>(['后缀示例'])

// 最大数量和计数
const maxCountTags = ref<string[]>(['限制数量'])

// 不可关闭
const fixedTags = ref<string[]>(['固定标签1', '固定标签2'])

// 不同状态
const statusTags = ref<string[]>(['状态示例'])

// 禁用和只读
const disabledTags = ref<string[]>(['禁用标签'])
const readonlyTags = ref<string[]>(['只读标签'])

// 自定义样式
const customTags = ref<string[]>(['自定义', '样式'])

// 无样式模式
const unstyledTags = ref<string[]>(['完全', '自定义'])

// 实际应用案例
const article = ref({
  title: '',
  tags: ['Vue3', 'TypeScript'],
})
</script>
