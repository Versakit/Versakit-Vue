import type { StoryObj } from '@storybook/vue3'
import { VKPagination } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Pagination',
  component: VKPagination,
  argTypes: {
    modelValue: {
      control: 'number',
      description: '当前页码',
      defaultValue: 1,
    },
    total: {
      control: 'number',
      description: '总条目数',
      defaultValue: 100,
    },
    pageSize: {
      control: 'number',
      description: '每页显示条目个数',
      defaultValue: 10,
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '分页组件尺寸',
      defaultValue: 'md',
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outline', 'ghost'],
      description: '分页组件样式变体',
      defaultValue: 'filled',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    pagerCount: {
      control: 'number',
      description: '页码按钮的数量',
      defaultValue: 7,
    },
    showQuickJumper: {
      control: 'boolean',
      description: '是否显示快速跳转',
      defaultValue: false,
    },
    showSizeChanger: {
      control: 'boolean',
      description: '是否显示每页条数选择器',
      defaultValue: false,
    },
    pageSizeOptions: {
      control: 'object',
      description: '每页显示条目数选项列表',
      defaultValue: [10, 20, 50, 100],
    },
    showTotal: {
      control: 'boolean',
      description: '是否显示总条目数',
      defaultValue: false,
    },
    simple: {
      control: 'boolean',
      description: '是否显示简洁模式',
      defaultValue: false,
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      defaultValue: false,
    },
    pt: {
      control: 'object',
      description: 'Pass Through 属性，用于自定义组件内部元素的属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof VKPagination>

// 基础分页
export const Default: Story = {
  render: (args) => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: '<VKPagination v-bind="args" v-model="currentPage" />',
  }),
  args: {
    total: 100,
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">小尺寸</p>
          <VKPagination :total="100" size="sm" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">中尺寸（默认）</p>
          <VKPagination :total="100" size="md" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">大尺寸</p>
          <VKPagination :total="100" size="lg" v-model="currentPage" />
        </div>
      </div>
    `,
  }),
}

// 不同样式变体
export const Variants: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">填充样式（默认）</p>
          <VKPagination :total="100" variant="filled" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">轮廓样式</p>
          <VKPagination :total="100" variant="outline" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">幽灵样式</p>
          <VKPagination :total="100" variant="ghost" v-model="currentPage" />
        </div>
      </div>
    `,
  }),
}

// 简洁模式
export const Simple: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKPagination :total="100" simple v-model="currentPage" />
      </div>
    `,
  }),
}

// 显示总数
export const ShowTotal: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">默认总数显示</p>
          <VKPagination :total="100" :show-total="true" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">自定义总数显示</p>
          <VKPagination :total="100" :show-total="true" v-model="currentPage">
            <template #total="{ total, range }">
              显示第 {{ range[0] }} 到 {{ range[1] }} 条，共 {{ total }} 条
            </template>
          </VKPagination>
        </div>
      </div>
    `,
  }),
}

// 快速跳转
export const QuickJumper: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <VKPagination :total="100" :show-quick-jumper="true" v-model="currentPage" />
    `,
  }),
}

// 页码数量
export const PagerCount: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(4)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">默认页码数量（7）</p>
          <VKPagination :total="100" v-model="currentPage" />
        </div>
        <div>
          <p style="margin-bottom: 8px;">较少页码数量（5）</p>
          <VKPagination :total="100" :pager-count="5" v-model="currentPage" />
        </div>
      </div>
    `,
  }),
}

// 每页条数选择器
export const SizeChanger: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      const pageSize = ref(10)

      const handleSizeChange = (size) => {
        pageSize.value = size
      }

      return { currentPage, pageSize, handleSizeChange }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">标准每页条数选择器</p>
          <VKPagination 
            :total="100" 
            :show-size-changer="true" 
            :page-size="pageSize"
            v-model="currentPage"
            @size-change="handleSizeChange" 
          />
        </div>
        <div>
          <p style="margin-bottom: 8px;">自定义每页条数选项</p>
          <VKPagination 
            :total="100" 
            :show-size-changer="true" 
            :page-size-options="[5, 10, 15, 20]"
            :page-size="pageSize"
            v-model="currentPage"
            @size-change="handleSizeChange" 
          />
        </div>
      </div>
    `,
  }),
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(3)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <VKPagination :total="100" :disabled="true" v-model="currentPage" />
        <VKPagination :total="100" :disabled="true" :show-quick-jumper="true" v-model="currentPage" />
        <VKPagination :total="100" :disabled="true" :show-size-changer="true" v-model="currentPage" />
      </div>
    `,
  }),
}

// 完整功能
export const FullFeatured: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      const pageSize = ref(10)

      const handlePageChange = (page) => {
        console.log('页码变化:', page)
      }

      const handleSizeChange = (size) => {
        pageSize.value = size
        console.log('每页条数变化:', size)
      }

      return {
        currentPage,
        pageSize,
        handlePageChange,
        handleSizeChange,
      }
    },
    template: `
      <VKPagination 
        :total="500" 
        :show-total="true"
        :show-quick-jumper="true"
        :show-size-changer="true"
        :page-size="pageSize"
        v-model="currentPage"
        @change="handlePageChange"
        @size-change="handleSizeChange" 
      >
        <template #total="{ total, range }">
          {{ range[0] }}-{{ range[1] }} / {{ total }} 条记录
        </template>
      </VKPagination>
    `,
  }),
}

// 自定义按钮
export const CustomButtons: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <VKPagination :total="100" v-model="currentPage">
        <template #prev>
          <span style="display: flex; align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            上一页
          </span>
        </template>
        <template #next>
          <span style="display: flex; align-items: center;">
            下一页
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </span>
        </template>
        <template #pageItem="{ page, active }">
          <span :style="{ 
            fontWeight: active ? 'bold' : 'normal',
            color: active ? '#42b883' : 'inherit' 
          }">
            {{ page }}
          </span>
        </template>
      </VKPagination>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKPagination },
    setup() {
      const currentPage = ref(1)
      return { currentPage }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="margin-bottom: 8px;">无样式分页</p>
          <VKPagination 
            :total="100" 
            unstyled 
            v-model="currentPage"
            style="display: flex; gap: 8px; align-items: center;"
          >
            <template #prev>
              <button style="padding: 4px 8px; background: #f0f0f0; border: none; border-radius: 4px;">上一页</button>
            </template>
            <template #next>
              <button style="padding: 4px 8px; background: #f0f0f0; border: none; border-radius: 4px;">下一页</button>
            </template>
            <template #pageItem="{ page, active }">
              <button 
                style="padding: 4px 10px; border: none; border-radius: 4px; cursor: pointer;"
                :style="{
                  background: active ? '#42b883' : '#f0f0f0',
                  color: active ? 'white' : 'black'
                }"
              >
                {{ page }}
              </button>
            </template>
          </VKPagination>
        </div>
        
        <div>
          <p style="margin-bottom: 8px;">使用 PT 自定义元素</p>
          <VKPagination 
            :total="100" 
            v-model="currentPage"
            :pt="{
              root: { class: 'rounded-full bg-gray-100 p-2' },
              pageButton: { class: 'rounded-full hover:bg-blue-100' },
              prevButton: { class: 'rounded-full hover:bg-blue-100' },
              nextButton: { class: 'rounded-full hover:bg-blue-100' }
            }"
          />
        </div>
      </div>
    `,
  }),
}
