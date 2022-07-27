<template>
  <div v-if="plans" class="benefitPlans">
    <BenefitPlanCard v-for="plan in plans" :key="plan.id" :plan="plan"/>
  </div>
</template>

<script>
import BenefitPlanCard from '@/components/BenefitPlanCard.vue'

export default {
  name: 'PlanList',
  components: {
    BenefitPlanCard
  },
  created(){
    this.$store.dispatch('fetchPlans')
    .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
  },
  computed: {
    plans() {
      return this.$store.state.plans
    }
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
