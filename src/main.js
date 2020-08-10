import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store'
import { makeServer } from './api/server'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
