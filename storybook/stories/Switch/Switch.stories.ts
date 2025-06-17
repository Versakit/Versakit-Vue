import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Switch from './Switch.vue'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Switch },
    template: '<Switch />',
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <Switch />
        <span>默认选中状态</span>
      </div>
    `,
    setup() {
      return {
        checked: true,
      }
    },
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Switch disabled />
          <span>禁用状态（未选中）</span>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <Switch disabled checked />
          <span>禁用状态（已选中）</span>
        </div>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Switch },
    template: `
      <label style="display: inline-flex; gap: 0.5rem; align-items: center; cursor: pointer;">
        <Switch />
        <span>带标签的开关</span>
      </label>
    `,
  }),
}
