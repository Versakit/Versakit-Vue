import{r as l}from"./vue-C2ZjOHhi.js";import{d as K,r as a,c as Q,a as e,b as t,u as r,t as n,o as X}from"./iframe-DwJfJu0i.js";const Y={class:"space-y-8 p-4"},Z={class:"max-w-sm"},$={class:"mt-2"},ee={class:"max-w-sm"},se={class:"mt-2"},oe={class:"max-w-sm"},le={class:"mt-2"},ae={class:"max-w-sm"},te={class:"mt-2"},re={class:"flex flex-wrap gap-8"},ne={class:"max-w-sm"},de={class:"max-w-sm"},me={class:"max-w-sm"},ue={class:"mt-2"},ie={class:"max-w-sm"},ce={class:"mt-2"},pe=K({__name:"index",setup(be){const V=a("12:30"),f=a("02:30 PM"),S=a("12:30:45"),x=a("12:30:00"),h=a("12:30"),w=a("12:30"),g=a("12:30"),d=a(new Date);return(ve,s)=>(X(),Q("div",Y,[e("section",null,[s[8]||(s[8]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",Z,[t(r(l),{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=o=>V.value=o)},null,8,["modelValue"])]),e("div",$,"当前选择的时间: "+n(V.value||"未选择"),1)]),e("section",null,[s[9]||(s[9]=e("h2",{class:"text-xl font-bold mb-4"},"12小时制",-1)),e("div",ee,[t(r(l),{modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=o=>f.value=o),format:"12h"},null,8,["modelValue"])]),e("div",se,"当前选择的时间: "+n(f.value||"未选择"),1)]),e("section",null,[s[10]||(s[10]=e("h2",{class:"text-xl font-bold mb-4"},"显示秒选择器",-1)),e("div",oe,[t(r(l),{modelValue:S.value,"onUpdate:modelValue":s[2]||(s[2]=o=>S.value=o),showSeconds:!0},null,8,["modelValue"])]),e("div",le,"当前选择的时间: "+n(S.value||"未选择"),1)]),e("section",null,[s[12]||(s[12]=e("h2",{class:"text-xl font-bold mb-4"},"自定义步长",-1)),e("div",ae,[t(r(l),{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=o=>x.value=o),hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0},null,8,["modelValue"])]),e("div",te,[e("div",null,"当前选择的时间: "+n(x.value||"未选择"),1),s[11]||(s[11]=e("div",null,"小时步长: 2, 分钟步长: 15, 秒步长: 30",-1))])]),e("section",null,[s[15]||(s[15]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",re,[e("div",null,[e("div",ne,[t(r(l),{modelValue:h.value,"onUpdate:modelValue":s[4]||(s[4]=o=>h.value=o),disabled:""},null,8,["modelValue"])]),s[13]||(s[13]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",de,[t(r(l),{modelValue:w.value,"onUpdate:modelValue":s[5]||(s[5]=o=>w.value=o),readonly:""},null,8,["modelValue"])]),s[14]||(s[14]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[s[16]||(s[16]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",me,[t(r(l),{modelValue:g.value,"onUpdate:modelValue":s[6]||(s[6]=o=>g.value=o),clearable:!1},null,8,["modelValue"])]),e("div",ue,[e("div",null,"当前选择的时间: "+n(g.value||"未选择"),1)])]),e("section",null,[s[17]||(s[17]=e("h2",{class:"text-xl font-bold mb-4"},"使用Date对象",-1)),e("div",ie,[t(r(l),{modelValue:d.value,"onUpdate:modelValue":s[7]||(s[7]=o=>d.value=o)},null,8,["modelValue"])]),e("div",ce,[e("div",null," 当前选择的时间: "+n(d.value?d.value.toLocaleTimeString():"未选择"),1)])])]))}}),fe={title:"组件/TimePicker 时间选择器",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"绑定值，选中的时间",table:{type:{summary:"string | Date"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择时间"}}},format:{control:"select",options:["12h","24h"],description:"时间格式",table:{type:{summary:"'12h' | '24h'"},defaultValue:{summary:"24h"}}},hourStep:{control:"number",description:"小时选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},minuteStep:{control:"number",description:"分钟选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},secondStep:{control:"number",description:"秒选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},showSeconds:{control:"boolean",description:"是否显示秒选择器",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"TimePickerPT"},defaultValue:{summary:"{}"}}}}},m={args:{placeholder:"请选择时间"}},u={args:{format:"12h",placeholder:"请选择时间（12小时制）"}},i={args:{showSeconds:!0,placeholder:"请选择时间（带秒）"}},c={args:{hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0,placeholder:"自定义步长"}},p={args:{disabled:!0,placeholder:"禁用状态"}},b={args:{readonly:!0,modelValue:"12:30"}},v={args:{clearable:!1,placeholder:"不可清空"}},y={render:()=>({components:{TimePickerDemo:pe},template:"<TimePickerDemo />"})};var T,D,k;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择时间'
  }
}`,...(k=(D=m.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var P,U,C;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    format: '12h',
    placeholder: '请选择时间（12小时制）'
  }
}`,...(C=(U=u.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var _,B,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showSeconds: true,
    placeholder: '请选择时间（带秒）'
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,W,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 30,
    showSeconds: true,
    placeholder: '自定义步长'
  }
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,R,j;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var L,M,O;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '12:30'
  }
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,z,G;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,I,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TimePickerDemo
    },
    template: '<TimePickerDemo />'
  })
}`,...(J=(I=y.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const Se=["Basic","Format12h","WithSeconds","CustomSteps","Disabled","Readonly","NonClearable","AllExamples"];export{y as AllExamples,m as Basic,c as CustomSteps,p as Disabled,u as Format12h,v as NonClearable,b as Readonly,i as WithSeconds,Se as __namedExportsOrder,fe as default};
