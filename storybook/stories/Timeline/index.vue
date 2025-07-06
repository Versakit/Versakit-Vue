<script setup lang="ts">
import { Timeline, TimelineItem } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">基础用法</h2>
      <Timeline>
        <TimelineItem>
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
          <div>项目初始化完成</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
          <div>完成核心功能开发</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
          <div>完成所有测试用例</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">左侧对齐</h2>
      <Timeline align="left">
        <TimelineItem>
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">右侧对齐</h2>
      <Timeline align="right">
        <TimelineItem>
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">交替对齐</h2>
      <Timeline align="alternate">
        <TimelineItem>
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
        <TimelineItem>
          <div class="font-medium">发布阶段</div>
          <div class="text-sm text-gray-500">2023-04-10</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义点和线</h2>
      <Timeline>
        <TimelineItem dot-color="#10b981">
          <template #dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </template>
          <div class="font-medium">任务完成</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem dot-color="#f59e0b" line-color="#f59e0b">
          <template #dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </template>
          <div class="font-medium">进行中</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem dot-color="#ef4444" line-color="#ef4444">
          <template #dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </template>
          <div class="font-medium">已取消</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带有反向内容</h2>
      <Timeline align="alternate">
        <TimelineItem>
          <template #opposite>
            <div class="font-bold text-blue-500">阶段 1</div>
          </template>
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem>
          <template #opposite>
            <div class="font-bold text-green-500">阶段 2</div>
          </template>
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem>
          <template #opposite>
            <div class="font-bold text-amber-500">阶段 3</div>
          </template>
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式</h2>
      <Timeline :pt="{ root: 'border-l-2 border-blue-500 pl-6 ml-6' }">
        <TimelineItem
          :pt="{ dot: 'bg-blue-500 border-white', line: 'bg-blue-500' }"
        >
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem
          :pt="{ dot: 'bg-green-500 border-white', line: 'bg-green-500' }"
        >
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem
          :pt="{ dot: 'bg-amber-500 border-white', line: 'bg-amber-500' }"
        >
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Timeline
        unstyled
        :pt="{ root: 'relative border-l-2 border-gray-300 ml-4 pl-8' }"
      >
        <TimelineItem
          unstyled
          :pt="{
            root: 'mb-8 relative',
            dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-blue-500',
            content: 'bg-white p-4 rounded-md shadow-md border border-gray-100',
            line: 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
          }"
        >
          <div class="font-medium">创建项目</div>
          <div class="text-sm text-gray-500">2023-01-01</div>
        </TimelineItem>
        <TimelineItem
          unstyled
          :pt="{
            root: 'mb-8 relative',
            dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-green-500',
            content: 'bg-white p-4 rounded-md shadow-md border border-gray-100',
            line: 'absolute top-6 bottom-0 -left-9 w-0.5 bg-gray-300',
          }"
        >
          <div class="font-medium">开发阶段</div>
          <div class="text-sm text-gray-500">2023-02-15</div>
        </TimelineItem>
        <TimelineItem
          unstyled
          :pt="{
            root: 'mb-8 relative',
            dot: 'absolute -left-10 flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-amber-500',
            content: 'bg-white p-4 rounded-md shadow-md border border-gray-100',
          }"
        >
          <div class="font-medium">测试阶段</div>
          <div class="text-sm text-gray-500">2023-03-20</div>
        </TimelineItem>
      </Timeline>
    </section>
  </div>
</template>
