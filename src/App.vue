<template>
  <Week /> <!-- The "Week" component houses the single page app. -->
</template>


<script>
// We must import any components we want to use.
import Week from "./components/Week.vue"


export default {
  // We have to label our hook in index.html.
  name: 'App',

  // We must register any components we import if we want them to appear.
  components: {
    Week
  },
  
  // we can list data to be made available to the componenet with data() {}.
  // We can also list methods we want made available in the html and we can
  // register lifecycle hooks here.
}
</script>


<style>
/* Some simple app wide styling */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393E46;
  margin-top: 6px;
}
</style>
