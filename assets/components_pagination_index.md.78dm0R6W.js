import{d as f,p as d,c as C,o as p,G as a,k as n,w as r,a as i,j as o,t as P,_ as W,b as B,B as V,a5 as h,aw as D,ad as v}from"./chunks/framework.Dr5ddTBW.js";import{M as z}from"./chunks/theme.1WR6ZKfk.js";import{d as g,f as b}from"./chunks/index.Cy4GuBY3.js";const k=`<template>
  <div>
    <VKPagination
      v-model:modelValue="current"
      :total="total"
      :pageSize="pageSize"
      :showTotal="true"
      @change="handlePageChange"
    >
      <template #total="{ total }">
        <span class="custom-total">总计: {{ total }} 条记录 🎉</span>
      </template>

      <template #prev>⬅️</template>

      <template #next>➡️</template>
    </VKPagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const current = ref(1)
const total = ref(100)
const pageSize = ref(10)

const handlePageChange = (page: number, pageSize: number) => {
  console.log('Page changed to:', page, 'with page size:', pageSize)
}
<\/script>

<style scoped>
.custom-total {
  font-weight: bold;
  color: mediumvioletred;
}
</style>
`,y={class:"custom-total"},x=f({__name:"slots",setup(m){const e=d(1),s=d(100),t=d(10),l=(c,u)=>{console.log("Page changed to:",c,"with page size:",u)};return(c,u)=>(p(),C("div",null,[a(n(z),{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=_=>e.value=_),total:s.value,pageSize:t.value,showTotal:!0,onChange:l},{total:r(({total:_})=>[o("span",y,"总计: "+P(_)+" 条记录 🎉",1)]),prev:r(()=>u[1]||(u[1]=[i("⬅️")])),next:r(()=>u[2]||(u[2]=[i("➡️")])),_:1},8,["modelValue","total","pageSize"])]))}}),A=W(x,[["__scopeId","data-v-94294510"]]),G=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
<\/script>

<template>
  <VKPagination v-model="currentPage" :total="100" :disabled="true" />
</template>

<style scoped></style>
`,w=f({__name:"disabled-state",setup(m){const e=d(1);return(s,t)=>(p(),B(n(z),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),total:100,disabled:!0},null,8,["modelValue"]))}}),X=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
<\/script>

<template>
  <VKPagination v-model="currentPage" :total="300" :show-quick-jumper="true" />
</template>

<style scoped></style>
`,S=f({__name:"quick-jumper",setup(m){const e=d(1);return(s,t)=>(p(),B(n(z),{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=l=>e.value=l),total:300,"show-quick-jumper":!0},null,8,["modelValue"]))}}),T=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const pageSize = ref(10)
<\/script>

<template>
  <VKPagination
    v-model:pageSize="pageSize"
    :total="200"
    :show-size-changer="true"
    :page-size-options="[10, 20, 50]"
  />
