const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.WxOPDkU3.js","assets/chunks/theme.DVizTi_Y.js","assets/chunks/framework.DcQCqlea.js"])))=>i.map(i=>d[i]);
import{p as b,D as h,v as p,al as m,C as s,c as g,o as v,j as l,G as e,a5 as r,a0 as f,a as S,a3 as x,k as d,w as i,am as y}from"./chunks/framework.DcQCqlea.js";import{O as _,E as k}from"./chunks/index.S9QYeH19.js";const V=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础用法</h2>
      <Select
        v-model="selectedValue"
        placeholder="请选择一个选项"
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue || '未选择' }}
      </div>
    </section>

    <!-- 带标签和默认值 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带标签和默认值</h2>
      <Select
        v-model="selectedValue2"
        :options="basicOptions"
        :showLabel="true"
        label="选择一个选项"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue2 }}
      </div>
    </section>

    <!-- 尺寸变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">尺寸变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          size="small"
          :showLabel="true"
          label="小尺寸 (small)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          size="default"
          :showLabel="true"
          label="默认尺寸 (default)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          size="large"
          :showLabel="true"
          label="大尺寸 (large)"
          placeholder="选择选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 状态变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">状态变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          status="success"
          :showLabel="true"
          label="成功状态 (success)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          status="warning"
          :showLabel="true"
          label="警告状态 (warning)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          status="error"
          :showLabel="true"
          label="错误状态 (error)"
          placeholder="选择选项"
          errorText="请选择一个有效选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 状态展示 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">交互状态</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          disabled
          :showLabel="true"
          label="禁用状态 (disabled)"
          placeholder="无法选择"
          :options="basicOptions"
        />
        <Select
          readonly
          :showLabel="true"
          label="只读状态 (readonly)"
          placeholder="只读"
          modelValue="option1"
          :options="basicOptions"
        />
        <Select
          :showLabel="true"
          label="必填状态"
          placeholder="必须选择"
          required
          :options="basicOptions"
        />
        <Select
          :showLabel="true"
          label="帮助文本"
          placeholder="选择选项"
          helpText="请从下拉列表中选择一个选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 禁用选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用选项</h2>
      <Select
        :showLabel="true"
        label="部分选项禁用"
        placeholder="选择选项"
        :options="disabledOptions"
      />
    </section>

    <!-- 多选模式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">多选模式</h2>
      <Select
        multiple
        :showLabel="true"
        label="多选选择器"
        placeholder="选择多个选项"
        v-model="multiSelectedValue"
        clearable
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择:
        {{
          multiSelectedValue.length ? multiSelectedValue.join(', ') : '未选择'
        }}
      </div>
    </section>

    <!-- 可搜索选择器 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可搜索选择器</h2>
      <Select
        filterable
        :showLabel="true"
        label="可搜索选择器"
        placeholder="搜索并选择水果"
        v-model="searchValue"
        :options="fruitOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ searchValue || '未选择' }}
      </div>
    </section>

    <!-- 可清除选择 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可清除选择</h2>
      <Select
        clearable
        :showLabel="true"
        label="可清除选择器"
        placeholder="选择后可清除"
        v-model="clearableValue"
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ clearableValue || '未选择' }}
      </div>
    </section>

    <!-- 分组选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">分组选项</h2>
      <Select
        :showLabel="true"
        label="分组选择"
        placeholder="选择一个选项"
        v-model="groupedValue"
        filterable
        :options="groupedOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ groupedValue || '未选择' }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { Select } from '@versakit/vue'
import { ref } from 'vue'

// 基础示例
const selectedValue = ref(null)
const selectedValue2 = ref('option1')

const basicOptions = [
  { value: 'option1', label: '选项 1' },
  { value: 'option2', label: '选项 2' },
  { value: 'option3', label: '选项 3' },
]

// 禁用选项示例
const disabledOptions = [
  { value: 'option1', label: '选项 1' },
  { value: 'option2', label: '选项 2 (禁用)', disabled: true },
  { value: 'option3', label: '选项 3' },
  { value: 'option4', label: '选项 4 (禁用)', disabled: true },
]

// 水果选项
const fruitOptions = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
  { value: 'grape', label: '葡萄' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'strawberry', label: '草莓' },
  { value: 'pear', label: '梨' },
  { value: 'peach', label: '桃子' },
]

// 多选示例
const multiSelectedValue = ref([])

// 可搜索示例
const searchValue = ref(null)

// 可清除示例
const clearableValue = ref('option2')

// 分组选项示例
const groupedValue = ref(null)
const groupedOptions = [
  { value: 'fruit1', label: '苹果', group: '水果' },
  { value: 'fruit2', label: '香蕉', group: '水果' },
  { value: 'fruit3', label: '橙子', group: '水果' },
  { value: 'veg1', label: '胡萝卜', group: '蔬菜' },
  { value: 'veg2', label: '西兰花', group: '蔬菜' },
  { value: 'veg3', label: '土豆', group: '蔬菜' },
  { value: 'meat1', label: '牛肉', group: '肉类' },
  { value: 'meat2', label: '猪肉', group: '肉类' },
  { value: 'meat3', label: '鸡肉', group: '肉类' },
]
<\/script>
`,A=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}'),w={name:"components/select/index.md"},I=Object.assign(w,{setup(O){const a=b(!0),n=h();return p(async()=>{n.value=(await m(async()=>{const{default:o}=await import("./chunks/index.WxOPDkU3.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const c=s("Link"),u=s("ClientOnly");return v(),g("div",null,[t[1]||(t[1]=l("h1",{id:"select-选择器",tabindex:"-1"},[S("Select 选择器 "),l("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),t[2]||(t[2]=l("p",null,"Select 组件用于从一组预定义选项中选择一个或多个值。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-select-%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=r("",3)),f(e(d(_),null,null,512),[[x,a.value]]),e(u,null,{default:i(()=>[e(d(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:d(V)},y({_:2},[n.value?{name:"vue",fn:i(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r("",16))])}}});export{A as __pageData,I as default};
