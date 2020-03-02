<template>
    <div class="cart-container">
        <div class="plan-container" v-if="cart.plan">
            <div class="name">Base Plan: <span>{{cart.plan.name}}</span></div>
            <div class="price">{{currency}}{{cart.plan.price.toFixed(2)}}</div>
        </div>
        <div class="modules-container" v-for="module in cart.modules" v-bind:key="module.name">
            <div class="name">Module: <span>{{module.name}}</span></div>
            <div class="price">{{currency}}{{module.price.toFixed(2)}}</div>
        </div>
        <div class="plan-container" v-if="!cart.plan && cart.modules.length === 0" id="empty">Your cart is empty</div>
        <div class="total-container">
            <div class="total" id="subtotal">
                <span>Subtotal:</span>
                <div>{{currency}}{{subtotal.toFixed(2)}}</div>
            </div>
            <div class="total" id="tax">
                <span>GST(15%):</span>
                <div>{{currency}}{{tax}}</div>
            </div>
            <div class="total" id="total">
                <span>Total:</span>
                <div>{{currency}}{{total}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Cart",
    computed: mapGetters(['cart', 'subtotal', 'tax', 'total', 'currency']),
    methods: {}
};
</script>

<style  lang="less" scoped>
.cart-container {
    background-color: white;
    min-width: 350px;
    border: 1px solid #E1E7E9;   
    border-radius: 5px;
    .plan-container, .modules-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
    }
    .total-container {
        border-top: 1px solid #E1E7E9;
        .total {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 10px;
            div {
                font-weight: 600;
            }
        }

        #total {
            border-top: 1px solid #E1E7E9;
            font-weight: 800;
        }
    }
    .name span {
        font-weight: 600;
    }
}
@media screen and (max-width: 800px) {
    .cart-container {
        min-width: 100px;
    }
}
</style>
