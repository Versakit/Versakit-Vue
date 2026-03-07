import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Steps from '../src/Steps.vue'
import StepItem from '../src/StepItem.vue'

describe('Steps', () => {
  it('should render correctly', () => {
    const wrapper = mount(Steps, {
      slots: {
        default: `
          <StepItem title="Step 1" />
          <StepItem title="Step 2" />
        `,
      },
      global: {
        components: { StepItem },
      },
    })

    expect(wrapper.findAllComponents(StepItem).length).toBe(2)
  })

  it('should update current step', async () => {
    const wrapper = mount(Steps, {
      props: {
        current: 0,
      },
      slots: {
        default: `
          <StepItem title="Step 1" />
          <StepItem title="Step 2" />
        `,
      },
      global: {
        components: { StepItem },
      },
    })

    // Wait for StepItems to register themselves
    await wrapper.vm.$nextTick()

    const stepItems = wrapper.findAllComponents(StepItem)
    await stepItems[1].trigger('click')

    expect(wrapper.emitted('update:current')?.[0]).toEqual([1])
    expect(wrapper.emitted('change')?.[0]).toEqual([1])
  })

  it('should render vertical steps', () => {
    const wrapper = mount(Steps, {
      props: {
        direction: 'vertical',
      },
      slots: {
        default: `
          <StepItem title="Step 1" />
          <StepItem title="Step 2" />
        `,
      },
      global: {
        components: { StepItem },
      },
    })

    expect(wrapper.classes()).toContain('flex-col')
  })

  it('should display correct status', async () => {
    const wrapper = mount(Steps, {
      props: {
        current: 1,
      },
      slots: {
        default: `
          <StepItem title="Step 1" />
          <StepItem title="Step 2" />
          <StepItem title="Step 3" />
        `,
      },
      global: {
        components: { StepItem },
      },
    })

    // Wait for StepItems to register themselves
    await wrapper.vm.$nextTick()

    const stepItems = wrapper.findAllComponents(StepItem)

    // Step 1: finish
    expect(stepItems[0].find('.text-blue-500').exists()).toBe(true) // Finish icon color

    // Step 2: process (current)
    expect(stepItems[1].find('.bg-blue-500').exists()).toBe(true) // Process icon background

    // Step 3: wait
    expect(stepItems[2].find('.text-gray-400').exists()).toBe(true) // Wait icon color
  })
})
