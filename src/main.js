import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTilt from 'vue-tilt.js'


createApp(App).use(router).use(VueTilt).mount('#app')
