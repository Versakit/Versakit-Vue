import { withInstall } from '@versakit/shared'
import Tabs from './src/index.vue'
import TabList from './src/TabList.vue'
import Tab from './src/Tab.vue'
import TabPanels from './src/TabPanels.vue'
import TabPanel from './src/TabPanel.vue'

export const VKTabs = withInstall(Tabs)
export const VKTabList = withInstall(TabList)
export const VKTab = withInstall(Tab)
export const VKTabPanels = withInstall(TabPanels)
export const VKTabPanel = withInstall(TabPanel)

// 为类型推断提供组件类型
export type VKTabsInstance = InstanceType<typeof Tabs>
export type VKTabListInstance = InstanceType<typeof TabList>
export type VKTabInstance = InstanceType<typeof Tab>
export type VKTabPanelsInstance = InstanceType<typeof TabPanels>
export type VKTabPanelInstance = InstanceType<typeof TabPanel>
