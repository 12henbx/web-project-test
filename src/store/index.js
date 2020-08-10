import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, Axios)

// eslint-disable-next-line no-unused-vars
const MOCKY = 'http://www.mocky.io/v2/5e26addf2f00002900a4f5b8'

const state = {
  articles: []
}

const mutations = { //  buat set dan update
  setArticles (state, value) {
    state.articles = value
  }
}

const actions = {
  getArticles ({ commit }) {
    Axios
      .get(MOCKY)
      .then(response => commit('setArticles', response.data))
    // fetch('/api/articles')
    //   .then(res => res.json())
    //   .then(response => commit('setArticles', response.articles))
  }
}

const getters = {
  articleList (state) {
    return state.articles
  }
}

/* eslint-disable eol-last */
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
