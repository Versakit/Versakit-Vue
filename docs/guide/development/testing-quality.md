# 测试质量保证指南

## 概述

确保测试的正确性和有效性是测试工作中最关键的部分。本指南将帮助你编写高质量、可靠的测试。

---

## 🎯 测试质量的核心原则

### 1. 测试行为，而非实现

**❌ 错误示例** - 测试实现细节：
```typescript
it('has correct data structure', () => {
  const wrapper = mount(Counter)
  expect(wrapper.vm.count).toBe(0)  // 测试内部状态
  expect(wrapper.vm.increment).toBeDefined()  // 测试内部方法
})
```

**✅ 正确示例** - 测试用户可见的行为：
```typescript
it('displays initial count of 0', () => {
  const wrapper = mount(Counter)
  expect(wrapper.text()).toContain('Count: 0')  // 测试渲染结果
})

it('increments count when button is clicked', async () => {
  const wrapper = mount(Counter)
  await wrapper.find('button').trigger('click')
  expect(wrapper.text()).toContain('Count: 1')  // 测试交互结果
})
```

### 2. 测试真实的用户场景

**❌ 错误示例** - 只测试组件存在：
```typescript
it('renders with different variants', () => {
  const variants = ['primary', 'secondary', 'danger']
  variants.forEach((variant) => {
    const wrapper = mount(Button, { props: { variant } })
    expect(wrapper.exists()).toBe(true)  // 太弱，没有验证实际效果
  })
})
```

**✅ 正确示例** - 验证实际的视觉效果：
```typescript
it('applies correct styles for primary variant', () => {
  const wrapper = mount(Button, { 
    props: { variant: 'primary' },
    slots: { default: 'Click' }
  })
  const button = wrapper.find('button')
  expect(button.classes()).toContain('bg-blue-600')
  expect(button.classes()).toContain('text-white')
})

it('applies correct styles for danger variant', () => {
  const wrapper = mount(Button, { 
    props: { variant: 'danger' },
    slots: { default: 'Delete' }
  })
  const button = wrapper.find('button')
  expect(button.classes()).toContain('bg-red-600')
  expect(button.classes()).toContain('text-white')
})
```

### 3. 验证边界条件和错误情况

**✅ 好的测试覆盖边界情况**：
```typescript
describe('Input validation', () => {
  it('handles empty input', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').setValue('')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('respects maxlength constraint', async () => {
    const wrapper = mount(Input, {
      props: { maxlength: 5 }
    })
    const input = wrapper.find('input')
    expect(input.attributes('maxlength')).toBe('5')
  })

  it('handles special characters', async () => {
    const wrapper = mount(Input)
    await wrapper.find('input').setValue('<script>alert("xss")</script>')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
  })

  it('handles very long input', async () => {
    const wrapper = mount(Input)
    const longText = 'a'.repeat(10000)
    await wrapper.find('input').setValue(longText)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([longText])
  })
})
```

---

## 🔍 测试质量检查清单

### 基础检查

- [ ] **测试是否真正运行了？**
  - 故意让测试失败，确认测试会报错
  - 修改组件代码，确认测试会失败

- [ ] **测试是否验证了正确的内容？**
  - 检查断言是否有意义
  - 确保测试失败时能发现真正的问题

- [ ] **测试是否独立？**
  - 每个测试可以单独运行
  - 测试之间没有依赖关系
  - 测试顺序不影响结果

### 深度检查

- [ ] **是否测试了所有重要的 Props？**
  ```typescript
  // 检查组件定义
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    disabled?: boolean
    loading?: boolean
    // ... 确保每个 prop 都有测试
  }
  ```

- [ ] **是否测试了所有事件？**
  ```typescript
  // 检查组件 emits
  const emit = defineEmits(['click', 'focus', 'blur'])
  // 确保每个事件都有测试
  ```

- [ ] **是否测试了所有插槽？**
  ```typescript
  // 检查组件插槽
  <slot name="icon" />
  <slot name="default" />
  <slot name="suffix" />
  // 确保每个插槽都有测试
  ```

- [ ] **是否测试了条件渲染？**
  ```typescript
  it('shows loading spinner when loading', () => {
    const wrapper = mount(Button, { props: { loading: true } })
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })

  it('hides loading spinner when not loading', () => {
    const wrapper = mount(Button, { props: { loading: false } })
    expect(wrapper.find('.animate-spin').exists()).toBe(false)
  })
  ```

