import type { App, Component } from 'vue'
import { installTheme } from './core/theme'

// 基础组件
import { VKButton } from './components/button/index'
import { VKRow } from './components/row/index'
import { VKCol } from './components/col/index'
import { VKInput } from './components/input/index'
import { VKDialog } from './components/dialog/index'
import { VKDivider } from './components/divider/index'
import { VKBadge } from './components/badge/index'
import { VKCard } from './components/card/index'
import { VKTag } from './components/tag/index'
import { VKDrawer } from './components/drawer/index'
import { VKSwitch } from './components/switch/index'
import { VKRadio } from './components/radio/index'
import { VKMessage } from './components/message/index'
import { VKTextarea } from './components/textarea/index'
import { VKContainer } from './components/container/index'
import { VKHeader } from './components/header/index'
import { VKMain } from './components/main/index'
import { VKNotification } from './components/notification/index'
import { VKBacktop } from './components/backtop/index'
import { VKPanel } from './components/panel/index'
import { VKSegmented } from './components/segmented/index'
import { VKFooter } from './components/footer/index'
import { VKAside } from './components/aside/index'
import { VKProgress } from './components/progress/index'
import { VKTooltip } from './components/tooltip/index'
import { VKSlider } from './components/slider/index'
import { VKFlex } from './components/flex/index'
import { VKTable } from './components/table/index'
import { VKInputOtp } from './components/inputotp/index'
import { VKCalendar } from './components/calendar/index'
import { VKSkeleton } from './components/skeleton/index'
import { VKPagination } from './components/pagination/index'
import { VKImage } from './components/image/index'
import { VKInputTag } from './components/inputtag/index'
import { VKRate } from './components/rate/index'
import { VKSplitter } from './components/splitter/index'
import { VKNoticeBar } from './components/noticebar/index'
import { VKColorPicker } from './components/colorpicker/index'
import { VKInputNumber } from './components/inputnumber/index'
import { VKDataPicker } from './components/datapicker/index'
import { VKDateTimePicker } from './components/datetimepicker/index'
import { VKTimePicker } from './components/timepicker/index'
import { VKTimeSelect } from './components/timeselect/index'
import { VKPopover } from './components/popover/index'
import { VKSelect } from './components/select/index'

// 层级组件
import { VKCarousel, VKCarouselItem } from './components/carousel/index'
import { VKCollapse, VKCollapseItem } from './components/collapse/index'
import { VKTimeline, VKTimeLineItem } from './components/timeline/index'
import { VKTab, VKTabItem } from './components/tab/index'
import { VKBreadcrumb, VKBreadcrumbItem } from './components/breadcrumb/index'
import { VKDescriptions, VKDescriptionsItem } from './components/descriptions'
import { VKCheckbox, VKCheckboxGroup } from './components/checkbox/index'
import { VKStepItem, VKSteps } from './components/steps/index'
import { VKAvatar, VKAvatarGroup } from './components/avatar/index'
import { VKDropdownMenu, VKDropdownMenuItem } from './components/dropdown/index'
import { VKUpload, VKUploadDragger } from './components/upload/index'

// 样式
import './style/index.css'

const components: Component[] = [
  VKSelect,
  VKPopover,
  VKUpload,
  VKUploadDragger,
  VKTimeSelect,
  VKTimePicker,
  VKDateTimePicker,
  VKDropdownMenu,
  VKDropdownMenuItem,
  VKDataPicker,
  VKInputNumber,
  VKAvatarGroup,
  VKStepItem,
  VKSteps,
  VKNoticeBar,
  VKSplitter,
  VKRate,
  VKInputTag,
  VKImage,
  VKCheckbox,
  VKCheckboxGroup,
  VKPagination,
  VKSkeleton,
  VKCalendar,
  VKDescriptions,
  VKDescriptionsItem,
  VKInputOtp,
  VKBreadcrumb,
  VKBreadcrumbItem,
  VKTabItem,
  VKTimeline,
  VKTimeLineItem,
  VKCol,
  VKTag,
  VKNotification,
  VKMessage,
  VKBadge,
  VKCarouselItem,
  VKCarousel,
  VKFlex,
  VKSlider,
  VKTooltip,
  VKProgress,
  VKAside,
  VKFooter,
  VKCollapse,
  VKCollapseItem,
  VKButton,
  VKRow,
  VKInput,
  VKDialog,
  VKAvatar,
  VKCard,
  VKPanel,
  VKDivider,
  VKDrawer,
  VKSwitch,
  VKRadio,
  VKTextarea,
  VKContainer,
  VKHeader,
  VKMain,
  VKTab,
  VKBacktop,
  VKSegmented,
  VKTable,
  VKColorPicker,
]

export {
  VKSelect,
  VKPopover,
  VKUpload,
  VKUploadDragger,
  VKTimeSelect,
  VKTimePicker,
  VKDateTimePicker,
  VKDropdownMenu,
  VKDropdownMenuItem,
  VKDataPicker,
  VKInputNumber,
  VKAvatarGroup,
  VKStepItem,
  VKSteps,
  VKNoticeBar,
  VKSplitter,
  VKRate,
  VKInputTag,
  VKImage,
  VKCheckbox,
  VKCheckboxGroup,
  VKPagination,
  VKSkeleton,
  VKCalendar,
  VKDescriptions,
  VKDescriptionsItem,
  VKInputOtp,
  VKBreadcrumb,
  VKBreadcrumbItem,
  VKTabItem,
  VKTimeline,
  VKTimeLineItem,
  VKCol,
  VKTag,
  VKNotification,
  VKMessage,
  VKBadge,
  VKCarouselItem,
  VKCarousel,
  VKFlex,
  VKSlider,
  VKTooltip,
  VKProgress,
  VKAside,
  VKFooter,
  VKSegmented,
  VKCollapse,
  VKCollapseItem,
  VKButton,
  VKRow,
  VKInput,
  VKDialog,
  VKAvatar,
  VKCard,
  VKPanel,
  VKDivider,
  VKDrawer,
  VKSwitch,
  VKRadio,
  VKTextarea,
  VKContainer,
  VKHeader,
  VKMain,
  VKTab,
  VKBacktop,
  VKTable,
  VKColorPicker,
}

// 定义 ThemeOptions 类型
type ThemeOptions = {
  preset: any // 由于不清楚 Element 的具体类型，暂时使用 any
}

// 定义 VersakitOptions 类型
type VersakitOptions = {
  theme?: ThemeOptions
}

const Versakit = {
  /**
   * 安装方法
   * @param app - Vue 应用实例
   * @param options - 可选的配置项
   * @param options.theme - 主题配置项
   * @param options.theme.preset - 预设主题
   */
  install: (app: App, options?: VersakitOptions) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }

    if (options?.theme) {
      installTheme(options.theme)
    }
  },
}

export { Versakit }
