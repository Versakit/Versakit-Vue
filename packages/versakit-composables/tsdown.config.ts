import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  dts: true,
  format: ['esm', 'cjs'],
  outDir: 'dist',
  clean: true,
  minify: true,
  sourcemap: true,
  target: 'es2020',
  treeshake: true,
  external: ['vue', '@vueuse/core'],
})
