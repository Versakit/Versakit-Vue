<template>
  <div class="flex flex-col gap-8">
    <!-- 基础文本域 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础文本域</h2>
      <Textarea v-model="basicValue" placeholder="请输入内容..." />
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同尺寸</h2>
      <div class="space-y-4">
        <Textarea size="sm" placeholder="小尺寸" />
        <Textarea size="md" placeholder="中等尺寸（默认）" />
        <Textarea size="lg" placeholder="大尺寸" />
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用状态</h2>
      <Textarea disabled placeholder="禁用状态" value="此文本域已被禁用" />
    </section>

    <!-- 只读状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">只读状态</h2>
      <Textarea readonly placeholder="只读状态" value="此文本域为只读" />
    </section>

    <!-- 不同行数 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同行数</h2>
      <div class="space-y-4">
        <Textarea :rows="2" placeholder="2行" />
        <Textarea :rows="4" placeholder="4行（默认）" />
        <Textarea :rows="6" placeholder="6行" />
      </div>
    </section>

    <!-- 字数限制与统计 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">字数限制与统计</h2>
      <Textarea
        v-model="limitedValue"
        placeholder="带字数限制的文本域"
        :maxLength="100"
        showCount
      />
    </section>

    <!-- 自动调整高度 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自动调整高度</h2>
      <Textarea
        v-model="autosizeValue"
        placeholder="随着输入内容增加自动调整高度"
        :autosize="true"
      />
    </section>

    <!-- 调整大小方向 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">调整大小方向</h2>
      <div class="space-y-4">
        <Textarea resize="none" placeholder="不可调整大小" />
        <Textarea resize="horizontal" placeholder="只能水平调整大小" />
        <Textarea resize="vertical" placeholder="只能垂直调整大小（默认）" />
        <Textarea resize="both" placeholder="可以水平和垂直调整大小" />
      </div>
    </section>

    <!-- 不同状态 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同状态</h2>
      <div class="space-y-4">
        <Textarea
          status="error"
          placeholder="错误状态"
          value="这是一条错误信息"
        />
        <Textarea
          status="warning"
          placeholder="警告状态"
          value="这是一条警告信息"
        />
        <Textarea
          status="success"
          placeholder="成功状态"
          value="这是一条成功信息"
        />
      </div>
    </section>

    <!-- 结合表单使用 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">结合表单使用</h2>
      <div class="space-y-4">
        <div>
          <label class="block mb-1 font-medium">留言内容：</label>
          <Textarea
            v-model="formValue"
            placeholder="请输入留言内容..."
            :maxLength="200"
            showCount
          />
        </div>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          提交
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Textarea } from '@versakit/vue'

// 示例数据
const basicValue = ref('')
const limitedValue = ref('')
const autosizeValue = ref('')
const formValue = ref('')
</script>
