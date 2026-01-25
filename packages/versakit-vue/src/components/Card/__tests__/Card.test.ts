import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Card from '../src/index.vue'

describe('Card', () => {
  it('renders properly', () => {
    const wrapper = mount(Card, {
      slots: { default: 'Card content' },
    })
    expect(wrapper.text()).toContain('Card content')
  })

  it('renders with header slot', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<h3>Card Header</h3>',
        default: 'Card content',
      },
    })
    expect(wrapper.html()).toContain('Card Header')
  })

  it('renders with footer slot', () => {
    const wrapper = mount(Card, {
      slots: {
        default: 'Card content',
        footer: '<div>Card Footer</div>',
      },
    })
    expect(wrapper.html()).toContain('Card Footer')
  })

  it('renders with different variants', () => {
    const variants = ['default', 'bordered', 'elevated'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Card, {
        props: { variant },
        slots: { default: 'Content' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with padding', () => {
    const wrapper = mount(Card, {
      props: { padding: true },
      slots: { default: 'Content' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders without padding', () => {
    const wrapper = mount(Card, {
      props: { padding: false },
      slots: { default: 'Content' },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
