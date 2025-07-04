import { ref, watch } from 'vue'
import type { Ref } from 'vue'

interface UseTabsOptions {
  modelValue?: string | number
  onChange?: (value: string | number) => void
}

interface UseTabsReturn {
  activeTab: Ref<string | number>
  isActive: (name: string | number) => boolean
  activate: (name: string | number) => void
  onKeydown: (e: KeyboardEvent, tabs: Array<string | number>) => void
}

export function useTabs(options: UseTabsOptions = {}): UseTabsReturn {
  // 如果没有提供modelValue，则初始值为空字符串
  const activeTab = ref<string | number>(options.modelValue || '')

  const isActive = (name: string | number): boolean => {
    return activeTab.value === name
  }

  const activate = (name: string | number): void => {
    activeTab.value = name
    options.onChange?.(name)
  }

  // 监听modelValue变化
  watch(
    () => options.modelValue,
    (newValue) => {
      if (newValue !== undefined && newValue !== activeTab.value) {
        activeTab.value = newValue
      }
    },
  )

  const onKeydown = (e: KeyboardEvent, tabs: Array<string | number>): void => {
    const currentIndex = tabs.indexOf(activeTab.value)
    // 如果当前没有选中的标签页或者标签页不在列表中，则选择第一个
    if (currentIndex === -1 && tabs.length > 0) {
      activate(tabs[0])
      return
    }

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % tabs.length
      activate(tabs[nextIndex])
      e.preventDefault()
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
      activate(tabs[prevIndex])
      e.preventDefault()
    }
  }

  return {
    activeTab,
    isActive,
    activate,
    onKeydown,
  }
}
