<template>
  <div :class="classes.base()">
    <!-- 标签 -->
    <label v-if="label" :class="classes.label()">
      {{ label }}
    </label>

    <!-- 主体包装器 -->
    <div :class="classes.mainWrapper()">
      <!-- 触发器 -->
      <button
        ref="triggerRef"
        :class="classes.trigger()"
        type="button"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-required="isRequired"
        :aria-label="label"
        :disabled="disabled"
        :data-open="isOpen"
        :data-disabled="disabled"
        :data-focus="isFocused"
        :data-invalid="isInvalid"
        @click="toggleDropdown"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeyDown"
      >
        <!-- 内部包装器 -->
        <div :class="classes.innerWrapper()">
          <!-- 左侧内容 -->
          <slot name="startContent">
            <span v-if="startContent">{{ startContent }}</span>
          </slot>

          <!-- 值显示区域 -->
          <div :class="classes.value()">
            <template v-if="selectedItems.length > 0">
              <slot name="value" :selected="selectedItems">
                <template v-if="customRenderValue">
                  {{ customRenderValue }}
                </template>
                <template v-else-if="selectionMode === 'multiple'">
                  <div
                    v-for="item in selectedItems"
                    :key="item.key"
                    class="inline-flex items-center bg-primary-100 text-primary-700 px-2 py-0.5 rounded-md text-sm mr-1 mb-1"
                  >
                    {{ item.label }}
                    <button
                      v-if="!disabled && isClearable"
                      type="button"
                      class="ml-1 text-primary-500 hover:text-primary-700"
                      @click.stop="removeItem(item.key)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </template>
                <template v-else>
                  {{ selectedItems[0]?.label }}
                </template>
              </slot>
            </template>
            <template v-else>
              <span class="text-muted-foreground">{{ placeholder }}</span>
            </template>
          </div>

          <!-- 右侧内容 -->
          <slot name="endContent">
            <span v-if="endContent">{{ endContent }}</span>
          </slot>
        </div>

        <!-- 清除按钮 -->
        <button
          v-if="isClearable && selectedItems.length > 0 && !disabled"
          type="button"
          class="ml-2 text-default-400 hover:text-default-600"
          @click.stop="clearSelection"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- 选择器图标 -->
        <slot name="selectorIcon">
          <span :class="classes.selectorIcon()" :data-open="isOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              :style="
                !disableSelectorIconRotation ? undefined : { transform: 'none' }
              "
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </slot>
      </button>

      <!-- 下拉菜单 -->
      <div
        v-if="isOpen"
        ref="popoverRef"
        :class="classes.popoverContent()"
        role="listbox"
        :aria-multiselectable="selectionMode === 'multiple'"
      >
        <div :class="classes.listboxWrapper()">
          <div :class="classes.listbox()" :data-empty="!childItems.length">
            <!-- 搜索框 -->
            <input
              v-if="isFilterable"
              ref="searchInputRef"
              type="text"
              class="w-full px-3 py-2 border-b border-default-100 mb-1 text-sm outline-none"
              v-model="searchQuery"
              placeholder="搜索..."
              @click.stop
              @keydown.stop
            />

            <!-- 选项列表 -->
            <template v-if="childItems.length">
              <slot></slot>
            </template>
            <template v-else>
              <div class="py-2 px-3 text-center text-sm text-muted-foreground">
                {{ noMatchText || '无匹配选项' }}
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- 辅助信息 -->
      <div v-if="description || errorMessage" :class="classes.helperWrapper()">
        <div v-if="description && !isInvalid" :class="classes.description()">
          {{ description }}
        </div>
        <div v-if="errorMessage && isInvalid" :class="classes.errorMessage()">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  provide,
  ref,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  getCurrentInstance,
} from 'vue'
import { selectStyles } from './index.variants'
import type { SelectProps, SelectItem } from './type'

defineOptions({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Select',
})

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: '请选择',
  disabled: false,
  selectionMode: 'single',
  size: 'md',
  color: 'default',
  variant: 'bordered',
  radius: 'md',
  labelPlacement: 'inside',
  isInvalid: false,
  isRequired: false,
  isClearable: false,
  isFilterable: false,
  maxDropdownHeight: 256,
  disableSelectorIconRotation: false,
  showScrollIndicators: true,
  noMatchText: '无匹配选项',
})

const emit = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'blur',
  'open-change',
])

// 状态
const isOpen = ref(false)
const isFocused = ref(false)
const searchQuery = ref('')
const selectedKeys = ref(new Set<string>())
const selectedItems = ref<SelectItem[]>([])
const childItems = ref<SelectItem[]>([])
const instance = getCurrentInstance()

// 引用
const triggerRef = ref<HTMLElement | null>(null)
const popoverRef = ref<HTMLElement | null>(null)
const searchInputRef = ref<HTMLInputElement | null>(null)

// 计算属性
const isMultiple = computed(() => props.selectionMode === 'multiple')

const customRenderValue = computed(() => {
  if (props.renderValue && selectedItems.value.length > 0) {
    return props.renderValue(selectedItems.value)
  }
  return null
})

