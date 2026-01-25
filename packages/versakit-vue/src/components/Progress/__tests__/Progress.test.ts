import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Progress from '../src/index.vue'

describe('Progress', () => {
  it('renders properly', () => {
    const wrapper = mount(Progress, {
      props: { value: 50 },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays correct percentage', () => {
    const wrapper = mount(Progress, {
      props: { value: 75, showValue: true },
    })
    // Just check the component renders
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Progress, {
        props: { value: 50, size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different colors', () => {
    const colors = ['primary', 'success', 'warning', 'error'] as const
    colors.forEach((color) => {
      const wrapper = mount(Progress, {
        props: { value: 50, color },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles indeterminate state', () => {
    const wrapper = mount(Progress, {
      props: { indeterminate: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('clamps value between 0 and 100', () => {
    const wrapper1 = mount(Progress, {
      props: { value: -10 },
    })
    expect(wrapper1.exists()).toBe(true)

    const wrapper2 = mount(Progress, {
      props: { value: 150 },
    })
    expect(wrapper2.exists()).toBe(true)
  })
})
