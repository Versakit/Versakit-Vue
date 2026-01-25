import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Modal from '../src/index.vue'

describe('Modal', () => {
  it('renders when open', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true },
      slots: { default: 'Modal content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.textContent).toContain('Modal content')
    wrapper.unmount()
  })

  it('does not render when closed', () => {
    const wrapper = mount(Modal, {
      props: { modelValue: false },
      slots: { default: 'Modal content' },
      attachTo: document.body,
    })
    expect(wrapper.find('[role="dialog"]').exists()).toBe(false)
    wrapper.unmount()
  })

  it('renders with title', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, title: 'Modal Title' },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.textContent).toContain('Modal Title')
    wrapper.unmount()
  })

  it('renders with different sizes', async () => {
    const sizes = ['sm', 'md', 'lg', 'xl', 'full'] as const
    for (const size of sizes) {
      const wrapper = mount(Modal, {
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
    const wrapper = mount(Modal, {
      props: { modelValue: true, title: 'Title', hideCloseButton: false },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.querySelector('button[aria-label="关闭"]')).toBeTruthy()
    wrapper.unmount()
  })

  it('emits close event when close button clicked', async () => {
    const wrapper = mount(Modal, {
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

  it('renders with header slot', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true },
      slots: {
        header: '<h2>Custom Header</h2>',
        default: 'Content',
      },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.innerHTML).toContain('Custom Header')
    wrapper.unmount()
  })

  it('renders with footer slot', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true },
      slots: {
        default: 'Content',
        footer: '<div>Footer content</div>',
      },
      attachTo: document.body,
    })
    await flushPromises()
    expect(document.body.innerHTML).toContain('Footer content')
    wrapper.unmount()
  })

  it('handles closeOnOverlay prop', async () => {
    const wrapper = mount(Modal, {
      props: { modelValue: true, closeOnOverlayClick: true },
      slots: { default: 'Content' },
      attachTo: document.body,
    })
    await flushPromises()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })
})
