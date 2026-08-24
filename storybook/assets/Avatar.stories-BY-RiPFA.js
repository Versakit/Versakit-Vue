import{$ as e}from"./vue-B_9GhRaC.js";import{d as c,c as g,a as r,b as t,u as a,o as b}from"./iframe-BywGPS4Q.js";const f={class:"space-y-8 p-4"},j={class:"flex items-center gap-4"},y={class:"flex items-center gap-4"},v={class:"flex items-center gap-4"},x={class:"flex items-center gap-4"},h={class:"flex items-center gap-4"},w={class:"flex items-center gap-4"},S=c({__name:"index",setup(k){return(z,s)=>(b(),g("div",f,[r("section",null,[s[0]||(s[0]=r("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/1.jpg",alt:"用户头像"})]),r("section",null,[s[6]||(s[6]=r("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),r("div",j,[r("div",null,[s[1]||(s[1]=r("p",{class:"mb-2"},"超小尺寸",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"xs"})]),r("div",null,[s[2]||(s[2]=r("p",{class:"mb-2"},"小尺寸",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"sm"})]),r("div",null,[s[3]||(s[3]=r("p",{class:"mb-2"},"中等尺寸",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"md"})]),r("div",null,[s[4]||(s[4]=r("p",{class:"mb-2"},"大尺寸",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"lg"})]),r("div",null,[s[5]||(s[5]=r("p",{class:"mb-2"},"超大尺寸",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"xl"})])])]),r("section",null,[s[9]||(s[9]=r("h2",{class:"text-xl font-bold mb-4"},"不同形状",-1)),r("div",y,[r("div",null,[s[7]||(s[7]=r("p",{class:"mb-2"},"圆形",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/women/3.jpg",shape:"circle"})]),r("div",null,[s[8]||(s[8]=r("p",{class:"mb-2"},"方形",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/women/3.jpg",shape:"square"})])])]),r("section",null,[s[14]||(s[14]=r("h2",{class:"text-xl font-bold mb-4"},"带状态",-1)),r("div",v,[r("div",null,[s[10]||(s[10]=r("p",{class:"mb-2"},"在线",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/4.jpg",status:"online"})]),r("div",null,[s[11]||(s[11]=r("p",{class:"mb-2"},"离线",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/4.jpg",status:"offline"})]),r("div",null,[s[12]||(s[12]=r("p",{class:"mb-2"},"离开",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/4.jpg",status:"away"})]),r("div",null,[s[13]||(s[13]=r("p",{class:"mb-2"},"忙碌",-1)),t(a(e),{src:"https://randomuser.me/api/portraits/men/4.jpg",status:"busy"})])])]),r("section",null,[s[15]||(s[15]=r("h2",{class:"text-xl font-bold mb-4"},"加载失败时的文本",-1)),r("div",x,[t(a(e),{src:"invalid-image-url.jpg",fallback:"JD"}),t(a(e),{src:"invalid-image-url.jpg",fallback:"ZS"}),t(a(e),{src:"invalid-image-url.jpg",fallback:"WW"})])]),r("section",null,[s[16]||(s[16]=r("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),r("div",h,[t(a(e),{src:"https://randomuser.me/api/portraits/women/5.jpg",pt:{root:"border-2 border-purple-500",image:"grayscale"}}),t(a(e),{src:"https://randomuser.me/api/portraits/women/6.jpg",pt:{root:"border-2 border-green-500 shadow-lg"}}),t(a(e),{src:"invalid-image-url.jpg",fallback:"PT",pt:{fallback:"bg-purple-500 text-white"}})])]),r("section",null,[s[17]||(s[17]=r("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),r("div",w,[t(a(e),{src:"https://randomuser.me/api/portraits/men/6.jpg",unstyled:"",pt:{root:"w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500",image:"w-full h-full object-cover"}}),t(a(e),{src:"https://randomuser.me/api/portraits/men/7.jpg",unstyled:"",pt:{root:"w-16 h-16 rounded-md overflow-hidden shadow-lg",image:"w-full h-full object-cover"}}),t(a(e),{src:"invalid-image-url.jpg",fallback:"VS",unstyled:"",pt:{root:"w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center",fallback:"text-white text-xl font-bold"}})])])]))}}),D={title:"组件/Avatar 头像",component:e,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"头像尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},src:{control:"text",description:"图片地址",table:{type:{summary:"string"}}},alt:{control:"text",description:"图片描述",table:{type:{summary:"string"}}},fallback:{control:"text",description:"加载失败时显示的文本",table:{type:{summary:"string"}}},shape:{control:"select",options:["circle","square"],description:"头像形状",table:{type:{summary:"string"},defaultValue:{summary:"circle"}}},status:{control:"select",options:["online","offline","away","busy","none"],description:"在线状态",table:{type:{summary:"string"},defaultValue:{summary:"none"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},o={args:{src:"https://randomuser.me/api/portraits/men/1.jpg",alt:"用户头像"}},n={args:{src:"https://randomuser.me/api/portraits/men/2.jpg",size:"lg"}},l={args:{src:"https://randomuser.me/api/portraits/women/3.jpg",shape:"square"}},p={args:{src:"https://randomuser.me/api/portraits/men/4.jpg",status:"online"}},m={args:{src:"invalid-image-url.jpg",fallback:"JD"}},i={args:{src:"https://randomuser.me/api/portraits/women/5.jpg",pt:{root:"border-2 border-purple-500",image:"grayscale"}}},d={args:{src:"https://randomuser.me/api/portraits/men/6.jpg",unstyled:!0,pt:{root:"w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500",image:"w-full h-full object-cover"}}},u={render:()=>({components:{AvatarDemo:S},template:"<AvatarDemo />"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/men/1.jpg',
    alt: '用户头像'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/men/2.jpg',
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/3.jpg',
    shape: 'square'
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/men/4.jpg',
    status: 'online'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'invalid-image-url.jpg',
    fallback: 'JD'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/women/5.jpg',
    pt: {
      root: 'border-2 border-purple-500',
      image: 'grayscale'
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://randomuser.me/api/portraits/men/6.jpg',
    unstyled: true,
    pt: {
      root: 'w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500',
      image: 'w-full h-full object-cover'
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AvatarDemo
    },
    template: '<AvatarDemo />'
  })
}`,...u.parameters?.docs?.source}}};const W=["Basic","Sizes","Shapes","WithStatus","WithFallback","CustomStyle","Unstyled","AllExamples"];export{u as AllExamples,o as Basic,i as CustomStyle,l as Shapes,n as Sizes,d as Unstyled,m as WithFallback,p as WithStatus,W as __namedExportsOrder,D as default};
