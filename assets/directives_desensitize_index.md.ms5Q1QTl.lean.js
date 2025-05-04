import{_ as v,az as b,c as a,o as l,j as s,a as e,a4 as d,p as z,B as f,G as p,aa as x,k as o,w as r}from"./chunks/framework.rcZoKwU1.js";import{O as C,E as Z}from"./chunks/index.CpKg_UEU.js";const y=`<template>
  <div class="demo-container">
    <div class="demo-item">
      <h3>默认脱敏规则</h3>
      <p>
        手机号:
        <span v-desensitize="'phone'">13812345678</span>
      </p>
      <p>
        身份证:
        <span v-desensitize="'idCard'">110101199003077654</span>
      </p>
      <p>
        姓名:
        <span v-desensitize="'name'">张三</span>
      </p>
      <p>
        邮箱:
        <span v-desensitize="'email'">example@domain.com</span>
      </p>
    </div>

    <div class="demo-item">
      <h3>自定义脱敏规则</h3>
      <p>
        银行卡号:
        <span
          v-desensitize="{
            type: 'bankCard',
            rules: {
              bankCard: (str) => str.replace(/(\\d{4})\\d{8}(\\d{4})/, '$1****$2'),
            },
          }"
        >
          6225888888888888
        </span>
      </p>
      <p>
        自定义姓名脱敏:
        <span
          v-desensitize="{
            type: 'customName',
            rules: {
              customName: (str) => str.replace(/(.).*(.)/, '$1*$2'),
            },
          }"
        >
          李四
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  padding: 20px;
}
.demo-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}
h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
}
p {
  margin: 8px 0;
}
</style>
`,k={},W={class:"demo-container"},X={class:"demo-item"},B={class:"demo-item"};function g(m,n){const i=b("desensitize");return l(),a("div",W,[s("div",X,[n[8]||(n[8]=s("h3",null,"默认脱敏规则",-1)),s("p",null,[n[1]||(n[1]=e(" 手机号: ")),d((l(),a("span",null,n[0]||(n[0]=[e("13812345678")]))),[[i,"phone"]])]),s("p",null,[n[3]||(n[3]=e(" 身份证: ")),d((l(),a("span",null,n[2]||(n[2]=[e("110101199003077654")]))),[[i,"idCard"]])]),s("p",null,[n[5]||(n[5]=e(" 姓名: ")),d((l(),a("span",null,n[4]||(n[4]=[e("张三")]))),[[i,"name"]])]),s("p",null,[n[7]||(n[7]=e(" 邮箱: ")),d((l(),a("span",null,n[6]||(n[6]=[e("example@domain.com")]))),[[i,"email"]])])]),s("div",B,[n[13]||(n[13]=s("h3",null,"自定义脱敏规则",-1)),s("p",null,[n[10]||(n[10]=e(" 银行卡号: ")),d((l(),a("span",null,n[9]||(n[9]=[e(" 6225888888888888 ")]))),[[i,{type:"bankCard",rules:{bankCard:t=>t.replace(/(\d{4})\d{8}(\d{4})/,"$1****$2")}}]])]),s("p",null,[n[12]||(n[12]=e(" 自定义姓名脱敏: ")),d((l(),a("span",null,n[11]||(n[11]=[e(" 李四 ")]))),[[i,{type:"customName",rules:{customName:t=>t.replace(/(.).*(.)/,"$1*$2")}}]])])])])}const D=v(k,[["render",g],["__scopeId","data-v-dfbb4a61"]]),$=JSON.parse('{"title":"数据脱敏","description":"","frontmatter":{},"headers":[],"relativePath":"directives/desensitize/index.md","filePath":"directives/desensitize/index.md"}'),N={name:"directives/desensitize/index.md"},A=Object.assign(N,{setup(m){const n=z(!0);return(i,t)=>{const u=f("ClientOnly");return l(),a("div",null,[t[1]||(t[1]=s("h1",{id:"数据脱敏",tabindex:"-1"},[e("数据脱敏 "),s("a",{class:"header-anchor",href:"#数据脱敏","aria-label":'Permalink to "数据脱敏"'},"​")],-1)),t[2]||(t[2]=s("h2",{id:"基本使用",tabindex:"-1"},[e("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1)),d(p(o(C),null,null,512),[[x,n.value]]),p(u,null,{default:r(()=>[p(o(Z),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:t[0]||(t[0]=()=>{n.value=!1}),vueCode:o(y)},{vue:r(()=>[p(D)]),_:1},8,["vueCode"])]),_:1})])}}});export{$ as __pageData,A as default};
