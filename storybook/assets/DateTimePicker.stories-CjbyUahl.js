import{U as l}from"./vue-B_9GhRaC.js";import{d as F,r as s,c as N,a as e,b as n,u as o,t as r,o as P}from"./iframe-BywGPS4Q.js";const z={class:"space-y-8 p-4"},B={class:"max-w-sm"},E={class:"mt-2"},R={class:"max-w-sm"},_={class:"mt-2"},W={class:"max-w-sm"},A={class:"mt-2"},M={class:"max-w-sm"},O={class:"mt-2"},Y={class:"max-w-sm"},j={class:"mt-2"},q={class:"flex flex-wrap gap-8"},G={class:"max-w-sm"},H={class:"max-w-sm"},I={class:"max-w-sm"},J={class:"mt-2"},K={class:"max-w-sm"},Q={class:"mt-2"},X=F({__name:"index",setup(Z){const d=s(new Date),u=s(new Date),m=new Date,L=new Date(m.getFullYear(),m.getMonth(),m.getDate()-7),U=new Date(m.getFullYear(),m.getMonth(),m.getDate()+7),i=s(new Date),c=s(new Date),p=s(new Date),k=s(new Date),C=s(new Date),D=s(new Date),b=s(new Date);return($,a)=>(P(),N("div",z,[e("section",null,[a[9]||(a[9]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",B,[n(o(l),{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=t=>d.value=t)},null,8,["modelValue"])]),e("div",E," 当前选择的日期时间: "+r(d.value?d.value.toLocaleString():"未选择"),1)]),e("section",null,[a[10]||(a[10]=e("h2",{class:"text-xl font-bold mb-4"},"日期范围限制",-1)),e("div",R,[n(o(l),{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=t=>u.value=t),min:o(L),max:o(U)},null,8,["modelValue","min","max"])]),e("div",_,[e("div",null," 当前选择的日期时间: "+r(u.value?u.value.toLocaleString():"未选择"),1),e("div",null," 可选范围: "+r(o(L).toLocaleString())+" 至 "+r(o(U).toLocaleString()),1)])]),e("section",null,[a[11]||(a[11]=e("h2",{class:"text-xl font-bold mb-4"},"12小时制",-1)),e("div",W,[n(o(l),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t),timeFormat:"12h"},null,8,["modelValue"])]),e("div",A,[e("div",null," 当前选择的日期时间: "+r(i.value?i.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[12]||(a[12]=e("h2",{class:"text-xl font-bold mb-4"},"显示秒选择器",-1)),e("div",M,[n(o(l),{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=t=>c.value=t),showSeconds:!0},null,8,["modelValue"])]),e("div",O,[e("div",null," 当前选择的日期时间: "+r(c.value?c.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[14]||(a[14]=e("h2",{class:"text-xl font-bold mb-4"},"自定义步长",-1)),e("div",Y,[n(o(l),{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t),hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0},null,8,["modelValue"])]),e("div",j,[e("div",null," 当前选择的日期时间: "+r(p.value?p.value.toLocaleString():"未选择"),1),a[13]||(a[13]=e("div",null,"小时步长: 2, 分钟步长: 15, 秒步长: 30",-1))])]),e("section",null,[a[17]||(a[17]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",q,[e("div",null,[e("div",G,[n(o(l),{modelValue:k.value,"onUpdate:modelValue":a[5]||(a[5]=t=>k.value=t),disabled:""},null,8,["modelValue"])]),a[15]||(a[15]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",H,[n(o(l),{modelValue:C.value,"onUpdate:modelValue":a[6]||(a[6]=t=>C.value=t),readonly:""},null,8,["modelValue"])]),a[16]||(a[16]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[a[18]||(a[18]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",I,[n(o(l),{modelValue:D.value,"onUpdate:modelValue":a[7]||(a[7]=t=>D.value=t),clearable:!1},null,8,["modelValue"])]),e("div",J,[e("div",null," 当前选择的日期时间: "+r(D.value?D.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[20]||(a[20]=e("h2",{class:"text-xl font-bold mb-4"},"本地化",-1)),e("div",K,[n(o(l),{modelValue:b.value,"onUpdate:modelValue":a[8]||(a[8]=t=>b.value=t),locale:"zh-CN"},null,8,["modelValue"])]),e("div",Q,[e("div",null," 当前选择的日期时间: "+r(b.value?b.value.toLocaleString():"未选择"),1),a[19]||(a[19]=e("div",null,"本地化: 中文",-1))])])]))}}),te={title:"组件/DateTimePicker 日期时间选择器",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"date",description:"绑定值，选中的日期时间",table:{type:{summary:"Date"}}},min:{control:"date",description:"可选择的最小日期时间",table:{type:{summary:"Date"}}},max:{control:"date",description:"可选择的最大日期时间",table:{type:{summary:"Date"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择日期时间"}}},dateFormat:{control:"text",description:"日期格式",table:{type:{summary:"string"}}},timeFormat:{control:"select",options:["12h","24h"],description:"时间格式",table:{type:{summary:"'12h' | '24h'"},defaultValue:{summary:"24h"}}},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"一周的第一天，0表示周日，1表示周一",table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"0"}}},locale:{control:"text",description:"本地化配置，影响月份和星期的显示",table:{type:{summary:"string"},defaultValue:{summary:"系统默认"}}},hourStep:{control:"number",description:"小时选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},minuteStep:{control:"number",description:"分钟选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},secondStep:{control:"number",description:"秒选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},showSeconds:{control:"boolean",description:"是否显示秒选择器",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"DateTimePickerPT"},defaultValue:{summary:"{}"}}}}},v={args:{placeholder:"请选择日期时间"}},y={args:{min:new Date(new Date().setDate(new Date().getDate()-7)),max:new Date(new Date().setDate(new Date().getDate()+7)),placeholder:"请选择日期时间（限制范围）"}},g={args:{timeFormat:"12h",placeholder:"请选择日期时间（12小时制）"}},V={args:{showSeconds:!0,placeholder:"请选择日期时间（带秒）"}},w={args:{hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0,placeholder:"自定义步长"}},S={args:{disabled:!0,placeholder:"禁用状态"}},x={args:{readonly:!0,modelValue:new Date}},f={args:{clearable:!1,placeholder:"不可清空"}},h={args:{locale:"zh-CN",placeholder:"中文本地化"}},T={render:()=>({components:{DateTimePickerDemo:X},template:"<DateTimePickerDemo />"})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择日期时间'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
    placeholder: '请选择日期时间（限制范围）'
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    timeFormat: '12h',
    placeholder: '请选择日期时间（12小时制）'
  }
}`,...g.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    showSeconds: true,
    placeholder: '请选择日期时间（带秒）'
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 30,
    showSeconds: true,
    placeholder: '自定义步长'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: new Date()
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN',
    placeholder: '中文本地化'
  }
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateTimePickerDemo
    },
    template: '<DateTimePickerDemo />'
  })
}`,...T.parameters?.docs?.source}}};const oe=["Basic","DateRange","Format12h","WithSeconds","CustomSteps","Disabled","Readonly","NonClearable","Localization","AllExamples"];export{T as AllExamples,v as Basic,w as CustomSteps,y as DateRange,S as Disabled,g as Format12h,h as Localization,f as NonClearable,x as Readonly,V as WithSeconds,oe as __namedExportsOrder,te as default};
