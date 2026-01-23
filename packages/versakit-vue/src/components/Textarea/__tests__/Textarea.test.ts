import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Textarea from '../src/index.vue'

describe('Textarea', () => {
  it('renders properly', () => {
    const wrapper = mount(Textarea)
    expect(wrapper.find('textarea').exists()).toBe(true)
  })

  it('handles v-model', async () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'test content',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })
    expect(wrapper.find('textarea').element.value).toBe('test content')
  })

  it('handles input event', async () => {
    const wrapper = mount(Textarea)
    const textarea = wrapper.find('textarea')
    await textarea.setValue('new content')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('handles disabled state', () => {
    const wrapper = mount(Textarea, {
      props: { disabled: true },
    })
    expect(wrapper.find('textarea').attributes('disabled')).toBeDefined()
  })

  it('handles readonly state', () => {
    const wrapper = mount(Textarea, {
      props: { readonly: true },
    })
    expect(wrapper.find('textarea').attributes('readonly')).toBeDefined()
  })

  it('renders with placeholder', () => {
    const wrapper = mount(Textarea, {
      props: { placeholder: 'Enter description' },
    })
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('Enter description')
  })

  it('handles rows prop', () => {
    const wrapper = mount(Textarea, {
      props: { rows: 5 },
    })
    expect(wrapper.find('textarea').attributes('rows')).toBe('5')
  })

  it('shows character count when showCount is true', () => {
    const wrapper = mount(Textarea, {
      props: {
        modelValue: 'test',
        showCount: true,
        maxLength: 100,
      },
    })
    expect(wrapper.text()).toContain('4')
    expect(wrapper.text()).toContain('100')
  })

  it('handles maxlength', () => {
    const wrapper = mount(Textarea, {
      props: { maxLength: 200 },
    })
    expect(wrapper.find('textarea').attributes('maxlength')).toBe('200')
  })

  it('handles autosize', () => {
    const wrapper = mount(Textarea, {
      props: { autosize: true },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
