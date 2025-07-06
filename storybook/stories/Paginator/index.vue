<template>
  <div class="space-y-8">
    <section>
      <h2 class="text-xl font-bold mb-4">基础分页器</h2>
      <Paginator :totalPages="10" />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">分页器大小</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">分页器变体</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">分页器形状</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">可见页码数量</h2>
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示7个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="7" :modelValue="10" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">带页码跳转</h2>
      <Paginator :totalPages="100" showJumper />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">禁用状态</h2>
      <Paginator :totalPages="10" disabled />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">自定义按钮</h2>
      <Paginator :totalPages="10">
        <template #first-button>
          <span class="text-xs">首页</span>
        </template>
        <template #prev-button>
          <span class="text-xs">上一页</span>
        </template>
        <template #next-button>
          <span class="text-xs">下一页</span>
        </template>
        <template #last-button>
          <span class="text-xs">尾页</span>
        </template>
      </Paginator>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">无样式模式</h2>
      <Paginator
        :totalPages="10"
        unstyled
        :pt="{
          root: 'flex items-center justify-center',
          list: 'flex items-center gap-1',
          item: '',
          button:
            'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm hover:bg-gray-100',
          activeButton:
            'w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full',
          prevButton:
            'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
          nextButton:
            'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
          firstButton:
            'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
          lastButton:
            'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
          ellipsis: 'w-8 h-8 flex items-center justify-center',
        }"
      />
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">分页器与表格结合</h2>
      <div class="border rounded-md overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left">ID</th>
              <th class="px-4 py-2 text-left">名称</th>
              <th class="px-4 py-2 text-left">状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 5" :key="i" class="border-t">
              <td class="px-4 py-2">{{ i }}</td>
              <td class="px-4 py-2">项目 {{ i }}</td>
              <td class="px-4 py-2">
                <span
                  :class="`inline-block px-2 py-1 rounded-full text-xs ${i % 2 === 0 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`"
                >
                  {{ i % 2 === 0 ? '已完成' : '进行中' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-4 border-t">
          <Paginator :totalPages="10" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-xl font-bold mb-4">受控分页器</h2>
      <div class="space-y-4">
        <p>当前页码: {{ currentPage }}</p>
        <Paginator :totalPages="10" v-model="currentPage" />
        <div class="flex gap-2">
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            上一页
          </button>
          <button
            @click="currentPage = Math.min(10, currentPage + 1)"
            class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            下一页
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Paginator } from '@versakit/vue'

const currentPage = ref(1)
</script>
