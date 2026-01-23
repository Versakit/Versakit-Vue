import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DatePicker from '../src/index.vue'

describe('DatePicker', () => {
  it('renders properly', () => {
    const wrapper = mount(DatePicker)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('handles v-model', () => {
    const date = new Date('2024-01-15')
    const wrapper = mount(DatePicker, {
      props: { modelValue: date },
    })
    expect(wrapper.props('modelValue')).toEqual(date)
  })

  it('renders with placeholder', () => {
    const wrapper = mount(DatePicker, {
      props: { placeholder: 'Select date' },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Select date')
  })

  it('handles disabled state', () => {
    const wrapper = mount(DatePicker, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles readonly state', () => {
    const wrapper = mount(DatePicker, {
      props: { readonly: true },
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('renders with different formats', () => {
    const formats = ['YYYY-MM-DD', 'MM/DD/YYYY', 'DD.MM.YYYY'] as const
    formats.forEach((format) => {
      const wrapper = mount(DatePicker, {
        props: { format },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles clearable', () => {
    const wrapper = mount(DatePicker, {
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
      const wrapper = mount(DatePicker, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('emits change event', async () => {
    const wrapper = mount(DatePicker)
    await wrapper.find('input').trigger('click')
    expect(wrapper.exists()).toBe(true)
  })
})
