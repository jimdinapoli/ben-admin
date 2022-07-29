<template>
    <div v-if="plan.currentPlan">
        <h4>{{ plan.currentPlan.name }}</h4>
        <p>{{ plan.currentPlan.category }}</p>       
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    props: ['id'],
    created(){
       this.fetchPlan(this.id)
       .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    },
    computed:{
       ...mapState(['plan'])
    },
    methods: {
        ...mapActions('plan', ['fetchPlan'])
    }
}

</script>