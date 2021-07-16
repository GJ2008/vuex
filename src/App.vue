<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{cartName}}</p>
  <p>{{bbbName}}</p>
  <p>{{productName}}</p>

  <button @click="saveCartAction('aaa')">cart</button>
  <button @click="saveBbbAction('b2b2bb2')">product</button>
  <button @click="saveProductAction('p2p2p2p')">bbb</button>
  <button @click="saveCartMutation('aaa')">cart</button>
  <button @click="saveBbbMutation('b2b2bb2')">product</button>
  <button @click="saveProductMutation('p2p2p2p')">bbb</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapActions, mapState, mapMutations} from 'vuex'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      cartName: (state)=>state.cart.name,
      productName: (state)=>state.products.name,
      bbbName: (state)=>state.cart.bbb.name
    })
  },
  methods: {
    ...mapActions({
      saveCartAction: 'cart/saveName',
      saveBbbAction: 'cart/bbb/saveName',
      saveProductAction: 'products/saveName'
    }),
    ...mapMutations({
      saveCartMutation: 'cart/SAVE_NAME',
      saveBbbMutation: 'cart/bbb/SAVE_NAME',
      saveProductMutation: 'products/SAVE_NAME'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
