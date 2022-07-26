<template>
<router-link class="plan-link"
 :to=" { name: 'PlanDetails', params: { id: plan.id }}">
  <div class="plan-card">
    <h4> {{ plan.title }}</h4>
    <h4> {{ plan.name }}</h4>
    <span> {{ plan.category }}</span>
    <p> {{ plan.description }}</p>
  </div>
</router-link>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.plan-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.plan-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.plan-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
