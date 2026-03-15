type KeyResolver<T> = keyof T | ((item: T, index: number) => string | number)

export interface VirtualListOptions<T = unknown> {
  items: T[]
  itemHeight?: number
  overscan?: number
  viewportHeight?: number
  keyField?: KeyResolver<T>
  estimateSize?: (item: T, index: number) => number
  renderItem: (item: T, index: number) => HTMLElement | string
  onRangeChange?: (start: number, end: number) => void
}

interface VirtualListState<T = unknown> {
  options: VirtualListOptions<T>
  spacer: HTMLDivElement
  sizes: number[]
  offsets: number[]
  start: number
  end: number
  rafId: number | null
  resizeObserver: ResizeObserver | null
  handleScroll: () => void
}

interface BindingValue<T> {
  value: T
  oldValue?: T | null
}

const virtualStateMap = new WeakMap<HTMLElement, VirtualListState<unknown>>()

const getEstimatedSize = <T>(
  options: VirtualListOptions<T>,
  item: T,
  index: number,
) => {
  if (options.estimateSize) {
    return Math.max(1, options.estimateSize(item, index))
  }

  return Math.max(1, options.itemHeight ?? 56)
}

const ensureLayout = <T>(
  container: HTMLElement,
  options: VirtualListOptions<T>,
) => {
  if (!container.style.position) {
    container.style.position = 'relative'
  }
  if (!container.style.overflowY) {
    container.style.overflowY = 'auto'
  }
  if (options.viewportHeight && !container.style.height) {
    container.style.height = `${options.viewportHeight}px`
  }
}

const buildMetrics = <T>(state: VirtualListState<T>) => {
  const { items } = state.options
  state.sizes = items.map(
    (item, index) =>
      state.sizes[index] ?? getEstimatedSize(state.options, item, index),
  )
  state.offsets = new Array(items.length + 1)
  state.offsets[0] = 0
  for (let i = 0; i < items.length; i += 1) {
    const previousOffset = state.offsets[i] ?? 0
    const currentSize =
      state.sizes[i] ?? getEstimatedSize(state.options, items[i] as T, i)
    state.offsets[i + 1] = previousOffset + currentSize
  }
  state.spacer.style.height = `${state.offsets[items.length] ?? 0}px`
}

const findStartIndex = (offsets: number[], scrollTop: number) => {
  let low = 0
  let high = Math.max(0, offsets.length - 2)
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const currentOffset = offsets[mid] ?? 0
    const nextOffset = offsets[mid + 1] ?? Number.POSITIVE_INFINITY
    if (currentOffset <= scrollTop && nextOffset > scrollTop) {
      return mid
    }
    if (currentOffset > scrollTop) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return Math.max(0, Math.min(offsets.length - 2, low))
}

const getItemKey = <T>(
  options: VirtualListOptions<T>,
  item: T,
  index: number,
) => {
  const keyField = options.keyField
  if (!keyField) return `item-${index}`
  if (typeof keyField === 'function') return keyField(item, index)
  const keyValue = item[keyField]
  return typeof keyValue === 'string' || typeof keyValue === 'number'
    ? keyValue
    : `item-${index}`
}

const createItemElement = <T>(
  state: VirtualListState<T>,
  item: T,
  index: number,
  top: number,
) => {
  const wrapper = document.createElement('div')
  wrapper.dataset.index = String(index)
  wrapper.dataset.key = String(getItemKey(state.options, item, index))
  wrapper.style.position = 'absolute'
  wrapper.style.left = '0'
  wrapper.style.top = `${top}px`
  wrapper.style.width = '100%'
  wrapper.style.boxSizing = 'border-box'

  const rendered = state.options.renderItem(item, index)
  if (typeof rendered === 'string') {
    wrapper.innerHTML = rendered
  } else {
    wrapper.appendChild(rendered)
  }

  return wrapper
}

