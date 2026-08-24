import{q as r}from"./vue-B_9GhRaC.js";import{d as x,c as f,a as e,b as s,u as n,o as v}from"./iframe-BywGPS4Q.js";const I={class:"space-y-8 p-4"},S={class:"space-y-4"},T={class:"space-y-8"},k=x({__name:"index",setup(w){const a=[{label:"标签一",content:"标签一的内容区域。这是一个基础的标签页示例。"},{label:"标签二",content:"标签二的内容区域。您可以在这里放置任何内容。"},{label:"标签三",content:"标签三的内容区域。标签页是一种常用的导航组件。"}],y=[{label:"主页",content:"主页内容区域。这里通常放置概览信息。",icon:"home"},{label:"设置",content:"设置内容区域。这里可以放置各种配置选项。",icon:"settings"},{label:"用户",content:"用户内容区域。这里可以放置用户相关的信息。",icon:"user"}];return(z,t)=>(v(),f("div",I,[e("section",null,[t[0]||(t[0]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),s(n(r),{items:a})]),e("section",null,[t[1]||(t[1]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),s(n(r),{items:a,disabled:""})]),e("section",null,[t[2]||(t[2]=e("h2",{class:"text-xl font-bold mb-4"},"禁用特定标签",-1)),s(n(r),{items:[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容",disabled:!0},{label:"标签三",content:"标签三的内容"}]})]),e("section",null,[t[6]||(t[6]=e("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),e("div",S,[e("div",null,[t[3]||(t[3]=e("p",{class:"mb-2"},"小尺寸",-1)),s(n(r),{items:a,size:"sm"})]),e("div",null,[t[4]||(t[4]=e("p",{class:"mb-2"},"中等尺寸",-1)),s(n(r),{items:a,size:"md"})]),e("div",null,[t[5]||(t[5]=e("p",{class:"mb-2"},"大尺寸",-1)),s(n(r),{items:a,size:"lg"})])])]),e("section",null,[t[7]||(t[7]=e("h2",{class:"text-xl font-bold mb-4"},"块级元素",-1)),s(n(r),{items:a,block:""})]),e("section",null,[t[8]||(t[8]=e("h2",{class:"text-xl font-bold mb-4"},"带图标",-1)),s(n(r),{items:y})]),e("section",null,[t[9]||(t[9]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),s(n(r),{items:a,pt:{trigger:"text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700",panel:"p-4 border border-purple-200 rounded-md"}})]),e("section",null,[t[13]||(t[13]=e("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),e("div",T,[e("div",null,[t[10]||(t[10]=e("p",{class:"mb-2"},"卡片式标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",panel:"p-4 bg-white border border-gray-200 rounded-b-lg"}})]),e("div",null,[t[11]||(t[11]=e("p",{class:"mb-2"},"底部边框标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-gray-700 data-[selected=true]:text-purple-600 data-[selected=true]:border-purple-600",panel:"p-4"}})]),e("div",null,[t[12]||(t[12]=e("p",{class:"mb-2"},"按钮式标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 m-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-green-500 data-[selected=true]:text-white",panel:"p-4 bg-white border-t border-gray-200"}})])])])]))}}),B={title:"组件/Tabs 标签页",component:r,tags:["autodocs"],argTypes:{items:{control:"object",description:"标签项数组",table:{type:{summary:"TabItem[]"}}},initialIndex:{control:"number",description:"初始选中的标签索引",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},size:{control:"select",options:["sm","md","lg"],description:"标签页尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"是否禁用全部标签",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},block:{control:"boolean",description:"是否为块级元素",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},o=[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容"},{label:"标签三",content:"标签三的内容"}],l={args:{items:o}},d={args:{items:o,disabled:!0}},m={args:{items:[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容",disabled:!0},{label:"标签三",content:"标签三的内容"}]}},i={args:{items:o,size:"lg"}},p={args:{items:o,block:!0}},c={args:{items:[{label:"主页",content:"主页内容",icon:"home"},{label:"设置",content:"设置内容",icon:"settings"},{label:"用户",content:"用户内容",icon:"user"}]}},u={args:{items:o,pt:{trigger:"text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700",panel:"p-4 border border-purple-200 rounded-md"}}},b={args:{items:o,unstyled:!0,pt:{container:"flex flex-col",trigger:"px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",panel:"p-4 bg-white border border-gray-200 rounded-b-lg"}}},g={render:()=>({components:{TabsDemo:k},template:"<TabsDemo />"})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '标签一',
      content: '标签一的内容'
    }, {
      label: '标签二',
      content: '标签二的内容',
      disabled: true
    }, {
      label: '标签三',
      content: '标签三的内容'
    }]
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'lg'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    block: true
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '主页',
      content: '主页内容',
      icon: 'home'
    }, {
      label: '设置',
      content: '设置内容',
      icon: 'settings'
    }, {
      label: '用户',
      content: '用户内容',
      icon: 'user'
    }]
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    pt: {
      trigger: 'text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700',
      panel: 'p-4 border border-purple-200 rounded-md'
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    unstyled: true,
    pt: {
      container: 'flex flex-col',
      trigger: 'px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
      panel: 'p-4 bg-white border border-gray-200 rounded-b-lg'
    }
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TabsDemo
    },
    template: '<TabsDemo />'
  })
}`,...g.parameters?.docs?.source}}};const h=["Basic","Disabled","DisabledTab","Sizes","Block","WithIcons","CustomStyle","Unstyled","AllExamples"];export{g as AllExamples,l as Basic,p as Block,u as CustomStyle,d as Disabled,m as DisabledTab,i as Sizes,b as Unstyled,c as WithIcons,h as __namedExportsOrder,B as default};
