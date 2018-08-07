<template>
  <div class="home">
    <img src="../assets/logo.png">
    <cart />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cart from '@/components/cart.vue'; // @ is an alias to /src

@Component({
    components: {
    Cart,
    },
    })
export default class Home extends Vue {}
</script>
