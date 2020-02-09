<template>
    <div class="container">
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
    props: ['plans']
}
</script>

<style lang="less" scoped>
.container {
    width: 60%;
    margin: 0 auto;
    .plans {
        display: flex;
        justify-content: center;
    }
}
</style>
