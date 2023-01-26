import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// new Vue({
//     router,
// })

const app = createApp(App).use(router);

app.mount('#app');

