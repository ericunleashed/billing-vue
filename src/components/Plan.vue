<template>
    <div class="plan-container">
        <div class="price-container">
            <h4>{{plan.name}}</h4>
            <div class="price">{{plan.currency}}{{plan.price}}</div>
        </div>
        <div class="description-container">
            <div class="feature" v-for="feature in plan.features" v-bind:key="feature.feature" 
            v-bind:class="{'unavailable':!feature.available}" v-bind:feature="feature">{{feature.feature}}</div>
        </div>
        <div class="button-container">
            <button class="btn-default btn-subscribe"  v-on:click="Next()">Subscribe</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'Plan',
    props: ['plan'],
    methods: {
        ...mapMutations(['setPlan']),
        Next() {
            this.setPlan(this.plan);
            this.$router.push({path:'modules'});
        }
    }
}
</script>

<style lang="less" scoped>
.plan-container {
    flex: 1 1 30%;
    min-width: 200px;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 5px;
    color: #666;
    border-radius: 5px;
    border: 1px solid #E1E7E9;
    margin: 5px;
    .price-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-top: 10px;
        .price {
            font-size: 40px;
        }
        h4 {
            margin-top: 5px;
            font-weight: 500;
        }
    }
    .description-container {
        margin: 20px auto;
        .feature {
            margin-bottom: 7px;
            color: #FC4F4F;
            &.unavailable {
                color: #dddddd;
                text-decoration: line-through;
            }
        }
    }
    .button-container {
        margin-bottom: 10px;
    }
}
</style>