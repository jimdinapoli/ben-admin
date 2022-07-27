<template>
  <h1>Plans available for {{ user.userInfo.name }}</h1>
  <div v-if="plan.plans" class="benefitPlans">
    <BenefitPlanCard v-for="plan in plan.plans" :key="plan.id" :plan="plan"/>
  </div>
</template>

<script>
import BenefitPlanCard from '@/components/BenefitPlanCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PlanList',
  components: {
    BenefitPlanCard
  },
  created(){
    this.fetchPlans()
    .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
  },
  computed: {
    ...mapState(['user', 'plan'])
  },
  methods: {
    ...mapActions('plan', ['fetchPlans'])
  }
}
</script>
<style scoped>
  .benefitPlans{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
