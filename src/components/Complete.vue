<template>
    <div class="container">
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
