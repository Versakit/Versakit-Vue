<script setup lang="ts">
import { Segmented } from '@versakit/vue'
import { ref } from 'vue'

const value1 = ref('daily')
const value2 = ref('list')
const value3 = ref('list')
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Segmented v-model="value1" :options="['daily', 'weekly', 'monthly']" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">对象选项</h2>
      <Segmented
        v-model="value2"
        :options="[
          { value: 'list', label: '列表' },
          { value: 'kanban', label: '看板' },
          { value: 'calendar', label: '日历' },
        ]"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用选项</h2>
      <Segmented
        v-model="value3"
        :options="[
          { value: 'list', label: '列表' },
          { value: 'kanban', label: '看板' },
          { value: 'calendar', label: '日历', disabled: true },
        ]"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            size="sm"
          />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            size="md"
          />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            size="lg"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Segmented
        v-model="value1"
        :options="['daily', 'weekly', 'monthly']"
        disabled
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">块级元素</h2>
      <Segmented
        v-model="value1"
        :options="['daily', 'weekly', 'monthly']"
        block
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Segmented
        v-model="value1"
        :options="['daily', 'weekly', 'monthly']"
        :pt="{
          container: 'bg-purple-100 rounded-lg p-1',
          option: 'text-purple-700 hover:bg-purple-200',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">圆形样式</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            unstyled
            :pt="{
              container: 'flex rounded-full bg-gray-100 p-1',
              option:
                'flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
            }"
          />
        </div>
        <div>
          <p class="mb-2">底部边框样式</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            unstyled
            :pt="{
              container: 'flex border-b border-gray-200',
              option:
                'px-4 py-2 text-center border-b-2 border-transparent transition-colors cursor-pointer data-[selected=true]:border-blue-500 data-[selected=true]:text-blue-500',
            }"
          />
        </div>
        <div>
          <p class="mb-2">按钮组样式</p>
          <Segmented
            v-model="value1"
            :options="['daily', 'weekly', 'monthly']"
            unstyled
            :pt="{
              container: 'flex',
              option:
                'px-4 py-2 border border-gray-300 first:rounded-l-md last:rounded-r-md -ml-px first:ml-0 bg-white transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white data-[selected=true]:border-blue-500 hover:z-10',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
