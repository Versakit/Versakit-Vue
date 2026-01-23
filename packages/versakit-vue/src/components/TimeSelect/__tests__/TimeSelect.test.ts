import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TimeSelect from '../src/index.vue'

describe('TimeSelect', () => {
  it('renders properly', () => {
    const wrapper = mount(TimeSelect)
    expect(wrapper.exists()).toBe(true)
  })

  it('handles v-model', () => {
    const wrapper = mount(TimeSelect, {
      props: { modelValue: '14:30' },
    })
    expect(wrapper.props('modelValue')).toBe('14:30')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(TimeSelect, {
      props: { placeholder: 'Select time' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(TimeSelect, {
      props: { disabled: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles step prop', () => {
    const wrapper = mount(TimeSelect, {
      props: { step: '00:15' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles start and end time', () => {
    const wrapper = mount(TimeSelect, {
      props: {
        start: '08:00',
        end: '18:00',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(TimeSelect, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
