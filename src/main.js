import Vue from 'vue';

import router from './routes';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app');
