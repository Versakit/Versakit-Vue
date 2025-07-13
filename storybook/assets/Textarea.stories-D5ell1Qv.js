import{u as e}from"./index.esm-DjItFe4v.js";/* empty css            */import"./iframe-BrQc6s_W.js";const D={title:"组件/Textarea 文本域",component:e,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"文本域的值",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},placeholder:{control:"text",description:"占位文本",table:{type:{summary:"string"},defaultValue:{summary:'""'}}},disabled:{control:"boolean",description:"是否禁用",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"是否只读",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},rows:{control:"number",description:"文本域的行数",table:{type:{summary:"number"},defaultValue:{summary:"4"}}},maxLength:{control:"number",description:"最大字符数",table:{type:{summary:"number"}}},minLength:{control:"number",description:"最小字符数",table:{type:{summary:"number"}}},autosize:{control:"boolean",description:"是否自适应高度",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},resize:{control:"select",options:["none","both","horizontal","vertical"],description:"调整大小的方式",table:{type:{summary:"string"},defaultValue:{summary:"vertical"}}},showCount:{control:"boolean",description:"是否显示字数统计",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["sm","md","lg"],description:"文本域大小",table:{type:{summary:"string"},defaultValue:{summary:"md"}}},status:{control:"select",options:[void 0,"error","warning","success"],description:"文本域状态",table:{type:{summary:"string"}}},unstyled:{control:"boolean",description:"是否使用无样式模式",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},pt:{control:"object",description:"自定义样式类名",table:{type:{summary:"object"},defaultValue:{summary:"{}"}}}}},a={args:{modelValue:"",placeholder:"请输入内容",rows:4}},s={render:()=>({components:{Textarea:e},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Textarea placeholder="小尺寸文本域" size="sm" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Textarea placeholder="中等尺寸文本域" size="md" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Textarea placeholder="大尺寸文本域" size="lg" />
        </div>
      </div>
    `})},r={render:()=>({components:{Textarea:e},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <Textarea placeholder="错误状态" status="error" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Textarea placeholder="警告状态" status="warning" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Textarea placeholder="成功状态" status="success" />
        </div>
      </div>
    `})},t={args:{modelValue:"",placeholder:"请输入内容，最多100个字符",maxLength:100,showCount:!0}},n={args:{modelValue:"",placeholder:"输入内容时会自动调整高度",autosize:!0}},o={render:()=>({components:{Textarea:e},template:`
      <div class="space-y-4">
        <div>
          <p class="mb-2">不可调整大小</p>
          <Textarea placeholder="不可调整大小" resize="none" />
        </div>
        <div>
          <p class="mb-2">可以水平调整大小</p>
          <Textarea placeholder="可以水平调整大小" resize="horizontal" />
        </div>
        <div>
          <p class="mb-2">可以垂直调整大小</p>
          <Textarea placeholder="可以垂直调整大小" resize="vertical" />
        </div>
        <div>
          <p class="mb-2">可以自由调整大小</p>
          <Textarea placeholder="可以自由调整大小" resize="both" />
        </div>
      </div>
    `})},l={args:{modelValue:"",placeholder:"自定义样式的文本域",pt:{root:"w-full",textarea:"border-purple-500 focus:border-purple-700 focus:ring-purple-700",counter:"text-purple-600 text-sm"},maxLength:100,showCount:!0}},c={args:{modelValue:"",placeholder:"无样式模式的文本域",unstyled:!0,pt:{root:"w-full",textarea:"w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300",counter:"mt-1 text-right text-sm text-blue-600"},maxLength:100,showCount:!0}},d={render:()=>({components:{Textarea:e},template:`
      <div class="space-y-8 p-4">
        <section>
          <h2 class="text-xl font-bold mb-4">基础用法</h2>
          <Textarea placeholder="请输入内容" />
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">小尺寸</p>
              <Textarea placeholder="小尺寸文本域" size="sm" />
            </div>
            <div>
              <p class="mb-2">中等尺寸</p>
              <Textarea placeholder="中等尺寸文本域" size="md" />
            </div>
            <div>
              <p class="mb-2">大尺寸</p>
              <Textarea placeholder="大尺寸文本域" size="lg" />
            </div>
          </div>
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同状态</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">错误状态</p>
              <Textarea placeholder="错误状态" status="error" />
            </div>
            <div>
              <p class="mb-2">警告状态</p>
              <Textarea placeholder="警告状态" status="warning" />
            </div>
            <div>
              <p class="mb-2">成功状态</p>
              <Textarea placeholder="成功状态" status="success" />
            </div>
          </div>
        </section>
      </div>
    `})};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: '请输入内容',
    rows: 4
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,b,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2">小尺寸</p>
          <Textarea placeholder="小尺寸文本域" size="sm" />
        </div>
        <div>
          <p class="mb-2">中等尺寸</p>
          <Textarea placeholder="中等尺寸文本域" size="md" />
        </div>
        <div>
          <p class="mb-2">大尺寸</p>
          <Textarea placeholder="大尺寸文本域" size="lg" />
        </div>
      </div>
    \`
  })
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2">错误状态</p>
          <Textarea placeholder="错误状态" status="error" />
        </div>
        <div>
          <p class="mb-2">警告状态</p>
          <Textarea placeholder="警告状态" status="warning" />
        </div>
        <div>
          <p class="mb-2">成功状态</p>
          <Textarea placeholder="成功状态" status="success" />
        </div>
      </div>
    \`
  })
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,T,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: '请输入内容，最多100个字符',
    maxLength: 100,
    showCount: true
  }
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var z,V,w;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: '输入内容时会自动调整高度',
    autosize: true
  }
}`,...(w=(V=n.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var S,L,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    template: \`
      <div class="space-y-4">
        <div>
          <p class="mb-2">不可调整大小</p>
          <Textarea placeholder="不可调整大小" resize="none" />
        </div>
        <div>
          <p class="mb-2">可以水平调整大小</p>
          <Textarea placeholder="可以水平调整大小" resize="horizontal" />
        </div>
        <div>
          <p class="mb-2">可以垂直调整大小</p>
          <Textarea placeholder="可以垂直调整大小" resize="vertical" />
        </div>
        <div>
          <p class="mb-2">可以自由调整大小</p>
          <Textarea placeholder="可以自由调整大小" resize="both" />
        </div>
      </div>
    \`
  })
}`,...(C=(L=o.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var A,E,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: '自定义样式的文本域',
    pt: {
      root: 'w-full',
      textarea: 'border-purple-500 focus:border-purple-700 focus:ring-purple-700',
      counter: 'text-purple-600 text-sm'
    },
    maxLength: 100,
    showCount: true
  }
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var B,M,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    modelValue: '',
    placeholder: '无样式模式的文本域',
    unstyled: true,
    pt: {
      root: 'w-full',
      textarea: 'w-full p-3 border-2 border-blue-500 rounded-lg focus:outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-300',
      counter: 'mt-1 text-right text-sm text-blue-600'
    },
    maxLength: 100,
    showCount: true
  }
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var U,_,O;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    template: \`
      <div class="space-y-8 p-4">
        <section>
          <h2 class="text-xl font-bold mb-4">基础用法</h2>
          <Textarea placeholder="请输入内容" />
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同尺寸</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">小尺寸</p>
              <Textarea placeholder="小尺寸文本域" size="sm" />
            </div>
            <div>
              <p class="mb-2">中等尺寸</p>
              <Textarea placeholder="中等尺寸文本域" size="md" />
            </div>
            <div>
              <p class="mb-2">大尺寸</p>
              <Textarea placeholder="大尺寸文本域" size="lg" />
            </div>
          </div>
        </section>
        
        <section>
          <h2 class="text-xl font-bold mb-4">不同状态</h2>
          <div class="space-y-4">
            <div>
              <p class="mb-2">错误状态</p>
              <Textarea placeholder="错误状态" status="error" />
            </div>
            <div>
              <p class="mb-2">警告状态</p>
              <Textarea placeholder="警告状态" status="warning" />
            </div>
            <div>
              <p class="mb-2">成功状态</p>
              <Textarea placeholder="成功状态" status="success" />
            </div>
          </div>
        </section>
      </div>
    \`
  })
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const F=["Basic","Sizes","Status","MaxLength","Autosize","Resize","CustomStyle","Unstyled","AllExamples"];export{d as AllExamples,n as Autosize,a as Basic,l as CustomStyle,t as MaxLength,o as Resize,s as Sizes,r as Status,c as Unstyled,F as __namedExportsOrder,D as default};
