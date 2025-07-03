import{G as a}from"./vue-AoBS8RUS.js";import{d as $,r as o,c as ee,a as e,b as t,u as r,t as n,o as se}from"./iframe-BX3ieGlO.js";const le={class:"space-y-8 p-4"},ae={class:"max-w-sm"},oe={class:"mt-2"},te={class:"max-w-sm"},re={class:"mt-2"},ne={class:"max-w-sm"},me={class:"mt-2"},de={class:"max-w-sm"},ue={class:"mt-2"},ie={class:"flex flex-wrap gap-8"},ce={class:"max-w-sm"},pe={class:"max-w-sm"},be={class:"max-w-sm"},ve={class:"mt-2"},ye={class:"max-w-sm"},Ve={class:"mt-2"},ge=$({__name:"index",setup(fe){const V=o("12:30"),g=o("09:00"),f=o("02:30 PM"),x=o("09:00"),T=["09:00","12:00","15:00","18:00"],C=o("12:30"),w=o("12:30"),h=o("12:30"),S=o("");return(xe,s)=>(se(),ee("div",le,[e("section",null,[s[8]||(s[8]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",ae,[t(r(a),{modelValue:V.value,"onUpdate:modelValue":s[0]||(s[0]=l=>V.value=l)},null,8,["modelValue"])]),e("div",oe,"当前选择的时间: "+n(V.value||"未选择"),1)]),e("section",null,[s[10]||(s[10]=e("h2",{class:"text-xl font-bold mb-4"},"自定义时间范围和步长",-1)),e("div",te,[t(r(a),{modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=l=>g.value=l),start:"09:00",end:"18:00",step:15},null,8,["modelValue"])]),e("div",re,[e("div",null,"当前选择的时间: "+n(g.value||"未选择"),1),s[9]||(s[9]=e("div",null,"时间范围: 09:00 至 18:00，步长: 15分钟",-1))])]),e("section",null,[s[11]||(s[11]=e("h2",{class:"text-xl font-bold mb-4"},"12小时制",-1)),e("div",ne,[t(r(a),{modelValue:f.value,"onUpdate:modelValue":s[2]||(s[2]=l=>f.value=l),format:"12h"},null,8,["modelValue"])]),e("div",me,"当前选择的时间: "+n(f.value||"未选择"),1)]),e("section",null,[s[12]||(s[12]=e("h2",{class:"text-xl font-bold mb-4"},"自定义选项",-1)),e("div",de,[t(r(a),{modelValue:x.value,"onUpdate:modelValue":s[3]||(s[3]=l=>x.value=l),options:T},null,8,["modelValue"])]),e("div",ue,[e("div",null,"当前选择的时间: "+n(x.value||"未选择"),1),e("div",null,"自定义选项: "+n(T.join(", ")),1)])]),e("section",null,[s[15]||(s[15]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",ie,[e("div",null,[e("div",ce,[t(r(a),{modelValue:C.value,"onUpdate:modelValue":s[4]||(s[4]=l=>C.value=l),disabled:""},null,8,["modelValue"])]),s[13]||(s[13]=e("div",{class:"mt-2"},"禁用状态",-1))]),e("div",null,[e("div",pe,[t(r(a),{modelValue:w.value,"onUpdate:modelValue":s[5]||(s[5]=l=>w.value=l),readonly:""},null,8,["modelValue"])]),s[14]||(s[14]=e("div",{class:"mt-2"},"只读状态",-1))])])]),e("section",null,[s[16]||(s[16]=e("h2",{class:"text-xl font-bold mb-4"},"不可清空",-1)),e("div",be,[t(r(a),{modelValue:h.value,"onUpdate:modelValue":s[6]||(s[6]=l=>h.value=l),clearable:!1},null,8,["modelValue"])]),e("div",ve,[e("div",null,"当前选择的时间: "+n(h.value||"未选择"),1)])]),e("section",null,[s[17]||(s[17]=e("h2",{class:"text-xl font-bold mb-4"},"自定义占位文本",-1)),e("div",ye,[t(r(a),{modelValue:S.value,"onUpdate:modelValue":s[7]||(s[7]=l=>S.value=l),placeholder:"请选择预约时间"},null,8,["modelValue"])]),e("div",Ve,[e("div",null,"当前选择的时间: "+n(S.value||"未选择"),1)])])]))}}),Te={title:"组件/TimeSelect 时间选择",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"绑定值，选中的时间",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:"选择时间"}}},options:{control:"object",description:"可选时间选项列表",table:{type:{summary:"string[]"}}},start:{control:"text",description:"开始时间，格式为 HH:mm",table:{type:{summary:"string"},defaultValue:{summary:"00:00"}}},end:{control:"text",description:"结束时间，格式为 HH:mm",table:{type:{summary:"string"},defaultValue:{summary:"23:59"}}},step:{control:"number",description:"时间间隔，单位为分钟",table:{type:{summary:"number"},defaultValue:{summary:"30"}}},format:{control:"select",options:["12h","24h"],description:"时间格式",table:{type:{summary:"'12h' | '24h'"},defaultValue:{summary:"24h"}}},clearable:{control:"boolean",description:"是否可清空",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式配置",table:{type:{summary:"TimeSelectPT"},defaultValue:{summary:"{}"}}}}},m={args:{placeholder:"请选择时间"}},d={args:{start:"09:00",end:"18:00",step:15,placeholder:"工作时间选择（15分钟间隔）"}},u={args:{format:"12h",placeholder:"请选择时间（12小时制）"}},i={args:{options:["09:00","12:00","15:00","18:00"],placeholder:"选择预定义时间"}},c={args:{disabled:!0,placeholder:"禁用状态"}},p={args:{readonly:!0,modelValue:"12:30"}},b={args:{clearable:!1,placeholder:"不可清空"}},v={args:{placeholder:"请选择预约时间"}},y={render:()=>({components:{TimeSelectDemo:ge},template:"<TimeSelectDemo />"})};var U,D,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择时间'
  }
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var B,O,R;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    start: '09:00',
    end: '18:00',
    step: 15,
    placeholder: '工作时间选择（15分钟间隔）'
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var E,H,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    format: '12h',
    placeholder: '请选择时间（12小时制）'
  }
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var P,j,k;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options: ['09:00', '12:00', '15:00', '18:00'],
    placeholder: '选择预定义时间'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,F,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var M,q,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '12:30'
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var I,J,K;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    clearable: false,
    placeholder: '不可清空'
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,W;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择预约时间'
  }
}`,...(W=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TimeSelectDemo
    },
    template: '<TimeSelectDemo />'
  })
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ce=["Basic","CustomRange","Format12h","CustomOptions","Disabled","Readonly","NonClearable","CustomPlaceholder","AllExamples"];export{y as AllExamples,m as Basic,i as CustomOptions,v as CustomPlaceholder,d as CustomRange,c as Disabled,u as Format12h,b as NonClearable,p as Readonly,Ce as __namedExportsOrder,Te as default};
