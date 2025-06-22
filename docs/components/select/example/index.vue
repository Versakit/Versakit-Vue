<template>
  <div class="flex flex-col gap-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础用法</h2>
      <Select v-model="selectedValue" placeholder="请选择一个选项">
        <SelectItem key="option1" label="选项 1" />
        <SelectItem key="option2" label="选项 2" />
        <SelectItem key="option3" label="选项 3" />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue || '未选择' }}
      </div>
    </section>

    <!-- 带标签和默认值 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带标签和默认值</h2>
      <Select label="选择一个选项" v-model="selectedValue2">
        <SelectItem key="option1" label="选项 1" />
        <SelectItem key="option2" label="选项 2" />
        <SelectItem key="option3" label="选项 3" />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue2 }}
      </div>
    </section>

    <!-- 尺寸变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">尺寸变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select size="sm" label="小尺寸 (sm)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select size="md" label="中等尺寸 (md)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select size="lg" label="大尺寸 (lg)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
      </div>
    </section>

    <!-- 样式变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">样式变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select variant="flat" label="扁平变体 (flat)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select
          variant="bordered"
          label="边框变体 (bordered)"
          placeholder="选择选项"
        >
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select
          variant="underlined"
          label="下划线变体 (underlined)"
          placeholder="选择选项"
        >
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
      </div>
    </section>

    <!-- 颜色变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">颜色变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select color="primary" label="主色 (primary)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select
          color="secondary"
          label="次要色 (secondary)"
          placeholder="选择选项"
        >
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select color="success" label="成功色 (success)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select color="warning" label="警告色 (warning)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select color="danger" label="危险色 (danger)" placeholder="选择选项">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
      </div>
    </section>

    <!-- 状态展示 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">状态展示</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select disabled label="禁用状态 (disabled)" placeholder="无法选择">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select
          isInvalid
          errorMessage="请选择一个有效选项"
          label="错误状态 (isInvalid)"
          placeholder="选择选项"
        >
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select isRequired label="必填状态 (isRequired)" placeholder="必须选择">
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
        <Select
          isReadOnly
          label="只读状态 (isReadOnly)"
          placeholder="只读"
          modelValue="option1"
        >
          <SelectItem key="option1" label="选项 1" />
          <SelectItem key="option2" label="选项 2" />
        </Select>
      </div>
    </section>

    <!-- 禁用选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用选项</h2>
      <Select label="部分选项禁用" placeholder="选择选项">
        <SelectItem key="option1" label="选项 1" />
        <SelectItem key="option2" label="选项 2 (禁用)" disabled />
        <SelectItem key="option3" label="选项 3" />
        <SelectItem key="option4" label="选项 4 (禁用)" disabled />
      </Select>
    </section>

    <!-- 多选模式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">多选模式</h2>
      <Select
        selectionMode="multiple"
        label="多选选择器"
        placeholder="选择多个选项"
        v-model="multiSelectedValue"
        isClearable
      >
        <SelectItem key="option1" label="选项 1" />
        <SelectItem key="option2" label="选项 2" />
        <SelectItem key="option3" label="选项 3" />
        <SelectItem key="option4" label="选项 4" />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择:
        {{
          multiSelectedValue.length ? multiSelectedValue.join(', ') : '未选择'
        }}
      </div>
    </section>

    <!-- 带描述的选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带描述的选项</h2>
      <Select label="带描述的选项" placeholder="选择水果">
        <SelectItem
          key="apple"
          label="苹果"
          description="一种常见的红色或绿色水果"
        />
        <SelectItem key="banana" label="香蕉" description="富含钾的黄色水果" />
        <SelectItem
          key="orange"
          label="橙子"
          description="富含维生素C的柑橘类水果"
        />
      </Select>
    </section>

    <!-- 可搜索选择器 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可搜索选择器</h2>
      <Select
        isFilterable
        label="可搜索选择器"
        placeholder="搜索并选择水果"
        v-model="searchValue"
      >
        <SelectItem key="apple" label="苹果" />
        <SelectItem key="banana" label="香蕉" />
        <SelectItem key="orange" label="橙子" />
        <SelectItem key="grape" label="葡萄" />
        <SelectItem key="watermelon" label="西瓜" />
        <SelectItem key="strawberry" label="草莓" />
        <SelectItem key="pear" label="梨" />
        <SelectItem key="peach" label="桃子" />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ searchValue || '未选择' }}
      </div>
    </section>

    <!-- 可清除选择 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可清除选择</h2>
      <Select
        isClearable
        label="可清除选择器"
        placeholder="选择后可清除"
        v-model="clearableValue"
      >
        <SelectItem key="option1" label="选项 1" />
        <SelectItem key="option2" label="选项 2" />
        <SelectItem key="option3" label="选项 3" />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ clearableValue || '未选择' }}
      </div>
    </section>

    <!-- 实际应用场景：国家选择 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">实际应用场景：国家选择</h2>
      <Select
        isFilterable
        label="选择国家"
        placeholder="搜索并选择国家"
        v-model="selectedCountry"
      >
        <SelectItem
          v-for="country in countries"
          :key="country.code"
          :label="country.name"
          :description="country.code"
        />
      </Select>
      <div class="mt-2 text-sm text-gray-600">
        当前选择:
        {{ selectedCountry ? getCountryName(selectedCountry) : '未选择' }}
      </div>
    </section>

    <!-- 实际应用场景：分组选择 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">实际应用场景：分组选择</h2>
      <div class="mb-2">
        <label class="block text-sm font-medium mb-1">部门</label>
        <Select placeholder="选择部门" v-model="selectedDepartment">
          <SelectItem
            v-for="dept in departments"
            :key="dept.id"
            :label="dept.name"
          />
        </Select>
      </div>
      <div>
        <label class="block text-sm font-medium mb-1">员工</label>
        <Select
          placeholder="选择员工"
          :disabled="!selectedDepartment"
          isFilterable
          v-model="selectedEmployee"
        >
          <SelectItem
            v-for="emp in filteredEmployees"
            :key="emp.id"
            :label="emp.name"
            :description="emp.position"
          />
        </Select>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Select, SelectItem } from '@versakit/vue'

