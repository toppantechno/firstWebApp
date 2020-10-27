import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
// 本番時はstrict=falseに
  strict: true,
  state: {
    selectionJSON: []
  },
  getters: {
    getSelectionJSON: state => {
      return state.selectionJSON
    }
  },
  mutations: {
    updateJSON (state, selection) {
      state.selectionJSON = selection
    }
  },
  actions: {
  },
  modules: {
  }
})
