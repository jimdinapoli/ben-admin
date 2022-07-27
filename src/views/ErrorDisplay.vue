<template>
    <h4>An error has occured:</h4>
    <p> {{ error }}</p>
</template>

<script>
    export default {
        props: ['error']
    }
</script>