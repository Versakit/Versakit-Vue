import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TimePicker from '../src/index.vue'

describe('TimePicker', () => {
  it('renders properly', () => {
    const wrapper = mount(TimePicker)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('handles v-model', () => {
    const wrapper = mount(TimePicker, {
      props: { modelValue: '14:30' },
    })
    expect(wrapper.props('modelValue')).toBe('14:30')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(TimePicker, {
      props: { placeholder: 'Select time' },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Select time')
  })

  it('handles disabled state', () => {
    const wrapper = mount(TimePicker, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles readonly state', () => {
    const wrapper = mount(TimePicker, {
      props: { readonly: true },
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('renders with different formats', () => {
    const formats = ['HH:mm', 'HH:mm:ss', 'hh:mm A'] as const
    formats.forEach((format) => {
      const wrapper = mount(TimePicker, {
        props: { format },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles clearable', () => {
    const wrapper = mount(TimePicker, {
      props: {
        modelValue: '14:30',
        clearable: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(TimePicker, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles step prop', () => {
    const wrapper = mount(TimePicker, {
      props: { step: 15 },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
