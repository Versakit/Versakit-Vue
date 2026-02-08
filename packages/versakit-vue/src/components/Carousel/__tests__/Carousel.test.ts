import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Carousel from '../src/index.vue'

describe('Carousel', () => {
  it('renders properly', () => {
    const wrapper = mount(Carousel, {
      slots: {
        'item-0': '<div>Slide 1</div>',
        'item-1': '<div>Slide 2</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles autoplay prop', () => {
    const wrapper = mount(Carousel, {
      props: {
        autoplay: true,
        interval: 3000,
      },
      slots: {
        'item-0': '<div>Slide 1</div>',
      },
    })
    expect(wrapper.props('autoplay')).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(Carousel, {
      props: { disabled: true },
      slots: {
        'item-0': '<div>Slide 1</div>',
      },
    })
    expect(wrapper.props('disabled')).toBe(true)
  })

  it('renders with different variants', () => {
    const variants = ['default', 'dots', 'thumbnails'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Carousel, {
        props: { variant },
        slots: {
          'item-0': '<div>Slide 1</div>',
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Carousel, {
        props: { size },
        slots: {
          'item-0': '<div>Slide 1</div>',
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles navigation prop', () => {
    const wrapper = mount(Carousel, {
      props: { navigation: false },
      slots: {
        'item-0': '<div>Slide 1</div>',
      },
    })
    expect(wrapper.props('navigation')).toBe(false)
  })

  it('handles indicators prop', () => {
    const wrapper = mount(Carousel, {
      props: { indicators: false },
      slots: {
        'item-0': '<div>Slide 1</div>',
      },
    })
    expect(wrapper.props('indicators')).toBe(false)
  })

  it('handles initialIndex prop', () => {
    const wrapper = mount(Carousel, {
      props: { initialIndex: 1 },
      slots: {
        'item-0': '<div>Slide 1</div>',
        'item-1': '<div>Slide 2</div>',
      },
    })
    expect(wrapper.props('initialIndex')).toBe(1)
  })
})
