import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Users from '@/components/Users'
import Quizzes from '@/components/Quizzes'

// let Vue know that we use Vue Router
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        },
        {
            path: '/quizzes',
            name: 'Quizzes',
            component: Quizzes
        }
    ]
})