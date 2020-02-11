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
          price: 49,
          currency: '$',
          features: [
            {feature: '3 Users', available: true},
            {feature: '125,000 API calls', available: true},
            {feature: 'Unleashed University', available: false},
            {feature: 'Premium Support', available: false}
          ]
        },
        {
          name: 'Large',
          price: 89,
          currency: '$',
          features: [
            {feature: '8 Users', available: true},
            {feature: '250,000 API calls', available: true},
            {feature: 'Unleashed University', available: true},
            {feature: 'Premium Support', available: false}
          ]
        },
        {
          name: 'Large Plus',
          price: 129,
          currency: '$',
          features: [
            {feature: '20 Users', available: true},
            {feature: '500,000 API calls', available: true},
            {feature: 'Unleashed University', available: true},
            {feature: 'Premium Support', available: true}
          ]
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
.btn-default {
  font-size: 16px;
  font-weight: 500;
  height: 38px;
  padding: 0 30px;
  background-color: #4a4a4a;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  z-index: 1;
  line-height: normal;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
</style>
