import{H as s}from"./vue-C1JyWCF8.js";import{d as T,c as U,a as e,b as r,u as n,o as P}from"./iframe-Dgfci8jF.js";const q={class:"space-y-8 p-4"},F={class:"space-y-4"},G={class:"space-y-4"},J={class:"space-y-4"},K={class:"space-y-4"},M={class:"space-y-4"},Q=T({__name:"index",setup(R){return(W,t)=>(P(),U("div",q,[e("section",null,[t[0]||(t[0]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),r(n(s),{length:4,state:"default"})]),e("section",null,[t[3]||(t[3]=e("h2",{class:"text-xl font-bold mb-4"},"不同长度",-1)),e("div",F,[e("div",null,[t[1]||(t[1]=e("p",{class:"mb-2"},"4位验证码",-1)),r(n(s),{length:4,state:"default"})]),e("div",null,[t[2]||(t[2]=e("p",{class:"mb-2"},"6位验证码",-1)),r(n(s),{length:6,state:"default"})])])]),e("section",null,[t[7]||(t[7]=e("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),e("div",G,[e("div",null,[t[4]||(t[4]=e("p",{class:"mb-2"},"小尺寸",-1)),r(n(s),{length:4,size:"sm",state:"default"})]),e("div",null,[t[5]||(t[5]=e("p",{class:"mb-2"},"中等尺寸",-1)),r(n(s),{length:4,size:"md",state:"default"})]),e("div",null,[t[6]||(t[6]=e("p",{class:"mb-2"},"大尺寸",-1)),r(n(s),{length:4,size:"lg",state:"default"})])])]),e("section",null,[t[11]||(t[11]=e("h2",{class:"text-xl font-bold mb-4"},"不同状态",-1)),e("div",J,[e("div",null,[t[8]||(t[8]=e("p",{class:"mb-2"},"默认状态",-1)),r(n(s),{length:4,state:"default"})]),e("div",null,[t[9]||(t[9]=e("p",{class:"mb-2"},"错误状态",-1)),r(n(s),{length:4,state:"error"})]),e("div",null,[t[10]||(t[10]=e("p",{class:"mb-2"},"成功状态",-1)),r(n(s),{length:4,state:"success"})])])]),e("section",null,[t[13]||(t[13]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),e("div",K,[e("div",null,[t[12]||(t[12]=e("p",{class:"mb-2"},"自定义间距和边框颜色",-1)),r(n(s),{length:4,state:"default",pt:{container:"gap-4",input:"border-purple-500 focus:border-purple-700 focus:ring-purple-700"}})])])]),e("section",null,[t[17]||(t[17]=e("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),e("div",M,[e("div",null,[t[14]||(t[14]=e("p",{class:"mb-2"},"圆形输入框样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300"}})]),e("div",null,[t[15]||(t[15]=e("p",{class:"mb-2"},"下划线样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-4",input:"w-10 h-12 text-center text-2xl border-0 border-b-2 border-gray-400 focus:outline-none focus:border-green-500"}})]),e("div",null,[t[16]||(t[16]=e("p",{class:"mb-2"},"渐变边框样式",-1)),r(n(s),{length:4,state:"default",unstyled:"",pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl bg-white border-2 border-transparent bg-clip-padding rounded-md focus:outline-none"},style:{"--tw-gradient-from":"#3b82f6","--tw-gradient-to":"#8b5cf6","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to)"}})])])])]))}}),Z={title:"组件/InputOtp 验证码输入框",component:s,tags:["autodocs"],argTypes:{length:{control:"number",description:"验证码长度",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},size:{control:"select",options:["sm","md","lg"],description:"输入框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},state:{control:"select",options:["default","error","success"],description:"输入框状态",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},o={args:{length:4,state:"default"}},l={args:{length:6,state:"default"}},a={args:{length:4,size:"lg",state:"default"}},u={args:{length:4,state:"error"}},d={args:{length:4,state:"success"}},p={args:{length:4,state:"default",pt:{container:"gap-4",input:"border-purple-500 focus:border-purple-700 focus:ring-purple-700"}}},i={args:{length:4,state:"default",unstyled:!0,pt:{container:"flex gap-3",input:"w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300"}}},c={render:()=>({components:{InputOtpDemo:Q},template:"<InputOtpDemo />"})};var m,g,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    length: 6,
    state: 'default'
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,S,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    length: 4,
    size: 'lg',
    state: 'default'
  }
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var w,z,V;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'error'
  }
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var D,E,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'success'
  }
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var B,I,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default',
    pt: {
      container: 'gap-4',
      input: 'border-purple-500 focus:border-purple-700 focus:ring-purple-700'
    }
  }
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var j,k,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    length: 4,
    state: 'default',
    unstyled: true,
    pt: {
      container: 'flex gap-3',
      input: 'w-12 h-12 text-center text-2xl border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300'
    }
  }
}`,...(A=(k=i.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var H,L,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputOtpDemo
    },
    template: '<InputOtpDemo />'
  })
}`,...(N=(L=c.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const $=["Basic","DifferentLength","Sizes","Error","Success","CustomStyle","Unstyled","AllExamples"];export{c as AllExamples,o as Basic,p as CustomStyle,l as DifferentLength,u as Error,a as Sizes,d as Success,i as Unstyled,$ as __namedExportsOrder,Z as default};
