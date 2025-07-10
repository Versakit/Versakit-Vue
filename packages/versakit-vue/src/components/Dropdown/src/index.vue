<template>
  <div :class="styles.root">
    <!-- 触发器 -->
    <div
      ref="triggerRef"
      :class="styles.trigger"
      @click="trigger === 'click' && toggle()"
      @mouseenter="trigger === 'hover' && show()"
      @mouseleave="trigger === 'hover' && hide()"
      @focus="trigger === 'focus' && show()"
      @blur="trigger === 'focus' && hide()"
      @keydown.esc="hide"
      @keydown.space.prevent="trigger === 'click' && toggle()"
      @keydown.enter="trigger === 'click' && toggle()"
      tabindex="0"
      role="button"
      :aria-haspopup="true"
      :aria-expanded="isVisible"
      :aria-controls="dropdownId"
    >
      <slot name="trigger" />
    </div>

    <!-- 下拉菜单内容 -->
    <Transition name="dropdown">
      <div
        v-if="isVisible"
        ref="contentRef"
        :id="dropdownId"
        :class="styles.content"
        @mouseenter="trigger === 'hover' && show()"
        @mouseleave="trigger === 'hover' && hide()"
        role="menu"
      >
        <!-- 箭头 -->
        <div v-if="arrow" :class="styles.arrow"></div>

        <!-- 菜单容器 -->
        <div :class="styles.menu">
          <!-- 使用options属性渲染选项 -->
          <template v-if="options && options.length">
            <template v-for="(option, index) in options" :key="index">
              <!-- 分割线 -->
              <div
                v-if="option.divider"
                :class="styles.menuDivider"
                role="separator"
              ></div>

              <!-- 选项 -->
              <div
                v-else
                :class="[
                  styles.menuItem,
                  option.disabled && styles.menuItemDisabled,
                ]"
                @click="!option.disabled && handleOptionClick(option, $event)"
                role="menuitem"
                :aria-disabled="option.disabled"
              >
                <!-- 图标 -->
                <span v-if="option.icon" :class="styles.menuItemIcon">
                  {{ option.icon }}
                </span>

                <!-- 标签 -->
                <span>{{ option.label }}</span>
              </div>
            </template>
          </template>

          <!-- 默认插槽 -->
          <slot v-else></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { dropdownStyle } from './index.variants'
import type { DropdownProps } from './type'
import { DropdownEmits } from './type'
import { useDropdown } from './use-dropdown'

// 定义props和emits
const props = withDefaults(defineProps<DropdownProps>(), {
  visible: false,
  trigger: 'click',
  placement: 'bottom',
  disabled: false,
  size: 'md',
  arrow: false,
  showDelay: 100,
  hideDelay: 100,
  closeOnClickOutside: true,
  closeOnSelect: true,
  unstyled: false,
  options: () => [],
})

const emit = defineEmits(DropdownEmits)

// 使用dropdown hook
const {
  isVisible,
  triggerRef,
  contentRef,
  dropdownId,
  show,
  hide,
  toggle,
  handleItemClick,
  handleOptionClick,
} = useDropdown(props, emit)

// 计算样式
const styles = computed(() => {
  if (props.unstyled) {
    return {
      root: props.pt?.root || '',
      trigger: props.pt?.trigger || '',
      content: props.pt?.content || '',
      arrow: props.pt?.arrow || '',
      menu: props.pt?.menu || '',
      menuItem: props.pt?.menuItem || '',
      menuItemSelected: props.pt?.menuItemSelected || '',
      menuItemDisabled: props.pt?.menuItemDisabled || '',
      menuItemIcon: props.pt?.menuItemIcon || '',
      menuDivider: props.pt?.menuDivider || '',
    }
  }

  const {
    root,
    trigger,
    content,
    arrow,
    menu,
    menuItem,
    menuItemSelected,
    menuItemActive,
    menuItemDisabled,
    menuItemIcon,
    menuDivider,
  } = dropdownStyle({
    placement: props.placement,
    size: props.size,
    disabled: props.disabled,
  })

  return {
    root: root(),
    trigger: trigger(),
    content: content(),
    arrow: arrow(),
    menu: menu(),
    menuItem: menuItem(),
    menuItemSelected: menuItemSelected(),
    menuItemActive: menuItemActive(),
    menuItemDisabled: menuItemDisabled(),
    menuItemIcon: menuItemIcon(),
    menuDivider: menuDivider(),
  }
})

// 暴露方法
defineExpose({
  show,
  hide,
  toggle,
})

// 为子组件提供方法
provide('dropdown', {
  handleItemClick,
  closeOnSelect: props.closeOnSelect,
})
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
