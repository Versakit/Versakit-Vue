<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { colorPicker } from './index.variants'
import {
  parseColor,
  formatColor,
  generateDefaultPresets,
  hsvToRgb,
} from './utils'
import type {
  ColorPickerProps,
  ColorPickerPassThroughAttributes,
  ColorState,
} from './type'

const props = withDefaults(
  defineProps<ColorPickerProps & { pt?: ColorPickerPassThroughAttributes }>(),
  {
    modelValue: '#000000',
    disabled: false,
    defaultMode: 'picker',
    format: 'hex',
    showInput: true,
    presets: () => generateDefaultPresets(),
    showAlpha: true,
    popover: true,
    unstyled: false,
  },
)

const emit = defineEmits(['update:modelValue', 'change'])

// 是否显示面板
const isPanelOpen = ref(false)
// 当前模式
const mode = ref(props.defaultMode)
// 颜色状态
const colorState = ref<ColorState>(parseColor(props.modelValue))
// 输入框值
const inputValue = ref(props.modelValue)

// DOM引用
const rootRef = ref<HTMLElement | null>(null)
const saturationRef = ref<HTMLElement | null>(null)
const hueRef = ref<HTMLElement | null>(null)
const alphaRef = ref<HTMLElement | null>(null)

// 是否正在拖动
const isDraggingHue = ref(false)
const isDraggingSaturation = ref(false)
const isDraggingAlpha = ref(false)

// 监听外部值变化
watch(
  () => props.modelValue,
  (val) => {
    if (val !== currentColor.value) {
      colorState.value = parseColor(val)
      inputValue.value = val
    }
  },
)

// 当前颜色值
const currentColor = computed(() => {
  return formatColor(colorState.value, props.format)
})

// 饱和度背景样式
const saturationStyle = computed(() => {
  const { h } = colorState.value
  const { r, g, b } = hsvToRgb(h, 100, 100)
  return {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  }
})

// 饱和度指示器位置
const saturationThumbStyle = computed(() => {
  const { s, v } = colorState.value
  return {
    left: `${s}%`,
    top: `${100 - v}%`,
  }
})

// Alpha滑块背景样式
const alphaStyle = computed(() => {
  const { h, s, v } = colorState.value
  const { r, g, b } = hsvToRgb(h, s, v)
  return {
    background: `linear-gradient(to right, transparent, rgb(${r}, ${g}, ${b}))`,
  }
})

// Alpha指示器位置
const alphaThumbStyle = computed(() => {
  const { a } = colorState.value
  return {
    left: `${a * 100}%`,
  }
})

// Hue指示器位置
const hueThumbStyle = computed(() => {
  const { h } = colorState.value
  return {
    left: `${(h / 360) * 100}%`,
  }
})

// 触发器样式
const triggerStyle = computed(() => {
  return {
    backgroundColor: currentColor.value,
  }
})

// 样式类
const classes = computed(() => {
  if (props.unstyled) {
    return {
      root: '',
      trigger: '',
      panel: '',
      saturation: '',
      saturationThumb: '',
      hue: '',
      hueThumb: '',
      alpha: '',
      alphaOverlay: '',
      alphaThumb: '',
      presets: '',
      preset: '',
      input: '',
      tabs: '',
      tab: '',
      activeTab: '',
      footer: '',
    }
  }
  return colorPicker({
    disabled: props.disabled,
  })
})

// 更新颜色并触发事件
const updateColor = (newColor: Partial<ColorState>) => {
  if (props.disabled) return

  colorState.value = { ...colorState.value, ...newColor }

  const formattedColor = formatColor(colorState.value, props.format)
  inputValue.value = formattedColor

  emit('update:modelValue', formattedColor)
  emit('change', formattedColor)
}

// 处理饱和度面板点击/拖动
const handleSaturationChange = (event: MouseEvent) => {
  if (props.disabled || !saturationRef.value) return

  const rect = saturationRef.value.getBoundingClientRect()
  const { width, height, left, top } = rect

  // 计算相对位置
  let x = event.clientX - left
  let y = event.clientY - top

  // 边界处理
  x = Math.max(0, Math.min(width, x))
  y = Math.max(0, Math.min(height, y))

  // 计算百分比
  const s = Math.round((x / width) * 100)
  const v = Math.round(100 - (y / height) * 100)

  updateColor({ s, v })
}

// 处理色相滑块点击/拖动
const handleHueChange = (event: MouseEvent) => {
  if (props.disabled || !hueRef.value) return

  const rect = hueRef.value.getBoundingClientRect()
  const { width, left } = rect

  // 计算相对位置
  let x = event.clientX - left

  // 边界处理
  x = Math.max(0, Math.min(width, x))

  // 计算色相值
  const h = Math.round((x / width) * 360)

  updateColor({ h })
}

// 处理透明度滑块点击/拖动
const handleAlphaChange = (event: MouseEvent) => {
  if (props.disabled || !alphaRef.value) return

  const rect = alphaRef.value.getBoundingClientRect()
  const { width, left } = rect

  // 计算相对位置
  let x = event.clientX - left

  // 边界处理
  x = Math.max(0, Math.min(width, x))

  // 计算透明度值
  const a = parseFloat((x / width).toFixed(2))

  updateColor({ a })
}

// 处理预设颜色点击
const handlePresetClick = (color: string) => {
  if (props.disabled) return

  colorState.value = parseColor(color)
  inputValue.value = formatColor(colorState.value, props.format)

  emit('update:modelValue', inputValue.value)
  emit('change', inputValue.value)
}

