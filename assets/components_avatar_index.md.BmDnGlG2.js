import{d as A,c as v,o as u,j as a,G as t,k as e,w as i,_ as V,p as c,q as W,b as z,e as C,F as y,a as d,B as S,a4 as f,aw as Z,aa as g}from"./chunks/framework.rcZoKwU1.js";import{f as w,d as s,n as k,w as B}from"./chunks/theme.BK5t6puo.js";import{O as x,E as _}from"./chunks/index.CpKg_UEU.js";const K=`<script setup lang="ts">
import { VKAvatar, VKAvatarGroup } from '@versakit/ui'
<\/script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>VKAvatar Group</h2>
      <div class="demo-row">
        <VKAvatarGroup>
          <VKAvatar src="https://randomuser.me/api/portraits/women/1.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/men/1.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/women/2.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/men/2.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/women/3.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/men/3.jpg" />
        </VKAvatarGroup>
      </div>
    </section>

    <section class="demo-section">
      <h2>Custom Max Count</h2>
      <div class="demo-row">
        <VKAvatarGroup :maxCount="3">
          <VKAvatar src="https://randomuser.me/api/portraits/women/4.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/men/4.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/women/5.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/men/5.jpg" />
          <VKAvatar src="https://randomuser.me/api/portraits/women/6.jpg" />
        </VKAvatarGroup>
      </div>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.demo-section {
  margin-bottom: 40px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
  font-size: 1.2em;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
`,X={class:"container"},G={class:"demo-section"},Y={class:"demo-row"},j={class:"demo-section"},D={class:"demo-row"},T=A({__name:"group",setup(h){return(o,r)=>(u(),v("div",X,[a("section",G,[r[0]||(r[0]=a("h2",null,"VKAvatar Group",-1)),a("div",Y,[t(e(w),null,{default:i(()=>[t(e(s),{src:"https://randomuser.me/api/portraits/women/1.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/men/1.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/women/2.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/men/2.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/women/3.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/men/3.jpg"})]),_:1})])]),a("section",j,[r[1]||(r[1]=a("h2",null,"Custom Max Count",-1)),a("div",D,[t(e(w),{maxCount:3},{default:i(()=>[t(e(s),{src:"https://randomuser.me/api/portraits/women/4.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/men/4.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/women/5.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/men/5.jpg"}),t(e(s),{src:"https://randomuser.me/api/portraits/women/6.jpg"})]),_:1})])])]))}}),q=V(T,[["__scopeId","data-v-5359da24"]]),N=`<script setup lang="ts">
import { ref, watch } from 'vue'
import { VKAvatar, VKSegmented, VKSlider } from '@versakit/ui'

const sizeOptions = [
  { label: '小型', value: 'small' },
  { label: '默认', value: 'default' },
  { label: '大型', value: 'large' },
  { label: '自定义', value: 'custom' },
]
const selectedSize = ref<string | number>('default')
const showSlider = ref(false)
const customSize = ref(60)

watch(selectedSize, (newVal) => {
  showSlider.value = newVal === 'custom'
  if (newVal !== 'custom') {
    customSize.value = typeof newVal === 'number' ? newVal : 60
  }
})
<\/script>

<template>
  <div class="container">
    <section class="demo-section">
      <h2>尺寸演示</h2>
      <div class="demo-controls">
        <VKSegmented v-model="selectedSize" :options="sizeOptions" />

        <VKSlider
          v-if="showSlider"
          v-model="customSize"
          :min="20"
          :max="120"
          :step="5"
          class="custom-slider"
        />
      </div>
      <div class="demo-row">
        <VKAvatar
          :size="showSlider ? customSize : selectedSize"
          :text="showSlider ? \`\${customSize}px\` : selectedSize.toString()"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 新增滑块样式 */
.custom-slider {
  margin-top: 20px;
  padding: 0 15px;
  max-width: 300px;
}

.demo-controls {
  /* 保持原有样式 */
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
`,P={class:"container"},J={class:"demo-section"},E={class:"demo-controls"},I={class:"demo-row"},$=A({__name:"size",setup(h){const o=[{label:"小型",value:"small"},{label:"默认",value:"default"},{label:"大型",value:"large"},{label:"自定义",value:"custom"}],r=c("default"),n=c(!1),l=c(60);return W(r,m=>{n.value=m==="custom",m!=="custom"&&(l.value=typeof m=="number"?m:60)}),(m,p)=>(u(),v("div",P,[a("section",J,[p[2]||(p[2]=a("h2",null,"尺寸演示",-1)),a("div",E,[t(e(k),{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=b=>r.value=b),options:o},null,8,["modelValue"]),n.value?(u(),z(e(B),{key:0,modelValue:l.value,"onUpdate:modelValue":p[1]||(p[1]=b=>l.value=b),min:20,max:120,step:5,class:"custom-slider"},null,8,["modelValue"])):C("",!0)]),a("div",I,[t(e(s),{size:n.value?l.value:r.value,text:n.value?`${l.value}px`:r.value.toString()},null,8,["size","text"])])])]))}}),L=V($,[["__scopeId","data-v-fc5e386c"]]),U=`<template>
  <section class="demo-section">
    <div class="demo-row">
      <VKAvatar src="https://pic1.imgdb.cn/item/681c17a558cb8da5c8e43969.png" />
      <VKAvatar text="User" />
      <VKAvatar backgroundColor="#f56a00">U</VKAvatar>
    </div>
  </section>

  <section class="demo-section">
    <div class="demo-row">
      <VKAvatar shape="circle" text="C" />
      <VKAvatar shape="square" text="S" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { VKAvatar } from '@versakit/ui'
<\/script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
}
</style>
`,M={class:"demo-section"},F={class:"demo-row"},O={class:"demo-section"},H={class:"demo-row"},Q=A({__name:"base",setup(h){return(o,r)=>(u(),v(y,null,[a("section",M,[a("div",F,[t(e(s),{src:"https://pic1.imgdb.cn/item/681c17a558cb8da5c8e43969.png"}),t(e(s),{text:"User"}),t(e(s),{backgroundColor:"#f56a00"},{default:i(()=>r[0]||(r[0]=[d("U")])),_:1})])]),a("section",O,[a("div",H,[t(e(s),{shape:"circle",text:"C"}),t(e(s),{shape:"square",text:"S"})])])],64))}}),R=V(Q,[["__scopeId","data-v-a2cb8659"]]),st=JSON.parse('{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}'),tt={name:"components/avatar/index.md"},rt=Object.assign(tt,{setup(h){const o=c(!0);return(r,n)=>{const l=S("ClientOnly");return u(),v("div",null,[n[3]||(n[3]=a("h1",{id:"avatar-头像",tabindex:"-1"},[d("Avatar 头像 "),a("a",{class:"header-anchor",href:"#avatar-头像","aria-label":'Permalink to "Avatar 头像"'},"​")],-1)),n[4]||(n[4]=a("p",null,"Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。",-1)),n[5]||(n[5]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),n[6]||(n[6]=a("p",null,[d(" 使用 "),a("code",null,"shape"),d(" 和 "),a("code",null,"size"),d(" 属性来设置 Avatar 的形状和大小。 ")],-1)),f(t(e(x),null,null,512),[[g,o.value]]),t(l,null,{default:i(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{o.value=!1}),vueCode:e(U)},{vue:i(()=>[t(R)]),_:1},8,["vueCode"])]),_:1}),n[7]||(n[7]=a("h2",{id:"尺寸",tabindex:"-1"},[d("尺寸 "),a("a",{class:"header-anchor",href:"#尺寸","aria-label":'Permalink to "尺寸"'},"​")],-1)),n[8]||(n[8]=a("p",null,[d("使用 "),a("code",null,"size"),d(" 属性来设置 Avatar 的尺寸。")],-1)),f(t(e(x),null,null,512),[[g,o.value]]),t(l,null,{default:i(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[1]||(n[1]=()=>{o.value=!1}),vueCode:e(N)},{vue:i(()=>[t(L)]),_:1},8,["vueCode"])]),_:1}),n[9]||(n[9]=a("h2",{id:"头像组",tabindex:"-1"},[d("头像组 "),a("a",{class:"header-anchor",href:"#头像组","aria-label":'Permalink to "头像组"'},"​")],-1)),f(t(e(x),null,null,512),[[g,o.value]]),t(l,null,{default:i(()=>[t(e(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[2]||(n[2]=()=>{o.value=!1}),vueCode:e(K)},{vue:i(()=>[t(q)]),_:1},8,["vueCode"])]),_:1}),n[10]||(n[10]=Z('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="avatar-props" tabindex="-1">Avatar Props <a class="header-anchor" href="#avatar-props" aria-label="Permalink to &quot;Avatar Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>size</td><td>string | number</td><td>&#39;default&#39;</td><td>尺寸，支持预设值（small/default/large）或具体像素值</td></tr><tr><td>shape</td><td>string</td><td>&#39;circle&#39;</td><td>形状类型，可选 circle/square</td></tr><tr><td>text</td><td>string</td><td>-</td><td>显示的文字内容</td></tr><tr><td>backgroundColor</td><td>string</td><td>&#39;#1890ff&#39;</td><td>背景颜色</td></tr><tr><td>color</td><td>string</td><td>&#39;#ffffff&#39;</td><td>文字颜色</td></tr><tr><td>src</td><td>string</td><td>-</td><td>头像图片地址</td></tr><tr><td>alt</td><td>string</td><td>&#39;avatar&#39;</td><td>图片加载失败时的替代文本</td></tr></tbody></table><h3 id="avatargroup-props" tabindex="-1">AvatarGroup Props <a class="header-anchor" href="#avatargroup-props" aria-label="Permalink to &quot;AvatarGroup Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>maxCount</td><td>number</td><td>-</td><td>最大显示的头像数量</td></tr><tr><td>size</td><td>string</td><td>&#39;default&#39;</td><td>统一设置子项头像尺寸</td></tr><tr><td>maxPopoverPlacement</td><td>string</td><td>&#39;top&#39;</td><td>折叠菜单的弹出位置</td></tr></tbody></table>',5))])}}});export{st as __pageData,rt as default};
