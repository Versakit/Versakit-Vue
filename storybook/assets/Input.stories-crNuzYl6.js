import{w as r}from"./vue-B_9GhRaC.js";import{d as U,r as t,c as z,a as l,b as o,u as s,o as D}from"./iframe-BywGPS4Q.js";const B={class:"space-y-8 p-4"},E={class:"space-y-4"},T={class:"space-y-4"},k={class:"space-y-4"},P={class:"space-y-4"},j=U({__name:"index",setup(A){const V=t(""),w=t(""),v=t("只读内容"),h=t(""),S=t(""),I=t(""),C=t("");return(L,e)=>(D(),z("div",B,[l("section",null,[e[7]||(e[7]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),o(s(r),{modelValue:V.value,"onUpdate:modelValue":e[0]||(e[0]=a=>V.value=a),placeholder:"请输入内容"},null,8,["modelValue"])]),l("section",null,[e[12]||(e[12]=l("h2",{class:"text-xl font-bold mb-4"},"不同类型",-1)),l("div",E,[l("div",null,[e[8]||(e[8]=l("p",{class:"mb-2"},"文本输入框",-1)),o(s(r),{type:"text",placeholder:"请输入文本"})]),l("div",null,[e[9]||(e[9]=l("p",{class:"mb-2"},"密码输入框",-1)),o(s(r),{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=a=>w.value=a),type:"password",placeholder:"请输入密码"},null,8,["modelValue"])]),l("div",null,[e[10]||(e[10]=l("p",{class:"mb-2"},"邮箱输入框",-1)),o(s(r),{type:"email",placeholder:"请输入邮箱"})]),l("div",null,[e[11]||(e[11]=l("p",{class:"mb-2"},"数字输入框",-1)),o(s(r),{type:"number",placeholder:"请输入数字"})])])]),l("section",null,[e[13]||(e[13]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),o(s(r),{disabled:"",placeholder:"禁用状态"})]),l("section",null,[e[14]||(e[14]=l("h2",{class:"text-xl font-bold mb-4"},"只读状态",-1)),o(s(r),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=a=>v.value=a),readonly:""},null,8,["modelValue"])]),l("section",null,[e[18]||(e[18]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",T,[l("div",null,[e[15]||(e[15]=l("p",{class:"mb-2"},"小尺寸",-1)),o(s(r),{size:"small",placeholder:"小尺寸输入框"})]),l("div",null,[e[16]||(e[16]=l("p",{class:"mb-2"},"默认尺寸",-1)),o(s(r),{size:"default",placeholder:"默认尺寸输入框"})]),l("div",null,[e[17]||(e[17]=l("p",{class:"mb-2"},"大尺寸",-1)),o(s(r),{size:"large",placeholder:"大尺寸输入框"})])])]),l("section",null,[e[22]||(e[22]=l("h2",{class:"text-xl font-bold mb-4"},"前缀和后缀",-1)),l("div",k,[l("div",null,[e[19]||(e[19]=l("p",{class:"mb-2"},"前缀图标",-1)),o(s(r),{prefixIcon:"search",placeholder:"搜索内容"})]),l("div",null,[e[20]||(e[20]=l("p",{class:"mb-2"},"后缀图标",-1)),o(s(r),{suffixIcon:"calendar",placeholder:"选择日期"})]),l("div",null,[e[21]||(e[21]=l("p",{class:"mb-2"},"前缀和后缀图标",-1)),o(s(r),{prefixIcon:"user",suffixIcon:"lock",placeholder:"用户名"})])])]),l("section",null,[e[23]||(e[23]=l("h2",{class:"text-xl font-bold mb-4"},"可清除",-1)),o(s(r),{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=a=>h.value=a),clearable:"",placeholder:"可清除的输入框"},null,8,["modelValue"])]),l("section",null,[e[24]||(e[24]=l("h2",{class:"text-xl font-bold mb-4"},"字数限制",-1)),o(s(r),{modelValue:S.value,"onUpdate:modelValue":e[4]||(e[4]=a=>S.value=a),maxlength:20,showCount:"",placeholder:"最多输入20个字符"},null,8,["modelValue"])]),l("section",null,[e[28]||(e[28]=l("h2",{class:"text-xl font-bold mb-4"},"不同状态",-1)),l("div",P,[l("div",null,[e[25]||(e[25]=l("p",{class:"mb-2"},"错误状态",-1)),o(s(r),{status:"error",placeholder:"错误状态"})]),l("div",null,[e[26]||(e[26]=l("p",{class:"mb-2"},"警告状态",-1)),o(s(r),{status:"warning",placeholder:"警告状态"})]),l("div",null,[e[27]||(e[27]=l("p",{class:"mb-2"},"成功状态",-1)),o(s(r),{status:"success",placeholder:"成功状态"})])])]),l("section",null,[e[29]||(e[29]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),o(s(r),{modelValue:I.value,"onUpdate:modelValue":e[5]||(e[5]=a=>I.value=a),placeholder:"自定义样式",pt:{wrapper:"border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200",input:"text-purple-700 placeholder-purple-300"}},null,8,["modelValue"])]),l("section",null,[e[30]||(e[30]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),o(s(r),{modelValue:C.value,"onUpdate:modelValue":e[6]||(e[6]=a=>C.value=a),placeholder:"无样式模式",unstyled:"",pt:{root:"w-full",wrapper:"bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md",input:"w-full px-4 py-2 rounded-md bg-white focus:outline-none"}},null,8,["modelValue"])])]))}}),R={title:"组件/Input 输入框",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"输入框的值",table:{type:{summary:"string | number"}}},placeholder:{control:"text",description:"占位符",table:{type:{summary:"string"}}},type:{control:"select",options:["text","password","email","number","tel","url","search"],description:"输入框类型",table:{type:{summary:"string"},defaultValue:{summary:"text"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","default","large"],description:"输入框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},prefixIcon:{control:"text",description:"前缀图标",table:{type:{summary:"string"}}},suffixIcon:{control:"text",description:"后缀图标",table:{type:{summary:"string"}}},clearable:{control:"boolean",description:"是否显示清除按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},maxlength:{control:"number",description:"最大长度",table:{type:{summary:"number"}}},showCount:{control:"boolean",description:"是否显示输入字数统计",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autofocus:{control:"boolean",description:"自动获取焦点",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},status:{control:"select",options:["error","warning","success"],description:"输入框状态",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},n={args:{placeholder:"请输入内容"}},u={args:{type:"password",placeholder:"请输入密码"}},p={args:{disabled:!0,placeholder:"禁用状态"}},d={args:{readonly:!0,modelValue:"只读内容"}},m={args:{size:"large",placeholder:"大尺寸输入框"}},i={args:{prefixIcon:"search",suffixIcon:"close",placeholder:"带图标的输入框"}},c={args:{clearable:!0,placeholder:"可清除的输入框"}},b={args:{maxlength:20,showCount:!0,placeholder:"最多输入20个字符"}},f={args:{status:"error",placeholder:"错误状态"}},y={args:{placeholder:"自定义样式",pt:{wrapper:"border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200",input:"text-purple-700 placeholder-purple-300"}}},g={args:{placeholder:"无样式模式",unstyled:!0,pt:{root:"w-full",wrapper:"bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md",input:"w-full px-4 py-2 rounded-md bg-white focus:outline-none"}}},x={render:()=>({components:{InputDemo:j},template:"<InputDemo />"})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容'
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: '请输入密码'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: '只读内容'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    placeholder: '大尺寸输入框'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    prefixIcon: 'search',
    suffixIcon: 'close',
    placeholder: '带图标的输入框'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    clearable: true,
    placeholder: '可清除的输入框'
  }
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    maxlength: 20,
    showCount: true,
    placeholder: '最多输入20个字符'
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: '错误状态'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '自定义样式',
    pt: {
      wrapper: 'border-purple-500 focus-within:border-purple-700 focus-within:ring-purple-200',
      input: 'text-purple-700 placeholder-purple-300'
    }
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: '无样式模式',
    unstyled: true,
    pt: {
      root: 'w-full',
      wrapper: 'bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 rounded-md',
      input: 'w-full px-4 py-2 rounded-md bg-white focus:outline-none'
    }
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputDemo
    },
    template: '<InputDemo />'
  })
}`,...x.parameters?.docs?.source}}};const O=["Basic","Types","Disabled","Readonly","Sizes","PrefixSuffix","Clearable","MaxLength","Status","CustomStyle","Unstyled","AllExamples"];export{x as AllExamples,n as Basic,c as Clearable,y as CustomStyle,p as Disabled,b as MaxLength,i as PrefixSuffix,d as Readonly,m as Sizes,f as Status,u as Types,g as Unstyled,O as __namedExportsOrder,R as default};
