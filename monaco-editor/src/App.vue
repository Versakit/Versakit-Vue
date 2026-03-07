<script setup lang="ts">
import { Repl, useStore, useVueImportMap, type ImportMap } from '@vue/repl'
import Monaco from '@vue/repl/monaco-editor'
import { ref, computed, watch, onMounted } from 'vue'

const { importMap: builtinImportMap } = useVueImportMap({
  runtimeDev:
    'https://cdn.jsdelivr.net/npm/@vue/runtime-dom@3.5.25/dist/runtime-dom.esm-browser.js',
})

const localVersakitUrl = './versakit-vue-dist/esm/index.esm.js'
const localVersakitStyle = './versakit-vue-dist/esm/vue.css'

const importMap = ref<ImportMap>({
  imports: {
    ...builtinImportMap.value.imports,
    '@versakit/vue': localVersakitUrl,
  },
})

const isDark = ref(false)
const theme = computed(() => (isDark.value ? 'dark' : 'light'))

const toggleTheme = () => {
  isDark.value = !isDark.value
}

const updatePreviewTheme = () => {
  const iframe = document.querySelector('.vue-repl iframe') as HTMLIFrameElement
  if (
    !iframe ||
    !iframe.contentDocument ||
    !iframe.contentDocument.documentElement
  )
    return

  const doc = iframe.contentDocument
  const html = doc.documentElement

  html.classList.toggle('dark', isDark.value)
}

// Watch for theme changes
watch(isDark, updatePreviewTheme)

onMounted(() => {
  // Watch for iframe creation/replacement
  const replContainer = document.querySelector('.vue-repl')
  if (replContainer) {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          const iframe = document.querySelector(
            '.vue-repl iframe',
          ) as HTMLIFrameElement
          if (iframe) {
            updatePreviewTheme()
            iframe.onload = updatePreviewTheme
          }
        }
      }
    })
    observer.observe(replContainer, { childList: true, subtree: true })
  }
})

const previewOptions = {
  headHTML: `
    <link rel="stylesheet" href="${localVersakitStyle}">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
      tailwind.config = {
        darkMode: 'class'
      }
    <\/script>
    <style>
      :root {
        color-scheme: light;
      }
      :root.dark {
        color-scheme: dark;
      }
      body {
        background-color: #ffffff;
        color: #333333;
        transition: background-color 0.3s, color 0.3s;
      }
      .dark body {
        background-color: #1a1a1a;
        color: #ffffff;
      }
    </style>
  `,
}

const store = useStore({
  builtinImportMap: importMap as any,
})

const initialCode = `
<script setup>
import { Button } from '@versakit/vue'
<\/script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4">Versakit Vue Playground</h1>
    <Button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Hello Tailwind
    </Button>
    <div class="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
      <p class="text-gray-800 dark:text-green-200">
        This box changes color in dark mode.
      </p>
    </div>
  </div>
</template>
`

store.setFiles({
  'App.vue': initialCode,
})
</script>

<template>
  <div class="sandbox-container" :class="{ dark: isDark }">
    <div class="header">
      <div class="title">Versakit Playground</div>
      <button class="theme-toggle" @click="toggleTheme">
        {{ isDark ? '🌞' : '🌙' }}
      </button>
    </div>
    <div class="repl-wrapper">
      <Repl
        :theme="theme"
        :editor="Monaco"
        :store="store"
        :show-compile-output="true"
        :preview-options="previewOptions"
      />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
}

.sandbox-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  --header-height: 50px;
  --bg: #fff;
  --bg-soft: #f8f8f8;
  --border: #ddd;
  --text: #333;
  --header-bg: #fff;
}

.sandbox-container.dark {
  --bg: #1a1a1a;
  --bg-soft: #242424;
  --border: #383838;
  --text: #fff;
  --header-bg: #1a1a1a;
}

.header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);
  background-color: var(--header-bg);
  color: var(--text);
  box-sizing: border-box;
}

.title {
  font-weight: bold;
  font-size: 1.1rem;
}

.theme-toggle {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--bg-soft);
  color: var(--text);
  cursor: pointer;
  font-size: 0.9rem;
}

.theme-toggle:hover {
  background-color: var(--border);
}

.repl-wrapper {
  height: calc(100vh - var(--header-height));
}

.vue-repl {
  height: 100%;
  --color-branding: #42b883;
  --color-branding-dark: #42b883;
}
</style>
