<div align="center">
  <a href="/">
	<img src="./logo.svg"  />
  </a>
  <h1>Versakit</h1>
  <p>A Vue3 component library that supports the desktop side.</p>
  <p>
	<a href="">Documentation</a> | 
	<a href="./README.zh-CN.md">中文</a>
  </p>
  <p>
	<img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
	<img src="https://img.shields.io/npm/l/@varlet/ui.svg" alt="license">
  </p>
</div>

---

## I. Introduction

Versakit is a carefully designed Vue3 component library, aiming to provide developers with highly customizable component solutions. It allows you to build user interfaces without relying on specific visual styles, giving you the full ability to control the appearance and behavior of components.

## II. Features

- 🚀 &nbsp; Provides over 20 high-quality universal components.
- 💪 &nbsp; Developed by Chinese developers, with complete Chinese and English documentation and logistical support.
- 🛠️ &nbsp; Supports on-demand import.
- 🛠️ &nbsp; Supports theme customization.
- 🌍 &nbsp; Supports internationalization.
- 💡 &nbsp; Supports Typescript.
- 💪 &nbsp; Ensures over 90% unit test coverage, providing stability guarantees.
- 🛠️ &nbsp; Supports dark mode.
- 🔧 &nbsp; Provides an official VSCode plugin.
- ⌨️ &nbsp; Supports accessible access (under continuous improvement).

## III. Installation

You can install Versakit in the following ways:

```bash
# Using npm
npm install @versakit/ui

# Using yarn
yarn add @versakit/ui

# Using pnpm
pnpm add @versakit/ui
```

```
import App from './App.vue'
import { createApp } from 'vue'
import Versakit from '@versakit/ui' // Import the component library
import '@versakit/ui/dist/style.css' // Import the styles

createApp(App).use(Versakit).mount('#app')
```

## IV. Documentation Address

[Component Library Documentation](https://lenran659.github.io/versakit-docs/)

[github](https://github.com/lenran659/versakit-ui)

[gitee](https://gitee.com/dragon_water/versakit-ui#/dragon_water/versakit-ui/blob/master/%22https:/lenran659.github.io/versakit-docs/%22)

## V. License

Versakit is released under the [MIT] license. For detailed information, please check the `LICENSE` file in the project root directory.

Please note that you need to adjust and supplement the above content according to the actual situation of your component library, including accurate installation steps, detailed component documentation, license information, etc. If your component library is not based on React, you need to modify the example code section to adapt to the corresponding technology stack.
