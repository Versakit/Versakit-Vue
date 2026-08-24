import{z as a}from"./vue-B_9GhRaC.js";import{d as U,r as o,c as D,a as e,b as t,u as r,t as n,o as _}from"./iframe-BywGPS4Q.js";const B={class:"space-y-8 p-4"},O={class:"max-w-sm"},R={class:"mt-2"},E={class:"max-w-sm"},H={class:"mt-2"},N={class:"max-w-sm"},P={class:"mt-2"},j={class:"max-w-sm"},k={class:"mt-2"},A={class:"flex flex-wrap gap-8"},F={class:"max-w-sm"},z={class:"max-w-sm"},M={class:"max-w-sm"},q={class:"mt-2"},G={class:"max-w-sm"},I={class:"mt-2"},J=U({__name:"index",setup(K){const V=o("12:30"),g=o("09:00"),f=o("02:30 PM"),x=o("09:00"),T=["09:00","12:00","15:00","18:00"],C=o("12:30"),w=o("12:30"),h=o("12:30"),S=o("");return(L,s)=>(_(),D("div",B,[e("section",null,[s[8]||(s[8]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",O,[t(r(a),{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=l=>V.value=l)},null,8,["modelValue"])]),e("div",R,"当前选择的时间: "+n(V.value||"未选择"),1)]),e("section",null,[s[10]||(s[10]=e("h2",{class:"text-xl font-bold mb-4"},"自定义时间范围和步长",-1)),e("div",E,[t(r(a),{modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=l=>g.value=l),start:"09:00",end:"18:00",step:15},null,8,["modelValue"])]),e("div",H,[e("div",null,"当前选择的时间: "+n(g.value||"未选择"),1),s[9]||(s[9]=e("div",null,"时间范围: 09:00 至 18:00，步长: 15分钟",-1))])]),e("section",null,[s[11]||(s[11]=e("h2",{class:"text-xl font-bold mb-4"},"12小时制",-1)),e("div",N,[t(r(a),{modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=l=>f.value=l),format:"12h"},null,8,["modelValue"])]),e("div",P,"当前选择的时间: "+n(f.value||"未选择"),1)]),e("section",null,[s[12]||(s[12]=e("h2",{class:"text-xl font-bold mb-4"},"自定义选项",-1)),e("div",j,[t(r(a),{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=l=>x.value=l),options:T},null,8,["modelValue"])]),e("div",k,[e("div",null,"当前选择的时间: "+n(x.value||"未选择"),1),e("div",null,"自定义选项: "+n(T.join(", ")),1)])]),e("section",null,[s[15]||(s[15]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",A,[e("div",null,[e("div",F,[t(r(a),{modelValue:C.value,"onUpdate:modelValue":s[4]||(s[4]=l=>C.value=l),disabled:""},null,8,["modelValue"])]),s[13]||(s[13]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",z,[t(r(a),{modelValue:w.value,"onUpdate:modelValue":s[5]||(s[5]=l=>w.value=l),readonly:""},null,8,["modelValue"])]),s[14]||(s[14]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[s[16]||(s[16]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",M,[t(r(a),{modelValue:h.value,"onUpdate:modelValue":s[6]||(s[6]=l=>h.value=l),clearable:!1},null,8,["modelValue"])]),e("div",q,[e("div",null,"当前选择的时间: "+n(h.value||"未选择"),1)])]),e("section",null,[s[17]||(s[17]=e("h2",{class:"text-xl font-bold mb-4"},"自定义占位文本",-1)),e("div",G,[t(r(a),{modelValue:S.value,"onUpdate:modelValue":s[7]||(s[7]=l=>S.value=l),placeholder:"请选择预约时间"},null,8,["modelValue"])]),e("div",I,[e("div",null,"当前选择的时间: "+n(S.value||"未选择"),1)])])]))}}),X={title:"组件/TimeSelect 时间选择",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"绑定值，选中的时间",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择时间"}}},options:{control:"object",description:"可选时间选项列表",table:{type:{summary:"string[]"}}},start:{control:"text",description:"开始时间，格式为 HH:mm",table:{type:{summary:"string"},defaultValue:{summary:"00:00"}}},end:{control:"text",description:"结束时间，格式为 HH:mm",table:{type:{summary:"string"},defaultValue:{summary:"23:59"}}},step:{control:"number",description:"时间间隔，单位为分钟",table:{type:{summary:"number"},defaultValue:{summary:"30"}}},format:{control:"select",options:["12h","24h"],description:"时间格式",table:{type:{summary:"'12h' | '24h'"},defaultValue:{summary:"24h"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"TimeSelectPT"},defaultValue:{summary:"{}"}}}}},m={args:{placeholder:"请选择时间"}},d={args:{start:"09:00",end:"18:00",step:15,placeholder:"工作时间选择（15分钟间隔）"}},u={args:{format:"12h",placeholder:"请选择时间（12小时制）"}},i={args:{options:["09:00","12:00","15:00","18:00"],placeholder:"选择预定义时间"}},c={args:{disabled:!0,placeholder:"禁用状态"}},p={args:{readonly:!0,modelValue:"12:30"}},b={args:{clearable:!1,placeholder:"不可清空"}},v={args:{placeholder:"请选择预约时间"}},y={render:()=>({components:{TimeSelectDemo:J},template:"<TimeSelectDemo />"})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择时间'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    start: '09:00',
    end: '18:00',
    step: 15,
    placeholder: '工作时间选择（15分钟间隔）'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    format: '12h',
    placeholder: '请选择时间（12小时制）'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: ['09:00', '12:00', '15:00', '18:00'],
    placeholder: '选择预定义时间'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '12:30'
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择预约时间'
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TimeSelectDemo
    },
    template: '<TimeSelectDemo />'
  })
}`,...y.parameters?.docs?.source}}};const Y=["Basic","CustomRange","Format12h","CustomOptions","Disabled","Readonly","NonClearable","CustomPlaceholder","AllExamples"];export{y as AllExamples,m as Basic,i as CustomOptions,v as CustomPlaceholder,d as CustomRange,c as Disabled,u as Format12h,b as NonClearable,p as Readonly,Y as __namedExportsOrder,X as default};
