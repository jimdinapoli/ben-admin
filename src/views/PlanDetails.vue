<template>
    <div v-if="plan">
         <p>{{ plan.id }}</p>
        <h1>{{ plan.name }}</h1>
        <p>{{ plan.category }}</p>       
    </div>
</template>

<script>
export default {
    props: ['id'],
    created(){
       this.$store.dispatch('fetchPlan', this.id)
       .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    },
    computed:{
        plan(){
            return this.$store.state.plan
        }
    }
}

</script>