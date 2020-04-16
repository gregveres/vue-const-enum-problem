// test/setup.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils';
import VueCompositionApi from '@vue/composition-api'; // <-- Make the import

Vue.use(Vuetify);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;
Vue.config.devtools = false;

// https://vue-test-utils.vuejs.org/
// and this came from: https://github.com/kazupon/vue-i18n/issues/323
// it mocks out the $t function to return the key so you can test that the right key is being used
config.mocks = {
  $t: (key) => key
};
