import PlanService from '@/services/PlanService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Jim DiNapoli',
    plans: [],
    plan: {}
  },
  getters: {
  },
  mutations: {
    ADD_PLAN(state, plan){
      state.plans.push(plan)
    },
    SET_PLANS(state, plans){
      state.plans = plans
    },
    SET_PLAN(state, plan){
      state.plan = plan
    }
  },
  actions: {
    createPlan({ commit }, plan){
      PlanService.insertPlan(plan)
          .then(response => {
            commit('ADD_PLAN', response.data)
            commit('SET_PLAN', response.data)
          })
          .catch(error => {
              throw(error)
          })
    },

    /// Get all plans.
    fetchPlans({ commit }){
      return PlanService.getPlans()
      .then(response => {
        commit('SET_PLANS', response.data)
      })
      .catch(error => {
        throw(error)
      })
    },

    /// Get a plan by Id.
    fetchPlan({ commit, state }, id){
      const existingPlan = state.plans.find(plan => plan.id == id)
      if(existingPlan) {
        commit('SET_PLAN', existingPlan)
      } else {
          return PlanService.getPlan(id)
          .then(response => {
              commit('SET_PLAN', response.data)
          })
          .catch(error => {
              throw(error)
          })
      }
    }
  },
  modules: {
  }
})
