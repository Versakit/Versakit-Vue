<template>
  <div>
    <!-- Tab List -->
    <div role="tablist" class="tabs-list" @keydown="onKeyDown">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        :ref="(el) => registerTab(el, i)"
        :class="[
          'tab-button',
          selectedIndex === i ? 'tab-button-active' : 'tab-button-inactive',
        ]"
        role="tab"
        :aria-selected="selectedIndex === i"
        @click="() => select(i)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab Panels -->
    <div class="tabs-panels">
      <div
        v-for="(panel, i) in panels"
        :key="i"
        v-show="selectedIndex === i"
        role="tabpanel"
        class="tab-panel"
      >
        {{ panel }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTabs } from '@versakit/vue'

const tabs = ['选项一', '选项二', '选项三']
const panels = ['内容一', '内容二', '内容三']

const { selectedIndex, select, registerTab, onKeyDown } = useTabs()
</script>

<style scoped>
.tabs-list {
  display: flex;
  gap: 0.5rem;
}

.tab-button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}

.tab-button-active {
  background-color: #3b82f6;
}

.tab-button-inactive {
  color: #000;
  background-color: #f3f4f6;
}

.tabs-panels {
  margin-top: 1rem;
}
</style>
