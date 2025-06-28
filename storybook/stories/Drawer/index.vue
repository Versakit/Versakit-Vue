<script setup lang="ts">
import { ref } from 'vue'
import { Drawer } from '@versakit/vue'

const basic = ref(false)
const leftDrawer = ref(false)
const rightDrawer = ref(false)
const topDrawer = ref(false)
const bottomDrawer = ref(false)
const smallDrawer = ref(false)
const mediumDrawer = ref(false)
const largeDrawer = ref(false)
const customDrawer = ref(false)
const unstyledDrawer = ref(false)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded"
        @click="basic = true"
      >
        打开基础抽屉
      </button>

      <Drawer v-model="basic" title="基础抽屉">
        <p>这是一个基础抽屉的内容。</p>
        <p class="mt-4">您可以在这里放置任何内容。</p>
      </Drawer>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同位置</h2>
      <div class="flex flex-wrap gap-2">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="leftDrawer = true"
        >
          左侧抽屉
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="rightDrawer = true"
        >
          右侧抽屉
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="topDrawer = true"
        >
          顶部抽屉
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="bottomDrawer = true"
        >
          底部抽屉
        </button>
      </div>

      <Drawer v-model="leftDrawer" title="左侧抽屉" placement="left">
        <p>这是一个左侧抽屉。</p>
      </Drawer>

      <Drawer v-model="rightDrawer" title="右侧抽屉" placement="right">
        <p>这是一个右侧抽屉。</p>
      </Drawer>

      <Drawer v-model="topDrawer" title="顶部抽屉" placement="top">
        <p>这是一个顶部抽屉。</p>
      </Drawer>

      <Drawer v-model="bottomDrawer" title="底部抽屉" placement="bottom">
        <p>这是一个底部抽屉。</p>
      </Drawer>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex flex-wrap gap-2">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="smallDrawer = true"
        >
          小尺寸抽屉
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="mediumDrawer = true"
        >
          中等尺寸抽屉
        </button>

        <button
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="largeDrawer = true"
        >
          大尺寸抽屉
        </button>
      </div>

      <Drawer v-model="smallDrawer" title="小尺寸抽屉" size="20%">
        <p>这是一个小尺寸抽屉。</p>
      </Drawer>

      <Drawer v-model="mediumDrawer" title="中等尺寸抽屉" size="50%">
        <p>这是一个中等尺寸抽屉。</p>
      </Drawer>

      <Drawer v-model="largeDrawer" title="大尺寸抽屉" size="80%">
        <p>这是一个大尺寸抽屉。</p>
      </Drawer>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded"
        @click="customDrawer = true"
      >
        自定义样式抽屉
      </button>

      <Drawer
        v-model="customDrawer"
        title="自定义样式抽屉"
        :pt="{
          overlay: 'bg-black/50',
          container: 'bg-gray-100 shadow-lg',
          header: 'bg-blue-500 text-white p-4',
          title: 'text-lg font-bold',
          closeButton: 'text-white hover:text-gray-200',
          body: 'p-6',
        }"
      >
        <p>这是一个使用 pt 属性自定义样式的抽屉。</p>
        <p class="mt-4">您可以自定义抽屉的各个部分的样式。</p>
      </Drawer>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <button
        class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
        @click="unstyledDrawer = true"
      >
        无样式模式抽屉
      </button>

      <Drawer
        v-model="unstyledDrawer"
        title="无样式模式抽屉"
        unstyled
        :pt="{
          overlay: 'fixed inset-0 bg-black/70 z-50',
          container:
            'fixed bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl z-50 transition-transform duration-300',
          header:
            'flex justify-between items-center p-4 border-b border-white/20',
          title: 'text-xl font-bold',
          closeButton: 'text-white hover:text-gray-200 text-2xl',
          body: 'p-6',
        }"
      >
        <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义抽屉。</p>
        <p class="mt-4">您可以完全控制抽屉的样式和行为。</p>

        <template #footer>
          <div class="p-4 border-t border-white/20 flex justify-end">
            <button
              class="px-4 py-2 bg-white text-purple-700 rounded"
              @click="unstyledDrawer = false"
            >
              关闭
            </button>
          </div>
        </template>
      </Drawer>
    </section>
  </div>
</template>
