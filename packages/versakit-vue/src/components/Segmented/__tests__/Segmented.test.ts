import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Segmented from '../src/index.vue'

describe('Segmented', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

  it('renders properly', () => {
    const wrapper = mount(Segmented, {
      props: { options },
    })
    expect(wrapper.text()).toContain('Option 1')
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.text()).toContain('Option 3')
  })

  it('handles v-model', () => {
    const wrapper = mount(Segmented, {
      props: {
        modelValue: '1',
        options,
      },
    })
    expect(wrapper.props('modelValue')).toBe('1')
  })

  it('emits change event when option clicked', async () => {
    const wrapper = mount(Segmented, {
      props: { options },
    })
    const buttons = wrapper.findAll('button')
    if (buttons.length > 1) {
      await buttons[1].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('handles disabled state', () => {
    const wrapper = mount(Segmented, {
      props: {
        options,
        disabled: true,
      },
    })
    const buttons = wrapper.findAll('button')
    buttons.forEach((button) => {
      expect(button.attributes('disabled')).toBeDefined()
    })
  })

  it('handles disabled options', () => {
    const optionsWithDisabled = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
    ]
    const wrapper = mount(Segmented, {
      props: { options: optionsWithDisabled },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Segmented, {
        props: { options, size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with block layout', () => {
    const wrapper = mount(Segmented, {
      props: {
        options,
        block: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
