import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const getDefaultState = () => {
  return {
    token: null,
    config: null
  }
}

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    token: null,
    config: null
  },
  mutations: {
    setToken(state, data) {
      state.token = data.token
    },
    resetState(state) {
      Object.assign(state, getDefaultState())
    },
    setBearer(state) {
      state.config = {
        "headers": {
            "Authorization": "Bearer " + state.token
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
