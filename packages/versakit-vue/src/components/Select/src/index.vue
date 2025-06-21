<template>
  <div :class="classes.root()" @keydown="onKeyDown" tabindex="0">
    <!-- 触发器 -->
    <div
      ref="triggerRef"
      :class="[
        classes.trigger(),
        props.disabled && 'cursor-not-allowed',
        props.readonly && 'cursor-default',
      ]"
      @click="!props.disabled && !props.readonly && toggleDropdown()"
      @focus="onFocus"
    >
      <!-- 值显示区域 -->
      <div :class="classes.value()">
        <template v-if="selectedValues.length">
          <!-- 多选模式 -->
          <template v-if="props.multiple">
            <div
              v-for="option in selectedOptions"
              :key="option.value"
              :class="classes.tag()"
            >
              {{ option.label }}
              <span
                v-if="!props.disabled && !props.readonly"
                :class="classes.tagRemove()"
                @click.stop="removeOption(option)"
              >
                ✕
              </span>
            </div>
          </template>
          <!-- 单选模式 -->
          <template v-else>
            {{ getOptionLabel }}
          </template>
        </template>
        <!-- 占位符 -->
        <span v-else :class="classes.placeholder()">
          {{ props.placeholder }}
        </span>
      </div>

      <!-- 清除按钮 -->
      <div
        v-if="
          props.clearable &&
          selectedValues.length &&
          !props.disabled &&
          !props.readonly
        "
        :class="classes.clearIcon()"
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
      </div>

      <!-- 下拉箭头 -->
      <div :class="classes.icon()">
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
          :class="{ 'rotate-180': isOpen }"
          class="transition-transform"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>

    <!-- 下拉菜单 -->
    <div v-if="isOpen" ref="dropdownRef" :class="classes.dropdown()">
      <!-- 搜索框 -->
      <input
        v-if="props.filterable"
        :class="classes.search()"
        v-model="searchValue"
        @input="onInputSearch"
        placeholder="搜索"
        @keydown.stop
      />

      <!-- 选项列表 -->
      <template v-if="filteredOptions.length">
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="[
            classes.option(),
            isSelected(option.value) && classes.optionSelected(),
            activeIndex === index && classes.optionActive(),
            option.disabled && classes.optionDisabled(),
          ]"
          @click.stop="selectOption(option)"
        >
          {{ option.label }}
          <!-- 选中标记 -->
          <svg
            v-if="isSelected(option.value)"
            :class="classes.checkIcon()"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </template>
      <!-- 无匹配 -->
      <div v-else :class="classes.noMatch()">
        {{ props.noMatchText || '无匹配数据' }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue'
import { selectStyle } from './index.variants'
import { useSelect } from './composables/useSelect'
import type { SelectProps, SelectOption } from './type'

defineOptions({
  name: 'VersaSelect',
})

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: '请选择',
  disabled: false,
  readonly: false,
  multiple: false,
  size: 'default',
  options: () => [],
  clearable: false,
  filterable: false,
  noMatchText: '无匹配数据',
})

const emit = defineEmits(['update:modelValue', 'change', 'focus', 'blur'])

const {
  isOpen,
  searchValue,
  activeIndex,
  triggerRef,
  dropdownRef,
  selectedValues,
  selectedOptions,
  getOptionLabel,
  filteredOptions,
  selectOption,
  clearSelection,
  toggleDropdown,
  openDropdown,
  closeDropdown,
  isSelected,
  onKeyDown,
  onSearchInput,
  cleanup,
} = useSelect({
  modelValue: props.modelValue,
  options: props.options,
  multiple: props.multiple,
  filterable: props.filterable,
  disabled: props.disabled,
  readonly: props.readonly,
  onChange: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 移除某个选项（多选模式）
const removeOption = (option: SelectOption) => {
  if (props.disabled || props.readonly) return
  selectOption(option)
}

// 搜索输入
const onInputSearch = (e: Event) => {
  onSearchInput((e.target as HTMLInputElement).value)
}

// 焦点处理
const onFocus = () => {
  emit('focus')
}

const classes = computed(() =>
  selectStyle({
    size: props.size,
    status: props.status,
    disabled: props.disabled,
    multiple: props.multiple,
    open: isOpen.value,
  }),
).value

// 组件销毁前清理事件监听
onBeforeUnmount(() => {
  cleanup()
})

// 对外暴露方法
defineExpose({
  open: openDropdown,
  close: closeDropdown,
})
</script>
