import{H as t}from"./vue-xwPymK6m.js";import{d as O,r as x,c as q,a as e,b as r,u as n,w as G,o as J,t as K}from"./iframe-4DWW7wU9.js";const L={class:"space-y-8"},Q={class:"space-y-4"},R={class:"space-y-4"},U={class:"space-y-4"},X={class:"font-bold"},Y={class:"space-y-4"},Z={class:"flex items-center gap-4"},$=["disabled"],_=O({__name:"index",setup(a){const o=x(0),l=x(!1),j=()=>{if(l.value)return;l.value=!0,o.value=0;const c=setInterval(()=>{o.value+=1,o.value>=100&&(clearInterval(c),l.value=!1)},50)},M=()=>{o.value=0};return(c,s)=>(J(),q("div",L,[e("section",null,[s[0]||(s[0]=e("h3",{class:"text-xl font-bold mb-4"},"基础进度条",-1)),r(n(t),{value:40})]),e("section",null,[s[1]||(s[1]=e("h3",{class:"text-xl font-bold mb-4"},"带文本的进度条",-1)),r(n(t),{value:60,showText:""})]),e("section",null,[s[5]||(s[5]=e("h3",{class:"text-xl font-bold mb-4"},"不同大小的进度条",-1)),e("div",Q,[e("div",null,[s[2]||(s[2]=e("p",{class:"mb-2 text-sm text-gray-500"},"小号进度条",-1)),r(n(t),{value:30,size:"sm"})]),e("div",null,[s[3]||(s[3]=e("p",{class:"mb-2 text-sm text-gray-500"},"中号进度条",-1)),r(n(t),{value:50,size:"md"})]),e("div",null,[s[4]||(s[4]=e("p",{class:"mb-2 text-sm text-gray-500"},"大号进度条",-1)),r(n(t),{value:70,size:"lg"})])])]),e("section",null,[s[9]||(s[9]=e("h3",{class:"text-xl font-bold mb-4"},"不同形状的进度条",-1)),e("div",R,[e("div",null,[s[6]||(s[6]=e("p",{class:"mb-2 text-sm text-gray-500"},"方形进度条",-1)),r(n(t),{value:40,shape:"flat"})]),e("div",null,[s[7]||(s[7]=e("p",{class:"mb-2 text-sm text-gray-500"},"圆角进度条",-1)),r(n(t),{value:60,shape:"rounded"})]),e("div",null,[s[8]||(s[8]=e("p",{class:"mb-2 text-sm text-gray-500"},"胶囊形进度条",-1)),r(n(t),{value:80,shape:"pill"})])])]),e("section",null,[s[15]||(s[15]=e("h3",{class:"text-xl font-bold mb-4"},"不同状态的进度条",-1)),e("div",U,[e("div",null,[s[10]||(s[10]=e("p",{class:"mb-2 text-sm text-gray-500"},"默认状态",-1)),r(n(t),{value:40,variant:"default",showText:""})]),e("div",null,[s[11]||(s[11]=e("p",{class:"mb-2 text-sm text-gray-500"},"成功状态",-1)),r(n(t),{value:100,variant:"success",showText:""})]),e("div",null,[s[12]||(s[12]=e("p",{class:"mb-2 text-sm text-gray-500"},"警告状态",-1)),r(n(t),{value:70,variant:"warning",showText:""})]),e("div",null,[s[13]||(s[13]=e("p",{class:"mb-2 text-sm text-gray-500"},"危险状态",-1)),r(n(t),{value:20,variant:"danger",showText:""})]),e("div",null,[s[14]||(s[14]=e("p",{class:"mb-2 text-sm text-gray-500"},"信息状态",-1)),r(n(t),{value:50,variant:"info",showText:""})])])]),e("section",null,[s[16]||(s[16]=e("h3",{class:"text-xl font-bold mb-4"},"条纹进度条",-1)),r(n(t),{value:60,striped:""})]),e("section",null,[s[17]||(s[17]=e("h3",{class:"text-xl font-bold mb-4"},"动画进度条",-1)),r(n(t),{value:60,striped:"",animated:""})]),e("section",null,[s[18]||(s[18]=e("h3",{class:"text-xl font-bold mb-4"},"不确定状态进度条",-1)),r(n(t),{indeterminate:""})]),e("section",null,[s[19]||(s[19]=e("h3",{class:"text-xl font-bold mb-4"},"自定义文本",-1)),r(n(t),{value:75,showText:""},{text:G(()=>[e("span",X,K(Math.round(75))+"分 / 100分",1)]),_:1})]),e("section",null,[s[20]||(s[20]=e("h3",{class:"text-xl font-bold mb-4"},"动态进度条",-1)),e("div",Y,[r(n(t),{value:o.value,showText:""},null,8,["value"]),e("div",Z,[e("button",{onClick:j,class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",disabled:l.value}," 开始进度 ",8,$),e("button",{onClick:M,class:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}," 重置 ")])])]),e("section",null,[s[21]||(s[21]=e("h3",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),r(n(t),{value:50,unstyled:"",pt:{root:"w-full",container:"w-full h-4 bg-gray-100 rounded-full overflow-hidden",bar:"h-full bg-gradient-to-r from-purple-500 to-pink-500",text:"text-right text-sm font-medium text-purple-700 mt-1"},showText:""})])]))}}),te={title:"组件/Progress 进度条",component:t,tags:["autodocs"],argTypes:{value:{control:"number",description:"进度值，范围0-100",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},max:{control:"number",description:"最大值",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},showText:{control:"boolean",description:"是否显示进度文本",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},variant:{control:"select",options:["default","success","warning","danger","info"],description:"进度条样式变体",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg"],description:"进度条大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},shape:{control:"select",options:["flat","rounded","pill"],description:"进度条形状",table:{type:{summary:"string"},defaultValue:{summary:"rounded"}}},striped:{control:"boolean",description:"是否显示条纹效果",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},animated:{control:"boolean",description:"是否显示动画效果",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",description:"是否为不确定状态",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"传递模板样式",table:{type:{summary:"ProgressPT"},defaultValue:{summary:"-"}}}}},u={args:{value:40},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},i={args:{value:60,showText:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},d={render:()=>({components:{Progress:t},template:`
      <div class="space-y-4">
        <Progress value="40" variant="default" showText />
        <Progress value="100" variant="success" showText />
        <Progress value="70" variant="warning" showText />
        <Progress value="20" variant="danger" showText />
        <Progress value="50" variant="info" showText />
      </div>
    `})},m={render:()=>({components:{Progress:t},template:`
      <div class="space-y-4">
        <Progress value="60" striped />
        <Progress value="60" striped animated />
      </div>
    `})},p={args:{indeterminate:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},g={args:{value:50,unstyled:!0,pt:{root:"w-full",container:"w-full h-4 bg-gray-100 rounded-full overflow-hidden",bar:"h-full bg-gradient-to-r from-purple-500 to-pink-500",text:"text-right text-sm font-medium text-purple-700 mt-1"},showText:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},v={render:()=>({components:{ProgressDemo:_},template:"<ProgressDemo />"})};var b,f,y;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 40
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Progress v-bind="args" />\`
  })
}`,...(y=(f=u.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var P,w,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 60,
    showText: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Progress v-bind="args" />\`
  })
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var h,V,S;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div class="space-y-4">
        <Progress value="40" variant="default" showText />
        <Progress value="100" variant="success" showText />
        <Progress value="70" variant="warning" showText />
        <Progress value="20" variant="danger" showText />
        <Progress value="50" variant="info" showText />
      </div>
    \`
  })
}`,...(S=(V=d.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var k,D,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Progress
    },
    template: \`
      <div class="space-y-4">
        <Progress value="60" striped />
        <Progress value="60" striped animated />
      </div>
    \`
  })
}`,...(C=(D=m.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var B,z,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Progress v-bind="args" />\`
  })
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var I,E,F;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 50,
    unstyled: true,
    pt: {
      root: 'w-full',
      container: 'w-full h-4 bg-gray-100 rounded-full overflow-hidden',
      bar: 'h-full bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-right text-sm font-medium text-purple-700 mt-1'
    },
    showText: true
  },
  render: args => ({
    components: {
      Progress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Progress v-bind="args" />\`
  })
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,N,W;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ProgressDemo
    },
    template: '<ProgressDemo />'
  })
}`,...(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const re=["Basic","WithText","Variants","StripedAndAnimated","Indeterminate","CustomStyling","FullDemo"];export{u as Basic,g as CustomStyling,v as FullDemo,p as Indeterminate,m as StripedAndAnimated,d as Variants,i as WithText,re as __namedExportsOrder,te as default};
