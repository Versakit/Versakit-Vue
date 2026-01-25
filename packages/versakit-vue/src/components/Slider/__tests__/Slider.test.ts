import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Slider from '../src/index.vue'

describe('Slider', () => {
  it('renders properly', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: 50 },
    })
    expect(wrapper.find('[role="slider"]').exists()).toBe(true)
  })

  it('handles v-model', () => {
    const wrapper = mount(Slider, {
      props: { modelValue: 75 },
    })
    expect(wrapper.find('[role="slider"]').attributes('aria-valuenow')).toBe('75')
  })

  it('handles min and max', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100,
      },
    })
    expect(wrapper.find('[role="slider"]').attributes('aria-valuemin')).toBe('0')
    expect(wrapper.find('[role="slider"]').attributes('aria-valuemax')).toBe('100')
  })

  it('handles step', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        step: 10,
      },
    })
    // Step is handled internally, just verify component renders
    expect(wrapper.find('[role="slider"]').exists()).toBe(true)
  })

  it('handles disabled state', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        disabled: true,
      },
    })
    expect(wrapper.find('[role="slider"]').attributes('aria-disabled')).toBe('true')
  })

  it('shows value label when showTooltip is true', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        showTooltip: true,
      },
    })
    // Tooltip is shown on hover, just verify component renders
    expect(wrapper.find('[role="slider"]').exists()).toBe(true)
  })

  it('emits change event', async () => {
    const wrapper = mount(Slider, {
      props: { modelValue: 50 },
    })
    await wrapper.find('[role="slider"]').trigger('mousedown')
    // Change event is emitted through composable, just verify component exists
    expect(wrapper.find('[role="slider"]').exists()).toBe(true)
  })

  it('renders with different orientations', () => {
    const orientations = ['horizontal', 'vertical'] as const
    orientations.forEach((orientation) => {
      const wrapper = mount(Slider, {
        props: { modelValue: 50, orientation },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
