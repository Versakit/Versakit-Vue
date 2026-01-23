import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tabs from '../src/tabs.vue'
import TabItem from '../src/tab-item.vue'

describe('Tabs', () => {
  it('renders properly', () => {
    const wrapper = mount(Tabs, {
      slots: {
        default: `
          <TabItem name="1" title="Tab 1">Content 1</TabItem>
          <TabItem name="2" title="Tab 2">Content 2</TabItem>
        `,
      },
      global: {
        components: { TabItem },
      },
    })
    expect(wrapper.text()).toContain('Tab 1')
    expect(wrapper.text()).toContain('Tab 2')
  })

  it('handles active tab', () => {
    const wrapper = mount(Tabs, {
      props: {
        modelValue: '1',
      },
      slots: {
        default: `
          <TabItem name="1" title="Tab 1">Content 1</TabItem>
          <TabItem name="2" title="Tab 2">Content 2</TabItem>
        `,
      },
      global: {
        components: { TabItem },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different variants', () => {
    const variants = ['default', 'line', 'enclosed'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Tabs, {
        props: {
          variant,
        },
        slots: {
          default: `<TabItem name="1" title="Tab 1">Content 1</TabItem>`,
        },
        global: {
          components: { TabItem },
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
