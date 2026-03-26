const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.BQKUpxV7.js","assets/chunks/theme.DO3tsUxh.js","assets/chunks/framework.CGvGDOMX.js"])))=>i.map(i=>d[i]);
import{v as i,ao as c,E as u,C as h,c as m,o as p,a6 as l,a1 as b,G as e,a4 as y,p as g,k as a,w as o,ap as _}from"./chunks/framework.CGvGDOMX.js";import{O as f,E as x}from"./chunks/index.DY3a6271.js";const k=`<script setup lang="ts">
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
`,A=JSON.parse('{"title":"Table 表格","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),v={name:"components/table/index.md"},V=Object.assign(v,{setup(T){const d=g(!0),n=u();return i(async()=>{n.value=(await c(async()=>{const{default:s}=await import("./chunks/index.BQKUpxV7.js");return{default:s}},__vite__mapDeps([0,1,2]))).default}),(s,t)=>{const r=h("ClientOnly");return p(),m("div",null,[t[1]||(t[1]=l('<h1 id="table-表格" tabindex="-1">Table 表格 <a class="header-anchor" href="#table-表格" aria-label="Permalink to &quot;Table 表格&quot;">​</a></h1><p>Table 用于结构化展示多行数据，支持列配置、单元格插槽渲染、空状态、斑马纹、边框和紧凑模式。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Table } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',5)),b(e(a(f),null,null,512),[[y,d.value]]),e(r,null,{default:o(()=>[e(a(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:a(k)},_({_:2},[n.value?{name:"vue",fn:o(()=>[e(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=l('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据源</td><td><code>any[]</code></td><td><code>[]</code></td></tr><tr><td>columns</td><td>列配置</td><td><code>TableColumn[]</code></td><td><code>[]</code></td></tr><tr><td>stripe</td><td>是否启用斑马纹</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>border</td><td>是否显示边框</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>dense</td><td>是否使用紧凑模式</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>emptyText</td><td>空数据文案</td><td><code>string</code></td><td><code>&#39;No Data&#39;</code></td></tr></tbody></table><h3 id="tablecolumn" tabindex="-1">TableColumn <a class="header-anchor" href="#tablecolumn" aria-label="Permalink to &quot;TableColumn&quot;">​</a></h3><table tabindex="0"><thead><tr><th>字段名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>列字段名，对应数据键值和动态插槽名</td><td><code>string</code></td><td>-</td></tr><tr><td>title</td><td>表头标题</td><td><code>string</code></td><td>-</td></tr><tr><td>width</td><td>列宽，支持字符串或数字</td><td><code>string | number</code></td><td>-</td></tr><tr><td>align</td><td>对齐方式</td><td><code>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</code></td><td><code>&#39;left&#39;</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>作用域参数</th></tr></thead><tbody><tr><td>empty</td><td>自定义空状态内容</td><td>-</td></tr><tr><td><code>#&lt;column.key&gt;</code></td><td>按列渲染单元格</td><td><code>{ row, index }</code></td></tr></tbody></table>',7))])}}});export{A as __pageData,V as default};
