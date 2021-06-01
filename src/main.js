import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import Common from '@/plugins/common.js';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(Common);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
