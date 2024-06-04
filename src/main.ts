import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router';
import pinia from './stores';
import icons from './plugins/icons';
import '@/styles/tailwind.css';
import '@/styles/reset.scss';
import '@/styles/global.scss';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(icons);

app.mount('#app');
