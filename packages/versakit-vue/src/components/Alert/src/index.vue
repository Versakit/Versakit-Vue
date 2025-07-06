<template>
  <div v-if="visible" :class="classes">
    <!-- 图标 -->
    <div v-if="icon" :class="iconClasses">
      <slot name="icon">
        <span v-html="defaultIcons[variant]"></span>
      </slot>
    </div>

    <!-- 内容区域 -->
    <div class="flex-1">
      <div v-if="$slots.title || title" :class="titleClasses">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="descriptionClasses">
        <slot>{{ description }}</slot>
      </div>
    </div>

    <!-- 关闭按钮 -->
    <button
      v-if="closable"
      :class="closeButtonClasses"
      @click="handleClose"
      aria-label="关闭"
      type="button"
    >
      <slot name="close-icon">
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
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  alertStyle,
  alertIconStyle,
  alertTitleStyle,
  alertDescriptionStyle,
  alertCloseButtonStyle,
} from './index.variants'
import type { AlertProps } from './type'

const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'info',
  size: 'md',
  icon: true,
  closable: false,
  rounded: 'md',
  border: true,
  shadow: false,
  unstyled: false,
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const visible = ref(true)

const handleClose = () => {
  visible.value = false
  emit('close')
}

const classes = computed(() =>
  props.unstyled
    ? props.pt?.root || ''
    : alertStyle({
        variant: props.variant,
        size: props.size,
        rounded: props.rounded,
        border: props.border,
        shadow: props.shadow,
        class: [props.class, props.pt?.root],
      }),
)

const iconClasses = computed(() =>
  props.unstyled
    ? props.pt?.icon || ''
    : alertIconStyle({
        variant: props.variant,
        size: props.size,
        class: props.pt?.icon,
      }),
)

const titleClasses = computed(() =>
  props.unstyled
    ? props.pt?.title || ''
    : alertTitleStyle({
        size: props.size,
        class: props.pt?.title,
      }),
)

const descriptionClasses = computed(() =>
  props.unstyled
    ? props.pt?.description || ''
    : alertDescriptionStyle({
        size: props.size,
        class: props.pt?.description,
      }),
)

const closeButtonClasses = computed(() =>
  props.unstyled
    ? props.pt?.closeButton || ''
    : alertCloseButtonStyle({
        size: props.size,
        class: props.pt?.closeButton,
      }),
)

// 默认图标
const defaultIcons = {
  info: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
  success: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  </svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
  </svg>`,
}
</script>
