import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './style.css'
window.$ = window.jQuery = require('jquery');

createApp(App).use(router).mount('#app')
