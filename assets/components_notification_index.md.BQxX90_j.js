import{d as B,c as p,o as f,G as n,k as i,w as a,a as l,_,p as g,B as C,aw as h,a4 as v,j as e,aa as V}from"./chunks/framework.rcZoKwU1.js";import{z as s,F as r}from"./chunks/theme.BBSXUahi.js";import{O as W,E as y}from"./chunks/index.CpKg_UEU.js";const k=`<template>
  <div>
    <VKButton @click="topleft">top-left</VKButton>
    <VKButton @click="topright">top-right</VKButton>
    <VKButton @click="bottomleft">bottom-left</VKButton>
    <VKButton @click="bottomright">bottom-right</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const topleft = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'topLeft',
    icon: 'ep:info-filled',
  })
}

const topright = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'topRight',
    icon: 'ep:info-filled',
  })
}

const bottomleft = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'bottomLeft',
    icon: 'ep:info-filled',
  })
}

const bottomright = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    position: 'bottomRight',
    icon: 'ep:info-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,N=B({__name:"position",setup(m){const c=()=>{r({title:"title",content:"content",position:"topLeft",icon:"ep:info-filled"})},u=()=>{r({title:"title",content:"content",position:"topRight",icon:"ep:info-filled"})},t=()=>{r({title:"title",content:"content",position:"bottomLeft",icon:"ep:info-filled"})},d=()=>{r({title:"title",content:"content",position:"bottomRight",icon:"ep:info-filled"})};return(b,o)=>(f(),p("div",null,[n(i(s),{onClick:c},{default:a(()=>o[0]||(o[0]=[l("top-left")])),_:1}),n(i(s),{onClick:u},{default:a(()=>o[1]||(o[1]=[l("top-right")])),_:1}),n(i(s),{onClick:t},{default:a(()=>o[2]||(o[2]=[l("bottom-left")])),_:1}),n(i(s),{onClick:d},{default:a(()=>o[3]||(o[3]=[l("bottom-right")])),_:1})]))}}),w=_(N,[["__scopeId","data-v-9a4eacbc"]]),K=`<template>
  <div>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const info = () => {
  VKNotification({
    title: 'title',
    type: 'info',
    plain: true,
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VKNotification({
    title: 'title',
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: 'content',
  })
}

const warning = () => {
  VKNotification({
    title: 'title',
    type: 'warn',
    plain: true,
    icon: 'ep:warning-filled',
    content: 'content',
  })
}

const error = () => {
  VKNotification({
    title: 'title',
    type: 'error',
    plain: true,
    icon: 'ep:circle-close-filled',
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,T=B({__name:"plain",setup(m){const c=()=>{r({title:"title",type:"info",plain:!0,content:"content",icon:"ep:info-filled"})},u=()=>{r({title:"title",type:"success",plain:!0,icon:"ep:success-filled",content:"content"})},t=()=>{r({title:"title",type:"warn",plain:!0,icon:"ep:warning-filled",content:"content"})},d=()=>{r({title:"title",type:"error",plain:!0,icon:"ep:circle-close-filled",content:"content"})};return(b,o)=>(f(),p("div",null,[n(i(s),{type:"info",onClick:c},{default:a(()=>o[0]||(o[0]=[l("info")])),_:1}),n(i(s),{type:"success",onClick:u},{default:a(()=>o[1]||(o[1]=[l("success")])),_:1}),n(i(s),{type:"warn",onClick:t},{default:a(()=>o[2]||(o[2]=[l("warning")])),_:1}),n(i(s),{type:"error",onClick:d},{default:a(()=>o[3]||(o[3]=[l("error")])),_:1})]))}}),Z=_(T,[["__scopeId","data-v-ab93ebe6"]]),A=`<template>
  <div>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const info = () => {
  VKNotification({
    title: 'title',
    type: 'info',
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VKNotification({
    title: 'title',
    type: 'success',
    content: 'content',
    icon: 'ep:success-filled',
  })
}

const warning = () => {
  VKNotification({
    title: 'title',
    type: 'warn',
    content: 'content',
    icon: 'ep:warning-filled',
  })
}

const error = () => {
  VKNotification({
    title: 'title',
    type: 'error',
    content: 'content',
    icon: 'ep:circle-close-filled',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,x=B({__name:"type",setup(m){const c=()=>{r({title:"title",type:"info",content:"content",icon:"ep:info-filled"})},u=()=>{r({title:"title",type:"success",content:"content",icon:"ep:success-filled"})},t=()=>{r({title:"title",type:"warn",content:"content",icon:"ep:warning-filled"})},d=()=>{r({title:"title",type:"error",content:"content",icon:"ep:circle-close-filled"})};return(b,o)=>(f(),p("div",null,[n(i(s),{type:"info",onClick:c},{default:a(()=>o[0]||(o[0]=[l("info")])),_:1}),n(i(s),{type:"success",onClick:u},{default:a(()=>o[1]||(o[1]=[l("success")])),_:1}),n(i(s),{type:"warn",onClick:t},{default:a(()=>o[2]||(o[2]=[l("warning")])),_:1}),n(i(s),{type:"error",onClick:d},{default:a(()=>o[3]||(o[3]=[l("error")])),_:1})]))}}),D=_(x,[["__scopeId","data-v-a3613243"]]),z=`<template>
  <div>
    <VKButton @click="openNotification">openNotification</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const openNotification = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    icon: 'ep:info-filled',
  })
}
<\/script>
`,X=B({__name:"base",setup(m){const c=()=>{r({title:"title",content:"content",icon:"ep:info-filled"})};return(u,t)=>(f(),p("div",null,[n(i(s),{onClick:c},{default:a(()=>t[0]||(t[0]=[l("openNotification")])),_:1})]))}}),Y={tabindex:"0"},L=JSON.parse('{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}'),q={name:"components/notification/index.md"},P=Object.assign(q,{setup(m){const c=g(!0);return(u,t)=>{const d=C("ClientOnly"),b=C("Tool");return f(),p("div",null,[t[8]||(t[8]=h('<h1 id="notification-通知" tabindex="-1">Notification 通知 <a class="header-anchor" href="#notification-通知" aria-label="Permalink to &quot;Notification 通知&quot;">​</a></h1><p>悬浮出现在页面角落，显示全局的通知提醒消息。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>你可以通过设置 <code>title</code> 和 <code>message</code> 属性来设置通知的标题和正文内容。 默认情况下，通知在 4500 毫秒后自动关闭，但你可以通过设置 <code>duration</code> 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 <code>duration</code> 接收一个 Number，单位为毫秒。</p>',4)),v(n(i(W),null,null,512),[[V,c.value]]),n(d,null,{default:a(()=>[n(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{c.value=!1}),vueCode:i(z)},{vue:a(()=>[n(X)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=e("h2",{id:"不同类型",tabindex:"-1"},[l("不同类型 "),e("a",{class:"header-anchor",href:"#不同类型","aria-label":'Permalink to "不同类型"'},"​")],-1)),t[10]||(t[10]=e("p",null,[l("我们提供了四种不同类型的提醒框："),e("code",null,"success"),l("、"),e("code",null,"warning"),l("、"),e("code",null,"info"),l(" 和 "),e("code",null,"error"),l("。")],-1)),v(n(i(W),null,null,512),[[V,c.value]]),n(d,null,{default:a(()=>[n(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{c.value=!1}),vueCode:i(A)},{vue:a(()=>[n(D)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=e("h2",{id:"不同风格",tabindex:"-1"},[l("不同风格 "),e("a",{class:"header-anchor",href:"#不同风格","aria-label":'Permalink to "不同风格"'},"​")],-1)),t[12]||(t[12]=e("p",null,[l("通知色彩更加鲜明，支持 "),e("code",null,"success"),l("、"),e("code",null,"warning"),l("、"),e("code",null,"info"),l(" 和 "),e("code",null,"error"),l(" 四种类型。")],-1)),v(n(i(W),null,null,512),[[V,c.value]]),n(d,null,{default:a(()=>[n(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{c.value=!1}),vueCode:i(K)},{vue:a(()=>[n(Z)]),_:1},8,["vueCode"])]),_:1}),t[13]||(t[13]=h('<h2 id="自定义消息弹出的位置" tabindex="-1">自定义消息弹出的位置 <a class="header-anchor" href="#自定义消息弹出的位置" aria-label="Permalink to &quot;自定义消息弹出的位置&quot;">​</a></h2><p>可以让 Notification 从屏幕四角中的任意一角弹出。</p><p>使用 <code>position</code> 属性设置 Notification 的弹出位置， 支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code> 和 <code>bottom-left</code>， 默认为 <code>top-right</code>。</p>',3)),v(n(i(W),null,null,512),[[V,c.value]]),n(d,null,{default:a(()=>[n(i(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{c.value=!1}),vueCode:i(k)},{vue:a(()=>[n(w)]),_:1},8,["vueCode"])]),_:1}),t[14]||(t[14]=h('<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td>-</td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>4500</code></td></tr></tbody></table><h3 id="notification-方法" tabindex="-1">Notification 方法 <a class="header-anchor" href="#notification-方法" aria-label="Permalink to &quot;Notification 方法&quot;">​</a></h3>',4)),e("table",Y,[t[7]||(t[7]=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"描述"),e("th",null,"类型")])],-1)),e("tbody",null,[e("tr",null,[t[5]||(t[5]=e("td",null,[e("code",null,"destroy")],-1)),t[6]||(t[6]=e("td",null,"notification 的销毁函数",-1)),e("td",null,[t[4]||(t[4]=e("code",null,"function",-1)),n(b,{value:"() => void"})])])])])])}}});export{L as __pageData,P as default};
