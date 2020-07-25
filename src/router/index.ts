import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// todo: isAuthenticated needs to be defined
// router.beforeEach((to, from, next) => {
//   if (record.meta.requiresAuth && !isAuthenticated) {
//     next({ name: 'Login' })
//   } else next()
// })

export default router
