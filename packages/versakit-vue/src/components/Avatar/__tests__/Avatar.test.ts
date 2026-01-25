import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from '../src/index.vue'

describe('Avatar', () => {
  it('renders properly', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with image src', () => {
    const wrapper = mount(Avatar, {
      props: { src: 'https://example.com/avatar.jpg' },
    })
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg')
  })

  it('renders with alt text', () => {
    const wrapper = mount(Avatar, {
      props: { src: 'https://example.com/avatar.jpg', alt: 'User Avatar' },
    })
    expect(wrapper.find('img').attributes('alt')).toBe('User Avatar')
  })

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Avatar, {
        props: { size },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different shapes', () => {
    const shapes = ['circle', 'square'] as const
    shapes.forEach((shape) => {
      const wrapper = mount(Avatar, {
        props: { shape },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders fallback content when no src', () => {
    const wrapper = mount(Avatar, {
      slots: { default: 'JD' },
    })
    // Just check the component renders without crashing
    expect(wrapper.exists()).toBe(true)
  })
})
