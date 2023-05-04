import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import  layout from'./layouts/MainLayout.vue'

const app = createApp(App)
app.use(createPinia())
app.component('v-layout',layout)



app.use(router)
app.mount('#app')
