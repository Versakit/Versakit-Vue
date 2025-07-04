const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DcziKBJ5.js","assets/chunks/theme.9IXME9ou.js","assets/chunks/framework.Cpyw2Gc9.js"])))=>i.map(i=>d[i]);
import{p as b,D as h,v as p,aj as m,B as s,c as g,o as v,j as l,G as e,ai as r,a1 as f,a as S,a2 as x,k as d,w as i,ak as y}from"./chunks/framework.Cpyw2Gc9.js";import{O as _,E as k}from"./chunks/index.CSC85q1C.js";const V=`<template>
  <div class="flex flex-col gap-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">基础用法</h2>
      <Select
        v-model="selectedValue"
        placeholder="请选择一个选项"
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue || '未选择' }}
      </div>
    </section>

    <!-- 带标签和默认值 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">带标签和默认值</h2>
      <Select
        v-model="selectedValue2"
        :options="basicOptions"
        :showLabel="true"
        label="选择一个选项"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ selectedValue2 }}
      </div>
    </section>

    <!-- 尺寸变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">尺寸变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          size="small"
          :showLabel="true"
          label="小尺寸 (small)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          size="default"
          :showLabel="true"
          label="默认尺寸 (default)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          size="large"
          :showLabel="true"
          label="大尺寸 (large)"
          placeholder="选择选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 状态变体 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">状态变体</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          status="success"
          :showLabel="true"
          label="成功状态 (success)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          status="warning"
          :showLabel="true"
          label="警告状态 (warning)"
          placeholder="选择选项"
          :options="basicOptions"
        />
        <Select
          status="error"
          :showLabel="true"
          label="错误状态 (error)"
          placeholder="选择选项"
          errorText="请选择一个有效选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 状态展示 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">交互状态</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          disabled
          :showLabel="true"
          label="禁用状态 (disabled)"
          placeholder="无法选择"
          :options="basicOptions"
        />
        <Select
          readonly
          :showLabel="true"
          label="只读状态 (readonly)"
          placeholder="只读"
          modelValue="option1"
          :options="basicOptions"
        />
        <Select
          :showLabel="true"
          label="必填状态"
          placeholder="必须选择"
          required
          :options="basicOptions"
        />
        <Select
          :showLabel="true"
          label="帮助文本"
          placeholder="选择选项"
          helpText="请从下拉列表中选择一个选项"
          :options="basicOptions"
        />
      </div>
    </section>

    <!-- 禁用选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">禁用选项</h2>
      <Select
        :showLabel="true"
        label="部分选项禁用"
        placeholder="选择选项"
        :options="disabledOptions"
      />
    </section>

    <!-- 多选模式 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">多选模式</h2>
      <Select
        multiple
        :showLabel="true"
        label="多选选择器"
        placeholder="选择多个选项"
        v-model="multiSelectedValue"
        clearable
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择:
        {{
          multiSelectedValue.length ? multiSelectedValue.join(', ') : '未选择'
        }}
      </div>
    </section>

    <!-- 可搜索选择器 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可搜索选择器</h2>
      <Select
        filterable
        :showLabel="true"
        label="可搜索选择器"
        placeholder="搜索并选择水果"
        v-model="searchValue"
        :options="fruitOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ searchValue || '未选择' }}
      </div>
    </section>

    <!-- 可清除选择 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">可清除选择</h2>
      <Select
        clearable
        :showLabel="true"
        label="可清除选择器"
        placeholder="选择后可清除"
        v-model="clearableValue"
        :options="basicOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ clearableValue || '未选择' }}
      </div>
    </section>

    <!-- 分组选项 -->
    <section>
      <h2 class="mb-4 text-lg font-bold">分组选项</h2>
      <Select
        :showLabel="true"
        label="分组选择"
        placeholder="选择一个选项"
        v-model="groupedValue"
        filterable
        :options="groupedOptions"
      />
      <div class="mt-2 text-sm text-gray-600">
        当前选择: {{ groupedValue || '未选择' }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { Select } from '@versakit/vue'
import { ref } from 'vue'

// 基础示例
const selectedValue = ref(null)
const selectedValue2 = ref('option1')

const basicOptions = [
  { value: 'option1', label: '选项 1' },
  { value: 'option2', label: '选项 2' },
  { value: 'option3', label: '选项 3' },
]

// 禁用选项示例
const disabledOptions = [
  { value: 'option1', label: '选项 1' },
  { value: 'option2', label: '选项 2 (禁用)', disabled: true },
  { value: 'option3', label: '选项 3' },
  { value: 'option4', label: '选项 4 (禁用)', disabled: true },
]

// 水果选项
const fruitOptions = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
  { value: 'grape', label: '葡萄' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'strawberry', label: '草莓' },
  { value: 'pear', label: '梨' },
  { value: 'peach', label: '桃子' },
]

// 多选示例
const multiSelectedValue = ref([])

// 可搜索示例
const searchValue = ref(null)

// 可清除示例
const clearableValue = ref('option2')

// 分组选项示例
const groupedValue = ref(null)
const groupedOptions = [
  { value: 'fruit1', label: '苹果', group: '水果' },
  { value: 'fruit2', label: '香蕉', group: '水果' },
  { value: 'fruit3', label: '橙子', group: '水果' },
  { value: 'veg1', label: '胡萝卜', group: '蔬菜' },
  { value: 'veg2', label: '西兰花', group: '蔬菜' },
  { value: 'veg3', label: '土豆', group: '蔬菜' },
  { value: 'meat1', label: '牛肉', group: '肉类' },
  { value: 'meat2', label: '猪肉', group: '肉类' },
  { value: 'meat3', label: '鸡肉', group: '肉类' },
]
<\/script>
`,A=JSON.parse('{"title":"Select 选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}'),w={name:"components/select/index.md"},I=Object.assign(w,{setup(O){const a=b(!0),n=h();return p(async()=>{n.value=(await m(async()=>{const{default:o}=await import("./chunks/index.DcziKBJ5.js");return{default:o}},__vite__mapDeps([0,1,2]))).default}),(o,t)=>{const c=s("Link"),u=s("ClientOnly");return v(),g("div",null,[t[1]||(t[1]=l("h1",{id:"select-选择器",tabindex:"-1"},[S("Select 选择器 "),l("a",{class:"header-anchor",href:"#select-选择器","aria-label":'Permalink to "Select 选择器"'},"​")],-1)),t[2]||(t[2]=l("p",null,"Select 组件用于从一组预定义选项中选择一个或多个值。",-1)),e(c,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-select-%E9%80%89%E6%8B%A9%E5%99%A8--basic"}),t[3]||(t[3]=r('<h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Select, SelectItem } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@versakit/vue&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3)),f(e(d(_),null,null,512),[[x,a.value]]),e(u,null,{default:i(()=>[e(d(k),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:d(V)},y({_:2},[n.value?{name:"vue",fn:i(()=>[e(d(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=r('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="select-属性" tabindex="-1">Select 属性 <a class="header-anchor" href="#select-属性" aria-label="Permalink to &quot;Select 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>选择器的值</td><td><code>string | number | Array&lt;string | number&gt;</code></td><td>-</td></tr><tr><td>placeholder</td><td>占位符</td><td><code>string</code></td><td><code>&#39;请选择&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>selectionMode</td><td>选择模式</td><td><code>&#39;single&#39; | &#39;multiple&#39;</code></td><td><code>&#39;single&#39;</code></td></tr><tr><td>size</td><td>尺寸</td><td><code>&#39;sm&#39; | &#39;md&#39; | &#39;lg&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>color</td><td>颜色变体</td><td><code>&#39;default&#39; | &#39;primary&#39; | &#39;secondary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;default&#39;</code></td></tr><tr><td>variant</td><td>外观变体</td><td><code>&#39;flat&#39; | &#39;bordered&#39; | &#39;underlined&#39;</code></td><td><code>&#39;bordered&#39;</code></td></tr><tr><td>radius</td><td>圆角大小</td><td><code>&#39;none&#39; | &#39;sm&#39; | &#39;md&#39; | &#39;lg&#39; | &#39;full&#39;</code></td><td><code>&#39;md&#39;</code></td></tr><tr><td>label</td><td>标签文本</td><td><code>string</code></td><td>-</td></tr><tr><td>labelPlacement</td><td>标签位置</td><td><code>&#39;inside&#39; | &#39;outside&#39; | &#39;outside-left&#39;</code></td><td><code>&#39;inside&#39;</code></td></tr><tr><td>description</td><td>描述文本</td><td><code>string</code></td><td>-</td></tr><tr><td>errorMessage</td><td>错误消息</td><td><code>string</code></td><td>-</td></tr><tr><td>isInvalid</td><td>是否无效</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isRequired</td><td>是否必填</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isClearable</td><td>是否可清除</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>isFilterable</td><td>是否可搜索</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>maxDropdownHeight</td><td>最大下拉框高度</td><td><code>number</code></td><td><code>256</code></td></tr><tr><td>disabledKeys</td><td>禁用的选项键值</td><td><code>string[]</code></td><td>-</td></tr><tr><td>disableSelectorIconRotation</td><td>禁用选择器图标旋转</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>startContent</td><td>左侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>endContent</td><td>右侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>showScrollIndicators</td><td>是否显示滚动指示器</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>noMatchText</td><td>无匹配选项时显示的文本</td><td><code>string</code></td><td><code>&#39;无匹配选项&#39;</code></td></tr></tbody></table><h3 id="select-事件" tabindex="-1">Select 事件 <a class="header-anchor" href="#select-事件" aria-label="Permalink to &quot;Select 事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>值变化时触发</td><td><code>(value: string | number | Array&lt;string | number&gt;)</code></td></tr><tr><td>change</td><td>值变化时触发</td><td><code>(value: string | number | Array&lt;string | number&gt;)</code></td></tr><tr><td>focus</td><td>获取焦点时触发</td><td>-</td></tr><tr><td>blur</td><td>失去焦点时触发</td><td>-</td></tr><tr><td>open-change</td><td>下拉菜单打开状态变化时触发</td><td><code>(isOpen: boolean)</code></td></tr></tbody></table><h3 id="select-插槽" tabindex="-1">Select 插槽 <a class="header-anchor" href="#select-插槽" aria-label="Permalink to &quot;Select 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，用于放置 SelectItem 组件</td><td>-</td></tr><tr><td>startContent</td><td>选择器左侧内容</td><td>-</td></tr><tr><td>endContent</td><td>选择器右侧内容</td><td>-</td></tr><tr><td>value</td><td>自定义选中值的渲染</td><td><code>{ selected: SelectItem[] }</code></td></tr><tr><td>selectorIcon</td><td>自定义选择器图标</td><td>-</td></tr></tbody></table><h3 id="selectitem-属性" tabindex="-1">SelectItem 属性 <a class="header-anchor" href="#selectitem-属性" aria-label="Permalink to &quot;SelectItem 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>key</td><td>选项键值</td><td><code>string</code></td><td><strong>必填</strong></td></tr><tr><td>label</td><td>选项标签</td><td><code>string</code></td><td>-</td></tr><tr><td>description</td><td>选项描述</td><td><code>string</code></td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>startContent</td><td>左侧内容</td><td><code>string</code></td><td>-</td></tr><tr><td>endContent</td><td>右侧内容</td><td><code>string</code></td><td>-</td></tr></tbody></table><h3 id="selectitem-插槽" tabindex="-1">SelectItem 插槽 <a class="header-anchor" href="#selectitem-插槽" aria-label="Permalink to &quot;SelectItem 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>默认插槽，用于自定义选项内容</td><td>-</td></tr><tr><td>description</td><td>自定义描述内容</td><td>-</td></tr><tr><td>startContent</td><td>选项左侧内容</td><td>-</td></tr><tr><td>endContent</td><td>选项右侧内容</td><td>-</td></tr><tr><td>selectedIcon</td><td>自定义选中图标</td><td>-</td></tr></tbody></table><h2 id="数据属性" tabindex="-1">数据属性 <a class="header-anchor" href="#数据属性" aria-label="Permalink to &quot;数据属性&quot;">​</a></h2><p>Select 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-open</strong>: 下拉菜单是否打开</li><li><strong>data-disabled</strong>: 选择器是否禁用</li><li><strong>data-focus</strong>: 选择器是否聚焦</li><li><strong>data-invalid</strong>: 选择器是否无效</li></ul><p>SelectItem 组件在根元素上添加以下数据属性：</p><ul><li><strong>data-key</strong>: 选项的键值</li><li><strong>data-selected</strong>: 选项是否被选中</li><li><strong>data-disabled</strong>: 选项是否禁用</li><li><strong>data-focus</strong>: 选项是否聚焦</li><li><strong>data-hover</strong>: 选项是否悬停</li><li><strong>data-pressed</strong>: 选项是否按下</li></ul>',16))])}}});export{A as __pageData,I as default};
