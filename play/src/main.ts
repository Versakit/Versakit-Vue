import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Versakit } from '@versakit/vue'
import { lazyLoadDirective, virtualListDirective } from '@versakit/directives'
import '@versakit/vue/style'

const app = createApp(App)
app.use(Versakit)
app.directive('lazy-load', lazyLoadDirective)
app.directive('virtual-list', virtualListDirective)
app.mount('#app')
