<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { pagination } from './index.variants'
import type { PaginationProps, PaginationPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<PaginationProps & { pt?: PaginationPassThroughAttributes }>(),
  {
    modelValue: 1,
    pageSize: 10,
    size: 'md',
    variant: 'filled',
    disabled: false,
    pagerCount: 7,
    showQuickJumper: false,
    showSizeChanger: false,
    pageSizeOptions: () => [10, 20, 50, 100],
    showTotal: false,
    simple: false,
    unstyled: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'update:pageSize': [value: number]
  change: [page: number, pageSize: number]
  sizeChange: [pageSize: number, page: number]
}>()

// 当前页码
const currentPage = ref(props.modelValue)
// 页码输入框的值
const pageInputValue = ref('')
// 计算总页数
const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

// 监听 modelValue 变化
watch(
  () => props.modelValue,
  (val) => {
    if (val !== currentPage.value) {
      currentPage.value = val
    }
  },
)

// 监听当前页码变化
watch(
  () => currentPage.value,
  (val) => {
    emit('update:modelValue', val)
    emit('change', val, props.pageSize)
  },
)

// 计算页码列表
const pageList = computed(() => {
  const { pagerCount } = props
  const halfPagerCount = Math.floor(pagerCount / 2)
  const totalPage = totalPages.value
  const currentPageVal = currentPage.value

  let showPrevMore = false
  let showNextMore = false

  if (totalPage > pagerCount) {
    if (currentPageVal > pagerCount - halfPagerCount) {
      showPrevMore = true
    }
    if (currentPageVal < totalPage - halfPagerCount) {
      showNextMore = true
    }
  }

  const array: (number | 'prev-more' | 'next-more')[] = []
  if (showPrevMore && !showNextMore) {
    const startPage = totalPage - (pagerCount - 2)
    for (let i = startPage; i < totalPage; i++) {
      array.push(i)
    }
    array.unshift('prev-more')
    array.unshift(1)
    array.push(totalPage)
  } else if (!showPrevMore && showNextMore) {
    for (let i = 2; i < pagerCount; i++) {
      array.push(i)
    }
    array.unshift(1)
    array.push('next-more')
    array.push(totalPage)
  } else if (showPrevMore && showNextMore) {
    const offset = Math.floor(pagerCount / 2) - 1
    for (let i = currentPageVal - offset; i <= currentPageVal + offset; i++) {
      array.push(i)
    }
    array.unshift('prev-more')
    array.unshift(1)
    array.push('next-more')
    array.push(totalPage)
  } else {
    for (let i = 1; i <= totalPage; i++) {
      array.push(i)
    }
  }

  return array
})

// 计算显示的页码范围
const pageRange = computed<[number, number]>(() => {
  const { pageSize } = props
  const total = props.total
  const currentPageVal = currentPage.value

  const start = (currentPageVal - 1) * pageSize + 1
  const end = Math.min(currentPageVal * pageSize, total)

  return [start, end]
})

// 获取样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      pageButton: '',
      prevButton: '',
      nextButton: '',
      ellipsis: '',
      jumperInput: '',
      sizeSelect: '',
      totalText: '',
    }
  }

  // 使用 tailwind-variants 生成样式类
  const styles = pagination({
    size: props.size,
    variant: props.variant,
    disabled: props.disabled,
    simple: props.simple,
  })

  return styles
})

// 跳转到指定页
const goToPage = (page: number) => {
  if (page < 1) page = 1
  if (page > totalPages.value) page = totalPages.value
  currentPage.value = page
}

// 上一页
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// 下一页
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

// 快速向前跳转
const fastPrevPage = () => {
  const pageCount = Math.floor(props.pagerCount / 2)
  if (currentPage.value - pageCount > 0) {
    goToPage(currentPage.value - pageCount)
  } else {
    goToPage(1)
  }
}

// 快速向后跳转
const fastNextPage = () => {
  const pageCount = Math.floor(props.pagerCount / 2)
  if (currentPage.value + pageCount < totalPages.value) {
    goToPage(currentPage.value + pageCount)
  } else {
    goToPage(totalPages.value)
  }
}

