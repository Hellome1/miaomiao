import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '大连'
  },
  mutations: {
    changeCityMutation(state, cityname) {
      state.city = cityname
      console.log(state.city)
    }
  },
  actions: {
  },
  modules: {
  }
})
