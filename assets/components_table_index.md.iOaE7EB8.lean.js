const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.kIB-_1B1.js","assets/chunks/theme.PeSdtEEv.js","assets/chunks/framework.C6EVvWrU.js"])))=>i.map(i=>d[i]);
import{v as i,ao as c,C as u,o as h,c as m,a6 as l,a1 as p,a4 as b,E as e,k as a,w as o,ap as y,G as g,p as _}from"./chunks/framework.C6EVvWrU.js";import{O as f,E as x}from"./chunks/index.DS4uDY_R.js";const k=`<script setup lang="ts">
import { Table } from '@versakit/vue'
import { computed, ref } from 'vue'

interface TableColumn {
  key: string
  title: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
}

const columns: TableColumn[] = [
  { key: 'name', title: '姓名' },
  { key: 'role', title: '角色' },
  { key: 'status', title: '状态', align: 'center' },
  { key: 'joinedAt', title: '加入时间', align: 'right' },
]

const rows = ref([
  {
    name: '张三',
    role: '前端工程师',
    status: 'active',
    joinedAt: '2026-01-12',
  },
  {
    name: '李四',
    role: '产品经理',
    status: 'inactive',
    joinedAt: '2025-10-08',
  },
  { name: '王五', role: '设计师', status: 'active', joinedAt: '2024-06-21' },
])

const emptyRows = ref<any[]>([])

const statusLabel = (status: string) =>
  status === 'active' ? '启用中' : '已停用'

const statusClass = (status: string) =>
  status === 'active'
    ? 'inline-flex rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300'
    : 'inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300'

const count = computed(() => rows.value.length)
<\/script>

<template>
  <div class="space-y-8">
    <section class="space-y-3">
      <h3 class="text-lg font-medium">基础用法</h3>
      <Table :columns="columns" :data="rows" />
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">斑马纹 + 边框 + 紧凑模式</h3>
      <Table :columns="columns" :data="rows" stripe border dense />
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">自定义单元格</h3>
      <Table :columns="columns" :data="rows" border>
        <template #status="{ row }">
          <span :class="statusClass(row.status)">
            {{ statusLabel(row.status) }}
          </span>
        </template>
      </Table>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        当前共 {{ count }} 条数据
      </p>
    </section>

    <section class="space-y-3">
      <h3 class="text-lg font-medium">空状态插槽</h3>
      <Table :columns="columns" :data="emptyRows" empty-text="暂无数据">
        <template #empty>
          <div class="py-4 text-sm text-gray-500 dark:text-gray-400">
            当前筛选条件下没有结果
          </div>
        </template>
      </Table>
    </section>
  </div>
</template>
`,A=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),v={name:"components/table/index.md"},V=Object.assign(v,{setup(T){const d=_(!0),n=g();return i(async()=>{n.value=(await c(async()=>{const{default:s}=await import("./chunks/index.kIB-_1B1.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const r=u("ClientOnly");return h(),m("div",null,[t[1]||(t[1]=l("",5)),p(e(a(f),null,null,512),[[b,d.value]]),e(r,null,{default:o(()=>[e(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(k)},y({_:2},[n.value?{name:"vue",fn:o(()=>[e(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=l("",7))])}}});export{A as __pageData,V as default};
