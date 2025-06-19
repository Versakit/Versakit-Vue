import type { App, Component } from 'vue'
import { PinInput } from './components/PinInput'
import { Tabs } from './components/Tabs'
import { Dialog } from './components/Dialog'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Switch } from './components/Switch'
import { Drawer } from './components/Drawer'
import { Segmented } from './components/Segmented'
import { Slider } from './components/Slider'
import { Popover } from './components/Popover'
import { Tooltip } from './components/Tooltip'
import { Chip } from './components/Chip'
// 引入样式
import './style/index.css'

const components: Component[] = [
  PinInput,
  Tabs,
  Dialog,
  Avatar,
  Badge,
  Switch,
  Drawer,
  Segmented,
  Slider,
  Popover,
  Tooltip,
  Chip,
]

export {
  PinInput,
  Tabs,
  Dialog,
  Avatar,
  Badge,
  Switch,
  Drawer,
  Segmented,
  Slider,
  Popover,
  Tooltip,
  Chip,
}

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
