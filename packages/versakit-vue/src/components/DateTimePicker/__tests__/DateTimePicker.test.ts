import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DateTimePicker from '../src/index.vue'

describe('DateTimePicker', () => {
  it('renders properly', () => {
    const wrapper = mount(DateTimePicker)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('handles v-model', () => {
    const date = new Date('2024-01-15T14:30:00')
    const wrapper = mount(DateTimePicker, {
      props: { modelValue: date },
    })
    expect(wrapper.props('modelValue')).toEqual(date)
  })

  it('renders with placeholder', () => {
    const wrapper = mount(DateTimePicker, {
      props: { placeholder: 'Select date and time' },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Select date and time')
  })

  it('handles disabled state', () => {
    const wrapper = mount(DateTimePicker, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles clearable', () => {
    const wrapper = mount(DateTimePicker, {
      props: {
        modelValue: new Date(),
        clearable: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(DateTimePicker, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
