import { onBeforeUnmount, onMounted, ref, type Ref, watch, inject } from 'vue'
import type { SplitterLayout, SplitterProps } from './type'

interface PaneConfig {
  size: number
  minSize: number
  maxSize: number
  resizable: boolean
  collapsible: boolean
  collapsedSize: number
}

interface SplitterContext {
  layout: SplitterLayout
  registerPane: (config: PaneConfig) => number
  getPaneSize: (index: number) => number | undefined
  togglePaneCollapse: (index: number) => void
  collapsedPanes: Ref<Set<number>>
}

// 定义一个兼容的emit接口
interface EmitWrapper {
  resize: (sizes: number[]) => void
  resizeStart: (e: MouseEvent | TouchEvent) => void
  resizeEnd: (sizes: number[]) => void
  collapse: (index: number) => void
  expand: (index: number) => void
}

/**
 * Splitter组件的逻辑
 */
export function useSplitter(props: SplitterProps, emit: any) {
  // 创建一个兼容的emit包装器
  const emitWrapper: EmitWrapper = {
    resize: (sizes) => emit('resize', sizes),
    resizeStart: (e) => emit('resizeStart', e),
    resizeEnd: (sizes) => emit('resizeEnd', sizes),
    collapse: (index) => emit('collapse', index),
    expand: (index) => emit('expand', index),
  }

  const _ref = ref<HTMLElement | null>(null)
  const paneRefs = ref<HTMLElement[]>([])
  const paneSizes = ref<number[]>([])
  const paneConfigs = ref<PaneConfig[]>([])
  const paneCount = ref(0)
  const isDragging = ref(false)
  const dragIndex = ref(-1)
  const startPos = ref(0)
  const startSizes = ref<number[]>([])
  const collapsedPanes = ref<Set<number>>(new Set())

  // 监听窗口变化
  onMounted(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('mouseup', onGutterMouseUp)
    window.addEventListener('touchend', onGutterMouseUp)
    window.addEventListener('touchcancel', onGutterMouseUp)
    window.addEventListener('mousemove', onGutterMouseMove)
    window.addEventListener('touchmove', onGutterMouseMove)

    // 如果有initialCollapsed，设置初始折叠状态
    if (props.initialCollapsed && props.initialCollapsed.length) {
      props.initialCollapsed.forEach((index) => {
        if (index >= 0 && index < paneCount.value) {
          collapsedPanes.value.add(index)
        }
      })
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mouseup', onGutterMouseUp)
    window.removeEventListener('touchend', onGutterMouseUp)
    window.removeEventListener('touchcancel', onGutterMouseUp)
    window.removeEventListener('mousemove', onGutterMouseMove)
    window.removeEventListener('touchmove', onGutterMouseMove)

    // 保存状态
    if (props.stateful) {
      savePaneState()
    }
  })

  // 重置尺寸
  const resetSizes = () => {
    let unassignedPercentage = 100
    let assignedPanels = 0

    // 首先设置有明确尺寸的面板
    paneConfigs.value.forEach((config, idx) => {
      if (config.size > 0) {
        paneSizes.value[idx] = config.size
        unassignedPercentage -= config.size
        assignedPanels++
      }
    })

    // 然后为剩余面板均分剩余空间
    if (unassignedPercentage > 0 && paneCount.value - assignedPanels > 0) {
      const defaultSize =
        unassignedPercentage / (paneCount.value - assignedPanels)
      paneConfigs.value.forEach((_, idx) => {
        if (!paneSizes.value[idx]) {
          paneSizes.value[idx] = defaultSize
        }
      })
    }

    emitWrapper.resize([...paneSizes.value])
  }

  // 添加面板
  const registerPane = (config: PaneConfig) => {
    const index = paneCount.value
    paneCount.value++
    paneConfigs.value.push(config)

    if (paneSizes.value.length < paneCount.value) {
      paneSizes.value.push(0) // 添加一个占位尺寸，稍后会在resetSizes中计算
    }

    // 当所有面板都注册完成后重新计算尺寸
    if (paneCount.value === paneConfigs.value.length) {
      resetSizes()
    }

    return index
  }

  // 获取面板尺寸
  const getPaneSize = (index: number) => {
    if (index >= 0 && index < paneSizes.value.length) {
      // 如果面板已折叠，返回0
      if (collapsedPanes.value.has(index)) {
        return 0
      }
      return paneSizes.value[index]
    }
    return undefined
  }

  // 切换面板折叠状态
  const togglePaneCollapse = (index: number) => {
    if (
      index >= 0 &&
      index < paneCount.value &&
      paneConfigs.value[index].collapsible
    ) {
      if (collapsedPanes.value.has(index)) {
        collapsedPanes.value.delete(index)
        emitWrapper.expand(index)

        resetSizes()
      } else {
        collapsedPanes.value.add(index)
        emitWrapper.collapse(index)

        // 重新分配其他面板的尺寸
        const collapsedSize = paneSizes.value[index]
        const remainingPanes = paneCount.value - collapsedPanes.value.size

        if (remainingPanes > 0) {
          const extraSizePerPane = collapsedSize / remainingPanes
          paneSizes.value = paneSizes.value.map((size, idx) => {
            if (collapsedPanes.value.has(idx)) {
              return 0
            } else {
              return size + extraSizePerPane
            }
          })
        }
      }

      if (props.stateful) {
        savePaneState()
      }

      emitWrapper.resize([...paneSizes.value])
    }
  }

  // 开始拖动分隔条
  const onGutterMouseDown = (e: MouseEvent | TouchEvent, index: number) => {
    e.preventDefault()

    // 如果面板不可调整大小，直接返回
    if (
      !paneConfigs.value[index].resizable ||
      !paneConfigs.value[index + 1].resizable
    ) {
      return
    }

    isDragging.value = true
    dragIndex.value = index

    const pos = getMousePosition(e)
    startPos.value = pos
    startSizes.value = [...paneSizes.value]

    emitWrapper.resizeStart(e)
  }

  // 拖动分隔条
  const onGutterMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.value) return

    const isHorizontal = props.layout === 'horizontal'
    const containerSize = isHorizontal
      ? _ref.value?.clientWidth || 0
      : _ref.value?.clientHeight || 0

    const pos = getMousePosition(e)
    const delta = pos - startPos.value
    const deltaPercentage = (delta / containerSize) * 100

    // 计算新的尺寸
    const newSizes = [...startSizes.value]
    const minSize1 = getMinSize(dragIndex.value)
    const minSize2 = getMinSize(dragIndex.value + 1)

    let size1 = newSizes[dragIndex.value] + deltaPercentage
    let size2 = newSizes[dragIndex.value + 1] - deltaPercentage

    // 确保尺寸不小于最小尺寸
    if (size1 < minSize1) {
      size1 = minSize1
      size2 =
        newSizes[dragIndex.value] + newSizes[dragIndex.value + 1] - minSize1
    }

    if (size2 < minSize2) {
      size2 = minSize2
      size1 =
        newSizes[dragIndex.value] + newSizes[dragIndex.value + 1] - minSize2
    }

    newSizes[dragIndex.value] = size1
    newSizes[dragIndex.value + 1] = size2

    // 更新尺寸
    paneSizes.value = newSizes
    emitWrapper.resize([...paneSizes.value])
  }

  // 结束拖动分隔条
  const onGutterMouseUp = () => {
    if (!isDragging.value) return

    isDragging.value = false
    dragIndex.value = -1

    // 如果启用了本地存储，保存当前状态
    if (props.stateful) {
      savePaneState()
    }

    emitWrapper.resizeEnd([...paneSizes.value])
  }

  // 处理窗口大小变化
  const handleResize = () => {
    // 重新调整所有面板的比例
    resetSizes()
  }

  // 获取鼠标位置
  const getMousePosition = (e: MouseEvent | TouchEvent) => {
    const isHorizontal = props.layout === 'horizontal'

    if (e instanceof MouseEvent) {
      return isHorizontal ? e.clientX : e.clientY
    } else {
      return isHorizontal ? e.touches[0].clientX : e.touches[0].clientY
    }
  }

  // 获取面板的最小尺寸
  const getMinSize = (index: number) => {
    if (typeof props.minSize === 'number') {
      return Math.max(props.minSize, paneConfigs.value[index]?.minSize || 0)
    } else if (
      Array.isArray(props.minSize) &&
      props.minSize[index] !== undefined
    ) {
      return Math.max(
        props.minSize[index],
        paneConfigs.value[index]?.minSize || 0,
      )
    }

    return paneConfigs.value[index]?.minSize || 10
  }

  // 保存面板状态到本地存储
  const savePaneState = () => {
    if (
      typeof localStorage !== 'undefined' &&
      props.stateful &&
      props.stateKey
    ) {
      const state = {
        sizes: paneSizes.value,
        collapsed: Array.from(collapsedPanes.value),
      }
      localStorage.setItem(props.stateKey, JSON.stringify(state))
    }
  }

  // 从本地存储加载面板状态
  const loadPaneState = () => {
    if (
      typeof localStorage !== 'undefined' &&
      props.stateful &&
      props.stateKey
    ) {
      const savedState = localStorage.getItem(props.stateKey)
      if (savedState) {
        try {
          const state = JSON.parse(savedState)

          // 恢复尺寸
          if (
            state.sizes &&
            Array.isArray(state.sizes) &&
            state.sizes.length === paneCount.value
          ) {
            paneSizes.value = state.sizes
          }

          // 恢复折叠状态
          if (state.collapsed && Array.isArray(state.collapsed)) {
            collapsedPanes.value = new Set(state.collapsed)
          }
        } catch (error) {
          console.error('加载Splitter状态失败:', error)
        }
      }
    }
  }

  return {
    _ref,
    paneRefs,
    paneSizes,
    paneCount,
    collapsedPanes,
    isDragging,
    registerPane,
    getPaneSize,
    togglePaneCollapse,
    savePaneState,
    loadPaneState,
    onGutterMouseDown,
  }
}

/**
 * SplitterPane组件的逻辑
 */
export function useSplitterPane() {
  const _ref = ref<HTMLElement | null>(null)
  const panelIndex = ref(-1)
  const collapsed = ref(false)

  // 注入来自Splitter的上下文
  const splitterContext = inject<SplitterContext | null>(
    'splitterContext',
    null,
  )

  if (!splitterContext) {
    console.warn('SplitterPane must be used within Splitter component')
  }

  // 监听折叠状态变化
  if (splitterContext) {
    watch(
      () => splitterContext.collapsedPanes,
      (newCollapsed) => {
        collapsed.value = newCollapsed.value.has(panelIndex.value)
      },
      { immediate: true, deep: true },
    )
  }

  return {
    _ref,
    splitterContext,
    panelIndex,
    collapsed,
  }
}
