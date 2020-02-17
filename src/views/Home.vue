<template>
  <div>
    <Subscribe v-bind:plans="plans"/>
  </div>
</template>

<script>
import Subscribe from '../components/Subscribe.vue'

export default {
  name: 'Home',
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
</style>
