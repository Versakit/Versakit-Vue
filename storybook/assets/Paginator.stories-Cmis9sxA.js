import{O as s}from"./vue-CAs37nm3.js";import{d as Z,r as _,c as f,a as t,b as a,u as n,w as i,F as tt,f as et,t as d,o as w,n as st}from"./iframe-QOevmNWR.js";const at={class:"space-y-8"},nt={class:"space-y-4"},rt={class:"space-y-4"},ot={class:"space-y-4"},lt={class:"space-y-4"},it={class:"border rounded-md overflow-hidden"},dt={class:"w-full"},mt={class:"px-4 py-2"},ut={class:"px-4 py-2"},pt={class:"px-4 py-2"},gt={class:"p-4 border-t"},ct={class:"space-y-4"},bt={class:"flex gap-2"},xt=Z({__name:"index",setup(r){const l=_(1);return(yt,e)=>(w(),f("div",at,[t("section",null,[e[3]||(e[3]=t("h2",{class:"text-xl font-bold mb-4"},"基础分页器",-1)),a(n(s),{totalPages:10})]),t("section",null,[e[7]||(e[7]=t("h2",{class:"text-xl font-bold mb-4"},"分页器大小",-1)),t("div",nt,[t("div",null,[e[4]||(e[4]=t("p",{class:"mb-2 text-sm text-gray-500"},"小尺寸",-1)),a(n(s),{totalPages:10,size:"sm"})]),t("div",null,[e[5]||(e[5]=t("p",{class:"mb-2 text-sm text-gray-500"},"中尺寸",-1)),a(n(s),{totalPages:10,size:"md"})]),t("div",null,[e[6]||(e[6]=t("p",{class:"mb-2 text-sm text-gray-500"},"大尺寸",-1)),a(n(s),{totalPages:10,size:"lg"})])])]),t("section",null,[e[11]||(e[11]=t("h2",{class:"text-xl font-bold mb-4"},"分页器变体",-1)),t("div",rt,[t("div",null,[e[8]||(e[8]=t("p",{class:"mb-2 text-sm text-gray-500"},"默认样式",-1)),a(n(s),{totalPages:10,variant:"default"})]),t("div",null,[e[9]||(e[9]=t("p",{class:"mb-2 text-sm text-gray-500"},"轮廓样式",-1)),a(n(s),{totalPages:10,variant:"outline"})]),t("div",null,[e[10]||(e[10]=t("p",{class:"mb-2 text-sm text-gray-500"},"文本样式",-1)),a(n(s),{totalPages:10,variant:"text"})])])]),t("section",null,[e[15]||(e[15]=t("h2",{class:"text-xl font-bold mb-4"},"分页器形状",-1)),t("div",ot,[t("div",null,[e[12]||(e[12]=t("p",{class:"mb-2 text-sm text-gray-500"},"方形",-1)),a(n(s),{totalPages:10,shape:"square"})]),t("div",null,[e[13]||(e[13]=t("p",{class:"mb-2 text-sm text-gray-500"},"圆角",-1)),a(n(s),{totalPages:10,shape:"rounded"})]),t("div",null,[e[14]||(e[14]=t("p",{class:"mb-2 text-sm text-gray-500"},"圆形",-1)),a(n(s),{totalPages:10,shape:"circle"})])])]),t("section",null,[e[19]||(e[19]=t("h2",{class:"text-xl font-bold mb-4"},"可见页码数量",-1)),t("div",lt,[t("div",null,[e[16]||(e[16]=t("p",{class:"mb-2 text-sm text-gray-500"},"显示3个页码",-1)),a(n(s),{totalPages:20,visiblePageCount:3,modelValue:10})]),t("div",null,[e[17]||(e[17]=t("p",{class:"mb-2 text-sm text-gray-500"},"显示5个页码",-1)),a(n(s),{totalPages:20,visiblePageCount:5,modelValue:10})]),t("div",null,[e[18]||(e[18]=t("p",{class:"mb-2 text-sm text-gray-500"},"显示7个页码",-1)),a(n(s),{totalPages:20,visiblePageCount:7,modelValue:10})])])]),t("section",null,[e[20]||(e[20]=t("h2",{class:"text-xl font-bold mb-4"},"带页码跳转",-1)),a(n(s),{totalPages:100,showJumper:""})]),t("section",null,[e[21]||(e[21]=t("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),a(n(s),{totalPages:10,disabled:""})]),t("section",null,[e[26]||(e[26]=t("h2",{class:"text-xl font-bold mb-4"},"自定义按钮",-1)),a(n(s),{totalPages:10},{"first-button":i(()=>e[22]||(e[22]=[t("span",{class:"text-xs"},"首页",-1)])),"prev-button":i(()=>e[23]||(e[23]=[t("span",{class:"text-xs"},"上一页",-1)])),"next-button":i(()=>e[24]||(e[24]=[t("span",{class:"text-xs"},"下一页",-1)])),"last-button":i(()=>e[25]||(e[25]=[t("span",{class:"text-xs"},"尾页",-1)])),_:1})]),t("section",null,[e[27]||(e[27]=t("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),a(n(s),{totalPages:10,unstyled:"",pt:{root:"flex items-center justify-center",list:"flex items-center gap-1",item:"",button:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm hover:bg-gray-100",activeButton:"w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full",prevButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",nextButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",firstButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",lastButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",ellipsis:"w-8 h-8 flex items-center justify-center"}})]),t("section",null,[e[29]||(e[29]=t("h2",{class:"text-xl font-bold mb-4"},"分页器与表格结合",-1)),t("div",it,[t("table",dt,[e[28]||(e[28]=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{class:"px-4 py-2 text-left"},"ID"),t("th",{class:"px-4 py-2 text-left"},"名称"),t("th",{class:"px-4 py-2 text-left"},"状态")])],-1)),t("tbody",null,[(w(),f(tt,null,et(5,o=>t("tr",{key:o,class:"border-t"},[t("td",mt,d(o),1),t("td",ut,"项目 "+d(o),1),t("td",pt,[t("span",{class:st(`inline-block px-2 py-1 rounded-full text-xs ${o%2===0?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`)},d(o%2===0?"已完成":"进行中"),3)])])),64))])]),t("div",gt,[a(n(s),{totalPages:10})])])]),t("section",null,[e[30]||(e[30]=t("h2",{class:"text-xl font-bold mb-4"},"受控分页器",-1)),t("div",ct,[t("p",null,"当前页码: "+d(l.value),1),a(n(s),{totalPages:10,modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o)},null,8,["modelValue"]),t("div",bt,[t("button",{onClick:e[1]||(e[1]=o=>l.value=Math.max(1,l.value-1)),class:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}," 上一页 "),t("button",{onClick:e[2]||(e[2]=o=>l.value=Math.min(10,l.value+1)),class:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}," 下一页 ")])])])]))}}),ft={title:"组件/Paginator 分页器",component:s,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"当前页码",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},totalPages:{control:"number",description:"总页数",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},visiblePageCount:{control:"number",description:"显示的页码按钮数量",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},showEndButtons:{control:"boolean",description:"是否显示首页和尾页按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showPrevNextButtons:{control:"boolean",description:"是否显示上一页和下一页按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showJumper:{control:"boolean",description:"是否显示页码跳转输入框",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["sm","md","lg"],description:"分页器大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},variant:{control:"select",options:["default","outline","text"],description:"分页器样式变体",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},shape:{control:"select",options:["square","rounded","circle"],description:"分页器形状",table:{type:{summary:"string"},defaultValue:{summary:"rounded"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},m={args:{totalPages:10},render:r=>({components:{Paginator:s},setup(){return{args:r}},template:'<Paginator v-bind="args" />'})},u={render:()=>({components:{Paginator:s},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    `})},p={render:()=>({components:{Paginator:s},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    `})},g={render:()=>({components:{Paginator:s},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    `})},c={render:()=>({components:{Paginator:s},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示7个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="7" :modelValue="10" />
        </div>
      </div>
    `})},b={args:{totalPages:100,showJumper:!0},render:r=>({components:{Paginator:s},setup(){return{args:r}},template:'<Paginator v-bind="args" />'})},x={args:{totalPages:10,disabled:!0},render:r=>({components:{Paginator:s},setup(){return{args:r}},template:'<Paginator v-bind="args" />'})},y={args:{totalPages:10},render:r=>({components:{Paginator:s},setup(){return{args:r}},template:`
      <Paginator v-bind="args">
        <template #first-button>
          <span class="text-xs">首页</span>
        </template>
        <template #prev-button>
          <span class="text-xs">上一页</span>
        </template>
        <template #next-button>
          <span class="text-xs">下一页</span>
        </template>
        <template #last-button>
          <span class="text-xs">尾页</span>
        </template>
      </Paginator>
    `})},v={args:{totalPages:10,unstyled:!0,pt:{root:"flex items-center justify-center",list:"flex items-center gap-1",item:"",button:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm hover:bg-gray-100",activeButton:"w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full",prevButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",nextButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",firstButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",lastButton:"w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100",ellipsis:"w-8 h-8 flex items-center justify-center"}},render:r=>({components:{Paginator:s},setup(){return{args:r}},template:'<Paginator v-bind="args" />'})},P={render:()=>({components:{PaginatorDemo:xt},template:"<PaginatorDemo />"})};var h,V,j;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    totalPages: 10
  },
  render: args => ({
    components: {
      Paginator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Paginator v-bind="args" />\`
  })
}`,...(j=(V=m.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,C,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Paginator
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">小尺寸</p>
          <Paginator :totalPages="10" size="sm" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">中尺寸</p>
          <Paginator :totalPages="10" size="md" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">大尺寸</p>
          <Paginator :totalPages="10" size="lg" />
        </div>
      </div>
    \`
  })
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,D,k;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Paginator
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">默认样式</p>
          <Paginator :totalPages="10" variant="default" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">轮廓样式</p>
          <Paginator :totalPages="10" variant="outline" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">文本样式</p>
          <Paginator :totalPages="10" variant="text" />
        </div>
      </div>
    \`
  })
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var J,E,q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Paginator
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">方形</p>
          <Paginator :totalPages="10" shape="square" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆角</p>
          <Paginator :totalPages="10" shape="rounded" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">圆形</p>
          <Paginator :totalPages="10" shape="circle" />
        </div>
      </div>
    \`
  })
}`,...(q=(E=g.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var N,O,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Paginator
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2 text-sm text-gray-500">显示3个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="3" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示5个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="5" :modelValue="10" />
        </div>
        <div>
          <p class="mb-2 text-sm text-gray-500">显示7个页码</p>
          <Paginator :totalPages="20" :visiblePageCount="7" :modelValue="10" />
        </div>
      </div>
    \`
  })
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var $,A,F;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    totalPages: 100,
    showJumper: true
  },
  render: args => ({
    components: {
      Paginator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Paginator v-bind="args" />\`
  })
}`,...(F=(A=b.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var M,W,I;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    disabled: true
  },
  render: args => ({
    components: {
      Paginator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Paginator v-bind="args" />\`
  })
}`,...(I=(W=x.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var L,T,G;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    totalPages: 10
  },
  render: args => ({
    components: {
      Paginator
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Paginator v-bind="args">
        <template #first-button>
          <span class="text-xs">首页</span>
        </template>
        <template #prev-button>
          <span class="text-xs">上一页</span>
        </template>
        <template #next-button>
          <span class="text-xs">下一页</span>
        </template>
        <template #last-button>
          <span class="text-xs">尾页</span>
        </template>
      </Paginator>
    \`
  })
}`,...(G=(T=y.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var H,K,Q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    totalPages: 10,
    unstyled: true,
    pt: {
      root: 'flex items-center justify-center',
      list: 'flex items-center gap-1',
      item: '',
      button: 'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm hover:bg-gray-100',
      activeButton: 'w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full',
      prevButton: 'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      nextButton: 'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      firstButton: 'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      lastButton: 'w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100',
      ellipsis: 'w-8 h-8 flex items-center justify-center'
    }
  },
  render: args => ({
    components: {
      Paginator
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Paginator v-bind="args" />\`
  })
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var R,X,Y;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PaginatorDemo
    },
    template: '<PaginatorDemo />'
  })
}`,...(Y=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const wt=["Basic","Sizes","Variants","Shapes","VisiblePageCount","WithJumper","Disabled","CustomButtons","Unstyled","AllExamples"];export{P as AllExamples,m as Basic,y as CustomButtons,x as Disabled,g as Shapes,u as Sizes,v as Unstyled,p as Variants,c as VisiblePageCount,b as WithJumper,wt as __namedExportsOrder,ft as default};
