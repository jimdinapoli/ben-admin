<template>
  <div v-if="plans" class="benefitPlans">
    <BenefitPlanCard v-for="plan in plans" :key="plan.id" :plan="plan"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BenefitPlanCard from '@/components/BenefitPlanCard.vue'
import PlanService from '@/services/PlanService.js'

export default {
  name: 'PlanList',
  components: {
    BenefitPlanCard
  },
  data() {
    return {
      plans: null
    }
  },
  created(){
      PlanService.getPlans()
      .then(response => {
        this.plans = response.data;
      })
      .catch(error => {
        console.log(error);
      })
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
