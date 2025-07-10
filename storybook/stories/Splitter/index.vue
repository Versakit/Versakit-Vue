<script setup lang="ts">
import { Splitter, SplitterPanel } from '@versakit/vue'
</script>

<template>
  <div class="space-y-12 p-6 max-w-4xl mx-auto">
    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">基础水平分割</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter>
          <SplitterPanel>
            <div class="h-full flex items-center justify-center bg-gray-50 p-4">
              <div class="text-center">
                <div class="text-xl font-medium mb-2">左侧面板</div>
                <p class="text-gray-500">可拖动中间的分隔条调整面板大小</p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">右侧面板</div>
                <p class="text-gray-500">基础水平分割面板示例</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">垂直布局</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter direction="vertical">
          <SplitterPanel>
            <div class="h-full flex items-center justify-center bg-gray-50 p-4">
              <div class="text-center">
                <div class="text-xl font-medium mb-2">上部面板</div>
                <p class="text-gray-500">
                  通过direction="vertical"设置垂直分割
                </p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">下部面板</div>
                <p class="text-gray-500">垂直拖动分隔条调整大小</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">多面板分割</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter>
          <SplitterPanel>
            <div class="h-full flex items-center justify-center bg-gray-50 p-4">
              <div class="text-center">
                <div class="text-xl font-medium">面板 1</div>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium">面板 2</div>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-200 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium">面板 3</div>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">嵌套面板</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter>
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
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">自定义分隔条大小</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter :gutter-size="10">
          <SplitterPanel>
            <div class="h-full flex items-center justify-center bg-gray-50 p-4">
              <div class="text-center">
                <div class="text-xl font-medium mb-2">左侧面板</div>
                <p class="text-gray-500">分隔条大小为10px</p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">右侧面板</div>
                <p class="text-gray-500">可拖动更宽的分隔条调整大小</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">自定义面板配置</h2>
      <div class="h-64 border border-gray-200 rounded">
        <Splitter
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
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">主面板</div>
                <p class="text-gray-500">最小尺寸为60%</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">自定义样式</h2>
      <div class="h-64">
        <Splitter
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
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">自定义分割条</div>
                <p class="text-gray-500">蓝色分割条带有悬停效果</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">无样式模式</h2>
      <div class="h-64">
        <Splitter
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
            <div
              class="h-full flex items-center justify-center bg-gray-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2">完全自定义</div>
                <p class="text-gray-500">通过pt属性定义所有样式</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">创意样式</h2>
      <div class="h-64">
        <Splitter
          :gutter-size="12"
          :pt="{
            root: 'border border-purple-300 rounded-xl overflow-hidden shadow-lg',
            gutter:
              'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-colors',
            gutterHandler: 'h-12 w-2 bg-white rounded-full shadow',
          }"
        >
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2 text-purple-800">
                  创意面板 1
                </div>
                <p class="text-purple-600">渐变背景与渐变分隔条</p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2 text-pink-800">
                  创意面板 2
                </div>
                <p class="text-pink-600">美观的自定义样式</p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4 text-gray-800">暗黑模式兼容</h2>
      <div class="h-64 border border-gray-200 dark:border-gray-700 rounded">
        <Splitter>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2 dark:text-white">
                  暗黑模式兼容
                </div>
                <p class="text-gray-500 dark:text-gray-400">
                  支持暗黑模式的面板
                </p>
              </div>
            </div>
          </SplitterPanel>
          <SplitterPanel>
            <div
              class="h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4"
            >
              <div class="text-center">
                <div class="text-xl font-medium mb-2 dark:text-white">
                  自动适应
                </div>
                <p class="text-gray-500 dark:text-gray-400">
                  根据系统主题自动切换
                </p>
              </div>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
    </section>
  </div>
</template>
