import { ref, watch, type SetupContext } from 'vue'
import type { ImageProps, ImageEmits } from './type'

export const useImage = (
  props: ImageProps,
  emit: SetupContext<ImageEmits>['emit'],
) => {
  // 图片引用
  const imageRef = ref<HTMLImageElement | null>(null)

  // 加载状态
  const isLoading = ref(true)
  const isError = ref(false)
  const isZoomed = ref(props.isZoomed || false)

  // 处理图片加载完成事件
  const handleLoad = (event: Event) => {
    isLoading.value = false
    emit('load', event)
  }

  // 处理图片加载错误事件
  const handleError = (event: Event) => {
    isLoading.value = false
    isError.value = true
    emit('error', event)
  }

  // 处理图片缩放
  const toggleZoom = () => {
    if (!props.isZoomable) return

    isZoomed.value = !isZoomed.value
    emit('zoom', isZoomed.value)
  }

  // 监听props.isZoomed的变化
  watch(
    () => props.isZoomed,
    (newValue) => {
      if (newValue !== undefined) {
        isZoomed.value = newValue
      }
    },
  )

  // 当图片源变更时，重置加载状态
  watch(
    () => props.src,
    () => {
      isLoading.value = true
      isError.value = false
    },
  )

  return {
    imageRef,
    isLoading,
    isError,
    isZoomed,
    handleLoad,
    handleError,
    toggleZoom,
  }
}
