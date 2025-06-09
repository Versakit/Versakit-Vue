<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  card,
  cardHeader,
  cardTitle,
  cardSubtitle,
  cardBody,
  cardFooter,
  cardCollapse,
} from './index.variants'
import type { CardProps, CardPassThroughAttributes } from './type'

interface Props extends CardProps {
  pt?: CardPassThroughAttributes
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  bordered: true,
  shadow: false,
  collapsible: false,
  defaultCollapsed: false,
  radius: 'md',
  autoHeight: true,
  hoverable: false,
  withFooter: false,
  unstyled: false,
})

// 折叠状态
const isCollapsed = ref(props.defaultCollapsed)

// 切换折叠状态
const toggleCollapse = () => {
  if (props.collapsible) {
    isCollapsed.value = !isCollapsed.value
  }
}

// 卡片样式
const cardClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return card({
    variant: props.variant,
    bordered: props.bordered,
    shadow: props.shadow,
    radius: props.radius,
    autoHeight: props.autoHeight,
    hoverable: props.hoverable,
  })
})

// 头部样式
const headerClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return cardHeader({
    variant: props.variant,
  })
})

// 标题样式
const titleClasses = computed(() => (props.unstyled ? {} : cardTitle()))

// 副标题样式
const subtitleClasses = computed(() => (props.unstyled ? {} : cardSubtitle()))

// 内容样式
const bodyClasses = computed(() => (props.unstyled ? {} : cardBody()))

// 脚注样式
const footerClasses = computed(() => (props.unstyled ? {} : cardFooter()))

// 折叠按钮样式
const collapseClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return cardCollapse({
    collapsed: isCollapsed.value,
  })
})
</script>

<template>
  <div :class="cardClasses" v-bind="{ ...$attrs, ...props.pt?.root }">
    <div
      v-if="title || $slots.header"
      :class="headerClasses"
      v-bind="props.pt?.header"
    >
      <div>
        <h3 v-if="title" :class="titleClasses" v-bind="props.pt?.title">
          <slot name="title" v-if="$slots.title" />
          <template v-else>{{ title }}</template>
        </h3>
        <p v-if="subtitle" :class="subtitleClasses" v-bind="props.pt?.subtitle">
          <slot name="subtitle" v-if="$slots.subtitle" />
          <template v-else>{{ subtitle }}</template>
        </p>
        <slot name="header" />
      </div>
      <div
        v-if="collapsible"
        @click="toggleCollapse"
        :class="collapseClasses"
        aria-label="折叠卡片"
        v-bind="props.pt?.collapseButton"
      >
        <slot name="collapseButton" v-if="$slots.collapseButton" />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>

    <div v-show="!isCollapsed" :class="bodyClasses" v-bind="props.pt?.body">
      <slot />
    </div>

    <div
      v-if="withFooter && $slots.footer && !isCollapsed"
      :class="footerClasses"
      v-bind="props.pt?.footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
