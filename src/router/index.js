import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import Stays from '@/views/Stays.vue'
import AuthLayout from '@/components/AuthLayout.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/',
          name: 'stays',
          component: Stays
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        }
      ]
    }
  ]
})

export default router
