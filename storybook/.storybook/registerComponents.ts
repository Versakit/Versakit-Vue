// 导入所有需要的组件
import { VKButton } from '@versakit/vue'
// 导入其他组件...

export const components = {
  VKButton,
  // 其他组件...
}

export function registerComponents(app: any) {
  // 注册所有组件
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}
