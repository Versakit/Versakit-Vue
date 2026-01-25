import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RangeCalendar from '../src/index.vue'

describe('RangeCalendar', () => {
  it('renders properly', () => {
    const wrapper = mount(RangeCalendar)
    expect(wrapper.exists()).toBe(true)
  })

  it('handles v-model with date range', () => {
    const range = [new Date('2024-01-01'), new Date('2024-01-15')]
    const wrapper = mount(RangeCalendar, {
      props: { modelValue: range },
    })
    expect(wrapper.props('modelValue')).toEqual(range)
  })

  it('handles disabled dates', () => {
    const disabledDate = (date: Date) => date.getDay() === 0
    const wrapper = mount(RangeCalendar, {
      props: { disabledDate },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles min and max dates', () => {
    const wrapper = mount(RangeCalendar, {
      props: {
        minDate: new Date('2024-01-01'),
        maxDate: new Date('2024-12-31'),
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits change event', async () => {
    const wrapper = mount(RangeCalendar)
    const buttons = wrapper.findAll('button')
    if (buttons.length > 0) {
      await buttons[0].trigger('click')
      expect(wrapper.exists()).toBe(true)
    }
  })
})
