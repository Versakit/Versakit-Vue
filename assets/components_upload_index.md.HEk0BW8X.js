import{d as A,p as k,B as D,c as d,o as r,G as i,e as b,k as p,w as c,j as n,F as L,C as z,_,a as f,t as v,n as W,a5 as x,aw as E,ad as w}from"./chunks/framework.Dr5ddTBW.js";import{ah as U,k as V}from"./chunks/theme.Bir5V9wV.js";import{d as C,f as B}from"./chunks/index.Cy4GuBY3.js";const S=`<template>
  <div class="picture-upload-demo">
    <VKUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      list-type="picture-card"
      accept="image/*"
      :limit="5"
      @success="handleSuccess"
      @exceed="handleExceed"
    >
      <div class="upload-picture-add">
        <VKIcon name="ep:plus" size="24px" />
        <span>上传图片</span>
      </div>
    </VKUpload>

    <!-- 图片预览区域 -->
    <div class="image-preview-gallery" v-if="fileList.length > 0">
      <h3>已上传图片预览</h3>
      <div class="image-thumbnails">
        <div
          v-for="file in fileList"
          :key="file.uid"
          class="image-thumbnail"
          @click="handlePreview(file)"
        >
          <img v-if="file.url" :src="file.url" :alt="file.name" />
          <div v-else class="image-loading">
            <VKIcon name="loading" size="20px" />
          </div>
        </div>
      </div>
    </div>

    <div class="image-preview" v-if="previewUrl">
      <div class="image-preview-mask" @click="closePreview"></div>
      <div class="image-preview-content">
        <img :src="previewUrl" alt="预览图片" />
        <div class="image-preview-close" @click="closePreview">
          <VKIcon name="close" size="24px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKUpload } from '@versakit/ui'

interface UploadFile {
  uid: string
  name: string
  status: 'ready' | 'uploading' | 'success' | 'error'
  size: number
  percentage?: number
  url?: string
  raw?: File
  response?: any
  error?: any
}

const fileList = ref<UploadFile[]>([])
const previewUrl = ref('')

// 模拟图片上传成功后设置URL
const handleSuccess = (response: any, file: UploadFile) => {
  // 实际情况中，应该使用服务器返回的URL
  // 这里使用本地URL作为示例
  if (file.raw) {
    const reader = new FileReader()
    reader.onload = (e) => {
      file.url = e.target?.result as string
    }
    reader.readAsDataURL(file.raw)
  }
}

const handleExceed = () => {
  alert('最多只能上传5张图片')
}

// 模拟点击缩略图查看大图
const handlePreview = (file: UploadFile) => {
  if (file.url) {
    previewUrl.value = file.url
  }
}

const closePreview = () => {
  previewUrl.value = ''
}
<\/script>

<style scoped>
.picture-upload-demo {
  width: 100%;
  position: relative;
}

.upload-picture-add {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #8c939d;
  height: 100%;
}

.upload-picture-add span {
  margin-top: 8px;
  font-size: 12px;
}

.image-preview-gallery {
  margin-top: 20px;
}

.image-preview-gallery h3 {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
}

.image-thumbnails {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-thumbnail {
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #ebeef5;
  transition: all 0.3s;
}

.image-thumbnail:hover {
  transform: scale(1.05);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.image-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
}

.image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-preview-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.image-preview-content {
  position: relative;
  z-index: 1;
  max-width: 90%;
  max-height: 90%;
}

.image-preview-content img {
  max-width: 100%;
  max-height: 90vh;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.image-preview-close {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
`,Z={class:"picture-upload-demo"},X={class:"upload-picture-add"},T={key:0,class:"image-preview-gallery"},q={class:"image-thumbnails"},M=["onClick"],P=["src","alt"],N={key:1,class:"image-loading"},Y={key:1,class:"image-preview"},K={class:"image-preview-content"},I=["src"],J=A({__name:"picture",setup(y){const a=k([]),o=k(""),t=(s,e)=>{if(e.raw){const m=new FileReader;m.onload=g=>{var F;e.url=(F=g.target)==null?void 0:F.result},m.readAsDataURL(e.raw)}},h=()=>{alert("最多只能上传5张图片")},l=s=>{s.url&&(o.value=s.url)},u=()=>{o.value=""};return(s,e)=>{const m=D("VKIcon");return r(),d("div",Z,[i(p(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":e[0]||(e[0]=g=>a.value=g),"list-type":"picture-card",accept:"image/*",limit:5,onSuccess:t,onExceed:h},{default:c(()=>[n("div",X,[i(m,{name:"ep:plus",size:"24px"}),e[1]||(e[1]=n("span",null,"上传图片",-1))])]),_:1},8,["fileList"]),a.value.length>0?(r(),d("div",T,[e[2]||(e[2]=n("h3",null,"已上传图片预览",-1)),n("div",q,[(r(!0),d(L,null,z(a.value,g=>(r(),d("div",{key:g.uid,class:"image-thumbnail",onClick:F=>l(g)},[g.url?(r(),d("img",{key:0,src:g.url,alt:g.name},null,8,P)):(r(),d("div",N,[i(m,{name:"loading",size:"20px"})]))],8,M))),128))])])):b("",!0),o.value?(r(),d("div",Y,[n("div",{class:"image-preview-mask",onClick:u}),n("div",K,[n("img",{src:o.value,alt:"预览图片"},null,8,I),n("div",{class:"image-preview-close",onClick:u},[i(m,{name:"close",size:"24px"})])])])):b("",!0)])}}}),$=_(J,[["__scopeId","data-v-1efa8b62"]]),G=`<template>
  <div class="upload-drag-demo">
    <VKUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      drag
      multiple
      @change="handleChange"
    >
      <div class="upload-drag-content">
        <div class="upload-drag-text">
          <p>
            拖拽文件到此处或
            <span class="upload-link">点击上传</span>
          </p>
          <p class="upload-hint">支持单个或批量上传文件</p>
        </div>
      </div>
    </VKUpload>

    <div class="upload-list" v-if="fileList.length > 0">
      <h3>已上传文件列表:</h3>
      <ul>
        <li v-for="file in fileList" :key="file.uid">
          {{ file.name }} - {{ formatFileSize(file.size) }}
          <span class="file-status" :class="file.status">
            {{ getStatusText(file.status) }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKUpload } from '@versakit/ui'

interface UploadFile {
  uid: string
  name: string
  status: 'ready' | 'uploading' | 'success' | 'error'
  size: number
  percentage?: number
  url?: string
  raw?: File
  response?: any
  error?: any
}

const fileList = ref<UploadFile[]>([])

const handleChange = (file: UploadFile) => {
  console.log('文件状态变更:', file.name, file.status)
}

const formatFileSize = (size: number): string => {
  if (size < 1024) {
    return size + ' B'
  } else if (size < 1024 * 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  } else {
    return (size / (1024 * 1024)).toFixed(2) + ' MB'
  }
}

const getStatusText = (status: string): string => {
  const statusMap: Record<string, string> = {
    ready: '等待上传',
    uploading: '上传中',
    success: '已上传',
    error: '上传失败',
  }
  return statusMap[status] || status
}
<\/script>

<style scoped>
.upload-drag-demo {
  width: 100%;
}

.upload-drag-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #606266;
}

.upload-drag-text {
  margin-top: 16px;
  text-align: center;
}

.upload-link {
  color: #42b983;
  font-weight: 500;
}

.upload-hint {
  font-size: 12px;
  color: #909399;
  margin-top: 8px;
}

.upload-list {
  margin-top: 20px;
  padding: 15px;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.upload-list h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.upload-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.upload-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ebeef5;
}

.file-status {
  float: right;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  background-color: #e8e8e8;
}

.file-status.ready {
  background-color: #e6f7ff;
  color: #1890ff;
}

.file-status.uploading {
  background-color: #e6fffb;
  color: #13c2c2;
}

.file-status.success {
  background-color: #f6ffed;
  color: #52c41a;
}

.file-status.error {
  background-color: #fff1f0;
  color: #f5222d;
}
</style>
`,R={class:"upload-drag-demo"},j={key:0,class:"upload-list"},H=A({__name:"drag",setup(y){const a=k([]),o=l=>{console.log("文件状态变更:",l.name,l.status)},t=l=>l<1024?l+" B":l<1024*1024?(l/1024).toFixed(2)+" KB":(l/(1024*1024)).toFixed(2)+" MB",h=l=>({ready:"等待上传",uploading:"上传中",success:"已上传",error:"上传失败"})[l]||l;return(l,u)=>(r(),d("div",R,[i(p(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":u[0]||(u[0]=s=>a.value=s),drag:"",multiple:"",onChange:o},{default:c(()=>u[1]||(u[1]=[n("div",{class:"upload-drag-content"},[n("div",{class:"upload-drag-text"},[n("p",null,[f(" 拖拽文件到此处或 "),n("span",{class:"upload-link"},"点击上传")]),n("p",{class:"upload-hint"},"支持单个或批量上传文件")])],-1)])),_:1},8,["fileList"]),a.value.length>0?(r(),d("div",j,[u[2]||(u[2]=n("h3",null,"已上传文件列表:",-1)),n("ul",null,[(r(!0),d(L,null,z(a.value,s=>(r(),d("li",{key:s.uid},[f(v(s.name)+" - "+v(t(s.size))+" ",1),n("span",{class:W(["file-status",s.status])},v(h(s.status)),3)]))),128))])])):b("",!0)]))}}),O=_(H,[["__scopeId","data-v-6006949d"]]),Q=`<template>
  <div class="upload-demo">
    <VKUpload
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      v-model:fileList="fileList"
      @change="handleChange"
      @success="handleSuccess"
      @error="handleError"
    >
      <VKButton type="primary">点击上传</VKButton>
      <template #tip>
        <div class="upload-tip">
          支持上传任意类型文件，单个文件大小不超过10MB
        </div>
      </template>
    </VKUpload>

    <div class="upload-status" v-if="uploadStatus">
      <div>上传状态: {{ uploadStatus }}</div>
      <div v-if="responseMessage">响应消息: {{ responseMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKUpload, VKButton } from '@versakit/ui'

interface UploadFile {
  uid: string
  name: string
  status: 'ready' | 'uploading' | 'success' | 'error'
  size: number
  percentage?: number
  url?: string
  raw?: File
  response?: any
  error?: any
}

const fileList = ref<UploadFile[]>([])
const uploadStatus = ref('')
const responseMessage = ref('')

const handleChange = (file: UploadFile) => {
  uploadStatus.value = \`文件 "\${file.name}" 状态变更为: \${file.status}\`
}

const handleSuccess = (response: any, file: UploadFile) => {
  uploadStatus.value = \`文件 "\${file.name}" 上传成功!\`
  responseMessage.value = JSON.stringify(response)
}

const handleError = (error: any, file: UploadFile) => {
  uploadStatus.value = \`文件 "\${file.name}" 上传失败!\`
  responseMessage.value = error.message || '未知错误'
}
<\/script>

<style scoped>
.upload-demo {
  margin: 20px 0;
}

.upload-tip {
  font-size: 12px;
  color: #909399;
  margin-top: 8px;
}

.upload-status {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f8f8f8;
  color: #606266;
}
</style>
`,tt={class:"upload-demo"},nt={key:0,class:"upload-status"},et={key:0},st=A({__name:"base",setup(y){const a=k([]),o=k(""),t=k(""),h=s=>{o.value=`文件 "${s.name}" 状态变更为: ${s.status}`},l=(s,e)=>{o.value=`文件 "${e.name}" 上传成功!`,t.value=JSON.stringify(s)},u=(s,e)=>{o.value=`文件 "${e.name}" 上传失败!`,t.value=s.message||"未知错误"};return(s,e)=>(r(),d("div",tt,[i(p(U),{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",fileList:a.value,"onUpdate:fileList":e[0]||(e[0]=m=>a.value=m),onChange:h,onSuccess:l,onError:u},{tip:c(()=>e[2]||(e[2]=[n("div",{class:"upload-tip"}," 支持上传任意类型文件，单个文件大小不超过10MB ",-1)])),default:c(()=>[i(p(V),{type:"primary"},{default:c(()=>e[1]||(e[1]=[f("点击上传")])),_:1})]),_:1},8,["fileList"]),o.value?(r(),d("div",nt,[n("div",null,"上传状态: "+v(o.value),1),t.value?(r(),d("div",et,"响应消息: "+v(t.value),1)):b("",!0)])):b("",!0)]))}}),at=_(st,[["__scopeId","data-v-c3b17aa3"]]),ot=JSON.parse('{"title":"Upload 上传","description":"","frontmatter":{},"headers":[],"relativePath":"components/upload/index.md","filePath":"components/upload/index.md"}'),it={name:"components/upload/index.md"},pt=Object.assign(it,{setup(y){const a=k(!0);return(o,t)=>{const h=D("ClientOnly");return r(),d("div",null,[t[3]||(t[3]=n("h1",{id:"upload-上传",tabindex:"-1"},[f("Upload 上传 "),n("a",{class:"header-anchor",href:"#upload-上传","aria-label":'Permalink to "Upload 上传"'},"​")],-1)),t[4]||(t[4]=n("p",null,"用于文件上传的组件。",-1)),t[5]||(t[5]=n("h2",{id:"基本使用",tabindex:"-1"},[f("基本使用 "),n("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),t[6]||(t[6]=n("p",null,"基础的文件上传功能，点击按钮选择文件并上传。",-1)),x(i(p(C),null,null,512),[[w,a.value]]),i(h,null,{default:c(()=>[i(p(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:p(Q)},{vue:c(()=>[i(at)]),_:1},8,["vueCode"])]),_:1}),t[7]||(t[7]=n("h2",{id:"拖拽上传",tabindex:"-1"},[f("拖拽上传 "),n("a",{class:"header-anchor",href:"#拖拽上传","aria-label":'Permalink to "拖拽上传"'},"​")],-1)),t[8]||(t[8]=n("p",null,"将文件拖拽到指定区域以进行上传。",-1)),x(i(p(C),null,null,512),[[w,a.value]]),i(h,null,{default:c(()=>[i(p(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:p(G)},{vue:c(()=>[i(O)]),_:1},8,["vueCode"])]),_:1}),t[9]||(t[9]=n("h2",{id:"图片上传",tabindex:"-1"},[f("图片上传 "),n("a",{class:"header-anchor",href:"#图片上传","aria-label":'Permalink to "图片上传"'},"​")],-1)),t[10]||(t[10]=n("p",null,"可使用照片墙样式上传多张图片，支持图片预览。",-1)),x(i(p(C),null,null,512),[[w,a.value]]),i(h,null,{default:c(()=>[i(p(B),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[2]||(t[2]=()=>{a.value=!1}),vueCode:p(S)},{vue:c(()=>[i($)]),_:1},8,["vueCode"])]),_:1}),t[11]||(t[11]=E(`<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>action</td><td>上传的URL</td><td>string</td><td>-</td></tr><tr><td>headers</td><td>上传请求头部</td><td>Record&lt;string, string&gt;</td><td>-</td></tr><tr><td>data</td><td>上传时附带的额外参数</td><td>Record&lt;string, any&gt;</td><td>-</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td>boolean</td><td>false</td></tr><tr><td>name</td><td>上传的文件字段名</td><td>string</td><td>&#39;file&#39;</td></tr><tr><td>drag</td><td>是否启用拖拽上传</td><td>boolean</td><td>false</td></tr><tr><td>accept</td><td>接受上传的文件类型</td><td>string</td><td>-</td></tr><tr><td>autoUpload</td><td>是否在选取文件后立即进行上传</td><td>boolean</td><td>true</td></tr><tr><td>limit</td><td>最大允许上传文件数量</td><td>number</td><td>0 (无限制)</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>false</td></tr><tr><td>withCredentials</td><td>支持发送cookie凭证信息</td><td>boolean</td><td>false</td></tr><tr><td>listType</td><td>文件列表的类型</td><td>&#39;text&#39; | &#39;picture&#39; | &#39;picture-card&#39;</td><td>&#39;text&#39;</td></tr><tr><td>fileList</td><td>上传的文件列表</td><td>UploadFile[]</td><td>[]</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:fileList</td><td>文件列表更新时触发</td><td>(fileList: UploadFile[])</td></tr><tr><td>change</td><td>文件状态改变时触发</td><td>(file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>success</td><td>文件上传成功时触发</td><td>(response: any, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>error</td><td>文件上传失败时触发</td><td>(error: any, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>progress</td><td>文件上传进度变化时触发</td><td>(evt: {percent: number}, file: UploadFile, fileList: UploadFile[])</td></tr><tr><td>exceed</td><td>文件超出个数限制时触发</td><td>(files: File[], fileList: UploadFile[])</td></tr><tr><td>remove</td><td>文件被移除时触发</td><td>(file: UploadFile, fileList: UploadFile[])</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>触发文件选择框的内容</td></tr><tr><td>drag</td><td>拖拽区域的内容</td></tr><tr><td>tip</td><td>提示说明文字</td></tr></tbody></table><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>submit</td><td>手动上传文件列表中状态为ready的文件</td><td>-</td></tr></tbody></table><h3 id="uploadfile-类型" tabindex="-1">UploadFile 类型 <a class="header-anchor" href="#uploadfile-类型" aria-label="Permalink to &quot;UploadFile 类型&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UploadFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件唯一标识</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件名</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	status</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ready&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;uploading&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;success&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;error&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件状态</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件大小</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	percentage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传进度</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 文件URL（图片预览时使用）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	raw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> File</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 原始文件对象</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传成功后的响应数据</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">	error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 上传失败的错误信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,11))])}}});export{ot as __pageData,pt as default};
