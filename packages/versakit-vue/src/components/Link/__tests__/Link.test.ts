import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Link from '../src/index.vue'

describe('Link', () => {
  it('renders properly', () => {
    const wrapper = mount(Link, {
      slots: { default: 'Click here' },
    })
    expect(wrapper.text()).toContain('Click here')
  })

  it('renders with href', () => {
    const wrapper = mount(Link, {
      props: { href: 'https://example.com' },
      slots: { default: 'Link' },
    })
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com')
  })

  it('renders with target', () => {
    const wrapper = mount(Link, {
      props: { href: 'https://example.com', target: '_blank' },
      slots: { default: 'Link' },
    })
    expect(wrapper.find('a').attributes('target')).toBe('_blank')
  })

  it('handles disabled state', () => {
    const wrapper = mount(Link, {
      props: { disabled: true },
      slots: { default: 'Link' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different variants', () => {
    const variants = ['default', 'primary', 'secondary'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Link, {
        props: { variant },
        slots: { default: 'Link' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with underline', () => {
    const wrapper = mount(Link, {
      props: { underline: true },
      slots: { default: 'Link' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits click event', async () => {
    const wrapper = mount(Link, {
      slots: { default: 'Link' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
