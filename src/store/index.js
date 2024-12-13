import { createStore } from 'vuex'
import postsData from '@/assets/posts.json'
import api from '@/services/api'

export default createStore({
  state: {
    posts: [],
    token: null
  },
  getters: {
    posts: state => state.posts,
    isAuthenticated: state => !!state.token
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    updateReaction(state, { postId, reaction }) {
      const post = state.posts.find(post => post.id === postId)
      if (post) {
        post.reactions[reaction]++
      }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        for (const react in post.reactions) {
          post.reactions[react] = 0
        }
      })
    },
    setToken(state, token) {
      state.token = token
    },
    clearToken(state) {
      state.token = null
    }
  },
  actions: {
    fetchPosts({ commit }) {
      commit('setPosts', postsData.posts)
    },
    updateReaction({ commit }, payload) {
      commit('updateReaction', payload)
    },
    resetLikes({ commit }) {
      commit('resetLikes')
    },
    async login({ commit }, credentials) {
      try {
        const response = await api.post('/login', credentials)
        const token = response.data.token
        commit('setToken', token)
      } catch (error) {
        console.error('Error during login:', error)
        throw error
      }
    },
    async signup({ commit }, credentials) {
      try {
        const response = await api.post('/signup', credentials)
        const token = response.data.token
        commit('setToken', token)
      } catch (error) {
        console.error('Error during signup:', error)
        throw error
      }
    },
    logout({ commit }) {
      commit('clearToken')
    }
  }
})
