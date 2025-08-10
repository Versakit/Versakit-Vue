<div align="center">
  <a href="https://versakit.github.io/Versakit-Vue/">
    <img src="./logo.svg" width="160" />
  </a>
  <h1>Versakit</h1>
  <p>A modern, highly customizable Vue3 component library</p>
  <p>
    <a href="https://versakit.github.io/Versakit-Vue/">Documentation</a> | 
    <a href="https://versakit.github.io/Versakit-Vue/storybook/">Storybook</a> | 
    <a href="./README.zh-CN.md">中文</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%2342b883" alt="vue">
    <img src="https://img.shields.io/badge/typescript-%5E5.0.0-%233178c6" alt="typescript">
    <img src="https://img.shields.io/badge/tailwindcss-v3.3.0-%2338bdf8" alt="tailwindcss">
    <img src="https://img.shields.io/npm/l/@versakit/vue.svg" alt="license">
  </p>
</div>

---

## 📖 Introduction

Versakit is a carefully designed Vue3 component library aimed at providing highly customizable, headless component solutions. It allows developers to build user interfaces without being constrained by specific visual styles, while providing complete control over the appearance and behavior of components.

## ✨ Features

- 🚀 &nbsp; Provides 30+ high-quality universal components covering forms, navigation, feedback, data display, and more
- 💪 &nbsp; Built entirely on Tailwind CSS, offering elegant default styles with high customizability
- 🎨 &nbsp; Supports headless (unstyled) mode and PT style passing mechanism for flexible component styling
- 🛠️ &nbsp; Supports on-demand importing to optimize application size
- 🌈 &nbsp; Supports theme customization for creating brand-specific UIs
- 🌍 &nbsp; Supports internationalization with built-in Chinese and English language packs
- 💡 &nbsp; Fully developed with TypeScript, providing comprehensive type definitions
- 📚 &nbsp; Detailed documentation and examples for quick onboarding
- 🌙 &nbsp; Native support for dark mode with one-click switching
- ♿ &nbsp; Focus on accessibility design, compliant with WCAG standards

## 📦 Installation

```bash
# Using npm
npm install @versakit/vue

# Using yarn
yarn add @versakit/vue

# Using pnpm
pnpm add @versakit/vue
```

## 🚀 Quick Start

### Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Versakit from '@versakit/vue'
import '@versakit/vue/style'

createApp(App).use(Versakit).mount('#app')
```

### On-demand Import

```vue
<script setup lang="ts">
import { VButton, VInput } from '@versakit/vue'
import '@versakit/vue/style'
</script>

<template>
	<v-input placeholder="Please enter content" />
	<v-button>Click Button</v-button>
</template>
```

## 🔍 Online Documentation

Check out our [online documentation](https://versakit.github.io/Versakit-Vue/) for more detailed information on component usage, examples, and API references.

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/Versakit/Versakit-Vue.git

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build the component library
pnpm build

# Run tests
pnpm test
```

## 📄 License

Versakit is licensed under the [MIT License](./LICENSE).

## 🔗 Related Links

- [GitHub Repository](https://github.com/Versakit/Versakit-Vue)
- [Gitee Mirror](https://gitee.com/dragon_water/versakit-ui)
- [Issue Feedback](https://github.com/Versakit/Versakit-Vue/issues)
- [Changelog](./CHANGELOG.md)

## 🤝 Thanks to the Contributors for Their Efforts

<table>
  <tbody>
    <tr><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/lenran659" title="lenran659"><img src="https://avatars.githubusercontent.com/u/74483049?v=4" width="100px;" alt="lenran659" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/Dream-2022" title="Dream-2022"><img src="https://avatars.githubusercontent.com/u/131731035?v=4" width="100px;" alt="Dream-2022" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/ZHuuO" title="ZHuuO"><img src="https://avatars.githubusercontent.com/u/128499037?v=4" width="100px;" alt="ZHuuO" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/ZRMYDYCG" title="ZRMYDYCG"><img src="https://avatars.githubusercontent.com/u/116160870?v=4" width="100px;" alt="ZRMYDYCG" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/Simonmie" title="Simonmie"><img src="https://avatars.githubusercontent.com/u/122306263?v=4" width="100px;" alt="Simonmie" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/abining" title="abining"><img src="https://avatars.githubusercontent.com/u/86543671?v=4" width="100px;" alt="abining" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/yyz945947732" title="yyz945947732"><img src="https://avatars.githubusercontent.com/u/47586954?v=4" width="100px;" alt="yyz945947732" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/StriveToLearnCode" title="StriveToLearnCode"><img src="https://avatars.githubusercontent.com/u/184910937?v=4" width="100px;" alt="StriveToLearnCode" style="border-radius: 9999px;" /></a></td>
    </tr>
    <tr><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/yuguaa" title="yuguaa"><img src="https://avatars.githubusercontent.com/u/58333667?v=4" width="100px;" alt="yuguaa" style="border-radius: 9999px;" /></a></td><td align="center" valign="top" width="12.5%" style="word-break: break-word; white-space: normal;"><a href="https://github.com/xiaotanqingjiao" title="xiaotanqingjiao"><img src="https://avatars.githubusercontent.com/u/85224021?v=4" width="100px;" alt="xiaotanqingjiao" style="border-radius: 9999px;" /></a></td>
    </tr>
  </tbody>
</table>
