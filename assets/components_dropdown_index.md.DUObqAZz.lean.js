const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.DuDGyiLc.js","assets/chunks/theme.HFHU-vLT.js","assets/chunks/framework.EjIRsQ6G.js"])))=>i.map(i=>d[i]);
import{p as k,D as c,v as g,aq as u,C as d,c as b,o as m,j as a,G as n,ap as o,a1 as y,a as v,a4 as E,k as s,w as p,ar as D}from"./chunks/framework.EjIRsQ6G.js";import{O as F,E as w}from"./chunks/index.CypwxoU1.js";const f=`<template>
  <div class="space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-4">基础用法</h2>
      <div class="flex items-center space-x-4">
        <Dropdown :options="defaultOptions" @select="handleSelect">
          <template #trigger>
            <button class="btn-primary">点击显示下拉菜单</button>
          </template>
        </Dropdown>
        <div v-if="selectedValue" class="text-sm">
          已选择: {{ selectedValue }}
        </div>
      </div>
    </section>

    <!-- 使用DropdownItem子组件 -->
    <section>
      <h2 class="text-lg font-medium mb-4">使用DropdownItem子组件</h2>
      <div class="flex items-center space-x-4">
        <Dropdown @select="handleSelect">
          <template #trigger>
            <button class="btn-primary">使用DropdownItem组件</button>
          </template>
          <DropdownItem value="item1" label="选项一" />
          <DropdownItem value="item2" label="选项二" icon="📝" />
          <DropdownItem divider />
          <DropdownItem value="item3" icon="🌟">
            <span class="text-green-600">自定义内容</span>
          </DropdownItem>
          <DropdownItem value="item4" disabled label="禁用选项" />
        </Dropdown>
      </div>
    </section>

    <!-- 不同触发方式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同触发方式</h2>
      <div class="flex flex-wrap gap-4">
        <div>
          <p class="text-sm mb-2">点击触发 (默认)</p>
          <Dropdown trigger="click">
            <template #trigger>
              <button class="btn-secondary">点击触发</button>
            </template>
            <DropdownItem value="click1" label="点击选项1" />
            <DropdownItem value="click2" label="点击选项2" />
          </Dropdown>
        </div>

        <div>
          <p class="text-sm mb-2">悬停触发</p>
          <Dropdown trigger="hover">
            <template #trigger>
              <button class="btn-secondary">悬停触发</button>
            </template>
            <DropdownItem value="hover1" label="悬停选项1" />
            <DropdownItem value="hover2" label="悬停选项2" />
          </Dropdown>
        </div>

        <div>
          <p class="text-sm mb-2">聚焦触发</p>
          <Dropdown trigger="focus">
            <template #trigger>
              <button class="btn-secondary">聚焦触发</button>
            </template>
            <DropdownItem value="focus1" label="聚焦选项1" />
            <DropdownItem value="focus2" label="聚焦选项2" />
          </Dropdown>
        </div>

        <div>
          <p class="text-sm mb-2">手动控制</p>
          <div class="flex items-center gap-2">
            <Dropdown trigger="manual" v-model:visible="manualVisible">
              <template #trigger>
                <button class="btn-secondary">下拉菜单</button>
              </template>
              <DropdownItem value="manual1" label="手动选项1" />
              <DropdownItem value="manual2" label="手动选项2" />
            </Dropdown>
            <button
              class="btn-secondary"
              @click="manualVisible = !manualVisible"
            >
              {{ manualVisible ? '隐藏' : '显示' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-4">不同位置</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex justify-center items-center">
          <Dropdown placement="top">
            <template #trigger>
              <button class="btn-secondary">顶部</button>
            </template>
            <DropdownItem value="top1" label="顶部选项1" />
            <DropdownItem value="top2" label="顶部选项2" />
          </Dropdown>
        </div>

        <div class="flex justify-center items-center">
          <Dropdown placement="bottom">
            <template #trigger>
              <button class="btn-secondary">底部</button>
            </template>
            <DropdownItem value="bottom1" label="底部选项1" />
            <DropdownItem value="bottom2" label="底部选项2" />
          </Dropdown>
        </div>

        <div class="flex justify-center items-center">
          <Dropdown placement="left">
            <template #trigger>
              <button class="btn-secondary">左侧</button>
            </template>
            <DropdownItem value="left1" label="左侧选项1" />
            <DropdownItem value="left2" label="左侧选项2" />
          </Dropdown>
        </div>

        <div class="flex justify-center items-center">
          <Dropdown placement="right">
            <template #trigger>
              <button class="btn-secondary">右侧</button>
            </template>
            <DropdownItem value="right1" label="右侧选项1" />
            <DropdownItem value="right2" label="右侧选项2" />
          </Dropdown>
        </div>

        <div class="flex justify-center items-center">
          <Dropdown placement="bottom-start">
            <template #trigger>
              <button class="btn-secondary">底部左对齐</button>
            </template>
            <DropdownItem value="bs1" label="底部左对齐选项1" />
            <DropdownItem value="bs2" label="底部左对齐选项2" />
          </Dropdown>
        </div>

        <div class="flex justify-center items-center">
          <Dropdown placement="bottom-end">
            <template #trigger>
              <button class="btn-secondary">底部右对齐</button>
            </template>
            <DropdownItem value="be1" label="底部右对齐选项1" />
            <DropdownItem value="be2" label="底部右对齐选项2" />
          </Dropdown>
        </div>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-4">禁用状态</h2>
      <div class="flex space-x-4">
        <Dropdown disabled>
          <template #trigger>
            <button class="btn-disabled">禁用的下拉菜单</button>
          </template>
          <DropdownItem value="disabled1" label="选项1" />
          <DropdownItem value="disabled2" label="选项2" />
        </Dropdown>

        <Dropdown>
          <template #trigger>
            <button class="btn-secondary">包含禁用选项</button>
          </template>
          <DropdownItem value="normal1" label="正常选项" />
          <DropdownItem value="disabled1" label="禁用选项1" disabled />
          <DropdownItem divider />
          <DropdownItem value="disabled2" label="禁用选项2" disabled />
        </Dropdown>
      </div>
    </section>

    <!-- 带图标的选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带图标的选项</h2>
      <Dropdown>
        <template #trigger>
          <button class="btn-primary">操作选项</button>
        </template>
        <DropdownItem value="copy" label="复制" icon="📋" />
        <DropdownItem value="edit" label="编辑" icon="✏️" />
        <DropdownItem value="delete" label="删除" icon="🗑️" />
        <DropdownItem divider />
        <DropdownItem value="download" label="下载" icon="📥" />
      </Dropdown>
    </section>

    <!-- 带分割线的选项 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带分割线的选项</h2>
      <Dropdown>
        <template #trigger>
          <button class="btn-primary">更多操作</button>
        </template>
        <DropdownItem value="view" label="查看详情" icon="👁️" />
        <DropdownItem value="edit" label="编辑" icon="✏️" />
        <DropdownItem divider />
        <DropdownItem value="share" label="分享" icon="🔗" />
        <DropdownItem value="export" label="导出" icon="📤" />
        <DropdownItem divider />
        <DropdownItem value="delete" label="删除" icon="🗑️" />
      </Dropdown>
    </section>

    <!-- 带箭头 -->
    <section>
      <h2 class="text-lg font-medium mb-4">带箭头</h2>
      <Dropdown arrow>
        <template #trigger>
          <button class="btn-secondary">带箭头的下拉菜单</button>
        </template>
        <DropdownItem value="arrow1" label="选项1" />
        <DropdownItem value="arrow2" label="选项2" />
      </Dropdown>
    </section>

    <!-- 自定义内容 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义内容</h2>
      <Dropdown>
        <template #trigger>
          <button class="btn-primary">自定义内容</button>
        </template>

        <div class="p-4 w-64">
          <h3 class="text-lg font-bold mb-2">自定义下拉内容</h3>
          <p class="text-sm text-gray-500 mb-4">
            这里可以放置任意内容，包括表单、图片等
          </p>
          <div class="mb-3">
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="输入内容"
            />
          </div>
          <div class="flex justify-end">
            <button class="btn-sm-primary">确认</button>
          </div>
        </div>
      </Dropdown>
    </section>

    <!-- 自定义样式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">自定义样式 (PT)</h2>
      <Dropdown
        :pt="{
          content: 'bg-purple-50 border border-purple-200 rounded-xl shadow-lg',
          menu: 'py-2',
          menuItem: 'px-4 py-2 text-purple-800 hover:bg-purple-100',
        }"
      >
        <template #trigger>
          <button class="btn-purple">自定义样式</button>
        </template>
        <DropdownItem value="custom1" label="紫色主题选项1" />
        <DropdownItem value="custom2" label="紫色主题选项2" />
        <DropdownItem divider />
        <DropdownItem value="custom3" label="紫色主题选项3" />
      </Dropdown>
    </section>

    <!-- 无样式模式 -->
    <section>
      <h2 class="text-lg font-medium mb-4">无样式模式</h2>
      <Dropdown
        unstyled
        :pt="{
          root: 'relative inline-block',
          trigger: 'inline-flex cursor-pointer',
          content:
            'absolute z-10 mt-2 min-w-[200px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 p-0.5',
          menu: 'bg-white rounded-lg overflow-hidden',
          menuItem:
            'block w-full px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-700 border-b border-gray-100 last:border-b-0',
          menuItemIcon: 'inline-block mr-2',
          menuDivider: 'border-t border-gray-200 my-1',
        }"
      >
        <template #trigger>
          <div
            class="flex items-center space-x-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
          >
            <span>自定义菜单</span>
            <span>▼</span>
          </div>
        </template>
        <DropdownItem value="unstyled1" label="自定义样式选项1" icon="🎨" />
        <DropdownItem value="unstyled2" label="自定义样式选项2" icon="🖌️" />
        <DropdownItem divider />
        <DropdownItem value="unstyled3" label="自定义样式选项3" icon="🎭" />
      </Dropdown>
    </section>

    <!-- 实际应用案例 -->
    <section>
      <h2 class="text-lg font-medium mb-4">实际应用案例: 用户菜单</h2>
      <div class="flex justify-end">
        <Dropdown>
          <template #trigger>
            <div
              class="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow cursor-pointer"
            >
              <div
                class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white"
              >
                U
              </div>
              <span>用户名</span>
              <span>▼</span>
            </div>
          </template>
          <DropdownItem value="profile" label="个人资料" icon="👤" />
          <DropdownItem value="settings" label="设置" icon="⚙️" />
          <DropdownItem divider />
          <DropdownItem value="help" label="帮助中心" icon="❓" />
          <DropdownItem value="feedback" label="意见反馈" icon="📝" />
          <DropdownItem divider />
          <DropdownItem value="logout" label="退出登录" icon="🚪" />
        </Dropdown>
      </div>
    </section>

    <!-- 与表单结合使用 -->
    <section>
      <h2 class="text-lg font-medium mb-4">与表单结合使用</h2>
      <div class="max-w-md border p-4 rounded-md bg-white">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            选择语言
          </label>
          <div class="flex items-center">
            <Dropdown v-model:visible="languageDropdownVisible">
              <template #trigger>
                <button
                  class="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded text-left"
                  aria-haspopup="true"
                  aria-expanded="languageDropdownVisible"
                >
                  <span>{{ selectedLanguage.label || '请选择语言' }}</span>
                  <span>▼</span>
                </button>
              </template>
              <DropdownItem
                v-for="lang in languages"
                :key="lang.value"
                :value="lang"
                :label="lang.label"
                @click="handleLanguageSelect(lang)"
              />
            </Dropdown>
          </div>
          <div class="text-sm text-gray-500 mt-2" v-if="selectedLanguage.value">
            已选择: {{ selectedLanguage.label }} ({{ selectedLanguage.value }})
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Dropdown, DropdownItem } from '@versakit/vue'

// 当前选择的值
const selectedValue = ref<any>(null)

// 默认选项
const defaultOptions = [
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' },
  { value: 'option4', label: '选项四' },
]

// 手动控制下拉菜单
const manualVisible = ref(false)

// 语言选择示例
const languageDropdownVisible = ref(false)
const selectedLanguage = ref<{ value: string; label: string }>({
  value: '',
  label: '',
})
const languages = [
  { value: 'zh-CN', label: '简体中文' },
  { value: 'en-US', label: '英文' },
  { value: 'ja-JP', label: '日文' },
  { value: 'ko-KR', label: '韩文' },
  { value: 'fr-FR', label: '法文' },
]

// 选择处理函数
const handleSelect = (value: any) => {
  selectedValue.value = value
  console.log('选择了:', value)
}

// 语言选择处理函数
const handleLanguageSelect = (lang: { value: string; label: string }) => {
  selectedLanguage.value = lang
  languageDropdownVisible.value = false
}
<\/script>
`,A=JSON.parse('{"title":"Dropdown 下拉菜单","description":"","frontmatter":{},"headers":[],"relativePath":"components/dropdown/index.md","filePath":"components/dropdown/index.md"}'),x={name:"components/dropdown/index.md"},_=Object.assign(x,{setup(C){const i=k(!0),e=c();return g(async()=>{e.value=(await u(async()=>{const{default:l}=await import("./chunks/index.DuDGyiLc.js");return{default:l}},__vite__mapDeps([0,1,2]))).default}),(l,t)=>{const r=d("Link"),h=d("ClientOnly");return m(),b("div",null,[t[1]||(t[1]=a("h1",{id:"dropdown-下拉菜单",tabindex:"-1"},[v("Dropdown 下拉菜单 "),a("a",{class:"header-anchor",href:"#dropdown-下拉菜单","aria-label":'Permalink to "Dropdown 下拉菜单"'},"​")],-1)),t[2]||(t[2]=a("p",null,"Dropdown 是一个可以显示临时弹出菜单的组件，用户可以从中选择一个选项。适用于菜单、操作集合等场景。",-1)),n(r,{link:"https://versakit.github.io/Versakit-Vue/storybook/?path=/story/%E7%BB%84%E4%BB%B6-dropdown-%E4%B8%8B%E6%8B%89%E8%8F%9C%E5%8D%95--basic"}),t[3]||(t[3]=o("",3)),y(n(s(F),null,null,512),[[E,i.value]]),n(h,null,{default:p(()=>[n(s(w),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{i.value=!1}),vueCode:s(f)},D({_:2},[e.value?{name:"vue",fn:p(()=>[n(s(e))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=o("",23))])}}});export{A as __pageData,_ as default};
