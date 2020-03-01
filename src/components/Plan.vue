<template>
    <div class="plan-container">
        <div class="price-container">
            <h3>{{plan.name}}</h3>
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
    border-radius: 16px;
    border: 1px solid #E1E7E9;
    background-color: white;
    margin: 20px;
    box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.3);
    .price-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-top: 10px;
        .price {
            font-size: 60px;
        }
        h3 {
            margin-bottom: 30px;
            font-weight: 500;
            color: #FC4F4F;
            text-transform: uppercase;
        }
    }
    .description-container {
        margin: 20px auto;
        .feature {
            border-bottom: 1px solid #eee;
            padding: 1rem;
            &:last-child {
                border-bottom: none;
            }
            &.unavailable {
                color: #dddddd;
                text-decoration: line-through;
            }
        }
    }
    .button-container {
        margin-bottom: 10px;
        width: 70%;
    }
}
</style>