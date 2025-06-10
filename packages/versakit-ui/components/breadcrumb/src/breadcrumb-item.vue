<script setup lang="ts">
import { computed, inject } from 'vue'
import {
  breadcrumbItem,
  breadcrumbLink,
  breadcrumbSeparator,
} from './index.variants'
import type {
  BreadcrumbItemProps,
  BreadcrumbItemPassThroughAttributes,
} from './type'

const props = withDefaults(
  defineProps<
    BreadcrumbItemProps & { pt?: BreadcrumbItemPassThroughAttributes }
  >(),
  {
    href: undefined,
    active: false,
    disabled: false,
    unstyled: false,
  },
)

const separator = inject<string>('vk-breadcrumb-separator', '/')
const emit = defineEmits(['click'])

const itemClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return breadcrumbItem({
    active: props.active,
    disabled: props.disabled,
  })
})

const linkClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return breadcrumbLink({
    active: props.active,
    disabled: props.disabled,
  })
})

const separatorClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }
  return breadcrumbSeparator()
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.active) return
  emit('click', event)
}
</script>

<template>
  <li :class="itemClasses" v-bind="{ ...$attrs, ...props.pt?.root }">
    <template v-if="$slots.icon">
      <span class="mr-1">
        <slot name="icon" />
      </span>
    </template>
    <a
      v-if="href && !active && !disabled"
      :href="href"
      :class="linkClasses"
      @click="handleClick"
      v-bind="props.pt?.link"
    >
      <slot />
    </a>
    <span v-else :class="linkClasses" v-bind="props.pt?.content">
      <slot />
    </span>
    <span v-if="!active" :class="separatorClasses" v-bind="props.pt?.separator">
      <slot name="separator" v-if="$slots.separator" />
      <span v-else>{{ separator }}</span>
    </span>
  </li>
</template>
