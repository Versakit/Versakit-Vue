import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Table from '../src/Table.vue'
import type { TableColumn } from '../src/type'

const columns: TableColumn[] = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
]

const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
]

describe('Table', () => {
  it('should render columns and data correctly', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
      },
    })

    // Check headers
    expect(wrapper.text()).toContain('Name')
    expect(wrapper.text()).toContain('Age')

    // Check data
    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('30')
    expect(wrapper.text()).toContain('Jane')
    expect(wrapper.text()).toContain('25')
  })

  it('should render empty state when no data', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data: [],
        emptyText: 'No Data Found',
      },
    })

    expect(wrapper.text()).toContain('No Data Found')
  })

  it('should support custom slots', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
      },
      slots: {
        name: `<template #name="{ row }">User: {{ row.name }}</template>`,
      },
    })

    expect(wrapper.text()).toContain('User: John')
    expect(wrapper.text()).toContain('User: Jane')
  })

  it('should apply border class', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
        border: true,
      },
    })

    expect(
      wrapper.find('table').element.parentElement?.parentElement?.className,
    ).toContain('border')
  })
})