---

## 🛠️ 测试质量改进方法

### 方法 1: 突变测试（Mutation Testing）

通过修改代码来验证测试是否能捕获错误：

```typescript
// 原始代码
const handleClick = () => {
  if (!disabled && !loading) {
    emit('click')
  }
}

// 突变 1: 移除 disabled 检查
const handleClick = () => {
  if (!loading) {  // 测试应该失败
    emit('click')
  }
}

// 突变 2: 移除 loading 检查
const handleClick = () => {
  if (!disabled) {  // 测试应该失败
    emit('click')
  }
}
```

**验证测试**：
```typescript
it('does not emit click when disabled', async () => {
  const wrapper = mount(Button, { 
    props: { disabled: true },
    slots: { default: 'Click' }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted('click')).toBeFalsy()  // 这个测试能捕获突变吗？
})

it('does not emit click when loading', async () => {
  const wrapper = mount(Button, { 
    props: { loading: true },
    slots: { default: 'Click' }
  })
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted('click')).toBeFalsy()  // 这个测试能捕获突变吗？
})
```

### 方法 2: 代码覆盖率分析

```bash
# 生成覆盖率报告
pnpm test:coverage

# 打开 HTML 报告
open coverage/index.html
```

**查看未覆盖的代码**：
- 红色 = 未执行的代码
- 黄色 = 部分执行的分支
- 绿色 = 完全覆盖的代码

**为未覆盖的代码添加测试**：
```typescript
// 假设覆盖率报告显示这个分支未覆盖
if (props.maxlength && value.length > props.maxlength) {
  // 这里是红色的
  emit('exceed', value.length - props.maxlength)
}

// 添加测试
it('emits exceed event when input exceeds maxlength', async () => {
  const wrapper = mount(Input, {
    props: { maxlength: 5 }
  })
  await wrapper.find('input').setValue('123456')
  expect(wrapper.emitted('exceed')).toBeTruthy()
  expect(wrapper.emitted('exceed')?.[0]).toEqual([1])
})
```

### 方法 3: 手动测试验证

在浏览器中手动测试，确保测试覆盖了真实场景：

```typescript
// 1. 在 Storybook 中测试组件
pnpm storybook

// 2. 记录你的操作步骤
// 3. 为每个操作编写自动化测试

// 例如：手动测试发现的场景
it('clears input when clear button is clicked', async () => {
  const wrapper = mount(Input, {
    props: {
      modelValue: 'test value',
      clearable: true,
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }
  })
  
  // 验证清除按钮存在
  expect(wrapper.find('[data-testid="clear-button"]').exists()).toBe(true)
  
  // 点击清除按钮
  await wrapper.find('[data-testid="clear-button"]').trigger('click')
  
  // 验证值被清除
  expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
})
```

---

## 📊 测试质量指标

### 1. 代码覆盖率

**目标**: ≥ 80%

```bash
pnpm test:coverage
```

**注意**: 高覆盖率不等于高质量！

```typescript
// ❌ 100% 覆盖率但质量低
it('component exists', () => {
  const wrapper = mount(Button)
  expect(wrapper.exists()).toBe(true)  // 覆盖了所有代码，但没验证任何行为
})

// ✅ 同样的覆盖率但质量高
it('renders button with correct text', () => {
  const wrapper = mount(Button, { slots: { default: 'Click me' } })
  expect(wrapper.find('button').text()).toBe('Click me')
})

it('applies disabled attribute when disabled', () => {
  const wrapper = mount(Button, { props: { disabled: true } })
  expect(wrapper.find('button').attributes('disabled')).toBeDefined()
})
```

### 2. 断言质量

**弱断言** - 容易通过但不验证实际行为：
```typescript
expect(wrapper.exists()).toBe(true)
expect(wrapper.html()).toBeTruthy()
expect(wrapper.find('button')).toBeDefined()
```

**强断言** - 验证具体的行为和状态：
```typescript
expect(wrapper.find('button').text()).toBe('Submit')
expect(wrapper.find('button').classes()).toContain('bg-blue-600')
expect(wrapper.find('button').attributes('disabled')).toBeDefined()
expect(wrapper.emitted('click')?.[0]).toEqual([expectedValue])
```

