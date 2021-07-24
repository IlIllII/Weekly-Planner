<template>
    <h2>{{day}}</h2>
</template>



<script>
// The Day is a base component that is used at the head
// of each Task list.
export default {
    name: "Day",
    props: {
        day: String,
    }
}
</script>


<style scoped>
/* This component is styled from its parent. */
</style>