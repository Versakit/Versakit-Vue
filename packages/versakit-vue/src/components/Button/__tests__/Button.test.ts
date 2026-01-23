import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('Button', () => {
  it('renders properly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'link', 'danger', 'success', 'warning', 'info'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Button, {
        props: { variant },
        slots: { default: 'Button' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size },
        slots: { default: 'Button' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles disabled state', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('handles loading state', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, {
      slots: { default: 'Button' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      slots: { default: 'Button' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('renders with fullWidth prop', () => {
    const wrapper = mount(Button, {
      props: { fullWidth: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with rounded prop', () => {
    const wrapper = mount(Button, {
      props: { rounded: true },
      slots: { default: 'Button' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with icon slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Button',
        icon: '<svg></svg>',
      },
    })
    expect(wrapper.html()).toContain('<svg></svg>')
  })

  it('renders with loading slot', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      slots: {
        default: 'Button',
        loading: '<span>Loading...</span>',
      },
    })
    expect(wrapper.html()).toContain('Loading...')
  })

  it('supports different button types', () => {
    const types = ['button', 'submit', 'reset'] as const
    types.forEach((type) => {
      const wrapper = mount(Button, {
        props: { type },
        slots: { default: 'Button' },
      })
      expect(wrapper.find('button').attributes('type')).toBe(type)
    })
  })
})
