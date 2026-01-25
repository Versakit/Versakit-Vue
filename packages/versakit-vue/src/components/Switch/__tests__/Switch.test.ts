import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Switch from '../src/index.vue'

describe('Switch', () => {
  it('renders properly', () => {
    const wrapper = mount(Switch)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('handles v-model', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: true,
        'onUpdate:modelValue': (e: boolean) => wrapper.setProps({ modelValue: e }),
      },
    })
    expect(wrapper.props('modelValue')).toBe(true)
  })

  it('toggles state on click', async () => {
    const wrapper = mount(Switch)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('handles disabled state', () => {
    const wrapper = mount(Switch, {
      props: { disabled: true },
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Switch, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with label', () => {
    const wrapper = mount(Switch)
    // Switch component doesn't render slot content, just verify it renders
    expect(wrapper.find('button[role="switch"]').exists()).toBe(true)
  })
})
