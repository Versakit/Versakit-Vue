<script setup lang="ts">
import { Switch } from '@versakit/vue'
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <div class="flex items-center gap-4">
        <Switch v-model="value1" />
        <span>{{ value1 ? '开启' : '关闭' }}</span>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">选中状态</h2>
      <Switch v-model="value2" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-4">
          <Switch v-model="value1" disabled />
          <span>未选中禁用</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" disabled />
          <span>选中禁用</span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-4">
          <Switch v-model="value2" size="small" />
          <span>小尺寸</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" size="default" />
          <span>默认尺寸</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" size="large" />
          <span>大尺寸</span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="flex flex-wrap items-center gap-8">
        <div class="flex items-center gap-4">
          <Switch v-model="value2" color="blue" />
          <span>蓝色</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" color="green" />
          <span>绿色</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" color="red" />
          <span>红色</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" color="yellow" />
          <span>黄色</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch v-model="value2" color="purple" />
          <span>紫色</span>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="flex items-center gap-4">
        <Switch
          v-model="value2"
          :pt="{
            track: 'bg-purple-200',
            thumb: 'bg-purple-600',
          }"
        />
        <span>紫色自定义样式</span>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <Switch
            v-model="value2"
            unstyled
            :pt="{
              root: 'inline-block',
              track:
                'w-12 h-6 rounded-full bg-gray-300 transition-colors data-[checked=true]:bg-gradient-to-r data-[checked=true]:from-blue-500 data-[checked=true]:to-purple-500',
              thumb:
                'block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform data-[checked=true]:translate-x-7',
            }"
          />
          <span>渐变色开关</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch
            v-model="value2"
            unstyled
            :pt="{
              root: 'inline-block',
              track:
                'w-14 h-8 rounded-full bg-gray-200 p-1 transition-colors data-[checked=true]:bg-green-500',
              thumb:
                'block w-6 h-6 bg-white rounded-full shadow transition-transform data-[checked=true]:translate-x-6',
            }"
          />
          <span>大号圆形开关</span>
        </div>
        <div class="flex items-center gap-4">
          <Switch
            v-model="value2"
            unstyled
            :pt="{
              root: 'inline-block',
              track:
                'w-12 h-6 rounded-sm bg-gray-300 transition-colors data-[checked=true]:bg-blue-500',
              thumb:
                'block w-3 h-6 bg-white transition-transform data-[checked=true]:translate-x-9',
            }"
          />
          <span>方形开关</span>
        </div>
      </div>
    </section>
  </div>
</template>
