<template>
  <div class="flex flex-col gap-8">
    <!-- 基础分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础分割线</h2>
      <Divider />
    </section>

    <!-- 带文本的分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带文本的分割线</h2>
      <Divider label="文本内容" />
    </section>

    <!-- 不同文本位置 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同文本位置</h2>
      <Divider label="左侧文本" labelPosition="start" class="mb-4" />
      <Divider label="居中文本" labelPosition="center" class="mb-4" />
      <Divider label="右侧文本" labelPosition="end" />
    </section>

    <!-- 不同样式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同样式</h2>
      <Divider variant="solid" label="实线" class="mb-4" />
      <Divider variant="dashed" label="虚线" class="mb-4" />
      <Divider variant="dotted" label="点线" />
    </section>

    <!-- 不同粗细 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">不同粗细</h2>
      <Divider size="thin" label="细线" class="mb-4" />
      <Divider size="medium" label="中等" class="mb-4" />
      <Divider size="thick" label="粗线" />
    </section>

    <!-- 自定义颜色 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义颜色</h2>
      <Divider color="#1677ff" label="蓝色" class="mb-4" />
      <Divider color="#52c41a" label="绿色" class="mb-4" />
      <Divider color="#f5222d" label="红色" />
    </section>

    <!-- 垂直分割线 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">垂直分割线</h2>
      <div class="flex items-center h-20">
        <span>左侧文本</span>
        <Divider orientation="vertical" class="mx-4 h-full" />
        <span>右侧文本</span>
      </div>
    </section>

    <!-- 自定义渲染元素 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">自定义渲染元素</h2>
      <p class="mb-2">默认水平分割线 (hr元素)</p>
      <Divider class="mb-4" />
      <p class="mb-2">自定义为span元素:</p>
      <Divider as="span" class="mb-4" />
    </section>

    <!-- 组合使用 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">组合使用</h2>
      <div class="flex items-center">
        <span>文本</span>
        <Divider orientation="vertical" variant="dashed" class="mx-4 h-6" />
        <span>链接</span>
        <Divider
          orientation="vertical"
          variant="dotted"
          color="#1677ff"
          class="mx-4 h-6"
        />
        <span>按钮</span>
      </div>
    </section>

    <!-- 分割内容区域 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">分割内容区域</h2>
      <div class="p-4 border rounded">
        <p>上方内容区域</p>
        <Divider />
        <p>下方内容区域</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Divider } from '@versakit/vue'
</script>
