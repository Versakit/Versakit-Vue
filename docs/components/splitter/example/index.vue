<template>
  <div class="flex flex-col gap-8">
    <!-- 基本用法 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">基础水平分割</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">左侧面板</div>
              <p class="text-gray-500">可拖动中间的分隔条调整面板大小</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">右侧面板</div>
              <p class="text-gray-500">基础水平分割面板示例</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 垂直分割 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">垂直分割</h3>
      <Splitter
        direction="vertical"
        class="h-64 border border-gray-200 rounded"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">上部面板</div>
              <p class="text-gray-500">通过direction="vertical"设置垂直分割</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">下部面板</div>
              <p class="text-gray-500">垂直拖动分隔条调整大小</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 多面板分割 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">多面板分割</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 1</div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 2</div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-200 p-4">
            <div class="text-center">
              <div class="text-xl font-medium">面板 3</div>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 嵌套分割面板 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">嵌套分割面板</h3>
      <Splitter class="h-64 border border-gray-200 rounded">
        <SplitterPanel :size="'40%'">
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">左侧面板</div>
              <p class="text-gray-500">占据40%宽度</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel :size="'60%'">
          <Splitter direction="vertical" class="h-full">
            <SplitterPanel :size="'60%'">
              <div
                class="h-full flex items-center justify-center bg-gray-100 p-4"
              >
                <div class="text-center">
                  <div class="text-xl font-medium">右上面板</div>
                  <p class="text-gray-500">嵌套的垂直分割面板</p>
                </div>
              </div>
            </SplitterPanel>
            <SplitterPanel :size="'40%'">
              <div
                class="h-full flex items-center justify-center bg-gray-200 p-4"
              >
                <div class="text-center">
                  <div class="text-xl font-medium">右下面板</div>
                </div>
              </div>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 自定义配置 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">自定义配置</h3>
      <Splitter
        class="h-64 border border-gray-200 rounded"
        :gutter-size="10"
        :panels="[
          { size: '30%', minSize: '20%', maxSize: '40%', collapsible: true },
          { size: '70%', minSize: '60%', resizable: true },
        ]"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">可折叠面板</div>
              <p class="text-gray-500">配置了最小尺寸20%和最大尺寸40%</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">主面板</div>
              <p class="text-gray-500">最小尺寸为60%</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 自定义样式 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">自定义样式</h3>
      <Splitter
        class="h-64"
        :pt="{
          root: 'border border-gray-300 rounded-lg overflow-hidden',
          gutter: 'bg-blue-500 hover:bg-blue-600 transition-colors',
          gutterHandler: 'h-10 w-1.5 bg-white rounded-full',
        }"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">自定义样式面板</div>
              <p class="text-gray-500">通过pt属性自定义组件样式</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">自定义分割条</div>
              <p class="text-gray-500">蓝色分割条带有悬停效果</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>

    <!-- 无样式模式 -->
    <div class="space-y-2">
      <h3 class="text-lg font-medium">无样式模式</h3>
      <Splitter
        class="h-64"
        unstyled
        :pt="{
          root: 'flex border-2 border-dashed border-gray-300 rounded-xl overflow-hidden',
          panel: 'flex-1',
          gutter:
            'w-2 bg-gray-50 hover:bg-gray-100 cursor-col-resize flex items-center justify-center',
          gutterHandler: 'h-16 w-1 bg-gray-400 rounded',
        }"
      >
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-50 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">无样式模式</div>
              <p class="text-gray-500">使用unstyled属性移除默认样式</p>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div class="h-full flex items-center justify-center bg-gray-100 p-4">
            <div class="text-center">
              <div class="text-xl font-medium mb-2">完全自定义</div>
              <p class="text-gray-500">通过pt属性定义所有样式</p>
            </div>
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

<script setup>
import { Splitter, SplitterPanel } from '@versakit/vue'
</script>
