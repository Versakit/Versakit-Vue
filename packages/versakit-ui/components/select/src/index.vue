<script setup lang="ts">
import { computed, ref, watch, onUnmounted } from 'vue'
import { select, selectOption, selectOptions } from './index.variants'
import type {
  SelectProps,
  SelectPassThroughAttributes,
  SelectOption,
} from './type'

const props = withDefaults(
  defineProps<SelectProps & { pt?: SelectPassThroughAttributes }>(),
  {
    variant: 'default',
    size: 'md',
    disabled: false,
    loading: false,
    placeholder: '请选择',
    multiple: false,
    searchable: false,
    clearable: false,
    unstyled: false,
  },
)

const emit = defineEmits([
  'update:modelValue',
  'change',
  'search',
  'clear',
  'focus',
  'blur',
])

// 内部状态
const isOpen = ref(false)
const searchQuery = ref('')
const selectedIndex = ref(0)
const triggerRef = ref<HTMLDivElement | null>(null)

// 计算样式
const classes = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return select({
    variant: props.variant,
    size: props.size,
    disabled: props.disabled,
    loading: props.loading,
    multiple: props.multiple,
  })
})

// 计算选项样式
const optionsClasses = computed(() => {
  if (props.unstyled) {
    return {}
  }

  return selectOptions()
})

// 计算选项样式
const getOptionClasses = (option: SelectOption, isActive: boolean) => {
  if (props.unstyled) {
    return {}
  }

  return selectOption({
    active: isActive,
    disabled: option.disabled,
  })
}

// 计算过滤后的选项
const filteredOptions = computed(() => {
  if (!props.searchable || !searchQuery.value) {
    return props.options || []
  }

  return (props.options || []).filter((option) =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// 选中的标签文本
const selectedLabel = computed(() => {
  if (!props.modelValue) {
    return ''
  }

  if (props.multiple && Array.isArray(props.modelValue)) {
    const selectedOptions = (props.options || []).filter(
      (option) =>
        Array.isArray(props.modelValue) &&
        props.modelValue.includes(option.value),
    )
    return selectedOptions.map((option) => option.label).join(', ')
  } else {
    const selectedOption = (props.options || []).find(
      (option) => option.value === props.modelValue,
    )
    return selectedOption?.label || ''
  }
})

// 处理选项点击
const handleOptionClick = (option: SelectOption) => {
  if (option.disabled) return

  if (props.multiple && Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue]
    const index = newValue.indexOf(option.value)

    if (index > -1) {
      newValue.splice(index, 1)
    } else {
      newValue.push(option.value)
    }

    emit('update:modelValue', newValue)
    emit('change', newValue)
  } else {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

// 清除选中值
const clearSelection = () => {
  if (props.disabled || props.loading) return

  emit('update:modelValue', props.multiple ? [] : null)
  emit('clear')
}

// 处理搜索
const handleSearch = (e: Event) => {
  const target = e.target as HTMLInputElement
  searchQuery.value = target.value
  emit('search', searchQuery.value)
}

// 处理点击外部关闭
const handleClickOutside = (e: Event) => {
  if (
    isOpen.value &&
    triggerRef.value &&
    !triggerRef.value.contains(e.target as Node)
  ) {
    isOpen.value = false
  }
}

// 处理焦点事件
const handleFocus = () => {
  if (props.disabled || props.loading) return
  emit('focus')
}

const handleBlur = () => {
  emit('blur')
}

// 键盘导航
const handleKeyDown = (e: KeyboardEvent) => {
  if (props.disabled || props.loading) return

  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    isOpen.value = !isOpen.value
  } else if (e.key === 'Escape') {
    isOpen.value = false
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (isOpen.value) {
      selectedIndex.value =
        (selectedIndex.value + 1) % filteredOptions.value.length
    } else {
      isOpen.value = true
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (isOpen.value) {
      selectedIndex.value =
        (selectedIndex.value - 1 + filteredOptions.value.length) %
        filteredOptions.value.length
    } else {
      isOpen.value = true
    }
  }
}

// 监听组件外点击
watch(isOpen, (val) => {
  if (val) {
    setTimeout(() => {
      window.addEventListener('click', handleClickOutside)
    }, 0)
  } else {
    window.removeEventListener('click', handleClickOutside)
  }
})

// 组件卸载时清理事件监听
onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="triggerRef"
    :class="classes"
    :aria-disabled="disabled"
    :aria-busy="loading"
    :aria-label="ariaLabel"
    :tabindex="disabled ? -1 : 0"
    role="combobox"
    aria-haspopup="listbox"
    :aria-expanded="isOpen"
    @keydown="handleKeyDown"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="isOpen = !isOpen"
    v-bind="{ ...$attrs, ...props.pt?.root }"
  >
    <!-- 前缀图标 -->
    <slot name="prefix" v-if="$slots.prefix"></slot>

    <!-- 选中值/占位符显示 -->
    <div class="flex-1">
      <slot
        name="selected"
        :value="modelValue"
        v-if="$slots.selected && modelValue"
      ></slot>
      <span v-else-if="selectedLabel" class="truncate">
        {{ selectedLabel }}
      </span>
      <span v-else class="text-muted-foreground">{{ placeholder }}</span>
    </div>

    <!-- 搜索输入框 -->
    <input
      v-if="searchable && isOpen"
      type="text"
      class="absolute inset-0 h-full w-full bg-transparent px-3 py-2 outline-none"
      v-model="searchQuery"
      @input="handleSearch"
      @click.stop
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <!-- 加载状态 -->
    <slot name="loading" v-if="loading">
      <svg
        class="h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </slot>

    <!-- 清除按钮 -->
    <button
      v-if="clearable && modelValue && !loading"
      type="button"
      class="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-400 dark:hover:text-gray-300"
      @click.stop="clearSelection"
      aria-label="清除选择"
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

    <!-- 下拉箭头 -->
    <slot name="suffix" v-if="$slots.suffix"></slot>
    <svg
      v-else
      class="h-4 w-4 opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>

    <!-- 选项列表 -->
    <div
      v-if="isOpen"
      :class="optionsClasses"
      class="absolute left-0 top-full mt-1 max-h-60 w-full overflow-auto"
      role="listbox"
      v-bind="props.pt?.options"
    >
      <div
        v-if="filteredOptions.length === 0"
        class="px-2 py-4 text-center text-sm"
        v-bind="props.pt?.empty"
      >
        <slot name="empty">无匹配选项</slot>
      </div>

      <template v-else>
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="
            getOptionClasses(
              option,
              multiple
                ? Array.isArray(modelValue) && modelValue.includes(option.value)
                : modelValue === option.value,
            )
          "
          role="option"
          :aria-selected="
            multiple
              ? Array.isArray(modelValue) && modelValue.includes(option.value)
              : modelValue === option.value
          "
          :data-highlighted="selectedIndex === index"
          :data-disabled="option.disabled"
          @click.stop="handleOptionClick(option)"
          v-bind="props.pt?.option"
        >
          <slot name="option" :option="option">
            <span>{{ option.label }}</span>

            <!-- 多选时的选中标记 -->
            <svg
              v-if="
                multiple &&
                Array.isArray(modelValue) &&
                modelValue.includes(option.value)
              "
              class="ml-auto h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </slot>
        </div>
      </template>
    </div>
  </div>
</template>
