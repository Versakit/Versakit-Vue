import{j as t}from"./vue-B_9GhRaC.js";import{d as x,r as g,c as f,a as l,b as n,u as s,o as k}from"./iframe-BywGPS4Q.js";const w={class:"space-y-8 p-4"},S={class:"space-y-4"},U={class:"space-y-4"},z=x({__name:"index",setup(D){const a=g("daily"),V=g("list"),v=g("list");return(B,e)=>(k(),f("div",w,[l("section",null,[e[12]||(e[12]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),options:["daily","weekly","monthly"]},null,8,["modelValue"])]),l("section",null,[e[13]||(e[13]=l("h2",{class:"text-xl font-bold mb-4"},"对象选项",-1)),n(s(t),{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=o=>V.value=o),options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历"}]},null,8,["modelValue"])]),l("section",null,[e[14]||(e[14]=l("h2",{class:"text-xl font-bold mb-4"},"禁用选项",-1)),n(s(t),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=o=>v.value=o),options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历",disabled:!0}]},null,8,["modelValue"])]),l("section",null,[e[18]||(e[18]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",S,[l("div",null,[e[15]||(e[15]=l("p",{class:"mb-2"},"小尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value=o),options:["daily","weekly","monthly"],size:"sm"},null,8,["modelValue"])]),l("div",null,[e[16]||(e[16]=l("p",{class:"mb-2"},"中等尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=o=>a.value=o),options:["daily","weekly","monthly"],size:"md"},null,8,["modelValue"])]),l("div",null,[e[17]||(e[17]=l("p",{class:"mb-2"},"大尺寸",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=o=>a.value=o),options:["daily","weekly","monthly"],size:"lg"},null,8,["modelValue"])])])]),l("section",null,[e[19]||(e[19]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=o=>a.value=o),options:["daily","weekly","monthly"],disabled:""},null,8,["modelValue"])]),l("section",null,[e[20]||(e[20]=l("h2",{class:"text-xl font-bold mb-4"},"块级元素",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value=o),options:["daily","weekly","monthly"],block:""},null,8,["modelValue"])]),l("section",null,[e[21]||(e[21]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=o=>a.value=o),options:["daily","weekly","monthly"],pt:{container:"bg-purple-100 rounded-lg p-1",option:"text-purple-700 hover:bg-purple-200"}},null,8,["modelValue"])]),l("section",null,[e[25]||(e[25]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",U,[l("div",null,[e[22]||(e[22]=l("p",{class:"mb-2"},"圆形样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex rounded-full bg-gray-100 p-1",option:"flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white"}},null,8,["modelValue"])]),l("div",null,[e[23]||(e[23]=l("p",{class:"mb-2"},"底部边框样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[10]||(e[10]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex border-b border-gray-200",option:"px-4 py-2 text-center border-b-2 border-transparent transition-colors cursor-pointer data-[selected=true]:border-blue-500 data-[selected=true]:text-blue-500"}},null,8,["modelValue"])]),l("div",null,[e[24]||(e[24]=l("p",{class:"mb-2"},"按钮组样式",-1)),n(s(t),{modelValue:a.value,"onUpdate:modelValue":e[11]||(e[11]=o=>a.value=o),options:["daily","weekly","monthly"],unstyled:"",pt:{container:"flex",option:"px-4 py-2 border border-gray-300 first:rounded-l-md last:rounded-r-md -ml-px first:ml-0 bg-white transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white data-[selected=true]:border-blue-500 hover:z-10"}},null,8,["modelValue"])])])])]))}}),E={title:"组件/Segmented 分段控制器",component:t,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"当前选中的值",table:{type:{summary:"string | number"}}},options:{control:"object",description:"选项数组",table:{type:{summary:"Array<string | number | { value: string | number; label: string; disabled?: boolean }>"}}},size:{control:"select",options:["sm","md","lg"],description:"控制器尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},block:{control:"boolean",description:"是否为块级元素",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},r={args:{modelValue:"daily",options:["daily","weekly","monthly"]}},d={args:{modelValue:"list",options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历"}]}},u={args:{modelValue:"list",options:[{value:"list",label:"列表"},{value:"kanban",label:"看板"},{value:"calendar",label:"日历",disabled:!0}]}},i={args:{modelValue:"daily",options:["daily","weekly","monthly"],size:"lg"}},m={args:{modelValue:"daily",options:["daily","weekly","monthly"],disabled:!0}},p={args:{modelValue:"daily",options:["daily","weekly","monthly"],block:!0}},y={args:{modelValue:"daily",options:["daily","weekly","monthly"],pt:{container:"bg-purple-100 rounded-lg p-1",option:"text-purple-700 hover:bg-purple-200"}}},b={args:{modelValue:"daily",options:["daily","weekly","monthly"],unstyled:!0,pt:{container:"flex rounded-full bg-gray-100 p-1",option:"flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white"}}},c={render:()=>({components:{SegmentedDemo:z},template:"<SegmentedDemo />"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly']
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    block: true
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    pt: {
      container: 'bg-purple-100 rounded-lg p-1',
      option: 'text-purple-700 hover:bg-purple-200'
    }
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: 'daily',
    options: ['daily', 'weekly', 'monthly'],
    unstyled: true,
    pt: {
      container: 'flex rounded-full bg-gray-100 p-1',
      option: 'flex-1 text-center py-2 px-4 rounded-full transition-colors cursor-pointer data-[selected=true]:bg-blue-500 data-[selected=true]:text-white'
    }
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SegmentedDemo
    },
    template: '<SegmentedDemo />'
  })
}`,...c.parameters?.docs?.source}}};const A=["Basic","ObjectOptions","DisabledOption","Sizes","Disabled","Block","CustomStyle","Unstyled","AllExamples"];export{c as AllExamples,r as Basic,p as Block,y as CustomStyle,m as Disabled,u as DisabledOption,d as ObjectOptions,i as Sizes,b as Unstyled,A as __namedExportsOrder,E as default};
