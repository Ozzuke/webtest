import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddPost from '../views/AddPost.vue'
import Signup from "../views/Signup.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'WebDev-X'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login | WebDev-X'
        }
    },
    {
        path: '/add-post',
        name: 'AddPost',
        component: AddPost,
        meta: {
            title: 'Add Post | WebDev-X'
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            title: 'Sign Up | WebDev-X'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'WebDev-X'
    next()
})

export default router
