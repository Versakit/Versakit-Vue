<template>
  <div :class="ptClasses.root">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch, computed } from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from '../type/index'
import { collapseContextKey } from '../type/index'
import { getPtClasses } from '@versakit/shared'

defineOptions({
  name: 'VerCollapse',
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)

watch(
  () => props.modelValue,
  () => {
    activeNames.value = props.modelValue
  },
)

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item')
}

const handleItemClick = (item: NameType) => {
  let _activeNames = [...activeNames.value]
  if (props.accordion) {
    _activeNames = [activeNames.value[0] === item ? '' : item]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      _activeNames.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      _activeNames.push(item)
    }
    activeNames.value = _activeNames
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}

// 无头化处理
const ptClasses = computed(() => {
  if (props.unstyled) {
    return {
      root: getPtClasses(props.pt, 'root'),
    }
  }
  return {
    root: 'vk-collapse',
  }
})

provide(collapseContextKey, {
  activeNames,
  handleItemClick,
})
</script>

<style>
@import '../style/index.css';
</style>
