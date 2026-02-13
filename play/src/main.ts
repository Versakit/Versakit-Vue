import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Versakit } from '@versakit/vue'
import '@versakit/vue/style'

createApp(App).use(Versakit).mount('#app')
