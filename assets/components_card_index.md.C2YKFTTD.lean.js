import{d as h,b as V,o,w as d,G as l,k as n,a as s,_ as y,c as u,j as e,F as x,C as W,t as w,p as k,B as c,aw as X,a5 as v,ad as b}from"./chunks/framework.Dr5ddTBW.js";import{g as i,W as Z,k as _}from"./chunks/theme.Bir5V9wV.js";import{d as C,f}from"./chunks/index.Cy4GuBY3.js";const D=`<template>
  <VKRow>
    <VKCard style="width: 480px" shadow="always">Always</VKCard>
    <VKCard style="width: 480px" shadow="hover">Hover</VKCard>
    <VKCard style="width: 480px" shadow="never">Never</VKCard>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKCard, VKRow } from '@versakit/ui'
<\/script>

<style scoped>
.ver-card {
  margin: 20px 0;
}
</style>
`,A=h({__name:"shadow",setup(p){return(r,a)=>(o(),V(n(Z),null,{default:d(()=>[l(n(i),{style:{width:"480px"},shadow:"always"},{default:d(()=>a[0]||(a[0]=[s("Always")])),_:1}),l(n(i),{style:{width:"480px"},shadow:"hover"},{default:d(()=>a[1]||(a[1]=[s("Hover")])),_:1}),l(n(i),{style:{width:"480px"},shadow:"never"},{default:d(()=>a[2]||(a[2]=[s("Never")])),_:1})]),_:1}))}}),z=y(A,[["__scopeId","data-v-f66f61f8"]]),T=`<template>
  <div>
    <VKCard>
      <template #header>
        <div>
          <span>头部</span>
        </div>
      </template>
      <div>
        <span>内容</span>
      </div>
      <template #footer>
        <div>
          <span>底部</span>
        </div>
      </template>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard } from '@versakit/ui'
<\/script>
`,g=h({__name:"template",setup(p){return(r,a)=>(o(),u("div",null,[l(n(i),null,{header:d(()=>a[0]||(a[0]=[e("div",null,[e("span",null,"头部")],-1)])),footer:d(()=>a[1]||(a[1]=[e("div",null,[e("span",null,"底部")],-1)])),default:d(()=>[a[2]||(a[2]=e("div",null,[e("span",null,"内容")],-1))]),_:1})]))}}),N=`<template>
  <div>
    <VKCard>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard } from '@versakit/ui'
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,Y=h({__name:"simple",setup(p){return(r,a)=>(o(),u("div",null,[l(n(i),null,{default:d(()=>[(o(),u(x,null,W(4,t=>e("div",{key:t,class:"text item"},w("List item "+t),1)),64))]),_:1})]))}}),G=y(Y,[["__scopeId","data-v-babc718f"]]),K=`<template>
  <div>
    <VKCard>
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <VKButton size="sm" type="primary">按 钮</VKButton>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </VKCard>
  </div>
</template>

<script lang="ts" setup>
import { VKCard, VKButton } from '@versakit/ui'
<\/script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
`,L={class:"card-header"},J=h({__name:"base",setup(p){return(r,a)=>(o(),u("div",null,[l(n(i),null,{header:d(()=>[e("div",L,[a[1]||(a[1]=e("span",null,"Card name",-1)),l(n(_),{size:"sm",type:"primary"},{default:d(()=>a[0]||(a[0]=[s("按 钮")])),_:1})])]),default:d(()=>[(o(),u(x,null,W(4,t=>e("div",{key:t,class:"text item"},w("List item "+t),1)),64))]),_:1})]))}}),F=y(J,[["__scopeId","data-v-35d7a16b"]]),q={tabindex:"0"},M=JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}'),I={name:"components/card/index.md"},H=Object.assign(I,{setup(p){const r=k(!0);return(a,t)=>{const m=c("ClientOnly"),B=c("Tool");return o(),u("div",null,[t[9]||(t[9]=X("",5)),v(l(n(C),null,null,512),[[b,r.value]]),l(m,null,{default:d(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{r.value=!1}),vueCode:n(K)},{vue:d(()=>[l(F)]),_:1},8,["vueCode"])]),_:1}),t[10]||(t[10]=e("h2",{id:"简单卡片",tabindex:"-1"},[s("简单卡片 "),e("a",{class:"header-anchor",href:"#简单卡片","aria-label":'Permalink to "简单卡片"'},"​")],-1)),t[11]||(t[11]=e("p",null,"卡片可以只有内容区域。",-1)),v(l(n(C),null,null,512),[[b,r.value]]),l(m,null,{default:d(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{r.value=!1}),vueCode:n(N)},{vue:d(()=>[l(G)]),_:1},8,["vueCode"])]),_:1}),t[12]||(t[12]=e("h2",{id:"插槽",tabindex:"-1"},[s("插槽 "),e("a",{class:"header-anchor",href:"#插槽","aria-label":'Permalink to "插槽"'},"​")],-1)),t[13]||(t[13]=e("p",null,"卡片可以只有内容区域。",-1)),v(l(n(C),null,null,512),[[b,r.value]]),l(m,null,{default:d(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{r.value=!1}),vueCode:n(T)},{vue:d(()=>[l(g)]),_:1},8,["vueCode"])]),_:1}),t[14]||(t[14]=e("h2",{id:"带有阴影效果的卡片",tabindex:"-1"},[s("带有阴影效果的卡片 "),e("a",{class:"header-anchor",href:"#带有阴影效果的卡片","aria-label":'Permalink to "带有阴影效果的卡片"'},"​")],-1)),t[15]||(t[15]=e("p",null,"你可以定义什么时候展示卡片的阴影效果。",-1)),t[16]||(t[16]=e("p",null,[s("通过 "),e("code",null,"shadow"),s(" 属性设置卡片阴影出现的时刻。该属性的值可以是: "),e("code",null,"always"),s("、"),e("code",null,"hover"),s(" 或 "),e("code",null,"never")],-1)),v(l(n(C),null,null,512),[[b,r.value]]),l(m,null,{default:d(()=>[l(n(f),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[3]||(t[3]=()=>{r.value=!1}),vueCode:n(D)},{vue:d(()=>[l(z)]),_:1},8,["vueCode"])]),_:1}),t[17]||(t[17]=e("h2",{id:"card-api",tabindex:"-1"},[s("Card API "),e("a",{class:"header-anchor",href:"#card-api","aria-label":'Permalink to "Card API"'},"​")],-1)),t[18]||(t[18]=e("h3",{id:"card-属性",tabindex:"-1"},[s("Card 属性 "),e("a",{class:"header-anchor",href:"#card-属性","aria-label":'Permalink to "Card 属性"'},"​")],-1)),e("table",q,[t[8]||(t[8]=e("thead",null,[e("tr",null,[e("th",null,"属性"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值")])],-1)),e("tbody",null,[e("tr",null,[t[5]||(t[5]=e("td",null,[e("code",null,"shadow")],-1)),t[6]||(t[6]=e("td",null,"可以使用shadow来决定卡片拥有阴影的时机",-1)),e("td",null,[t[4]||(t[4]=e("code",null,"enum",-1)),l(B,{value:"always,hover,never"})]),t[7]||(t[7]=e("td",null,"always",-1))])])]),t[19]||(t[19]=e("h3",{id:"card-插槽",tabindex:"-1"},[s("Card 插槽 "),e("a",{class:"header-anchor",href:"#card-插槽","aria-label":'Permalink to "Card 插槽"'},"​")],-1)),t[20]||(t[20]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,"卡片标题内容")])])],-1))])}}});export{M as __pageData,H as default};
