import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Runhorselight from '../src/index.vue'

describe('Runhorselight', () => {
  it('renders text items', () => {
    const wrapper = mount(Runhorselight, {
      props: {
        items: ['Hello', 'World'],
        duration: 1,
        loop: false,
      },
    })

    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.text()).toContain('World')
  })

  it('renders image autofill items and duplicates them for looping', () => {
    const wrapper = mount(Runhorselight, {
      props: {
        items: [
          {
            type: 'image',
            src: 'https://example.com/logo.png',
            alt: 'logo',
          },
        ],
        autofill: true,
      },
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.findAll('img').length).toBeGreaterThan(1)
  })
})
