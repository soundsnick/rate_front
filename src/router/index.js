import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/restore',
    name: 'Restore',
    component: () => import('../views/Restore.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue')
  },
  {
    path: '/list/:tab',
    name: 'ListTab',
    component: () => import('../views/List.vue'),
    props: true
  },
  {
    path: '/reviews/:code/:id',
    name: 'Reviews',
    component: () => import('../views/Reviews.vue')
  },
  {
    path: '/confirm/user/:id/:code',
    name: 'Confirm',
    component: () => import('../views/Confirm.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/errors/404.vue'),
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
