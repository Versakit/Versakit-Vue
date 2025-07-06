import{Q as o}from"./vue-Dm0n5KI8.js";import{d as le,r as u,c as te,a as l,b as r,u as a,t as S,o as oe}from"./iframe-Cj5Dj2mf.js";const re={class:"space-y-8 p-4"},ae={class:"mb-2"},se={class:"mb-2"},ne={style:{height:"200px"}},ue={class:"space-y-8"},de=le({__name:"index",setup(w){const s=u(50),V=u(25),v=u(20),h=u(50),k=u(50),n=u(50);return(me,e)=>(oe(),te("div",re,[l("section",null,[e[11]||(e[11]=l("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),r(a(o),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t)},null,8,["modelValue"])]),l("section",null,[e[12]||(e[12]=l("h2",{class:"text-xl font-bold mb-4"},"设置最小值和最大值",-1)),l("div",null,[l("p",ae,"范围：0-50，当前值："+S(V.value),1),r(a(o),{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=t=>V.value=t),min:0,max:50},null,8,["modelValue"])])]),l("section",null,[e[13]||(e[13]=l("h2",{class:"text-xl font-bold mb-4"},"设置步长",-1)),l("div",null,[l("p",se,"步长：10，当前值："+S(v.value),1),r(a(o),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value=t),step:10},null,8,["modelValue"])])]),l("section",null,[e[14]||(e[14]=l("h2",{class:"text-xl font-bold mb-4"},"垂直方向",-1)),l("div",ne,[r(a(o),{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=t=>h.value=t),orientation:"vertical"},null,8,["modelValue"])])]),l("section",null,[e[15]||(e[15]=l("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),r(a(o),{modelValue:s.value,"onUpdate:modelValue":e[4]||(e[4]=t=>s.value=t),disabled:""},null,8,["modelValue"])]),l("section",null,[e[16]||(e[16]=l("h2",{class:"text-xl font-bold mb-4"},"显示提示",-1)),r(a(o),{modelValue:s.value,"onUpdate:modelValue":e[5]||(e[5]=t=>s.value=t),"show-tooltip":!0},null,8,["modelValue"])]),l("section",null,[e[17]||(e[17]=l("h2",{class:"text-xl font-bold mb-4"},"显示刻度",-1)),r(a(o),{modelValue:k.value,"onUpdate:modelValue":e[6]||(e[6]=t=>k.value=t),"show-marks":!0,marks:{0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"}},null,8,["modelValue"])]),l("section",null,[e[18]||(e[18]=l("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),r(a(o),{modelValue:s.value,"onUpdate:modelValue":e[7]||(e[7]=t=>s.value=t),"show-tooltip":!0,pt:{track:"bg-purple-200",fill:"bg-purple-600",thumb:"border-purple-600",tooltip:"bg-purple-600"}},null,8,["modelValue"])]),l("section",null,[e[22]||(e[22]=l("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),l("div",ue,[l("div",null,[e[19]||(e[19]=l("p",{class:"mb-2"},"渐变样式",-1)),r(a(o),{modelValue:n.value,"onUpdate:modelValue":e[8]||(e[8]=t=>n.value=t),"show-tooltip":!0,"show-marks":!0,marks:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},unstyled:"",pt:{container:"relative py-6",track:"h-2 bg-gray-200 rounded-full",fill:"absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",thumb:"absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",tooltip:"absolute bottom-full mb-2 -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap",marks:"absolute w-full",mark:"absolute w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2",markLabel:"absolute mt-2 text-xs text-gray-500 -translate-x-1/2"}},null,8,["modelValue"])]),l("div",null,[e[20]||(e[20]=l("p",{class:"mb-2"},"圆角样式",-1)),r(a(o),{modelValue:n.value,"onUpdate:modelValue":e[9]||(e[9]=t=>n.value=t),"show-tooltip":!0,unstyled:"",pt:{container:"relative py-8",track:"h-4 bg-gray-100 rounded-full",fill:"absolute h-4 bg-green-500 rounded-full",thumb:"absolute w-6 h-6 bg-white border-4 border-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-green-300",tooltip:"absolute bottom-full mb-3 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-md text-sm whitespace-nowrap"}},null,8,["modelValue"])]),l("div",null,[e[21]||(e[21]=l("p",{class:"mb-2"},"方形样式",-1)),r(a(o),{modelValue:n.value,"onUpdate:modelValue":e[10]||(e[10]=t=>n.value=t),"show-tooltip":!0,unstyled:"",pt:{container:"relative py-6",track:"h-2 bg-gray-300",fill:"absolute h-2 bg-blue-600",thumb:"absolute w-4 h-4 bg-blue-600 -translate-x-1/2 -translate-y-1/2 focus:outline-none",tooltip:"absolute bottom-full mb-2 -translate-x-1/2 bg-blue-600 text-white px-2 py-1 text-xs whitespace-nowrap"}},null,8,["modelValue"])])])])]))}}),be={title:"组件/Slider 滑块",component:o,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"滑块的值",table:{type:{summary:"number"}}},min:{control:"number",description:"最小值",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},max:{control:"number",description:"最大值",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},step:{control:"number",description:"步长",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"方向",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showTooltip:{control:"boolean",description:"是否显示提示",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showMarks:{control:"boolean",description:"是否显示刻度",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},marks:{control:"object",description:"刻度标记",table:{type:{summary:"Record<number, string>"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},d={args:{modelValue:50}},m={args:{modelValue:25,min:0,max:50}},p={args:{modelValue:20,step:10}},i={args:{modelValue:50,orientation:"vertical"},render:w=>({components:{Slider:o},setup(){return{args:w}},template:'<div style="height: 200px;"><Slider v-bind="args" /></div>'})},b={args:{modelValue:50,disabled:!0}},c={args:{modelValue:50,showTooltip:!0}},g={args:{modelValue:50,showMarks:!0,marks:{0:"0°C",25:"25°C",50:"50°C",75:"75°C",100:"100°C"}}},f={args:{modelValue:50,showTooltip:!0,pt:{track:"bg-purple-200",fill:"bg-purple-600",thumb:"border-purple-600",tooltip:"bg-purple-600"}}},x={args:{modelValue:50,showTooltip:!0,showMarks:!0,marks:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},unstyled:!0,pt:{container:"relative py-6",track:"h-2 bg-gray-200 rounded-full",fill:"absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full",thumb:"absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50",tooltip:"absolute bottom-full mb-2 -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap",marks:"absolute w-full",mark:"absolute w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2",markLabel:"absolute mt-2 text-xs text-gray-500 -translate-x-1/2"}}},y={render:()=>({components:{SliderDemo:de},template:"<SliderDemo />"})};var C,U,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: 50
  }
}`,...(M=(U=d.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var T,D,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    modelValue: 25,
    min: 0,
    max: 50
  }
}`,...(B=(D=m.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var E,W,j;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    modelValue: 20,
    step: 10
  }
}`,...(j=(W=p.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var L,z,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    orientation: 'vertical'
  },
  render: args => ({
    components: {
      Slider
    },
    setup() {
      return {
        args
      };
    },
    template: '<div style="height: 200px;"><Slider v-bind="args" /></div>'
  })
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var N,Q,O;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    disabled: true
  }
}`,...(O=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:O.source}}};var P,R,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    showTooltip: true
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,G,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    showMarks: true,
    marks: {
      0: '0°C',
      25: '25°C',
      50: '50°C',
      75: '75°C',
      100: '100°C'
    }
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    showTooltip: true,
    pt: {
      track: 'bg-purple-200',
      fill: 'bg-purple-600',
      thumb: 'border-purple-600',
      tooltip: 'bg-purple-600'
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    modelValue: 50,
    showTooltip: true,
    showMarks: true,
    marks: {
      0: '0%',
      25: '25%',
      50: '50%',
      75: '75%',
      100: '100%'
    },
    unstyled: true,
    pt: {
      container: 'relative py-6',
      track: 'h-2 bg-gray-200 rounded-full',
      fill: 'absolute h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full',
      thumb: 'absolute w-5 h-5 bg-white border-2 border-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50',
      tooltip: 'absolute bottom-full mb-2 -translate-x-1/2 bg-purple-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap',
      marks: 'absolute w-full',
      mark: 'absolute w-1 h-1 bg-gray-400 rounded-full -translate-x-1/2',
      markLabel: 'absolute mt-2 text-xs text-gray-500 -translate-x-1/2'
    }
  }
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,_,ee;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SliderDemo
    },
    template: '<SliderDemo />'
  })
}`,...(ee=(_=y.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};const ce=["Basic","MinMax","Step","Vertical","Disabled","WithTooltip","WithMarks","CustomStyle","Unstyled","AllExamples"];export{y as AllExamples,d as Basic,f as CustomStyle,b as Disabled,m as MinMax,p as Step,x as Unstyled,i as Vertical,g as WithMarks,c as WithTooltip,ce as __namedExportsOrder,be as default};
