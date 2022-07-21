<template>
  <div class="events">
    <BenefitPlanCard v-for="plan in plans" :key="plan.id" :plan="plan"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BenefitPlanCard from '@/components/BenefitPlanCard.vue'
import axios from 'axios'

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
      axios.get(""
      ).then(response => {
        console.log('events:', response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
<style scoped>
  .events{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
