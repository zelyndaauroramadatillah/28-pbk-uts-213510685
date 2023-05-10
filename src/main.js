import { createApp } from 'vue'
import App from './App.vue'
import DatePicker from 'vue3-datepicker'

import router from './router'
const app = createApp(App).use(router).mount('#app').component('date-picker', DatePicker)



