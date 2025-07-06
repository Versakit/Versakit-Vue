import { provide, ref, inject, reactive } from 'vue'
import type { SplitterProps } from './type'

const SPLITTER_INJECTION_KEY = Symbol('splitter')

export type SplitterContext = {
  layout: 'horizontal' | 'vertical'
  gutterSize: number
  minSizes: number[]
  registerPanel: (size: number, minSize: number) => number
  updatePanelSize: (index: number, size: number) => void
}

export const useSplitter = (
  props: SplitterProps,
  emit: {
    (e: 'resize', sizes: number[]): void
    (e: 'resizeStart', event: MouseEvent | TouchEvent): void
    (e: 'resizeEnd', sizes: number[]): void
  },
) => {
  const _ref = ref<HTMLElement | null>(null)
  const panelSizes = ref<number[]>([])
  const panelCount = ref(0)
  const isDragging = ref(false)
  const startPosition = ref(0)
  const currentGutterIndex = ref(-1)
  const prevPanelIndex = ref(-1)
  const nextPanelIndex = ref(-1)
  const prevPanelSize = ref(0)
  const nextPanelSize = ref(0)
  const customMinSizes = ref<number[]>([])

  // 根据props处理minSize数组
  const getMinSizes = () => {
    if (Array.isArray(props.minSize)) {
      return props.minSize
    } else if (typeof props.minSize === 'number') {
      return Array(panelCount.value).fill(props.minSize)
    } else {
      return customMinSizes.value.length > 0
        ? customMinSizes.value
        : Array(panelCount.value).fill(10) // 默认最小尺寸为10
    }
  }

  // 提供给子组件的上下文
  const splitterContext = reactive<SplitterContext>({
    layout: props.layout || 'horizontal',
    gutterSize: props.gutterSize || 4,
    minSizes: [],
    registerPanel: (size: number, minSize: number) => {
      const index = panelCount.value
      panelCount.value++
      panelSizes.value[index] = size || 100 / panelCount.value
      customMinSizes.value[index] = minSize || 10
      splitterContext.minSizes = getMinSizes()
      return index
    },
    updatePanelSize: (index: number, size: number) => {
      panelSizes.value[index] = size
    },
  })

  provide(SPLITTER_INJECTION_KEY, splitterContext)

  // 开始拖动
  const onGutterMouseDown = (
    e: MouseEvent | TouchEvent,
    gutterIndex: number,
  ) => {
    e.preventDefault()
    isDragging.value = true
    startPosition.value = getEventPosition(e)
    currentGutterIndex.value = gutterIndex
    prevPanelIndex.value = gutterIndex
    nextPanelIndex.value = gutterIndex + 1
    prevPanelSize.value = panelSizes.value[prevPanelIndex.value]
    nextPanelSize.value = panelSizes.value[nextPanelIndex.value]

    emit('resizeStart', e)

    document.addEventListener('mousemove', onDocumentMouseMove)
    document.addEventListener('mouseup', onDocumentMouseUp)
    document.addEventListener('touchmove', onDocumentMouseMove)
    document.addEventListener('touchend', onDocumentMouseUp)
  }

  // 拖动中
  const onDocumentMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.value) return

    const currentPosition = getEventPosition(e)
    const delta = currentPosition - startPosition.value

    // 计算新的面板尺寸
    const newSizes = calculateNewSizes(delta)

    // 更新面板尺寸
    panelSizes.value[prevPanelIndex.value] = newSizes.prevSize
    panelSizes.value[nextPanelIndex.value] = newSizes.nextSize

    emit('resize', [...panelSizes.value])
  }

  // 结束拖动
  const onDocumentMouseUp = () => {
    if (!isDragging.value) return

    isDragging.value = false
    document.removeEventListener('mousemove', onDocumentMouseMove)
    document.removeEventListener('mouseup', onDocumentMouseUp)
    document.removeEventListener('touchmove', onDocumentMouseMove)
    document.removeEventListener('touchend', onDocumentMouseUp)

    emit('resizeEnd', [...panelSizes.value])
  }

  // 获取事件位置
  const getEventPosition = (e: MouseEvent | TouchEvent): number => {
    if (props.layout === 'vertical') {
      return 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY
    } else {
      return 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
    }
  }

  // 计算新的面板尺寸
  const calculateNewSizes = (
    delta: number,
  ): { prevSize: number; nextSize: number } => {
    const containerSize =
      props.layout === 'vertical'
        ? _ref.value?.clientHeight || 0
        : _ref.value?.clientWidth || 0

    const totalGutterSize = (panelCount.value - 1) * (props.gutterSize || 4)
    const availableSize = containerSize - totalGutterSize

    let deltaPct = (delta / availableSize) * 100

    // 考虑最小尺寸限制
    const minSizes = getMinSizes()
    const prevMinSizePct =
      (minSizes[prevPanelIndex.value] / availableSize) * 100
    const nextMinSizePct =
      (minSizes[nextPanelIndex.value] / availableSize) * 100

    const prevMaxDelta = prevPanelSize.value - prevMinSizePct
    const nextMaxDelta = nextPanelSize.value - nextMinSizePct

    if (deltaPct > 0) {
      deltaPct = Math.min(deltaPct, nextMaxDelta)
    } else {
      deltaPct = Math.max(deltaPct, -prevMaxDelta)
    }

    return {
      prevSize: prevPanelSize.value + deltaPct,
      nextSize: nextPanelSize.value - deltaPct,
    }
  }

  return {
    _ref,
    panelSizes,
    panelCount,
    isDragging,
    onGutterMouseDown,
  }
}

export const useSplitterItem = () => {
  // 从父组件注入上下文
  const splitterContext = inject<SplitterContext>(SPLITTER_INJECTION_KEY, {
    layout: 'horizontal',
    gutterSize: 4,
    minSizes: [],
    registerPanel: () => -1,
    updatePanelSize: () => {},
  })

  const _ref = ref<HTMLElement | null>(null)
  const panelIndex = ref(-1)

  return {
    _ref,
    splitterContext,
    panelIndex,
  }
}
