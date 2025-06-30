import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import routerSetup from './router.js'

createApp(App).use(routerSetup).mount('#app')
