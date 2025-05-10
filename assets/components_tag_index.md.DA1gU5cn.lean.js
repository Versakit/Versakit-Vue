import{d as f,c as i,o as g,F as y,j as a,G as e,k as l,w as o,a as s,_ as V,p as v,B as u,aw as K,a4 as b,aa as _}from"./chunks/framework.rcZoKwU1.js";import{i as d}from"./chunks/theme.BK5t6puo.js";import{O as w,E as x}from"./chunks/index.CpKg_UEU.js";const C=`<template>
  <div class="my">
    <VKTag>Tag 1</VKTag>
    <VKTag type="success">Tag 2</VKTag>
    <VKTag type="info">Tag 3</VKTag>
    <VKTag type="warn">Tag 4</VKTag>
    <VKTag type="error">Tag 5</VKTag>
  </div>

  <div class="my">
    <VKTag plain>Tag 1</VKTag>
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

.vk-tag + .vk-tag {
  margin: 0px 10px;
}
</style>
`,W={class:"my"},k={class:"my"},B={class:"my"},A=f({__name:"base",setup(p){return(r,t)=>(g(),i(y,null,[a("div",W,[e(l(d),null,{default:o(()=>t[0]||(t[0]=[s("Tag 1")])),_:1}),e(l(d),{type:"success"},{default:o(()=>t[1]||(t[1]=[s("Tag 2")])),_:1}),e(l(d),{type:"info"},{default:o(()=>t[2]||(t[2]=[s("Tag 3")])),_:1}),e(l(d),{type:"warn"},{default:o(()=>t[3]||(t[3]=[s("Tag 4")])),_:1}),e(l(d),{type:"error"},{default:o(()=>t[4]||(t[4]=[s("Tag 5")])),_:1})]),a("div",k,[e(l(d),{plain:""},{default:o(()=>t[5]||(t[5]=[s("Tag 1")])),_:1}),e(l(d),{plain:"",type:"success"},{default:o(()=>t[6]||(t[6]=[s("Tag 2")])),_:1}),e(l(d),{plain:"",type:"info"},{default:o(()=>t[7]||(t[7]=[s("Tag 3")])),_:1}),e(l(d),{plain:"",type:"warn"},{default:o(()=>t[8]||(t[8]=[s("Tag 4")])),_:1}),e(l(d),{plain:"",type:"error"},{default:o(()=>t[9]||(t[9]=[s("Tag 5")])),_:1})]),a("div",B,[e(l(d),{round:""},{default:o(()=>t[10]||(t[10]=[s("Tag 1")])),_:1}),e(l(d),{round:"",type:"success"},{default:o(()=>t[11]||(t[11]=[s("Tag 2")])),_:1}),e(l(d),{round:"",type:"info"},{default:o(()=>t[12]||(t[12]=[s("Tag 3")])),_:1}),e(l(d),{round:"",type:"warn"},{default:o(()=>t[13]||(t[13]=[s("Tag 4")])),_:1}),e(l(d),{round:"",type:"error"},{default:o(()=>t[14]||(t[14]=[s("Tag 5")])),_:1})])],64))}}),D=V(A,[["__scopeId","data-v-97b61307"]]),N={tabindex:"0"},E=JSON.parse('{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}'),P={name:"components/tag/index.md"},S=Object.assign(P,{setup(p){const r=v(!0);return(t,n)=>{const T=u("ClientOnly"),m=u("Tool");return g(),i("div",null,[n[8]||(n[8]=K("",4)),b(e(l(w),null,null,512),[[_,r.value]]),e(T,null,{default:o(()=>[e(l(x),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{r.value=!1}),vueCode:l(C)},{vue:o(()=>[e(D)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=a("h2",{id:"tag-api",tabindex:"-1"},[s("Tag API "),a("a",{class:"header-anchor",href:"#tag-api","aria-label":'Permalink to "Tag API"'},"​")],-1)),n[10]||(n[10]=a("h3",{id:"tag-属性",tabindex:"-1"},[s("Tag 属性 "),a("a",{class:"header-anchor",href:"#tag-属性","aria-label":'Permalink to "Tag 属性"'},"​")],-1)),a("table",N,[n[7]||(n[7]=a("thead",null,[a("tr",null,[a("th",null,"属性"),a("th",null,"说明"),a("th",null,"类型"),a("th",null,"默认值")])],-1)),a("tbody",null,[a("tr",null,[n[2]||(n[2]=a("td",null,[a("code",null,"type")],-1)),n[3]||(n[3]=a("td",null,"Tag 的类型",-1)),a("td",null,[n[1]||(n[1]=a("code",null,"enum",-1)),e(m,{value:"primary,success,info,warning,danger"})]),n[4]||(n[4]=a("td",null,"primary",-1))]),n[5]||(n[5]=a("tr",null,[a("td",null,[a("code",null,"plain")]),a("td",null,"背景是否半透明"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1)),n[6]||(n[6]=a("tr",null,[a("td",null,[a("code",null,"round")]),a("td",null,"Tag 是否为圆角"),a("td",null,[a("code",null,"boolean")]),a("td",null,"false")],-1))])])])}}});export{E as __pageData,S as default};
