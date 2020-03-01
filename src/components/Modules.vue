<template>
    <div class="modules-container container">
        <div class="background"></div>
        <div class="modules">
            <Module v-for="module in modules" v-bind:key="module.name" v-bind:module = "module" />
        </div>
        <div class="cart-box">
            <button class="btn-default" id="btn-back" v-on:click="Back()">
                Back
            </button>
            <Cart />
            <button class="btn-default" id="btn-checkout" v-on:click="Checkout()">Checkout</button>
        </div>
    </div>
</template>

<script>
import Cart from './Cart';
import Module from './Module';

export default {
    name: 'Modules',
    components: {
        Cart,
        Module
    },
    methods: {
        Back() {
            this.$router.push({path: '/'});
        },
        Checkout() {
            this.$router.push({path: 'complete'});
        }
    },
    data() {
        return {
            modules: [
                {
                    name: 'B2B Portal',
                    price: 99,
                    icon: 'store-alt'
                },
                {
                    name: 'BI Reporting',
                    price: 49,
                    icon: 'chart-line'
                },
                {
                    name: 'Advanced Shipping',
                    price: 149,
                    icon: 'shipping-fast'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.modules-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .modules {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cart-box {
        box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.3);
        padding: 20px;
        border-radius: 16px;
        background-color: white;
        #btn-back {
            margin-bottom: 30px;
            width: 100%;
        }
        #btn-checkout {
            margin-top: 30px;
            width: 100%;
            background-color: #42b983;
            color: white;
            border: none;
            &:hover {
                background-color: #2faa73;
            }
        }
    }
    .background {
        background: linear-gradient(45deg, #59da9f 15%, #42b983 40%);
        clip-path: polygon(0 15vh, 100% 80vh, 100% 100vh, 0 100vh);
    }
}

@media screen and (max-width: 1500px) {
    .modules-container {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .cart-box {
        width: 100%;
        margin-top: 60px;
    }
}
</style>
