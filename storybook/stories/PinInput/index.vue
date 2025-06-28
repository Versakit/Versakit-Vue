<script setup lang="ts">
import { PinInput } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <PinInput :length="4" state="default" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同长度</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">4位验证码</p>
          <PinInput :length="4" state="default" />
        </div>
        <div>
          <p class="mb-2">6位验证码</p>
          <PinInput :length="6" state="default" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <PinInput :length="4" size="sm" state="default" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <PinInput :length="4" size="md" state="default" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <PinInput :length="4" size="lg" state="default" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同状态</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">默认状态</p>
          <PinInput :length="4" state="default" />
        </div>
        <div>
          <p class="mb-2">错误状态</p>
          <PinInput :length="4" state="error" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <PinInput :length="4" state="success" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">自定义间距和边框颜色</p>
          <PinInput
            :length="4"
            state="default"
            :pt="{
              container: 'gap-4',
              input:
                'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
            }"
          />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">圆形输入框样式</p>
          <PinInput
            :length="4"
            state="default"
            unstyled
            :pt="{
              container: 'flex gap-3',
              input:
                'w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300',
            }"
          />
        </div>
        <div>
          <p class="mb-2">下划线样式</p>
          <PinInput
            :length="4"
            state="default"
            unstyled
            :pt="{
              container: 'flex gap-4',
              input:
                'w-10 h-12 text-center text-2xl border-0 border-b-2 border-gray-400 focus:outline-none focus:border-green-500',
            }"
          />
        </div>
        <div>
          <p class="mb-2">渐变边框样式</p>
          <PinInput
            :length="4"
            state="default"
            unstyled
            :pt="{
              container: 'flex gap-3',
              input:
                'w-12 h-12 text-center text-2xl bg-white border-2 border-transparent bg-clip-padding rounded-md focus:outline-none',
            }"
            style="
              --tw-gradient-from: #3b82f6;
              --tw-gradient-to: #8b5cf6;
              --tw-gradient-stops:
                var(--tw-gradient-from), var(--tw-gradient-to);
            "
          />
        </div>
      </div>
    </section>
  </div>
</template>
