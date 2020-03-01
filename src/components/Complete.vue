<template>
    <div class="container">
        <div class="background"></div>
        <div class="success">
            <font-awesome-icon :icon="['far', 'check-circle']" size="4x" :style="{ color: '#42b983' }"/>
            <h1>Thank you for subscribing!</h1>
        </div>
        <Cart />
    </div>
</template>

<script>
import Cart from './Cart'
export default {
    name: 'Complete',
    components: {
        Cart
    }
}
</script>

<style lang="less" scoped>
.container {
    max-width: 600px;
    .background {
        background: linear-gradient(20deg, rgb(248, 86, 86) 15%, #FC4F4F 40%);
        clip-path: polygon(0 70vh, 100% 30vh, 100% 100vh, 0 100vh);
    }
    .cart-container {
        border: none;
        box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.3);
    }
}
.success {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    h1 {
        margin-left: 10px;
    }
    
}
</style>
