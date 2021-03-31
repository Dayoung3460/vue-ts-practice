<template>
  <div>
    hello2 {{ sayHi('ccccc') }}
  </div>
</template>

<script lang="ts">
import HelloWorld from './HelloWorld.vue'
import { Component } from 'vue-property-decorator';

@Component
export default class Hello2 extends HelloWorld {
  created() {
    console.log(this.name)
  }
}
</script>

<style scoped>

</style>
