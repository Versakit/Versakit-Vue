<template>
  <nav :class="classes" ref="_ref">
    <ol :class="listClasses">
      <slot></slot>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { breadcrumbStyle, breadcrumbListStyle } from './index.variants'
import type { BreadcrumbProps } from './type'
import { useBreadcrumb } from './use-breadcrumb'

defineOptions({
  name: 'VBreadcrumb',
})

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  separatorIcon: '',
  unstyled: false,
})

const { _ref } = useBreadcrumb(props)

const classes = computed(() => {
  return props.unstyled
    ? props.pt?.root || ''
    : breadcrumbStyle({
        class: props.pt?.root,
      })
})

const listClasses = computed(() => {
  return props.unstyled
    ? props.pt?.list || ''
    : breadcrumbListStyle({
        class: props.pt?.list,
      })
})

defineExpose({
  _ref,
})
</script>
