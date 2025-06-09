import { withInstall } from '@versakit/shared'
import Progress from './src/index.vue'

export const VKProgress = withInstall(Progress)

// 为类型推断提供组件类型
export type VKProgressInstance = InstanceType<typeof Progress>

// 导出类型
export * from './src/type'
