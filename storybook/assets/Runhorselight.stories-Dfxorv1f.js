import{V as r}from"./vue-CsNOCTfG.js";import{d as Ae,c as Ne,a as e,b as s,u as o,w as Oe,o as De}from"./iframe-DR7IJMUT.js";const We={class:"space-y-8 p-6"},je={class:"space-y-4"},Be={class:"space-y-4"},He={class:"space-y-4"},Ee={class:"space-y-4"},Fe={class:"space-y-4"},Je={class:"space-y-4"},Me=Ae({__name:"index",setup($e){const T=[{type:"image",src:"https://picsum.photos/id/1018/200/80",alt:"Logo 1"},{type:"image",src:"https://picsum.photos/id/1015/200/80",alt:"Logo 2"},{type:"image",src:"https://picsum.photos/id/1019/200/80",alt:"Logo 3"},{type:"image",src:"https://picsum.photos/id/1016/200/80",alt:"Logo 4"},{type:"image",src:"https://picsum.photos/id/1021/200/80",alt:"Logo 5"}],Pe=[{type:"card",title:"Vue 3 发布",description:"新一代前端框架，更快的性能和更小的体积",backgroundColor:"#dbeafe",textColor:"#1e40af",borderRadius:"0.5rem"},{type:"card",title:"TypeScript 5.0",description:"更强大的类型系统和更好的开发体验",backgroundColor:"#dcfce7",textColor:"#166534",borderRadius:"0.5rem"},{type:"card",title:"Tailwind CSS 4.0",description:"实用优先的 CSS 框架，快速构建现代网站",backgroundColor:"#fef3c7",textColor:"#92400e",borderRadius:"0.5rem"},{type:"card",title:"Vite 6.0",description:"极速的开发服务器和构建工具",backgroundColor:"#fce7f3",textColor:"#9d174d",borderRadius:"0.5rem"}],we=["纯文本内容",{type:"image",src:"https://picsum.photos/id/1018/100/60",alt:"混合图片"},{type:"card",title:"重要通知",description:"系统维护时间：今晚 22:00-24:00",backgroundColor:"#fef2f2",textColor:"#991b1b"},"更多文本内容"],Le=a=>{console.log("前缀点击:",a),alert(`前缀点击事件: ${JSON.stringify(a)}`)},Ie=a=>{console.log("后缀点击:",a),alert(`后缀点击事件: ${JSON.stringify(a)}`)};return(a,t)=>(De(),Ne("div",We,[e("section",null,[t[0]||(t[0]=e("h3",{class:"text-lg font-medium mb-4"},"基础文本跑马灯",-1)),s(o(r),{items:["欢迎使用 Versakit 组件库","这是一个功能强大的 Vue 3 组件库","支持 TypeScript 和 Tailwind CSS"],height:"4rem"})]),e("section",null,[t[1]||(t[1]=e("h3",{class:"text-lg font-medium mb-4"},"图片跑马灯",-1)),s(o(r),{items:T,height:"6rem",gap:"2rem",duration:25,"border-radius":"1rem"})]),e("section",null,[t[2]||(t[2]=e("h3",{class:"text-lg font-medium mb-4"},"卡片跑马灯",-1)),s(o(r),{items:Pe,height:"12rem",gap:"1.5rem",duration:30,"border-radius":"1rem","background-color":"#f3f4f6"})]),e("section",null,[t[5]||(t[5]=e("h3",{class:"text-lg font-medium mb-4"},"不同滚动方向",-1)),e("div",je,[e("div",null,[t[3]||(t[3]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"向左滚动 (默认)",-1)),s(o(r),{items:["向左滚动的内容 1","向左滚动的内容 2","向左滚动的内容 3"],direction:"left"})]),e("div",null,[t[4]||(t[4]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"向右滚动",-1)),s(o(r),{items:["向右滚动的内容 1","向右滚动的内容 2","向右滚动的内容 3"],direction:"right"})])])]),e("section",null,[t[9]||(t[9]=e("h3",{class:"text-lg font-medium mb-4"},"不同滚动速度",-1)),e("div",Be,[e("div",null,[t[6]||(t[6]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"快速滚动 (10秒)",-1)),s(o(r),{items:["快速滚动的内容 1","快速滚动的内容 2","快速滚动的内容 3"],duration:10})]),e("div",null,[t[7]||(t[7]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"中速滚动 (20秒，默认)",-1)),s(o(r),{items:["中速滚动的内容 1","中速滚动的内容 2","中速滚动的内容 3"],duration:20})]),e("div",null,[t[8]||(t[8]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"慢速滚动 (40秒)",-1)),s(o(r),{items:["慢速滚动的内容 1","慢速滚动的内容 2","慢速滚动的内容 3"],duration:40})])])]),e("section",null,[t[10]||(t[10]=e("h3",{class:"text-lg font-medium mb-4"},"带前缀和后缀",-1)),s(o(r),{items:["新闻 1：重要通知","新闻 2：系统更新","新闻 3：新功能发布"],prefix:{type:"text",content:"📢 最新消息：",textColor:"#ef4444"},suffix:{type:"text",content:"更多 »",textColor:"#3b82f6"},height:"3rem",onPrefixClick:Le,onSuffixClick:Ie})]),e("section",null,[t[13]||(t[13]=e("h3",{class:"text-lg font-medium mb-4"},"鼠标悬停暂停",-1)),e("div",He,[e("div",null,[t[11]||(t[11]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"启用悬停暂停 (默认)",-1)),s(o(r),{items:["悬停时暂停滚动 1","悬停时暂停滚动 2","悬停时暂停滚动 3"],"pause-on-hover":!0})]),e("div",null,[t[12]||(t[12]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"禁用悬停暂停",-1)),s(o(r),{items:["不暂停滚动 1","不暂停滚动 2","不暂停滚动 3"],"pause-on-hover":!1})])])]),e("section",null,[t[16]||(t[16]=e("h3",{class:"text-lg font-medium mb-4"},"自定义样式",-1)),e("div",Ee,[e("div",null,[t[14]||(t[14]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"自定义背景色和文本色",-1)),s(o(r),{items:["自定义样式内容 1","自定义样式内容 2","自定义样式内容 3"],height:"3.5rem","background-color":"#1e293b","text-color":"#ffffff","border-radius":"0.5rem"})]),e("div",null,[t[15]||(t[15]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"通过 PT 传递自定义样式",-1)),s(o(r),{items:["PT 样式内容 1","PT 样式内容 2","PT 样式内容 3"],height:"3.5rem",pt:{root:"bg-gradient-to-r from-purple-500 to-pink-500",text:"text-white font-bold text-lg",item:"px-6"}})])])]),e("section",null,[t[17]||(t[17]=e("h3",{class:"text-lg font-medium mb-4"},"混合内容类型",-1)),s(o(r),{items:we,height:"6rem",gap:"1.5rem",duration:35,"border-radius":"0.75rem"})]),e("section",null,[t[20]||(t[20]=e("h3",{class:"text-lg font-medium mb-4"},"无缝循环",-1)),e("div",Fe,[e("div",null,[t[18]||(t[18]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"启用无缝循环 (默认)",-1)),s(o(r),{items:["无缝循环内容 1","无缝循环内容 2","无缝循环内容 3"],loop:!0})]),e("div",null,[t[19]||(t[19]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"禁用无缝循环",-1)),s(o(r),{items:["不循环内容 1","不循环内容 2","不循环内容 3"],loop:!1})])])]),e("section",null,[t[22]||(t[22]=e("h3",{class:"text-lg font-medium mb-4"},"自定义插槽",-1)),s(o(r),{items:[],height:"5rem",gap:"2rem"},{default:Oe(()=>t[21]||(t[21]=[e("div",{class:"flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"},[e("span",null,"🚀"),e("span",null,"自定义内容 1")],-1),e("div",{class:"flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"},[e("span",null,"⭐"),e("span",null,"自定义内容 2")],-1),e("div",{class:"flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"},[e("span",null,"🎨"),e("span",null,"自定义内容 3")],-1),e("div",{class:"flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full"},[e("span",null,"🔥"),e("span",null,"自定义内容 4")],-1)])),_:1})]),e("section",null,[t[25]||(t[25]=e("h3",{class:"text-lg font-medium mb-4"},"自动填充内容",-1)),e("div",Je,[e("div",null,[t[23]||(t[23]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"启用自动填充",-1)),s(o(r),{items:T.slice(0,2),height:"6rem",gap:"2rem",autofill:!0,"border-radius":"0.5rem"},null,8,["items"])]),e("div",null,[t[24]||(t[24]=e("p",{class:"mb-2 text-sm text-gray-600 dark:text-gray-400"},"禁用自动填充",-1)),s(o(r),{items:T.slice(0,2),height:"6rem",gap:"2rem",autofill:!1,"border-radius":"0.5rem"},null,8,["items"])])])]),e("section",null,[t[26]||(t[26]=e("h3",{class:"text-lg font-medium mb-4"},"无样式模式",-1)),s(o(r),{items:["无样式内容 1","无样式内容 2","无样式内容 3"],height:"3rem",unstyled:!0,pt:{root:"bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg shadow-lg",track:"flex",text:"text-white font-semibold text-base"}})])]))}}),Ge={title:"组件/Runhorselight 跑马灯",component:r,tags:["autodocs"],argTypes:{items:{control:"object",description:"跑马灯数据项",table:{type:{summary:"RunhorselightItem[]"},defaultValue:{summary:"[]"}}},prefix:{control:"object",description:"每轮内容前展示的前缀",table:{type:{summary:"RunhorselightAffix"},defaultValue:{summary:"-"}}},suffix:{control:"object",description:"每轮内容后展示的后缀",table:{type:{summary:"RunhorselightAffix"},defaultValue:{summary:"-"}}},direction:{control:"select",options:["left","right"],description:"滚动方向",table:{type:{summary:"string"},defaultValue:{summary:"left"}}},duration:{control:"number",description:"完成一次滚动循环的时长（秒）",table:{type:{summary:"number | string"},defaultValue:{summary:"20"}}},height:{control:"text",description:"组件高度",table:{type:{summary:"string"},defaultValue:{summary:"3rem"}}},backgroundColor:{control:"color",description:"背景色",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}}},textColor:{control:"color",description:"默认文本色",table:{type:{summary:"string"},defaultValue:{summary:"#111827"}}},borderRadius:{control:"text",description:"圆角大小",table:{type:{summary:"string"},defaultValue:{summary:"0.75rem"}}},gap:{control:"text",description:"项间距",table:{type:{summary:"string"},defaultValue:{summary:"1rem"}}},pauseOnHover:{control:"boolean",description:"鼠标悬停时暂停",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},loop:{control:"boolean",description:"是否无缝循环",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},autofill:{control:"boolean",description:"图片模式下自动补充内容",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},Ve=["欢迎使用 Versakit 组件库","这是一个功能强大的 Vue 3 组件库","支持 TypeScript 和 Tailwind CSS","提供完整的无障碍访问支持"],Re=[{type:"image",src:"https://picsum.photos/id/1018/200/80",alt:"Logo 1"},{type:"image",src:"https://picsum.photos/id/1015/200/80",alt:"Logo 2"},{type:"image",src:"https://picsum.photos/id/1019/200/80",alt:"Logo 3"}],Ue=[{type:"card",title:"Vue 3 发布",description:"新一代前端框架，更快的性能和更小的体积",backgroundColor:"#dbeafe",textColor:"#1e40af"},{type:"card",title:"TypeScript 5.0",description:"更强大的类型系统和更好的开发体验",backgroundColor:"#dcfce7",textColor:"#166534"},{type:"card",title:"Tailwind CSS 4.0",description:"实用优先的 CSS 框架，快速构建现代网站",backgroundColor:"#fef3c7",textColor:"#92400e"}],n={args:{items:Ve,height:"3rem"}},i={args:{items:Ve,height:"4rem",gap:"1.5rem"}},m={args:{items:Re,height:"6rem",gap:"2rem",duration:25,borderRadius:"1rem"}},l={args:{items:Ue,height:"12rem",gap:"1.5rem",duration:30,borderRadius:"1rem",backgroundColor:"#f3f4f6"}},d={args:{items:["向右滚动的内容 1","向右滚动的内容 2","向右滚动的内容 3"],direction:"right"}},u={args:{items:["快速滚动的内容 1","快速滚动的内容 2","快速滚动的内容 3"],duration:10}},p={args:{items:["慢速滚动的内容 1","慢速滚动的内容 2","慢速滚动的内容 3"],duration:40}},c={args:{items:["新闻 1：重要通知","新闻 2：系统更新","新闻 3：新功能发布"],prefix:{type:"text",content:"📢 最新消息：",textColor:"#ef4444"},height:"3rem"}},g={args:{items:["内容 1","内容 2","内容 3"],suffix:{type:"text",content:"更多 »",textColor:"#3b82f6"},height:"3rem"}},f={args:{items:["新闻 1：重要通知","新闻 2：系统更新","新闻 3：新功能发布"],prefix:{type:"text",content:"📢 最新消息：",textColor:"#ef4444"},suffix:{type:"text",content:"更多 »",textColor:"#3b82f6"},height:"3rem"}},x={args:{items:["不暂停滚动 1","不暂停滚动 2","不暂停滚动 3"],pauseOnHover:!1}},b={args:{items:["不循环内容 1","不循环内容 2","不循环内容 3"],loop:!1}},y={args:{items:["自定义样式内容 1","自定义样式内容 2","自定义样式内容 3"],height:"3.5rem",backgroundColor:"#1e293b",textColor:"#ffffff",borderRadius:"0.5rem"}},h={args:{items:["PT 样式内容 1","PT 样式内容 2","PT 样式内容 3"],height:"3.5rem",pt:{root:"bg-gradient-to-r from-purple-500 to-pink-500",text:"text-white font-bold text-lg",item:"px-6"}}},C={args:{items:Re.slice(0,2),height:"6rem",gap:"2rem",autofill:!0,borderRadius:"0.5rem"}},k={args:{items:["无样式内容 1","无样式内容 2","无样式内容 3"],height:"3rem",unstyled:!0,pt:{root:"bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg",track:"flex",text:"text-white font-semibold text-base"}}},S={args:{items:["纯文本内容",{type:"image",src:"https://picsum.photos/id/1018/100/60",alt:"混合图片"},{type:"card",title:"重要通知",description:"系统维护时间：今晚 22:00-24:00",backgroundColor:"#fef2f2",textColor:"#991b1b"},"更多文本内容"],height:"6rem",gap:"1.5rem",duration:35,borderRadius:"0.75rem"}},v={render:()=>({components:{RunhorselightDemo:Me},template:"<RunhorselightDemo />"})};var V,R,P;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: sampleTexts,
    height: '3rem'
  }
}`,...(P=(R=n.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var w,L,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: sampleTexts,
    height: '4rem',
    gap: '1.5rem'
  }
}`,...(I=(L=i.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var A,N,O;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: sampleImages,
    height: '6rem',
    gap: '2rem',
    duration: 25,
    borderRadius: '1rem'
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var D,W,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: sampleCards,
    height: '12rem',
    gap: '1.5rem',
    duration: 30,
    borderRadius: '1rem',
    backgroundColor: '#f3f4f6'
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var B,H,E;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: ['向右滚动的内容 1', '向右滚动的内容 2', '向右滚动的内容 3'],
    direction: 'right'
  }
}`,...(E=(H=d.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var F,J,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: ['快速滚动的内容 1', '快速滚动的内容 2', '快速滚动的内容 3'],
    duration: 10
  }
}`,...(M=(J=u.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};var U,$,q;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    items: ['慢速滚动的内容 1', '慢速滚动的内容 2', '慢速滚动的内容 3'],
    duration: 40
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,G,K;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: ['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布'],
    prefix: {
      type: 'text',
      content: '📢 最新消息：',
      textColor: '#ef4444'
    },
    height: '3rem'
  }
}`,...(K=(G=c.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: ['内容 1', '内容 2', '内容 3'],
    suffix: {
      type: 'text',
      content: '更多 »',
      textColor: '#3b82f6'
    },
    height: '3rem'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,_,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: ['新闻 1：重要通知', '新闻 2：系统更新', '新闻 3：新功能发布'],
    prefix: {
      type: 'text',
      content: '📢 最新消息：',
      textColor: '#ef4444'
    },
    suffix: {
      type: 'text',
      content: '更多 »',
      textColor: '#3b82f6'
    },
    height: '3rem'
  }
}`,...(ee=(_=f.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: ['不暂停滚动 1', '不暂停滚动 2', '不暂停滚动 3'],
    pauseOnHover: false
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var oe,ae,ne;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    items: ['不循环内容 1', '不循环内容 2', '不循环内容 3'],
    loop: false
  }
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,me,le;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: ['自定义样式内容 1', '自定义样式内容 2', '自定义样式内容 3'],
    height: '3.5rem',
    backgroundColor: '#1e293b',
    textColor: '#ffffff',
    borderRadius: '0.5rem'
  }
}`,...(le=(me=y.parameters)==null?void 0:me.docs)==null?void 0:le.source}}};var de,ue,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: ['PT 样式内容 1', 'PT 样式内容 2', 'PT 样式内容 3'],
    height: '3.5rem',
    pt: {
      root: 'bg-gradient-to-r from-purple-500 to-pink-500',
      text: 'text-white font-bold text-lg',
      item: 'px-6'
    }
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,ge,fe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: sampleImages.slice(0, 2),
    height: '6rem',
    gap: '2rem',
    autofill: true,
    borderRadius: '0.5rem'
  }
}`,...(fe=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var xe,be,ye;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    items: ['无样式内容 1', '无样式内容 2', '无样式内容 3'],
    height: '3rem',
    unstyled: true,
    pt: {
      root: 'bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-lg',
      track: 'flex',
      text: 'text-white font-semibold text-base'
    }
  }
}`,...(ye=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,Ce,ke;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    items: ['纯文本内容', {
      type: 'image',
      src: 'https://picsum.photos/id/1018/100/60',
      alt: '混合图片'
    }, {
      type: 'card',
      title: '重要通知',
      description: '系统维护时间：今晚 22:00-24:00',
      backgroundColor: '#fef2f2',
      textColor: '#991b1b'
    }, '更多文本内容'],
    height: '6rem',
    gap: '1.5rem',
    duration: 35,
    borderRadius: '0.75rem'
  }
}`,...(ke=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Se,ve,Te;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RunhorselightDemo
    },
    template: '<RunhorselightDemo />'
  })
}`,...(Te=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};const Ke=["Basic","Text","Images","Cards","RightDirection","Fast","Slow","WithPrefix","WithSuffix","WithAffix","NoPauseOnHover","NoLoop","CustomStyle","PTStyle","Autofill","Unstyled","MixedContent","AllExamples"];export{v as AllExamples,C as Autofill,n as Basic,l as Cards,y as CustomStyle,u as Fast,m as Images,S as MixedContent,b as NoLoop,x as NoPauseOnHover,h as PTStyle,d as RightDirection,p as Slow,i as Text,k as Unstyled,f as WithAffix,c as WithPrefix,g as WithSuffix,Ke as __namedExportsOrder,Ge as default};
