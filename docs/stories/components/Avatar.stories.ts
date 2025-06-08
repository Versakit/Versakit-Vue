import { VKAvatar } from '@versakit/vue'
import { VKBadge } from '@versakit/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import '@versakit/vue/style'

const meta: Meta<typeof VKAvatar> = {
  title: 'Components/Avatar',
  component: VKAvatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      description: '头像大小',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'md' },
      },
    },
    shape: {
      control: {
        type: 'select',
        options: ['circle', 'square', 'rounded'],
      },
      description: '头像形状',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
    },
    src: {
      control: 'text',
      description: '头像图片源',
      table: {
        type: { summary: 'string' },
      },
    },
    fallback: {
      control: 'text',
      description: '头像图片加载失败时显示的回退内容',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: '头像显示的文本',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'success', 'warning', 'info', 'error', 'default'],
      },
      description: '头像颜色风格',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['online', 'offline', 'busy', 'away', 'none'],
      },
      description: '头像状态',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    statusPosition: {
      control: {
        type: 'select',
        options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      },
      description: '状态显示位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-right' },
      },
    },
    borderWidth: {
      control: 'number',
      description: '边框宽度',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '0' },
      },
    },
    borderColor: {
      control: 'color',
      description: '边框颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'transparent' },
      },
    },
    icon: {
      control: 'text',
      description: '头像图标',
      table: {
        type: { summary: 'string' },
      },
    },
    loading: {
      control: 'boolean',
      description: '是否为加载状态',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showFallback: {
      control: 'boolean',
      description: '是否显示回退内容',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onError: {
      action: 'error',
      description: '图片加载错误事件',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof VKAvatar>

export const Default: Story = {
  args: {
    text: 'JS',
    size: 'md',
    shape: 'circle',
    variant: 'default',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    size: 'md',
    shape: 'circle',
  },
}

export const WithStatus: Story = {
  render: () => ({
    components: { VKAvatar, VKBadge },
    template: `
      <div class="flex space-x-8">
        <VKBadge dot variant="success" position="bottom-right">
          <VKAvatar text="ON" variant="primary" />
        </VKBadge>
        
        <VKBadge dot variant="error" position="bottom-right">
          <VKAvatar text="OFF" variant="default" />
        </VKBadge>
        
        <VKBadge dot variant="warning" position="bottom-right">
          <VKAvatar text="AFK" variant="warning" />
        </VKBadge>
        
        <VKBadge dot variant="info" position="bottom-right">
          <VKAvatar text="BUSY" variant="info" />
        </VKBadge>
      </div>
    `,
  }),
}

export const WithStatusPositions: Story = {
  render: () => ({
    components: { VKAvatar, VKBadge },
    template: `
      <div class="flex space-x-8">
        <VKBadge dot variant="success" position="top-right">
          <VKAvatar text="TR" variant="primary" />
        </VKBadge>
        
        <VKBadge dot variant="success" position="top-left">
          <VKAvatar text="TL" variant="primary" />
        </VKBadge>
        
        <VKBadge dot variant="success" position="bottom-right">
          <VKAvatar text="BR" variant="primary" />
        </VKBadge>
        
        <VKBadge dot variant="success" position="bottom-left">
          <VKAvatar text="BL" variant="primary" />
        </VKBadge>
      </div>
    `,
  }),
}

export const CustomSize: Story = {
  args: {
    text: 'JS',
    size: 64,
    variant: 'success',
  },
}

export const Different_Shapes: Story = {
  render: () => ({
    components: { VKAvatar },
    template: `
      <div class="flex space-x-4">
        <VKAvatar text="C" shape="circle" variant="primary" />
        <VKAvatar text="S" shape="square" variant="success" />
        <VKAvatar text="R" shape="rounded" variant="warning" />
      </div>
    `,
  }),
}

export const Different_Sizes: Story = {
  render: () => ({
    components: { VKAvatar },
    template: `
      <div class="flex items-end space-x-2">
        <VKAvatar text="XS" size="xs" variant="primary" />
        <VKAvatar text="SM" size="sm" variant="success" />
        <VKAvatar text="MD" size="md" variant="warning" />
        <VKAvatar text="LG" size="lg" variant="info" />
        <VKAvatar text="XL" size="xl" variant="error" />
      </div>
    `,
  }),
}

export const Different_Variants: Story = {
  render: () => ({
    components: { VKAvatar },
    template: `
      <div class="flex space-x-2">
        <VKAvatar text="P" variant="primary" />
        <VKAvatar text="S" variant="success" />
        <VKAvatar text="W" variant="warning" />
        <VKAvatar text="I" variant="info" />
        <VKAvatar text="E" variant="error" />
        <VKAvatar text="D" variant="default" />
      </div>
    `,
  }),
}

export const With_Border: Story = {
  args: {
    text: 'JS',
    borderWidth: 2,
    borderColor: '#3b82f6',
    variant: 'default',
  },
}

export const With_Icon: Story = {
  args: {
    icon: 'user',
    variant: 'primary',
  },
}

export const Loading_State: Story = {
  args: {
    text: 'JS',
    loading: true,
    variant: 'primary',
  },
}

export const Fallback_When_Image_Error: Story = {
  args: {
    src: 'https://invalid-image-url.com/image.jpg',
    fallback: 'NA',
    variant: 'error',
  },
}
