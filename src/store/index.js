import {createStore} from 'vuex'
import postsData from '@/assets/posts.json'

export default createStore({
    state: {
        posts: []
    },
    getters: {
        posts: state => state.posts
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        fetchPosts({commit}) {
            commit('setPosts', postsData.posts)
        }
    }
})
