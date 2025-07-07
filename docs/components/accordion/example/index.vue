<template>
  <div class="accordion-examples">
    <!-- 基础用法 -->
    <section class="example-section">
      <h3 class="example-title">基础用法</h3>
      <Accordion>
        <AccordionItem value="item-1" header="第一项">
          <p>这是第一项的内容区域。这里可以放置任何内容。</p>
        </AccordionItem>
        <AccordionItem value="item-2" header="第二项">
          <p>这是第二项的内容区域。点击标题可以折叠/展开内容。</p>
        </AccordionItem>
        <AccordionItem value="item-3" header="第三项">
          <p>这是第三项的内容区域。默认情况下，同一时间只能展开一个面板。</p>
        </AccordionItem>
      </Accordion>
    </section>

    <!-- 样式变体 -->
    <section class="example-section">
      <h3 class="example-title">样式变体</h3>
      <div class="example-row">
        <div class="example-item">
          <h4 class="example-subtitle">默认样式</h4>
          <Accordion variant="default">
            <AccordionItem value="item-1" header="默认样式">
              <p>这是默认样式的手风琴项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这是第二个项目。</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="example-item">
          <h4 class="example-subtitle">带边框样式</h4>
          <Accordion variant="bordered">
            <AccordionItem value="item-1" header="带边框样式">
              <p>这是带边框的手风琴项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这是第二个项目。</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="example-item">
          <h4 class="example-subtitle">阴影样式</h4>
          <Accordion variant="elevated">
            <AccordionItem value="item-1" header="阴影样式">
              <p>这是带阴影的手风琴项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这是第二个项目。</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    <!-- 多面板模式 -->
    <section class="example-section">
      <h3 class="example-title">多面板模式</h3>
      <div class="example-row">
        <div class="example-item">
          <h4 class="example-subtitle">单面板模式（默认）</h4>
          <Accordion>
            <AccordionItem value="item-1" header="第一项">
              <p>在单面板模式下，同一时间只能展开一个面板。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>打开此面板会自动关闭其他已打开的面板。</p>
            </AccordionItem>
            <AccordionItem value="item-3" header="第三项">
              <p>这样可以确保界面简洁清晰。</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="example-item">
          <h4 class="example-subtitle">多面板模式</h4>
          <Accordion multiple>
            <AccordionItem value="item-1" header="第一项">
              <p>在多面板模式下，可以同时展开多个面板。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这对于需要同时查看多个内容区域的场景很有用。</p>
            </AccordionItem>
            <AccordionItem value="item-3" header="第三项">
              <p>用户可以自由组合需要展示的内容。</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    <!-- 默认展开状态 -->
    <section class="example-section">
      <h3 class="example-title">默认展开状态</h3>
      <div class="example-row">
        <div class="example-item">
          <h4 class="example-subtitle">单项默认展开</h4>
          <Accordion v-model="singleExpanded">
            <AccordionItem value="item-1" header="默认关闭项">
              <p>这个面板默认是关闭的。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="默认展开项">
              <p>这个面板默认是展开的。</p>
            </AccordionItem>
            <AccordionItem value="item-3" header="默认关闭项">
              <p>这个面板默认是关闭的。</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="example-item">
          <h4 class="example-subtitle">多项默认展开</h4>
          <Accordion multiple v-model="multiExpanded">
            <AccordionItem value="item-1" header="默认展开项">
              <p>这个面板默认是展开的。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="默认关闭项">
              <p>这个面板默认是关闭的。</p>
            </AccordionItem>
            <AccordionItem value="item-3" header="默认展开项">
              <p>这个面板默认是展开的。</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="example-section">
      <h3 class="example-title">禁用状态</h3>
      <div class="example-row">
        <div class="example-item">
          <h4 class="example-subtitle">全部禁用</h4>
          <Accordion disabled>
            <AccordionItem value="item-1" header="禁用项目1">
              <p>这个手风琴的所有项目都被禁用，无法点击。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="禁用项目2">
              <p>这个项目也被禁用，无法点击。</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div class="example-item">
          <h4 class="example-subtitle">单项禁用</h4>
          <Accordion>
            <AccordionItem value="item-1" header="正常项目">
              <p>这是一个可以正常点击的项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="禁用项目" disabled>
              <p>这个项目被禁用，无法点击。</p>
            </AccordionItem>
            <AccordionItem value="item-3" header="正常项目">
              <p>这是一个可以正常点击的项目。</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>

    <!-- 自定义头部和图标 -->
    <section class="example-section">
      <h3 class="example-title">自定义头部和图标</h3>
      <Accordion>
        <AccordionItem value="item-1">
          <template #header>
            <div class="flex items-center gap-2">
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
                class="text-blue-600"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                ></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span class="text-blue-600 font-bold">自定义标题</span>
            </div>
          </template>
          <div class="custom-content">
            <p>这是一个使用了自定义标题的手风琴项目。</p>
            <p class="note">可以添加任何自定义内容。</p>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2" header="自定义图标">
          <template #icon>
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
              class="text-green-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </template>
          <div class="custom-content">
            <p>这是一个使用了自定义图标的手风琴项目。</p>
          </div>
        </AccordionItem>
      </Accordion>
    </section>

    <!-- 无样式模式 -->
    <section class="example-section">
      <h3 class="example-title">无样式模式</h3>
      <Accordion unstyled :pt="{ root: 'bg-gray-100 rounded-lg p-4' }">
        <AccordionItem
          value="item-1"
          header="自定义样式项目"
          :pt="{
            root: 'mb-4',
            header: 'mb-1',
            trigger:
              'bg-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-gray-50 transition-colors',
            title: 'text-indigo-600 font-medium',
            icon: 'text-indigo-600',
            content: 'overflow-hidden transition-all duration-300',
            contentInner: 'bg-white rounded-lg mt-1 p-4 shadow-sm',
          }"
        >
          <p>这是无样式模式下，通过pt属性自定义的项目。</p>
          <p class="note">可以完全控制每个元素的样式。</p>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          header="另一个自定义项目"
          :pt="{
            root: 'mb-0',
            header: 'mb-1',
            trigger:
              'bg-indigo-500 text-white rounded-lg shadow-sm p-4 w-full flex justify-between items-center hover:bg-indigo-600 transition-colors',
            title: 'font-medium',
            icon: '',
            content: 'overflow-hidden transition-all duration-300',
            contentInner:
              'bg-white rounded-lg mt-1 p-4 shadow-sm border-l-4 border-indigo-500',
          }"
        >
          <p>不同风格的自定义项目。</p>
        </AccordionItem>
      </Accordion>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Accordion, AccordionItem } from '@versakit/vue'

// 默认展开状态
const singleExpanded = ref('item-2')
const multiExpanded = ref(['item-1', 'item-3'])
</script>

<style scoped>
.accordion-examples {
  margin: 0 auto;
  padding: 1rem;
  max-width: 1000px;
}

.example-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
}

.example-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.example-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: var(--vk-primary-600);
}

.example-subtitle {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--vk-gray-700);
}

.example-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .example-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.example-item {
  margin-bottom: 1rem;
}

.custom-content {
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: rgba(219, 234, 254, 0.2);
}

.note {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--vk-gray-500);
}

/* Dark mode adjustments */
:root {
  --vk-primary-600: #4f46e5;
  --vk-gray-700: #374151;
  --vk-gray-500: #6b7280;
}

.dark {
  --vk-primary-600: #818cf8;
  --vk-gray-700: #e5e7eb;
  --vk-gray-500: #9ca3af;
}

.dark .example-section {
  border-bottom-color: #374151;
}

.dark .custom-content {
  background-color: rgba(30, 58, 138, 0.1);
}
</style>
