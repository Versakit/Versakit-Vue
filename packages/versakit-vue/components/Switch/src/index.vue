<template>
  <button
    type="button"
    role="switch"
    :aria-checked="checked"
    :disabled="props.disabled"
    @click="toggle"
    @keydown="onKeyDown"
    :class="classes.root()"
  >
    <!-- 轨道背景 -->
    <span
      class="absolute inset-0 rounded-full transition-colors duration-300 ease-in-out"
      :class="getTrackColorClass()"
    ></span>

    <!-- 滑块 -->
    <span
      :class="[
        classes.thumb(),
        'transform transition-all duration-300 ease-in-out',
        getThumbPositionClass(),
      ]"
    >
      <!-- 滑块内部动画 -->
      <span
        v-if="checked"
        class="absolute inset-0 bg-white rounded-full transition-all duration-300"
        :class="{
          'opacity-100 scale-100': checked,
          'opacity-0 scale-0': !checked,
        }"
      ></span>
    </span>

    <!-- 波纹效果 -->
    <span
      class="absolute inset-0 transition-opacity duration-300"
      :class="{ 'opacity-0': !checked, 'opacity-100': checked }"
    >
      <span
        class="absolute inset-0 rounded-full transform transition-transform duration-500"
        :class="[
          getRippleColorClass(),
          { 'scale-100': animateRipple, 'scale-0': !animateRipple },
        ]"
      ></span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSwitch } from './composables/useSwitch.ts'
import { switchStyle } from './index.variants'
import type { SwitchProps } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Switch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  modelValue: false,
  disabled: false,
  size: 'default',
  color: 'blue',
})

const emit = defineEmits(['update:modelValue'])

const { checked, toggle, onKeyDown } = useSwitch({
  modelValue: props.modelValue,
  disabled: props.disabled,
  onChange: (val) => emit('update:modelValue', val),
})

// 滑块波纹动画
const animateRipple = ref(false)

// 监听状态变化，触发动画
watch(checked, (newVal) => {
  if (newVal) {
    animateRipple.value = true
    setTimeout(() => {
      animateRipple.value = false
    }, 500)
  }
})

// 根据尺寸获取滑块位置
const getThumbPositionClass = () => {
  if (!checked.value) return ''

  switch (props.size) {
    case 'small':
      return 'translate-x-3'
    case 'large':
      return 'translate-x-5'
    default:
      return 'translate-x-4'
  }
}

// 获取轨道颜色
const getTrackColorClass = () => {
  if (!checked.value) {
    return 'bg-gray-300 dark:bg-gray-600'
  }

  const colorMap = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
  }

  return colorMap[props.color] || colorMap.blue
}

// 获取波纹颜色
const getRippleColorClass = () => {
  const colorMap = {
    blue: 'bg-blue-400/10',
    green: 'bg-green-400/10',
    red: 'bg-red-400/10',
    yellow: 'bg-yellow-400/10',
    purple: 'bg-purple-400/10',
  }

  return colorMap[props.color] || colorMap.blue
}

const classes = computed(() =>
  switchStyle({
    checked: checked.value,
    disabled: props.disabled,
    size: props.size,
    color: props.color,
  }),
).value
</script>

<style scoped>
/* 添加弹性动画效果 */
.transform {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform;
}
</style>
