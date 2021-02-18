import Vue from 'vue'
import Vuex from 'vuex'
import driver from '@/store/driver'
import logic from '@/store/logic'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    logic,
    driver,
  }
})
