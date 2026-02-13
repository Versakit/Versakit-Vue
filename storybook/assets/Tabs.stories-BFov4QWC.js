import{r}from"./vue-BO48nETd.js";import{d as K,c as L,a as e,b as s,u as n,o as M}from"./iframe-B5-jkiYn.js";const Q={class:"space-y-8 p-4"},R={class:"space-y-4"},X={class:"space-y-8"},Y=K({__name:"index",setup(Z){const a=[{label:"标签一",content:"标签一的内容区域。这是一个基础的标签页示例。"},{label:"标签二",content:"标签二的内容区域。您可以在这里放置任何内容。"},{label:"标签三",content:"标签三的内容区域。标签页是一种常用的导航组件。"}],J=[{label:"主页",content:"主页内容区域。这里通常放置概览信息。",icon:"home"},{label:"设置",content:"设置内容区域。这里可以放置各种配置选项。",icon:"settings"},{label:"用户",content:"用户内容区域。这里可以放置用户相关的信息。",icon:"user"}];return($,t)=>(M(),L("div",Q,[e("section",null,[t[0]||(t[0]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),s(n(r),{items:a})]),e("section",null,[t[1]||(t[1]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),s(n(r),{items:a,disabled:""})]),e("section",null,[t[2]||(t[2]=e("h2",{class:"text-xl font-bold mb-4"},"禁用特定标签",-1)),s(n(r),{items:[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容",disabled:!0},{label:"标签三",content:"标签三的内容"}]})]),e("section",null,[t[6]||(t[6]=e("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),e("div",R,[e("div",null,[t[3]||(t[3]=e("p",{class:"mb-2"},"小尺寸",-1)),s(n(r),{items:a,size:"sm"})]),e("div",null,[t[4]||(t[4]=e("p",{class:"mb-2"},"中等尺寸",-1)),s(n(r),{items:a,size:"md"})]),e("div",null,[t[5]||(t[5]=e("p",{class:"mb-2"},"大尺寸",-1)),s(n(r),{items:a,size:"lg"})])])]),e("section",null,[t[7]||(t[7]=e("h2",{class:"text-xl font-bold mb-4"},"块级元素",-1)),s(n(r),{items:a,block:""})]),e("section",null,[t[8]||(t[8]=e("h2",{class:"text-xl font-bold mb-4"},"带图标",-1)),s(n(r),{items:J})]),e("section",null,[t[9]||(t[9]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),s(n(r),{items:a,pt:{trigger:"text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700",panel:"p-4 border border-purple-200 rounded-md"}})]),e("section",null,[t[13]||(t[13]=e("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),e("div",X,[e("div",null,[t[10]||(t[10]=e("p",{class:"mb-2"},"卡片式标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",panel:"p-4 bg-white border border-gray-200 rounded-b-lg"}})]),e("div",null,[t[11]||(t[11]=e("p",{class:"mb-2"},"底部边框标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 text-gray-500 border-b-2 border-transparent hover:text-gray-700 data-[selected=true]:text-purple-600 data-[selected=true]:border-purple-600",panel:"p-4"}})]),e("div",null,[t[12]||(t[12]=e("p",{class:"mb-2"},"按钮式标签页",-1)),s(n(r),{items:a,unstyled:"",pt:{container:"flex flex-col",trigger:"px-4 py-2 m-1 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-green-500 data-[selected=true]:text-white",panel:"p-4 bg-white border-t border-gray-200"}})])])])]))}}),te={title:"组件/Tabs 标签页",component:r,tags:["autodocs"],argTypes:{items:{control:"object",description:"标签项数组",table:{type:{summary:"TabItem[]"}}},initialIndex:{control:"number",description:"初始选中的标签索引",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},size:{control:"select",options:["sm","md","lg"],description:"标签页尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"是否禁用全部标签",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},block:{control:"boolean",description:"是否为块级元素",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},o=[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容"},{label:"标签三",content:"标签三的内容"}],l={args:{items:o}},d={args:{items:o,disabled:!0}},m={args:{items:[{label:"标签一",content:"标签一的内容"},{label:"标签二",content:"标签二的内容",disabled:!0},{label:"标签三",content:"标签三的内容"}]}},i={args:{items:o,size:"lg"}},p={args:{items:o,block:!0}},c={args:{items:[{label:"主页",content:"主页内容",icon:"home"},{label:"设置",content:"设置内容",icon:"settings"},{label:"用户",content:"用户内容",icon:"user"}]}},u={args:{items:o,pt:{trigger:"text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700",panel:"p-4 border border-purple-200 rounded-md"}}},b={args:{items:o,unstyled:!0,pt:{container:"flex flex-col",trigger:"px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white",panel:"p-4 bg-white border border-gray-200 rounded-b-lg"}}},g={render:()=>({components:{TabsDemo:Y},template:"<TabsDemo />"})};var y,x,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,I,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    disabled: true
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,k,w;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,D,V;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'lg'
  }
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var B,h,E;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    block: true
  }
}`,...(E=(h=p.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var j,C,W;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var A,N,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    pt: {
      trigger: 'text-purple-700 hover:text-purple-900 border-b-2 border-transparent data-[selected=true]:border-purple-700',
      panel: 'p-4 border border-purple-200 rounded-md'
    }
  }
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var O,P,q;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    unstyled: true,
    pt: {
      container: 'flex flex-col',
      trigger: 'px-4 py-2 rounded-t-lg bg-gray-100 text-gray-600 hover:bg-gray-200 data-[selected=true]:bg-blue-500 data-[selected=true]:text-white',
      panel: 'p-4 bg-white border border-gray-200 rounded-b-lg'
    }
  }
}`,...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var F,G,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => ({
    components: {
      TabsDemo
    },
    template: '<TabsDemo />'
  })
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const re=["Basic","Disabled","DisabledTab","Sizes","Block","WithIcons","CustomStyle","Unstyled","AllExamples"];export{g as AllExamples,l as Basic,p as Block,u as CustomStyle,d as Disabled,m as DisabledTab,i as Sizes,b as Unstyled,c as WithIcons,re as __namedExportsOrder,te as default};
