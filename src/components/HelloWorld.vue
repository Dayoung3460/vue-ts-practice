<template>
  <div>
    <div @click="sayHi('Dayoung')">
      {{ name }}
    </div>
    <button @click="$router.push({ name: 'Hello2' })">go to hello2</button>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  name = 'Clara'
  sayHi(someone: string) {
    this.name = 'Hello ' + someone
  }
}
</script>

<style scoped>

</style>
