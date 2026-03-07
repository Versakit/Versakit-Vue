<template>
  <div :class="classes.root">
    <div class="overflow-x-auto">
      <table :class="classes.table">
        <thead :class="classes.thead">
          <tr>
            <th
              v-for="col in columns"
              :key="col.key"
              :class="[classes.th, getAlignClass(col.align)]"
              :style="{
                width: col.width
                  ? typeof col.width === 'number'
                    ? `${col.width}px`
                    : col.width
                  : undefined,
              }"
            >
              {{ col.title }}
            </th>
          </tr>
        </thead>
        <tbody :class="classes.tbody">
          <tr
            v-for="(row, rowIndex) in data"
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

    <div v-if="!data?.length" :class="classes.empty">
      <slot name="empty">
        <span class="text-sm">{{ emptyText }}</span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tableVariants } from './index.variants'
import type { TableProps } from './type'

const props = withDefaults(defineProps<TableProps>(), {
  data: () => [],
  columns: () => [],
  stripe: false,
  border: false,
  dense: false,
  emptyText: 'No Data',
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
</script>
