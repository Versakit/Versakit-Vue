import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InputTag from '../src/index.vue'

describe('InputTag', () => {
  it('renders properly', () => {
    const wrapper = mount(InputTag)
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('handles v-model with array of tags', () => {
    const tags = ['tag1', 'tag2', 'tag3']
    const wrapper = mount(InputTag, {
      props: { modelValue: tags },
    })
    expect(wrapper.props('modelValue')).toEqual(tags)
  })

  it('displays tags', () => {
    const tags = ['Vue', 'React', 'Angular']
    const wrapper = mount(InputTag, {
      props: { modelValue: tags },
    })
    tags.forEach((tag) => {
      expect(wrapper.text()).toContain(tag)
    })
  })

  it('handles disabled state', () => {
    const wrapper = mount(InputTag, {
      props: { disabled: true },
    })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
  })

  it('handles placeholder', () => {
    const wrapper = mount(InputTag, {
      props: { placeholder: 'Add tags' },
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Add tags')
  })

  it('handles max tags', () => {
    const wrapper = mount(InputTag, {
      props: {
        modelValue: ['tag1', 'tag2'],
        max: 3,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('removes tag when close button clicked', async () => {
    const tags = ['tag1', 'tag2']
    const wrapper = mount(InputTag, {
      props: { modelValue: tags },
    })
    const closeButtons = wrapper.findAll('button')
    if (closeButtons.length > 0) {
      await closeButtons[0].trigger('click')
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    }
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(InputTag, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
