import type { StoryObj } from '@storybook/vue3-vite'
import { ref, inject } from 'vue'
import { VKToast, VKToastProvider, VKButton } from '@versakit/vue'
import '@versakit/vue/style'

// 定义Toast服务的接口
interface ToastService {
  (content: string | object): string // 直接调用返回toast id
  success(content: string | object): string
  error(content: string | object): string
  warning(content: string | object): string
  info(content: string | object): string
  isActive(id: string): boolean
  update(id: string, options: object): void
  clear(id: string): void
  clearAll(): void
}

// 避免使用类型注解和断言，让Storybook自己推断类型
const meta = {
  title: 'Components/Toast',
  component: VKToast,
  argTypes: {
    title: {
      control: 'text',
      description: '标题',
    },
    message: {
      control: 'text',
      description: '提示内容',
      defaultValue: '这是一条消息通知',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: '变体样式',
      defaultValue: 'default',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '尺寸',
      defaultValue: 'md',
    },
    position: {
      control: 'select',
      options: [
        'top',
        'top-right',
        'top-left',
        'bottom',
        'bottom-right',
        'bottom-left',
      ],
      description: '显示位置',
      defaultValue: 'top-right',
    },
    duration: {
      control: 'number',
      description: '显示时长(毫秒)，0表示不自动关闭',
      defaultValue: 3000,
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭',
      defaultValue: true,
    },
    progressBar: {
      control: 'boolean',
      description: '是否显示进度条',
      defaultValue: true,
    },
    pauseOnHover: {
      control: 'boolean',
      description: '是否可暂停(hover时)',
      defaultValue: true,
    },
    icon: {
      control: 'boolean',
      description: '是否显示图标',
      defaultValue: true,
    },
    customIcon: {
      control: 'text',
      description: '自定义图标',
    },
    zIndex: {
      control: 'number',
      description: 'z-index值',
      defaultValue: 1000,
    },
    offset: {
      control: 'number',
      description: '偏移量',
      defaultValue: 16,
    },
    maxWidth: {
      control: 'text',
      description: '最大宽度',
      defaultValue: '350px',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      defaultValue: false,
    },
    animationDuration: {
      control: 'number',
      description: '动画持续时间(毫秒)',
      defaultValue: 300,
    },
    ariaLabel: {
      control: 'text',
      description: '无障碍标签',
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
type Story = StoryObj<typeof VKToast>

// 基础Toast和Provider
export const Default: Story = {
  render: (args) => ({
    components: { VKToast, VKToastProvider, VKButton },
    setup() {
      return { args }
    },
    template: `
      <VKToastProvider>
        <div style="padding: 20px;">
          <VKToast v-bind="args" />
        </div>
      </VKToastProvider>
    `,
  }),
}

// 不同变体
export const Variants: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = (variant) => {
        toast({
          variant,
          title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} 提示`,
          message: `这是一个 ${variant} 类型的提示消息`,
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 20px;">
          <VKButton @click="showToast('default')">默认提示</VKButton>
          <VKButton @click="showToast('success')" variant="success">成功提示</VKButton>
          <VKButton @click="showToast('error')" variant="error">错误提示</VKButton>
          <VKButton @click="showToast('warning')" variant="warning">警告提示</VKButton>
          <VKButton @click="showToast('info')" variant="info">信息提示</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 不同位置
export const Positions: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = (position) => {
        toast({
          position,
          title: `${position} 位置`,
          message: `这是一个显示在 ${position} 位置的提示`,
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px;">
          <VKButton @click="showToast('top-left')">左上</VKButton>
          <VKButton @click="showToast('top')">上方</VKButton>
          <VKButton @click="showToast('top-right')">右上</VKButton>
          
          <VKButton @click="showToast('bottom-left')">左下</VKButton>
          <VKButton @click="showToast('bottom')">下方</VKButton>
          <VKButton @click="showToast('bottom-right')">右下</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = (size) => {
        toast({
          size,
          title: `${size.toUpperCase()} 尺寸`,
          message: `这是一个 ${size} 尺寸的提示消息`,
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 20px;">
          <VKButton @click="showToast('xs')" size="xs">XS</VKButton>
          <VKButton @click="showToast('sm')" size="sm">SM</VKButton>
          <VKButton @click="showToast('md')" size="md">MD</VKButton>
          <VKButton @click="showToast('lg')" size="lg">LG</VKButton>
          <VKButton @click="showToast('xl')" size="xl">XL</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 持续时间
export const Durations: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = (duration) => {
        toast({
          duration,
          title: `持续时间: ${duration}ms`,
          message:
            duration === 0
              ? '此提示不会自动关闭'
              : `此提示将在 ${duration / 1000} 秒后自动关闭`,
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 20px;">
          <VKButton @click="showToast(1000)">1秒</VKButton>
          <VKButton @click="showToast(3000)">3秒(默认)</VKButton>
          <VKButton @click="showToast(5000)">5秒</VKButton>
          <VKButton @click="showToast(0)">不自动关闭</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 无进度条
export const WithoutProgressBar: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = () => {
        toast({
          progressBar: false,
          title: '无进度条',
          message: '此提示不显示进度条',
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="padding: 20px;">
          <VKButton @click="showToast">显示无进度条提示</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 不可关闭
export const NotClosable: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = () => {
        toast({
          closable: false,
          title: '不可关闭',
          message: '此提示不显示关闭按钮',
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="padding: 20px;">
          <VKButton @click="showToast">显示不可关闭提示</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 无图标
export const WithoutIcon: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = () => {
        toast({
          icon: false,
          title: '无图标',
          message: '此提示不显示图标',
        })
      }

      return { showToast }
    },
    template: `
      <VKToastProvider>
        <div style="padding: 20px;">
          <VKButton @click="showToast">显示无图标提示</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 自定义内容
export const CustomContent: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton, VKToast },
    setup() {
      const customToast = ref(false)

      return { customToast }
    },
    template: `
      <VKToastProvider>
        <div style="padding: 20px;">
          <VKButton @click="customToast = true">显示自定义内容提示</VKButton>
          
          <div v-if="customToast" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
            <VKToast variant="info" @close="customToast = false">
              <template #title>
                <div style="display: flex; align-items: center; gap: 5px;">
                  <span style="font-size: 1.2em;">📬</span>
                  <span>新消息通知</span>
                </div>
              </template>
              
              <template #message>
                <div>
                  <p style="margin: 0 0 8px 0;">您有 <strong>3</strong> 条未读消息</p>
                  <VKButton size="xs" variant="info">查看全部</VKButton>
                </div>
              </template>
            </VKToast>
          </div>
        </div>
      </VKToastProvider>
    `,
  }),
}

// Toast服务方法
export const ToastService: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showDefault = () => toast('默认提示消息')
      const showSuccess = () => toast.success('操作成功完成')
      const showError = () => toast.error('操作失败')
      const showWarning = () => toast.warning('警告信息')
      const showInfo = () => toast.info('提示信息')

      const showWithOptions = () => {
        const id = toast({
          title: '带ID的提示',
          message: '这个提示有唯一ID，可以手动控制',
          duration: 0,
        })

        // 5秒后更新提示
        setTimeout(() => {
          if (toast.isActive(id)) {
            toast.update(id, {
              title: '已更新',
              message: '此提示已被更新',
              variant: 'success',
            })

            // 再过3秒后关闭
            setTimeout(() => {
              if (toast.isActive(id)) {
                toast.clear(id)
              }
            }, 3000)
          }
        }, 5000)
      }

      const clearAll = () => toast.clearAll()

      return {
        showDefault,
        showSuccess,
        showError,
        showWarning,
        showInfo,
        showWithOptions,
        clearAll,
      }
    },
    template: `
      <VKToastProvider>
        <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <VKButton @click="showDefault">默认提示</VKButton>
            <VKButton @click="showSuccess" variant="success">成功提示</VKButton>
            <VKButton @click="showError" variant="error">错误提示</VKButton>
            <VKButton @click="showWarning" variant="warning">警告提示</VKButton>
            <VKButton @click="showInfo" variant="info">信息提示</VKButton>
          </div>
          
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <VKButton @click="showWithOptions">带ID和更新</VKButton>
            <VKButton @click="clearAll" variant="error">清除所有</VKButton>
          </div>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 自定义Provider配置
export const CustomProvider: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton },
    setup() {
      const toast = inject('toast') as ToastService

      const showToast = () => {
        toast('这条消息使用了Provider的默认配置')
      }

      return { showToast }
    },
    template: `
      <VKToastProvider
        defaultPosition="bottom"
        defaultDuration="5000"
        defaultVariant="info"
        defaultSize="lg"
      >
        <div style="padding: 20px;">
          <VKButton @click="showToast">显示自定义Provider配置的提示</VKButton>
        </div>
      </VKToastProvider>
    `,
  }),
}

// 无样式和 PT 属性示例
export const UnstyledAndPT: Story = {
  render: () => ({
    components: { VKToastProvider, VKButton, VKToast },
    setup() {
      const customToast = ref(false)

      return { customToast }
    },
    template: `
      <VKToastProvider>
        <div style="display: flex; flex-direction: column; gap: 50px; padding: 20px;">
          <div>
            <h3>无样式提示</h3>
            <div v-if="customToast" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
              <VKToast 
                unstyled
                @close="customToast = false"
              >
                <template #title>
                  <div style="font-weight: bold; margin-bottom: 5px; color: #42b883;">自定义标题</div>
                </template>
                
                <template #message>
                  <div style="padding: 10px; background: linear-gradient(45deg, #42b883, #35495e); color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
                    自定义样式提示内容
                  </div>
                </template>
              </VKToast>
            </div>
            <VKButton @click="customToast = true">显示无样式提示</VKButton>
          </div>
          
          <div>
            <h3>使用 PT 自定义元素</h3>
            <VKButton 
              @click="() => {
                const toast = inject('toast') as ToastService;
                toast({
                  title: 'PT自定义提示',
                  message: '使用Pass Through自定义样式',
                  pt: {
                    root: { class: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl' },
                    title: { class: 'font-bold text-white' },
                    progress: { class: 'bg-white' }
                  }
                });
              }"
            >
              显示PT自定义提示
            </VKButton>
          </div>
        </div>
      </VKToastProvider>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          '演示无样式模式和 Pass Through (PT) 属性的使用，允许完全自定义提示的样式和行为。',
      },
    },
  },
}
