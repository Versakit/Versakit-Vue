import{_ as y,p as d,c as x,o as V,j as n,G as s,k as o,t as i,B as T,a4 as S,a as b,aa as C,w as h}from"./chunks/framework.rcZoKwU1.js";import{ab as a}from"./chunks/theme.CbllQRZe.js";import{O as B,E as W}from"./chunks/index.CpKg_UEU.js";const k=`<template>
  <div class="time-select-demo">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="demo-content">
        <VKTimeSelect v-model="time1" placeholder="请选择时间" />
        <div class="desc">
          <p class="title">基本时间选择</p>
          <p class="value">选中值: {{ time1 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 时间范围 -->
    <div class="demo-section">
      <h3>时间范围</h3>
      <div class="demo-content">
        <VKTimeSelect
          v-model="time2"
          placeholder="上午时段"
          start="08:30"
          end="12:00"
          step="00:30"
        />
        <div class="desc">
          <p class="title">设置时间范围和步长</p>
          <p>范围: 08:30 至 12:00</p>
          <p>步长: 30分钟</p>
          <p class="value">选中值: {{ time2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 禁用特定时间 -->
    <div class="demo-section">
      <h3>禁用特定时间</h3>
      <div class="demo-content">
        <VKTimeSelect
          v-model="time3"
          placeholder="营业时间"
          :disabledHours="disabledHours"
          :disabledMinutes="disabledMinutes"
        />
        <div class="desc">
          <p class="title">禁用不可选时间</p>
          <p>禁用小时: 12点 (午休时间)</p>
          <p>禁用分钟: 0,15,30,45 (整点和刻钟)</p>
          <p class="value">选中值: {{ time3 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 最小最大时间 -->
    <div class="demo-section">
      <h3>时间限制</h3>
      <div class="demo-content">
        <VKTimeSelect
          v-model="time4"
          placeholder="工作时间"
          minTime="09:00"
          maxTime="18:00"
          step="01:00"
        />
        <div class="desc">
          <p class="title">限制可选时间范围</p>
          <p>最小时间: 09:00</p>
          <p>最大时间: 18:00</p>
          <p class="value">选中值: {{ time4 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <!-- 其他特性 -->
    <div class="demo-row">
      <!-- 禁用状态 -->
      <div class="demo-section half">
        <h3>禁用状态</h3>
        <VKTimeSelect v-model="time5" placeholder="禁用状态" disabled />
        <p class="value">值: {{ time5 }}</p>
      </div>

      <!-- 不可清除 -->
      <div class="demo-section half">
        <h3>不可清除</h3>
        <VKTimeSelect
          v-model="time6"
          placeholder="不可清除"
          :clearable="false"
        />
        <p class="value">值: {{ time6 }}</p>
      </div>
    </div>

    <!-- 搜索筛选 -->
    <div class="demo-section">
      <h3>搜索筛选</h3>
      <div class="demo-content">
        <VKTimeSelect
          v-model="time7"
          placeholder="输入筛选时间"
          start="00:00"
          end="23:59"
          step="00:30"
        />
        <div class="desc">
          <p class="title">支持输入搜索</p>
          <p>可在下拉框打开时输入时间进行筛选</p>
          <p class="value">选中值: {{ time7 || '未选择' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VKTimeSelect } from '@versakit/ui'

// 基础用法
const time1 = ref('')

// 时间范围
const time2 = ref('')

// 禁用特定时间
const time3 = ref('')

// 禁用时段 - 直接使用数组
const disabledHours = [12] // 禁用12点(午休时间)

// 将disabledMinutes从函数改为静态数组
const disabledMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

// 最小/最大时间限制
const time4 = ref('')

// 禁用状态
const time5 = ref('10:00')

// 不可清除
const time6 = ref('14:30')

// 搜索筛选
const time7 = ref('')
<\/script>

<style lang="scss" scoped>
.time-select-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.demo-section {
  padding: 16px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #ebeef5;

  h3 {
    margin: 0 0 16px 0;
    font-size: 16px;
    font-weight: 500;
    color: #303133;
  }
}

.demo-content {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.desc {
  flex: 1;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;

  p {
    margin: 4px 0;
  }

  .title {
    font-weight: 500;
    color: #303133;
  }

  .value {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e4e7ed;
    color: #409eff;
    font-family: monospace;
  }
}

.demo-row {
  display: flex;
  gap: 20px;

  .half {
    flex: 1;
  }
}

.value {
  margin-top: 12px;
  color: #409eff;
  font-family: monospace;
  font-size: 14px;
}
</style>
`,w={class:"time-select-demo"},G={class:"demo-section"},N={class:"demo-content"},U={class:"desc"},z={class:"value"},D={class:"demo-section"},M={class:"demo-content"},X={class:"desc"},Z={class:"value"},H={class:"demo-section"},K={class:"demo-content"},O={class:"desc"},A={class:"value"},J={class:"demo-section"},E={class:"demo-content"},j={class:"desc"},I={class:"value"},L={class:"demo-row"},P={class:"demo-section half"},Y={class:"value"},F={class:"demo-section half"},q={class:"value"},R={class:"demo-section"},$={class:"demo-content"},Q={class:"desc"},ee={class:"value"},ne={__name:"base",setup(_){const m=d(""),p=d(""),t=d(""),u=[12],g=[0,5,10,15,20,25,30,35,40,45,50,55],c=d(""),v=d("10:00"),r=d("14:30"),f=d("");return(te,e)=>(V(),x("div",w,[n("div",G,[e[8]||(e[8]=n("h3",null,"基础用法",-1)),n("div",N,[s(o(a),{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=l=>m.value=l),placeholder:"请选择时间"},null,8,["modelValue"]),n("div",U,[e[7]||(e[7]=n("p",{class:"title"},"基本时间选择",-1)),n("p",z,"选中值: "+i(m.value||"未选择"),1)])])]),n("div",D,[e[12]||(e[12]=n("h3",null,"时间范围",-1)),n("div",M,[s(o(a),{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=l=>p.value=l),placeholder:"上午时段",start:"08:30",end:"12:00",step:"00:30"},null,8,["modelValue"]),n("div",X,[e[9]||(e[9]=n("p",{class:"title"},"设置时间范围和步长",-1)),e[10]||(e[10]=n("p",null,"范围: 08:30 至 12:00",-1)),e[11]||(e[11]=n("p",null,"步长: 30分钟",-1)),n("p",Z,"选中值: "+i(p.value||"未选择"),1)])])]),n("div",H,[e[16]||(e[16]=n("h3",null,"禁用特定时间",-1)),n("div",K,[s(o(a),{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),placeholder:"营业时间",disabledHours:u,disabledMinutes:g},null,8,["modelValue"]),n("div",O,[e[13]||(e[13]=n("p",{class:"title"},"禁用不可选时间",-1)),e[14]||(e[14]=n("p",null,"禁用小时: 12点 (午休时间)",-1)),e[15]||(e[15]=n("p",null,"禁用分钟: 0,15,30,45 (整点和刻钟)",-1)),n("p",A,"选中值: "+i(t.value||"未选择"),1)])])]),n("div",J,[e[20]||(e[20]=n("h3",null,"时间限制",-1)),n("div",E,[s(o(a),{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=l=>c.value=l),placeholder:"工作时间",minTime:"09:00",maxTime:"18:00",step:"01:00"},null,8,["modelValue"]),n("div",j,[e[17]||(e[17]=n("p",{class:"title"},"限制可选时间范围",-1)),e[18]||(e[18]=n("p",null,"最小时间: 09:00",-1)),e[19]||(e[19]=n("p",null,"最大时间: 18:00",-1)),n("p",I,"选中值: "+i(c.value||"未选择"),1)])])]),n("div",L,[n("div",P,[e[21]||(e[21]=n("h3",null,"禁用状态",-1)),s(o(a),{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=l=>v.value=l),placeholder:"禁用状态",disabled:""},null,8,["modelValue"]),n("p",Y,"值: "+i(v.value),1)]),n("div",F,[e[22]||(e[22]=n("h3",null,"不可清除",-1)),s(o(a),{modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=l=>r.value=l),placeholder:"不可清除",clearable:!1},null,8,["modelValue"]),n("p",q,"值: "+i(r.value),1)])]),n("div",R,[e[25]||(e[25]=n("h3",null,"搜索筛选",-1)),n("div",$,[s(o(a),{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=l=>f.value=l),placeholder:"输入筛选时间",start:"00:00",end:"23:59",step:"00:30"},null,8,["modelValue"]),n("div",Q,[e[23]||(e[23]=n("p",{class:"title"},"支持输入搜索",-1)),e[24]||(e[24]=n("p",null,"可在下拉框打开时输入时间进行筛选",-1)),n("p",ee,"选中值: "+i(f.value||"未选择"),1)])])])]))}},le=y(ne,[["__scopeId","data-v-9ba01e52"]]),ae=JSON.parse('{"title":"Time Select 时间选择","description":"","frontmatter":{},"headers":[],"relativePath":"components/timeselect/index.md","filePath":"components/timeselect/index.md"}'),se={name:"components/timeselect/index.md"},me=Object.assign(se,{setup(_){const m=d(!0);return(p,t)=>{const u=T("ClientOnly");return V(),x("div",null,[t[1]||(t[1]=n("h1",{id:"time-select-时间选择",tabindex:"-1"},[b("Time Select 时间选择 "),n("a",{class:"header-anchor",href:"#time-select-时间选择","aria-label":'Permalink to "Time Select 时间选择"'},"​")],-1)),t[2]||(t[2]=n("h2",{id:"基本使用",tabindex:"-1"},[b("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),S(s(o(B),null,null,512),[[C,m.value]]),s(u,null,{default:h(()=>[s(o(W),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{m.value=!1}),vueCode:o(k)},{vue:h(()=>[s(le)]),_:1},8,["vueCode"])]),_:1})])}}});export{ae as __pageData,me as default};
