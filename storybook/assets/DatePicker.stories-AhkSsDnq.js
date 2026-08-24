import{A as o}from"./vue-B_9GhRaC.js";import{d as F,r as s,c as N,a as e,b as n,u as l,t as r,o as P}from"./iframe-BywGPS4Q.js";const z={class:"space-y-8 p-4"},B={class:"max-w-sm"},O={class:"mt-2"},A={class:"max-w-sm"},E={class:"mt-2"},R={class:"flex flex-wrap gap-8"},W={class:"max-w-sm"},h={class:"max-w-sm"},T={class:"max-w-sm"},Y={class:"mt-2"},_={class:"max-w-sm"},j={class:"mt-2"},q={class:"max-w-sm"},G={class:"mt-2"},H={class:"max-w-sm"},I={class:"mt-2"},J={class:"max-w-sm"},K={class:"mt-2"},Q=F({__name:"index",setup(X){const m=s(new Date),u=s(new Date),d=new Date,M=new Date(d.getFullYear(),d.getMonth(),d.getDate()-7),L=new Date(d.getFullYear(),d.getMonth(),d.getDate()+7),C=s(new Date),U=s(new Date),i=s(new Date),c=s(new Date),p=s(new Date),D=s(new Date),k=s("2023-12-25");return(Z,a)=>(P(),N("div",z,[e("section",null,[a[9]||(a[9]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",B,[n(l(o),{modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=t=>m.value=t)},null,8,["modelValue"])]),e("div",O," 当前选择的日期: "+r(m.value?m.value.toLocaleDateString():"未选择"),1)]),e("section",null,[a[10]||(a[10]=e("h2",{class:"text-xl font-bold mb-4"},"日期范围限制",-1)),e("div",A,[n(l(o),{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=t=>u.value=t),min:l(M),max:l(L)},null,8,["modelValue","min","max"])]),e("div",E,[e("div",null," 当前选择的日期: "+r(u.value?u.value.toLocaleDateString():"未选择"),1),e("div",null," 可选范围: "+r(l(M).toLocaleDateString())+" 至 "+r(l(L).toLocaleDateString()),1)])]),e("section",null,[a[13]||(a[13]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",R,[e("div",null,[e("div",W,[n(l(o),{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=t=>C.value=t),disabled:""},null,8,["modelValue"])]),a[11]||(a[11]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",h,[n(l(o),{modelValue:U.value,"onUpdate:modelValue":a[3]||(a[3]=t=>U.value=t),readonly:""},null,8,["modelValue"])]),a[12]||(a[12]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[a[15]||(a[15]=e("h2",{class:"text-xl font-bold mb-4"},"自定义格式",-1)),e("div",T,[n(l(o),{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=t=>i.value=t),format:"yyyy年MM月dd日"},null,8,["modelValue"])]),e("div",Y,[e("div",null," 当前选择的日期: "+r(i.value?i.value.toLocaleDateString():"未选择"),1),a[14]||(a[14]=e("div",null,"格式: yyyy年MM月dd日",-1))])]),e("section",null,[a[17]||(a[17]=e("h2",{class:"text-xl font-bold mb-4"},"周一为一周的第一天",-1)),e("div",_,[n(l(o),{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=t=>c.value=t),firstDayOfWeek:1},null,8,["modelValue"])]),e("div",j,[e("div",null," 当前选择的日期: "+r(c.value?c.value.toLocaleDateString():"未选择"),1),a[16]||(a[16]=e("div",null,"一周的第一天: 周一",-1))])]),e("section",null,[a[18]||(a[18]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",q,[n(l(o),{modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=t=>p.value=t),clearable:!1},null,8,["modelValue"])]),e("div",G,[e("div",null," 当前选择的日期: "+r(p.value?p.value.toLocaleDateString():"未选择"),1)])]),e("section",null,[a[20]||(a[20]=e("h2",{class:"text-xl font-bold mb-4"},"本地化",-1)),e("div",H,[n(l(o),{modelValue:D.value,"onUpdate:modelValue":a[7]||(a[7]=t=>D.value=t),locale:"zh-CN"},null,8,["modelValue"])]),e("div",I,[e("div",null," 当前选择的日期: "+r(D.value?D.value.toLocaleDateString():"未选择"),1),a[19]||(a[19]=e("div",null,"本地化: 中文",-1))])]),e("section",null,[a[21]||(a[21]=e("h2",{class:"text-xl font-bold mb-4"},"使用字符串日期",-1)),e("div",J,[n(l(o),{modelValue:k.value,"onUpdate:modelValue":a[8]||(a[8]=t=>k.value=t)},null,8,["modelValue"])]),e("div",K,[e("div",null,"当前选择的日期: "+r(k.value||"未选择"),1)])])]))}}),ae={title:"组件/DatePicker 日期选择器",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"date",description:"绑定值，选中的日期",table:{type:{summary:"Date | string"}}},min:{control:"date",description:"可选择的最小日期",table:{type:{summary:"Date | string"}}},max:{control:"date",description:"可选择的最大日期",table:{type:{summary:"Date | string"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择日期"}}},format:{control:"text",description:"日期格式",table:{type:{summary:"string"}}},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"一周的第一天，0表示周日，1表示周一",table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"0"}}},locale:{control:"text",description:"本地化配置，影响月份和星期的显示",table:{type:{summary:"string"},defaultValue:{summary:"系统默认"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"DatePickerPT"},defaultValue:{summary:"{}"}}}}},y={args:{placeholder:"请选择日期"}},v={args:{min:new Date(new Date().setDate(new Date().getDate()-7)),max:new Date(new Date().setDate(new Date().getDate()+7)),placeholder:"请选择日期（限制范围）"}},g={args:{disabled:!0,placeholder:"禁用状态"}},b={args:{readonly:!0,modelValue:new Date}},f={args:{format:"yyyy年MM月dd日",placeholder:"自定义日期格式"}},x={args:{firstDayOfWeek:1,placeholder:"周一为一周的第一天"}},V={args:{clearable:!1,placeholder:"不可清空"}},w={args:{locale:"zh-CN",placeholder:"中文本地化"}},S={render:()=>({components:{DatePickerDemo:Q},template:"<DatePickerDemo />"})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择日期'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
    placeholder: '请选择日期（限制范围）'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: new Date()
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    format: 'yyyy年MM月dd日',
    placeholder: '自定义日期格式'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    firstDayOfWeek: 1,
    placeholder: '周一为一周的第一天'
  }
}`,...x.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN',
    placeholder: '中文本地化'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DatePickerDemo
    },
    template: '<DatePickerDemo />'
  })
}`,...S.parameters?.docs?.source}}};const te=["Basic","DateRange","Disabled","Readonly","CustomFormat","MondayFirst","NonClearable","Localization","AllExamples"];export{S as AllExamples,y as Basic,f as CustomFormat,v as DateRange,g as Disabled,w as Localization,x as MondayFirst,V as NonClearable,b as Readonly,te as __namedExportsOrder,ae as default};
