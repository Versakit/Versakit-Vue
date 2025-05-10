import Theme from 'vitepress/theme'
import Tool from '../components/tool.vue'
import MyLayout from './Layout.vue'

// 引入样式
import './index.scss'
import 'virtual:group-icons.css'

// 引入组件库
import { Versakit } from '@versakit/ui'
import '@versakit/ui/dist/esm/ui.css'
import { VersakitDirectives } from '@versakit/directives'
import { Element, Layui } from '@versakit/theme'

import { A, B } from './cursor'

export default {
  ...Theme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component('Tool', Tool)

    app.use(Versakit)

    app.use(VersakitDirectives)
  },
}
