import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/styles/index.css';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import VueGoogleMap from 'vuejs-google-maps'

Vue.config.productionTip = false;

Vue.use(Vuesax, {})
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