// 处理选中项
const updateSelectedFromModelValue = () => {
  const value = props.modelValue

  if (value === undefined || value === null) {
    selectedKeys.value = new Set()
    selectedItems.value = []
    return
  }

  if (isMultiple.value) {
    const values = Array.isArray(value) ? value : [value]
    selectedKeys.value = new Set(values.map(String))
  } else {
    selectedKeys.value = new Set([String(value)])
  }

  updateSelectedItems()
}

const updateSelectedItems = () => {
  selectedItems.value = childItems.value.filter((item) =>
    selectedKeys.value.has(String(item.key)),
  )
}

// 注册子项
const registerItem = (item: SelectItem) => {
  const existingIndex = childItems.value.findIndex((i) => i.key === item.key)
  if (existingIndex >= 0) {
    childItems.value[existingIndex] = item
  } else {
    childItems.value.push(item)
  }
  updateSelectedItems()
}

const unregisterItem = (key: string) => {
  childItems.value = childItems.value.filter((item) => item.key !== key)
  updateSelectedItems()
}

// 选择项
const selectItem = (key: string) => {
  if (props.disabled) return

  if (isMultiple.value) {
    const newKeys = new Set(selectedKeys.value)
    if (newKeys.has(key)) {
      newKeys.delete(key)
    } else {
      newKeys.add(key)
    }
    selectedKeys.value = newKeys
  } else {
    selectedKeys.value = new Set([key])
    closeDropdown()
  }

  updateSelectedItems()
  emitChange()
}

const removeItem = (key: string) => {
  if (props.disabled) return

  const newKeys = new Set(selectedKeys.value)
  newKeys.delete(key)
  selectedKeys.value = newKeys

  updateSelectedItems()
  emitChange()
}

const clearSelection = (e?: Event) => {
  if (e) e.stopPropagation()
  if (props.disabled) return

  selectedKeys.value = new Set()
  selectedItems.value = []
  emitChange()
}

const emitChange = () => {
  let value

  if (isMultiple.value) {
    value = Array.from(selectedKeys.value)
  } else {
    value = Array.from(selectedKeys.value)[0] || null
  }

  emit('update:modelValue', value)
  emit('change', value)
}

// 下拉菜单控制
const toggleDropdown = () => {
  if (props.disabled) return

  isOpen.value = !isOpen.value
  emit('open-change', isOpen.value)

  if (isOpen.value && props.isFilterable) {
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  }
}

const openDropdown = () => {
  if (!isOpen.value && !props.disabled) {
    isOpen.value = true
    emit('open-change', true)

    if (props.isFilterable) {
      nextTick(() => {
        searchInputRef.value?.focus()
      })
    }
  }
}

const closeDropdown = () => {
  if (isOpen.value) {
    isOpen.value = false
    searchQuery.value = ''
    emit('open-change', false)
  }
}

// 事件处理
const handleFocus = () => {
  isFocused.value = true
  emit('focus')
}

const handleBlur = () => {
  isFocused.value = false
  emit('blur')
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.disabled) return

  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault()
      toggleDropdown()
      break
    case 'Escape':
      e.preventDefault()
      closeDropdown()
      break
    case 'Tab':
      closeDropdown()
      break
    case 'ArrowDown':
      e.preventDefault()
      openDropdown()
      break
  }
}

const handleClickOutside = (e: MouseEvent) => {
  if (
    isOpen.value &&
    triggerRef.value &&
    popoverRef.value &&
    !triggerRef.value.contains(e.target as Node) &&
    !popoverRef.value.contains(e.target as Node)
  ) {
    closeDropdown()
  }
}

// 监听器
watch(() => props.modelValue, updateSelectedFromModelValue, { immediate: true })

watch(isOpen, (value) => {
  if (value) {
    document.addEventListener('mousedown', handleClickOutside)
  } else {
    document.removeEventListener('mousedown', handleClickOutside)
  }
})

// 生命周期
onBeforeMount(() => {
  // 在组件挂载前扫描子组件
  if (instance && instance.slots.default) {
    const scanChildren = () => {
      // 这里会在渲染后由子组件自行注册
      console.log('准备接收子组件注册')
    }
    scanChildren()
  }
})

onMounted(() => {
  updateSelectedFromModelValue()
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

// 对外提供的状态和方法
provide('selectedKeys', selectedKeys)
provide(
  'selectionMode',
  computed(() => props.selectionMode),
)
provide('onSelectItem', selectItem)
provide('registerItem', registerItem)
provide('unregisterItem', unregisterItem)
provide('searchQuery', searchQuery)

// 组件样式
const classes = computed(() =>
  selectStyles({
    size: props.size,
    color: props.color,
    variant: props.variant,
    radius: props.radius,
    labelPlacement: props.labelPlacement,
    isDisabled: props.disabled,
    isInvalid: props.isInvalid,
    isRequired: props.isRequired,
    isMultiline: isMultiple.value,
  }),
).value

// 对外暴露方法
defineExpose({
  open: openDropdown,
  close: closeDropdown,
  clear: clearSelection,
})
</script>
