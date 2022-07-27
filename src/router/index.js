import { createRouter, createWebHistory } from 'vue-router'
import PlanList from '../views/PlanList.vue'
import PlanDetails from '../views/PlanDetails.vue'
import PlanCreate from '../views/PlanCreate.vue'
import About from '../views/About.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'
import BaseInput from '../components/BaseInput.vue'

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
    path: '/planCreate',
    name: 'PlanCreate',
    props: true,
    component: PlanCreate, BaseInput
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/error/:error',
    name: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