</template>
`,Z=f({__name:"page-size-changer",setup(m){const e=d(10);return(s,t)=>(p(),B(n(z),{pageSize:e.value,"onUpdate:pageSize":t[0]||(t[0]=l=>e.value=l),total:200,"show-size-changer":!0,"page-size-options":[10,20,50]},null,8,["pageSize"]))}}),N=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
<\/script>

<template>
  <VKPagination v-model="currentPage" :total="total" :show-total="true" />
</template>
`,F=f({__name:"total",setup(m){const e=d(1),s=d(100);return(t,l)=>(p(),B(n(z),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),total:s.value,"show-total":!0},null,8,["modelValue","total"]))}}),J=`<script setup lang="ts">
import { ref } from 'vue'
import { VKPagination } from '@versakit/ui'

const currentPage = ref(1)
const total = ref(100)
<\/script>

<template>
  <VKPagination v-model="currentPage" :total="total" />
</template>
`,L=f({__name:"base",setup(m){const e=d(1),s=d(100);return(t,l)=>(p(),B(n(z),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=c=>e.value=c),total:s.value},null,8,["modelValue","total"]))}}),I=JSON.parse('{"title":"Pagination 分页","description":"","frontmatter":{},"headers":[],"relativePath":"components/pagination/index.md","filePath":"components/pagination/index.md"}'),Y={name:"components/pagination/index.md"},U=Object.assign(Y,{setup(m){const e=d(!0);return(s,t)=>{const l=V("ClientOnly");return p(),C("div",null,[t[6]||(t[6]=o("h1",{id:"pagination-分页",tabindex:"-1"},[i("Pagination 分页 "),o("a",{class:"header-anchor",href:"#pagination-分页","aria-label":'Permalink to "Pagination 分页"'},"​")],-1)),t[7]||(t[7]=o("h2",{id:"基本用法",tabindex:"-1"},[i("基本用法 "),o("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:n(J)},{vue:r(()=>[a(L)]),_:1},8,["vueCode"])]),_:1}),t[8]||(t[8]=o("h2",{id:"总数显示",tabindex:"-1"},[i("总数显示 "),o("a",{class:"header-anchor",href:"#总数显示","aria-label":'Permalink to "总数显示"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{e.value=!1}),vueCode:n(N)},{vue:r(()=>[a(F)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=o("h2",{id:"每页条数切换",tabindex:"-1"},[i("每页条数切换 "),o("a",{class:"header-anchor",href:"#每页条数切换","aria-label":'Permalink to "每页条数切换"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{e.value=!1}),vueCode:n(T)},{vue:r(()=>[a(Z)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=o("h2",{id:"快速跳转",tabindex:"-1"},[i("快速跳转 "),o("a",{class:"header-anchor",href:"#快速跳转","aria-label":'Permalink to "快速跳转"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{e.value=!1}),vueCode:n(X)},{vue:r(()=>[a(S)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=o("h2",{id:"禁用状态",tabindex:"-1"},[i("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[4]||(t[4]=()=>{e.value=!1}),vueCode:n(G)},{vue:r(()=>[a(w)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=o("h2",{id:"自定义内容",tabindex:"-1"},[i("自定义内容 "),o("a",{class:"header-anchor",href:"#自定义内容","aria-label":'Permalink to "自定义内容"'},"​")],-1)),h(a(n(g),null,null,512),[[v,e.value]]),a(l,null,{default:r(()=>[a(n(b),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[5]||(t[5]=()=>{e.value=!1}),vueCode:n(k)},{vue:r(()=>[a(A)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=D('<h2 id="pagination-api" tabindex="-1">Pagination Api <a class="header-anchor" href="#pagination-api" aria-label="Permalink to &quot;Pagination Api&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>当前页码</td><td>number</td><td>1</td></tr><tr><td>total</td><td>总数据量</td><td>number</td><td>0</td></tr><tr><td>pageSize</td><td>每页显示条数</td><td>number</td><td>10</td></tr><tr><td>show-total</td><td>是否显示总数据量</td><td>boolean</td><td>false</td></tr><tr><td>show-size-changer</td><td>是否显示页数切换器</td><td>boolean</td><td>false</td></tr><tr><td>show-quick-jumper</td><td>是否显示快速跳转</td><td>boolean</td><td>false</td></tr><tr><td>page-size-options</td><td>页数切换选项</td><td>number[]</td><td>[10,20,50,100]</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="pagination-events" tabindex="-1">Pagination Events <a class="header-anchor" href="#pagination-events" aria-label="Permalink to &quot;Pagination Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>页码或页数变化时触发</td><td>(currentPage: number, pageSize: number)</td></tr><tr><td>update:modelValue</td><td>当前页变化时触发</td><td>(page: number)</td></tr><tr><td>update:pageSize</td><td>页大小变化时触发</td><td>(size: number)</td></tr></tbody></table><h2 id="pagination-slots" tabindex="-1">Pagination Slots <a class="header-anchor" href="#pagination-slots" aria-label="Permalink to &quot;Pagination Slots&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>total</td><td>自定义总数显示内容</td></tr><tr><td>prev</td><td>自定义上一页按钮</td></tr><tr><td>next</td><td>自定义下一页按钮</td></tr></tbody></table>',6))])}}});export{I as __pageData,U as default};
