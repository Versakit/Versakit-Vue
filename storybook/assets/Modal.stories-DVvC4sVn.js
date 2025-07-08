import{T as r,f as u}from"./vue-C2ZjOHhi.js";import"./iframe-DwJfJu0i.js";const V={title:"组件/Modal 模态框",component:r,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"控制模态框的显示状态",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{control:"text",description:"模态框标题",table:{type:{summary:"string"}}},size:{control:"select",options:["sm","md","lg","xl","2xl","3xl","4xl","5xl","full"],description:"模态框尺寸",table:{type:{summary:"string"},defaultValue:{summary:"lg"}}},closeOnEsc:{control:"boolean",description:"是否按ESC键关闭",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnOverlayClick:{control:"boolean",description:"是否点击遮罩层关闭",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},hideCloseButton:{control:"boolean",description:"是否隐藏关闭按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},t={render:e=>({components:{Modal:r,Button:u},setup(){return{args:e}},template:`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个基础的模态框内容
        </Modal>
      </div>
    `}),args:{modelValue:!1,title:"基础模态框"}},o={render:e=>({components:{Modal:r,Button:u},setup(){return{args:e}},template:`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个自定义尺寸的模态框内容
        </Modal>
      </div>
    `}),args:{modelValue:!1,title:"自定义尺寸",size:"xl"}},l={render:e=>({components:{Modal:r,Button:u},setup(){return{args:e}},template:`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个使用pt属性自定义样式的模态框内容
        </Modal>
      </div>
    `}),args:{modelValue:!1,title:"自定义样式",pt:{overlay:"bg-blue-900/50 backdrop-blur-md",content:"border-2 border-blue-500",header:"bg-blue-50 dark:bg-blue-900",title:"text-blue-700 dark:text-blue-300",body:"bg-white dark:bg-gray-800 p-6",footer:"bg-blue-50 dark:bg-blue-900",closeButton:"text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800"}}},a={render:e=>({components:{Modal:r,Button:u},setup(){return{args:e}},template:`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个使用unstyled属性移除所有默认样式的模态框内容
        </Modal>
      </div>
    `}),args:{modelValue:!1,title:"无样式模式",unstyled:!0,pt:{overlay:"fixed inset-0 bg-gradient-to-r from-purple-500/70 to-blue-500/70 backdrop-blur-sm z-40 flex items-center justify-center",content:"bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 border border-purple-300 dark:border-purple-800",header:"px-6 py-4 border-b border-purple-200 dark:border-purple-800 flex items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900",title:"text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400",body:"p-6 text-gray-700 dark:text-gray-300",footer:"px-6 py-4 border-t border-purple-200 dark:border-purple-800 flex justify-end space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900",closeButton:"p-1 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-600 dark:text-purple-400"}}};var d,n,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个基础的模态框内容
        </Modal>
      </div>
    \`
  }),
  args: {
    modelValue: false,
    title: '基础模态框'
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,b,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个自定义尺寸的模态框内容
        </Modal>
      </div>
    \`
  }),
  args: {
    modelValue: false,
    title: '自定义尺寸',
    size: 'xl'
  }
}`,...(m=(b=o.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var i,g,c;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个使用pt属性自定义样式的模态框内容
        </Modal>
      </div>
    \`
  }),
  args: {
    modelValue: false,
    title: '自定义样式',
    pt: {
      overlay: 'bg-blue-900/50 backdrop-blur-md',
      content: 'border-2 border-blue-500',
      header: 'bg-blue-50 dark:bg-blue-900',
      title: 'text-blue-700 dark:text-blue-300',
      body: 'bg-white dark:bg-gray-800 p-6',
      footer: 'bg-blue-50 dark:bg-blue-900',
      closeButton: 'text-blue-700 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-800'
    }
  }
}`,...(c=(g=l.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var f,y,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Modal,
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <Button @click="args.modelValue = true">打开模态框</Button>
        <Modal v-bind="args" v-model="args.modelValue">
          这是一个使用unstyled属性移除所有默认样式的模态框内容
        </Modal>
      </div>
    \`
  }),
  args: {
    modelValue: false,
    title: '无样式模式',
    unstyled: true,
    pt: {
      overlay: 'fixed inset-0 bg-gradient-to-r from-purple-500/70 to-blue-500/70 backdrop-blur-sm z-40 flex items-center justify-center',
      content: 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 border border-purple-300 dark:border-purple-800',
      header: 'px-6 py-4 border-b border-purple-200 dark:border-purple-800 flex items-center justify-between bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900',
      title: 'text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400',
      body: 'p-6 text-gray-700 dark:text-gray-300',
      footer: 'px-6 py-4 border-t border-purple-200 dark:border-purple-800 flex justify-end space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900',
      closeButton: 'p-1 rounded-full hover:bg-purple-100 dark:hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400 text-purple-600 dark:text-purple-400'
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const B=["Basic","Sizes","CustomStyle","Unstyled"];export{t as Basic,l as CustomStyle,o as Sizes,a as Unstyled,B as __namedExportsOrder,V as default};
