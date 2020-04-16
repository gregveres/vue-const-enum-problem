import Vue from 'vue';

import './plugins/composition-api';
import vuetify from './plugins/vuetify';

import App from '@/pages/app/App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
