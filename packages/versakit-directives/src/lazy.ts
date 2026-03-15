export interface LazyLoadOptions {
  src?: string
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
  loadingClass?: string
  loadedClass?: string
  errorClass?: string
  load?: (el: HTMLElement) => void | Promise<void>
  onLoad?: (el: HTMLElement) => void
  onError?: (el: HTMLElement, error: unknown) => void
}

type LazyBindingValue = string | LazyLoadOptions

interface LazyLoadState {
  observer: IntersectionObserver
  options: LazyLoadOptions
  loaded: boolean
}

interface BindingValue<T> {
  value: T
  oldValue?: T | null
}

const lazyStateMap = new WeakMap<HTMLElement, LazyLoadState>()

const normalizeOptions = (
  value: LazyBindingValue | undefined,
): LazyLoadOptions => {
  if (typeof value === 'string') {
    return {
      src: value,
    }
  }

  return {
    root: null,
    rootMargin: '0px 0px 120px 0px',
    threshold: 0,
    once: true,
    ...value,
  }
}

const applyClass = (
  el: HTMLElement,
  removeClassName?: string,
  addClassName?: string,
) => {
  if (removeClassName) {
    el.classList.remove(removeClassName)
  }
  if (addClassName) {
    el.classList.add(addClassName)
  }
}

const performLazyLoad = async (el: HTMLElement, options: LazyLoadOptions) => {
  applyClass(el, undefined, options.loadingClass)

  try {
    if (options.load) {
      await options.load(el)
    } else if (options.src && el instanceof HTMLImageElement) {
      await new Promise<void>((resolve, reject) => {
        el.onload = () => resolve()
        el.onerror = () =>
          reject(new Error(`Failed to load image: ${options.src}`))
        el.src = options.src as string
      })
    }

    applyClass(el, options.loadingClass, options.loadedClass)
    options.onLoad?.(el)
  } catch (error) {
    applyClass(el, options.loadingClass, options.errorClass)
    options.onError?.(el, error)
  }
}

const observeLazyElement = (el: HTMLElement, options: LazyLoadOptions) => {
  let isLoading = false
  const observer = new IntersectionObserver(
    async (entries) => {
      const firstEntry = entries[0]
      if (!firstEntry?.isIntersecting) return

      const state = lazyStateMap.get(el)
      if (!state || state.loaded || isLoading) return

      isLoading = true
      await performLazyLoad(el, options)
      state.loaded = true
      isLoading = false

      if (state.options.once !== false) {
        observer.unobserve(el)
      }
    },
    {
      root: options.root ?? null,
      rootMargin: options.rootMargin ?? '0px',
      threshold: options.threshold ?? 0,
    },
  )

  lazyStateMap.set(el, {
    observer,
    options,
    loaded: false,
  })

  observer.observe(el)
}

const cleanupLazyElement = (el: HTMLElement) => {
  const state = lazyStateMap.get(el)
  state?.observer.disconnect()
  lazyStateMap.delete(el)
}

export const lazyLoadDirective = {
  mounted(el: HTMLElement, binding: BindingValue<LazyBindingValue>) {
    const options = normalizeOptions(binding.value)
    observeLazyElement(el, options)
  },
  updated(el: HTMLElement, binding: BindingValue<LazyBindingValue>) {
    if (binding.value === binding.oldValue) return
    cleanupLazyElement(el)
    const options = normalizeOptions(binding.value)
    observeLazyElement(el, options)
  },
  unmounted(el: HTMLElement) {
    cleanupLazyElement(el)
  },
}
