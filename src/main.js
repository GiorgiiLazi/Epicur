import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'

const app = createApp(App)

components.forEach(component =>{
    app.component(component.name, component)
})
console.log(components)

app.use(router).mount('#app')
