<template>
    <div class="module">
        <div class="logo"><font-awesome-icon :icon="['fas', module.icon]" size="4x" :style="{ color: '#42b983' }"/></div>
        <div class="name">{{module.name}}</div>
        <div class="price">{{cart.currency}}{{module.price}}</div>
        <button class="btn-default btn-add" v-on:click="addModule(module)" v-if="!isInCart">Add</button>
        <button class="btn-default btn-remove" v-on:click="removeModule(module.name)" v-else>Remove</button>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    name: 'Module',
    props: ['module'],
    computed: {
        ...mapGetters(['cart']),
        isInCart() {
            return this.$store.getters.isInCart(this.module.name);
        }
    },
    methods: {
        ...mapMutations(['addModule', 'removeModule'])
    }
}
</script>

<style lang="less" scoped>
.module {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 300px;
    border: 1px solid #E1E7E9;
    border-radius: 16px;
    padding: 15px;
    margin-right: 30px;
    box-shadow: 0 0.5rem 1.25rem rgba(0,0,0,0.3);
    .logo {
        width: 100px;
        height: 100px;
        clip-path: circle(50% at 50% 50%);
        background-color: rgba(#42b983, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .name {
        font-weight: 600;
        color: #42b983;
    }
    .price {
        font-size: 40px;
    }
    
    .btn-add {
        border: 2px solid #42b983;
        background-color: white;
        color: #42b983;
        &:hover {
            color: white;
            background-color: #42b983;
            border: none;
        }
    }
    .btn-remove {
        border: 2px solid #FC4F4F;
        background-color: white;
        color: #FC4F4F;
        &:hover {
            color: white;
            background-color: #FC4F4F;
            border: none;
        }
    }
}
</style>
