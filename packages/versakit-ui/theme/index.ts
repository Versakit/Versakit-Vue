// packages/versakit-ui/theme/index.ts
import { reactive, watchEffect } from 'vue'
import { colorMap } from './color'

export type ThemeColorName =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'neutral'

export interface ThemeConfig {
  colors: Record<ThemeColorName, string>
  radius: string
  container: string
}

// 默认配置
const defaultConfig: ThemeConfig = {
  colors: {
    primary: 'blue',
    secondary: 'pink',
    success: 'green',
    info: 'blue',
    warning: 'orange',
    error: 'red',
    neutral: 'zinc',
  },
  radius: '0.25rem',
  container: '90rem',
}

// 创建响应式配置
export const themeConfig = reactive<ThemeConfig>({ ...defaultConfig })

// 设置主题配置
export function setThemeConfig(config: Partial<ThemeConfig>) {
  Object.assign(themeConfig, config)
}

// 应用CSS变量
watchEffect(() => {
  document.documentElement.style.setProperty('--vk-radius', themeConfig.radius)
  document.documentElement.style.setProperty(
    '--vk-container',
    themeConfig.container,
  )

  // 设置颜色
  Object.entries(themeConfig.colors).forEach(([key, value]) => {
    const colorShades = colorMap[value as keyof typeof colorMap]
    if (colorShades) {
      Object.entries(colorShades).forEach(([shade, rgb]) => {
        document.documentElement.style.setProperty(
          `--vk-color-${key}-${shade}`,
          rgb,
        )
      })
    }
  })
})

// 导出一个配置函数
export function defineAppConfig(config: Partial<ThemeConfig>) {
  return config
}
