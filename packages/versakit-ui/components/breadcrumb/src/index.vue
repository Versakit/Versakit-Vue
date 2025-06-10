<script setup lang="ts">
import { computed, provide } from 'vue'
import { breadcrumb, breadcrumbList } from './index.variants'
import type { BreadcrumbProps, BreadcrumbPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<BreadcrumbProps & { pt?: BreadcrumbPassThroughAttributes }>(),
  {
    separator: '/',
    unstyled: false,
  },
)

provide('vk-breadcrumb-separator', props.separator)

const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return breadcrumb()
})

const listClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return breadcrumbList()
})
</script>

<template>
  <nav
    :class="classes"
    aria-label="Breadcrumb"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <ol :class="listClasses" v-bind="props.pt?.list">
      <slot />
    </ol>
  </nav>
</template>
