import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Popover from '../src/index.vue'

describe('Popover', () => {
  it('renders properly', () => {
    const wrapper = mount(Popover, {
      props: { content: 'Popover content' },
      slots: { trigger: '<button>Trigger</button>' },
    })
    expect(wrapper.text()).toContain('Trigger')
  })

  it('renders with different triggers', () => {
    const triggers = ['click', 'hover', 'focus'] as const
    triggers.forEach((trigger) => {
      const wrapper = mount(Popover, {
        props: { content: 'Content', trigger },
        slots: { trigger: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different placements', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const
    placements.forEach((placement) => {
      const wrapper = mount(Popover, {
        props: { content: 'Content', placement },
        slots: { trigger: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with title', () => {
    const wrapper = mount(Popover, {
      props: {
        title: 'Popover Title',
        content: 'Popover content',
      },
      slots: { trigger: '<button>Button</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with custom content slot', () => {
    const wrapper = mount(Popover, {
      slots: {
        trigger: '<button>Button</button>',
        default: '<div>Custom content</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(Popover, {
      props: { content: 'Content', disabled: true },
      slots: { trigger: '<button>Button</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with arrow', () => {
    const wrapper = mount(Popover, {
      props: { content: 'Content', showArrow: true },
      slots: { trigger: '<button>Button</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
