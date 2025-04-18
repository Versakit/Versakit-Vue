import{d as v,B as u,c as w,o as f,j as r,G as t,k as o,w as n,a as d,_ as D,p as I,a5 as V,ad as c}from"./chunks/framework.Dr5ddTBW.js";import{m as i,u as s}from"./chunks/theme.C6wl5IZj.js";import{d as b,f as B}from"./chunks/index.Cy4GuBY3.js";const M=`<script setup lang="ts">
import { VKDropdownMenu, VKDropdownMenuItem } from '@versakit/ui'

const handleSelect = (value: string) => {
  console.log('Selected:', value)
}
<\/script>

<template>
  <div class="container">
    <div class="menu-group">
      <!-- Bottom (Default) -->
      <VKDropdownMenu>
        <template #trigger>
          <span>Click me</span>
        </template>

        <VKDropdownMenuItem @select="handleSelect('Item 1')">
          Item 1
        </VKDropdownMenuItem>
        <VKDropdownMenuItem @select="handleSelect('Item 2')">
          Item 2
        </VKDropdownMenuItem>
        <VerDropdownMenuItem disabled>Disabled Item</VerDropdownMenuItem>
      </VKDropdownMenu>

      <!-- Top -->
      <VKDropdownMenu placement="top" class="ml-4">
        <template #trigger>
          <span>Top Dropdown</span>
        </template>

        <VKDropdownMenuItem @select="handleSelect('Top 1')">
          Top Item 1
        </VKDropdownMenuItem>
        <VKDropdownMenuItem @select="handleSelect('Top 2')">
          Top Item 2
        </VKDropdownMenuItem>
      </VKDropdownMenu>

      <!-- Bottom Right -->
      <VKDropdownMenu placement="bottom-right" class="ml-4">
        <template #trigger>
          <span>Bottom Right</span>
        </template>

        <VKDropdownMenuItem @select="handleSelect('BR 1')">
          Bottom Right 1
        </VKDropdownMenuItem>
        <VKDropdownMenuItem @select="handleSelect('BR 2')">
          Bottom Right 2
        </VKDropdownMenuItem>
      </VKDropdownMenu>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.divider {
  height: 1px;
  background: #eee;
  width: 100%;
}

.menu-group {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.ml-4 {
  margin-left: 1rem;
}
</style>
`,S={class:"container"},K={class:"menu-group"},x=v({__name:"base",setup(g){const l=a=>{console.log("Selected:",a)};return(a,e)=>{const m=u("VerDropdownMenuItem");return f(),w("div",S,[r("div",K,[t(o(i),null,{trigger:n(()=>e[6]||(e[6]=[r("span",null,"Click me",-1)])),default:n(()=>[t(o(s),{onSelect:e[0]||(e[0]=p=>l("Item 1"))},{default:n(()=>e[7]||(e[7]=[d(" Item 1 ")])),_:1}),t(o(s),{onSelect:e[1]||(e[1]=p=>l("Item 2"))},{default:n(()=>e[8]||(e[8]=[d(" Item 2 ")])),_:1}),t(m,{disabled:""},{default:n(()=>e[9]||(e[9]=[d("Disabled Item")])),_:1})]),_:1}),t(o(i),{placement:"top",class:"ml-4"},{trigger:n(()=>e[10]||(e[10]=[r("span",null,"Top Dropdown",-1)])),default:n(()=>[t(o(s),{onSelect:e[2]||(e[2]=p=>l("Top 1"))},{default:n(()=>e[11]||(e[11]=[d(" Top Item 1 ")])),_:1}),t(o(s),{onSelect:e[3]||(e[3]=p=>l("Top 2"))},{default:n(()=>e[12]||(e[12]=[d(" Top Item 2 ")])),_:1})]),_:1}),t(o(i),{placement:"bottom-right",class:"ml-4"},{trigger:n(()=>e[13]||(e[13]=[r("span",null,"Bottom Right",-1)])),default:n(()=>[t(o(s),{onSelect:e[4]||(e[4]=p=>l("BR 1"))},{default:n(()=>e[14]||(e[14]=[d(" Bottom Right 1 ")])),_:1}),t(o(s),{onSelect:e[5]||(e[5]=p=>l("BR 2"))},{default:n(()=>e[15]||(e[15]=[d(" Bottom Right 2 ")])),_:1})]),_:1})])])}}}),h=D(x,[["__scopeId","data-v-881e9193"]]),X=JSON.parse('{"title":"Dropdown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/dropdown/index.md","filePath":"components/dropdown/index.md"}'),T={name:"components/dropdown/index.md"},Z=Object.assign(T,{setup(g){const l=I(!0);return(a,e)=>{const m=u("ClientOnly");return f(),w("div",null,[e[1]||(e[1]=r("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},[d("Dropdown 下拉菜单 "),r("a",{class:"header-anchor",href:"#dropdown-下拉菜单","aria-label":'Permalink to "Dropdown 下拉菜单"'},"​")],-1)),e[2]||(e[2]=r("h2",{id:"基本使用",tabindex:"-1"},[d("基本使用 "),r("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),V(t(o(b),null,null,512),[[c,l.value]]),t(m,null,{default:n(()=>[t(o(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:o(M)},{vue:n(()=>[t(h)]),_:1},8,["vueCode"])]),_:1})])}}});export{X as __pageData,Z as default};