// 处理输入框变化
const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value
  inputValue.value = value

  try {
    const newColor = parseColor(value)
    colorState.value = newColor
    const formattedColor = formatColor(newColor, props.format)

    emit('update:modelValue', formattedColor)
    emit('change', formattedColor)
  } catch (error) {
    // 输入无效，不做处理
    console.error(error)
  }
}

// 鼠标事件处理
const handleMouseDown = (
  event: MouseEvent,
  type: 'saturation' | 'hue' | 'alpha',
) => {
  if (props.disabled) return

  if (type === 'saturation') {
    isDraggingSaturation.value = true
    handleSaturationChange(event)
  } else if (type === 'hue') {
    isDraggingHue.value = true
    handleHueChange(event)
  } else if (type === 'alpha') {
    isDraggingAlpha.value = true
    handleAlphaChange(event)
  }

  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDraggingSaturation.value) {
    handleSaturationChange(event)
  } else if (isDraggingHue.value) {
    handleHueChange(event)
  } else if (isDraggingAlpha.value) {
    handleAlphaChange(event)
  }
}

const handleMouseUp = () => {
  isDraggingSaturation.value = false
  isDraggingHue.value = false
  isDraggingAlpha.value = false

  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
}

// 切换模式
const setMode = (newMode: 'picker' | 'palette') => {
  mode.value = newMode
}

// 切换面板开关
const togglePanel = () => {
  if (props.disabled) return
  isPanelOpen.value = !isPanelOpen.value
}

// 关闭面板
const closePanel = (event: MouseEvent) => {
  if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
    isPanelOpen.value = false
  }
}

// 组件挂载和卸载
onMounted(() => {
  if (!props.popover) {
    isPanelOpen.value = true
  }

  document.addEventListener('click', closePanel)
})

onUnmounted(() => {
  document.removeEventListener('click', closePanel)
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <div ref="rootRef" :class="classes.root" v-bind="{ ...pt?.root }">
    <!-- 颜色选择器触发器 -->
    <div
      v-if="popover"
      :class="classes.trigger"
      :style="triggerStyle"
      @click="togglePanel"
      v-bind="{ ...pt?.trigger }"
    >
      <slot name="trigger" :color="currentColor" :open="isPanelOpen">
        <!-- 默认触发器 -->
        <div class="w-full h-full" />
      </slot>
    </div>

    <!-- 颜色选择面板 -->
    <div
      v-if="isPanelOpen || !popover"
      :class="classes.panel"
      v-bind="{ ...pt?.panel }"
      :style="
        popover ? { position: 'absolute', marginTop: '8px', zIndex: 50 } : {}
      "
    >
      <!-- 切换模式 -->
      <div :class="classes.tabs">
        <button
          type="button"
          :class="[classes.tab, mode === 'picker' ? classes.activeTab : '']"
          @click="setMode('picker')"
        >
          颜色选择器
        </button>
        <button
          type="button"
          :class="[classes.tab, mode === 'palette' ? classes.activeTab : '']"
          @click="setMode('palette')"
        >
          预设颜色
        </button>
      </div>

      <!-- 颜色选择器模式 -->
      <div v-if="mode === 'picker'">
        <!-- 饱和度和亮度选择区域 -->
        <div
          ref="saturationRef"
          :class="classes.saturation"
          :style="saturationStyle"
          @mousedown="(event) => handleMouseDown(event, 'saturation')"
          v-bind="{ ...pt?.saturation }"
        >
          <!-- 白色到透明的渐变 -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-white to-transparent"
          />
          <!-- 透明到黑色的渐变 -->
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          />
          <!-- 指示器 -->
          <div :class="classes.saturationThumb" :style="saturationThumbStyle" />
        </div>

        <!-- 色相滑块 -->
        <div
          ref="hueRef"
          :class="classes.hue"
          @mousedown="(event) => handleMouseDown(event, 'hue')"
          style="
            background: linear-gradient(
              to right,
              #f00,
              #ff0,
              #0f0,
              #0ff,
              #00f,
              #f0f,
              #f00
            );
          "
          v-bind="{ ...pt?.hue }"
        >
          <div :class="classes.hueThumb" :style="hueThumbStyle" />
        </div>

        <!-- 透明度滑块 -->
        <div
          v-if="showAlpha"
          ref="alphaRef"
          :class="classes.alpha"
          @mousedown="(event) => handleMouseDown(event, 'alpha')"
          v-bind="{ ...pt?.alpha }"
        >
          <div :class="classes.alphaOverlay" :style="alphaStyle" />
          <div :class="classes.alphaThumb" :style="alphaThumbStyle" />
        </div>

        <!-- 颜色值输入 -->
        <div v-if="showInput" class="mt-2">
          <input
            type="text"
            :class="classes.input"
            :value="inputValue"
            :disabled="disabled"
            @input="handleInputChange"
            v-bind="{ ...pt?.input }"
          />
        </div>
      </div>

      <!-- 预设颜色模式 -->
      <div v-else>
        <div :class="classes.presets" v-bind="{ ...pt?.presets }">
          <div
            v-for="(color, index) in presets"
            :key="index"
            :class="classes.preset"
            :style="{ backgroundColor: color }"
            @click="handlePresetClick(color)"
          />
        </div>
      </div>

      <!-- 底部区域 -->
      <div v-if="$slots.footer" :class="classes.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
