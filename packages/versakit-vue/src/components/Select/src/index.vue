<template>
  <div :class="getStyles.root">
    <!-- 标签 -->
    <label
      v-if="props.showLabel && props.label"
      :class="
        props.pt?.label ||
        'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
      "
    >
      {{ props.label }}
      <span v-if="props.required" class="text-red-500">*</span>
    </label>

    <!-- 选择器触发区域 -->
    <div
      ref="triggerRef"
      :class="getStyles.trigger"
      @click="!props.disabled && !props.readonly && toggleDropdown()"
      @keydown="onKeyDown"
      tabindex="0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="props.disabled"
      :aria-readonly="props.readonly"
      :aria-required="props.required"
      :aria-haspopup="true"
      :aria-controls="dropdownId"
    >
      <!-- 选择器内容 -->
      <div :class="getStyles.value">
        <!-- 多选模式 -->
        <div
          v-if="props.multiple && selectedOptions.length"
          class="flex flex-wrap gap-1"
        >
          <div
            v-for="option in selectedOptions"
            :key="option.value"
            :class="getStyles.tag"
          >
            <span class="truncate">{{ option.label }}</span>
            <button
              v-if="!props.disabled && !props.readonly"
              type="button"
              :class="getStyles.tagRemove"
              @click.stop="selectOption(option)"
              aria-label="移除"
            >
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- 单选模式 -->
        <div v-else-if="selectedOptions.length" class="truncate">
          {{ getOptionLabel }}
        </div>

        <!-- 占位符 -->
        <div v-else :class="getStyles.placeholder">
          {{ props.placeholder }}
        </div>
      </div>

      <!-- 操作图标 -->
      <div class="flex items-center">
        <!-- 清除按钮 -->
        <button
          v-if="
            props.clearable &&
            selectedValues.length &&
            !props.disabled &&
            !props.readonly
          "
          type="button"
          :class="getStyles.clearIcon"
          @click.stop="clearSelection"
          aria-label="清除选择"
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- 下拉指示器 -->
        <div :class="getStyles.icon">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            :style="{ transform: isOpen ? 'rotate(180deg)' : undefined }"
            class="transition-transform duration-200"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <!-- 下拉菜单 -->
    <Transition name="versa-select-dropdown">
      <div
        v-if="isOpen"
        ref="dropdownRef"
        :id="dropdownId"
        :class="getStyles.dropdown"
        :style="{ maxHeight: `${props.maxDropdownHeight}px` }"
        role="listbox"
        :aria-multiselectable="props.multiple"
      >
        <!-- 搜索框 -->
        <div v-if="props.filterable" class="sticky top-0">
          <input
            ref="searchInputRef"
            :class="getStyles.search"
            type="text"
            :value="searchValue"
            @input="onInputSearch"
            placeholder="搜索..."
            @keydown.stop
          />
        </div>

        <!-- 选项列表 -->
        <div>
          <!-- 无分组选项 -->
          <template v-if="!hasGroups">
            <template v-if="filteredOptions.length">
              <div
                v-for="(option, index) in filteredOptions"
                :key="option.value"
                :class="[
                  getStyles.option,
                  {
                    [getStyles.optionSelected]: isSelected(option.value),
                    [getStyles.optionActive]: activeIndex === index,
                    [getStyles.optionDisabled]: option.disabled,
                  },
                ]"
                @click.stop="!option.disabled && selectOption(option)"
                role="option"
                :aria-selected="isSelected(option.value)"
                :aria-disabled="option.disabled"
              >
                {{ option.label }}
                <svg
                  v-if="isSelected(option.value)"
                  :class="getStyles.checkIcon"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </template>
            <div v-else :class="getStyles.noMatch">
              {{ props.noMatchText }}
            </div>
          </template>

          <!-- 分组选项 -->
          <template v-else>
            <!-- 无分组选项 -->
            <template v-if="groupedOptions.noGroup.length">
              <div
                v-for="(option, index) in groupedOptions.noGroup"
                :key="option.value"
                :class="[
                  getStyles.option,
                  {
                    [getStyles.optionSelected]: isSelected(option.value),
                    [getStyles.optionActive]: activeIndex === index,
                    [getStyles.optionDisabled]: option.disabled,
                  },
                ]"
                @click.stop="!option.disabled && selectOption(option)"
                role="option"
                :aria-selected="isSelected(option.value)"
                :aria-disabled="option.disabled"
              >
                {{ option.label }}
                <svg
                  v-if="isSelected(option.value)"
                  :class="getStyles.checkIcon"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </template>

            <!-- 分组选项 -->
            <template
              v-for="(group, groupName) in groupedOptions.groups"
              :key="groupName"
            >
              <div
                class="px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400"
              >
                {{ groupName }}
              </div>
              <div
                v-for="(option, index) in group"
                :key="option.value"
                :class="[
                  getStyles.option,
                  'pl-5',
                  {
                    [getStyles.optionSelected]: isSelected(option.value),
                    [getStyles.optionActive]:
                      getGlobalIndex(groupName, index) === activeIndex,
                    [getStyles.optionDisabled]: option.disabled,
                  },
                ]"
                @click.stop="!option.disabled && selectOption(option)"
                role="option"
                :aria-selected="isSelected(option.value)"
                :aria-disabled="option.disabled"
              >
                {{ option.label }}
                <svg
                  v-if="isSelected(option.value)"
                  :class="getStyles.checkIcon"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </template>
          </template>
        </div>
      </div>
    </Transition>

    <!-- 帮助文本 -->
    <div
      v-if="props.helpText && !props.errorText"
      class="mt-1 text-xs text-gray-500 dark:text-gray-400"
    >
      {{ props.helpText }}
    </div>

    <!-- 错误文本 -->
    <div v-if="props.errorText" class="mt-1 text-xs text-red-500">
      {{ props.errorText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from 'vue'
import { useSelect } from './composables/useSelect'
import type { SelectProps } from './type'
import { selectStyle } from './index.variants'

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
  maxDropdownHeight: 250,
  showLabel: false,
  required: false,
  unstyled: false,
})

