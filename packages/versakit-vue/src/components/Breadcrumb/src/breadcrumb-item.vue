<template>
  <li :class="classes" ref="_ref">
    <template v-if="$slots.separator">
      <slot name="separator"></slot>
    </template>
    <span v-else-if="breadcrumbContext.separatorIcon" :class="separatorClasses">
      <component :is="breadcrumbContext.separatorIcon"></component>
    </span>
    <span v-else-if="!isFirstItem" :class="separatorClasses">
      {{ breadcrumbContext.separator }}
    </span>

    <a
      v-if="href && !disabled && !active"
      :href="href"
      :class="linkClasses"
      @click="handleClick"
    >
      <slot></slot>
    </a>
    <span v-else :class="contentClasses">
      <slot></slot>
    </span>
  </li>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import {
  breadcrumbItemStyle,
  breadcrumbSeparatorStyle,
  breadcrumbItemLinkStyle,
} from './index.variants'
import type { BreadcrumbItemProps } from './type'
import { BreadcrumbEmits } from './type'
import { useBreadcrumbItem } from './use-breadcrumb'

defineOptions({
  name: 'VBreadcrumbItem',
})

const emit = defineEmits(BreadcrumbEmits)
const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  href: '',
  disabled: false,
  active: false,
  unstyled: false,
})

const { _ref, breadcrumbContext } = useBreadcrumbItem()

// 检查是否为第一个面包屑项，用于决定是否显示分隔符
const isFirstItem = ref(false)

// 在组件挂载后检查是否为第一个子元素
const checkIfFirstItem = () => {
  if (_ref.value) {
    const parent = _ref.value.parentElement
    if (parent) {
      isFirstItem.value = parent.firstElementChild === _ref.value
    }
  }
}

// 在组件挂载后检查位置
onMounted(() => {
  checkIfFirstItem()
})

const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return
  }
  emit('click', e)
}

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : breadcrumbItemStyle({
        disabled: props.disabled,
        active: props.active,
        class: props.pt?.root,
      })
})

const separatorClasses = computed(() => {
  return props.unstyled ? props.pt?.separator || '' : breadcrumbSeparatorStyle()
})

const linkClasses = computed(() => {
  return props.unstyled
    ? props.pt?.link || ''
    : breadcrumbItemLinkStyle({
        class: props.pt?.link,
      })
})

const contentClasses = computed(() => {
  return props.unstyled ? props.pt?.content || '' : ''
})

defineExpose({
  _ref,
})
</script>
