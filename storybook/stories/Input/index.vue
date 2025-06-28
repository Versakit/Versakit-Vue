<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@versakit/vue'

const inputValue = ref('')
const passwordValue = ref('')
const readonlyValue = ref('只读内容')
const clearableValue = ref('')
const countValue = ref('')
const customValue = ref('')
const unstyledValue = ref('')
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Input v-model="inputValue" placeholder="请输入内容" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同类型</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">文本输入框</p>
          <Input type="text" placeholder="请输入文本" />
        </div>
        <div>
          <p class="mb-2">密码输入框</p>
          <Input
            v-model="passwordValue"
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div>
          <p class="mb-2">邮箱输入框</p>
          <Input type="email" placeholder="请输入邮箱" />
        </div>
        <div>
          <p class="mb-2">数字输入框</p>
          <Input type="number" placeholder="请输入数字" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Input disabled placeholder="禁用状态" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">只读状态</h2>
      <Input v-model="readonlyValue" readonly />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Input size="small" placeholder="小尺寸输入框" />
        </div>
        <div>
          <p class="mb-2">默认尺寸</p>
          <Input size="default" placeholder="默认尺寸输入框" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Input size="large" placeholder="大尺寸输入框" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">前缀和后缀</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">前缀图标</p>
          <Input prefixIcon="search" placeholder="搜索内容" />
        </div>
        <div>
          <p class="mb-2">后缀图标</p>
          <Input suffixIcon="calendar" placeholder="选择日期" />
        </div>
        <div>
          <p class="mb-2">前缀和后缀图标</p>
          <Input prefixIcon="user" suffixIcon="lock" placeholder="用户名" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可清除</h2>
      <Input v-model="clearableValue" clearable placeholder="可清除的输入框" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">字数限制</h2>
      <Input
        v-model="countValue"
        :maxlength="20"
        showCount
        placeholder="最多输入20个字符"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">不同状态</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <Input status="error" placeholder="错误状态" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Input status="warning" placeholder="警告状态" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Input status="success" placeholder="成功状态" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式 (PT)</h2>
      <Input
        v-model="customValue"
        placeholder="自定义样式"
        :pt="{
          wrapper:
            'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
          input: 'text-purple-700 placeholder-purple-300',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Input
        v-model="unstyledValue"
        placeholder="无样式模式"
        unstyled
        :pt="{
          root: 'w-full',
          wrapper:
            'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md',
          input: 'w-full px-4 py-2 rounded-md bg-white focus:outline-none',
        }"
      />
    </section>
  </div>
</template>
