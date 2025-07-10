const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index.D2Gijn-2.js","assets/chunks/theme.DAOLVbAS.js","assets/chunks/framework.DLuSxX4C.js"])))=>i.map(i=>d[i]);
import{p as m,D as b,v as p,al as o,C as h,c,o as g,ak as i,a0 as u,G as a,a3 as T,k as e,w as l,am as k}from"./chunks/framework.DLuSxX4C.js";import{O as v,E as y}from"./chunks/index.Bhh2hZnL.js";const I=`<script setup lang="ts">
import { Tabs, TabItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref } from 'vue'

// 控制当前激活的标签页
const activeTab = ref('tab1')

// 处理标签页变化
const handleTabChange = (value: string | number) => {
  console.log('当前选中的标签:', value)
  activeTab.value = value as string
}
<\/script>

<template>
  <div class="tabs-examples space-y-8">
    <!-- 基础用法 -->
    <section>
      <h2 class="text-lg font-medium mb-3">基础用法</h2>
      <Tabs v-model="activeTab" @change="handleTabChange">
        <TabItem name="tab1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
        <TabItem name="tab2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
        <TabItem name="tab3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
            <p class="mt-2">当前选中的标签: {{ activeTab }}</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同变体 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同变体</h2>

      <h3 class="text-sm font-medium mb-2">默认样式 (default)</h3>
      <Tabs variant="default">
        <TabItem name="var1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="var2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>默认样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">胶囊样式 (pills)</h3>
      <Tabs variant="pills">
        <TabItem name="pill1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="pill2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>胶囊样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">下划线样式 (underline)</h3>
      <Tabs variant="underline">
        <TabItem name="under1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="under2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>下划线样式标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同尺寸 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同尺寸</h2>

      <h3 class="text-sm font-medium mb-2">小尺寸 (sm)</h3>
      <Tabs size="sm">
        <TabItem name="sm1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="sm2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>小尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">中尺寸 (md) - 默认</h3>
      <Tabs size="md">
        <TabItem name="md1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="md2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>中尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">大尺寸 (lg)</h3>
      <Tabs size="lg">
        <TabItem name="lg1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </TabItem>
        <TabItem name="lg2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>大尺寸标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 不同位置 -->
    <section>
      <h2 class="text-lg font-medium mb-3">不同位置</h2>

      <h3 class="text-sm font-medium mb-2">顶部位置 (top) - 默认</h3>
      <Tabs placement="top">
        <TabItem name="top1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="top2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>顶部位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">底部位置 (bottom)</h3>
      <Tabs placement="bottom">
        <TabItem name="bottom1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="bottom2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>底部位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">左侧位置 (left)</h3>
      <Tabs placement="left">
        <TabItem name="left1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="left2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>左侧位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">右侧位置 (right)</h3>
      <Tabs placement="right">
        <TabItem name="right1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </TabItem>
        <TabItem name="right2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>右侧位置标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 禁用状态 -->
    <section>
      <h2 class="text-lg font-medium mb-3">禁用状态</h2>

      <h3 class="text-sm font-medium mb-2">禁用单个标签</h3>
      <Tabs>
        <TabItem name="dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容</p>
          </div>
        </TabItem>
        <TabItem name="dis2" title="标签2" :disabled="true">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（已禁用）</p>
          </div>
        </TabItem>
        <TabItem name="dis3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签3的内容</p>
          </div>
        </TabItem>
      </Tabs>

      <h3 class="text-sm font-medium mb-2 mt-4">禁用整个标签组件</h3>
      <Tabs :disabled="true">
        <TabItem name="all-dis1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签1的内容（整个标签组已禁用）</p>
          </div>
        </TabItem>
        <TabItem name="all-dis2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>这是标签2的内容（整个标签组已禁用）</p>
          </div>
        </TabItem>
      </Tabs>
    </section>

    <!-- 全宽模式 -->
    <section>
      <h2 class="text-lg font-medium mb-3">全宽模式</h2>
      <Tabs :fullWidth="true">
        <TabItem name="full1" title="标签1">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="full2" title="标签2">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
        <TabItem name="full3" title="标签3">
          <div class="p-4 bg-white dark:bg-gray-800 rounded-md">
            <p>全宽模式标签内容</p>
          </div>
        </TabItem>
      </Tabs>
    </section>
  </div>
</template>

<style scoped>
.tabs-examples {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
`,C=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"components/tabs/index.md","filePath":"components/tabs/index.md"}'),f={name:"components/tabs/index.md"},F=Object.assign(f,{setup(_){const s=m(!0),n=b();return p(async()=>{n.value=(await o(async()=>{const{default:d}=await import("./chunks/index.D2Gijn-2.js");return{default:d}},__vite__mapDeps([0,1,2]))).default}),(d,t)=>{const r=h("ClientOnly");return g(),c("div",null,[t[1]||(t[1]=i("",6)),u(a(e(v),null,null,512),[[T,s.value]]),a(r,null,{default:l(()=>[a(e(y),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{s.value=!1}),vueCode:e(I)},k({_:2},[n.value?{name:"vue",fn:l(()=>[a(e(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[2]||(t[2]=i("",9))])}}});export{C as __pageData,F as default};