// 基础示例
const selectedValue = ref(null)
const selectedValue2 = ref('option1')

// 多选示例
const multiSelectedValue = ref([])

// 可搜索示例
const searchValue = ref(null)

// 可清除示例
const clearableValue = ref('option2')

// 国家选择示例
const selectedCountry = ref(null)
const countries = [
  { code: 'CN', name: '中国' },
  { code: 'US', name: '美国' },
  { code: 'JP', name: '日本' },
  { code: 'GB', name: '英国' },
  { code: 'DE', name: '德国' },
  { code: 'FR', name: '法国' },
  { code: 'IT', name: '意大利' },
  { code: 'CA', name: '加拿大' },
  { code: 'AU', name: '澳大利亚' },
  { code: 'RU', name: '俄罗斯' },
]

const getCountryName = (code) => {
  const country = countries.find((c) => c.code === code)
  return country ? `${country.name} (${country.code})` : code
}

// 分组选择示例
const selectedDepartment = ref(null)
const selectedEmployee = ref(null)

const departments = [
  { id: 'dev', name: '研发部' },
  { id: 'design', name: '设计部' },
  { id: 'marketing', name: '市场部' },
  { id: 'hr', name: '人力资源部' },
]

const employees = [
  { id: 1, name: '张三', department: 'dev', position: '前端开发' },
  { id: 2, name: '李四', department: 'dev', position: '后端开发' },
  { id: 3, name: '王五', department: 'dev', position: '全栈开发' },
  { id: 4, name: '赵六', department: 'design', position: 'UI设计师' },
  { id: 5, name: '钱七', department: 'design', position: 'UX设计师' },
  { id: 6, name: '孙八', department: 'marketing', position: '市场专员' },
  { id: 7, name: '周九', department: 'marketing', position: '内容运营' },
  { id: 8, name: '吴十', department: 'hr', position: '招聘专员' },
]

const filteredEmployees = computed(() => {
  if (!selectedDepartment.value) return []
  return employees.filter((emp) => emp.department === selectedDepartment.value)
})
</script>
