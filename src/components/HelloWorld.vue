<template>
  <div class="hello">
    <h1>{{ state.computedAge }}</h1>
    <p>
      {{ state.age }}
    </p>
    <div @click="state.setAge">add .</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Observer } from 'mobx-vue';
import UserModel from '../store/user';

@Observer
@Component
export default class HelloWorld extends Vue {
  state:Object = new UserModel();
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
