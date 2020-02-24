<template>
    <div class="module">
        <div class="name">{{module.name}}</div>
        <div class="logo"><font-awesome-icon :icon="['fas', module.icon]" size="4x" :style="{ color: '#FC4F4F' }"/></div>
        <div class="price">{{cart.currency}}{{module.price}}</div>
        <button class="btn-default btn-subscribe" v-on:click="addModule(module)" v-if="!isInCart">Add</button>
        <button class="btn-default" v-on:click="removeModule(module.name)" v-else>Remove</button>
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
    height: 250px;
    border: 1px solid #E1E7E9;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
    .price {
        font-size: 40px;
    }
}
</style>
