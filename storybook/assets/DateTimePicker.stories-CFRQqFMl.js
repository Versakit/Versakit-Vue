import{B as l}from"./vue-CAs37nm3.js";import{d as ne,r as s,c as re,a as e,b as n,u as o,t as r,o as me}from"./iframe-QOevmNWR.js";const de={class:"space-y-8 p-4"},ue={class:"max-w-sm"},ie={class:"mt-2"},ce={class:"max-w-sm"},pe={class:"mt-2"},De={class:"max-w-sm"},be={class:"mt-2"},ve={class:"max-w-sm"},ye={class:"mt-2"},ge={class:"max-w-sm"},Ve={class:"mt-2"},we={class:"flex flex-wrap gap-8"},Se={class:"max-w-sm"},xe={class:"max-w-sm"},fe={class:"max-w-sm"},he={class:"mt-2"},Te={class:"max-w-sm"},Le={class:"mt-2"},ke=ne({__name:"index",setup(Ce){const d=s(new Date),u=s(new Date),m=new Date,L=new Date(m.getFullYear(),m.getMonth(),m.getDate()-7),k=new Date(m.getFullYear(),m.getMonth(),m.getDate()+7),i=s(new Date),c=s(new Date),p=s(new Date),C=s(new Date),F=s(new Date),D=s(new Date),b=s(new Date);return(Fe,a)=>(me(),re("div",de,[e("section",null,[a[9]||(a[9]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",ue,[n(o(l),{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=t=>d.value=t)},null,8,["modelValue"])]),e("div",ie," 当前选择的日期时间: "+r(d.value?d.value.toLocaleString():"未选择"),1)]),e("section",null,[a[10]||(a[10]=e("h2",{class:"text-xl font-bold mb-4"},"日期范围限制",-1)),e("div",ce,[n(o(l),{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=t=>u.value=t),min:o(L),max:o(k)},null,8,["modelValue","min","max"])]),e("div",pe,[e("div",null," 当前选择的日期时间: "+r(u.value?u.value.toLocaleString():"未选择"),1),e("div",null," 可选范围: "+r(o(L).toLocaleString())+" 至 "+r(o(k).toLocaleString()),1)])]),e("section",null,[a[11]||(a[11]=e("h2",{class:"text-xl font-bold mb-4"},"12小时制",-1)),e("div",De,[n(o(l),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=t=>i.value=t),timeFormat:"12h"},null,8,["modelValue"])]),e("div",be,[e("div",null," 当前选择的日期时间: "+r(i.value?i.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[12]||(a[12]=e("h2",{class:"text-xl font-bold mb-4"},"显示秒选择器",-1)),e("div",ve,[n(o(l),{modelValue:c.value,"onUpdate:modelValue":a[3]||(a[3]=t=>c.value=t),showSeconds:!0},null,8,["modelValue"])]),e("div",ye,[e("div",null," 当前选择的日期时间: "+r(c.value?c.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[14]||(a[14]=e("h2",{class:"text-xl font-bold mb-4"},"自定义步长",-1)),e("div",ge,[n(o(l),{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=t=>p.value=t),hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0},null,8,["modelValue"])]),e("div",Ve,[e("div",null," 当前选择的日期时间: "+r(p.value?p.value.toLocaleString():"未选择"),1),a[13]||(a[13]=e("div",null,"小时步长: 2, 分钟步长: 15, 秒步长: 30",-1))])]),e("section",null,[a[17]||(a[17]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",we,[e("div",null,[e("div",Se,[n(o(l),{modelValue:C.value,"onUpdate:modelValue":a[5]||(a[5]=t=>C.value=t),disabled:""},null,8,["modelValue"])]),a[15]||(a[15]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",xe,[n(o(l),{modelValue:F.value,"onUpdate:modelValue":a[6]||(a[6]=t=>F.value=t),readonly:""},null,8,["modelValue"])]),a[16]||(a[16]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[a[18]||(a[18]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",fe,[n(o(l),{modelValue:D.value,"onUpdate:modelValue":a[7]||(a[7]=t=>D.value=t),clearable:!1},null,8,["modelValue"])]),e("div",he,[e("div",null," 当前选择的日期时间: "+r(D.value?D.value.toLocaleString():"未选择"),1)])]),e("section",null,[a[20]||(a[20]=e("h2",{class:"text-xl font-bold mb-4"},"本地化",-1)),e("div",Te,[n(o(l),{modelValue:b.value,"onUpdate:modelValue":a[8]||(a[8]=t=>b.value=t),locale:"zh-CN"},null,8,["modelValue"])]),e("div",Le,[e("div",null," 当前选择的日期时间: "+r(b.value?b.value.toLocaleString():"未选择"),1),a[19]||(a[19]=e("div",null,"本地化: 中文",-1))])])]))}}),Ne={title:"组件/DateTimePicker 日期时间选择器",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"date",description:"绑定值，选中的日期时间",table:{type:{summary:"Date"}}},min:{control:"date",description:"可选择的最小日期时间",table:{type:{summary:"Date"}}},max:{control:"date",description:"可选择的最大日期时间",table:{type:{summary:"Date"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择日期时间"}}},dateFormat:{control:"text",description:"日期格式",table:{type:{summary:"string"}}},timeFormat:{control:"select",options:["12h","24h"],description:"时间格式",table:{type:{summary:"'12h' | '24h'"},defaultValue:{summary:"24h"}}},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"一周的第一天，0表示周日，1表示周一",table:{type:{summary:"0 | 1 | 2 | 3 | 4 | 5 | 6"},defaultValue:{summary:"0"}}},locale:{control:"text",description:"本地化配置，影响月份和星期的显示",table:{type:{summary:"string"},defaultValue:{summary:"系统默认"}}},hourStep:{control:"number",description:"小时选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},minuteStep:{control:"number",description:"分钟选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},secondStep:{control:"number",description:"秒选择步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},showSeconds:{control:"boolean",description:"是否显示秒选择器",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"DateTimePickerPT"},defaultValue:{summary:"{}"}}}}},v={args:{placeholder:"请选择日期时间"}},y={args:{min:new Date(new Date().setDate(new Date().getDate()-7)),max:new Date(new Date().setDate(new Date().getDate()+7)),placeholder:"请选择日期时间（限制范围）"}},g={args:{timeFormat:"12h",placeholder:"请选择日期时间（12小时制）"}},V={args:{showSeconds:!0,placeholder:"请选择日期时间（带秒）"}},w={args:{hourStep:2,minuteStep:15,secondStep:30,showSeconds:!0,placeholder:"自定义步长"}},S={args:{disabled:!0,placeholder:"禁用状态"}},x={args:{readonly:!0,modelValue:new Date}},f={args:{clearable:!1,placeholder:"不可清空"}},h={args:{locale:"zh-CN",placeholder:"中文本地化"}},T={render:()=>({components:{DateTimePickerDemo:ke},template:"<DateTimePickerDemo />"})};var U,B,N;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择日期时间'
  }
}`,...(N=(B=v.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var P,z,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    min: new Date(new Date().setDate(new Date().getDate() - 7)),
    max: new Date(new Date().setDate(new Date().getDate() + 7)),
    placeholder: '请选择日期时间（限制范围）'
  }
}`,...(E=(z=y.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var R,_,W;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    timeFormat: '12h',
    placeholder: '请选择日期时间（12小时制）'
  }
}`,...(W=(_=g.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var A,M,O;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    showSeconds: true,
    placeholder: '请选择日期时间（带秒）'
  }
}`,...(O=(M=V.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var Y,j,q;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 30,
    showSeconds: true,
    placeholder: '自定义步长'
  }
}`,...(q=(j=w.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var G,H,I;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...(I=(H=S.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: new Date()
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN',
    placeholder: '中文本地化'
  }
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,le,se;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DateTimePickerDemo
    },
    template: '<DateTimePickerDemo />'
  })
}`,...(se=(le=T.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Pe=["Basic","DateRange","Format12h","WithSeconds","CustomSteps","Disabled","Readonly","NonClearable","Localization","AllExamples"];export{T as AllExamples,v as Basic,w as CustomSteps,y as DateRange,S as Disabled,g as Format12h,h as Localization,f as NonClearable,x as Readonly,V as WithSeconds,Pe as __namedExportsOrder,Ne as default};
