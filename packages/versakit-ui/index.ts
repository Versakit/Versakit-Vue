import type { App, Component } from 'vue'

// 基础组件
import { VKButton } from './components/button'
import { VKBadge } from './components/badge'
import { VKAlert } from './components/alert'
import { VKChip } from './components/chip'
import { VKCard } from './components/card'
import { VKDrawer } from './components/drawer'
import { VKModal } from './components/modal'
import { VKAvatar } from './components/avatar'
import { VKAvatarGroup } from './components/avatar-group'
import { VKSegmentedControl } from './components/segmented-control'

// 样式
import './style/index.css'

const components: Component[] = [
  VKButton,
  VKBadge,
  VKAlert,
  VKChip,
  VKCard,
  VKDrawer,
  VKModal,
  VKAvatar,
  VKAvatarGroup,
  VKSegmentedControl,
]

export {
  VKButton,
  VKBadge,
  VKAlert,
  VKChip,
  VKCard,
  VKDrawer,
  VKModal,
  VKAvatar,
  VKAvatarGroup,
  VKSegmentedControl,
}

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
