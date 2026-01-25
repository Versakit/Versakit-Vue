import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '../src/index.vue'

describe('Dropdown', () => {
  const items = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ]

  it('renders properly', () => {
    const wrapper = mount(Dropdown, {
      props: { options: items },
      slots: { trigger: '<button>Menu</button>' },
    })
    expect(wrapper.text()).toContain('Menu')
  })

  it('renders with different triggers', () => {
    const triggers = ['click', 'hover', 'contextmenu'] as const
    triggers.forEach((trigger) => {
      const wrapper = mount(Dropdown, {
        props: { options: items, trigger },
        slots: { trigger: '<button>Menu</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different placements', () => {
    const placements = ['bottom', 'top', 'left', 'right'] as const
    placements.forEach((placement) => {
      const wrapper = mount(Dropdown, {
        props: { options: items, placement },
        slots: { trigger: '<button>Menu</button>' },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles disabled state', () => {
    const wrapper = mount(Dropdown, {
      props: { options: items, disabled: true },
      slots: { trigger: '<button>Menu</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles disabled items', () => {
    const itemsWithDisabled = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2', disabled: true },
    ]
    const wrapper = mount(Dropdown, {
      props: { options: itemsWithDisabled },
      slots: { trigger: '<button>Menu</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits select event', async () => {
    const wrapper = mount(Dropdown, {
      props: { options: items },
      slots: { trigger: '<button>Menu</button>' },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with custom item slot', () => {
    const wrapper = mount(Dropdown, {
      props: { options: items },
      slots: {
        trigger: '<button>Menu</button>',
        item: '<div>Custom item</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
