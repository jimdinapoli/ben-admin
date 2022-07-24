import { createRouter, createWebHistory } from 'vue-router'
import PlanList from '../views/PlanList.vue'
import PlanDetails from '../views/PlanDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'PlanList',
    component: PlanList
  },
  {
    path: '/plans/:id',
    name: 'PlanDetails',
    props: true,
    component: PlanDetails
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
