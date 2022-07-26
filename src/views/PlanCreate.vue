<template>
  <div>
    <h1>Create a new plan</h1>
    <form @submit.prevent="sendForm">
      
      <BaseSelect
        :options="categories"
        v-model="plan.category"
        label="Select a category"
      />

      <h3>Plan Description</h3>

      <BaseInput
        v-model="plan.name"
        label="Name"
        type="text"
        class="field"
      />

      <BaseInput
        v-model="plan.title"
        label="Title"
        type="text"
        class="field"
      />

      <BaseInput
        v-model="plan.description"
        label="Description"
        type="text"
        class="field"
      />

      <button type="submit">Submit</button>
    </form>

    <pre>{{ plan }}</pre>
  </div>
</template>

<script>
import PlanService from '../services/PlanService.js';
export default {
    data() {
        return {
            categories: [
                "HMO",
                "Direct Access",
                "HMO - HAS",
                "HSA"
            ],
            plan: {
                id: 0,
                category: "",
                name: "",
                title: "",
                description: "",
                requiresEligibility: 1
            }
        };
    },
    methods: {
      sendForm() {
        PlanService.insertPlan(this.plan)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })
      }
    }
}
</script>

