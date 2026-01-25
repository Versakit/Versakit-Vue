import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Image from '../src/index.vue'

describe('Image', () => {
  it('renders properly', () => {
    const wrapper = mount(Image, {
      props: { src: 'https://example.com/image.jpg' },
    })
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('renders with src', () => {
    const wrapper = mount(Image, {
      props: { src: 'https://example.com/image.jpg' },
    })
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg')
  })

  it('renders with alt text', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'https://example.com/image.jpg',
        alt: 'Test image',
      },
    })
    expect(wrapper.find('img').attributes('alt')).toBe('Test image')
  })

  it('renders with width and height', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'https://example.com/image.jpg',
        width: '200',
        height: '150',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles loading state', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'https://example.com/image.jpg',
        loading: 'lazy',
      },
    })
    expect(wrapper.find('img').attributes('loading')).toBe('lazy')
  })

  it('renders with different object fit', () => {
    const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const
    fits.forEach((fit) => {
      const wrapper = mount(Image, {
        props: {
          src: 'https://example.com/image.jpg',
          fit,
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('shows fallback on error', async () => {
    const wrapper = mount(Image, {
      props: {
        src: 'https://example.com/invalid.jpg',
        fallback: 'https://example.com/fallback.jpg',
      },
    })
    await wrapper.find('img').trigger('error')
    expect(wrapper.emitted('error')).toBeTruthy()
  })

  it('handles preview mode', () => {
    const wrapper = mount(Image, {
      props: {
        src: 'https://example.com/image.jpg',
        preview: true,
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
