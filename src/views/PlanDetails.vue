<template>
    <div v-if="plan">
         <p>{{ plan.id }}</p>
        <h1>{{ plan.name }}</h1>
        <p>{{ plan.Category }}</p>       
    </div>
</template>

<script>
import PlanService from '../services/PlanService.js';
export default {
    props: ['id'],
    data() {
        return {
            plan: null
        }
    },
    created(){
        PlanService.getPlan(this.id)
        .then(response => {
            this.plan = response.data;
        })
        .catch(error => {
            console.log(error);
        })
    }
}

</script>