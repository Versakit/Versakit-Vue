<script setup lang="ts">
import {
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  resolveComponent,
  defineProps,
  defineEmits,
} from 'vue'
import { toast } from './index.variants'
import type { ToastProps, ToastPassThroughAttributes } from './type'

const props = withDefaults(
  defineProps<ToastProps & { pt?: ToastPassThroughAttributes }>(),
  {
    variant: 'default',
    size: 'md',
    position: 'top-right',
    duration: 3000,
    closable: true,
    progressBar: true,
    icon: true,
    pauseOnHover: true,
    offset: 16,
    zIndex: 1000,
    maxWidth: '350px',
    animationDuration: 300,
    unstyled: false,
  },
)

const emit = defineEmits(['close', 'click'])

// 内部状态
const isHovered = ref(false)
const isPaused = ref(false)
const progressWidth = ref(100)
const progressDuration = ref(props.duration)
const timeoutId = ref<number | null>(null)
const remainingTime = ref(props.duration)
const startTime = ref(Date.now())

// 计算属性
const variantIcon = computed(() => props.icon && !props.customIcon)

// 计算动态组件
const iconComponent = computed(() => {
  if (props.customIcon) {
    try {
      return resolveComponent(props.customIcon)
    } catch (error) {
      console.error('无法解析自定义图标组件:', error)
      return null
    }
  }
  return null
})

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      container: '',
      icon: '',
      content: '',
      title: '',
      message: '',
      progress: '',
      close: '',
    }
  }

  const toastStyles = toast({
    variant: props.variant,
    size: props.size,
    position: props.position,
    disabled: props.disabled,
  })

  return toastStyles
})

// 启动进度条
const startProgress = () => {
  if (props.duration <= 0 || props.disabled) return

  // 重置进度
  progressWidth.value = 100
  startTime.value = Date.now()
  remainingTime.value = props.duration

  // 开始动画
  requestAnimationFrame(() => {
    progressWidth.value = 0
    progressDuration.value = props.duration
  })

  // 设置关闭定时器
  timeoutId.value = window.setTimeout(() => {
    handleClose()
  }, props.duration)
}

// 暂停进度条
const pauseProgress = () => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
    remainingTime.value = remainingTime.value - (Date.now() - startTime.value)
    isPaused.value = true
  }
}

// 恢复进度条
const resumeProgress = () => {
  if (isPaused.value && remainingTime.value > 0) {
    isPaused.value = false
    startTime.value = Date.now()

    // 更新进度条宽度和动画时间
    progressWidth.value = (remainingTime.value / props.duration) * 100
    requestAnimationFrame(() => {
      progressWidth.value = 0
      progressDuration.value = remainingTime.value
    })

    // 设置新的定时器
    timeoutId.value = window.setTimeout(() => {
      handleClose()
    }, remainingTime.value)
  }
}

// 处理鼠标悬停
const handleMouseEnter = () => {
  isHovered.value = true
  if (props.pauseOnHover && props.duration > 0) {
    pauseProgress()
  }
}

// 处理鼠标离开
const handleMouseLeave = () => {
  isHovered.value = false
  if (props.pauseOnHover && props.duration > 0) {
    resumeProgress()
  }
}

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (props.onClick) {
    props.onClick(event)
  }
  emit('click', event)
}

// 处理关闭事件
const handleClose = () => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }

  if (props.onClose) {
    props.onClose()
  }
  emit('close')
}

// 监听 duration 变化
watch(
  () => props.duration,
  () => {
    if (timeoutId.value !== null) {
      clearTimeout(timeoutId.value)
      timeoutId.value = null
      startProgress()
    }
  },
)

// 监听 disabled 变化
watch(
  () => props.disabled,
  (newDisabled) => {
    if (newDisabled && timeoutId.value !== null) {
      clearTimeout(timeoutId.value)
      timeoutId.value = null
    } else if (!newDisabled && timeoutId.value === null) {
      startProgress()
    }
  },
)

// 组件挂载时
onMounted(() => {
  if (!props.disabled && props.duration > 0) {
    startProgress()
  }
})

// 组件卸载前
onBeforeUnmount(() => {
  if (timeoutId.value !== null) {
    clearTimeout(timeoutId.value)
    timeoutId.value = null
  }
})
</script>

<template>
  <div
    :class="classes.root"
    role="alert"
    aria-live="assertive"
    :aria-label="ariaLabel"
    v-bind="props.pt?.root"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- 图标部分 -->
    <div
      v-if="icon || customIcon"
      :class="classes.icon"
      v-bind="props.pt?.icon"
    >
      <slot name="icon">
        <component :is="iconComponent" v-if="customIcon" />
        <template v-else-if="variantIcon">
          <!-- 内置图标 -->
          <svg
            v-if="variant === 'success'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else-if="variant === 'error'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else-if="variant === 'warning'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else-if="variant === 'info'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd"
            />
          </svg>
        </template>
      </slot>
    </div>

    <!-- 内容部分 -->
    <div :class="classes.content" v-bind="props.pt?.content">
      <!-- 标题 -->
      <div v-if="title" :class="classes.title" v-bind="props.pt?.title">
        <slot name="title">{{ title }}</slot>
      </div>
      <!-- 消息内容 -->
      <div v-if="message" :class="classes.message" v-bind="props.pt?.message">
        <slot name="message">{{ message }}</slot>
      </div>
    </div>

    <!-- 关闭按钮 -->
    <button
      v-if="closable"
      :class="classes.close"
      aria-label="关闭"
      @click="handleClose"
      v-bind="props.pt?.close"
    >
      <slot name="closeButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </slot>
    </button>

    <!-- 进度条 -->
    <div
      v-if="progressBar && duration > 0"
      :class="classes.progress"
      :style="{
        width: `${progressWidth}%`,
        transitionDuration: `${progressDuration}ms`,
      }"
      v-bind="props.pt?.progress"
    >
      <slot name="progress"></slot>
    </div>
  </div>
</template>
