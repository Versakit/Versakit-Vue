import{s as r}from"./index.esm-DjItFe4v.js";/* empty css            */import{d as ue,r as t,c as pe,a as l,b as o,u as s,o as de}from"./iframe-BrQc6s_W.js";const me={class:"space-y-8 p-4"},ie={class:"space-y-4"},ce={class:"space-y-4"},be={class:"space-y-4"},fe={class:"space-y-4"},ye=ue({__name:"index",setup(ge){const V=t(""),v=t(""),w=t("只读内容"),h=t(""),S=t(""),I=t(""),C=t("");return(xe,e)=>(de(),pe("div",me,[l("section",null,[e[7]||(e[7]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),o(s(r),{modelValue:V.value,"onUpdate:modelValue":e[0]||(e[0]=a=>V.value=a),placeholder:"请输入内容"},null,8,["modelValue"])]),l("section",null,[e[12]||(e[12]=l("h2",{class:"text-xl font-bold mb-4"},"不同类型",-1)),l("div",ie,[l("div",null,[e[8]||(e[8]=l("p",{class:"mb-2"},"文本输入框",-1)),o(s(r),{type:"text",placeholder:"请输入文本"})]),l("div",null,[e[9]||(e[9]=l("p",{class:"mb-2"},"密码输入框",-1)),o(s(r),{modelValue:v.value,"onUpdate:modelValue":e[1]||(e[1]=a=>v.value=a),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),l("div",null,[e[10]||(e[10]=l("p",{class:"mb-2"},"邮箱输入框",-1)),o(s(r),{type:"email",placeholder:"请输入邮箱"})]),l("div",null,[e[11]||(e[11]=l("p",{class:"mb-2"},"数字输入框",-1)),o(s(r),{type:"number",placeholder:"请输入数字"})])])]),l("section",null,[e[13]||(e[13]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),o(s(r),{disabled:"",placeholder:"禁用状态"})]),l("section",null,[e[14]||(e[14]=l("h2",{class:"text-xl font-bold mb-4"},"只读状态",-1)),o(s(r),{modelValue:w.value,"onUpdate:modelValue":e[2]||(e[2]=a=>w.value=a),readonly:""},null,8,["modelValue"])]),l("section",null,[e[18]||(e[18]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",ce,[l("div",null,[e[15]||(e[15]=l("p",{class:"mb-2"},"小尺寸",-1)),o(s(r),{size:"small",placeholder:"小尺寸输入框"})]),l("div",null,[e[16]||(e[16]=l("p",{class:"mb-2"},"默认尺寸",-1)),o(s(r),{size:"default",placeholder:"默认尺寸输入框"})]),l("div",null,[e[17]||(e[17]=l("p",{class:"mb-2"},"大尺寸",-1)),o(s(r),{size:"large",placeholder:"大尺寸输入框"})])])]),l("section",null,[e[22]||(e[22]=l("h2",{class:"text-xl font-bold mb-4"},"前缀和后缀",-1)),l("div",be,[l("div",null,[e[19]||(e[19]=l("p",{class:"mb-2"},"前缀图标",-1)),o(s(r),{prefixIcon:"search",placeholder:"搜索内容"})]),l("div",null,[e[20]||(e[20]=l("p",{class:"mb-2"},"后缀图标",-1)),o(s(r),{suffixIcon:"calendar",placeholder:"选择日期"})]),l("div",null,[e[21]||(e[21]=l("p",{class:"mb-2"},"前缀和后缀图标",-1)),o(s(r),{prefixIcon:"user",suffixIcon:"lock",placeholder:"用户名"})])])]),l("section",null,[e[23]||(e[23]=l("h2",{class:"text-xl font-bold mb-4"},"可清除",-1)),o(s(r),{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=a=>h.value=a),clearable:"",placeholder:"可清除的输入框"},null,8,["modelValue"])]),l("section",null,[e[24]||(e[24]=l("h2",{class:"text-xl font-bold mb-4"},"字数限制",-1)),o(s(r),{modelValue:S.value,"onUpdate:modelValue":e[4]||(e[4]=a=>S.value=a),maxlength:20,showCount:"",placeholder:"最多输入20个字符"},null,8,["modelValue"])]),l("section",null,[e[28]||(e[28]=l("h2",{class:"text-xl font-bold mb-4"},"不同状态",-1)),l("div",fe,[l("div",null,[e[25]||(e[25]=l("p",{class:"mb-2"},"错误状态",-1)),o(s(r),{status:"error",placeholder:"错误状态"})]),l("div",null,[e[26]||(e[26]=l("p",{class:"mb-2"},"警告状态",-1)),o(s(r),{status:"warning",placeholder:"警告状态"})]),l("div",null,[e[27]||(e[27]=l("p",{class:"mb-2"},"成功状态",-1)),o(s(r),{status:"success",placeholder:"成功状态"})])])]),l("section",null,[e[29]||(e[29]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),o(s(r),{modelValue:I.value,"onUpdate:modelValue":e[5]||(e[5]=a=>I.value=a),placeholder:"自定义样式",pt:{wrapper:"border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200",input:"text-purple-700 placeholder-purple-300"}},null,8,["modelValue"])]),l("section",null,[e[30]||(e[30]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),o(s(r),{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=a=>C.value=a),placeholder:"无样式模式",unstyled:"",pt:{root:"w-full",wrapper:"bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md",input:"w-full px-4 py-2 rounded-md bg-white focus:outline-none"}},null,8,["modelValue"])])]))}}),he={title:"组件/Input 输入框",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"输入框的值",table:{type:{summary:"string | number"}}},placeholder:{control:"text",description:"占位符",table:{type:{summary:"string"}}},type:{control:"select",options:["text","password","email","number","tel","url","search"],description:"输入框类型",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","default","large"],description:"输入框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},prefixIcon:{control:"text",description:"前缀图标",table:{type:{summary:"string"}}},suffixIcon:{control:"text",description:"后缀图标",table:{type:{summary:"string"}}},clearable:{control:"boolean",description:"是否显示清除按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maxlength:{control:"number",description:"最大长度",table:{type:{summary:"number"}}},showCount:{control:"boolean",description:"是否显示输入字数统计",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autofocus:{control:"boolean",description:"自动获取焦点",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},status:{control:"select",options:["error","warning","success"],description:"输入框状态",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},n={args:{placeholder:"请输入内容"}},u={args:{type:"password",placeholder:"请输入密码"}},p={args:{disabled:!0,placeholder:"禁用状态"}},d={args:{readonly:!0,modelValue:"只读内容"}},m={args:{size:"large",placeholder:"大尺寸输入框"}},i={args:{prefixIcon:"search",suffixIcon:"close",placeholder:"带图标的输入框"}},c={args:{clearable:!0,placeholder:"可清除的输入框"}},b={args:{maxlength:20,showCount:!0,placeholder:"最多输入20个字符"}},f={args:{status:"error",placeholder:"错误状态"}},y={args:{placeholder:"自定义样式",pt:{wrapper:"border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200",input:"text-purple-700 placeholder-purple-300"}}},g={args:{placeholder:"无样式模式",unstyled:!0,pt:{root:"w-full",wrapper:"bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md",input:"w-full px-4 py-2 rounded-md bg-white focus:outline-none"}}},x={render:()=>({components:{InputDemo:ye},template:"<InputDemo />"})};var U,z,D;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容'
  }
}`,...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var B,E,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: '请输入密码'
  }
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var k,P,j;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...(j=(P=p.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var A,L,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '只读内容'
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,R,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: '大尺寸输入框'
  }
}`,...(O=(R=m.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var q,F,G;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    prefixIcon: 'search',
    suffixIcon: 'close',
    placeholder: '带图标的输入框'
  }
}`,...(G=(F=i.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    clearable: true,
    placeholder: '可清除的输入框'
  }
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    maxlength: 20,
    showCount: true,
    placeholder: '最多输入20个字符'
  }
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: '错误状态'
  }
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var _,ee,le;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: '自定义样式',
    pt: {
      wrapper: 'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
      input: 'text-purple-700 placeholder-purple-300'
    }
  }
}`,...(le=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var re,oe,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    placeholder: '无样式模式',
    unstyled: true,
    pt: {
      root: 'w-full',
      wrapper: 'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md',
      input: 'w-full px-4 py-2 rounded-md bg-white focus:outline-none'
    }
  }
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,te,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputDemo
    },
    template: '<InputDemo />'
  })
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Se=["Basic","Types","Disabled","Readonly","Sizes","PrefixSuffix","Clearable","MaxLength","Status","CustomStyle","Unstyled","AllExamples"];export{x as AllExamples,n as Basic,c as Clearable,y as CustomStyle,p as Disabled,b as MaxLength,i as PrefixSuffix,d as Readonly,m as Sizes,f as Status,u as Types,g as Unstyled,Se as __namedExportsOrder,he as default};
