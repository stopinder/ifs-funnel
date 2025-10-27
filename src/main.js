import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './main.css'

// Debug: confirm router is actually being used at runtime
console.log('*** APP BOOTED WITH ROUTER ***', router)

const app = createApp(App)

app.use(router)

app.mount('#app')
