<script setup lang="ts">
import { Runhorselight, Table } from '@versakit/vue'
import { computed, ref } from 'vue'

interface TableColumn {
  key: string
  title: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  icon?: string
}

const columns: TableColumn[] = [
  { key: 'name', title: '姓名', sortable: true, icon: '👤' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态', align: 'center' },
  { key: 'joinedAt', title: '加入时间', align: 'right' },
]

const rows = ref([
  {
    name: '张三',
    role: '前端工程师',
    status: 'active',
    joinedAt: '2026-01-12',
  },
  {
    name: '李四',
    role: '产品经理',
    status: 'inactive',
    joinedAt: '2025-10-08',
  },
  { name: '王五', role: '设计师', status: 'active', joinedAt: '2024-06-21' },
])

const runhorselightItems = ref([
  '最新公告：Versakit 组件库已支持跑马灯组件，再次欢迎大家使用。',
  '更多内容请关注我们的文档更新，跑马灯是信息展示的好方式。',
  {
    type: 'image',
    src: 'https://avatars.githubusercontent.com/u/90918625?v=4',
    alt: '示例图片',
  },
  {
    type: 'card',
    title: '卡片标题',
    description: '支持图片、文字和卡片展示形式，自动填充、循环滚动都可用。',
    backgroundColor: '#f9fafb',
    textColor: '#111827',
    borderRadius: '12px',
  },
])

const runhorselightPrefix = ref({
  type: 'image',
  src: 'https://gips1.baidu.com/it/u=3874647369,3220417986&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280',
  alt: '前缀图标',
})

const runhorselightSuffix = ref({
  type: 'text',
  content: '点击有反馈',
})

const slotPrefix = ref({
  type: 'text',
  content: 'HOT',
})

const slotSuffix = ref({
  type: 'image',
  src: 'https://avatars.githubusercontent.com/u/90918625?v=4',
  alt: '结束图标',
})

const prefixClickLog = ref<string[]>([])
const suffixClickLog = ref<string[]>([])

const statusLabel = (status: string) =>
  status === 'active' ? '启用中' : '已停用'

const statusClass = (status: string) =>
  status === 'active'
    ? 'inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300'
    : 'inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300'

const count = computed(() => rows.value.length)

const handlePrefixClick = (payload: any) => {
  prefixClickLog.value.unshift(
    `${payload.target} · ${payload.item.content || payload.item.title || payload.item.src || '空内容'}`,
  )
  prefixClickLog.value = prefixClickLog.value.slice(0, 3)
}

const handleSuffixClick = (payload: any) => {
  suffixClickLog.value.unshift(
    `${payload.target} · ${payload.item.content || payload.item.title || payload.item.src || '空内容'}`,
  )
  suffixClickLog.value = suffixClickLog.value.slice(0, 3)
}
</script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">基础用法</h3>
      <Table
        :columns="columns"
        :searchable="true"
        :exportable="true"
        :pagination="true"
        :data="rows"
      />
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">斑马纹 + 边框 + 紧凑模式</h3>
      <Table :columns="columns" :data="rows" stripe border dense />
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">自定义单元格</h3>
      <Table :columns="columns" :data="rows" border>
        <template #status="{ row }">
          <span :class="statusClass(row.status)">
            {{ statusLabel(row.status) }}
          </span>
        </template>
      </Table>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        当前共 {{ count }} 条数据
      </p>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">Runhorselight 跑马灯示例</h3>
      <Runhorselight
        :items="runhorselightItems"
        :prefix="runhorselightPrefix"
        :suffix="runhorselightSuffix"
        direction="left"
        duration="10"
        height="5rem"
        backgroundColor="#f3f4f6"
        textColor="#111827"
        borderRadius="1rem"
        gap="3rem"
        :on-prefix-click="handlePrefixClick"
        :on-suffix-click="handleSuffixClick"
      />
      <div
        class="grid gap-3 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-2"
      >
        <div>
          <div class="mb-1 font-medium">前缀点击</div>
          <ul class="space-y-1 text-gray-600 dark:text-gray-300">
            <li v-for="(log, index) in prefixClickLog" :key="`prefix-${index}`">
              {{ log }}
            </li>
          </ul>
        </div>
        <div>
          <div class="mb-1 font-medium">后缀点击</div>
          <ul class="space-y-1 text-gray-600 dark:text-gray-300">
            <li v-for="(log, index) in suffixClickLog" :key="`suffix-${index}`">
              {{ log }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">Runhorselight 插槽用法</h3>
      <Runhorselight
        direction="right"
        duration="20"
        :prefix="slotPrefix"
        :suffix="slotSuffix"
        :on-prefix-click="handlePrefixClick"
        :on-suffix-click="handleSuffixClick"
      >
        <div class="rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
          插槽内容会自动复制铺满滚动区
        </div>
      </Runhorselight>
    </section>
  </div>
</template>
