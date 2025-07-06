import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Textarea } from '@versakit/vue'
import '@versakit/vue/style'

// 定义组件元数据
const meta: Meta<typeof Textarea> = {
  title: '组件/Textarea 文本域',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'text',
      description: '文本域的值',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rows: {
      control: 'number',
      description: '文本域的行数',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    maxLength: {
      control: 'number',
      description: '最大字符数',
      table: {
        type: { summary: 'number' },
      },
    },
    minLength: {
      control: 'number',
      description: '最小字符数',
      table: {
        type: { summary: 'number' },
      },
    },
    autosize: {
      control: 'boolean',
      description: '是否自适应高度',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
      description: '调整大小的方式',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    showCount: {
      control: 'boolean',
      description: '是否显示字数统计',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '文本域大小',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    status: {
      control: 'select',
      options: [undefined, 'error', 'warning', 'success'],
      description: '文本域状态',
      table: {
        type: { summary: 'string' },
      },
    },
    unstyled: {
      control: 'boolean',
      description: '是否使用无样式模式',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pt: {
      control: 'object',
      description: '自定义样式类名',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

// 基础示例
export const Basic: Story = {
  args: {
    modelValue: '',
    placeholder: '请输入内容',
    rows: 4,
  },
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Textarea placeholder="小尺寸文本域" size="sm" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Textarea placeholder="中等尺寸文本域" size="md" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Textarea placeholder="大尺寸文本域" size="lg" />
        </div>
      </div>
    `,
  }),
}

// 不同状态
export const Status: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <Textarea placeholder="错误状态" status="error" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Textarea placeholder="警告状态" status="warning" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Textarea placeholder="成功状态" status="success" />
        </div>
      </div>
    `,
  }),
}

// 字数限制
export const MaxLength: Story = {
  args: {
    modelValue: '',
    placeholder: '请输入内容，最多100个字符',
    maxLength: 100,
    showCount: true,
  },
}

// 自适应高度
export const Autosize: Story = {
  args: {
    modelValue: '',
    placeholder: '输入内容时会自动调整高度',
    autosize: true,
  },
}

// 调整大小
export const Resize: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="space-y-4">
        <div>
          <p class="mb-2">不可调整大小</p>
          <Textarea placeholder="不可调整大小" resize="none" />
        </div>
        <div>
          <p class="mb-2">可以水平调整大小</p>
          <Textarea placeholder="可以水平调整大小" resize="horizontal" />
        </div>
        <div>
          <p class="mb-2">可以垂直调整大小</p>
          <Textarea placeholder="可以垂直调整大小" resize="vertical" />
        </div>
        <div>
          <p class="mb-2">可以自由调整大小</p>
          <Textarea placeholder="可以自由调整大小" resize="both" />
        </div>
      </div>
    `,
  }),
}

// 自定义样式
export const CustomStyle: Story = {
  args: {
    modelValue: '',
    placeholder: '自定义样式的文本域',
    pt: {
      root: 'w-full',
      textarea:
        'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
      counter: 'text-purple-600 text-sm',
    },
    maxLength: 100,
    showCount: true,
  },
}

// 无样式模式
export const Unstyled: Story = {
  args: {
    modelValue: '',
    placeholder: '无样式模式的文本域',
    unstyled: true,
    pt: {
      root: 'w-full',
      textarea:
        'w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300',
      counter: 'mt-1 text-right text-sm text-blue-600',
    },
    maxLength: 100,
    showCount: true,
  },
}

// 完整示例展示
export const AllExamples: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="space-y-8 p-4">
        <section>
          <h2 class="text-xl font-bold mb-4">基础用法</h2>
          <Textarea placeholder="请输入内容" />
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">小尺寸</p>
              <Textarea placeholder="小尺寸文本域" size="sm" />
            </div>
            <div>
              <p class="mb-2">中等尺寸</p>
              <Textarea placeholder="中等尺寸文本域" size="md" />
            </div>
            <div>
              <p class="mb-2">大尺寸</p>
              <Textarea placeholder="大尺寸文本域" size="lg" />
            </div>
          </div>
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同状态</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">错误状态</p>
              <Textarea placeholder="错误状态" status="error" />
            </div>
            <div>
              <p class="mb-2">警告状态</p>
              <Textarea placeholder="警告状态" status="warning" />
            </div>
            <div>
              <p class="mb-2">成功状态</p>
              <Textarea placeholder="成功状态" status="success" />
            </div>
          </div>
        </section>
      </div>
    `,
  }),
}