### 3. 测试可读性

**❌ 难以理解的测试**：
```typescript
it('test 1', () => {
  const w = mount(C, { props: { v: 'p' } })
  expect(w.find('b').text()).toBe('p')
})
```

**✅ 清晰的测试**：
```typescript
it('displays the variant name in the button text', () => {
  const wrapper = mount(Button, { 
    props: { variant: 'primary' },
    slots: { default: 'primary' }
  })
  expect(wrapper.find('button').text()).toBe('primary')
})
```

---

## 🔧 实用工具和技巧

### 1. 使用 data-testid 提高测试稳定性

```vue
<!-- 组件中 -->
<template>
  <button data-testid="submit-button">
    Submit
  </button>
  <span data-testid="error-message" v-if="error">
    {{ error }}
  </span>
</template>
```

```typescript
// 测试中
it('shows error message when validation fails', async () => {
  const wrapper = mount(Form)
  await wrapper.find('[data-testid="submit-button"]').trigger('click')
  expect(wrapper.find('[data-testid="error-message"]').text())
    .toBe('Please fill in all fields')
})
```

### 2. 使用辅助函数减少重复

```typescript
// test-utils.ts
export function createButtonWrapper(props = {}, slots = {}) {
  return mount(Button, {
    props: {
      ...props
    },
    slots: {
      default: 'Click me',
      ...slots
    }
  })
}

// 测试中
it('renders primary button', () => {
  const wrapper = createButtonWrapper({ variant: 'primary' })
  expect(wrapper.find('button').classes()).toContain('bg-blue-600')
})
```

### 3. 测试异步行为

```typescript
it('loads data when mounted', async () => {
  const wrapper = mount(DataList)
  
  // 等待异步操作完成
  await wrapper.vm.$nextTick()
  
  // 或使用 flushPromises
  await flushPromises()
  
  expect(wrapper.findAll('[data-testid="list-item"]')).toHaveLength(5)
})
```

### 4. 测试错误处理

```typescript
it('displays error message when API fails', async () => {
  // Mock API 失败
  vi.spyOn(api, 'fetchData').mockRejectedValue(new Error('Network error'))
  
  const wrapper = mount(DataList)
  await flushPromises()
  
  expect(wrapper.find('[data-testid="error-message"]').text())
    .toContain('Failed to load data')
})
```

---

## 📝 测试审查清单

在提交测试代码前，检查以下项目：

### 功能完整性
- [ ] 所有 props 都有测试
- [ ] 所有 events 都有测试
- [ ] 所有 slots 都有测试
- [ ] 所有条件分支都有测试
- [ ] 边界情况都有测试

### 测试质量
- [ ] 测试名称清晰描述了测试内容
- [ ] 使用强断言而非弱断言
- [ ] 测试行为而非实现
- [ ] 测试独立且可重复运行
- [ ] 没有不必要的 mock

### 代码质量
- [ ] 没有重复的测试代码
- [ ] 使用辅助函数减少重复
- [ ] 测试代码易于理解和维护
- [ ] 有适当的注释说明复杂逻辑

### 覆盖率
- [ ] 代码覆盖率 ≥ 80%
- [ ] 关键路径 100% 覆盖
- [ ] 错误处理路径有覆盖

---

## 🎓 学习资源

### 推荐阅读
- [Vue Test Utils 官方文档](https://test-utils.vuejs.org/)
- [Vitest 最佳实践](https://vitest.dev/guide/best-practices.html)
- [Testing Library 指导原则](https://testing-library.com/docs/guiding-principles/)

### 示例项目
- 查看 `packages/versakit-vue/src/components/` 下的测试文件
- 参考 Button、Input、Alert 等组件的测试

---

## 🚀 持续改进

### 定期审查测试质量

```bash
# 每周运行一次
pnpm test:coverage

# 检查覆盖率报告
open coverage/index.html

# 识别需要改进的测试
```

### 测试重构

当发现测试质量问题时：

1. **识别问题**: 测试太弱？测试实现细节？
2. **改进测试**: 添加更强的断言，测试行为
3. **验证改进**: 故意破坏代码，确认测试会失败
4. **提交改进**: 创建 PR 并说明改进内容

---

**记住**: 好的测试不仅能发现 bug，还能作为组件的使用文档，帮助其他开发者理解组件的行为！

