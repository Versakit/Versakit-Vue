import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '../src/index.vue'

describe('Input', () => {
  it('renders properly', () => {
    const wrapper = mount(Input)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('handles v-model', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })
    expect(wrapper.find('input').element.value).toBe('test')
  })

  it('handles input event', async () => {
    const wrapper = mount(Input)
    const input = wrapper.find('input')
    await input.setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })

  it('handles disabled state', () => {
    const wrapper = mount(Input, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles readonly state', () => {
    const wrapper = mount(Input, {
      props: { readonly: true },
    })
    expect(wrapper.find('input').attributes('readonly')).toBeDefined()
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Input, {
      props: { placeholder: 'Enter text' },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text')
  })

  it('renders with different sizes', () => {
    const sizes = ['small', 'default', 'large'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Input, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows clear button when clearable and has value', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
      },
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('clears input when clear button clicked', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        clearable: true,
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })
    await wrapper.find('svg').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('shows character count when showCount is true', () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: 'test',
        showCount: true,
        maxlength: 10,
      },
    })
    expect(wrapper.text()).toContain('4/10')
  })

  it('handles maxlength', () => {
    const wrapper = mount(Input, {
      props: { maxlength: 10 },
    })
    expect(wrapper.find('input').attributes('maxlength')).toBe('10')
  })

  it('renders prefix icon', () => {
    const wrapper = mount(Input, {
      props: { prefixIcon: 'icon-search' },
    })
    expect(wrapper.find('.icon-search').exists()).toBe(true)
  })

  it('renders suffix icon', () => {
    const wrapper = mount(Input, {
      props: { suffixIcon: 'icon-user' },
    })
    expect(wrapper.find('.icon-user').exists()).toBe(true)
  })

  it('emits focus event', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('focus')
    expect(wrapper.emitted('focus')).toBeTruthy()
  })

  it('emits blur event', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').trigger('blur')
    expect(wrapper.emitted('blur')).toBeTruthy()
  })

  it('supports different input types', () => {
    const types = ['text', 'password', 'email', 'number'] as const
    types.forEach((type) => {
      const wrapper = mount(Input, {
        props: { type },
      })
      expect(wrapper.find('input').attributes('type')).toBe(type)
    })
  })
})
