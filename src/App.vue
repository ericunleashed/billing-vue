<template>
  <div id="app">
    <Subscribe v-bind:plans="plans"/>
  </div>
</template>

<script>
import Subscribe from './components/Subscribe.vue'

export default {
  name: 'App',
  components: {
    Subscribe
  },
  data() {
    return {
      plans: [
        {
          name: 'Medium',
          price: 49
        },
        {
          name: 'Large',
          price: 89
        },
        {
          name: 'Large Plus',
          price: 129
        }
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
