import{q as a}from"./index.esm-CnAUA7e5.js";/* empty css            */import{d as Q,r as X,c as Z,a as e,b as s,u as o,o as $}from"./iframe-D_45vict.js";const ee={class:"space-y-8 p-4"},ne={class:"w-full max-w-md"},ae={class:"w-full max-w-md"},te={class:"w-full max-w-md"},re={class:"w-full max-w-md"},oe={class:"w-full max-w-md"},se={class:"w-full max-w-md"},de={class:"w-full max-w-md"},le={class:"w-full max-w-md"},ie={class:"w-full max-w-md"},me=Q({__name:"index",setup(t){const r=new Date,d=new Date;d.setDate(r.getDate()+7);const w=X([r,d]);return(ue,n)=>($(),Z("div",ee,[e("section",null,[n[1]||(n[1]=e("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),e("div",ne,[s(o(a))])]),e("section",null,[n[2]||(n[2]=e("h2",{class:"text-xl font-bold mb-4"},"默认选中日期",-1)),e("div",ae,[s(o(a),{modelValue:w.value,"onUpdate:modelValue":n[0]||(n[0]=P=>w.value=P)},null,8,["modelValue"])])]),e("section",null,[n[3]||(n[3]=e("h2",{class:"text-xl font-bold mb-4"},"日期范围限制",-1)),e("div",te,[s(o(a),{min:o(r),max:new Date(o(r).getFullYear(),o(r).getMonth()+1,o(r).getDate())},null,8,["min","max"])])]),e("section",null,[n[4]||(n[4]=e("h2",{class:"text-xl font-bold mb-4"},"禁用状态",-1)),e("div",re,[s(o(a),{disabled:""})])]),e("section",null,[n[5]||(n[5]=e("h2",{class:"text-xl font-bold mb-4"},"只读状态",-1)),e("div",oe,[s(o(a),{readonly:"","model-value":w.value},null,8,["model-value"])])]),e("section",null,[n[6]||(n[6]=e("h2",{class:"text-xl font-bold mb-4"},"周一作为一周的第一天",-1)),e("div",se,[s(o(a),{"first-day-of-week":1})])]),e("section",null,[n[7]||(n[7]=e("h2",{class:"text-xl font-bold mb-4"},"本地化设置",-1)),e("div",de,[s(o(a),{locale:"zh-CN"})])]),e("section",null,[n[8]||(n[8]=e("h2",{class:"text-xl font-bold mb-4"},"自定义样式",-1)),e("div",le,[s(o(a),{pt:{root:"bg-gray-50 p-4 rounded-lg shadow",header:"bg-blue-50 p-2 rounded mb-2",title:"text-blue-700 font-bold",day:"hover:bg-blue-50",inRange:"bg-blue-50",rangeStart:"bg-blue-600 text-white",rangeEnd:"bg-blue-600 text-white"}})])]),e("section",null,[n[9]||(n[9]=e("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),e("div",ie,[s(o(a),{unstyled:"",pt:{root:"bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg",header:"flex items-center justify-between mb-6",title:"text-xl text-indigo-700 font-bold",navigation:"flex space-x-2",navButton:"p-2 rounded-full hover:bg-indigo-100 text-indigo-600",weekdays:"grid grid-cols-7 mb-2",weekday:"text-center text-sm font-medium text-indigo-400 py-2",days:"grid grid-cols-7 gap-1",day:"flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors hover:bg-indigo-100",today:"border border-indigo-300",inRange:"bg-indigo-100",rangeStart:"bg-indigo-600 text-white",rangeEnd:"bg-indigo-600 text-white"}})])])]))}}),be={title:"组件/RangeCalendar 日期范围选择器",component:a,tags:["autodocs"],argTypes:{modelValue:{control:"object",description:"选中的日期范围",table:{type:{summary:"[Date | null, Date | null]"},defaultValue:{summary:"[null, null]"}}},min:{control:"date",description:"最小可选日期",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},max:{control:"date",description:"最大可选日期",table:{type:{summary:"Date"},defaultValue:{summary:"undefined"}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},firstDayOfWeek:{control:"select",options:[0,1,2,3,4,5,6],description:"一周的第一天，0表示周日，1表示周一",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},locale:{control:"text",description:"本地化设置",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},unstyled:{control:"boolean",description:"是否禁用默认样式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},l={render:t=>({components:{RangeCalendar:a},setup(){return{args:t}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `})},i={render:()=>({components:{RangeCalendar:a},setup(){const t=new Date,r=new Date;return r.setDate(t.getDate()+7),{defaultRange:[t,r]}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar :model-value="defaultRange" />
      </div>
    `})},m={render:()=>({components:{RangeCalendar:a},setup(){const t=new Date,r=new Date,d=new Date;return r.setDate(t.getDate()),d.setDate(t.getDate()+30),{minDate:r,maxDate:d}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar :min="minDate" :max="maxDate" />
      </div>
    `})},u={args:{disabled:!0},render:t=>({components:{RangeCalendar:a},setup(){return{args:t}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `})},g={args:{readonly:!0},render:t=>({components:{RangeCalendar:a},setup(){const r=new Date,d=new Date;return d.setDate(r.getDate()+7),{args:t,defaultRange:[r,d]}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" :model-value="defaultRange" />
      </div>
    `})},c={args:{firstDayOfWeek:1},render:t=>({components:{RangeCalendar:a},setup(){return{args:t}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `})},p={args:{locale:"zh-CN"},render:t=>({components:{RangeCalendar:a},setup(){return{args:t}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    `})},b={render:()=>({components:{RangeCalendar:a},template:`
      <div class="w-full max-w-md">
        <RangeCalendar :pt="{
          root: 'bg-gray-50 p-4 rounded-lg shadow',
          header: 'bg-blue-50 p-2 rounded mb-2',
          title: 'text-blue-700 font-bold',
          day: 'hover:bg-blue-50',
          inRange: 'bg-blue-50',
          rangeStart: 'bg-blue-600 text-white',
          rangeEnd: 'bg-blue-600 text-white'
        }" />
      </div>
    `})},x={args:{unstyled:!0},render:t=>({components:{RangeCalendar:a},setup(){return{args:t}},template:`
      <div class="w-full max-w-md">
        <RangeCalendar
          v-bind="args"
          :pt="{
            root: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg',
            header: 'flex items-center justify-between mb-6',
            title: 'text-xl text-indigo-700 font-bold',
            navigation: 'flex space-x-2',
            navButton: 'p-2 rounded-full hover:bg-indigo-100 text-indigo-600',
            weekdays: 'grid grid-cols-7 mb-2',
            weekday: 'text-center text-sm font-medium text-indigo-400 py-2',
            days: 'grid grid-cols-7 gap-1',
            day: 'flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors hover:bg-indigo-100',
            today: 'border border-indigo-300',
            inRange: 'bg-indigo-100',
            rangeStart: 'bg-indigo-600 text-white',
            rangeEnd: 'bg-indigo-600 text-white'
          }"
        />
      </div>
    `})},f={render:()=>({components:{RangeCalendarDemo:me},template:"<RangeCalendarDemo />"})};var y,v,D;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    \`
  })
}`,...(D=(v=l.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var R,C,h;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RangeCalendar
    },
    setup() {
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);
      return {
        defaultRange: [today, nextWeek]
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar :model-value="defaultRange" />
      </div>
    \`
  })
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var k,S,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RangeCalendar
    },
    setup() {
      const today = new Date();
      const minDate = new Date();
      const maxDate = new Date();

      // 设置最小日期为今天
      minDate.setDate(today.getDate());

      // 设置最大日期为30天后
      maxDate.setDate(today.getDate() + 30);
      return {
        minDate,
        maxDate
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar :min="minDate" :max="maxDate" />
      </div>
    \`
  })
}`,...(V=(S=m.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var W,E,_;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    \`
  })
}`,...(_=(E=u.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var j,B,M;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    readonly: true
  },
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(today.getDate() + 7);
      return {
        args,
        defaultRange: [today, nextWeek]
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" :model-value="defaultRange" />
      </div>
    \`
  })
}`,...(M=(B=g.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,N,O;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    firstDayOfWeek: 1
  },
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    \`
  })
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var F,U,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    locale: 'zh-CN'
  },
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar v-bind="args" />
      </div>
    \`
  })
}`,...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var A,L,T;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RangeCalendar
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar :pt="{
          root: 'bg-gray-50 p-4 rounded-lg shadow',
          header: 'bg-blue-50 p-2 rounded mb-2',
          title: 'text-blue-700 font-bold',
          day: 'hover:bg-blue-50',
          inRange: 'bg-blue-50',
          rangeStart: 'bg-blue-600 text-white',
          rangeEnd: 'bg-blue-600 text-white'
        }" />
      </div>
    \`
  })
}`,...(T=(L=b.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var Y,G,H;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    unstyled: true
  },
  render: args => ({
    components: {
      RangeCalendar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="w-full max-w-md">
        <RangeCalendar
          v-bind="args"
          :pt="{
            root: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg',
            header: 'flex items-center justify-between mb-6',
            title: 'text-xl text-indigo-700 font-bold',
            navigation: 'flex space-x-2',
            navButton: 'p-2 rounded-full hover:bg-indigo-100 text-indigo-600',
            weekdays: 'grid grid-cols-7 mb-2',
            weekday: 'text-center text-sm font-medium text-indigo-400 py-2',
            days: 'grid grid-cols-7 gap-1',
            day: 'flex items-center justify-center h-10 w-10 rounded-full text-sm transition-colors hover:bg-indigo-100',
            today: 'border border-indigo-300',
            inRange: 'bg-indigo-100',
            rangeStart: 'bg-indigo-600 text-white',
            rangeEnd: 'bg-indigo-600 text-white'
          }"
        />
      </div>
    \`
  })
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RangeCalendarDemo
    },
    template: '<RangeCalendarDemo />'
  })
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Basic","DefaultSelected","MinMaxDates","Disabled","Readonly","MondayFirstDay","Localization","CustomStyle","Unstyled","AllExamples"];export{f as AllExamples,l as Basic,b as CustomStyle,i as DefaultSelected,u as Disabled,p as Localization,m as MinMaxDates,c as MondayFirstDay,g as Readonly,x as Unstyled,xe as __namedExportsOrder,be as default};
