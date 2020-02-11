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
            <button class="btn-default btn-subscribe">Subscribe</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Plan',
    props: ['plan']
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
    border: 1px solid lightgray;
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
            margin-bottom: 5px;
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
        .btn-subscribe {
            background-color: #FC4F4F;
            &:hover {
                background-color: rgb(214, 54, 54);
            }
        }
    }
}
</style>