import{X as t}from"./index.esm-DjItFe4v.js";import{r as z}from"./iframe-BrQc6s_W.js";const q={title:"Components/Carousel",component:t,tags:["autodocs"],argTypes:{autoplay:{control:"boolean",description:"是否自动播放",defaultValue:!1},interval:{control:"number",description:"自动播放间隔(毫秒)",defaultValue:3e3},activeIndex:{control:"number",description:"初始激活项索引",defaultValue:0},direction:{control:{type:"select"},options:["horizontal","vertical"],description:"轮播方向",defaultValue:"horizontal"},loop:{control:"boolean",description:"是否循环播放",defaultValue:!0},indicators:{control:"boolean",description:"是否显示指示器",defaultValue:!0},controls:{control:"boolean",description:"是否显示控制按钮",defaultValue:!0},effect:{control:{type:"select"},options:["slide","fade"],description:"过渡效果",defaultValue:"slide"},touchable:{control:"boolean",description:"是否可触摸滑动",defaultValue:!0}}},r={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          <div class="w-full h-full bg-purple-500 flex items-center justify-center text-white text-2xl">幻灯片 4</div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:3e3,activeIndex:0,direction:"horizontal",loop:!0,indicators:!0,controls:!0,effect:"slide",touchable:!0}},n={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:3e3,direction:"vertical",effect:"slide"}},i={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:3e3,effect:"fade"}},a={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          
          <template #prev-icon>
            <span class="text-2xl font-bold">←</span>
          </template>
          
          <template #next-icon>
            <span class="text-2xl font-bold">→</span>
          </template>
        </Carousel>
      </div>
    `}),args:{autoplay:!1}},o={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    `}),args:{controls:!1,indicators:!1,autoplay:!0}},u={render:e=>({components:{Carousel:t},setup(){return{args:e}},template:`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 3</div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,pt:{root:"rounded-lg shadow-xl",prevButton:"bg-gray-900/80 text-white",nextButton:"bg-gray-900/80 text-white",indicator:"bg-gray-400 w-3 h-3",activeIndicator:"bg-white w-6 h-3"}}},c={render:e=>({components:{Carousel:t},setup(){const s=z(null);return{args:e,carouselRef:s,goToNext:()=>{var l;(l=s.value)==null||l.next()},goToPrev:()=>{var l;(l=s.value)==null||l.prev()},goToSlide:l=>{var d;(d=s.value)==null||d.goToSlide(l)}}},template:`
      <div>
        <div class="h-80 mb-4">
          <Carousel v-bind="args" ref="carouselRef">
            <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
            <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
            <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          </Carousel>
        </div>
        
        <div class="flex space-x-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToPrev">上一项</button>
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToNext">下一项</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(0)">1</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(1)">2</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(2)">3</button>
        </div>
      </div>
    `}),args:{autoplay:!1,controls:!1}};var f,x,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          <div class="w-full h-full bg-purple-500 flex items-center justify-center text-white text-2xl">幻灯片 4</div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 3000,
    activeIndex: 0,
    direction: 'horizontal',
    loop: true,
    indicators: true,
    controls: true,
    effect: 'slide',
    touchable: true
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,p,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 3000,
    direction: 'vertical',
    effect: 'slide'
  }
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,b,w;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 3000,
    effect: 'fade'
  }
}`,...(w=(b=i.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,C,j;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          
          <template #prev-icon>
            <span class="text-2xl font-bold">←</span>
          </template>
          
          <template #next-icon>
            <span class="text-2xl font-bold">→</span>
          </template>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: false
  }
}`,...(j=(C=a.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var T,S,V;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    controls: false,
    indicators: false,
    autoplay: true
  }
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var k,N,P;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="h-80">
        <Carousel v-bind="args">
          <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 1</div>
          <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 2</div>
          <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl rounded-lg shadow-lg m-1">幻灯片 3</div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    pt: {
      root: 'rounded-lg shadow-xl',
      prevButton: 'bg-gray-900/80 text-white',
      nextButton: 'bg-gray-900/80 text-white',
      indicator: 'bg-gray-400 w-3 h-3',
      activeIndicator: 'bg-white w-6 h-3'
    }
  }
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var R,I,B;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      const carouselRef = ref(null);
      const goToNext = () => {
        carouselRef.value?.next();
      };
      const goToPrev = () => {
        carouselRef.value?.prev();
      };
      const goToSlide = index => {
        carouselRef.value?.goToSlide(index);
      };
      return {
        args,
        carouselRef,
        goToNext,
        goToPrev,
        goToSlide
      };
    },
    template: \`
      <div>
        <div class="h-80 mb-4">
          <Carousel v-bind="args" ref="carouselRef">
            <div class="w-full h-full bg-blue-500 flex items-center justify-center text-white text-2xl">幻灯片 1</div>
            <div class="w-full h-full bg-green-500 flex items-center justify-center text-white text-2xl">幻灯片 2</div>
            <div class="w-full h-full bg-red-500 flex items-center justify-center text-white text-2xl">幻灯片 3</div>
          </Carousel>
        </div>
        
        <div class="flex space-x-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToPrev">上一项</button>
          <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="goToNext">下一项</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(0)">1</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(1)">2</button>
          <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="goToSlide(2)">3</button>
        </div>
      </div>
    \`
  }),
  args: {
    autoplay: false,
    controls: false
  }
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const A=["Basic","Vertical","FadeEffect","CustomControls","NoControlsIndicators","CustomStyling","ProgrammaticControl"];export{r as Basic,a as CustomControls,u as CustomStyling,i as FadeEffect,o as NoControlsIndicators,c as ProgrammaticControl,n as Vertical,A as __namedExportsOrder,q as default};
