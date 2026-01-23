import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Divider from '../src/index.vue'

describe('Divider', () => {
  it('renders properly', () => {
    const wrapper = mount(Divider)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with text', () => {
    const wrapper = mount(Divider, {
      slots: { default: 'OR' },
    })
    expect(wrapper.text()).toContain('OR')
  })

  it('renders with different orientations', () => {
    const orientations = ['horizontal', 'vertical'] as const
    orientations.forEach((orientation) => {
      const wrapper = mount(Divider, {
        props: { orientation },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different alignments', () => {
    const alignments = ['left', 'center', 'right'] as const
    alignments.forEach((align) => {
      const wrapper = mount(Divider, {
        props: { align },
        slots: { default: 'Text' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
