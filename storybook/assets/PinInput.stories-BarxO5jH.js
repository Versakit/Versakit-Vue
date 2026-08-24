import{u as s}from"./vue-B_9GhRaC.js";import{d as m,c as g,a as e,b as r,u as n,o as f}from"./iframe-BywGPS4Q.js";const b={class:"space-y-8 p-4"},x={class:"space-y-4"},y={class:"space-y-4"},v={class:"space-y-4"},S={class:"space-y-4"},h={class:"space-y-4"},w=m({__name:"index",setup(z){return(V,t)=>(f(),g("div",b,[e("section",null,[t[0]||(t[0]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),r(n(s),{length:4,state:"default"})]),e("section",null,[t[3]||(t[3]=e("h2",{class:"text-xl font-bold mb-4"},"不同长度",-1)),e("div",x,[e("div",null,[t[1]||(t[1]=e("p",{class:"mb-2"},"4位验证码",-1)),r(n(s),{length:4,state:"default"})]),e("div",null,[t[2]||(t[2]=e("p",{class:"mb-2"},"6位验证码",-1)),r(n(s),{length:6,state:"default"})])])]),e("section",null,[t[7]||(t[7]=e("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),e("div",y,[e("div",null,[t[4]||(t[4]=e("p",{class:"mb-2"},"小尺寸",-1)),r(n(s),{length:4,size:"sm",state:"default"})]),e("div",null,[t[5]||(t[5]=e("p",{class:"mb-2"},"中等尺寸",-1)),r(n(s),{length:4,size:"md",state:"default"})]),e("div",null,[t[6]||(t[6]=e("p",{class:"mb-2"},"大尺寸",-1)),r(n(s),{length:4,size:"lg",state:"default"})])])]),e("section",null,[t[11]||(t[11]=e("h2",{class:"text-xl font-bold mb-4"},"不同状态",-1)),e("div",v,[e("div",null,[t[8]||(t[8]=e("p",{class:"mb-2"},"默认状态",-1)),r(n(s),{length:4,state:"default"})]),e("div",null,[t[9]||(t[9]=e("p",{class:"mb-2"},"错误状态",-1)),r(n(s),{length:4,state:"error"})]),e("div",null,[t[10]||(t[10]=e("p",{class:"mb-2"},"成功状态",-1)),r(n(s),{length:4,state:"success"})])])]),e("section",null,[t[13]||(t[13]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),e("div",S,[e("div",null,[t[12]||(t[12]=e("p",{class:"mb-2"},"自定义间距和边框颜色",-1)),r(n(s),{length:4,state:"default",pt:{container:"gap-4",input:"border-purple-500 focus:border-purple-700 focus:ring-purple-700"}})])])]),e("section",null,[t[17]||(t[17]=e("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),e("div",h,[e("div",null,[t[14]||(t[14]=e("p",{class:"mb-2"},"圆形输入框样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300"}})]),e("div",null,[t[15]||(t[15]=e("p",{class:"mb-2"},"下划线样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-4",input:"w-10 h-12 text-center text-2xl border-0 border-b-2 border-gray-400 focus:outline-none focus:border-green-500"}})]),e("div",null,[t[16]||(t[16]=e("p",{class:"mb-2"},"渐变边框样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl bg-white border-2 border-transparent bg-clip-padding rounded-md focus:outline-none"},style:{"--tw-gradient-from":"#3b82f6","--tw-gradient-to":"#8b5cf6","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)"}})])])])]))}}),O={title:"组件/InputOtp 验证码输入框",component:s,tags:["autodocs"],argTypes:{length:{control:"number",description:"验证码长度",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},size:{control:"select",options:["sm","md","lg"],description:"输入框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},state:{control:"select",options:["default","error","success"],description:"输入框状态",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},o={args:{length:4,state:"default"}},l={args:{length:6,state:"default"}},a={args:{length:4,size:"lg",state:"default"}},u={args:{length:4,state:"error"}},d={args:{length:4,state:"success"}},p={args:{length:4,state:"default",pt:{container:"gap-4",input:"border-purple-500 focus:border-purple-700 focus:ring-purple-700"}}},i={args:{length:4,state:"default",unstyled:!0,pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300"}}},c={render:()=>({components:{InputOtpDemo:w},template:"<InputOtpDemo />"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    state: 'default'
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    size: 'lg',
    state: 'default'
  }
}`,...a.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'error'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'success'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default',
    pt: {
      container: 'gap-4',
      input: 'border-purple-500 focus:border-purple-700 focus:ring-purple-700'
    }
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default',
    unstyled: true,
    pt: {
      container: 'flex gap-3',
      input: 'w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300'
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputOtpDemo
    },
    template: '<InputOtpDemo />'
  })
}`,...c.parameters?.docs?.source}}};const B=["Basic","DifferentLength","Sizes","Error","Success","CustomStyle","Unstyled","AllExamples"];export{c as AllExamples,o as Basic,p as CustomStyle,l as DifferentLength,u as Error,a as Sizes,d as Success,i as Unstyled,B as __namedExportsOrder,O as default};
