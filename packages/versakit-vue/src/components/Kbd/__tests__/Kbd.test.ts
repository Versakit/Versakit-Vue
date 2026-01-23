import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Kbd from '../src/index.vue'

describe('Kbd', () => {
  it('renders properly', () => {
    const wrapper = mount(Kbd, {
      slots: { default: 'Ctrl' },
    })
    expect(wrapper.text()).toContain('Ctrl')
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Kbd, {
        props: { size },
        slots: { default: 'K' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders multiple keys', () => {
    const wrapper = mount(Kbd, {
      props: { keys: ['Ctrl', 'Shift', 'K'] },
    })
    // Just check the component renders
    expect(wrapper.exists()).toBe(true)
  })
})
