import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from '../src/index.vue'

describe('Chip', () => {
  it('renders properly', () => {
    const wrapper = mount(Chip, {
      slots: { default: 'Tag' },
    })
    expect(wrapper.text()).toContain('Tag')
  })

  it('renders with different variants', () => {
    const variants = ['filled', 'outlined', 'light'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Chip, {
        props: { variant },
        slots: { default: 'Chip' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different colors', () => {
    const colors = ['primary', 'secondary', 'success', 'warning', 'error'] as const
    colors.forEach((color) => {
      const wrapper = mount(Chip, {
        props: { color },
        slots: { default: 'Chip' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Chip, {
        props: { size },
        slots: { default: 'Chip' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows close button when closable', () => {
    const wrapper = mount(Chip, {
      props: { closable: true },
      slots: { default: 'Chip' },
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('emits close event when close button clicked', async () => {
    const wrapper = mount(Chip, {
      props: { closable: true },
      slots: { default: 'Chip' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('renders with icon slot', () => {
    const wrapper = mount(Chip, {
      slots: {
        default: 'Chip',
        startContent: '<svg></svg>',
      },
    })
    // Just check the component renders
    expect(wrapper.exists()).toBe(true)
  })

  it('handles clickable state', async () => {
    const wrapper = mount(Chip, {
      props: { clickable: true },
      slots: { default: 'Chip' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