const scheduleRender = <T>(
  container: HTMLElement,
  state: VirtualListState<T>,
) => {
  if (state.rafId !== null) return
  state.rafId = window.requestAnimationFrame(() => {
    state.rafId = null
    renderVisibleItems(container, state)
  })
}

const measureItems = <T>(
  container: HTMLElement,
  state: VirtualListState<T>,
) => {
  const elements = state.spacer.children
  let changed = false
  for (let i = 0; i < elements.length; i += 1) {
    const el = elements[i] as HTMLElement
    const index = Number(el.dataset.index)
    const height = Math.max(1, el.offsetHeight)
    if (Number.isFinite(index) && height !== state.sizes[index]) {
      state.sizes[index] = height
      changed = true
    }
  }
  if (changed) {
    buildMetrics(state)
    scheduleRender(container, state)
  }
}

const renderVisibleItems = <T>(
  container: HTMLElement,
  state: VirtualListState<T>,
) => {
  const { items, overscan = 6 } = state.options
  const viewportHeight = container.clientHeight
  const scrollTop = container.scrollTop
  const endOffset = scrollTop + viewportHeight

  const baseStart = findStartIndex(state.offsets, scrollTop)
  let baseEnd = baseStart
  while (
    baseEnd < items.length &&
    (state.offsets[baseEnd] ?? Number.POSITIVE_INFINITY) < endOffset
  ) {
    baseEnd += 1
  }

  const start = Math.max(0, baseStart - overscan)
  const end = Math.min(items.length, baseEnd + overscan)

  if (state.start === start && state.end === end) return
  state.start = start
  state.end = end
  state.options.onRangeChange?.(start, end)

  const fragment = document.createDocumentFragment()
  for (let i = start; i < end; i += 1) {
    const item = items[i]
    if (item === undefined) continue
    const top = state.offsets[i] ?? 0
    fragment.appendChild(createItemElement(state, item, i, top))
  }

  state.spacer.replaceChildren(fragment)
  measureItems(container, state)
}

const initVirtualList = <T>(
  container: HTMLElement,
  options: VirtualListOptions<T>,
) => {
  ensureLayout(container, options)

  const spacer = document.createElement('div')
  spacer.style.position = 'relative'
  spacer.style.width = '100%'
  container.innerHTML = ''
  container.appendChild(spacer)

  const state: VirtualListState<T> = {
    options,
    spacer,
    sizes: [],
    offsets: [],
    start: -1,
    end: -1,
    rafId: null,
    resizeObserver: null,
    handleScroll: () => scheduleRender(container, state),
  }

  buildMetrics(state)
  container.addEventListener('scroll', state.handleScroll, { passive: true })

  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(() =>
      scheduleRender(container, state),
    )
    resizeObserver.observe(container)
    state.resizeObserver = resizeObserver
  }

  virtualStateMap.set(container, state as VirtualListState<unknown>)
  scheduleRender(container, state)
}

const updateVirtualList = <T>(
  container: HTMLElement,
  options: VirtualListOptions<T>,
) => {
  const state = virtualStateMap.get(container) as
    | VirtualListState<T>
    | undefined
  if (!state) {
    initVirtualList(container, options)
    return
  }
  state.options = options
  ensureLayout(container, options)
  buildMetrics(state)
  scheduleRender(container, state)
}

const cleanupVirtualList = (container: HTMLElement) => {
  const state = virtualStateMap.get(container)
  if (!state) return
  container.removeEventListener('scroll', state.handleScroll)
  state.resizeObserver?.disconnect()
  if (state.rafId !== null) {
    window.cancelAnimationFrame(state.rafId)
  }
  virtualStateMap.delete(container)
}

export const virtualListDirective = {
  mounted(el: HTMLElement, binding: BindingValue<VirtualListOptions>) {
    initVirtualList(el, binding.value)
  },
  updated(el: HTMLElement, binding: BindingValue<VirtualListOptions>) {
    if (binding.value === binding.oldValue) return
    updateVirtualList(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    cleanupVirtualList(el)
  },
}
