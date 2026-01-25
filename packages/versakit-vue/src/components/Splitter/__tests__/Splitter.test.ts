import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Splitter from '../src/index.vue'

describe('Splitter', () => {
  it('renders properly', () => {
    const wrapper = mount(Splitter, {
      slots: {
        'panel-0': '<div>First panel</div>',
        'panel-1': '<div>Second panel</div>',
      },
    })
    expect(wrapper.text()).toContain('First panel')
    expect(wrapper.text()).toContain('Second panel')
  })

  it('handles initial size', () => {
    const wrapper = mount(Splitter, {
      props: { initialSize: 30 },
      slots: {
        'panel-0': '<div>First</div>',
        'panel-1': '<div>Second</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles min and max size', () => {
    const wrapper = mount(Splitter, {
      props: {
        minSize: 20,
        maxSize: 80,
      },
      slots: {
        'panel-0': '<div>First</div>',
        'panel-1': '<div>Second</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles different directions', () => {
    const directions = ['horizontal', 'vertical'] as const
    directions.forEach((direction) => {
      const wrapper = mount(Splitter, {
        props: { direction },
        slots: {
          'panel-0': '<div>First</div>',
          'panel-1': '<div>Second</div>',
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles disabled state', () => {
    const wrapper = mount(Splitter, {
      props: { resizable: false },
      slots: {
        'panel-0': '<div>First</div>',
        'panel-1': '<div>Second</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