// 处理页码输入
const handlePageInputChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  pageInputValue.value = value.replace(/[^\d]/g, '')
}

// 处理页码输入确认
const handlePageInputConfirm = () => {
  if (pageInputValue.value) {
    goToPage(parseInt(pageInputValue.value))
    pageInputValue.value = ''
  }
}

// 处理每页条数变化
const handleSizeChange = (e: Event) => {
  const value = parseInt((e.target as HTMLSelectElement).value)
  emit('update:pageSize', value)
  emit('sizeChange', value, currentPage.value)
}
</script>

<template>
  <nav
    role="navigation"
    aria-label="分页"
    :class="classes.root"
    v-bind="pt?.root"
  >
    <!-- 总数显示 -->
    <span
      v-if="showTotal && !simple"
      :class="classes.totalText"
      v-bind="pt?.total"
    >
      <slot name="total" :total="total" :range="pageRange">
        {{ pageRange[0] }}-{{ pageRange[1] }} / {{ total }}
      </slot>
    </span>

    <!-- 每页条数选择器 -->
    <div v-if="showSizeChanger && !simple" v-bind="pt?.sizeChanger">
      <slot name="sizeChanger">
        <select
          :class="classes.sizeSelect"
          :disabled="disabled"
          :value="pageSize"
          @change="handleSizeChange"
        >
          <option v-for="size in pageSizeOptions" :key="size" :value="size">
            {{ size }} 条/页
          </option>
        </select>
      </slot>
    </div>

    <!-- 上一页按钮 -->
    <button
      type="button"
      :class="classes.prevButton"
      :disabled="currentPage <= 1 || disabled"
      aria-label="上一页"
      @click="prevPage"
      v-bind="pt?.prev"
    >
      <slot name="prev">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </slot>
    </button>

    <!-- 简洁模式下的当前页/总页 -->
    <span v-if="simple" class="mx-2">{{ currentPage }}/{{ totalPages }}</span>

    <!-- 页码按钮 -->
    <template v-if="!simple">
      <template v-for="(pager, index) in pageList" :key="index">
        <!-- 页码按钮 -->
        <button
          v-if="typeof pager === 'number'"
          type="button"
          :class="classes.pageButton"
          :data-active="currentPage === pager"
          :disabled="disabled"
          @click="goToPage(pager)"
          v-bind="pt?.pageButtons"
        >
          <slot name="pageItem" :page="pager" :active="currentPage === pager">
            {{ pager }}
          </slot>
        </button>

        <!-- 快速向前省略号 -->
        <span v-else-if="pager === 'prev-more'" :class="classes.ellipsis">
          <button
            type="button"
            :class="classes.pageButton"
            :disabled="disabled"
            @click="fastPrevPage"
            aria-label="向前跳转"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </span>

        <!-- 快速向后省略号 -->
        <span v-else-if="pager === 'next-more'" :class="classes.ellipsis">
          <button
            type="button"
            :class="classes.pageButton"
            :disabled="disabled"
            @click="fastNextPage"
            aria-label="向后跳转"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </span>
      </template>
    </template>

    <!-- 下一页按钮 -->
    <button
      type="button"
      :class="classes.nextButton"
      :disabled="currentPage >= totalPages || disabled"
      aria-label="下一页"
      @click="nextPage"
      v-bind="pt?.next"
    >
      <slot name="next">
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </slot>
    </button>

    <!-- 快速跳转 -->
    <div
      v-if="showQuickJumper && !simple"
      class="flex items-center ml-2"
      v-bind="pt?.quickJumper"
    >
      <span class="text-sm mr-1">前往</span>
      <input
        type="text"
        :class="classes.jumperInput"
        :disabled="disabled"
        :value="pageInputValue"
        @input="handlePageInputChange"
        @keyup.enter="handlePageInputConfirm"
      />
      <span class="text-sm ml-1">页</span>
    </div>
  </nav>
</template>
