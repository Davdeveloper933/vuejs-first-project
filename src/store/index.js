import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import VueRouter from "vue-router"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
Vue.use(VueRouter)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
  modules: {
    post
  },
  plugins: [vuexLocal.plugin]
})

