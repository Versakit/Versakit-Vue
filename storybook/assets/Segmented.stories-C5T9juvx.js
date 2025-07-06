import{I as t}from"./vue-xwPymK6m.js";import{d as R,r as g,c as W,a as l,b as n,u as s,o as X}from"./iframe-4DWW7wU9.js";const Y={class:"space-y-8 p-4"},Z={class:"space-y-4"},$={class:"space-y-4"},h=R({__name:"index",setup(_){const a=g("daily"),V=g("list"),v=g("list");return(ee,e)=>(X(),W("div",Y,[l("section",null,[e[12]||(e[12]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),options:["daily","weekly","monthly"]},null,8,["modelValue"])]),l("section",null,[e[13]||(e[13]=l("h2",{class:"text-xl font-bold mb-4"},"对象选项",-1)),n(s(t),{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=o=>V.value=o),options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历"}]},null,8,["modelValue"])]),l("section",null,[e[14]||(e[14]=l("h2",{class:"text-xl font-bold mb-4"},"禁用选项",-1)),n(s(t),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=o=>v.value=o),options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历",disabled:!0}]},null,8,["modelValue"])]),l("section",null,[e[18]||(e[18]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",Z,[l("div",null,[e[15]||(e[15]=l("p",{class:"mb-2"},"小尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),options:["daily","weekly","monthly"],size:"sm"},null,8,["modelValue"])]),l("div",null,[e[16]||(e[16]=l("p",{class:"mb-2"},"中等尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value=o),options:["daily","weekly","monthly"],size:"md"},null,8,["modelValue"])]),l("div",null,[e[17]||(e[17]=l("p",{class:"mb-2"},"大尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value=o),options:["daily","weekly","monthly"],size:"lg"},null,8,["modelValue"])])])]),l("section",null,[e[19]||(e[19]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value=o),options:["daily","weekly","monthly"],disabled:""},null,8,["modelValue"])]),l("section",null,[e[20]||(e[20]=l("h2",{class:"text-xl font-bold mb-4"},"块级元素",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value=o),options:["daily","weekly","monthly"],block:""},null,8,["modelValue"])]),l("section",null,[e[21]||(e[21]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=o=>a.value=o),options:["daily","weekly","monthly"],pt:{container:"bg-purple-100 rounded-lg p-1",option:"text-purple-700 hover:bg-purple-200"}},null,8,["modelValue"])]),l("section",null,[e[25]||(e[25]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",$,[l("div",null,[e[22]||(e[22]=l("p",{class:"mb-2"},"圆形样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex rounded-full bg-gray-100 p-1",option:"flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white"}},null,8,["modelValue"])]),l("div",null,[e[23]||(e[23]=l("p",{class:"mb-2"},"底部边框样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[10]||(e[10]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex border-b border-gray-200",option:"px-4 py-2 text-center border-b-2 border-transparent transition-colors cursor-pointer data-[selected=true]:border-blue-500 data-[selected=true]:text-blue-500"}},null,8,["modelValue"])]),l("div",null,[e[24]||(e[24]=l("p",{class:"mb-2"},"按钮组样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex",option:"px-4 py-2 border border-gray-300 first:rounded-l-md last:rounded-r-md -ml-px first:ml-0 bg-white transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white data-[selected=true]:border-blue-500 hover:z-10"}},null,8,["modelValue"])])])])]))}}),ae={title:"组件/Segmented 分段控制器",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"当前选中的值",table:{type:{summary:"string | number"}}},options:{control:"object",description:"选项数组",table:{type:{summary:"Array<string | number | { value: string | number; label: string; disabled?: boolean }>"}}},size:{control:"select",options:["sm","md","lg"],description:"控制器尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},block:{control:"boolean",description:"是否为块级元素",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},r={args:{modelValue:"daily",options:["daily","weekly","monthly"]}},d={args:{modelValue:"list",options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历"}]}},u={args:{modelValue:"list",options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历",disabled:!0}]}},i={args:{modelValue:"daily",options:["daily","weekly","monthly"],size:"lg"}},m={args:{modelValue:"daily",options:["daily","weekly","monthly"],disabled:!0}},p={args:{modelValue:"daily",options:["daily","weekly","monthly"],block:!0}},y={args:{modelValue:"daily",options:["daily","weekly","monthly"],pt:{container:"bg-purple-100 rounded-lg p-1",option:"text-purple-700 hover:bg-purple-200"}}},b={args:{modelValue:"daily",options:["daily","weekly","monthly"],unstyled:!0,pt:{container:"flex rounded-full bg-gray-100 p-1",option:"flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white"}}},c={render:()=>({components:{SegmentedDemo:h},template:"<SegmentedDemo />"})};var x,f,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly']
  }
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var w,S,U;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    modelValue: 'list',
    options: [{
      value: 'list',
      label: '列表'
    }, {
      value: 'kanban',
      label: '看板'
    }, {
      value: 'calendar',
      label: '日历'
    }]
  }
}`,...(U=(S=d.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var z,D,B;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    modelValue: 'list',
    options: [{
      value: 'list',
      label: '列表'
    }, {
      value: 'kanban',
      label: '看板'
    }, {
      value: 'calendar',
      label: '日历',
      disabled: true
    }]
  }
}`,...(B=(D=u.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var O,j,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    size: 'lg'
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var A,C,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    disabled: true
  }
}`,...(I=(C=m.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var N,T,P;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    block: true
  }
}`,...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var q,F,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    pt: {
      container: 'bg-purple-100 rounded-lg p-1',
      option: 'text-purple-700 hover:bg-purple-200'
    }
  }
}`,...(G=(F=y.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    unstyled: true,
    pt: {
      container: 'flex rounded-full bg-gray-100 p-1',
      option: 'flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white'
    }
  }
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,M,Q;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SegmentedDemo
    },
    template: '<SegmentedDemo />'
  })
}`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};const te=["Basic","ObjectOptions","DisabledOption","Sizes","Disabled","Block","CustomStyle","Unstyled","AllExamples"];export{c as AllExamples,r as Basic,p as Block,y as CustomStyle,m as Disabled,u as DisabledOption,d as ObjectOptions,i as Sizes,b as Unstyled,te as __namedExportsOrder,ae as default};
