import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Radio from '../src/Radio.vue'
import RadioGroup from '../src/RadioGroup.vue'

describe('Radio', () => {
  it('should render correctly', () => {
    const wrapper = mount(Radio, {
      props: {
        label: 'Option 1',
      },
    })
    expect(wrapper.text()).toContain('Option 1')
  })

  it('should update modelValue when clicked', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: '',
        label: 'Option 1',
      },
    })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Option 1'])
  })

  it('should not update when disabled', async () => {
    const wrapper = mount(Radio, {
      props: {
        modelValue: '',
        label: 'Option 1',
        disabled: true,
      },
    })

    await wrapper.find('input').trigger('change')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})

describe('RadioGroup', () => {
  it('should render slots', () => {
    const wrapper = mount(RadioGroup, {
      slots: {
        default: `
          <Radio label="Option 1" />
          <Radio label="Option 2" />
        `,
      },
      global: {
        components: { Radio },
      },
    })

    expect(wrapper.findAllComponents(Radio).length).toBe(2)
  })

  it('should update modelValue via group', async () => {
    const wrapper = mount(RadioGroup, {
      props: {
        modelValue: 'Option 1',
      },
      slots: {
        default: `
          <Radio label="Option 1" />
          <Radio label="Option 2" />
        `,
      },
      global: {
        components: { Radio },
      },
    })

    const radios = wrapper.findAllComponents(Radio)

    // Initial state
    // Vue defaults boolean-compatible props to false if missing
    expect(radios[0].props('modelValue')).toBe(false)

    // Simulate click on second radio
    await radios[1].find('input').trigger('change')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['Option 2'])
  })
})
