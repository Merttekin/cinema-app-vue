import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import storeOptions from './stores/store'
import routerOptions from './router/router'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routerOptions);

const store = new Vuex.Store(storeOptions);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
