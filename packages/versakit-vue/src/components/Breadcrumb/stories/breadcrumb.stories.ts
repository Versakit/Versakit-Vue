import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Breadcrumb, BreadcrumbItem } from '../index'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: '分隔符',
      defaultValue: '/',
    },
    separatorIcon: {
      control: 'text',
      description: '图标分隔符',
    },
    unstyled: {
      control: 'boolean',
      description: '是否移除默认样式',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Breadcrumb, BreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumb v-bind="args">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/components">组件</BreadcrumbItem>
        <BreadcrumbItem>面包屑</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
}

export const CustomSeparator: Story = {
  render: (args) => ({
    components: { Breadcrumb, BreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumb v-bind="args">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/components">组件</BreadcrumbItem>
        <BreadcrumbItem>面包屑</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {
    separator: '>',
  },
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Breadcrumb, BreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumb v-bind="args">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem disabled href="/components">组件</BreadcrumbItem>
        <BreadcrumbItem>面包屑</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
}

export const Active: Story = {
  render: (args) => ({
    components: { Breadcrumb, BreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
      <Breadcrumb v-bind="args">
        <BreadcrumbItem href="/">首页</BreadcrumbItem>
        <BreadcrumbItem href="/components">组件</BreadcrumbItem>
        <BreadcrumbItem active>面包屑</BreadcrumbItem>
      </Breadcrumb>
    `,
  }),
  args: {},
}
