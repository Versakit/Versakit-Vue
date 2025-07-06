<script setup lang="ts">
import { Splitter, SplitterItem } from '@versakit/vue'
</script>

<template>
  <div class="space-y-8 p-4">
    <section>
      <h2 class="text-xl font-bold mb-4">水平布局</h2>
      <div style="height: 300px">
        <Splitter>
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">垂直布局</h2>
      <div style="height: 300px">
        <Splitter layout="vertical">
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">多面板</h2>
      <div style="height: 300px">
        <Splitter>
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
          <template #panel-2>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-300 flex items-center justify-center"
              >
                面板 3
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">嵌套面板</h2>
      <div style="height: 300px">
        <Splitter>
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div class="h-full">
                <Splitter layout="vertical">
                  <template #panel-0>
                    <SplitterItem>
                      <div
                        class="h-full p-4 bg-gray-200 flex items-center justify-center"
                      >
                        面板 2.1
                      </div>
                    </SplitterItem>
                  </template>
                  <template #panel-1>
                    <SplitterItem>
                      <div
                        class="h-full p-4 bg-gray-300 flex items-center justify-center"
                      >
                        面板 2.2
                      </div>
                    </SplitterItem>
                  </template>
                </Splitter>
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义分隔条大小</h2>
      <div style="height: 300px">
        <Splitter :gutter-size="10">
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">初始尺寸</h2>
      <div style="height: 300px">
        <Splitter>
          <template #panel-0>
            <SplitterItem :size="30">
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1 (30%)
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem :size="70">
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2 (70%)
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">最小尺寸</h2>
      <div style="height: 300px">
        <Splitter :min-size="20">
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-100 flex items-center justify-center"
              >
                面板 1 (最小 20%)
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-gray-200 flex items-center justify-center"
              >
                面板 2 (最小 20%)
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义样式</h2>
      <div style="height: 300px">
        <Splitter
          :pt="{
            gutter: 'bg-blue-500 hover:bg-blue-600',
            gutterHandler: 'bg-white',
          }"
        >
          <template #panel-0>
            <SplitterItem>
              <div
                class="h-full p-4 bg-blue-50 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem>
              <div
                class="h-full p-4 bg-blue-100 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <div style="height: 300px">
        <Splitter
          unstyled
          :pt="{
            root: 'flex relative',
            gutter:
              'flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 cursor-col-resize',
            gutterHandler: 'h-8 w-1 bg-white rounded-full',
          }"
        >
          <template #panel-0>
            <SplitterItem unstyled :pt="{ root: 'overflow-auto' }">
              <div
                class="h-full p-4 bg-purple-50 flex items-center justify-center"
              >
                面板 1
              </div>
            </SplitterItem>
          </template>
          <template #panel-1>
            <SplitterItem unstyled :pt="{ root: 'overflow-auto' }">
              <div
                class="h-full p-4 bg-pink-50 flex items-center justify-center"
              >
                面板 2
              </div>
            </SplitterItem>
          </template>
        </Splitter>
      </div>
    </section>
  </div>
</template>
