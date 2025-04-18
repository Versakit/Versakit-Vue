import{d as k,b as y,o as i,k as d,p as v,B as g,c as x,j as a,a5 as b,G as t,aw as T,a as l,w as s,ad as p}from"./chunks/framework.Dr5ddTBW.js";import{a9 as f}from"./chunks/theme.1WR6ZKfk.js";import{d as c,f as h}from"./chunks/index.Cy4GuBY3.js";const _=`<template>
  <VKTable border :data="tableData" :columns="columns"></VKTable>
</template>

<script setup lang="ts">
import { VKTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,D=k({__name:"border",setup(u){const n=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],r=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,o)=>(i(),y(d(f),{border:"",data:n,columns:r}))}}),B=`<template>
  <VKTable stripe :data="tableData" :columns="columns"></VKTable>
</template>

<script setup lang="ts">
import { VKTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '3',
    name: '范冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
  {
    key: '4',
    name: '李冰冰',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,C=k({__name:"stripe",setup(u){const n=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"},{key:"3",name:"范冰冰",age:42,address:"西湖区湖底公园1号"},{key:"4",name:"李冰冰",age:42,address:"西湖区湖底公园1号"}],r=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,o)=>(i(),y(d(f),{stripe:"",data:n,columns:r}))}}),A=`<template>
  <VKTable :data="tableData" :columns="columns" />
</template>

<script setup lang="ts">
import { VKTable } from '@versakit/ui'

const tableData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
<\/script>

<style scoped></style>
`,I=k({__name:"base",setup(u){const n=[{key:"1",name:"胡彦斌",age:32,address:"西湖区湖底公园1号"},{key:"2",name:"胡彦祖",age:42,address:"西湖区湖底公园1号"}],r=[{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}];return(e,o)=>(i(),y(d(f),{data:n,columns:r}))}}),V={id:"table-表格-alpha",tabindex:"-1"},z=JSON.parse('{"title":"Table 表格 Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),X={name:"components/table/index.md"},N=Object.assign(X,{setup(u){const n=v(!0);return(r,e)=>{const o=g("VK-tag"),m=g("ClientOnly");return i(),x("div",null,[a("h1",V,[e[4]||(e[4]=l("Table 表格 ")),t(o,{type:"warn"},{default:s(()=>e[3]||(e[3]=[l("Alpha")])),_:1}),e[5]||(e[5]=l()),e[6]||(e[6]=a("a",{class:"header-anchor",href:"#table-表格-alpha","aria-label":'Permalink to "Table 表格 <VK-tag type="warn">Alpha</VK-tag>"'},"​",-1))]),e[7]||(e[7]=a("p",null,"展示行列数据。",-1)),e[8]||(e[8]=a("h2",{id:"基础用法",tabindex:"-1"},[l("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),e[9]||(e[9]=a("p",null,"简单的表格",-1)),b(t(d(c),null,null,512),[[p,n.value]]),t(m,null,{default:s(()=>[t(d(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{n.value=!1}),vueCode:d(A)},{vue:s(()=>[t(I)]),_:1},8,["vueCode"])]),_:1}),e[10]||(e[10]=a("h2",{id:"带斑马纹表格",tabindex:"-1"},[l("带斑马纹表格 "),a("a",{class:"header-anchor",href:"#带斑马纹表格","aria-label":'Permalink to "带斑马纹表格"'},"​")],-1)),e[11]||(e[11]=a("p",null,"使用带斑马纹的表格，可以更容易区分出不同行的数据。",-1)),e[12]||(e[12]=a("p",null,[a("code",null,"stripe"),l(" 可以创建带斑马纹的表格。 如果 "),a("code",null,"true"),l(", 表格将会带有斑马纹。")],-1)),b(t(d(c),null,null,512),[[p,n.value]]),t(m,null,{default:s(()=>[t(d(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{n.value=!1}),vueCode:d(B)},{vue:s(()=>[t(C)]),_:1},8,["vueCode"])]),_:1}),e[13]||(e[13]=a("h2",{id:"带边框表格​",tabindex:"-1"},[l("带边框表格​ "),a("a",{class:"header-anchor",href:"#带边框表格​","aria-label":'Permalink to "带边框表格​"'},"​")],-1)),e[14]||(e[14]=a("p",null,[l("默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 "),a("code",null,"border"),l(" 属性，把该属性设置为 "),a("code",null,"true"),l(" 即可启用。")],-1)),b(t(d(c),null,null,512),[[p,n.value]]),t(m,null,{default:s(()=>[t(d(h),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{n.value=!1}),vueCode:d(_)},{vue:s(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),e[15]||(e[15]=T('<h2 id="table-api" tabindex="-1">Table API <a class="header-anchor" href="#table-api" aria-label="Permalink to &quot;Table API&quot;">​</a></h2><h3 id="table-属性" tabindex="-1">Table 属性 <a class="header-anchor" href="#table-属性" aria-label="Permalink to &quot;Table 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>bordered</code></td><td>是否显示边框</td><td><code>boolean</code></td><td>true</td></tr><tr><td><code>stripe</code></td><td>是否显示斑马纹</td><td><code>boolean</code></td><td>false</td></tr></tbody></table><h3 id="table-插槽" tabindex="-1">Table 插槽 <a class="header-anchor" href="#table-插槽" aria-label="Permalink to &quot;Table 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead></table>',5))])}}});export{z as __pageData,N as default};
