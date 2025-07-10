import {
  type SetupContext,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  computed,
} from 'vue'
import type { SplitterProps, SplitterPanelSize } from './type'

export const useSplitter = (
  props: SplitterProps,
  emit: SetupContext<{
    'update:panels': [SplitterPanelSize[]]
    'resize-start': [MouseEvent | TouchEvent]
    resize: [SplitterPanelSize[]]
    'resize-end': [SplitterPanelSize[]]
    collapse: [number, boolean]
    expand: [number, boolean]
  }>['emit'],
) => {
  const rootRef = ref<HTMLElement | null>(null)
  const panelRefs = ref<HTMLElement[]>([])
  const gutterRefs = ref<HTMLElement[]>([])

  const isResizing = ref(false)
  const startPos = ref(0)
  const currentGutterIndex = ref(-1)

  // 保存面板状态
  const panelSizes = reactive<SplitterPanelSize[]>(props.panels || [])

  // 计算是否为水平方向
  const isHorizontal = computed(() => props.direction !== 'vertical')

  // 注册面板
  const registerPanel = (el: HTMLElement, index: number) => {
    panelRefs.value[index] = el
  }

  // 注册分割条
  const registerGutter = (el: HTMLElement, index: number) => {
    gutterRefs.value[index] = el
  }

  // 初始化面板大小
  const initPanelSizes = () => {
    if (!rootRef.value || panelRefs.value.length === 0) return

    const containerSize = isHorizontal.value
      ? rootRef.value.clientWidth
      : rootRef.value.clientHeight

    // 如果没有配置面板大小，则均分空间
    if (!props.panels || props.panels.length === 0) {
      const equalSize = `${100 / panelRefs.value.length}%`
      panelRefs.value.forEach((_, i) => {
        panelSizes[i] = panelSizes[i] || {}
        panelSizes[i].size = equalSize
        panelSizes[i].resizable = panelSizes[i].resizable !== false
      })

      return
    }

    // 否则使用配置的大小
    props.panels.forEach((panel: SplitterPanelSize, i: number) => {
      if (i < panelRefs.value.length) {
        panelSizes[i] = { ...panel }

        // 将百分比转换为像素
        if (panel.size && panel.size.endsWith('%')) {
          const percent = parseFloat(panel.size) / 100
          const pixelSize = Math.floor(containerSize * percent)
          panelRefs.value[i].style[isHorizontal.value ? 'width' : 'height'] =
            `${pixelSize}px`
        } else if (panel.size) {
          panelRefs.value[i].style[isHorizontal.value ? 'width' : 'height'] =
            panel.size
        }
      }
    })

    // 更新面板大小
    emit('update:panels', [...panelSizes])
  }

  // 开始拖动
  const onGutterMouseDown = (
    event: MouseEvent | TouchEvent,
    gutterIndex: number,
  ) => {
    if (!props.resizable) return

    // 检查相邻面板是否可调整大小
    const leftPanelIndex = gutterIndex
    const rightPanelIndex = gutterIndex + 1

    const leftPanelResizable = panelSizes[leftPanelIndex]?.resizable !== false
    const rightPanelResizable = panelSizes[rightPanelIndex]?.resizable !== false

    if (!leftPanelResizable && !rightPanelResizable) return

    event.preventDefault()
    isResizing.value = true
    currentGutterIndex.value = gutterIndex

    // 记录起始位置
    if (event instanceof MouseEvent) {
      startPos.value = isHorizontal.value ? event.clientX : event.clientY
    } else {
      const touch = event.touches[0]
      startPos.value = isHorizontal.value ? touch.clientX : touch.clientY
    }

    // 添加事件监听
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)

    // 发出开始调整大小事件
    emit('resize-start', event)
  }

  // 处理鼠标移动
  const onMouseMove = (event: MouseEvent) => {
    if (!isResizing.value) return
    handleMove(isHorizontal.value ? event.clientX : event.clientY)
  }

  // 处理触摸移动
  const onTouchMove = (event: TouchEvent) => {
    if (!isResizing.value) return
    const touch = event.touches[0]
    handleMove(isHorizontal.value ? touch.clientX : touch.clientY)
  }

  // 处理移动逻辑
  const handleMove = (currentPos: number) => {
    if (!isResizing.value || !rootRef.value) return

    const index = currentGutterIndex.value
    const leftPanelIndex = index
    const rightPanelIndex = index + 1

    if (
      leftPanelIndex < 0 ||
      rightPanelIndex >= panelRefs.value.length ||
      !panelRefs.value[leftPanelIndex] ||
      !panelRefs.value[rightPanelIndex]
    ) {
      return
    }

    const leftPanel = panelRefs.value[leftPanelIndex]
    const rightPanel = panelRefs.value[rightPanelIndex]

    // 计算移动距离
    const delta = currentPos - startPos.value
    if (delta === 0) return

    // 获取当前尺寸
    const leftPanelSize = isHorizontal.value
      ? leftPanel.offsetWidth
      : leftPanel.offsetHeight
    const rightPanelSize = isHorizontal.value
      ? rightPanel.offsetWidth
      : rightPanel.offsetHeight

    // 检查最小尺寸限制
    const leftMinSize = panelSizes[leftPanelIndex]?.minSize
      ? parseSizeToPixel(
          panelSizes[leftPanelIndex].minSize as string,
          rootRef.value,
          isHorizontal.value,
        )
      : 0

    const rightMinSize = panelSizes[rightPanelIndex]?.minSize
      ? parseSizeToPixel(
          panelSizes[rightPanelIndex].minSize as string,
          rootRef.value,
          isHorizontal.value,
        )
      : 0

    // 检查最大尺寸限制
    const leftMaxSize = panelSizes[leftPanelIndex]?.maxSize
      ? parseSizeToPixel(
          panelSizes[leftPanelIndex].maxSize as string,
          rootRef.value,
          isHorizontal.value,
        )
      : Infinity

    const rightMaxSize = panelSizes[rightPanelIndex]?.maxSize
      ? parseSizeToPixel(
          panelSizes[rightPanelIndex].maxSize as string,
          rootRef.value,
          isHorizontal.value,
        )
      : Infinity

    // 计算新尺寸
    let newLeftPanelSize = leftPanelSize + delta
    let newRightPanelSize = rightPanelSize - delta

    // 应用限制
    if (newLeftPanelSize < leftMinSize) {
      newLeftPanelSize = leftMinSize
      newRightPanelSize = leftPanelSize + rightPanelSize - leftMinSize
    } else if (newLeftPanelSize > leftMaxSize) {
      newLeftPanelSize = leftMaxSize
      newRightPanelSize = leftPanelSize + rightPanelSize - leftMaxSize
    }

    if (newRightPanelSize < rightMinSize) {
      newRightPanelSize = rightMinSize
      newLeftPanelSize = leftPanelSize + rightPanelSize - rightMinSize
    } else if (newRightPanelSize > rightMaxSize) {
      newRightPanelSize = rightMaxSize
      newLeftPanelSize = leftPanelSize + rightPanelSize - rightMaxSize
    }

    // 更新面板大小
    if (isHorizontal.value) {
      leftPanel.style.width = `${newLeftPanelSize}px`
      rightPanel.style.width = `${newRightPanelSize}px`
    } else {
      leftPanel.style.height = `${newLeftPanelSize}px`
      rightPanel.style.height = `${newRightPanelSize}px`
    }

    // 更新状态
    panelSizes[leftPanelIndex] = {
      ...panelSizes[leftPanelIndex],
      size: `${newLeftPanelSize}px`,
    }

    panelSizes[rightPanelIndex] = {
      ...panelSizes[rightPanelIndex],
      size: `${newRightPanelSize}px`,
    }

    // 更新起始位置
    startPos.value = currentPos

    // 发出调整大小事件
    emit('resize', [...panelSizes])
  }

  // 结束拖动
  const onMouseUp = () => {
    endResize()
  }

  const onTouchEnd = () => {
    endResize()
  }

  // 结束拖动逻辑
  const endResize = () => {
    if (!isResizing.value) return

    isResizing.value = false
    currentGutterIndex.value = -1

    // 移除事件监听
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('touchmove', onTouchMove)
    window.removeEventListener('touchend', onTouchEnd)

    // 发出结束调整大小事件
    emit('resize-end', [...panelSizes])
    emit('update:panels', [...panelSizes])
  }

  // 折叠/展开面板
  const toggleCollapse = (index: number) => {
    if (index < 0 || index >= panelRefs.value.length) return

    const panel = panelRefs.value[index]
    const panelSize = panelSizes[index]

    if (!panelSize.collapsible) return

    // 切换折叠状态
    const newCollapsed = !panelSize.collapsed

    if (newCollapsed) {
      // 保存当前大小以便展开时恢复
      panelSize._savedSize = panelSize.size

      // 折叠面板
      if (isHorizontal.value) {
        panel.style.width = '0'
      } else {
        panel.style.height = '0'
      }

      panelSize.size = '0'
      panelSize.collapsed = true

      // 发出折叠事件
      emit('collapse', index, true)
    } else {
      // 展开面板
      const sizeToRestore = panelSize._savedSize || '1fr'

      if (isHorizontal.value) {
        panel.style.width = sizeToRestore
      } else {
        panel.style.height = sizeToRestore
      }

      panelSize.size = sizeToRestore
      panelSize.collapsed = false

      // 发出展开事件
      emit('expand', index, false)
    }

    // 更新面板状态
    emit('update:panels', [...panelSizes])
  }

  // 工具函数：将尺寸字符串解析为像素值
  const parseSizeToPixel = (
    size: string,
    container: HTMLElement,
    isHorizontal: boolean,
  ): number => {
    if (size.endsWith('px')) {
      return parseFloat(size)
    } else if (size.endsWith('%')) {
      const containerSize = isHorizontal
        ? container.clientWidth
        : container.clientHeight
      return (parseFloat(size) / 100) * containerSize
    } else if (size.endsWith('rem')) {
      const fontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      )
      return parseFloat(size) * fontSize
    } else if (size.endsWith('em')) {
      const fontSize = parseFloat(getComputedStyle(container).fontSize)
      return parseFloat(size) * fontSize
    } else if (size.endsWith('vh')) {
      return (parseFloat(size) / 100) * window.innerHeight
    } else if (size.endsWith('vw')) {
      return (parseFloat(size) / 100) * window.innerWidth
    }

    return parseFloat(size) || 0
  }

  // 初始化
  onMounted(() => {
    initPanelSizes()

    // 监听窗口大小变化
    window.addEventListener('resize', initPanelSizes)
  })

  // 清理
  onBeforeUnmount(() => {
    window.removeEventListener('resize', initPanelSizes)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    window.removeEventListener('touchmove', onTouchMove)
    window.removeEventListener('touchend', onTouchEnd)
  })

  return {
    rootRef,
    panelRefs,
    gutterRefs,
    isResizing,
    panelSizes,
    isHorizontal,
    registerPanel,
    registerGutter,
    onGutterMouseDown,
    toggleCollapse,
    initPanelSizes,
  }
}
