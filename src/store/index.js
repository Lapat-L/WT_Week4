import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_path = "/data/data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  getters: {
    dataPaid: (state) => state.data
  },
  mutations: {
    fetch(state, { res }) {
      state.data = res.data.data
    },
    add(state, { payload } ){
      state.data.push(payload);
    },
  },
  actions: {
    async fetchData ({ commit }) {
      let res = await Axios.get(api_path)
        commit("fetch", {res} )
    },
    addData ( {commit}, payload){
      commit("add", {payload} )
    },
  },
  modules: {
  }
})
