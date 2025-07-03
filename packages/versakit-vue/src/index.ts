import type { App, Component } from 'vue'
import { PinInput } from './components/PinInput'
import { Tabs } from './components/Tabs'
import { Modal } from './components/Modal'
import { Avatar } from './components/Avatar'
import { Badge } from './components/Badge'
import { Switch } from './components/Switch'
import { Drawer } from './components/Drawer'
import { Segmented } from './components/Segmented'
import { Slider } from './components/Slider'
import { Popover } from './components/Popover'
import { Tooltip } from './components/Tooltip'
import { Chip } from './components/Chip'
import { Alert } from './components/Alert'
import { Kbd } from './components/Kbd'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Divider } from './components/Divider'
import { Textarea } from './components/Textarea'
import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { Rate } from './components/Rate'
import { Calendar } from './components/Calendar'
import { TimePicker } from './components/TimePicker'
import { DatePicker } from './components/DatePicker'
import { DateTimePicker } from './components/DateTimePicker'
import { TimeSelect } from './components/TimeSelect'
// 引入样式
import './style/index.css'

const components: Component[] = [
  PinInput,
  Tabs,
  Modal,
  Avatar,
  Badge,
  Switch,
  Drawer,
  Segmented,
  Slider,
  Popover,
  Tooltip,
  Chip,
  Alert,
  Kbd,
  Button,
  Card,
  Divider,
  Textarea,
  Select,
  Checkbox,
  Input,
  Rate,
  Calendar,
  TimePicker,
  DatePicker,
  DateTimePicker,
  TimeSelect,
]

export {
  PinInput,
  Tabs,
  Modal,
  Avatar,
  Badge,
  Switch,
  Drawer,
  Segmented,
  Slider,
  Popover,
  Tooltip,
  Chip,
  Alert,
  Kbd,
  Button,
  Card,
  Divider,
  Textarea,
  Select,
  Checkbox,
  Input,
  Rate,
  Calendar,
  TimePicker,
  DatePicker,
  DateTimePicker,
  TimeSelect,
}

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
