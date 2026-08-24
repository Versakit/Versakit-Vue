import{I as l}from"./vue-B_9GhRaC.js";import{d as L,r as s,c as U,a as e,b as n,u as o,t as r,o as z}from"./iframe-BywGPS4Q.js";const B={class:"space-y-8 p-4"},F={class:"max-w-md"},N={class:"mt-2"},O={class:"max-w-md"},E={class:"mt-2"},M={class:"flex flex-wrap gap-8"},R={class:"max-w-md"},W={class:"max-w-md"},_={class:"max-w-md"},A={class:"mt-2"},I={class:"max-w-md"},T={class:"mt-2"},Y={class:"max-w-md"},h={class:"mt-2"},j=L({__name:"index",setup(P){const u=s(new Date),m=s(new Date),d=new Date,V=new Date(d.getFullYear(),d.getMonth(),d.getDate()-7),S=new Date(d.getFullYear(),d.getMonth(),d.getDate()+7),C=s(new Date),k=s(new Date),i=s(new Date),c=s(new Date),p=s(new Date);return(q,a)=>(z(),U("div",B,[e("section",null,[a[7]||(a[7]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",F,[n(o(l),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=t=>u.value=t)},null,8,["modelValue"])]),e("div",N," 当前选择的日期: "+r(u.value?u.value.toLocaleDateString():"未选择"),1)]),e("section",null,[a[8]||(a[8]=e("h2",{class:"text-xl font-bold mb-4"},"日期范围限制",-1)),e("div",O,[n(o(l),{modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=t=>m.value=t),min:o(V),max:o(S)},null,8,["modelValue","min","max"])]),e("div",E,[e("div",null," 当前选择的日期: "+r(m.value?m.value.toLocaleDateString():"未选择"),1),e("div",null," 可选范围: "+r(o(V).toLocaleDateString())+" 至 "+r(o(S).toLocaleDateString()),1)])]),e("section",null,[a[11]||(a[11]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",M,[e("div",null,[e("div",R,[n(o(l),{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=t=>C.value=t),disabled:""},null,8,["modelValue"])]),a[9]||(a[9]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",W,[n(o(l),{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=t=>k.value=t),readonly:""},null,8,["modelValue"])]),a[10]||(a[10]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[a[13]||(a[13]=e("h2",{class:"text-xl font-bold mb-4"},"周一为一周的第一天",-1)),e("div",_,[n(o(l),{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=t=>i.value=t),firstDayOfWeek:1},null,8,["modelValue"])]),e("div",A,[e("div",null," 当前选择的日期: "+r(i.value?i.value.toLocaleDateString():"未选择"),1),a[12]||(a[12]=e("div",null,"一周的第一天: 周一",-1))])]),e("section",null,[a[15]||(a[15]=e("h2",{class:"text-xl font-bold mb-4"},"本地化",-1)),e("div",I,[n(o(l),{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=t=>c.value=t),locale:"zh-CN"},null,8,["modelValue"])]),e("div",T,[e("div",null," 当前选择的日期: "+r(c.value?c.value.toLocaleDateString():"未选择"),1),a[14]||(a[14]=e("div",null,"本地化: 中文",-1))])]),e("section",null,[a[16]||(a[16]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式",-1)),e("div",Y,[n(o(l),{modelValue:p.value,"onUpdate:modelValue":a[6]||(a[6]=t=>p.value=t),pt:{root:"bg-gray-100 rounded-lg p-4",header:"bg-blue-50 rounded-t-lg",weekdays:"text-blue-600",day:"hover:bg-blue-100",selectedDay:"bg-blue-500 text-white",todayDay:"border-2 border-blue-500"}},null,8,["modelValue"])]),e("div",h,[e("div",null," 当前选择的日期: "+r(p.value?p.value.toLocaleDateString():"未选择"),1)])])]))}}),J={title:"组件/Calendar 日历",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"date",description:"绑定值，选中的日期",table:{type:{summary:"Date"}}},min:{control:"date",description:"可选择的最小日期",table:{type:{summary:"Date"}}},max:{control:"date",description:"可选择的最大日期",table:{type:{summary:"Date"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"一周的第一天，0表示周日，1表示周一",table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"0"}}},locale:{control:"text",description:"本地化配置，影响月份和星期的显示",table:{type:{summary:"string"},defaultValue:{summary:"系统默认"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"CalendarPT"},defaultValue:{summary:"{}"}}}}},D={args:{}},b={args:{min:new Date(new Date().setDate(new Date().getDate()-7)),max:new Date(new Date().setDate(new Date().getDate()+7))}},g={args:{disabled:!0}},y={args:{readonly:!0,modelValue:new Date}},v={args:{firstDayOfWeek:1}},x={args:{locale:"zh-CN"}},w={args:{pt:{root:"bg-gray-100 rounded-lg p-4",header:"bg-blue-50 rounded-t-lg",weekdays:"text-blue-600",day:"hover:bg-blue-100",selectedDay:"bg-blue-500 text-white",todayDay:"border-2 border-blue-500"}}},f={render:()=>({components:{CalendarDemo:j},template:"<CalendarDemo />"})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7))
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: new Date()
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    firstDayOfWeek: 1
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN'
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    pt: {
      root: 'bg-gray-100 rounded-lg p-4',
      header: 'bg-blue-50 rounded-t-lg',
      weekdays: 'text-blue-600',
      day: 'hover:bg-blue-100',
      selectedDay: 'bg-blue-500 text-white',
      todayDay: 'border-2 border-blue-500'
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      CalendarDemo
    },
    template: '<CalendarDemo />'
  })
}`,...f.parameters?.docs?.source}}};const K=["Basic","DateRange","Disabled","Readonly","MondayFirst","Localization","CustomStyle","AllExamples"];export{f as AllExamples,D as Basic,w as CustomStyle,b as DateRange,g as Disabled,x as Localization,v as MondayFirst,y as Readonly,K as __namedExportsOrder,J as default};
