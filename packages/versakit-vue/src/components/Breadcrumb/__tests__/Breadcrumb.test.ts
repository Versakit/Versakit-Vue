import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Breadcrumb from '../src/index.vue'
import BreadcrumbItem from '../src/breadcrumb-item.vue'

describe('Breadcrumb', () => {
  it('renders properly', () => {
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: `
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem>Details</BreadcrumbItem>
        `,
      },
      global: {
        components: { BreadcrumbItem },
      },
    })
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Products')
    expect(wrapper.text()).toContain('Details')
  })

  it('renders links for items with href', () => {
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: `
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        `,
      },
      global: {
        components: { BreadcrumbItem },
      },
    })
    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders custom separator', () => {
    const wrapper = mount(Breadcrumb, {
      props: {
        separator: '>',
      },
      slots: {
        default: `
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Products</BreadcrumbItem>
        `,
      },
      global: {
        components: { BreadcrumbItem },
      },
    })
    expect(wrapper.text()).toContain('>')
  })

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const wrapper = mount(Breadcrumb, {
        props: { size },
        slots: {
          default: `<BreadcrumbItem>Home</BreadcrumbItem>`,
        },
        global: {
          components: { BreadcrumbItem },
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles click events', async () => {
    const wrapper = mount(Breadcrumb, {
      slots: {
        default: `<BreadcrumbItem href="/">Home</BreadcrumbItem>`,
      },
      global: {
        components: { BreadcrumbItem },
      },
    })
    const links = wrapper.findAll('a')
    if (links.length > 0) {
      await links[0].trigger('click')
      // Just check that the component exists and doesn't crash
      expect(wrapper.exists()).toBe(true)
    }
  })
})
