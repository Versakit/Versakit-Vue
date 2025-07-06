<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@versakit/vue'

const basicValue = ref('')
const maxLengthValue = ref('')
const autosizeValue = ref('')
const customValue = ref('')
const unstyledValue = ref('')
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Textarea v-model="basicValue" placeholder="请输入内容" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Textarea placeholder="小尺寸文本域" size="sm" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Textarea placeholder="中等尺寸文本域" size="md" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Textarea placeholder="大尺寸文本域" size="lg" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同状态</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <Textarea placeholder="错误状态" status="error" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Textarea placeholder="警告状态" status="warning" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Textarea placeholder="成功状态" status="success" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">字数限制</h2>
      <Textarea
        v-model="maxLengthValue"
        placeholder="请输入内容，最多100个字符"
        :max-length="100"
        show-count
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自适应高度</h2>
      <Textarea
        v-model="autosizeValue"
        placeholder="输入内容时会自动调整高度"
        autosize
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">调整大小</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">不可调整大小</p>
          <Textarea placeholder="不可调整大小" resize="none" />
        </div>
        <div>
          <p class="mb-2">可以水平调整大小</p>
          <Textarea placeholder="可以水平调整大小" resize="horizontal" />
        </div>
        <div>
          <p class="mb-2">可以垂直调整大小</p>
          <Textarea placeholder="可以垂直调整大小" resize="vertical" />
        </div>
        <div>
          <p class="mb-2">可以自由调整大小</p>
          <Textarea placeholder="可以自由调整大小" resize="both" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Textarea
        v-model="customValue"
        placeholder="自定义样式的文本域"
        :pt="{
          root: 'w-full',
          textarea:
            'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
          counter: 'text-purple-600 text-sm',
        }"
        :max-length="100"
        show-count
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Textarea
        v-model="unstyledValue"
        placeholder="无样式模式的文本域"
        unstyled
        :pt="{
          root: 'w-full',
          textarea:
            'w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300',
          counter: 'mt-1 text-right text-sm text-blue-600',
        }"
        :max-length="100"
        show-count
      />
    </section>
  </div>
</template>
