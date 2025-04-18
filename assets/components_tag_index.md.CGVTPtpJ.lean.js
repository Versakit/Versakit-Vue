import{d as f,B as u,c as g,o as i,F as y,j as a,G as e,k as d,w as l,a as o,_ as V,p as v,aw as b,a5 as K,ad as _}from"./chunks/framework.Dr5ddTBW.js";import{h as r}from"./chunks/theme.1WR6ZKfk.js";import{d as w,f as x}from"./chunks/index.Cy4GuBY3.js";const C=`<template>
  <div class="my">
    <VKTag>Tag 1</VKTag>
    <VKTag type="success">Tag 2</VKTag>
    <VKTag type="info">Tag 3</VKTag>
    <VKTag type="warn">Tag 4</VKTag>
    <VKTag type="error">Tag 5</VKTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VKTag plain type="success">Tag 2</VKTag>
    <VKTag plain type="info">Tag 3</VKTag>
    <VKTag plain type="warn">Tag 4</VKTag>
    <VKTag plain type="error">Tag 5</VKTag>
  </div>

  <div class="my">
    <VKTag round>Tag 1</VKTag>
    <VKTag round type="success">Tag 2</VKTag>
    <VKTag round type="info">Tag 3</VKTag>
    <VKTag round type="warn">Tag 4</VKTag>
    <VKTag round type="error">Tag 5</VKTag>
  </div>
</template>

<script lang="ts" setup>
import { VKTag } from '@versakit/ui'
<\/script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
`,W={class:"my"},k={class:"my"},B={class:"my"},A=f({__name:"base",setup(p){return(s,t)=>{const n=u("VerTag");return i(),g(y,null,[a("div",W,[e(d(r),null,{default:l(()=>t[0]||(t[0]=[o("Tag 1")])),_:1}),e(d(r),{type:"success"},{default:l(()=>t[1]||(t[1]=[o("Tag 2")])),_:1}),e(d(r),{type:"info"},{default:l(()=>t[2]||(t[2]=[o("Tag 3")])),_:1}),e(d(r),{type:"warn"},{default:l(()=>t[3]||(t[3]=[o("Tag 4")])),_:1}),e(d(r),{type:"error"},{default:l(()=>t[4]||(t[4]=[o("Tag 5")])),_:1})]),a("div",k,[e(n,{plain:""},{default:l(()=>t[5]||(t[5]=[o("Tag 1")])),_:1}),e(d(r),{plain:"",type:"success"},{default:l(()=>t[6]||(t[6]=[o("Tag 2")])),_:1}),e(d(r),{plain:"",type:"info"},{default:l(()=>t[7]||(t[7]=[o("Tag 3")])),_:1}),e(d(r),{plain:"",type:"warn"},{default:l(()=>t[8]||(t[8]=[o("Tag 4")])),_:1}),e(d(r),{plain:"",type:"error"},{default:l(()=>t[9]||(t[9]=[o("Tag 5")])),_:1})]),a("div",B,[e(d(r),{round:""},{default:l(()=>t[10]||(t[10]=[o("Tag 1")])),_:1}),e(d(r),{round:"",type:"success"},{default:l(()=>t[11]||(t[11]=[o("Tag 2")])),_:1}),e(d(r),{round:"",type:"info"},{default:l(()=>t[12]||(t[12]=[o("Tag 3")])),_:1}),e(d(r),{round:"",type:"warn"},{default:l(()=>t[13]||(t[13]=[o("Tag 4")])),_:1}),e(d(r),{round:"",type:"error"},{default:l(()=>t[14]||(t[14]=[o("Tag 5")])),_:1})])],64)}}}),D=V(A,[["__scopeId","data-v-78d2de46"]]),N={tabindex:"0"},S=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}'),P={name:"components/tag/index.md"},X=Object.assign(P,{setup(p){const s=v(!0);return(t,n)=>{const T=u("ClientOnly"),m=u("Tool");return i(),g("div",null,[n[8]||(n[8]=b("",4)),K(e(d(w),null,null,512),[[_,s.value]]),e(T,null,{default:l(()=>[e(d(x),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{s.value=!1}),vueCode:d(C)},{vue:l(()=>[e(D)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=a("h2",{id:"tag-api",tabindex:"-1"},[o("Tag API "),a("a",{class:"header-anchor",href:"#tag-api","aria-label":'Permalink to "Tag API"'},"​")],-1)),n[10]||(n[10]=a("h3",{id:"tag-属性",tabindex:"-1"},[o("Tag 属性 "),a("a",{class:"header-anchor",href:"#tag-属性","aria-label":'Permalink to "Tag 属性"'},"​")],-1)),a("table",N,[n[7]||(n[7]=a("thead",null,[a("tr",null,[a("th",null,"属性"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"默认值")])],-1)),a("tbody",null,[a("tr",null,[n[2]||(n[2]=a("td",null,[a("code",null,"type")],-1)),n[3]||(n[3]=a("td",null,"Tag 的类型",-1)),a("td",null,[n[1]||(n[1]=a("code",null,"enum",-1)),e(m,{value:"primary,success,info,warning,danger"})]),n[4]||(n[4]=a("td",null,"primary",-1))]),n[5]||(n[5]=a("tr",null,[a("td",null,[a("code",null,"plain")]),a("td",null,"背景是否半透明"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1)),n[6]||(n[6]=a("tr",null,[a("td",null,[a("code",null,"round")]),a("td",null,"Tag 是否为圆角"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1))])])])}}});export{S as __pageData,X as default};
