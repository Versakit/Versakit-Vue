import{d as V,c as f,o as m,G as t,k as l,w as i,a as o,_ as C,p as w,B as k,j as n,a5 as b,ad as y}from"./chunks/framework.Dr5ddTBW.js";import{k as a,E as u}from"./chunks/theme.1WR6ZKfk.js";import{d as v,f as B}from"./chunks/index.Cy4GuBY3.js";const W=`<template>
  <div>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script setup lang="ts">
import { VKButton, VKMessage } from '@versakit/ui'

const success = () => {
  VKMessage({
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: '这是一条消息',
  })
}
const warning = () => {
  VKMessage({
    type: 'warn',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VKMessage({
    type: 'info',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VKMessage({
    type: 'error',
    plain: true,
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.vk-btn {
  margin: 0px 10px;
}
</style>
`,K=V({__name:"plain",setup(g){const r=()=>{u({type:"success",plain:!0,icon:"ep:success-filled",content:"这是一条消息"})},p=()=>{u({type:"warn",plain:!0,content:"这是一条消息",icon:"ep:warning-filled"})},e=()=>{u({type:"info",plain:!0,content:"这是一条消息",icon:"ep:info-filled"})},d=()=>{u({type:"error",plain:!0,content:"这是一条消息",icon:"ep:circle-close-filled"})};return(c,s)=>(m(),f("div",null,[t(l(a),{type:"success",onClick:r},{default:i(()=>s[0]||(s[0]=[o("success")])),_:1}),t(l(a),{type:"warn",onClick:p},{default:i(()=>s[1]||(s[1]=[o("warning")])),_:1}),t(l(a),{type:"info",onClick:e},{default:i(()=>s[2]||(s[2]=[o("info")])),_:1}),t(l(a),{type:"error",onClick:d},{default:i(()=>s[3]||(s[3]=[o("error")])),_:1})]))}}),x=C(K,[["__scopeId","data-v-b8623de7"]]),M=`<template>
  <div>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script setup lang="ts">
import { VKButton, VKMessage } from '@versakit/ui'

const success = () => {
  VKMessage({
    type: 'success',
    content: '这是一条消息',
    icon: 'ep:success-filled',
  })
}
const warning = () => {
  VKMessage({
    type: 'warn',
    content: '这是一条消息',
    icon: 'ep:warning-filled',
  })
}

const info = () => {
  VKMessage({
    type: 'info',
    content: '这是一条消息',
    icon: 'ep:info-filled',
  })
}

const error = () => {
  VKMessage({
    type: 'error',
    content: '这是一条消息',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.vk-btn {
  margin: 0px 10px;
}
</style>
`,X=V({__name:"status",setup(g){const r=()=>{u({type:"success",content:"这是一条消息",icon:"ep:success-filled"})},p=()=>{u({type:"warn",content:"这是一条消息",icon:"ep:warning-filled"})},e=()=>{u({type:"info",content:"这是一条消息",icon:"ep:info-filled"})},d=()=>{u({type:"error",content:"这是一条消息",icon:"ep:circle-close-filled"})};return(c,s)=>(m(),f("div",null,[t(l(a),{type:"success",onClick:r},{default:i(()=>s[0]||(s[0]=[o("success")])),_:1}),t(l(a),{type:"warn",onClick:p},{default:i(()=>s[1]||(s[1]=[o("warning")])),_:1}),t(l(a),{type:"info",onClick:e},{default:i(()=>s[2]||(s[2]=[o("info")])),_:1}),t(l(a),{type:"error",onClick:d},{default:i(()=>s[3]||(s[3]=[o("error")])),_:1})]))}}),Z=C(X,[["__scopeId","data-v-7db82500"]]),z=`<template>
  <div>
    <VKButton @click="openMessage">点击</VKButton>
  </div>
</template>

<script setup lang="ts">
import { VKButton, VKMessage } from '@versakit/ui'

const openMessage = () => {
  VKMessage({
    type: 'info',
    content: '这是一条消息',
    duration: 2000,
    icon: 'ep:info-filled',
  })
}
<\/script>
`,D=V({__name:"base",setup(g){const r=()=>{u({type:"info",content:"这是一条消息",duration:2e3,icon:"ep:info-filled"})};return(p,e)=>(m(),f("div",null,[t(l(a),{onClick:r},{default:i(()=>e[0]||(e[0]=[o("点击")])),_:1})]))}}),A={tabindex:"0"},N={tabindex:"0"},J=JSON.parse('{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}'),T={name:"components/message/index.md"},S=Object.assign(T,{setup(g){const r=w(!0);return(p,e)=>{const d=k("ClientOnly"),c=k("Tool");return m(),f("div",null,[e[14]||(e[14]=n("h1",{id:"message-消息提示",tabindex:"-1"},[o("Message 消息提示 "),n("a",{class:"header-anchor",href:"#message-消息提示","aria-label":'Permalink to "Message 消息提示"'},"​")],-1)),e[15]||(e[15]=n("p",null,"常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。",-1)),e[16]||(e[16]=n("h2",{id:"基本用法",tabindex:"-1"},[o("基本用法 "),n("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1)),e[17]||(e[17]=n("p",null,"从顶部出现，3 秒后自动消失。",-1)),b(t(l(v),null,null,512),[[y,r.value]]),t(d,null,{default:i(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{r.value=!1}),vueCode:l(z)},{vue:i(()=>[t(D)]),_:1},8,["vueCode"])]),_:1}),e[18]||(e[18]=n("h2",{id:"不同状态",tabindex:"-1"},[o("不同状态 "),n("a",{class:"header-anchor",href:"#不同状态","aria-label":'Permalink to "不同状态"'},"​")],-1)),e[19]||(e[19]=n("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),b(t(l(v),null,null,512),[[y,r.value]]),t(d,null,{default:i(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[1]||(e[1]=()=>{r.value=!1}),vueCode:l(M)},{vue:i(()=>[t(Z)]),_:1},8,["vueCode"])]),_:1}),e[20]||(e[20]=n("h2",{id:"不同风格",tabindex:"-1"},[o("不同风格 "),n("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),e[21]||(e[21]=n("p",null,"用来显示「成功、警告、消息、错误」类的操作反馈。",-1)),b(t(l(v),null,null,512),[[y,r.value]]),t(d,null,{default:i(()=>[t(l(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[2]||(e[2]=()=>{r.value=!1}),vueCode:l(W)},{vue:i(()=>[t(x)]),_:1},8,["vueCode"])]),_:1}),e[22]||(e[22]=n("h2",{id:"message-api",tabindex:"-1"},[o("Message API "),n("a",{class:"header-anchor",href:"#message-api","aria-label":'Permalink to "Message API"'},"​")],-1)),e[23]||(e[23]=n("h3",{id:"message-属性",tabindex:"-1"},[o("Message 属性 "),n("a",{class:"header-anchor",href:"#message-属性","aria-label":'Permalink to "Message 属性"'},"​")],-1)),n("table",A,[e[9]||(e[9]=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1)),n("tbody",null,[n("tr",null,[e[4]||(e[4]=n("td",null,[n("code",null,"type")],-1)),e[5]||(e[5]=n("td",null,"绑定值",-1)),n("td",null,[e[3]||(e[3]=n("code",null,"enum",-1)),t(c,{value:"success,warning,info,error"})]),e[6]||(e[6]=n("td",null,[n("code",null,"info")],-1))]),e[7]||(e[7]=n("tr",null,[n("td",null,[n("code",null,"content")]),n("td",null,"消息的内容"),n("td",null,[n("code",null,"string")]),n("td",null,"-")],-1)),e[8]||(e[8]=n("tr",null,[n("td",null,[n("code",null,"duration")]),n("td",null,"消息的持续时间"),n("td",null,[n("code",null,"number")]),n("td",null,[n("code",null,"3000")])],-1))])]),e[24]||(e[24]=n("h3",{id:"message-方法",tabindex:"-1"},[o("Message 方法 "),n("a",{class:"header-anchor",href:"#message-方法","aria-label":'Permalink to "Message 方法"'},"​")],-1)),n("table",N,[e[13]||(e[13]=n("thead",null,[n("tr",null,[n("th",null,"名称"),n("th",null,"描述"),n("th",null,"类型")])],-1)),n("tbody",null,[n("tr",null,[e[11]||(e[11]=n("td",null,[n("code",null,"destroy")],-1)),e[12]||(e[12]=n("td",null,"message 的销毁函数",-1)),n("td",null,[e[10]||(e[10]=n("code",null,"function",-1)),t(c,{value:"() => void"})])])])])])}}});export{J as __pageData,S as default};
