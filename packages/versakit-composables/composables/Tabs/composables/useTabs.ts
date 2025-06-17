import { ref } from 'vue'

export function useTabs(initialIndex = 0) {
  const selectedIndex = ref(initialIndex)
  const tabRefs = ref<HTMLElement[]>([])

  const select = (index: number) => {
    selectedIndex.value = index
    tabRefs.value[index]?.focus()
  }

  const registerTab = (el: HTMLElement | null, index: number) => {
    if (el) tabRefs.value[index] = el
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const count = tabRefs.value.length
    const current = selectedIndex.value

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      select((current + 1) % count)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      select((current - 1 + count) % count)
    }
  }

  return {
    selectedIndex,
    select,
    registerTab,
    onKeyDown,
  }
}
