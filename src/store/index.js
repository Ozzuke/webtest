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
        }
    },
    actions: {
        fetchPosts({commit}) {
            commit('setPosts', postsData.posts)
        },
        updateReaction({commit}, payload) {
            commit('updateReaction', payload)
        },
        resetLikes({commit}) {
            commit('resetLikes')
        }
    }
})
