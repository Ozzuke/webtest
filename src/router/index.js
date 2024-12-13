import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddPost from '../views/AddPost.vue'
import Signup from "../views/Signup.vue"
import ContactUs from "../views/ContactUs.vue"
import SinglePostView from "../views/SinglePostView.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'WebDev-X',
            requiresAuth: true
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
            title: 'Add Post | WebDev-X',
            requiresAuth: true
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            title: 'Sign Up | WebDev-X'
        }
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: {
            title: 'Contact Us | WebDev-X'
        }
    },
    {
        path: '/post/:id',
        name: 'SinglePostView',
        component: SinglePostView,
        meta: {
            title: 'Post | WebDev-X',
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'WebDev-X'
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = !!localStorage.getItem('token')

    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router
