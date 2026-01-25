import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Swap from '../src/index.vue'

describe('Swap', () => {
  it('renders properly', () => {
    const wrapper = mount(Swap, {
      slots: {
        on: '<span>ON</span>',
        off: '<span>OFF</span>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles active prop', () => {
    const wrapper = mount(Swap, {
      props: { active: true },
      slots: {
        on: '<span>ON</span>',
        off: '<span>OFF</span>',
      },
    })
    expect(wrapper.props('active')).toBe(true)
  })

  it('toggles state on click', async () => {
    const wrapper = mount(Swap, {
      slots: {
        on: '<span>ON</span>',
        off: '<span>OFF</span>',
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('update:active')).toBeTruthy()
  })

  it('handles disabled state', () => {
    const wrapper = mount(Swap, {
      props: { disabled: true },
      slots: {
        on: '<span>ON</span>',
        off: '<span>OFF</span>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Swap, {
        props: { size },
        slots: {
          on: '<span>ON</span>',
          off: '<span>OFF</span>',
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
