<script setup lang="ts">
import { ref, provide } from 'vue'
import { toast } from './index.variants'
import { VKToast } from '..'
import type {
  ToastProviderProps,
  ToastProps,
  ToastServiceMethod,
  ToastProviderPassThroughAttributes,
} from './type'

const props = withDefaults(
  defineProps<
    ToastProviderProps & { pt?: ToastProviderPassThroughAttributes }
  >(),
  {
    defaultPosition: 'top-right',
    defaultDuration: 3000,
    maxCount: 5,
    defaultSize: 'md',
    defaultVariant: 'default',
    defaultOffset: 16,
    defaultZIndex: 1000,
    defaultMaxWidth: '350px',
    defaultAnimationDuration: 300,
    unstyled: false,
  },
)

// 内部状态
const toasts = ref<{ id: string; props: ToastProps }[]>([])

// 计算样式
const { root, container } = toast({
  position: props.defaultPosition,
})

// 生成唯一ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9)
}

// 创建Toast实例
const createToast = (toastProps: ToastProps | string): string => {
  // 如果传入的是字符串，则将其作为消息
  const toastConfig =
    typeof toastProps === 'string' ? { message: toastProps } : toastProps

  // 生成唯一ID
  const id = toastConfig.id || generateId()

  // 应用默认配置
  const newToast = {
    id,
    props: {
      position: toastConfig.position || props.defaultPosition,
      duration:
        toastConfig.duration !== undefined
          ? toastConfig.duration
          : props.defaultDuration,
      size: toastConfig.size || props.defaultSize,
      variant: toastConfig.variant || props.defaultVariant,
      offset:
        toastConfig.offset !== undefined
          ? toastConfig.offset
          : props.defaultOffset,
      zIndex:
        toastConfig.zIndex !== undefined
          ? toastConfig.zIndex
          : props.defaultZIndex,
      maxWidth: toastConfig.maxWidth || props.defaultMaxWidth,
      animationDuration:
        toastConfig.animationDuration !== undefined
          ? toastConfig.animationDuration
          : props.defaultAnimationDuration,
      ...toastConfig,
    },
  }

  // 将新Toast添加到数组中
  toasts.value.push(newToast)

  // 如果超过最大数量，则移除最早的Toast
  if (props.maxCount && toasts.value.length > props.maxCount) {
    toasts.value.shift()
  }

  return id
}

// 创建不同类型的Toast快捷方法
const createSuccessToast = (props: ToastProps | string): string => {
  const toastProps = typeof props === 'string' ? { message: props } : props
  return createToast({ ...toastProps, variant: 'success' })
}

const createErrorToast = (props: ToastProps | string): string => {
  const toastProps = typeof props === 'string' ? { message: props } : props
  return createToast({ ...toastProps, variant: 'error' })
}

const createWarningToast = (props: ToastProps | string): string => {
  const toastProps = typeof props === 'string' ? { message: props } : props
  return createToast({ ...toastProps, variant: 'warning' })
}

const createInfoToast = (props: ToastProps | string): string => {
  const toastProps = typeof props === 'string' ? { message: props } : props
  return createToast({ ...toastProps, variant: 'info' })
}

// 清除指定Toast
const clearToast = (id?: string): void => {
  if (id) {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }
}

// 清除所有Toast
const clearAllToasts = (): void => {
  toasts.value = []
}

// 更新Toast
const updateToast = (id: string, newProps: Partial<ToastProps>): void => {
  const toastIndex = toasts.value.findIndex((toast) => toast.id === id)
  if (toastIndex !== -1) {
    toasts.value[toastIndex] = {
      ...toasts.value[toastIndex],
      props: {
        ...toasts.value[toastIndex].props,
        ...newProps,
      },
    }
  }
}

// 检查Toast是否存在
const isToastActive = (id: string): boolean => {
  return toasts.value.some((toast) => toast.id === id)
}

// 将Toast服务注册到provide中
const toastService: ToastServiceMethod = Object.assign(createToast, {
  success: createSuccessToast,
  error: createErrorToast,
  warning: createWarningToast,
  info: createInfoToast,
  clear: clearToast,
  clearAll: clearAllToasts,
  update: updateToast,
  isActive: isToastActive,
})

provide('toast', toastService)

// 处理关闭Toast
const handleCloseToast = (id: string) => {
  clearToast(id)
}

// 按位置分组Toasts
const getToastsByPosition = (position: string) => {
  return toasts.value.filter((toast) => toast.props.position === position)
}

// 导出的方法和服务
defineExpose({
  createToast,
  clearToast,
  clearAllToasts,
  updateToast,
  isToastActive,
})
</script>

<template>
  <div :class="props.unstyled ? '' : root" v-bind="props.pt?.root">
    <slot></slot>

    <!-- 为每个位置创建容器 -->
    <template
      v-for="position in [
        'top',
        'top-right',
        'top-left',
        'bottom',
        'bottom-right',
        'bottom-left',
      ]"
      :key="position"
    >
      <div
        v-if="getToastsByPosition(position).length > 0"
        :class="props.unstyled ? '' : container"
        :data-position="position"
        v-bind="props.pt?.container"
      >
        <VKToast
          v-for="toast in getToastsByPosition(position)"
          :key="toast.id"
          v-bind="toast.props"
          @close="handleCloseToast(toast.id)"
        />
      </div>
    </template>
  </div>
</template>
