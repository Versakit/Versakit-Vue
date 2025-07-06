<template>
  <nav :class="rootClass" aria-label="分页导航">
    <ul :class="listClass">
      <!-- 首页按钮 -->
      <li v-if="showEndButtons" :class="itemClass">
        <button
          :class="getButtonClass(1, 'first')"
          @click="goToPage(1)"
          :disabled="isDisabled || currentPage === 1"
          aria-label="首页"
        >
          <slot name="first-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </slot>
        </button>
      </li>

      <!-- 上一页按钮 -->
      <li v-if="showPrevNextButtons" :class="itemClass">
        <button
          :class="getButtonClass(currentPage - 1, 'prev')"
          @click="goToPage(currentPage - 1)"
          :disabled="isDisabled || currentPage === 1"
          aria-label="上一页"
        >
          <slot name="prev-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </slot>
        </button>
      </li>

      <!-- 页码按钮 -->
      <template v-for="(page, index) in displayedPages" :key="index">
        <li v-if="page !== '...'" :class="itemClass">
          <button
            :class="getButtonClass(Number(page))"
            @click="goToPage(Number(page))"
            :disabled="isDisabled"
            :aria-current="currentPage === page ? 'page' : undefined"
          >
            {{ page }}
          </button>
        </li>
        <li v-else :class="itemClass">
          <span :class="ellipsisClass">...</span>
        </li>
      </template>

      <!-- 下一页按钮 -->
      <li v-if="showPrevNextButtons" :class="itemClass">
        <button
          :class="getButtonClass(currentPage + 1, 'next')"
          @click="goToPage(currentPage + 1)"
          :disabled="isDisabled || currentPage === totalPages"
          aria-label="下一页"
        >
          <slot name="next-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </slot>
        </button>
      </li>

      <!-- 尾页按钮 -->
      <li v-if="showEndButtons" :class="itemClass">
        <button
          :class="getButtonClass(totalPages, 'last')"
          @click="goToPage(totalPages)"
          :disabled="isDisabled || currentPage === totalPages"
          aria-label="尾页"
        >
          <slot name="last-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </slot>
        </button>
      </li>

      <!-- 跳转输入框 -->
      <li v-if="showJumper" :class="jumperClass">
        <span>前往</span>
        <input
          :class="jumperInputClass"
          type="number"
          v-model="jumpPage"
          min="1"
          :max="totalPages"
          :disabled="isDisabled"
          @keyup.enter="handleJump"
        />
        <span>页</span>
        <button
          :class="jumperButtonClass"
          @click="handleJump"
          :disabled="isDisabled"
        >
          跳转
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  paginatorStyle,
  paginatorListStyle,
  paginatorItemStyle,
  paginatorButtonStyle,
  paginatorEllipsisStyle,
  paginatorJumperStyle,
  paginatorJumperInputStyle,
  paginatorJumperButtonStyle,
} from './index.variants'
import type { PaginatorProps } from './type'
import { PaginatorEmits } from './type'

defineOptions({
  name: 'Paginator',
})

const props = withDefaults(defineProps<PaginatorProps>(), {
  modelValue: 1,
  visiblePageCount: 5,
  showEndButtons: true,
  showPrevNextButtons: true,
  showJumper: false,
  size: 'md',
  variant: 'default',
  shape: 'rounded',
  disabled: false,
  unstyled: false,
})

const emit = defineEmits(PaginatorEmits)

// 当前页码
const currentPage = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
})

// 跳转页码
const jumpPage = ref<number | string>('')

// 是否禁用
const isDisabled = computed(() => props.disabled)

// 计算显示的页码
const displayedPages = computed(() => {
  const totalPages = props.totalPages
  const currentPage = props.modelValue
  const visibleCount = props.visiblePageCount

  if (totalPages <= visibleCount) {
    // 如果总页数小于等于可见页数，则全部显示
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // 计算左右两侧显示的页码数
  const sideCount = Math.floor(visibleCount / 2)

  let startPage = currentPage - sideCount
  let endPage = currentPage + sideCount

  if (startPage < 1) {
    // 如果起始页小于1，则从1开始，并增加结束页
    endPage = Math.min(totalPages, endPage + (1 - startPage))
    startPage = 1
  }

  if (endPage > totalPages) {
    // 如果结束页大于总页数，则以总页数为结束，并减少起始页
    startPage = Math.max(1, startPage - (endPage - totalPages))
    endPage = totalPages
  }

  const pages = []

  // 添加第一页
  if (startPage > 1) {
    pages.push(1)
    // 如果起始页大于2，则添加省略号
    if (startPage > 2) {
      pages.push('...')
    }
  }

  // 添加中间页码
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i)
  }

  // 添加最后一页
  if (endPage < totalPages) {
    // 如果结束页小于总页数-1，则添加省略号
    if (endPage < totalPages - 1) {
      pages.push('...')
    }
    pages.push(totalPages)
  }

  return pages
})

// 跳转到指定页
const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== currentPage.value) {
    currentPage.value = page
  }
}

// 处理跳转
const handleJump = () => {
  const page = Number(jumpPage.value)
  if (!isNaN(page) && page >= 1 && page <= props.totalPages) {
    goToPage(page)
    jumpPage.value = ''
  } else {
    jumpPage.value = ''
  }
}

// 根元素样式
const rootClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.root || ''
  }

  return paginatorStyle({
    disabled: props.disabled,
    class: props.pt?.root,
  })
})

// 列表样式
const listClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.list || ''
  }

  return paginatorListStyle({
    class: props.pt?.list,
  })
})

// 列表项样式
const itemClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.item || ''
  }

  return paginatorItemStyle({
    class: props.pt?.item,
  })
})

// 获取按钮样式
const getButtonClass = (
  page: number,
  type?: 'first' | 'prev' | 'next' | 'last',
) => {
  if (props.unstyled) {
    if (type === 'first') return props.pt?.firstButton || ''
    if (type === 'prev') return props.pt?.prevButton || ''
    if (type === 'next') return props.pt?.nextButton || ''
    if (type === 'last') return props.pt?.lastButton || ''
    return page === currentPage.value
      ? props.pt?.activeButton || ''
      : props.pt?.button || ''
  }

  return paginatorButtonStyle({
    variant: props.variant,
    size: props.size,
    shape: props.shape,
    active: page === currentPage.value,
    disabled: props.disabled,
    class:
      page === currentPage.value
        ? props.pt?.activeButton
        : type === 'first'
          ? props.pt?.firstButton
          : type === 'prev'
            ? props.pt?.prevButton
            : type === 'next'
              ? props.pt?.nextButton
              : type === 'last'
                ? props.pt?.lastButton
                : props.pt?.button,
  })
}

// 省略号样式
const ellipsisClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.ellipsis || ''
  }

  return paginatorEllipsisStyle({
    size: props.size,
    class: props.pt?.ellipsis,
  })
})

// 跳转器样式
const jumperClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.jumper || ''
  }

  return paginatorJumperStyle({
    class: props.pt?.jumper,
  })
})

// 跳转输入框样式
const jumperInputClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.jumperInput || ''
  }

  return paginatorJumperInputStyle({
    size: props.size,
    class: props.pt?.jumperInput,
  })
})

// 跳转按钮样式
const jumperButtonClass = computed(() => {
  if (props.unstyled) {
    return props.pt?.jumperButton || ''
  }

  return paginatorJumperButtonStyle({
    size: props.size,
    class: props.pt?.jumperButton,
  })
})
</script>
