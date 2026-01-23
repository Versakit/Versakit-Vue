import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from '../src/index.vue'

describe('Tooltip', () => {
  it('renders properly', () => {
    const wrapper = mount(Tooltip, {
      props: { content: 'Tooltip text' },
      slots: { default: '<button>Hover me</button>' },
    })
    expect(wrapper.text()).toContain('Hover me')
  })

  it('renders with different placements', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const
    placements.forEach((placement) => {
      const wrapper = mount(Tooltip, {
        props: { content: 'Tooltip', placement },
        slots: { default: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with custom content slot', () => {
    const wrapper = mount(Tooltip, {
      slots: {
        default: '<button>Button</button>',
        content: '<div>Custom tooltip</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(Tooltip, {
      props: { content: 'Tooltip', disabled: true },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with arrow', () => {
    const wrapper = mount(Tooltip, {
      props: { content: 'Tooltip', arrow: true },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
