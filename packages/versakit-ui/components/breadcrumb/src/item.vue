<script setup lang="ts">
import { type Component, computed, inject } from 'vue'
import type {
  BreadcrumbItemProps,
  BreadcrumbItemPtProps,
} from '../type/index.ts'
import { VKIcon } from '@versakit/icons'

defineOptions({ name: 'VKBreadcrumbItem' })

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  replace: false,
})

const breadcrumb = inject('breadcrumb') as {
  separator: string
  separatorIcon: string | Component
}

const handleClick = () => {
  if (!props.to || !props.to.startsWith('/')) return

  if (props.replace) {
    window.location.replace(props.to)
  } else {
    window.location.href = props.to
  }
}

// 组件无头化
const getPtClass = (key: keyof BreadcrumbItemPtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  return ptValue
}

const vkBreadcrumbItemClass = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClass('root'),
      link: getPtClass('link'),
      text: getPtClass('text'),
      separator: getPtClass('separator'),
    }
  }
  return {
    root: 'vk-breadcrumb-item',
    link: 'vk-breadcrumb-item-link',
    text: 'vk-breadcrumb-item-text',
    separator: 'vk-breadcrumb-item-separator',
  }
})
</script>

<template>
  <span :class="vkBreadcrumbItemClass.root">
    <span
      v-if="to"
      :class="vkBreadcrumbItemClass.link"
      role="link"
      tabindex="0"
      aria-current="false"
      @click="handleClick"
      @keydown.enter="handleClick"
    >
      <slot></slot>
    </span>
    <span v-else :class="vkBreadcrumbItemClass.text" aria-current="true">
      <slot></slot>
    </span>
    <span :class="vkBreadcrumbItemClass.separator" aria-hidden="true">
      <VKIcon
        v-if="breadcrumb.separatorIcon"
        :name="breadcrumb.separatorIcon"
      />
      <span v-else>{{ breadcrumb.separator }}</span>
    </span>
  </span>
</template>

<style scoped>
.vk-breadcrumb-item {
  display: flex;
  align-items: center;
}

.vk-breadcrumb-item:last-child .vk-breadcrumb-item-separator {
  display: none;
}

.vk-breadcrumb-item-link {
  color: #1890ff;
  cursor: pointer;
  transition: color 0.2s;
  outline: none;
}

.vk-breadcrumb-item-link:hover,
.vk-breadcrumb-item-link:focus {
  color: #40a9ff;
}

.vk-breadcrumb-item-text {
  color: #666;
}

.vk-breadcrumb-item-separator {
  margin: 0 8px;
  color: #999;
}
</style>
