import { withInstall } from '@versakit/shared'
import Tab from './src/index.vue'
import TabItem from './src/TabItem.vue'

export const VKTab = withInstall(Tab)
export const VKTabItem = withInstall(TabItem)

// 为类型推断提供组件类型
export type VKTabInstance = InstanceType<typeof Tab>
export type VKTabItemInstance = InstanceType<typeof TabItem>
