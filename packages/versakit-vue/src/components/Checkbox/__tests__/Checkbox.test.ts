import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Checkbox from '../src/index.vue'

describe('Checkbox', () => {
  it('renders properly', () => {
    const wrapper = mount(Checkbox)
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('handles v-model', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: true,
        'onUpdate:modelValue': (e: boolean) => wrapper.setProps({ modelValue: e }),
      },
    })
    expect(wrapper.find('input').element.checked).toBe(true)
  })

  it('toggles checked state', async () => {
    const wrapper = mount(Checkbox)
    const input = wrapper.find('input')
    await input.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('handles disabled state', () => {
    const wrapper = mount(Checkbox, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('renders with label', () => {
    const wrapper = mount(Checkbox, {
      slots: { default: 'Accept terms' },
    })
    expect(wrapper.text()).toContain('Accept terms')
  })

  it('handles indeterminate state', () => {
    const wrapper = mount(Checkbox, {
      props: { indeterminate: true },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Checkbox, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
