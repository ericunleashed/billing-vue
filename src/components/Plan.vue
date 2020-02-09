<template>
    <div class="plan-container">
        <div class="price-container">
            <h4>{{plan.name}}</h4>
            <div class="price">{{plan.price}}</div>
        </div>
        <div class="description-container"></div>
        <div class="button-container">
            <button class="btn-subscribe">Subscribe</button>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border: 1px solid lightgray;
    padding: 5px;
    width: 200px;
    min-height: 250px;
    .price-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px;
        .price {
            font-size: 40px;
        }
        h4 {
            margin-bottom: 5px;
        }
    }
}
</style>
