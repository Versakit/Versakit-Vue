import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue()],
  resolve: {
    alias: {
      '@versakit/vue/style': path.resolve(
        __dirname,
        '../packages/versakit-vue/src/style/index.css',
      ),
      '@versakit/vue': path.resolve(
        __dirname,
        '../packages/versakit-vue/src/index.ts',
      ),
    },
  },
})
