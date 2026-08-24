<template>
  <div :class="classes.root">
    <div
      class="mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-950"
    >
      <div class="min-w-0 flex-1">
        <div v-if="props.searchable" class="w-full">
          <input
            v-model="searchValue"
            type="text"
            :placeholder="props.searchPlaceholder"
            class="w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
          />
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button
          v-if="props.exportable"
          type="button"
          @click="downloadCsv"
          class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
        >
          导出 CSV
        </button>
      </div>
    </div>

    <div class="overflow-x-auto">
      <table :class="classes.table">
        <thead :class="classes.thead">
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[
                classes.th,
                getAlignClass(col.align),
                col.sortable
                  ? 'cursor-pointer select-none text-gray-700 dark:text-gray-300'
                  : '',
              ]"
              :style="{
                width: col.width
                  ? typeof col.width === 'number'
                    ? `${col.width}px`
                    : col.width
                  : undefined,
              }"
              @click="col.sortable && toggleSort(col.key)"
              :aria-sort="col.sortable ? ariaSort(col.key) : undefined"
            >
              <div class="flex items-center gap-2">
                <span
                  v-if="col.icon"
                  class="inline-flex h-4 w-4 items-center justify-center text-gray-500 dark:text-gray-400"
                >
                  {{ col.icon }}
                </span>
                <span>{{ col.title }}</span>
                <span v-if="col.sortable" class="text-xs text-gray-400">
                  {{
                    sortKey === col.key
                      ? sortOrder === 'asc'
                        ? '↑'
                        : '↓'
                      : '⇅'
                  }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody :class="classes.tbody">
          <tr
            v-for="(row, rowIndex) in paginatedData"
            :key="rowIndex"
            :class="classes.tr"
          >
            <td
              v-for="col in columns"
              :key="col.key"
              :class="[classes.td, getAlignClass(col.align)]"
            >
              <slot :name="col.key" :row="row" :index="rowIndex">
                {{ row[col.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="!filteredData.length" :class="classes.empty">
      <slot name="empty">
        <span class="text-sm">{{ emptyText }}</span>
      </slot>
    </div>

    <div
      v-if="props.pagination && filteredData.length"
      class="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-b-lg border-t border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
    >
      <div>
        第 {{ currentPage }} / {{ totalPages }} 页 · 共
        {{ filteredData.length }} 条
      </div>
      <div class="flex items-center gap-2">
        <button
          type="button"
          class="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          :disabled="currentPage <= 1"
          @click="currentPage = Math.max(1, currentPage - 1)"
        >
          上一页
        </button>
        <button
          type="button"
          class="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:text-blue-400"
          :disabled="currentPage >= totalPages"
          @click="currentPage = Math.min(totalPages, currentPage + 1)"
        >
          下一页
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'VsTable' })
import { computed, ref, watch } from 'vue'
import { tableVariants } from './index.variants'
import type { TableColumn, TableProps } from './type'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  stripe: false,
  border: false,
  dense: false,
  emptyText: 'No Data',
  searchable: false,
  searchPlaceholder: 'Search',
  pagination: false,
  pageSize: 10,
  initialPage: 1,
  exportable: false,
})

const searchValue = ref<string>('')
const sortKey = ref<string>('')
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentPage = ref<number>(props.initialPage)

const sortedData = computed<any[]>(() => {
  const rows = (props.data ?? []) as any[]
  if (!sortKey.value) {
    return rows
  }

  return [...rows].sort((a, b) => {
    const left = a[sortKey.value]
    const right = b[sortKey.value]

    if (left == null && right == null) return 0
    if (left == null) return sortOrder.value === 'asc' ? -1 : 1
    if (right == null) return sortOrder.value === 'asc' ? 1 : -1

    if (typeof left === 'number' && typeof right === 'number') {
      return sortOrder.value === 'asc' ? left - right : right - left
    }

    const leftText = String(left).toLowerCase()
    const rightText = String(right).toLowerCase()

    if (leftText < rightText) return sortOrder.value === 'asc' ? -1 : 1
    if (leftText > rightText) return sortOrder.value === 'asc' ? 1 : -1
    return 0
  })
})

const filteredData = computed<any[]>(() => {
  const rows = sortedData.value
  const columns = (props.columns ?? []) as TableColumn[]

  if (!props.searchable || !searchValue.value.trim()) {
    return rows
  }

  const keyword = searchValue.value.trim().toLowerCase()
  return rows.filter((row) =>
    columns.some((col) => {
      const value = row[col.key]
      if (value === undefined || value === null) {
        return false
      }
      return String(value).toLowerCase().includes(keyword)
    }),
  )
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredData.value.length / props.pageSize!)),
)

const paginatedData = computed(() => {
  if (!props.pagination) {
    return filteredData.value
  }

  const start = (currentPage.value - 1) * props.pageSize!
  return filteredData.value.slice(start, start + props.pageSize!)
})

watch([() => filteredData.value.length, () => props.pageSize], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value
  }
})

const classes = computed(() => {
  const { root, table, thead, th, tbody, tr, td, empty } = tableVariants({
    stripe: props.stripe,
    border: props.border,
    dense: props.dense,
  })
  return {
    root: root(),
    table: table(),
    thead: thead(),
    th: th(),
    tbody: tbody(),
    tr: tr(),
    td: td(),
    empty: empty(),
  }
})

const getAlignClass = (align?: 'left' | 'center' | 'right') => {
  switch (align) {
    case 'center':
      return 'text-center'
    case 'right':
      return 'text-right'
    default:
      return 'text-left'
  }
}

const toggleSort = (key: string) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}

const ariaSort = (key: string) => {
  if (sortKey.value !== key) return 'none'
  return sortOrder.value === 'asc' ? 'ascending' : 'descending'
}

const createCsv = () => {
  const columns = (props.columns ?? []) as TableColumn[]
  const header = columns.map(
    (col) => `"${String(col.title).replace(/"/g, '""')}"`,
  )
  const rows = filteredData.value.map((row) =>
    columns
      .map((col) => {
        const value = row[col.key]
        return `"${String(value ?? '').replace(/"/g, '""')}"`
      })
      .join(','),
  )
  return [header.join(','), ...rows].join('\r\n')
}

const downloadCsv = () => {
  const csv = createCsv()
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'table-export.csv'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
</script>

<style lang="less" scoped>
.searchable {
  margin-bottom: 1rem;
}
</style>
