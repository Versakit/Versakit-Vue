<script setup lang="ts">
import { Rate } from '@versakit/vue'
import { ref } from 'vue'

const value = ref(3)
const halfValue = ref(3.5)
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Rate v-model="value" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最大值</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">默认最大值：5</p>
          <Rate v-model="value" />
        </div>
        <div>
          <p class="mb-2">自定义最大值：10</p>
          <Rate v-model="value" :max="10" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">允许半选</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">不允许半选（默认）</p>
          <Rate v-model="value" />
        </div>
        <div>
          <p class="mb-2">允许半选</p>
          <Rate v-model="halfValue" :allow-half="true" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">只读状态</h2>
      <Rate v-model="value" readonly />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Rate v-model="value" disabled />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同颜色</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">黄色（默认）</p>
          <Rate v-model="value" color="yellow" />
        </div>
        <div>
          <p class="mb-2">蓝色</p>
          <Rate v-model="value" color="blue" />
        </div>
        <div>
          <p class="mb-2">绿色</p>
          <Rate v-model="value" color="green" />
        </div>
        <div>
          <p class="mb-2">红色</p>
          <Rate v-model="value" color="red" />
        </div>
        <div>
          <p class="mb-2">紫色</p>
          <Rate v-model="value" color="purple" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Rate v-model="value" size="small" />
        </div>
        <div>
          <p class="mb-2">默认尺寸</p>
          <Rate v-model="value" size="default" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Rate v-model="value" size="large" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义字符</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">默认星形</p>
          <Rate v-model="value" />
        </div>
        <div>
          <p class="mb-2">自定义字符：心形</p>
          <Rate v-model="value" character="♥" />
        </div>
        <div>
          <p class="mb-2">自定义字符：A</p>
          <Rate v-model="value" character="A" />
        </div>
        <div>
          <p class="mb-2">自定义字符：表情</p>
          <Rate v-model="value" character="😊" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">显示分数</h2>
      <Rate v-model="value" :show-score="true" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Rate
        v-model="value"
        :show-score="true"
        :pt="{
          container: 'flex gap-2 items-center',
          item: 'cursor-pointer',
          fullStar: 'text-purple-500',
          voidStar: 'text-purple-200',
          score: 'ml-2 text-purple-700 font-bold',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">渐变色星星</p>
          <Rate
            v-model="value"
            :show-score="true"
            unstyled
            :pt="{
              container: 'flex gap-3 items-center',
              item: 'cursor-pointer transition-transform hover:scale-110',
              fullStar: 'text-2xl text-amber-500',
              voidStar: 'text-2xl text-gray-300',
              score: 'ml-3 text-lg font-bold text-amber-500',
            }"
          />
        </div>
        <div>
          <p class="mb-2">自定义心形图标</p>
          <Rate
            v-model="value"
            character="♥"
            :show-score="true"
            unstyled
            :pt="{
              container: 'flex gap-2 items-center',
              item: 'cursor-pointer transition-all hover:animate-pulse',
              fullStar: 'text-2xl text-red-500',
              voidStar: 'text-2xl text-gray-200',
              score: 'ml-2 text-lg font-bold text-red-500',
            }"
          />
        </div>
        <div>
          <p class="mb-2">方块评分</p>
          <Rate
            v-model="value"
            character="■"
            :show-score="true"
            unstyled
            :pt="{
              container: 'flex gap-1 items-center',
              item: 'cursor-pointer',
              fullStar: 'text-xl text-blue-600',
              voidStar: 'text-xl text-blue-200',
              score: 'ml-3 text-lg font-bold text-blue-600',
            }"
          />
        </div>
      </div>
    </section>
  </div>
</template>
