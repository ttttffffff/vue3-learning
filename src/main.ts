
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const app=createApp(App)
const pinia=createPinia()
//安装pinia
app.use(pinia)
app.mount('#app')
