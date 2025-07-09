import{t}from"./index.esm-CUnOfAxt.js";/* empty css            */import{d as G,c as H,a as s,b as e,u as r,o as J}from"./iframe-D3yKIb_M.js";const K={class:"space-y-4 p-4"},L={class:"space-y-4"},M=G({__name:"index",setup(Q){return(R,o)=>(J(),H("div",K,[o[0]||(o[0]=s("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e(r(t),{title:"信息提示",description:"这是一条信息提示"}),e(r(t),{title:"成功提示",description:"这是一条成功提示",variant:"success"}),e(r(t),{title:"警告提示",description:"这是一条警告提示",variant:"warning"}),e(r(t),{title:"错误提示",description:"这是一条错误提示",variant:"error"}),o[1]||(o[1]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"不同尺寸",-1)),e(r(t),{title:"小尺寸",description:"这是小尺寸的提示",size:"xs"}),e(r(t),{title:"中小尺寸",description:"这是中小尺寸的提示",size:"sm"}),e(r(t),{title:"中等尺寸",description:"这是中等尺寸的提示",size:"md"}),e(r(t),{title:"大尺寸",description:"这是大尺寸的提示",size:"lg"}),o[2]||(o[2]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"无图标",-1)),e(r(t),{title:"无图标提示",description:"这是一条没有图标的提示",icon:!1}),o[3]||(o[3]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"可关闭",-1)),e(r(t),{title:"可关闭提示",description:"这是一条可以关闭的提示",closable:""}),o[4]||(o[4]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"不同圆角",-1)),s("div",L,[e(r(t),{title:"无圆角",description:"这是无圆角的提示",rounded:"none"}),e(r(t),{title:"小圆角",description:"这是小圆角的提示",rounded:"sm"}),e(r(t),{title:"中等圆角",description:"这是中等圆角的提示",rounded:"md"}),e(r(t),{title:"大圆角",description:"这是大圆角的提示",rounded:"lg"}),e(r(t),{title:"全圆角",description:"这是全圆角的提示",rounded:"full"})]),o[5]||(o[5]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"无边框",-1)),e(r(t),{title:"无边框提示",description:"这是一条没有边框的提示",border:!1}),o[6]||(o[6]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"带阴影",-1)),e(r(t),{title:"带阴影提示",description:"这是一条带阴影的提示",shadow:!0}),o[7]||(o[7]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"自定义样式 (PT)",-1)),e(r(t),{title:"自定义样式",description:"使用pt属性自定义各部分样式",pt:{root:"bg-purple-100 border-purple-300 text-purple-800",icon:"text-purple-500",title:"font-bold",description:"italic"}}),o[8]||(o[8]=s("h2",{class:"text-xl font-bold mb-4 mt-8"},"无样式模式",-1)),e(r(t),{title:"无样式模式",description:"使用unstyled属性移除所有默认样式，完全自定义",unstyled:"",pt:{root:"bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white",icon:"text-white",title:"font-bold text-lg",description:"opacity-90"}})]))}}),$={title:"组件/Alert 警告提示",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","error"],description:"警告提示的风格变体",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"警告提示的尺寸",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},title:{control:"text",description:"警告提示的标题",table:{type:{summary:"string"}}},description:{control:"text",description:"警告提示的详细描述",table:{type:{summary:"string"}}},icon:{control:"boolean",description:"是否显示图标",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closable:{control:"boolean",description:"是否可关闭",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rounded:{control:"select",options:["none","sm","md","lg","full"],description:"圆角大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},border:{control:"boolean",description:"是否显示边框",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},shadow:{control:"boolean",description:"是否显示阴影",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},n={args:{title:"信息提示",description:"这是一条信息提示",variant:"info"}},i={args:{title:"成功提示",description:"这是一条成功提示",variant:"success"}},a={args:{title:"警告提示",description:"这是一条警告提示",variant:"warning"}},l={args:{title:"错误提示",description:"这是一条错误提示",variant:"error"}},p={args:{title:"可关闭提示",description:"这是一条可以关闭的提示",closable:!0}},c={args:{title:"无图标提示",description:"这是一条没有图标的提示",icon:!1}},d={args:{title:"自定义样式",description:"使用pt属性自定义各部分样式",pt:{root:"bg-purple-100 border-purple-300 text-purple-800",icon:"text-purple-500",title:"font-bold",description:"italic"}}},m={args:{title:"无样式模式",description:"使用unstyled属性移除所有默认样式，完全自定义",unstyled:!0,pt:{root:"bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white",icon:"text-white",title:"font-bold text-lg",description:"opacity-90"}}},u={render:()=>({components:{AlertDemo:M},template:"<AlertDemo />"})};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: '信息提示',
    description: '这是一条信息提示',
    variant: 'info'
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,x,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: '成功提示',
    description: '这是一条成功提示',
    variant: 'success'
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,w,V;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: '警告提示',
    description: '这是一条警告提示',
    variant: 'warning'
  }
}`,...(V=(w=a.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var A,E,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: '错误提示',
    description: '这是一条错误提示',
    variant: 'error'
  }
}`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var z,B,C;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '可关闭提示',
    description: '这是一条可以关闭的提示',
    closable: true
  }
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,N,h;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: '无图标提示',
    description: '这是一条没有图标的提示',
    icon: false
  }
}`,...(h=(N=c.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var j,I,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '自定义样式',
    description: '使用pt属性自定义各部分样式',
    pt: {
      root: 'bg-purple-100 border-purple-300 text-purple-800',
      icon: 'text-purple-500',
      title: 'font-bold',
      description: 'italic'
    }
  }
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var U,W,O;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: '无样式模式',
    description: '使用unstyled属性移除所有默认样式，完全自定义',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-lg text-white',
      icon: 'text-white',
      title: 'font-bold text-lg',
      description: 'opacity-90'
    }
  }
}`,...(O=(W=m.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var P,q,F;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AlertDemo
    },
    template: '<AlertDemo />'
  })
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};const _=["Basic","Success","Warning","Error","Closable","NoIcon","CustomStyle","Unstyled","AllExamples"];export{u as AllExamples,n as Basic,p as Closable,d as CustomStyle,l as Error,c as NoIcon,i as Success,m as Unstyled,a as Warning,_ as __namedExportsOrder,$ as default};
