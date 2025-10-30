import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'animate.css/animate.min.css';
import '@/styles/global.scss';
import '@/styles/print.css';
import '@/assets/font/fix-button/iconfont.css';
import '@/assets/font/contact/iconfont.css';

import App from './App.vue';
import router from '@/router';
import store from '@/store';
import { Flex } from '@/components';
import { Clickoutside } from '@/utils';

const app = createApp(App);

app.component('flex', Flex);
app.directive('clickoutside', Clickoutside);

app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app');


import './style.css'
