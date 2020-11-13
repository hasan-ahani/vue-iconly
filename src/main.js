import Vue from 'vue'
import App from './test/App.vue'
import Iconly from "./install";

Vue.config.productionTip = false
Vue.use(Iconly);
new Vue({
  render: h => h(App),
}).$mount('#app')
