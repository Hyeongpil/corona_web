import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/styles/index.css';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGoogleMap from 'vuejs-google-maps'


axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;

Vue.use(Vuesax, {})
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyDPwWwSap_t5UXFRh1FcroLodGNSepJDSM',
    libraries: []
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
