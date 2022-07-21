import { createRouter, createWebHistory } from 'vue-router'
import PlanList from '../views/PlanList.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'PlanList',
    component: PlanList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
