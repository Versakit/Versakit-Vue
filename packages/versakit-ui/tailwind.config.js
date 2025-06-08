// packages/versakit-ui/tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--vk-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--vk-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--vk-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--vk-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--vk-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--vk-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--vk-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--vk-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--vk-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--vk-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--vk-color-primary-950) / <alpha-value>)',
        },
        // 添加其他颜色
        secondary: {
          /* 同样的结构 */
        },
        success: {
          /* 同样的结构 */
        },
        info: {
          /* 同样的结构 */
        },
        warning: {
          /* 同样的结构 */
        },
        error: {
          /* 同样的结构 */
        },
        neutral: {
          /* 同样的结构 */
        },
      },
      borderRadius: {
        DEFAULT: 'var(--vk-radius)',
      },
      backgroundColor: {
        DEFAULT: 'var(--vk-bg)',
      },
      textColor: {
        DEFAULT: 'var(--vk-text)',
      },
      borderColor: {
        DEFAULT: 'var(--vk-border)',
      },
    },
  },
})
