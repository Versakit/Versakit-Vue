import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from '../src/index.vue'

describe('Badge', () => {
  it('renders properly', () => {
    const wrapper = mount(Badge, {
      props: { content: '5' },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.text()).toContain('5')
    expect(wrapper.text()).toContain('Button')
  })

  it('renders as dot when dot prop is true', () => {
    const wrapper = mount(Badge, {
      props: { dot: true },
      slots: { default: '<button>Button</button>' },
    })
    const badge = wrapper.find('[role="status"]')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('')
  })

  it('formats number content with max', () => {
    const wrapper = mount(Badge, {
      props: { content: 100, max: 99 },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.text()).toContain('99+')
  })

  it('shows exact number when below max', () => {
    const wrapper = mount(Badge, {
      props: { content: 50, max: 99 },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.text()).toContain('50')
  })

  it('renders with different colors', () => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'error'] as const
    colors.forEach((color) => {
      const wrapper = mount(Badge, {
        props: { content: '1', color },
        slots: { default: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Badge, {
        props: { content: '1', size },
        slots: { default: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('hides badge when show is false', () => {
    const wrapper = mount(Badge, {
      props: { content: '5', show: false },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.find('[role="status"]').exists()).toBe(false)
  })

  it('renders with different positions', () => {
    const positions = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const
    positions.forEach((position) => {
      const wrapper = mount(Badge, {
        props: { content: '1', position },
        slots: { default: '<button>Button</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders string content', () => {
    const wrapper = mount(Badge, {
      props: { content: 'NEW' },
      slots: { default: '<button>Button</button>' },
    })
    expect(wrapper.text()).toContain('NEW')
  })
})
