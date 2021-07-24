<template>
  <Week />
</template>


<script>
// We must import our components here from components folder.
import Week from "./components/Week.vue"


export default {
  // We have to label our hook in index.html
  name: 'App',

  // we declare our componenets that we have imported
  components: {
    Week
  },

  // we can list data to be made available elsewhere


  // created is a lifecycle method, so it will fire on some event from the app lifecycle.
  // In this case, created fires when the page is loaded. We use it to simply populate some
  // tasks into data.
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393E46;
  margin-top: 6px;
}
</style>
