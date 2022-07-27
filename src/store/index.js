import { createStore } from 'vuex'
import user from './modules/user.js'
import plan from './modules/plan.js'

export default createStore({
  modules: {
    user,
    plan
  }
})
