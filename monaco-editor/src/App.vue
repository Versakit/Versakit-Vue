<script setup lang="ts">
import { Repl, useStore, useVueImportMap, type ImportMap } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import { ref } from 'vue'

const { importMap: builtinImportMap } = useVueImportMap({
  runtimeDev:
    'https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.5.25/dist/runtime-dom.esm-browser.js',
})

// Point to local dev server middleware
const localVersakitUrl = '/versakit-vue-dist/esm/index.esm.js'

const importMap = ref<ImportMap>({
  imports: {
    ...builtinImportMap.value.imports,
    '@versakit/vue': localVersakitUrl,
  },
})

const store = useStore({
  builtinImportMap: importMap as any,
})

// Initial content
const initialCode = `
<script setup>
import { onMounted } from 'vue'
import { Button } from '@versakit/vue'
<\/script>

<template>
  <div style="padding: 20px;">
    <h1>Versakit Vue Playground</h1>
    <Button>Hello World</Button>
  </div>
</template>
`

store.setFiles({
  'App.vue': initialCode,
})
</script>

<template>
  <Repl :editor="Monaco" :store="store" :show-compile-output="true" />
</template>

<style>
#app {
  height: 100vh;
  margin: 0;
  --bg: #fff;
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --text-light: #888;
  --font-code: Menlo, Monaco, Consolas, 'Courier New', monospace;
  color: #333;
}
.vue-repl {
  height: 100vh;
}
</style>
