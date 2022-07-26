<template>
  <div>
    <h1>Create a new plan</h1>
    <form @submit.prevent="sendForm">
      
      <fieldset>
        <legend>Plan categories</legend>
        <BaseSelect
          :options="categories"
          v-model="plan.category"
          label="Select a category"
        />
      </fieldset>

      <fieldset>
        <legend>Plan Details</legend>

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
      </fieldset>

      <fieldset>
        <legend>Eligibility</legend>

        <p>Does this plan require Eligibility?</p>
        <div>
          <BaseRadioGroup
            v-model="plan.requiresEligibility"
            name="requiresEligibility"
            :options="requireEligibilityOptions"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Options</legend>
        <div>
          <BaseCheckbox
            v-model="plan.planOptions.openEnrollmentOnly"
            label="Open Enrollment Only"
          />
        </div>

        <div>
          <BaseCheckbox
            v-model="plan.planOptions.employerPaid"
            label="Employer Paid"
          />
        </div>
      </fieldset>

      <button class="btn-submit" type="submit">Submit</button>
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
                requiresEligibility: 1,
                planOptions: {
                  openEnrollmentOnly: true,
                  employerPaid: false
                }
            },
            requireEligibilityOptions: [
              { label: 'Yes', value: 1 },
              { label: 'No', value: 0 }
            ]
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

