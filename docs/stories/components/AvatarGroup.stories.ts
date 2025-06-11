import { VKAvatar, VKAvatarGroup } from '@versakit/vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import '@versakit/vue/style'

const meta: Meta<typeof VKAvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: VKAvatarGroup,
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
    max: {
      control: 'number',
      description: '最大显示数量',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'Infinity' },
      },
    },
    spacing: {
      control: 'text',
      description: '头像间距',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '-0.5rem' },
      },
    },
    overflowText: {
      control: 'text',
      description: '溢出提示文本',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '+' },
      },
    },
    stack: {
      control: 'boolean',
      description: '头像是否堆叠',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    borderWidth: {
      control: 'text',
      description: '头像边框宽度',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '2px' },
      },
    },
    borderColor: {
      control: 'color',
      description: '头像边框颜色',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof VKAvatarGroup>

export const Default: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <VKAvatarGroup>
        <VKAvatar text="JS" variant="primary" />
        <VKAvatar text="TS" variant="success" />
        <VKAvatar text="VJ" variant="warning" />
        <VKAvatar text="RC" variant="info" />
      </VKAvatarGroup>
    `,
  }),
}

export const WithImages: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <VKAvatarGroup>
        <VKAvatar src="https://i.pravatar.cc/300?img=1" />
        <VKAvatar src="https://i.pravatar.cc/300?img=2" />
        <VKAvatar src="https://i.pravatar.cc/300?img=3" />
        <VKAvatar src="https://i.pravatar.cc/300?img=4" />
      </VKAvatarGroup>
    `,
  }),
}

export const Stacked: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <VKAvatarGroup stack>
        <VKAvatar text="JS" variant="primary" />
        <VKAvatar text="TS" variant="success" />
        <VKAvatar text="VJ" variant="warning" />
        <VKAvatar text="RC" variant="info" />
      </VKAvatarGroup>
    `,
  }),
}

export const WithMax: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <VKAvatarGroup :max="3" overflowText="+3">
        <VKAvatar text="JS" variant="primary" />
        <VKAvatar text="TS" variant="success" />
        <VKAvatar text="VJ" variant="warning" />
        <VKAvatar text="RC" variant="info" />
        <VKAvatar text="AG" variant="error" />
        <VKAvatar text="SD" variant="default" />
      </VKAvatarGroup>
    `,
  }),
}

export const Different_Sizes: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <div class="flex flex-col space-y-4">
        <VKAvatarGroup size="xs">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup size="sm">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup size="md">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup size="lg">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup size="xl">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
      </div>
    `,
  }),
}

export const Custom_Spacing: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <div class="flex flex-col space-y-4">
        <VKAvatarGroup spacing="-1rem">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup spacing="-0.5rem">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
        
        <VKAvatarGroup spacing="-0.25rem">
          <VKAvatar text="A" variant="primary" />
          <VKAvatar text="B" variant="success" />
          <VKAvatar text="C" variant="warning" />
        </VKAvatarGroup>
      </div>
    `,
  }),
}

export const With_Border: Story = {
  render: () => ({
    components: { VKAvatar, VKAvatarGroup },
    template: `
      <VKAvatarGroup 
        borderWidth="2px"
        borderColor="white"
      >
        <VKAvatar text="JS" variant="primary" />
        <VKAvatar text="TS" variant="success" />
        <VKAvatar text="VJ" variant="warning" />
      </VKAvatarGroup>
    `,
  }),
}
