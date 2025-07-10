import{m as o}from"./index.esm-DpKr9oCe.js";/* empty css            */import{d as M,r as f,c as Q,a as l,b as s,u as r,t as R,o as W}from"./iframe-az1hJU6t.js";const X={class:"space-y-8 p-4"},Y={class:"flex items-center gap-4"},Z={class:"flex items-center gap-8"},$={class:"flex items-center gap-4"},_={class:"flex items-center gap-4"},ee={class:"flex items-center gap-8"},le={class:"flex items-center gap-4"},te={class:"flex items-center gap-4"},ae={class:"flex items-center gap-4"},oe={class:"flex flex-wrap items-center gap-8"},se={class:"flex items-center gap-4"},re={class:"flex items-center gap-4"},ne={class:"flex items-center gap-4"},ue={class:"flex items-center gap-4"},de={class:"flex items-center gap-4"},me={class:"flex items-center gap-4"},ie={class:"space-y-4"},pe={class:"flex items-center gap-4"},ce={class:"flex items-center gap-4"},be={class:"flex items-center gap-4"},ge=M({__name:"index",setup(Ve){const n=f(!1),a=f(!0);return(fe,e)=>(W(),Q("div",X,[l("section",null,[e[16]||(e[16]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),l("div",Y,[s(r(o),{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=t=>n.value=t)},null,8,["modelValue"]),l("span",null,R(n.value?"开启":"关闭"),1)])]),l("section",null,[e[17]||(e[17]=l("h2",{class:"text-xl font-bold mb-4"},"选中状态",-1)),s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t)},null,8,["modelValue"])]),l("section",null,[e[20]||(e[20]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),l("div",Z,[l("div",$,[s(r(o),{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),disabled:""},null,8,["modelValue"]),e[18]||(e[18]=l("span",null,"未选中禁用",-1))]),l("div",_,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=t=>a.value=t),disabled:""},null,8,["modelValue"]),e[19]||(e[19]=l("span",null,"选中禁用",-1))])])]),l("section",null,[e[24]||(e[24]=l("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),l("div",ee,[l("div",le,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[4]||(e[4]=t=>a.value=t),size:"small"},null,8,["modelValue"]),e[21]||(e[21]=l("span",null,"小尺寸",-1))]),l("div",te,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[5]||(e[5]=t=>a.value=t),size:"default"},null,8,["modelValue"]),e[22]||(e[22]=l("span",null,"默认尺寸",-1))]),l("div",ae,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[6]||(e[6]=t=>a.value=t),size:"large"},null,8,["modelValue"]),e[23]||(e[23]=l("span",null,"大尺寸",-1))])])]),l("section",null,[e[30]||(e[30]=l("h2",{class:"text-xl font-bold mb-4"},"不同颜色",-1)),l("div",oe,[l("div",se,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[7]||(e[7]=t=>a.value=t),color:"blue"},null,8,["modelValue"]),e[25]||(e[25]=l("span",null,"蓝色",-1))]),l("div",re,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[8]||(e[8]=t=>a.value=t),color:"green"},null,8,["modelValue"]),e[26]||(e[26]=l("span",null,"绿色",-1))]),l("div",ne,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[9]||(e[9]=t=>a.value=t),color:"red"},null,8,["modelValue"]),e[27]||(e[27]=l("span",null,"红色",-1))]),l("div",ue,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[10]||(e[10]=t=>a.value=t),color:"yellow"},null,8,["modelValue"]),e[28]||(e[28]=l("span",null,"黄色",-1))]),l("div",de,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[11]||(e[11]=t=>a.value=t),color:"purple"},null,8,["modelValue"]),e[29]||(e[29]=l("span",null,"紫色",-1))])])]),l("section",null,[e[32]||(e[32]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),l("div",me,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[12]||(e[12]=t=>a.value=t),pt:{track:"bg-purple-200",thumb:"bg-purple-600"}},null,8,["modelValue"]),e[31]||(e[31]=l("span",null,"紫色自定义样式",-1))])]),l("section",null,[e[36]||(e[36]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",ie,[l("div",pe,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[13]||(e[13]=t=>a.value=t),unstyled:"",pt:{root:"inline-block",track:"w-12 h-6 rounded-full bg-gray-300 transition-colors data-[checked=true]:bg-gradient-to-r data-[checked=true]:from-blue-500 data-[checked=true]:to-purple-500",thumb:"block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform data-[checked=true]:translate-x-7"}},null,8,["modelValue"]),e[33]||(e[33]=l("span",null,"渐变色开关",-1))]),l("div",ce,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[14]||(e[14]=t=>a.value=t),unstyled:"",pt:{root:"inline-block",track:"w-14 h-8 rounded-full bg-gray-200 p-1 transition-colors data-[checked=true]:bg-green-500",thumb:"block w-6 h-6 bg-white rounded-full shadow transition-transform data-[checked=true]:translate-x-6"}},null,8,["modelValue"]),e[34]||(e[34]=l("span",null,"大号圆形开关",-1))]),l("div",be,[s(r(o),{modelValue:a.value,"onUpdate:modelValue":e[15]||(e[15]=t=>a.value=t),unstyled:"",pt:{root:"inline-block",track:"w-12 h-6 rounded-sm bg-gray-300 transition-colors data-[checked=true]:bg-blue-500",thumb:"block w-3 h-6 bg-white transition-transform data-[checked=true]:translate-x-9"}},null,8,["modelValue"]),e[35]||(e[35]=l("span",null,"方形开关",-1))])])])]))}}),ye={title:"组件/Switch 开关",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"开关状态值",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","default","large"],description:"开关尺寸",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},color:{control:"select",options:["blue","green","red","yellow","purple"],description:"开关颜色",table:{type:{summary:"string"},defaultValue:{summary:"blue"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},u={args:{modelValue:!1}},d={args:{modelValue:!0}},m={args:{modelValue:!1,disabled:!0}},i={args:{modelValue:!0,disabled:!0}},p={args:{modelValue:!0,size:"large"}},c={args:{modelValue:!0,color:"green"}},b={args:{modelValue:!0,pt:{track:"bg-purple-200",thumb:"bg-purple-600"}}},g={args:{modelValue:!0,unstyled:!0,pt:{root:"inline-block",track:"w-12 h-6 rounded-full bg-gray-300 transition-colors data-[checked=true]:bg-gradient-to-r data-[checked=true]:from-blue-500 data-[checked=true]:to-purple-500",thumb:"block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform data-[checked=true]:translate-x-7"}}},V={render:()=>({components:{SwitchDemo:ge},template:"<SwitchDemo />"})};var v,x,k;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: false
  }
}`,...(k=(x=u.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var y,w,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var U,z,C;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    modelValue: false,
    disabled: true
  }
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var D,h,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    disabled: true
  }
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var E,j,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    size: 'large'
  }
}`,...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var N,T,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    color: 'green'
  }
}`,...(O=(T=c.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,q,F;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    pt: {
      track: 'bg-purple-200',
      thumb: 'bg-purple-600'
    }
  }
}`,...(F=(q=b.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,H,I;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    modelValue: true,
    unstyled: true,
    pt: {
      root: 'inline-block',
      track: 'w-12 h-6 rounded-full bg-gray-300 transition-colors data-[checked=true]:bg-gradient-to-r data-[checked=true]:from-blue-500 data-[checked=true]:to-purple-500',
      thumb: 'block w-4 h-4 bg-white rounded-full shadow transform translate-x-1 transition-transform data-[checked=true]:translate-x-7'
    }
  }
}`,...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SwitchDemo
    },
    template: '<SwitchDemo />'
  })
}`,...(L=(K=V.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const we=["Basic","Checked","Disabled","DisabledChecked","Sizes","Colors","CustomStyle","Unstyled","AllExamples"];export{V as AllExamples,u as Basic,d as Checked,c as Colors,b as CustomStyle,m as Disabled,i as DisabledChecked,p as Sizes,g as Unstyled,we as __namedExportsOrder,ye as default};
