<template>
    <div class="container">
        <div class="background"></div>
        <div class="title">
            <h1>Subscribe to a plan that fits your business</h1>
        </div>
        <div class="plans">
            <Plan v-for="plan in plans" v-bind:key="plan.name" v-bind:plan="plan"/>
        </div>
    </div>
</template>

<script>
import Plan from './Plan.vue'
export default {
    name: 'Subscribe',
    components: {
        Plan
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

<style lang="less" scoped>
.container {
    margin-top: 80px;
    .title {
        margin-bottom: 80px;
        color: white;
        h1 {
            font-size: 35px;
        }
    }
    .plans {
        display: flex;
        justify-content: center;
    }
}
.background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, rgb(248, 86, 86) 15%, #FC4F4F 40%);
    clip-path: polygon(0 0, 100% 0, 100% 45vh, 0 45vh);
    z-index: -1;
}
</style>
