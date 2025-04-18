import{p as _,b as y,o as p,w as o,G as l,k as n,a,_ as k,c as h,F as V,B as v,aw as C,a5 as B,j as e,ad as f}from"./chunks/framework.Dr5ddTBW.js";import{k as s,d as i}from"./chunks/theme.1WR6ZKfk.js";import{d as g,f as c}from"./chunks/index.Cy4GuBY3.js";const Z=`<template>
  <VKBadge type="number" :value="value1">
    <VKButton @click="countUp()">点我增加</VKButton>
  </VKBadge>
</template>

<script setup>
import { VKBadge, VKButton } from '@versakit/ui'
import { ref } from 'vue'

const value1 = ref(95)

const countUp = () => {
  value1.value++
}
<\/script>
`,x={__name:"number",setup(m){const d=_(95),u=()=>{d.value++};return(t,r)=>(p(),y(n(i),{type:"number",value:d.value},{default:o(()=>[l(n(s),{onClick:r[0]||(r[0]=b=>u())},{default:o(()=>r[1]||(r[1]=[a("点我增加")])),_:1})]),_:1},8,["value"]))}},X=`<template>
  <VKBadge>
    <VKButton type="primary">点我没啥</VKButton>
  </VKBadge>
  <VKBadge type="text" value="new">
    <VKButton>点我没事</VKButton>
  </VKBadge>
</template>

<script setup>
import { VKBadge, VKButton } from '@versakit/ui'
<\/script>

<style scoped lang="scss">
.vkbadge {
  margin-right: 20px;
}
</style>
`,W={__name:"base",setup(m){return(d,u)=>(p(),h(V,null,[l(n(i),null,{default:o(()=>[l(n(s),{type:"primary"},{default:o(()=>u[0]||(u[0]=[a("点我没啥")])),_:1})]),_:1}),l(n(i),{type:"text",value:"new"},{default:o(()=>[l(n(s),null,{default:o(()=>u[1]||(u[1]=[a("点我没事")])),_:1})]),_:1})],64))}},T=k(W,[["__scopeId","data-v-df6005ab"]]),A={tabindex:"0"},S=JSON.parse('{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}'),D={name:"components/badge/index.md"},z=Object.assign(D,{setup(m){const d=_(!0);return(u,t)=>{const r=v("ClientOnly"),b=v("Tool");return p(),h("div",null,[t[8]||(t[8]=C('<h1 id="badge-徽标" tabindex="-1">Badge 徽标 <a class="header-anchor" href="#badge-徽标" aria-label="Permalink to &quot;Badge 徽标&quot;">​</a></h1><p>按钮和图标上的数字或状态标记。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可以通过设置 <code>type</code> 属性改变徽标类型。 数量值可接受 <code>Number</code> 或 <code>String。</code></p>',4)),B(l(n(g),null,null,512),[[f,d.value]]),l(r,null,{default:o(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{d.value=!1}),vueCode:n(X)},{vue:o(()=>[l(T)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"最大值徽标",tabindex:"-1"},[a("最大值徽标 "),e("a",{class:"header-anchor",href:"#最大值徽标","aria-label":'Permalink to "最大值徽标"'},"​")],-1)),t[10]||(t[10]=e("p",null,[a("当徽标中数字大于 "),e("code",null,"99"),a(" 时候会显示 "),e("code",null,"99+"),a("，使用数字徽标需将 "),e("code",null,"type"),a(" 属性设置为 "),e("code",null,"number")],-1)),B(l(n(g),null,null,512),[[f,d.value]]),l(r,null,{default:o(()=>[l(n(c),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{d.value=!1}),vueCode:n(Z)},{vue:o(()=>[l(x)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=e("h2",{id:"badge-api",tabindex:"-1"},[a("Badge API "),e("a",{class:"header-anchor",href:"#badge-api","aria-label":'Permalink to "Badge API"'},"​")],-1)),t[12]||(t[12]=e("h3",{id:"badge-属性",tabindex:"-1"},[a("Badge 属性 "),e("a",{class:"header-anchor",href:"#badge-属性","aria-label":'Permalink to "Badge 属性"'},"​")],-1)),e("table",A,[t[7]||(t[7]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[3]||(t[3]=e("td",null,[e("code",null,"type")],-1)),t[4]||(t[4]=e("td",null,"指定徽标的类型",-1)),e("td",null,[t[2]||(t[2]=e("code",null,"enum",-1)),l(b,{value:"number,string"})]),t[5]||(t[5]=e("td",null,"number",-1))]),t[6]||(t[6]=e("tr",null,[e("td",null,[e("code",null,"value")]),e("td",null,"徽标显示的值"),e("td",null,[e("code",null,"number"),a(" / "),e("code",null,"string")]),e("td",null,"-")],-1))])])])}}});export{S as __pageData,z as default};
