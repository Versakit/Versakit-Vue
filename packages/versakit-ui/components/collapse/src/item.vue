<template>
  <div
    :class="[
      {
        'is-disabled': disabled,
      },
      ptClasses.root,
    ]"
  >
    <div
      :class="[
        {
          'is-disabled': disabled,
          'is-active': isActive,
        },
        ptClasses.header,
      ]"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>

      <div
        :class="{
          'header-angle': icon,
        }"
        v-if="icon || $slots.icon"
      >
        <slot name="icon" :is-active="isActive">
          <VKIcon :name="icon" />
        </slot>
      </div>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div :class="ptClasses.wrapper" v-show="isActive">
        <div :class="ptClasses.content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { inject, computed } from 'vue'
import type { CollapseItemProps } from '../type/index'
import { collapseContextKey } from '../type/index'
import { VKIcon } from '@versakit/icons'
import { getPtClasses } from '@versakit/shared'

defineOptions({
  name: 'VerCollapseItem',
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name),
)
const handleClick = () => {
  if (props.disabled) {
    return
  }
  collapseContext?.handleItemClick(props.name)
}

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}

// 无头化处理
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
      header: getPtClasses(props.pt, 'header'),
      wrapper: getPtClasses(props.pt, 'wrapper'),
      content: getPtClasses(props.pt, 'content'),
    }
  }
  return {
    root: 'vk-collapse-item',
    header: 'vk-collapse-item__header',
    wrapper: 'vk-collapse-item__wrapper',
    content: 'vk-collapse-item__content',
  }
})
</script>

<style scoped>
@import url('../style/item.css');
</style>
