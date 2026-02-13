import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'
// TS
import dts from 'vite-plugin-dts'

// import { visualizer } from 'rollup-plugin-visualizer'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
    vue(),
    vueJsx(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      outDir: 'dist',
      include: ['src', 'types'],
      exclude: ['src/**/__tests__/*'],
      copyDtsFiles: true,
      afterBuild: async () => {
        const outputDir = resolve(rootDir, 'dist/types')
        await mkdir(outputDir, { recursive: true })
        await copyFile(
          resolve(rootDir, 'types/style.d.ts'),
          resolve(outputDir, 'style.d.ts'),
        )
      },
    }),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      external: [
        'vue',
        /\.test\.(ts|tsx)$/,
        /\.spec\.(ts|tsx)$/,
        /__tests__/,
        /__mocks__/,
      ],
      input: {
        index: 'src/index.ts',
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
      },
      output: [
        {
          format: 'umd',
          dir: 'dist/umd',
          entryFileNames: '[name].umd.js',
          name: 'index',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].esm.js',
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
      name: 'versakit-ui',
    },
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },
})
