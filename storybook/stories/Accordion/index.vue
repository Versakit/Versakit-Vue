<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-xl font-bold mb-4">基础手风琴</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion>
          <AccordionItem value="item-1" header="基础项目">
            <p>这是一个基础手风琴的内容区域。</p>
          </AccordionItem>
          <AccordionItem value="item-2" header="可折叠项目">
            <p>点击标题可以折叠/展开此内容。</p>
          </AccordionItem>
          <AccordionItem value="item-3" header="更多内容">
            <p>这里可以放置任何内容，例如文本、图片、表格等。</p>
          </AccordionItem>
        </Accordion>

        <Accordion variant="bordered">
          <AccordionItem value="item-1" header="带边框项目">
            <p>这是一个带边框的手风琴内容区域。</p>
          </AccordionItem>
          <AccordionItem value="item-2" header="可折叠项目">
            <p>点击标题可以折叠/展开此内容。</p>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">手风琴变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Accordion>
            <AccordionItem value="item-1" header="默认样式">
              <p>这是默认样式的手风琴项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这是第二个项目。</p>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-500">带边框样式</p>
          <Accordion variant="bordered">
            <AccordionItem value="item-1" header="带边框样式">
              <p>这是带边框的手风琴项目。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="第二项">
              <p>这是第二个项目。</p>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-500">阴影样式</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">手风琴模式</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">单面板模式（默认）</p>
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

        <div>
          <p class="mb-2 text-sm text-gray-500">多面板模式</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">默认展开状态</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">单项默认展开</p>
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

        <div>
          <p class="mb-2 text-sm text-gray-500">多项默认展开</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">全部禁用</p>
          <Accordion disabled>
            <AccordionItem value="item-1" header="禁用项目1">
              <p>这个手风琴的所有项目都被禁用，无法点击。</p>
            </AccordionItem>
            <AccordionItem value="item-2" header="禁用项目2">
              <p>这个项目也被禁用，无法点击。</p>
            </AccordionItem>
          </Accordion>
        </div>

        <div>
          <p class="mb-2 text-sm text-gray-500">单项禁用</p>
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

    <section>
      <h2 class="text-xl font-bold mb-4">自定义内容</h2>
      <div class="grid grid-cols-1 gap-4">
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
            <div class="p-4 bg-blue-50 rounded-lg">
              <p>这是一个使用了自定义标题的手风琴项目。</p>
              <p class="mt-2 text-blue-600">可以添加任何自定义内容。</p>
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
            <div class="p-4 bg-green-50 rounded-lg">
              <p>这是一个使用了自定义图标的手风琴项目。</p>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" header="富内容示例">
            <div class="space-y-4">
              <p>手风琴内容可以包含各种富媒体内容。</p>

              <div class="bg-gray-100 p-4 rounded-lg">
                <h4 class="font-bold">代码示例</h4>
                <pre
                  class="bg-gray-800 text-gray-100 p-3 rounded mt-2 text-sm overflow-x-auto"
                >
const greeting = 'Hello, World!';
console.log(greeting);</pre
                >
              </div>

              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-green-500"></div>
                <span>在线</span>
              </div>

              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full bg-red-500"></div>
                <span>离线</span>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
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
          <p class="mt-2 text-gray-500">可以完全控制每个元素的样式。</p>
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

<script setup lang="ts">
import { Accordion, AccordionItem } from '@versakit/vue'
import { ref } from 'vue'

// 默认展开状态
const singleExpanded = ref('item-2')
const multiExpanded = ref(['item-1', 'item-3'])
</script>
