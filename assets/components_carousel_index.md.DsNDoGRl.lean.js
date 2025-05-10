import{d as C,p as x,c as l,o as d,j as e,G as t,k as o,w as s,F as c,C as u,n as y,t as k,_ as V,B as w,a4 as I,aw as S,a as g,aa as K}from"./chunks/framework.rcZoKwU1.js";import{b as v,G as _}from"./chunks/theme.BK5t6puo.js";import{O as P,E as B}from"./chunks/index.CpKg_UEU.js";const T=`<script setup lang="ts">
import { VKCarousel, VKCarouselItem } from '@versakit/ui'
import { ref } from 'vue'

const currentSlide = ref(0)

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const images = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3',
]
<\/script>

<template>
  <div class="carousel-wrapper">
    <h3>基本用法</h3>
    <div class="carousel-demo">
      <VKCarousel height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>卡片模式</h3>
    <div class="carousel-demo">
      <VKCarousel type="card" height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>垂直模式</h3>
    <div class="carousel-demo">
      <VKCarousel direction="vertical" height="300px">
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>

    <h3>自定义指示器</h3>
    <div class="carousel-demo">
      <VKCarousel
        indicator-type="custom"
        indicator-position="outside"
        height="300px"
      >
        <template #indicators="{ currentIndex, items }">
          <div class="custom-indicators">
            <button
              v-for="(_, index) in items"
              :key="index"
              :class="{ active: currentIndex === index }"
              @click="goToSlide(index)"
            >
              {{ index + 1 }}
            </button>
          </div>
        </template>
        <VKCarouselItem v-for="(image, index) in images" :key="index">
          <div class="carousel-item-content">
            <img :src="image" alt="轮播图" />
          </div>
        </VKCarouselItem>
      </VKCarousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  width: 100%;
  margin: 40px 0;
  overflow: hidden;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.carousel-demo {
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.carousel-item-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.custom-indicators {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 16px;

  button {
    padding: 4px 8px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      background: #409eff;
      color: white;
      border-color: #409eff;
    }

    &:hover {
      border-color: #409eff;
      color: #409eff;
    }
  }
}
</style>
`,W={class:"carousel-wrapper"},X={class:"carousel-demo"},Z={class:"carousel-item-content"},N=["src"],A={class:"carousel-demo"},D={class:"carousel-item-content"},q=["src"],z={class:"carousel-demo"},Y={class:"carousel-item-content"},E=["src"],O={class:"carousel-demo"},j={class:"custom-indicators"},G=["onClick"],J={class:"carousel-item-content"},F=["src"],L=C({__name:"base",setup(b){const m=x(0),f=p=>{m.value=p},n=["https://picsum.photos/800/400?random=1","https://picsum.photos/800/400?random=2","https://picsum.photos/800/400?random=3"];return(p,i)=>(d(),l("div",W,[i[0]||(i[0]=e("h3",null,"基本用法",-1)),e("div",X,[t(o(v),{height:"300px"},{default:s(()=>[(d(),l(c,null,u(n,(a,r)=>t(o(_),{key:r},{default:s(()=>[e("div",Z,[e("img",{src:a,alt:"轮播图"},null,8,N)])]),_:2},1024)),64))]),_:1})]),i[1]||(i[1]=e("h3",null,"卡片模式",-1)),e("div",A,[t(o(v),{type:"card",height:"300px"},{default:s(()=>[(d(),l(c,null,u(n,(a,r)=>t(o(_),{key:r},{default:s(()=>[e("div",D,[e("img",{src:a,alt:"轮播图"},null,8,q)])]),_:2},1024)),64))]),_:1})]),i[2]||(i[2]=e("h3",null,"垂直模式",-1)),e("div",z,[t(o(v),{direction:"vertical",height:"300px"},{default:s(()=>[(d(),l(c,null,u(n,(a,r)=>t(o(_),{key:r},{default:s(()=>[e("div",Y,[e("img",{src:a,alt:"轮播图"},null,8,E)])]),_:2},1024)),64))]),_:1})]),i[3]||(i[3]=e("h3",null,"自定义指示器",-1)),e("div",O,[t(o(v),{"indicator-type":"custom","indicator-position":"outside",height:"300px"},{indicators:s(({currentIndex:a,items:r})=>[e("div",j,[(d(!0),l(c,null,u(r,($,h)=>(d(),l("button",{key:h,class:y({active:a===h}),onClick:R=>f(h)},k(h+1),11,G))),128))])]),default:s(()=>[(d(),l(c,null,u(n,(a,r)=>t(o(_),{key:r},{default:s(()=>[e("div",J,[e("img",{src:a,alt:"轮播图"},null,8,F)])]),_:2},1024)),64))]),_:1})])]))}}),M=V(L,[["__scopeId","data-v-4844a954"]]),ne=JSON.parse('{"title":"Carousel 走马灯","description":"","frontmatter":{},"headers":[],"relativePath":"components/carousel/index.md","filePath":"components/carousel/index.md"}'),H={name:"components/carousel/index.md"},te=Object.assign(H,{setup(b){const m=x(!0);return(f,n)=>{const p=w("ClientOnly");return d(),l("div",null,[n[1]||(n[1]=e("h1",{id:"carousel-走马灯",tabindex:"-1"},[g("Carousel 走马灯 "),e("a",{class:"header-anchor",href:"#carousel-走马灯","aria-label":'Permalink to "Carousel 走马灯"'},"​")],-1)),n[2]||(n[2]=e("p",null,"在有限空间内，循环播放同一类型的图片、文字等内容",-1)),n[3]||(n[3]=e("h2",{id:"基本使用",tabindex:"-1"},[g("基本使用 "),e("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),n[4]||(n[4]=e("p",null,"通过数据源快速创建图片轮播，默认显示导航箭头和分页指示器",-1)),I(t(o(P),null,null,512),[[K,m.value]]),t(p,null,{default:s(()=>[t(o(B),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:n[0]||(n[0]=()=>{m.value=!1}),vueCode:o(T)},{vue:s(()=>[t(M)]),_:1},8,["vueCode"])]),_:1}),n[5]||(n[5]=S("",5))])}}});export{ne as __pageData,te as default};
