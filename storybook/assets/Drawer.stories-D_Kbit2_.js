import{$ as l}from"./vue-CAs37nm3.js";import{d as q,r,c as F,a as t,b as a,w as o,u,o as G}from"./iframe-QOevmNWR.js";const H={class:"space-y-8 p-4"},J={class:"flex flex-wrap gap-2"},K={class:"flex flex-wrap gap-2"},Q={class:"p-4 border-t border-white/20 flex justify-end"},W=q({__name:"index",setup(X){const w=r(!1),f=r(!1),c=r(!1),y=r(!1),g=r(!1),v=r(!1),D=r(!1),V=r(!1),k=r(!1),p=r(!1);return(Y,e)=>(G(),F("div",H,[t("section",null,[e[22]||(e[22]=t("h2",{class:"text-xl font-bold mb-4"},"基础用法",-1)),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[0]||(e[0]=n=>w.value=!0)}," 打开基础抽屉 "),a(u(l),{modelValue:w.value,"onUpdate:modelValue":e[1]||(e[1]=n=>w.value=n),title:"基础抽屉"},{default:o(()=>e[21]||(e[21]=[t("p",null,"这是一个基础抽屉的内容。",-1),t("p",{class:"mt-4"},"您可以在这里放置任何内容。",-1)])),_:1,__:[21]},8,["modelValue"])]),t("section",null,[e[27]||(e[27]=t("h2",{class:"text-xl font-bold mb-4"},"不同位置",-1)),t("div",J,[t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[2]||(e[2]=n=>f.value=!0)}," 左侧抽屉 "),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[3]||(e[3]=n=>c.value=!0)}," 右侧抽屉 "),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[4]||(e[4]=n=>y.value=!0)}," 顶部抽屉 "),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[5]||(e[5]=n=>g.value=!0)}," 底部抽屉 ")]),a(u(l),{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=n=>f.value=n),title:"左侧抽屉",placement:"left"},{default:o(()=>e[23]||(e[23]=[t("p",null,"这是一个左侧抽屉。",-1)])),_:1,__:[23]},8,["modelValue"]),a(u(l),{modelValue:c.value,"onUpdate:modelValue":e[7]||(e[7]=n=>c.value=n),title:"右侧抽屉",placement:"right"},{default:o(()=>e[24]||(e[24]=[t("p",null,"这是一个右侧抽屉。",-1)])),_:1,__:[24]},8,["modelValue"]),a(u(l),{modelValue:y.value,"onUpdate:modelValue":e[8]||(e[8]=n=>y.value=n),title:"顶部抽屉",placement:"top"},{default:o(()=>e[25]||(e[25]=[t("p",null,"这是一个顶部抽屉。",-1)])),_:1,__:[25]},8,["modelValue"]),a(u(l),{modelValue:g.value,"onUpdate:modelValue":e[9]||(e[9]=n=>g.value=n),title:"底部抽屉",placement:"bottom"},{default:o(()=>e[26]||(e[26]=[t("p",null,"这是一个底部抽屉。",-1)])),_:1,__:[26]},8,["modelValue"])]),t("section",null,[e[31]||(e[31]=t("h2",{class:"text-xl font-bold mb-4"},"不同尺寸",-1)),t("div",K,[t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[10]||(e[10]=n=>v.value=!0)}," 小尺寸抽屉 "),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[11]||(e[11]=n=>D.value=!0)}," 中等尺寸抽屉 "),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[12]||(e[12]=n=>V.value=!0)}," 大尺寸抽屉 ")]),a(u(l),{modelValue:v.value,"onUpdate:modelValue":e[13]||(e[13]=n=>v.value=n),title:"小尺寸抽屉",size:"20%"},{default:o(()=>e[28]||(e[28]=[t("p",null,"这是一个小尺寸抽屉。",-1)])),_:1,__:[28]},8,["modelValue"]),a(u(l),{modelValue:D.value,"onUpdate:modelValue":e[14]||(e[14]=n=>D.value=n),title:"中等尺寸抽屉",size:"50%"},{default:o(()=>e[29]||(e[29]=[t("p",null,"这是一个中等尺寸抽屉。",-1)])),_:1,__:[29]},8,["modelValue"]),a(u(l),{modelValue:V.value,"onUpdate:modelValue":e[15]||(e[15]=n=>V.value=n),title:"大尺寸抽屉",size:"80%"},{default:o(()=>e[30]||(e[30]=[t("p",null,"这是一个大尺寸抽屉。",-1)])),_:1,__:[30]},8,["modelValue"])]),t("section",null,[e[33]||(e[33]=t("h2",{class:"text-xl font-bold mb-4"},"自定义样式 (PT)",-1)),t("button",{class:"px-4 py-2 bg-blue-500 text-white rounded",onClick:e[16]||(e[16]=n=>k.value=!0)}," 自定义样式抽屉 "),a(u(l),{modelValue:k.value,"onUpdate:modelValue":e[17]||(e[17]=n=>k.value=n),title:"自定义样式抽屉",pt:{overlay:"bg-black/50",container:"bg-gray-100 shadow-lg",header:"bg-blue-500 text-white p-4",title:"text-lg font-bold",closeButton:"text-white hover:text-gray-200",body:"p-6"}},{default:o(()=>e[32]||(e[32]=[t("p",null,"这是一个使用 pt 属性自定义样式的抽屉。",-1),t("p",{class:"mt-4"},"您可以自定义抽屉的各个部分的样式。",-1)])),_:1,__:[32]},8,["modelValue"])]),t("section",null,[e[36]||(e[36]=t("h2",{class:"text-xl font-bold mb-4"},"无样式模式",-1)),t("button",{class:"px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded",onClick:e[18]||(e[18]=n=>p.value=!0)}," 无样式模式抽屉 "),a(u(l),{modelValue:p.value,"onUpdate:modelValue":e[20]||(e[20]=n=>p.value=n),title:"无样式模式抽屉",unstyled:"",pt:{overlay:"fixed inset-0 bg-black/70 z-50",container:"fixed bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl z-50 transition-transform duration-300",header:"flex justify-between items-center p-4 border-b border-white/20",title:"text-xl font-bold",closeButton:"text-white hover:text-gray-200 text-2xl",body:"p-6"}},{footer:o(()=>[t("div",Q,[t("button",{class:"px-4 py-2 bg-white text-purple-700 rounded",onClick:e[19]||(e[19]=n=>p.value=!1)}," 关闭 ")])]),default:o(()=>[e[34]||(e[34]=t("p",null,"这是一个使用 unstyled 属性和 pt 属性创建的完全自定义抽屉。",-1)),e[35]||(e[35]=t("p",{class:"mt-4"},"您可以完全控制抽屉的样式和行为。",-1))]),_:1,__:[34,35]},8,["modelValue"])])]))}}),ee={title:"组件/Drawer 抽屉",component:l,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"控制抽屉是否显示",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placement:{control:"select",options:["left","right","top","bottom"],description:"抽屉的位置",table:{type:{summary:"string"},defaultValue:{summary:"right"}}},size:{control:"text",description:"抽屉的尺寸",table:{type:{summary:"string | number"},defaultValue:{summary:"30%"}}},showOverlay:{control:"boolean",description:"是否显示遮罩层",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnEsc:{control:"boolean",description:"是否按ESC键关闭",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},closeOnOverlayClick:{control:"boolean",description:"是否点击遮罩层关闭",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},preventScroll:{control:"boolean",description:"是否阻止滚动",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},zIndex:{control:"number",description:"z-index值",table:{type:{summary:"number"},defaultValue:{summary:"1000"}}},title:{control:"text",description:"抽屉标题",table:{type:{summary:"string"}}},hideCloseButton:{control:"boolean",description:"是否隐藏关闭按钮",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},s={render:()=>({components:{Drawer:l},template:`
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          打开抽屉
        </button>
        
        <Drawer v-model="open" title="基础抽屉">
          <p>这是一个基础抽屉的内容。</p>
        </Drawer>
      </div>
    `,data(){return{open:!1}}})},d={render:()=>({components:{Drawer:l},template:`
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLeft = true"
        >
          左侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openRight = true"
        >
          右侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openTop = true"
        >
          顶部抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openBottom = true"
        >
          底部抽屉
        </button>
        
        <Drawer v-model="openLeft" title="左侧抽屉" placement="left">
          <p>这是一个左侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openRight" title="右侧抽屉" placement="right">
          <p>这是一个右侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openTop" title="顶部抽屉" placement="top">
          <p>这是一个顶部抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openBottom" title="底部抽屉" placement="bottom">
          <p>这是一个底部抽屉。</p>
        </Drawer>
      </div>
    `,data(){return{openLeft:!1,openRight:!1,openTop:!1,openBottom:!1}}})},i={render:()=>({components:{Drawer:l},template:`
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openSmall = true"
        >
          小尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openMedium = true"
        >
          中等尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLarge = true"
        >
          大尺寸抽屉
        </button>
        
        <Drawer v-model="openSmall" title="小尺寸抽屉" size="20%">
          <p>这是一个小尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openMedium" title="中等尺寸抽屉" size="50%">
          <p>这是一个中等尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openLarge" title="大尺寸抽屉" size="80%">
          <p>这是一个大尺寸抽屉。</p>
        </Drawer>
      </div>
    `,data(){return{openSmall:!1,openMedium:!1,openLarge:!1}}})},m={render:()=>({components:{Drawer:l},template:`
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          自定义样式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="自定义样式抽屉"
          :pt="{
            overlay: 'bg-black/50',
            container: 'bg-gray-100 shadow-lg',
            header: 'bg-blue-500 text-white p-4',
            title: 'text-lg font-bold',
            closeButton: 'text-white hover:text-gray-200',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 pt 属性自定义样式的抽屉。</p>
        </Drawer>
      </div>
    `,data(){return{open:!1}}})},b={render:()=>({components:{Drawer:l},template:`
      <div>
        <button 
          class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
          @click="open = true"
        >
          无样式模式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="无样式模式抽屉"
          unstyled
          :pt="{
            overlay: 'fixed inset-0 bg-black/70 z-50',
            container: 'fixed bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl z-50 transition-transform duration-300',
            header: 'flex justify-between items-center p-4 border-b border-white/20',
            title: 'text-xl font-bold',
            closeButton: 'text-white hover:text-gray-200 text-2xl',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义抽屉。</p>
        </Drawer>
      </div>
    `,data(){return{open:!1}}})},x={render:()=>({components:{DrawerDemo:W},template:"<DrawerDemo />"})};var z,B,C;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          打开抽屉
        </button>
        
        <Drawer v-model="open" title="基础抽屉">
          <p>这是一个基础抽屉的内容。</p>
        </Drawer>
      </div>
    \`,
    data() {
      return {
        open: false
      };
    }
  })
}`,...(C=(B=s.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var S,h,$;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLeft = true"
        >
          左侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openRight = true"
        >
          右侧抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openTop = true"
        >
          顶部抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openBottom = true"
        >
          底部抽屉
        </button>
        
        <Drawer v-model="openLeft" title="左侧抽屉" placement="left">
          <p>这是一个左侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openRight" title="右侧抽屉" placement="right">
          <p>这是一个右侧抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openTop" title="顶部抽屉" placement="top">
          <p>这是一个顶部抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openBottom" title="底部抽屉" placement="bottom">
          <p>这是一个底部抽屉。</p>
        </Drawer>
      </div>
    \`,
    data() {
      return {
        openLeft: false,
        openRight: false,
        openTop: false,
        openBottom: false
      };
    }
  })
}`,...($=(h=d.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};var L,U,T;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div class="flex flex-wrap gap-2">
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openSmall = true"
        >
          小尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openMedium = true"
        >
          中等尺寸抽屉
        </button>
        
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="openLarge = true"
        >
          大尺寸抽屉
        </button>
        
        <Drawer v-model="openSmall" title="小尺寸抽屉" size="20%">
          <p>这是一个小尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openMedium" title="中等尺寸抽屉" size="50%">
          <p>这是一个中等尺寸抽屉。</p>
        </Drawer>
        
        <Drawer v-model="openLarge" title="大尺寸抽屉" size="80%">
          <p>这是一个大尺寸抽屉。</p>
        </Drawer>
      </div>
    \`,
    data() {
      return {
        openSmall: false,
        openMedium: false,
        openLarge: false
      };
    }
  })
}`,...(T=(U=i.parameters)==null?void 0:U.docs)==null?void 0:T.source}}};var j,E,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div>
        <button 
          class="px-4 py-2 bg-blue-500 text-white rounded"
          @click="open = true"
        >
          自定义样式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="自定义样式抽屉"
          :pt="{
            overlay: 'bg-black/50',
            container: 'bg-gray-100 shadow-lg',
            header: 'bg-blue-500 text-white p-4',
            title: 'text-lg font-bold',
            closeButton: 'text-white hover:text-gray-200',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 pt 属性自定义样式的抽屉。</p>
        </Drawer>
      </div>
    \`,
    data() {
      return {
        open: false
      };
    }
  })
}`,...(M=(E=m.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var R,O,P;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Drawer
    },
    template: \`
      <div>
        <button 
          class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded"
          @click="open = true"
        >
          无样式模式抽屉
        </button>
        
        <Drawer 
          v-model="open" 
          title="无样式模式抽屉"
          unstyled
          :pt="{
            overlay: 'fixed inset-0 bg-black/70 z-50',
            container: 'fixed bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl z-50 transition-transform duration-300',
            header: 'flex justify-between items-center p-4 border-b border-white/20',
            title: 'text-xl font-bold',
            closeButton: 'text-white hover:text-gray-200 text-2xl',
            body: 'p-6',
          }"
        >
          <p>这是一个使用 unstyled 属性和 pt 属性创建的完全自定义抽屉。</p>
        </Drawer>
      </div>
    \`,
    data() {
      return {
        open: false
      };
    }
  })
}`,...(P=(O=b.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var A,N,I;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      DrawerDemo
    },
    template: '<DrawerDemo />'
  })
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const te=["Basic","Placement","Size","CustomStyle","Unstyled","AllExamples"];export{x as AllExamples,s as Basic,m as CustomStyle,d as Placement,i as Size,b as Unstyled,te as __namedExportsOrder,ee as default};
