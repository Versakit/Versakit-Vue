import{d as _,az as g,c as d,o as r,j as a,G as o,k as n,w as i,F as v,C as x,a5 as m,_ as y,p as b,B as f,aw as z,a as p,ad as k}from"./chunks/framework.Dr5ddTBW.js";import{O as W}from"./chunks/theme.Bir5V9wV.js";import{d as C,f as w}from"./chunks/index.Cy4GuBY3.js";const V=`<script setup lang="ts">
import { VKPanel } from '@versakit/ui'

const images = [
  'https://picsum.photos/400/300?random=1',
  'https://picsum.photos/400/300?random=2',
  'https://picsum.photos/400/300?random=3',
  'https://picsum.photos/400/300?random=4',
  'https://picsum.photos/400/300?random=5',
  'https://picsum.photos/400/300?random=6',
  'https://picsum.photos/400/300?random=7',
  'https://picsum.photos/400/300?random=8',
  'https://picsum.photos/400/300?random=9',
  'https://picsum.photos/400/300?random=10',
]
<\/script>

<template>
  <div class="lazy-load-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <div class="image-container">
          <img
            v-for="(src, index) in images"
            :key="index"
            v-lazy-load="{
              loading: 'https://via.placeholder.com/400x300?text=Loading...',
              error: 'https://via.placeholder.com/400x300?text=Error',
              rootMargin: '50px',
              threshold: 0.1,
            }"
            :src="src"
            :alt="\`Image \${index + 1}\`"
          />
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-load-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
    transition: opacity 0.3s;

    &[src=''] {
      opacity: 0;
    }
  }
}
</style>
`,L={class:"lazy-load-demo"},P={class:"demo-row"},T={class:"image-container"},Z=["src","alt"],A=_({__name:"index",setup(h){const e=["https://picsum.photos/400/300?random=1","https://picsum.photos/400/300?random=2","https://picsum.photos/400/300?random=3","https://picsum.photos/400/300?random=4","https://picsum.photos/400/300?random=5","https://picsum.photos/400/300?random=6","https://picsum.photos/400/300?random=7","https://picsum.photos/400/300?random=8","https://picsum.photos/400/300?random=9","https://picsum.photos/400/300?random=10"];return(c,t)=>{const s=g("lazy-load");return r(),d("div",L,[t[0]||(t[0]=a("h3",null,"基本用法",-1)),a("div",P,[o(n(W),null,{default:i(()=>[a("div",T,[(r(),d(v,null,x(e,(u,l)=>m(a("img",{key:l,src:u,alt:`Image ${l+1}`},null,8,Z),[[s,{loading:"https://via.placeholder.com/400x300?text=Loading...",error:"https://via.placeholder.com/400x300?text=Error",rootMargin:"50px",threshold:.1}]])),64))])]),_:1})])])}}}),B=y(A,[["__scopeId","data-v-9042c561"]]),I=JSON.parse('{"title":"LazyLoad 图片懒加载","description":"","frontmatter":{},"headers":[],"relativePath":"directives/lazy-load/index.md","filePath":"directives/lazy-load/index.md"}'),D={name:"directives/lazy-load/index.md"},N=Object.assign(D,{setup(h){const e=b(!0);return(c,t)=>{const s=f("ClientOnly");return r(),d("div",null,[t[1]||(t[1]=a("h1",{id:"lazyload-图片懒加载",tabindex:"-1"},[p("LazyLoad 图片懒加载 "),a("a",{class:"header-anchor",href:"#lazyload-图片懒加载","aria-label":'Permalink to "LazyLoad 图片懒加载"'},"​")],-1)),t[2]||(t[2]=a("p",null,"图片懒加载指令用于实现图片的按需加载，当图片进入视口时才开始加载，可以优化页面加载性能。",-1)),t[3]||(t[3]=a("h2",{id:"基本使用",tabindex:"-1"},[p("基本使用 "),a("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),m(o(n(C),null,null,512),[[k,e.value]]),o(s,null,{default:i(()=>[o(n(w),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{e.value=!1}),vueCode:n(V)},{vue:i(()=>[o(B)]),_:1},8,["vueCode"])]),_:1}),t[4]||(t[4]=z('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>loading</td><td>加载中显示的图片地址</td><td>string</td><td>-</td></tr><tr><td>error</td><td>加载失败显示的图片地址</td><td>string</td><td>-</td></tr><tr><td>rootMargin</td><td>触发加载的边距</td><td>string</td><td>&#39;0px&#39;</td></tr><tr><td>threshold</td><td>触发加载的可见比例</td><td>number</td><td>0</td></tr></tbody></table>',3))])}}});export{I as __pageData,N as default};
