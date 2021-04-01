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
  user = new UserAccount('Clara', 2)

  created() {
    console.log(this.name)
  }

  mounted() {
    console.log(this.user.getAdmin('da', 0))
  }
}

// interface User {
//   name: string
//   id: number
// }

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }

  getAdmin(adminName: string, adminId: number): String {
    this.name = adminName
    this.id = adminId
    return `${this.name} + ${this.id}`
  }
}

</script>

<style scoped>

</style>
