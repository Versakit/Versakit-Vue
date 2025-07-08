<script setup lang="ts">
import { ref } from 'vue'
import { InputTag } from '@versakit/vue'

const tagValue1 = ref(['标签一', '标签二', '标签三'])
const tagValue2 = ref([])
const tagValue3 = ref(['只读标签'])
const tagValue4 = ref(['限制数量'])
const tagValue5 = ref([])
const tagValue6 = ref([])
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <InputTag v-model="tagValue1" placeholder="请输入标签内容按回车确认" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">空值状态</h2>
      <InputTag v-model="tagValue2" placeholder="请添加标签" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <InputTag v-model="tagValue1" placeholder="禁用状态" disabled />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">只读状态</h2>
      <InputTag v-model="tagValue3" readonly />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不可关闭</h2>
      <InputTag
        v-model="tagValue1"
        :closable="false"
        placeholder="不可关闭标签"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <InputTag
            v-model="tagValue2"
            size="small"
            placeholder="小尺寸标签输入"
          />
        </div>
        <div>
          <p class="mb-2">默认尺寸</p>
          <InputTag
            v-model="tagValue2"
            size="default"
            placeholder="默认尺寸标签输入"
          />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <InputTag
            v-model="tagValue2"
            size="large"
            placeholder="大尺寸标签输入"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">前缀和后缀</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">前缀文本</p>
          <InputTag v-model="tagValue2" placeholder="前缀示例">
            <template #prefix>标签:</template>
          </InputTag>
        </div>
        <div>
          <p class="mb-2">后缀文本</p>
          <InputTag v-model="tagValue2" placeholder="后缀示例">
            <template #suffix>+</template>
          </InputTag>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最大标签数</h2>
      <InputTag
        v-model="tagValue4"
        :maxCount="5"
        showCount
        placeholder="最多添加5个标签"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同状态</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <InputTag v-model="tagValue2" status="error" placeholder="错误状态" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <InputTag
            v-model="tagValue2"
            status="warning"
            placeholder="警告状态"
          />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <InputTag
            v-model="tagValue2"
            status="success"
            placeholder="成功状态"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <InputTag
        v-model="tagValue5"
        placeholder="自定义样式"
        :pt="{
          wrapper:
            'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
          tag: 'bg-purple-100 text-purple-800 border border-purple-300',
          tagClose: 'text-purple-800 hover:text-purple-950',
          input: 'text-purple-700 placeholder-purple-300',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <InputTag
        v-model="tagValue6"
        placeholder="无样式模式"
        unstyled
        :pt="{
          root: 'w-full',
          wrapper:
            'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md',
          input: 'px-4 py-2 rounded-sm bg-white focus:outline-none',
          tag: 'bg-blue-100 text-blue-800 rounded-full px-3 py-1 m-1',
          tagClose: 'ml-1 text-blue-500 hover:text-blue-700 font-bold',
        }"
      />
    </section>
  </div>
</template>
