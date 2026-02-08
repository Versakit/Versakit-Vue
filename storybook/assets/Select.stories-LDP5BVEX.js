import{B as r}from"./vue-DLnEwXhe.js";import{d as ne,r as U,c as ue,a as l,b as a,u as s,o as de}from"./iframe-EQTwgZ5q.js";const pe={class:"space-y-8 p-4"},ie={class:"space-y-4"},me={class:"space-y-4"},be={class:"space-y-4"},ge=ne({__name:"index",setup(ce){const t=U(""),d=U("option1"),p=U([]),n=[{value:"option1",label:"选项一"},{value:"option2",label:"选项二"},{value:"option3",label:"选项三"},{value:"option4",label:"选项四"},{value:"option5",label:"选项五"}],se=[{value:"fruit1",label:"苹果",group:"水果"},{value:"fruit2",label:"香蕉",group:"水果"},{value:"fruit3",label:"橙子",group:"水果"},{value:"vegetable1",label:"西红柿",group:"蔬菜"},{value:"vegetable2",label:"黄瓜",group:"蔬菜"},{value:"vegetable3",label:"茄子",group:"蔬菜"}];return(Ve,e)=>(de(),ue("div",pe,[l("section",null,[e[19]||(e[19]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),options:n,placeholder:"请选择"},null,8,["modelValue"])]),l("section",null,[e[20]||(e[20]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=o=>t.value=o),options:n,placeholder:"请选择",disabled:""},null,8,["modelValue"])]),l("section",null,[e[21]||(e[21]=l("h2",{class:"text-xl font-bold mb-4"},"只读状态",-1)),a(s(r),{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),options:n,placeholder:"请选择",readonly:""},null,8,["modelValue"])]),l("section",null,[e[22]||(e[22]=l("h2",{class:"text-xl font-bold mb-4"},"多选模式",-1)),a(s(r),{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=o=>p.value=o),options:n,placeholder:"请选择",multiple:""},null,8,["modelValue"])]),l("section",null,[e[26]||(e[26]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",ie,[l("div",null,[e[23]||(e[23]=l("p",{class:"mb-2"},"小尺寸",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[4]||(e[4]=o=>t.value=o),options:n,placeholder:"请选择",size:"small"},null,8,["modelValue"])]),l("div",null,[e[24]||(e[24]=l("p",{class:"mb-2"},"默认尺寸",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[5]||(e[5]=o=>t.value=o),options:n,placeholder:"请选择",size:"default"},null,8,["modelValue"])]),l("div",null,[e[25]||(e[25]=l("p",{class:"mb-2"},"大尺寸",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[6]||(e[6]=o=>t.value=o),options:n,placeholder:"请选择",size:"large"},null,8,["modelValue"])])])]),l("section",null,[e[31]||(e[31]=l("h2",{class:"text-xl font-bold mb-4"},"不同状态",-1)),l("div",me,[l("div",null,[e[27]||(e[27]=l("p",{class:"mb-2"},"默认状态",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[7]||(e[7]=o=>t.value=o),options:n,placeholder:"请选择",status:"default"},null,8,["modelValue"])]),l("div",null,[e[28]||(e[28]=l("p",{class:"mb-2"},"成功状态",-1)),a(s(r),{modelValue:d.value,"onUpdate:modelValue":e[8]||(e[8]=o=>d.value=o),options:n,placeholder:"请选择",status:"success"},null,8,["modelValue"])]),l("div",null,[e[29]||(e[29]=l("p",{class:"mb-2"},"警告状态",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[9]||(e[9]=o=>t.value=o),options:n,placeholder:"请选择",status:"warning","help-text":"请注意选择"},null,8,["modelValue"])]),l("div",null,[e[30]||(e[30]=l("p",{class:"mb-2"},"错误状态",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[10]||(e[10]=o=>t.value=o),options:n,placeholder:"请选择",status:"error","error-text":"请选择一个选项"},null,8,["modelValue"])])])]),l("section",null,[e[32]||(e[32]=l("h2",{class:"text-xl font-bold mb-4"},"可清除",-1)),a(s(r),{modelValue:d.value,"onUpdate:modelValue":e[11]||(e[11]=o=>d.value=o),options:n,placeholder:"请选择",clearable:""},null,8,["modelValue"])]),l("section",null,[e[33]||(e[33]=l("h2",{class:"text-xl font-bold mb-4"},"可搜索",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[12]||(e[12]=o=>t.value=o),options:n,placeholder:"请选择",filterable:""},null,8,["modelValue"])]),l("section",null,[e[34]||(e[34]=l("h2",{class:"text-xl font-bold mb-4"},"分组选项",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[13]||(e[13]=o=>t.value=o),options:se,placeholder:"请选择"},null,8,["modelValue"])]),l("section",null,[e[35]||(e[35]=l("h2",{class:"text-xl font-bold mb-4"},"带标签",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[14]||(e[14]=o=>t.value=o),options:n,placeholder:"请选择","show-label":"",label:"选择项",required:""},null,8,["modelValue"])]),l("section",null,[e[36]||(e[36]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[15]||(e[15]=o=>t.value=o),options:n,placeholder:"请选择",pt:{trigger:"border-purple-500 focus:border-purple-700 focus:ring-purple-700",dropdown:"border-purple-200 shadow-lg",option:"hover:bg-purple-50",optionSelected:"bg-purple-100 text-purple-800"}},null,8,["modelValue"])]),l("section",null,[e[40]||(e[40]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",be,[l("div",null,[e[37]||(e[37]=l("p",{class:"mb-2"},"自定义边框样式",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[16]||(e[16]=o=>t.value=o),options:n,placeholder:"请选择",unstyled:"",pt:{root:"relative",trigger:"w-full flex items-center justify-between bg-white border-2 border-blue-500 rounded-lg p-2 cursor-pointer",value:"text-gray-800",placeholder:"text-gray-400",dropdown:"absolute w-full mt-1 bg-white border border-blue-300 rounded-lg shadow-lg z-10",option:"p-2 cursor-pointer hover:bg-blue-50",optionSelected:"bg-blue-100 text-blue-800",icon:"text-blue-500"}},null,8,["modelValue"])]),l("div",null,[e[38]||(e[38]=l("p",{class:"mb-2"},"圆角样式",-1)),a(s(r),{modelValue:t.value,"onUpdate:modelValue":e[17]||(e[17]=o=>t.value=o),options:n,placeholder:"请选择",unstyled:"",pt:{root:"relative",trigger:"w-full flex items-center justify-between bg-gray-100 rounded-full p-3 cursor-pointer",value:"text-gray-800",placeholder:"text-gray-500",dropdown:"absolute w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden",option:"p-3 cursor-pointer hover:bg-gray-50",optionSelected:"bg-gray-100",icon:"text-gray-600"}},null,8,["modelValue"])]),l("div",null,[e[39]||(e[39]=l("p",{class:"mb-2"},"多选标签样式",-1)),a(s(r),{modelValue:p.value,"onUpdate:modelValue":e[18]||(e[18]=o=>p.value=o),options:n,placeholder:"请选择",multiple:"",unstyled:"",pt:{root:"relative",trigger:"w-full flex flex-wrap items-center bg-white border-2 border-green-500 rounded-md p-1 cursor-pointer min-h-[42px]",dropdown:"absolute w-full mt-1 bg-white border border-green-300 rounded-md shadow-lg z-10",option:"p-2 cursor-pointer hover:bg-green-50",optionSelected:"bg-green-100 text-green-800",tag:"inline-flex items-center bg-green-100 text-green-800 rounded-full px-2 py-1 text-sm m-1",tagRemove:"ml-1 text-green-600 hover:text-green-800"}},null,8,["modelValue"])])])])]))}}),ye={title:"组件/Select 选择器",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"选择器的值",table:{type:{summary:"string | number | Array<string | number>"}}},options:{control:"object",description:"选项列表",table:{type:{summary:"SelectOption[]"},defaultValue:{summary:"[]"}}},placeholder:{control:"text",description:"占位符",table:{type:{summary:"string"},defaultValue:{summary:"请选择"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},multiple:{control:"boolean",description:"是否多选",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","default","large"],description:"尺寸",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},status:{control:"select",options:["default","success","warning","error"],description:"状态",table:{type:{summary:"string"}}},clearable:{control:"boolean",description:"是否可清除",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},filterable:{control:"boolean",description:"是否可搜索",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showLabel:{control:"boolean",description:"是否显示标签",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:"text",description:"标签文本",table:{type:{summary:"string"}}},required:{control:"boolean",description:"是否必填",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},helpText:{control:"text",description:"帮助文本",table:{type:{summary:"string"}}},errorText:{control:"text",description:"错误文本",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},u=[{value:"option1",label:"选项一"},{value:"option2",label:"选项二"},{value:"option3",label:"选项三"},{value:"option4",label:"选项四"},{value:"option5",label:"选项五"}],i={args:{modelValue:"",options:u,placeholder:"请选择"}},m={args:{modelValue:"",options:u,disabled:!0}},b={args:{modelValue:"option1",options:u,readonly:!0}},g={args:{modelValue:[],options:u,multiple:!0}},c={args:{modelValue:"",options:u,size:"large"}},V={args:{modelValue:"",options:u,status:"error",errorText:"请选择一个选项"}},f={args:{modelValue:"option1",options:u,clearable:!0}},v={args:{modelValue:"",options:u,filterable:!0}},y={args:{modelValue:"",options:u,showLabel:!0,label:"选择项",required:!0}},x={args:{modelValue:"",options:u,pt:{trigger:"border-purple-500 focus:border-purple-700 focus:ring-purple-700",dropdown:"border-purple-200 shadow-lg",option:"hover:bg-purple-50",optionSelected:"bg-purple-100 text-purple-800"}}},w={args:{modelValue:"",options:u,unstyled:!0,pt:{root:"relative",trigger:"w-full flex items-center justify-between bg-white border-2 border-blue-500 rounded-lg p-2 cursor-pointer",value:"text-gray-800",placeholder:"text-gray-400",dropdown:"absolute w-full mt-1 bg-white border border-blue-300 rounded-lg shadow-lg z-10",option:"p-2 cursor-pointer hover:bg-blue-50",optionSelected:"bg-blue-100 text-blue-800",icon:"text-blue-500"}}},S={render:()=>({components:{SelectDemo:ge},template:"<SelectDemo />"})};var O,z,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    placeholder: '请选择'
  }
}`,...(j=(z=i.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var B,D,T;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    disabled: true
  }
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var C,L,q;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: 'option1',
    options: defaultOptions,
    readonly: true
  }
}`,...(q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var E,A,R;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    options: defaultOptions,
    multiple: true
  }
}`,...(R=(A=g.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var k,F,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    size: 'large'
  }
}`,...(M=(F=c.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var N,W,P;V.parameters={...V.parameters,docs:{...(N=V.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    status: 'error',
    errorText: '请选择一个选项'
  }
}`,...(P=(W=V.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,H,I;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: 'option1',
    options: defaultOptions,
    clearable: true
  }
}`,...(I=(H=f.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    filterable: true
  }
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    showLabel: true,
    label: '选择项',
    required: true
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,h,_;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    pt: {
      trigger: 'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
      dropdown: 'border-purple-200 shadow-lg',
      option: 'hover:bg-purple-50',
      optionSelected: 'bg-purple-100 text-purple-800'
    }
  }
}`,...(_=(h=x.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var ee,le,oe;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    options: defaultOptions,
    unstyled: true,
    pt: {
      root: 'relative',
      trigger: 'w-full flex items-center justify-between bg-white border-2 border-blue-500 rounded-lg p-2 cursor-pointer',
      value: 'text-gray-800',
      placeholder: 'text-gray-400',
      dropdown: 'absolute w-full mt-1 bg-white border border-blue-300 rounded-lg shadow-lg z-10',
      option: 'p-2 cursor-pointer hover:bg-blue-50',
      optionSelected: 'bg-blue-100 text-blue-800',
      icon: 'text-blue-500'
    }
  }
}`,...(oe=(le=w.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var te,re,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SelectDemo
    },
    template: '<SelectDemo />'
  })
}`,...(ae=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const xe=["Basic","Disabled","Readonly","Multiple","Sizes","Status","Clearable","Filterable","WithLabel","CustomStyle","Unstyled","AllExamples"];export{S as AllExamples,i as Basic,f as Clearable,x as CustomStyle,m as Disabled,v as Filterable,g as Multiple,b as Readonly,c as Sizes,V as Status,w as Unstyled,y as WithLabel,xe as __namedExportsOrder,ye as default};
