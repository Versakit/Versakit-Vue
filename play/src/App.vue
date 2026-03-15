<script setup lang="ts">
import { computed, ref } from 'vue'
import type { VirtualListOptions, LazyLoadOptions } from '@versakit/directives'
import { Button, Input } from '@versakit/vue'

interface UserRecord {
  id: number
  name: string
  score: number
  department: string
  city: string
  tags: string[]
  avatar: string
  trend: 'up' | 'down' | 'stable'
  detail: string
}

const departments = ['研发', '产品', '设计', '运营', '市场', '销售']
const cities = ['上海', '北京', '深圳', '杭州', '成都', '武汉']
const trends: Array<UserRecord['trend']> = ['up', 'down', 'stable']
const pickById = <T,>(list: readonly T[], id: number): T =>
  list[id % list.length] as T

const records = ref<UserRecord[]>(
  Array.from({ length: 5000 }, (_, index) => {
    const id = index + 1
    return {
      id,
      name: `成员-${id}`,
      score: Math.floor(65 + ((id * 17) % 35)),
      department: pickById(departments, id),
      city: pickById(cities, id),
      tags: [
        `等级-${(id % 5) + 1}`,
        id % 2 ? '远程' : '驻场',
        id % 3 ? '核心' : '协作',
      ],
      avatar: `https://picsum.photos/seed/versakit-${id}/72/72`,
      trend: pickById(trends, id),
      detail: `负责项目${(id % 18) + 1}，最近两周协作任务${(id % 9) + 3}项`,
    }
  }),
)

const keyword = ref('')
const denseMode = ref(false)
const renderRangeText = ref('0 - 0')
const lazyLoadedCount = ref(0)

const filteredRecords = computed(() => {
  const text = keyword.value.trim()
  if (!text) return records.value
  return records.value.filter(
    (item) =>
      item.name.includes(text) ||
      item.department.includes(text) ||
      item.city.includes(text) ||
      item.tags.some((tag) => tag.includes(text)),
  )
})

const createTagElement = (label: string) => {
  const tag = document.createElement('span')
  tag.className =
    'rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600 dark:bg-slate-700 dark:text-slate-200'
  tag.textContent = label
  return tag
}

const renderVirtualCard = (item: UserRecord, index: number) => {
  const wrapper = document.createElement('article')
  wrapper.className =
    'mx-3 mb-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800'

  const head = document.createElement('div')
  head.className = 'mb-2 flex items-start justify-between gap-3'

  const left = document.createElement('div')
  left.className = 'min-w-0'

  const title = document.createElement('h4')
  title.className =
    'truncate text-sm font-semibold text-slate-900 dark:text-slate-100'
  title.textContent = `${item.name} · ${item.department}`

  const subTitle = document.createElement('p')
  subTitle.className = 'text-xs text-slate-500 dark:text-slate-400'
  subTitle.textContent = `${item.city} · 编号 ${item.id}`

  left.appendChild(title)
  left.appendChild(subTitle)

  const score = document.createElement('span')
  score.className =
    'rounded-lg bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200'
  score.textContent = `评分 ${item.score}`

  head.appendChild(left)
  head.appendChild(score)

  const detail = document.createElement('p')
  detail.className = 'mb-3 text-xs leading-5 text-slate-600 dark:text-slate-300'
  detail.textContent = `${item.detail} · 排序 ${index + 1}`

  const tags = document.createElement('div')
  tags.className = 'mb-2 flex flex-wrap gap-1.5'
  item.tags.forEach((tag) => tags.appendChild(createTagElement(tag)))

  const trend = document.createElement('div')
  trend.className = 'text-xs font-medium'
  trend.textContent =
    item.trend === 'up'
      ? '趋势：持续增长'
      : item.trend === 'down'
        ? '趋势：短期回落'
        : '趋势：平稳'
  trend.classList.add(
    item.trend === 'up'
      ? 'text-emerald-600'
      : item.trend === 'down'
        ? 'text-rose-500'
        : 'text-amber-500',
  )

  wrapper.appendChild(head)
  wrapper.appendChild(detail)
  wrapper.appendChild(tags)
  wrapper.appendChild(trend)
  return wrapper
}

const virtualListOptions = computed<VirtualListOptions<UserRecord>>(() => ({
  items: filteredRecords.value,
  itemHeight: denseMode.value ? 128 : 156,
  overscan: denseMode.value ? 8 : 6,
  keyField: 'id',
  renderItem: renderVirtualCard,
  onRangeChange: (start: number, end: number) => {
    renderRangeText.value = `${start} - ${end}`
  },
}))

const lazyImageOptions = (seed: number): LazyLoadOptions => ({
  src: `https://picsum.photos/seed/lazy-demo-${seed}/420/220`,
  loadingClass: 'lazy-loading',
  loadedClass: 'lazy-loaded',
  errorClass: 'lazy-error',
  rootMargin: '0px 0px 220px 0px',
  onLoad: () => {
    lazyLoadedCount.value += 1
  },
})

const resetKeyword = () => {
  keyword.value = ''
}
</script>

<template>
  <main class="mx-auto flex max-w-7xl flex-col gap-8 p-6">
    <section
      class="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
    >
      <div class="mb-4 flex flex-wrap items-center gap-3">
        <Input
          v-model="keyword"
          placeholder="输入名字/部门/标签筛选"
          class="w-full max-w-sm"
        />
        <Button @click="denseMode = !denseMode">
          {{ denseMode ? '切换为标准密度' : '切换为紧凑密度' }}
        </Button>
        <Button variant="outline" @click="resetKeyword">重置筛选</Button>
      </div>
      <div
        class="mb-2 flex items-center justify-between text-xs text-slate-500"
      >
        <span>
          总数据 {{ records.length }} 条，筛选后 {{ filteredRecords.length }} 条
        </span>
        <span>当前渲染窗口索引 {{ renderRangeText }}</span>
      </div>
      <div
        v-virtual-list="virtualListOptions"
        class="h-[560px] rounded-xl bg-slate-50 dark:bg-slate-900"
      />
    </section>

    <section
      class="rounded-2xl border border-slate-200 p-4 dark:border-slate-700"
    >
      <div
        class="mb-3 text-sm font-semibold text-slate-800 dark:text-slate-100"
      >
        懒加载图片区（已加载 {{ lazyLoadedCount }} 张）
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <img
          v-for="seed in 12"
          :key="seed"
          class="lazy-image h-52 w-full rounded-xl object-cover"
          :alt="`懒加载图片-${seed}`"
          v-lazy-load="lazyImageOptions(seed)"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.lazy-image {
  opacity: 0;
  transform: scale(0.98);
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
  background: linear-gradient(90deg, #f1f5f9, #e2e8f0, #f1f5f9);
  background-size: 220% 100%;
  animation: pulse-bg 1.4s ease infinite;
}

.lazy-image.lazy-loaded {
  opacity: 1;
  transform: scale(1);
  animation: none;
}

.lazy-image.lazy-error {
  opacity: 1;
  background: #fecdd3;
}

@keyframes pulse-bg {
  0% {
    background-position: 220% 0;
  }
  100% {
    background-position: -40% 0;
  }
}
</style>
