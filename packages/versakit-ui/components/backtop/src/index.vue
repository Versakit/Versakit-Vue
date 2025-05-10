<template>
  <div
    v-if="visible"
    :class="vkClass"
    :style="backTopStyle"
    @click.stop="handleClick"
    role="button"
    aria-label="回到顶部"
  >
    <VKIcon v-if="icon" :name="icon" :color="iconColor" size="26" />
    <span v-else>
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { VKIcon } from '@versakit/icons'
import { computed, ref, onMounted, onUnmounted, shallowRef } from 'vue'
import type { BackTopProps } from '../type/index'
import type { PtProps } from '../../badge/type'

const props = withDefaults(defineProps<BackTopProps>(), {
  right: '60',
  bottom: '40',
  icon: '',
  iconColor: '#8b5cf6',
  visibilityHeight: '150',
  unstyled: false,
})

const iconColor = computed(() => props.iconColor)
const el = shallowRef<HTMLElement | null>(null)
const visible = ref(false)
let scrollTimer: number | null = null

const vkClass = computed(() => {
  if (props.unstyled) {
    return getPtClass('root')
  }
  return 'vk-backtop'
})

const getPtClass = (key: keyof PtProps) => {
  const ptValue = props.pt?.[key]
  if (!ptValue) return ''

  if (typeof ptValue === 'string') {
    return ptValue
  }

  if (typeof ptValue === 'object') {
    if (Array.isArray(ptValue)) {
      return ptValue.join(' ')
    }
    return Object.entries(ptValue)
      .filter(([, value]) => value)
      .map(([, value]) => (typeof value === 'string' ? value : ''))
      .filter(Boolean)
      .join(' ')
  }

  return ''
}

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const getScrollElement = (target: HTMLElement) => {
  return target === document.documentElement || target === document.body
    ? window
    : target
}

const handleScroll = () => {
  if (scrollTimer) return
  scrollTimer = window.setTimeout(() => {
    if (!el.value) return

    const isWindowTarget =
      el.value === document.documentElement || el.value === document.body
    const scrollTop = isWindowTarget
      ? window.scrollY || document.documentElement.scrollTop
      : el.value.scrollTop

    visible.value = scrollTop >= parseInt(props.visibilityHeight)
    scrollTimer = null
  }, 300)
}

const handleClick = () => {
  if (!el.value) return

  if (el.value === document.documentElement || el.value === document.body) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    el.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  let target: HTMLElement | null = null

  if (props.target) {
    target =
      typeof props.target === 'string'
        ? document.querySelector(props.target)
        : props.target
  } else {
    target = document.documentElement
  }

  if (!target) {
    return
  }

  el.value = target
  const scrollElement = getScrollElement(target)
  scrollElement.addEventListener('scroll', handleScroll)
  handleScroll() // 初始化可见状态
})

onUnmounted(() => {
  if (el.value) {
    const scrollElement = getScrollElement(el.value)
    scrollElement.removeEventListener('scroll', handleScroll)
  }
  if (scrollTimer) {
    clearTimeout(scrollTimer)
  }
})
</script>

<style>
@import url('../style/index.css');
</style>
