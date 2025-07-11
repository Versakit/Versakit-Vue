import{l as o}from"./index.esm-CnAUA7e5.js";/* empty css            */import{d as L,r as s,c as M,a as l,b as r,u as t,o as Q}from"./iframe-D_45vict.js";const R={class:"space-y-8 p-4"},W={class:"space-y-2"},X={class:"space-y-2"},Y={class:"space-y-2"},Z={class:"space-y-4"},$=L({__name:"index",setup(_){const x=s(!1),f=s(!0),y=s(!1),g=s(!0),V=s(!0);return(ee,e)=>(Q(),M("div",R,[l("section",null,[e[5]||(e[5]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),r(t(o),{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=a=>x.value=a),label:"同意服务条款"},null,8,["modelValue"])]),l("section",null,[e[6]||(e[6]=l("h2",{class:"text-xl font-bold mb-4"},"选中状态",-1)),r(t(o),{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=a=>f.value=a),label:"已选中状态"},null,8,["modelValue"])]),l("section",null,[e[7]||(e[7]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),l("div",W,[r(t(o),{disabled:"",label:"禁用状态（未选中）"}),r(t(o),{disabled:"","model-value":!0,label:"禁用状态（已选中）"})])]),l("section",null,[e[8]||(e[8]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",X,[r(t(o),{size:"small",label:"小尺寸"}),r(t(o),{size:"default",label:"默认尺寸"}),r(t(o),{size:"large",label:"大尺寸"})])]),l("section",null,[e[9]||(e[9]=l("h2",{class:"text-xl font-bold mb-4"},"不同颜色",-1)),l("div",Y,[r(t(o),{"model-value":!0,color:"blue",label:"蓝色（默认）"}),r(t(o),{"model-value":!0,color:"green",label:"绿色"}),r(t(o),{"model-value":!0,color:"red",label:"红色"}),r(t(o),{"model-value":!0,color:"yellow",label:"黄色"}),r(t(o),{"model-value":!0,color:"purple",label:"紫色"})])]),l("section",null,[e[10]||(e[10]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),r(t(o),{modelValue:y.value,"onUpdate:modelValue":e[2]||(e[2]=a=>y.value=a),label:"自定义样式",pt:{root:"border p-2 rounded-md bg-gray-50",checkbox:"border-purple-500",icon:"text-purple-500",label:"text-purple-700 ml-2"}},null,8,["modelValue"])]),l("section",null,[e[11]||(e[11]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",Z,[r(t(o),{modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=a=>g.value=a),label:"圆形复选框",unstyled:"",pt:{root:"flex items-center cursor-pointer",checkbox:"w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center bg-white",icon:"text-white",label:"ml-2 text-purple-700"}},null,8,["modelValue"]),r(t(o),{modelValue:V.value,"onUpdate:modelValue":e[4]||(e[4]=a=>V.value=a),label:"渐变背景复选框",unstyled:"",pt:{root:"flex items-center cursor-pointer",checkbox:"w-5 h-5 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center",icon:"text-white",label:"ml-2 font-medium"}},null,8,["modelValue"])])])]))}}),te={title:"组件/Checkbox 复选框",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"复选框状态值",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","default","large"],description:"复选框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},color:{control:"select",options:["blue","green","red","yellow","purple"],description:"复选框颜色",table:{type:{summary:"string"},defaultValue:{summary:"blue"}}},label:{control:"text",description:"复选框的标签",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},n={args:{modelValue:!1,label:"同意服务条款"}},u={args:{modelValue:!0,label:"已选中状态"}},d={args:{disabled:!0,label:"禁用状态"}},m={args:{label:"默认尺寸",size:"default"}},c={args:{modelValue:!0,label:"蓝色（默认）",color:"blue"}},p={args:{modelValue:!0,label:"自定义样式",pt:{root:"border p-2 rounded-md bg-gray-50",checkbox:"border-purple-500",icon:"text-purple-500",label:"text-purple-700 ml-2"}}},b={args:{modelValue:!0,label:"无样式模式",unstyled:!0,pt:{root:"flex items-center cursor-pointer",checkbox:"w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center bg-white",icon:"text-white",label:"ml-2 text-purple-700"}}},i={render:()=>({components:{CheckboxDemo:$},template:"<CheckboxDemo />"})};var k,v,h;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    label: '同意服务条款'
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var w,C,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '已选中状态'
  }
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,U,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: '禁用状态'
  }
}`,...(j=(U=d.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var D,B,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '默认尺寸',
    size: 'default'
  }
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var A,N,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '蓝色（默认）',
    color: 'blue'
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var O,P,q;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '自定义样式',
    pt: {
      root: 'border p-2 rounded-md bg-gray-50',
      checkbox: 'border-purple-500',
      icon: 'text-purple-500',
      label: 'text-purple-700 ml-2'
    }
  }
}`,...(q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var F,G,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    label: '无样式模式',
    unstyled: true,
    pt: {
      root: 'flex items-center cursor-pointer',
      checkbox: 'w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center bg-white',
      icon: 'text-white',
      label: 'ml-2 text-purple-700'
    }
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CheckboxDemo
    },
    template: '<CheckboxDemo />'
  })
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ae=["Basic","Checked","Disabled","Sizes","Colors","CustomStyle","Unstyled","AllExamples"];export{i as AllExamples,n as Basic,u as Checked,c as Colors,p as CustomStyle,d as Disabled,m as Sizes,b as Unstyled,ae as __namedExportsOrder,te as default};
