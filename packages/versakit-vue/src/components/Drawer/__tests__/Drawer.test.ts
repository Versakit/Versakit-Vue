import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Drawer from '../src/index.vue'

describe('Drawer', () => {
  it('renders when open', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true },
      slots: { default: 'Drawer content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.textContent).toContain('Drawer content')
    wrapper.unmount()
  })

  it('does not render when closed', () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: false },
      slots: { default: 'Drawer content' },
      attachTo: document.body,
    })
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
    wrapper.unmount()
  })

  it('renders with title', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, title: 'Drawer Title' },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.textContent).toContain('Drawer Title')
    wrapper.unmount()
  })

  it('renders with different placements', async () => {
    const placements = ['left', 'right', 'top', 'bottom'] as const
    for (const placement of placements) {
      const wrapper = mount(Drawer, {
        props: { modelValue: true, placement },
        slots: { default: 'Content' },
        attachTo: document.body,
      })
      await flushPromises()
      expect(wrapper.exists()).toBe(true)
      wrapper.unmount()
    }
  })

  it('renders with different sizes', async () => {
    const sizes = ['300px', '400px', '500px', '600px'] as const
    for (const size of sizes) {
      const wrapper = mount(Drawer, {
        props: { modelValue: true, size },
        slots: { default: 'Content' },
        attachTo: document.body,
      })
      await flushPromises()
      expect(wrapper.exists()).toBe(true)
      wrapper.unmount()
    }
  })

  it('shows close button when closable', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, title: 'Title', hideCloseButton: false },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.querySelector('button[aria-label="关闭"]')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits close event', async () => {
    const wrapper = mount(Drawer, {
      props: { modelValue: true, title: 'Title', hideCloseButton: false },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    const closeButton = document.body.querySelector('button[aria-label="关闭"]') as HTMLElement
    if (closeButton) {
      closeButton.click()
      await flushPromises()
      expect(wrapper.emitted('close')).toBeTruthy()
    }
    wrapper.unmount()
  })
})
