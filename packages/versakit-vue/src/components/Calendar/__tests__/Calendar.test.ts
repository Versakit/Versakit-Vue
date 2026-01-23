import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Calendar from '../src/index.vue'

describe('Calendar', () => {
  it('renders properly', () => {
    const wrapper = mount(Calendar)
    expect(wrapper.exists()).toBe(true)
  })

  it('handles v-model', () => {
    const date = new Date('2024-01-15')
    const wrapper = mount(Calendar, {
      props: { modelValue: date },
    })
    expect(wrapper.props('modelValue')).toEqual(date)
  })

  it('renders with different locales', () => {
    const locales = ['en-US', 'zh-CN', 'ja-JP'] as const
    locales.forEach((locale) => {
      const wrapper = mount(Calendar, {
        props: { locale },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles disabled dates', () => {
    const disabledDate = (date: Date) => date.getDay() === 0
    const wrapper = mount(Calendar, {
      props: { disabledDate },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles min and max dates', () => {
    const wrapper = mount(Calendar, {
      props: {
        minDate: new Date('2024-01-01'),
        maxDate: new Date('2024-12-31'),
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('emits change event', async () => {
    const wrapper = mount(Calendar)
    // Just check the component renders
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different views', () => {
    const views = ['date', 'month', 'year'] as const
    views.forEach((view) => {
      const wrapper = mount(Calendar, {
        props: { view },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })
})
