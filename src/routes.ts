import { createRouter, createWebHistory } from 'vue-router'
// routes
import Index from './pages/index.vue'
import About from './pages/about.vue'

export const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
