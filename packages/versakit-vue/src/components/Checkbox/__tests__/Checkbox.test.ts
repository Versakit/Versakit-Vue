import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { Checkbox, CheckboxGroup } from '../index'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const wrapper = mount(Checkbox, {
      props: {
        label: 'Option 1',
      },
    })
    expect(wrapper.text()).toContain('Option 1')
  })

  it('should update modelValue when clicked', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        label: 'Option 1',
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('should not update when disabled', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        label: 'Option 1',
        disabled: true,
      },
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('update:modelValue')).toBeFalsy()
  })
})

describe('CheckboxGroup', () => {
  it('should render slots', () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: `
          <Checkbox value="Option 1" label="Option 1" />
          <Checkbox value="Option 2" label="Option 2" />
        `,
      },
      global: {
        components: { Checkbox },
      },
    })

    expect(wrapper.findAllComponents(Checkbox).length).toBe(2)
  })

  it('should update modelValue via group', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        modelValue: [],
      },
      slots: {
        default: `
          <Checkbox value="Option 1" label="Option 1" />
          <Checkbox value="Option 2" label="Option 2" />
        `,
      },
      global: {
        components: { Checkbox },
      },
    })

    const checkboxes = wrapper.findAllComponents(Checkbox)

    // Simulate click on first checkbox
    await checkboxes[0].trigger('click')

    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([['Option 1']])

    // Simulate click on second checkbox (requires updating props manually in test or re-mounting with new props if we were testing parent component, but here we just check emit)
    // Since we can't easily update props of wrapper in this setup without a parent component, we just check the emit.
  })
})
