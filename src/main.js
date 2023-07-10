import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/style.css'
import '../node_modules/axios'

createApp(App).use(store).use(router).mount('#app')
