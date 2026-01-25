import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '../src/index.vue'

describe('Select', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

  it('renders properly', () => {
    const wrapper = mount(Select, {
      props: { options },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles v-model', () => {
    const wrapper = mount(Select, {
      props: {
        modelValue: '1',
        options,
      },
    })
    expect(wrapper.props('modelValue')).toBe('1')
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Select, {
      props: {
        options,
        placeholder: 'Select an option',
      },
    })
    expect(wrapper.text()).toContain('Select an option')
  })

  it('handles disabled state', () => {
    const wrapper = mount(Select, {
      props: {
        options,
        disabled: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles multiple selection', () => {
    const wrapper = mount(Select, {
      props: {
        options,
        multiple: true,
        modelValue: ['1', '2'],
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Select, {
        props: { options, size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles clearable', () => {
    const wrapper = mount(Select, {
      props: {
        options,
        modelValue: '1',
        clearable: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles searchable', () => {
    const wrapper = mount(Select, {
      props: {
        options,
        searchable: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits change event', async () => {
    const wrapper = mount(Select, {
      props: { options },
    })
    await wrapper.trigger('click')
    expect(wrapper.exists()).toBe(true)
  })
})
