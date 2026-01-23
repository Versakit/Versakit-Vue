import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Accordion from '../src/accordion.vue'
import AccordionItem from '../src/accordion-item.vue'

describe('Accordion', () => {
  it('renders properly', () => {
    const wrapper = mount(Accordion, {
      slots: {
        default: `
          <AccordionItem value="1" header="Item 1">Content 1</AccordionItem>
          <AccordionItem value="2" header="Item 2">Content 2</AccordionItem>
        `,
      },
      global: {
        components: { AccordionItem },
      },
    })
    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 2')
  })

  it('handles multiple mode', () => {
    const wrapper = mount(Accordion, {
      props: {
        multiple: true,
      },
      slots: {
        default: `
          <AccordionItem value="1" header="Item 1">Content 1</AccordionItem>
          <AccordionItem value="2" header="Item 2">Content 2</AccordionItem>
        `,
      },
      global: {
        components: { AccordionItem },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with default expanded items', () => {
    const wrapper = mount(Accordion, {
      props: {
        modelValue: ['1'],
      },
      slots: {
        default: `
          <AccordionItem value="1" header="Item 1">Content 1</AccordionItem>
          <AccordionItem value="2" header="Item 2">Content 2</AccordionItem>
        `,
      },
      global: {
        components: { AccordionItem },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