const emit = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'blur',
  'clear',
  'search',
  'dropdown-visible-change',
  'option-select',
])

// 应用样式
const styles = selectStyle()

// 创建样式计算属性
const getStyles = computed(() => {
  if (props.unstyled) {
    return {
      root: props.pt?.root || '',
      trigger: props.pt?.trigger || '',
      value: props.pt?.value || '',
      placeholder: props.pt?.placeholder || '',
      dropdown: props.pt?.dropdown || '',
      option: props.pt?.option || '',
      optionSelected: props.pt?.optionSelected || '',
      optionActive: props.pt?.optionActive || '',
      optionDisabled: props.pt?.optionDisabled || '',
      icon: props.pt?.icon || '',
      clearIcon: props.pt?.clearIcon || '',
      checkIcon: props.pt?.checkIcon || '',
      search: props.pt?.search || '',
      tag: props.pt?.tag || '',
      tagRemove: props.pt?.tagRemove || '',
      noMatch: props.pt?.noMatch || '',
      label: props.pt?.label || '',
    }
  }

  // 使用 tailwind-variants 并合并自定义类
  return {
    root: styles.root({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
      multiple: props.multiple,
      open: isOpen.value,
      class: props.pt?.root,
    }),
    trigger: styles.trigger({
      size: props.size,
      status: props.status,
      disabled: props.disabled,
      multiple: props.multiple,
      open: isOpen.value,
      class: props.pt?.trigger,
    }),
    value: styles.value({
      multiple: props.multiple,
      class: props.pt?.value,
    }),
    placeholder: styles.placeholder({ class: props.pt?.placeholder }),
    dropdown: styles.dropdown({ class: props.pt?.dropdown }),
    option: styles.option({ class: props.pt?.option }),
    optionSelected: styles.optionSelected({ class: props.pt?.optionSelected }),
    optionActive: styles.optionActive({ class: props.pt?.optionActive }),
    optionDisabled: styles.optionDisabled({ class: props.pt?.optionDisabled }),
    icon: styles.icon({ class: props.pt?.icon }),
    clearIcon: styles.clearIcon({ class: props.pt?.clearIcon }),
    checkIcon: styles.checkIcon({ class: props.pt?.checkIcon }),
    search: styles.search({ class: props.pt?.search }),
    tag: styles.tag({ class: props.pt?.tag }),
    tagRemove: styles.tagRemove({ class: props.pt?.tagRemove }),
    noMatch: styles.noMatch({ class: props.pt?.noMatch }),
  }
})

// 生成唯一ID
const dropdownId = `versa-select-dropdown-${Math.random().toString(36).substring(2, 9)}`
const searchInputRef = ref<HTMLInputElement | null>(null)

// 使用组合式函数
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
  groupedOptions,
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
    if (val === undefined || (Array.isArray(val) && val.length === 0)) {
      emit('clear')
    }
  },
  onSearch: (val) => {
    emit('search', val)
  },
  onDropdownVisibleChange: (visible) => {
    emit('dropdown-visible-change', visible)

    // 当下拉框打开时，聚焦到搜索框
    if (visible && props.filterable) {
      setTimeout(() => {
        searchInputRef.value?.focus()
      }, 0)
    }
  },
})

// 判断是否有分组
const hasGroups = computed(() => {
  return Object.keys(groupedOptions.value.groups).length > 0
})

// 获取全局索引（用于键盘导航）
const getGlobalIndex = (group: string | null, localIndex: number) => {
  let globalIndex = 0

  // 先计算无分组选项的索引
  if (group === null) {
    return localIndex
  }

  // 加上无分组选项的数量
  globalIndex += groupedOptions.value.noGroup.length

  // 计算当前分组前面的分组选项数量
  const groupNames = Object.keys(groupedOptions.value.groups)
  for (let i = 0; i < groupNames.length; i++) {
    const currentGroup = groupNames[i]
    if (currentGroup === group) {
      // 找到目标分组，加上当前索引
      return globalIndex + localIndex
    }
    // 加上这个分组的选项数量
    globalIndex += groupedOptions.value.groups[currentGroup].length
  }

  return -1
}

// 搜索输入处理
const onInputSearch = (e: Event) => {
  onSearchInput((e.target as HTMLInputElement).value)
}

// 组件卸载时清理事件监听
onBeforeUnmount(() => {
  cleanup()
})

// 对外暴露方法
defineExpose({
  open: openDropdown,
  close: closeDropdown,
  clear: clearSelection,
})
</script>

<style>
/* 基础样式通过 tailwind 类提供 */
/* 这里只添加必要的过渡效果 */
.versa-select-dropdown-enter-active,
.versa-select-dropdown-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.versa-select-dropdown-enter-from,
.versa-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
