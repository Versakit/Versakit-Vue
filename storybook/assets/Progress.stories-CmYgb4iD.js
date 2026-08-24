import{h as t}from"./vue-B_9GhRaC.js";import{d as y,r as x,c as P,a as e,b as r,u as n,w,o as T,t as h}from"./iframe-BywGPS4Q.js";const V={class:"space-y-8"},S={class:"space-y-4"},k={class:"space-y-4"},D={class:"space-y-4"},C={class:"font-bold"},B={class:"space-y-4"},z={class:"flex items-center gap-4"},A=["disabled"],I=y({__name:"index",setup(a){const o=x(0),l=x(!1),b=()=>{if(l.value)return;l.value=!0,o.value=0;const c=setInterval(()=>{o.value+=1,o.value>=100&&(clearInterval(c),l.value=!1)},50)},f=()=>{o.value=0};return(c,s)=>(T(),P("div",V,[e("section",null,[s[0]||(s[0]=e("h3",{class:"text-xl font-bold mb-4"},"基础进度条",-1)),r(n(t),{value:40})]),e("section",null,[s[1]||(s[1]=e("h3",{class:"text-xl font-bold mb-4"},"带文本的进度条",-1)),r(n(t),{value:60,showText:""})]),e("section",null,[s[5]||(s[5]=e("h3",{class:"text-xl font-bold mb-4"},"不同大小的进度条",-1)),e("div",S,[e("div",null,[s[2]||(s[2]=e("p",{class:"mb-2 text-sm text-gray-500"},"小号进度条",-1)),r(n(t),{value:30,size:"sm"})]),e("div",null,[s[3]||(s[3]=e("p",{class:"mb-2 text-sm text-gray-500"},"中号进度条",-1)),r(n(t),{value:50,size:"md"})]),e("div",null,[s[4]||(s[4]=e("p",{class:"mb-2 text-sm text-gray-500"},"大号进度条",-1)),r(n(t),{value:70,size:"lg"})])])]),e("section",null,[s[9]||(s[9]=e("h3",{class:"text-xl font-bold mb-4"},"不同形状的进度条",-1)),e("div",k,[e("div",null,[s[6]||(s[6]=e("p",{class:"mb-2 text-sm text-gray-500"},"方形进度条",-1)),r(n(t),{value:40,shape:"flat"})]),e("div",null,[s[7]||(s[7]=e("p",{class:"mb-2 text-sm text-gray-500"},"圆角进度条",-1)),r(n(t),{value:60,shape:"rounded"})]),e("div",null,[s[8]||(s[8]=e("p",{class:"mb-2 text-sm text-gray-500"},"胶囊形进度条",-1)),r(n(t),{value:80,shape:"pill"})])])]),e("section",null,[s[15]||(s[15]=e("h3",{class:"text-xl font-bold mb-4"},"不同状态的进度条",-1)),e("div",D,[e("div",null,[s[10]||(s[10]=e("p",{class:"mb-2 text-sm text-gray-500"},"默认状态",-1)),r(n(t),{value:40,variant:"default",showText:""})]),e("div",null,[s[11]||(s[11]=e("p",{class:"mb-2 text-sm text-gray-500"},"成功状态",-1)),r(n(t),{value:100,variant:"success",showText:""})]),e("div",null,[s[12]||(s[12]=e("p",{class:"mb-2 text-sm text-gray-500"},"警告状态",-1)),r(n(t),{value:70,variant:"warning",showText:""})]),e("div",null,[s[13]||(s[13]=e("p",{class:"mb-2 text-sm text-gray-500"},"危险状态",-1)),r(n(t),{value:20,variant:"danger",showText:""})]),e("div",null,[s[14]||(s[14]=e("p",{class:"mb-2 text-sm text-gray-500"},"信息状态",-1)),r(n(t),{value:50,variant:"info",showText:""})])])]),e("section",null,[s[16]||(s[16]=e("h3",{class:"text-xl font-bold mb-4"},"条纹进度条",-1)),r(n(t),{value:60,striped:""})]),e("section",null,[s[17]||(s[17]=e("h3",{class:"text-xl font-bold mb-4"},"动画进度条",-1)),r(n(t),{value:60,striped:"",animated:""})]),e("section",null,[s[18]||(s[18]=e("h3",{class:"text-xl font-bold mb-4"},"不确定状态进度条",-1)),r(n(t),{indeterminate:""})]),e("section",null,[s[19]||(s[19]=e("h3",{class:"text-xl font-bold mb-4"},"自定义文本",-1)),r(n(t),{value:75,showText:""},{text:w(()=>[e("span",C,h(Math.round(75))+"分 / 100分",1)]),_:1})]),e("section",null,[s[20]||(s[20]=e("h3",{class:"text-xl font-bold mb-4"},"动态进度条",-1)),e("div",B,[r(n(t),{value:o.value,showText:""},null,8,["value"]),e("div",z,[e("button",{onClick:b,class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",disabled:l.value}," 开始进度 ",8,A),e("button",{onClick:f,class:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"}," 重置 ")])])]),e("section",null,[s[21]||(s[21]=e("h3",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),r(n(t),{value:50,unstyled:"",pt:{root:"w-full",container:"w-full h-4 bg-gray-100 rounded-full overflow-hidden",bar:"h-full bg-gradient-to-r from-purple-500 to-pink-500",text:"text-right text-sm font-medium text-purple-700 mt-1"},showText:""})])]))}}),N={title:"组件/Progress 进度条",component:t,tags:["autodocs"],argTypes:{value:{control:"number",description:"进度值，范围0-100",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},max:{control:"number",description:"最大值",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},showText:{control:"boolean",description:"是否显示进度文本",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},variant:{control:"select",options:["default","success","warning","danger","info"],description:"进度条样式变体",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg"],description:"进度条大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},shape:{control:"select",options:["flat","rounded","pill"],description:"进度条形状",table:{type:{summary:"string"},defaultValue:{summary:"rounded"}}},striped:{control:"boolean",description:"是否显示条纹效果",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},animated:{control:"boolean",description:"是否显示动画效果",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",description:"是否为不确定状态",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"传递模板样式",table:{type:{summary:"ProgressPT"},defaultValue:{summary:"-"}}}}},u={args:{value:40},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},i={args:{value:60,showText:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},d={render:()=>({components:{Progress:t},template:`
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
    `})},p={args:{indeterminate:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},g={args:{value:50,unstyled:!0,pt:{root:"w-full",container:"w-full h-4 bg-gray-100 rounded-full overflow-hidden",bar:"h-full bg-gradient-to-r from-purple-500 to-pink-500",text:"text-right text-sm font-medium text-purple-700 mt-1"},showText:!0},render:a=>({components:{Progress:t},setup(){return{args:a}},template:'<Progress v-bind="args" />'})},v={render:()=>({components:{ProgressDemo:I},template:"<ProgressDemo />"})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ProgressDemo
    },
    template: '<ProgressDemo />'
  })
}`,...v.parameters?.docs?.source}}};const W=["Basic","WithText","Variants","StripedAndAnimated","Indeterminate","CustomStyling","FullDemo"];export{u as Basic,g as CustomStyling,v as FullDemo,p as Indeterminate,m as StripedAndAnimated,d as Variants,i as WithText,W as __namedExportsOrder,N as default};
