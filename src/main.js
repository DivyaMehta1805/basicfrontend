import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './index.css'
import App from './App.vue'
import axios from 'axios'


const app = createApp(App);
app.config.globalProperties.$axios = axios

app.use(createPinia());
app.mount('#app');