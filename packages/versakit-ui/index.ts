import type { App, Component } from 'vue'

// 基础组件
import { VKButton } from './components/button'
import { VKBadge } from './components/badge'
import { VKAlert } from './components/alert'
import { VKChip } from './components/chip'
import { VKCard } from './components/card'
// 样式
import './style/index.css'

const components: Component[] = [VKButton, VKBadge, VKAlert, VKChip, VKCard]

export { VKButton, VKBadge, VKAlert, VKChip, VKCard }

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
