import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import featureFlags from "@/plugins/featureFlags.js";
// Vue.use(featureFlags);
Vue.config.productionTip = false;

window.App = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
