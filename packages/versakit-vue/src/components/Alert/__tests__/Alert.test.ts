import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

describe('Alert', () => {
  it('renders properly', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test alert' },
    })
    expect(wrapper.text()).toContain('Test alert')
  })

  it('renders with title', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Alert Title',
        description: 'Alert description',
      },
    })
    expect(wrapper.text()).toContain('Alert Title')
    expect(wrapper.text()).toContain('Alert description')
  })

  it('renders with different variants', () => {
    const variants = ['info', 'success', 'warning', 'error'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Alert, {
        props: { variant, description: 'Test' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Alert, {
        props: { size, description: 'Test' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows icon by default', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test' },
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('hides icon when icon prop is false', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', icon: false },
    })
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('shows close button when closable', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', closable: true },
    })
    expect(wrapper.find('button[aria-label="关闭"]').exists()).toBe(true)
  })

  it('hides alert when close button clicked', async () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', closable: true },
    })
    await wrapper.find('button[aria-label="关闭"]').trigger('click')
    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
  })

  it('emits close event when closed', async () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', closable: true },
    })
    await wrapper.find('button[aria-label="关闭"]').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('renders with custom icon slot', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test' },
      slots: {
        icon: '<span class="custom-icon">!</span>',
      },
    })
    expect(wrapper.find('.custom-icon').exists()).toBe(true)
  })

  it('renders with title slot', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test' },
      slots: {
        title: '<h3>Custom Title</h3>',
      },
    })
    expect(wrapper.html()).toContain('Custom Title')
  })

  it('renders with default slot for description', () => {
    const wrapper = mount(Alert, {
      slots: {
        default: '<p>Custom description</p>',
      },
    })
    expect(wrapper.html()).toContain('Custom description')
  })

  it('renders with border', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', border: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with shadow', () => {
    const wrapper = mount(Alert, {
      props: { description: 'Test', shadow: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different rounded values', () => {
    const rounded = ['none', 'sm', 'md', 'lg', 'full'] as const
    rounded.forEach((r) => {
      const wrapper = mount(Alert, {
        props: { description: 'Test', rounded: r },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
