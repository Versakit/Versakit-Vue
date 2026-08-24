import{r as s}from"./vue-B_9GhRaC.js";import{d as h,c as g,a as t,b as o,w as r,u as n,o as b,e as a}from"./iframe-BywGPS4Q.js";const y={class:"space-y-8 p-4"},v={class:"flex flex-wrap gap-6"},w={class:"flex items-center gap-6"},_={class:"flex gap-6"},k={class:"flex gap-6"},S={class:"flex gap-6"},V={class:"flex flex-col gap-4"},z={class:"flex gap-6"},B=h({__name:"index",setup(C){return(D,e)=>(b(),g("div",y,[t("section",null,[e[7]||(e[7]=t("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),t("div",v,[o(n(s),{href:"https://example.com"},{default:r(()=>e[0]||(e[0]=[a("默认链接")])),_:1,__:[0]}),o(n(s),{href:"https://example.com",variant:"primary"},{default:r(()=>e[1]||(e[1]=[a("主要链接")])),_:1,__:[1]}),o(n(s),{href:"https://example.com",variant:"secondary"},{default:r(()=>e[2]||(e[2]=[a("次要链接")])),_:1,__:[2]}),o(n(s),{href:"https://example.com",variant:"success"},{default:r(()=>e[3]||(e[3]=[a("成功链接")])),_:1,__:[3]}),o(n(s),{href:"https://example.com",variant:"danger"},{default:r(()=>e[4]||(e[4]=[a("危险链接")])),_:1,__:[4]}),o(n(s),{href:"https://example.com",variant:"warning"},{default:r(()=>e[5]||(e[5]=[a("警告链接")])),_:1,__:[5]}),o(n(s),{href:"https://example.com",variant:"info"},{default:r(()=>e[6]||(e[6]=[a("信息链接")])),_:1,__:[6]})])]),t("section",null,[e[11]||(e[11]=t("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),t("div",w,[o(n(s),{href:"https://example.com",size:"sm"},{default:r(()=>e[8]||(e[8]=[a("小尺寸链接")])),_:1,__:[8]}),o(n(s),{href:"https://example.com",size:"md"},{default:r(()=>e[9]||(e[9]=[a("中等尺寸链接")])),_:1,__:[9]}),o(n(s),{href:"https://example.com",size:"lg"},{default:r(()=>e[10]||(e[10]=[a("大尺寸链接")])),_:1,__:[10]})])]),t("section",null,[e[14]||(e[14]=t("h2",{class:"text-xl font-bold mb-4"},"带下划线",-1)),t("div",_,[o(n(s),{href:"https://example.com",underline:""},{default:r(()=>e[12]||(e[12]=[a("默认下划线链接")])),_:1,__:[12]}),o(n(s),{href:"https://example.com",variant:"primary",underline:""},{default:r(()=>e[13]||(e[13]=[a(" 主要下划线链接 ")])),_:1,__:[13]})])]),t("section",null,[e[17]||(e[17]=t("h2",{class:"text-xl font-bold mb-4"},"外部链接",-1)),t("div",k,[o(n(s),{href:"https://example.com",external:""},{default:r(()=>e[15]||(e[15]=[a(" 外部链接（自动添加图标） ")])),_:1,__:[15]}),o(n(s),{href:"https://example.com",external:"",variant:"primary"},{default:r(()=>e[16]||(e[16]=[a(" 外部主要链接 ")])),_:1,__:[16]})])]),t("section",null,[e[20]||(e[20]=t("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),t("div",S,[o(n(s),{href:"https://example.com",disabled:""},{default:r(()=>e[18]||(e[18]=[a("禁用链接")])),_:1,__:[18]}),o(n(s),{href:"https://example.com",variant:"primary",disabled:""},{default:r(()=>e[19]||(e[19]=[a(" 禁用主要链接 ")])),_:1,__:[19]})])]),t("section",null,[e[25]||(e[25]=t("h2",{class:"text-xl font-bold mb-4"},"带图标",-1)),t("div",V,[t("div",null,[o(n(s),{href:"https://example.com",iconPosition:"left"},{"icon-left":r(()=>e[21]||(e[21]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M15 18l-6-6 6-6"})],-1)])),default:r(()=>[e[22]||(e[22]=a(" 左侧图标 "))]),_:1,__:[22]})]),t("div",null,[o(n(s),{href:"https://example.com",variant:"primary",iconPosition:"right"},{"icon-right":r(()=>e[23]||(e[23]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{d:"M9 18l6-6-6-6"})],-1)])),default:r(()=>[e[24]||(e[24]=a(" 右侧图标 "))]),_:1,__:[24]})])])]),t("section",null,[e[28]||(e[28]=t("h2",{class:"text-xl font-bold mb-4"},"自定义样式",-1)),t("div",z,[o(n(s),{href:"https://example.com",pt:{root:"text-purple-500 hover:text-purple-700 font-bold"}},{default:r(()=>e[26]||(e[26]=[a(" 自定义颜色和字重 ")])),_:1,__:[26]}),o(n(s),{href:"https://example.com",unstyled:"",pt:{root:"bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"}},{default:r(()=>e[27]||(e[27]=[a(" 完全自定义样式 ")])),_:1,__:[27]})])])]))}}),j={title:"组件/Link 链接",component:s,tags:["autodocs"],argTypes:{href:{control:"text",description:"链接的目标地址",table:{type:{summary:"string"}}},variant:{control:"select",options:["default","primary","secondary","success","danger","warning","info"],description:"链接的变体样式",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["sm","md","lg"],description:"链接的尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},external:{control:"boolean",description:"是否在新标签页中打开链接",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},underline:{control:"boolean",description:"是否显示下划线",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"是否禁用链接",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},iconPosition:{control:"select",options:["left","right"],description:"链接的图标位置",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},l={args:{href:"https://example.com",children:"基础链接"}},p={args:{href:"https://example.com",variant:"primary",children:"主要链接"}},i={args:{href:"https://example.com",size:"lg",children:"大尺寸链接"}},m={args:{href:"https://example.com",underline:!0,children:"带下划线链接"}},d={args:{href:"https://example.com",external:!0,children:"外部链接"}},u={args:{href:"https://example.com",disabled:!0,children:"禁用链接"}},f={args:{href:"https://example.com",pt:{root:"text-purple-500 hover:text-purple-700 font-bold"},children:"自定义样式链接"}},x={args:{href:"https://example.com",unstyled:!0,pt:{root:"bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow"},children:"完全自定义样式"}},c={render:()=>({components:{LinkDemo:B},template:"<LinkDemo />"})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    children: '基础链接'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    variant: 'primary',
    children: '主要链接'
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    size: 'lg',
    children: '大尺寸链接'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    underline: true,
    children: '带下划线链接'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    external: true,
    children: '外部链接'
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    disabled: true,
    children: '禁用链接'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    pt: {
      root: 'text-purple-500 hover:text-purple-700 font-bold'
    },
    children: '自定义样式链接'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow'
    },
    children: '完全自定义样式'
  }
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkDemo
    },
    template: '<LinkDemo />'
  })
}`,...c.parameters?.docs?.source}}};const U=["Basic","Variants","Sizes","Underlined","External","Disabled","CustomStyle","Unstyled","AllExamples"];export{c as AllExamples,l as Basic,f as CustomStyle,u as Disabled,d as External,i as Sizes,m as Underlined,x as Unstyled,p as Variants,U as __namedExportsOrder,j as default};
