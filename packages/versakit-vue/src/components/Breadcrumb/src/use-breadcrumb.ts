import { provide, ref, inject } from 'vue'
import type { BreadcrumbProps } from './type'

const BREADCRUMB_INJECTION_KEY = Symbol('breadcrumb')

export type BreadcrumbContext = {
  separator: string
  separatorIcon: string
}

export const useBreadcrumb = (props: BreadcrumbProps) => {
  const _ref = ref<HTMLElement | null>(null)

  // 提供给子组件的上下文
  provide(BREADCRUMB_INJECTION_KEY, {
    separator: props.separator || '/',
    separatorIcon: props.separatorIcon || '',
  })

  return {
    _ref,
  }
}

export const useBreadcrumbItem = () => {
  // 从父组件注入上下文
  const breadcrumbContext = inject<BreadcrumbContext>(
    BREADCRUMB_INJECTION_KEY,
    {
      separator: '/',
      separatorIcon: '',
    },
  )

  const _ref = ref<HTMLElement | null>(null)

  return {
    _ref,
    breadcrumbContext,
  }
}
