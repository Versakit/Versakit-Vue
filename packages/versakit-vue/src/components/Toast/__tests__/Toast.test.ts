import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { Toast } from '../index'
import { toasts, removeAll } from '../src/state'
import ToastItem from '../src/ToastItem.vue'

describe('Toast', () => {
  beforeEach(() => {
    removeAll()
    vi.useFakeTimers()
    // Mock document.body.appendChild for Toast.show
    // Actually jsdom handles this, but we want to avoid side effects or cleaning up the container manually.
    // Ideally we should clean up the container after tests, but Toast.show creates it once.
    // For unit tests of logic, we don't strictly need the container if we check 'toasts' state.
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should add a toast to the state', () => {
    Toast.success('Success message')
    expect(toasts.value.length).toBe(1)
    expect(toasts.value[0].message).toBe('Success message')
    expect(toasts.value[0].type).toBe('success')
  })

  it('should remove a toast', () => {
    const id = Toast.info('Info message')
    expect(toasts.value.length).toBe(1)

    Toast.remove(id)
    expect(toasts.value.length).toBe(0)
  })

  it('should render ToastItem correctly', () => {
    const wrapper = mount(ToastItem, {
      props: {
        id: 'test-id',
        message: 'Test Message',
        type: 'success',
        visible: true,
        duration: 3000,
      },
    })

    expect(wrapper.text()).toContain('Test Message')
    // Check for success icon or class
    expect(wrapper.classes()).toContain('border-green-200') // Based on variants
  })

  it('should auto-close after duration', async () => {
    const wrapper = mount(ToastItem, {
      props: {
        id: 'test-id',
        message: 'Test Message',
        duration: 3000,
        visible: true,
      },
    })

    expect(wrapper.emitted('close')).toBeFalsy()

    vi.advanceTimersByTime(3000)

    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.emitted('close')?.[0]).toEqual(['test-id'])
  })

  it('should pause timer on mouseenter and resume on mouseleave', async () => {
    const wrapper = mount(ToastItem, {
      props: {
        id: 'test-id',
        message: 'Test Message',
        duration: 3000,
        visible: true,
      },
    })

    // Advance 1000ms
    vi.advanceTimersByTime(1000)

    // Mouse enter (pause)
    await wrapper.trigger('mouseenter')

    // Advance 3000ms (total 4000ms > 3000ms, but should be paused)
    vi.advanceTimersByTime(3000)
    expect(wrapper.emitted('close')).toBeFalsy()

    // Mouse leave (resume)
    await wrapper.trigger('mouseleave')

    // Remaining time should be 2000ms. Advance 2000ms.
    vi.advanceTimersByTime(2000)
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
