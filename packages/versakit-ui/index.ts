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
import { VKDivider } from './components/divider'
import { VKInput } from './components/input'
import { VKPinInput } from './components/pin-input'
import { VKTagInput } from './components/tag-input'
import { VKSlider } from './components/slider'
import { VKSwitch } from './components/switch'
import { VKTextarea } from './components/textarea'
import { VKCheckbox } from './components/checkbox'
import { VKButtonGroup } from './components/button-group'
import { VKTab, VKTabItem } from './components/tabs'
import { VKProgress } from './components/progress'
import { VKSelect } from './components/select'
import { VKRadio, VKRadioGroup } from './components/radio'
import { VKKbd } from './components/kbd'
import { VKTooltip } from './components/tooltip'
import { VKToast, VKToastProvider } from './components/toast'
import { VKBreadcrumb, VKBreadcrumbItem } from './components/breadcrumb'
import { VKPopover } from './components/popover'
import { VKCalendar } from './components/calendar'
import { VKDatePicker } from './components/date-picker'
import { VKDateTimePicker } from './components/datetime-picker'
import { VKTimePicker } from './components/time-picker'
import { VKTimeSelect } from './components/time-select'
import { VKRate } from './components/rate'
import { VKInputNumber } from './components/input-number'
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
  VKDivider,
  VKInput,
  VKPinInput,
  VKTagInput,
  VKSlider,
  VKSwitch,
  VKTextarea,
  VKCheckbox,
  VKButtonGroup,
  VKTab,
  VKTabItem,
  VKProgress,
  VKSelect,
  VKRadio,
  VKRadioGroup,
  VKKbd,
  VKTooltip,
  VKToast,
  VKToastProvider,
  VKBreadcrumb,
  VKBreadcrumbItem,
  VKPopover,
  VKCalendar,
  VKDatePicker,
  VKDateTimePicker,
  VKTimePicker,
  VKTimeSelect,
  VKRate,
  VKInputNumber,
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
  VKDivider,
  VKInput,
  VKPinInput,
  VKTagInput,
  VKSlider,
  VKSwitch,
  VKTextarea,
  VKCheckbox,
  VKButtonGroup,
  VKTab,
  VKTabItem,
  VKProgress,
  VKSelect,
  VKRadio,
  VKRadioGroup,
  VKKbd,
  VKTooltip,
  VKToast,
  VKToastProvider,
  VKBreadcrumb,
  VKBreadcrumbItem,
  VKPopover,
  VKCalendar,
  VKDatePicker,
  VKDateTimePicker,
  VKTimePicker,
  VKTimeSelect,
  VKRate,
  VKInputNumber,
}

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
