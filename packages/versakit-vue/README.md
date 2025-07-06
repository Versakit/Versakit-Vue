<div align="center">
  <a href="https://versakit.github.io/Versakit/">
    <img src="./logo.svg" width="160" />
  </a>
  <h1>Versakit</h1>
  <p>A modern, highly customizable Vue3 component library</p>
  <p>
    <a href="https://versakit.github.io/Versakit/">Documentation</a> | 
    <a href="https://versakit.github.io/Versakit/storybook/">Storybook</a> | 
    <a href="./README.md">中文</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%2342b883" alt="vue">
    <img src="https://img.shields.io/badge/typescript-%5E5.0.0-%233178c6" alt="typescript">
    <img src="https://img.shields.io/badge/tailwindcss-v3.3.0-%2338bdf8" alt="tailwindcss">
    <img src="https://img.shields.io/npm/l/@versakit/ui.svg" alt="license">
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

Check out our [online documentation](https://versakit.github.io/Versakit/) for more detailed information on component usage, examples, and API references.

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/lenran659/versakit-ui.git

# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build the component library
pnpm build

# Run tests
pnpm test
```

## 🤝 Contribution Guide

We welcome your contributions! Please check the [contribution guide](./CONTRIBUTING.md) to learn how to participate in the project.

## 📄 License

Versakit is licensed under the [MIT License](./LICENSE).

## 🔗 Related Links

- [GitHub Repository](https://github.com/lenran659/versakit-ui)
- [Gitee Mirror](https://gitee.com/dragon_water/versakit-ui)
- [Issue Feedback](https://github.com/lenran659/versakit-ui/issues)
- [Changelog](./CHANGELOG.md)
