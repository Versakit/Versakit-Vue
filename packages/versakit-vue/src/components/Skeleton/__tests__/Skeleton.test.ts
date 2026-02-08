import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Skeleton from '../src/index.vue'

describe('Skeleton', () => {
  it('renders properly', () => {
    const wrapper = mount(Skeleton)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different variants', () => {
    const variants = ['text', 'circular', 'rectangular'] as const
    variants.forEach((variant) => {
      const wrapper = mount(Skeleton, {
        props: { variant },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with custom width', () => {
    const wrapper = mount(Skeleton, {
      props: { width: '200px' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with custom height', () => {
    const wrapper = mount(Skeleton, {
      props: { height: '100px' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with animation', () => {
    const wrapper = mount(Skeleton, {
      props: { animation: 'pulse' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders without animation', () => {
    const wrapper = mount(Skeleton, {
      props: { animation: 'none' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders multiple skeletons with count', () => {
    const wrapper = mount(Skeleton, {
      props: { count: 3 },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
