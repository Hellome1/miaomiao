import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.filter('actorfilter', (data) => {
  var newList = data ? data.map(item => item.name) : null
  return newList ? newList.join(' ') : '暂无主演信息'
})

Vue.filter('setWH', (data, WH) => {
  return data.replace('w.h', WH)
})

Vue.filter('Distance', (data) => {
  return parseInt(data * 100) / 100 + 'km'
})

Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
