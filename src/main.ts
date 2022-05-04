import { createApp } from 'vue';
import Antd from 'ant-design-vue';

import App from './App.vue';

import './registerServiceWorker';

import './assets/less/antd.less';

import router from './router';
import store from './store';

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app');
