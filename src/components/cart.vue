<template>
  <div class="hello">
    <h1>{{ state.cart.price }}</h1>
    <h2>{{ state.cart.name }}</h2>
    <input v-model="state.cart.name" />
    <div @click="state.add">add .</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import CartView from '../store/cart';


@Observer
@Component
export default class HelloWorld extends Vue {
  state = new CartView();
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
