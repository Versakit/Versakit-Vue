import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Timeline from '../src/timeline.vue'
import TimelineItem from '../src/timeline-item.vue'

describe('Timeline', () => {
  it('renders properly', () => {
    const wrapper = mount(Timeline, {
      slots: {
        default: `
          <TimelineItem :position="0" :isLast="false">
            <div>Item 1</div>
          </TimelineItem>
        `,
      },
      global: {
        components: { TimelineItem },
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with different orientations', () => {
    const orientations = ['vertical', 'horizontal'] as const
    orientations.forEach((orientation) => {
      const wrapper = mount(Timeline, {
        props: { orientation },
        slots: {
          default: `
            <TimelineItem :position="0" :isLast="true">
              <div>Item 1</div>
            </TimelineItem>
          `,
        },
        global: {
          components: { TimelineItem },
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('renders with different alignments', () => {
    const alignments = ['left', 'right', 'alternate'] as const
    alignments.forEach((align) => {
      const wrapper = mount(Timeline, {
        props: { align },
        slots: {
          default: `
            <TimelineItem :position="0" :isLast="true">
              <div>Item 1</div>
            </TimelineItem>
          `,
        },
        global: {
          components: { TimelineItem },
        },
      })
      expect(wrapper.exists()).toBe(true)
    })
  })

  it('handles reverse prop', () => {
    const wrapper = mount(Timeline, {
      props: { reverse: true },
      slots: {
        default: `
          <TimelineItem :position="0" :isLast="true">
            <div>Item 1</div>
          </TimelineItem>
        `,
      },
      global: {
        components: { TimelineItem },
      },
    })
    expect(wrapper.props('reverse')).toBe(true)
  })
})

describe('TimelineItem', () => {
  it('renders properly', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        position: 0,
        isLast: true,
      },
      slots: {
        default: '<div>Item content</div>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('handles isLast prop', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        position: 0,
        isLast: false,
      },
      slots: {
        default: '<div>Item content</div>',
      },
    })
    expect(wrapper.props('isLast')).toBe(false)
  })

  it('handles dotColor prop', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        position: 0,
        isLast: true,
        dotColor: '#ff0000',
      },
      slots: {
        default: '<div>Item content</div>',
      },
    })
    expect(wrapper.props('dotColor')).toBe('#ff0000')
  })

  it('handles lineColor prop', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        position: 0,
        isLast: false,
        lineColor: '#00ff00',
      },
      slots: {
        default: '<div>Item content</div>',
      },
    })
    expect(wrapper.props('lineColor')).toBe('#00ff00')
  })

  it('renders with dot slot', () => {
    const wrapper = mount(TimelineItem, {
      props: {
        position: 0,
        isLast: true,
      },
      slots: {
        default: '<div>Item content</div>',
        dot: '<span>Custom dot</span>',
      },
    })
    expect(wrapper.exists()).toBe(true)
  })
})
