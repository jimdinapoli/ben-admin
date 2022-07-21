<template>
  <div class="benefit-plan-card">
    <span> {{ plan.category }}</span>
    <h4> {{ plan.name }}</h4>
  </div>
</template>

<script>
export default {
  name: 'BenefitPlanCard',
  props: {
    plan: Object
  }
}
</script>

<style scoped>
.benefit-plan-card{
  padding: 20px;
  width: 300px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
